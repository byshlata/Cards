export const translateObjKeyToString = (obj: any) => {
  const objString = { ...obj }
  for (let key in objString) {
    if (typeof objString[key] !== 'string') {
      objString[key] = objString[key].toString()
    }
  }
  console.log(objString)
  return objString
}
