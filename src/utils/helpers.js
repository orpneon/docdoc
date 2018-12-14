export function cleanObject (obj) {
  return JSON.parse(JSON.stringify(obj))
}
