export const isEmptyObject = <T>(Obj: {}): boolean => {
  return Object.keys(Obj).length === 0
}
