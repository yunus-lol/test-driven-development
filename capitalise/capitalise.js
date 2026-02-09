export function capitalise(string) {
  return string.split("")[0].toUpperCase() + string.split("").slice(1).join("")
}