export function dateSortDesc(a, b) {
  if (parseInt(a) > parseInt(b)) return -1
  if (parseInt(a) < parseInt(b)) return 1
  return 0
}
export function dateSortAsc(a, b) {
  if (parseInt(a) < parseInt(b)) return -1
  if (parseInt(a) > parseInt(b)) return 1
  return 0
}
export function sortPostsBySlug(allBlogs) {
  return allBlogs.sort((a, b) => dateSortDesc(a.slug, b.slug))
}
export function sortPostsByCategoryOrder(allBlogs) {
  return allBlogs.sort((a, b) => dateSortAsc(a.slug, b.slug))
}

export function sortedBlogPost(allBlogs) {
  return sortPostsBySlug(allBlogs)
}
