const getDashFromCamel = (camelCaseString: string): string => {
  return camelCaseString.replace(/([A-Z])/g, $1 => {
    return '-' + $1.toLowerCase()
  })
}

export default getDashFromCamel
