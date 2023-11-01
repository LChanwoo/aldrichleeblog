import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import getAllFilesRecursively from './utils/files';
import { bundleMDX } from 'contentlayer/core';
//remark
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import remarkMath from 'remark-math';

const root = process.cwd();

export function getFiles(type) {
    const prefixPaths = path.join(root, 'data', type);
    const files = getAllFilesRecursively(prefixPaths);
    return files.map((file) => file.slice(prefixPaths.length+1).replace(/\\/g, '/'));
}

export function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '');
}

export async function getFileBySlug(type, slug) {
    const mdxPath = path.join(root, 'data', type, `${slug}.mdx`);
    const mdPath = path.join(root, 'data', type, `${slug}.md`);
    const source = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, 'utf8') : fs.readFileSync(mdPath, 'utf8');
    if(process.platform === 'win32'){
        process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe');
    }else{
        process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');
    }
    let toc =[];

    const { code, frontMatter } = await bundleMDX(source, {
        cwd: path.join(root , 'components'),
        xdmOptions(options){
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
                [remarkFootnotes, { inlineNotes: true }],
                remarkMath,
            ];
            return options;
        },
        esbuildOptions: (options) => {
            options.loader = {
                ...options.loader,
                '.js': 'jsx',
            };
            return options;
        },
        extendFrontMatter: {
            process: (mdxContent) => {
                const { data } = matter(mdxContent);
                if(data.toc){
                    toc = data.toc;
                }
                return data;
            },
        },
    });
}
