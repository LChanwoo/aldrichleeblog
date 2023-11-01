
export function dateSortDesc(a, b){
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}


export function sortPostsBySlug(allBlogs) {
  return allBlogs.sort((a, b) => dateSortDesc(a.slug, b.slug))
}
  
export function sortedBlogPost(allBlogs) {
  return sortPostsBySlug(allBlogs)
}

