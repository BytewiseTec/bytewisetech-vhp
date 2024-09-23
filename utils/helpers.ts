// Pad with 0
export const padWithZeros = (num: number, size: number): string => {
  let s = num + ''
  while (s.length < size) s = '0' + s
  return s
}
