import fs from 'fs';
import path from 'path';

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const flattenArray = (input) => 
    input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? flattenArray(item) : [item])], []);

const map = (fn) => (arr) => arr.map(fn);

const walkDir = (fullPath) => fs.statSync(fullPath).isFile() ? fullPath : walk(fullPath);

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath);

const getAllFilesRecursively = (forder) => 
    pipe(fs.readdirSync, map(pipe(pathJoinPrefix(forder), walkDir)), flattenArray)(forder);

export default getAllFilesRecursively;