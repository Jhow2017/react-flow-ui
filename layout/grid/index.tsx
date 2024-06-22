/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'

import type { DsGridType } from './types'

import ComponentMounter from '../../core/utils/component-mounter'

const DsGrid: React.FC<DsGridType> = forwardRef((props, ref) => {
  const { children, ...attr } = props
  const {
    templateColumns,
    templateRows,
    templateAreas,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    column,
    row,
    justify,
    align,
    area
  } = attr

  attr.display = attr.display || 'grid'
  attr.gridTemplateColumns = templateColumns || attr.gridTemplateColumns
  attr.gridTemplateRows = templateRows || attr.gridTemplateRows
  attr.gridTemplateAreas = templateAreas || attr.gridTemplateAreas
  attr.gridColumnStart = columnStart || attr.gridColumnStart
  attr.gridColumnEnd = columnEnd || attr.gridColumnEnd
  attr.gridRowStart = rowStart || attr.gridRowStart
  attr.gridRowEnd = rowEnd || attr.gridRowEnd
  attr.gridColumn = column || attr.gridColumn
  attr.gridRow = row || attr.gridRow
  attr.gridArea = area || attr.gridArea
  attr.alignSelf = align || attr.alignSelf
  attr.justifySelf = justify || attr.justifySelf

  return (
    <ComponentMounter as={attr.as || 'div'} ref={ref} {...attr}>
      {children}
    </ComponentMounter>
  )
})

export default DsGrid
