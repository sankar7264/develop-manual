const rem = (pixels) => {
  if (pixels.endsWith('px')) {
    pixels = parseFloat(pixels.slice(0, -2))
  }
  return `${pixels / 16}rem`
}
export default rem
