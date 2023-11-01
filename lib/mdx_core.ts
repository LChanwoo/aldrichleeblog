
export const omit = (obj, keys) => {
    const result = Object.assign({}, obj)
    keys.forEach((key) => {
      delete result[key]
    })
    return result
  }
  
export function coreContent(content) {
return omit(content, ['body', '_raw', '_id'])
}
export function allCoreContent(contents) {
  return contents.map((c) => coreContent(c))
}