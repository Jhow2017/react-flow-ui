const getCssNameFromMinified = (minifiedName: string): string => {
  if (minifiedName === 'm') return 'margin'
  if (minifiedName === 'mt') return 'marginTop'
  if (minifiedName === 'ml') return 'marginLeft'
  if (minifiedName === 'mb') return 'marginBottom'
  if (minifiedName === 'mr') return 'marginRight'
  if (minifiedName === 'p') return 'padding'
  if (minifiedName === 'pt') return 'paddingTop'
  if (minifiedName === 'pl') return 'paddingLeft'
  if (minifiedName === 'pb') return 'paddingBottom'
  if (minifiedName === 'pr') return 'paddingRight'
  if (minifiedName === 'w') return 'width'
  if (minifiedName === 'minW') return 'minWidth'
  if (minifiedName === 'maxW') return 'maxWidth'
  if (minifiedName === 'h') return 'height'
  if (minifiedName === 'minH') return 'minHeight'
  if (minifiedName === 'maxH') return 'maxHeight'
  if (minifiedName === 'bgColor') return 'backgroundColor'
  if (minifiedName === 'bg') return 'background'
  if (minifiedName === 'bgImage') return 'backgroundImage'
  if (minifiedName === 'bgSize') return 'backgroundSize'
  if (minifiedName === 'bgPosition') return 'backgroundPosition'
  if (minifiedName === 'bgRepeat') return 'backgroundRepeat'
  if (minifiedName === 'bgAttachment') return 'backgroundAttachment'

  return 'not-found'
}

export default getCssNameFromMinified
