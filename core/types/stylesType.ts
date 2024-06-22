import { BreakpointProps } from '../../config'
import {
  AlignItems,
  AlignSelf,
  BackgroundAttachment,
  BackgroundColor,
  BackgroundRepeat,
  BackgroundSize,
  Color,
  Cursor,
  Display,
  FlexDirection,
  FlexWrap,
  FontFamily,
  FontWeight,
  Global,
  JustifyContent,
  JustifySelf,
  LetterSpacing,
  LineHeight,
  ListStyle,
  ObjectFit,
  Overflow,
  PlaceContent,
  PointerEvents,
  Position,
  Size,
  TextAlign,
  TextDecoration,
  TextTransform,
  Transform,
  Visibility
} from './cssValueTypes'

interface StylesType {
  // margin
  margin?: BreakpointProps<Global> | Global
  m?: BreakpointProps<Global> | Global
  marginTop?: BreakpointProps<Global> | Global
  mt?: BreakpointProps<Global> | Global
  marginRight?: BreakpointProps<Global> | Global
  mr?: BreakpointProps<Global> | Global
  marginBottom?: BreakpointProps<Global> | Global
  mb?: BreakpointProps<Global> | Global
  marginLeft?: BreakpointProps<Global> | Global
  ml?: BreakpointProps<Global> | Global

  // padding
  padding?: BreakpointProps<Global> | Global
  p?: BreakpointProps<Global> | Global
  paddingTop?: BreakpointProps<Global> | Global
  pt?: BreakpointProps<Global> | Global
  paddingRight?: BreakpointProps<Global> | Global
  pr?: BreakpointProps<Global> | Global
  paddingBottom?: BreakpointProps<Global> | Global
  pb?: BreakpointProps<Global> | Global
  paddingLeft?: BreakpointProps<Global> | Global
  pl?: BreakpointProps<Global> | Global

  // display
  display?: BreakpointProps<Display> | Display

  // flexbox
  alignItems?: BreakpointProps<AlignItems> | AlignItems
  justifyContent?: BreakpointProps<JustifyContent> | JustifyContent
  flexDirection?: BreakpointProps<FlexDirection> | FlexDirection
  flexWrap?: BreakpointProps<FlexWrap> | FlexWrap
  flex?: BreakpointProps<Global> | Global

  // grid
  gridTemplateColumns?: BreakpointProps<Global> | Global
  gridTemplateRows?: BreakpointProps<Global> | Global
  gridTemplateAreas?: BreakpointProps<Global> | Global
  gridColumnStart?: BreakpointProps<Global> | Global
  gridColumnEnd?: BreakpointProps<Global> | Global
  gridRowStart?: BreakpointProps<Global> | Global
  gridRowEnd?: BreakpointProps<Global> | Global
  gridColumn?: BreakpointProps<Global> | Global
  gridRow?: BreakpointProps<Global> | Global
  gridArea?: BreakpointProps<Global> | Global
  justifySelf?: BreakpointProps<JustifySelf> | JustifySelf
  alignSelf?: BreakpointProps<AlignSelf> | AlignSelf
  placeContent?: BreakpointProps<PlaceContent> | PlaceContent

  // color and background
  backgroundColor?: BreakpointProps<BackgroundColor> | BackgroundColor
  bgColor?: BreakpointProps<BackgroundColor> | BackgroundColor
  background?: BreakpointProps<Global> | Global
  bg?: BreakpointProps<Global> | Global
  backgroundImage?: BreakpointProps<Global> | Global
  bgImage?: BreakpointProps<Global> | Global
  backgroundSize?: BreakpointProps<BackgroundSize> | BackgroundSize
  bgSize?: BreakpointProps<BackgroundSize> | BackgroundSize
  backgroundPosition?: BreakpointProps<Global> | Global
  bgPosition?: BreakpointProps<Global> | Global
  backgroundRepeat?: BreakpointProps<BackgroundRepeat> | BackgroundRepeat
  bgRepeat?: BreakpointProps<BackgroundRepeat> | BackgroundRepeat
  backgroundAttachment?:
    | BreakpointProps<BackgroundAttachment>
    | BackgroundAttachment
  bgAttachment?: BreakpointProps<BackgroundAttachment> | BackgroundAttachment
  color?: BreakpointProps<Color> | Color
  opacity?: BreakpointProps<Global> | Global
  visibility?: BreakpointProps<Visibility> | Visibility

  // border
  border?: BreakpointProps<Global> | Global
  borderTop?: BreakpointProps<Global> | Global
  borderRight?: BreakpointProps<Global> | Global
  borderBottom?: BreakpointProps<Global> | Global
  borderLeft?: BreakpointProps<Global> | Global
  borderRadius?: BreakpointProps<Global> | Global
  borderColor?: BreakpointProps<Color> | Color
  outline?: BreakpointProps<Global> | Global

  // sizes
  width?: BreakpointProps<Size> | Size
  w?: BreakpointProps<Size> | Size
  minWidth?: BreakpointProps<Size> | Size
  minW?: BreakpointProps<Size> | Size
  maxWidth?: BreakpointProps<Size> | Size
  maxW?: BreakpointProps<Size> | Size
  height?: BreakpointProps<Size> | Size
  h?: BreakpointProps<Size> | Size
  minHeight?: BreakpointProps<Size> | Size
  minH?: BreakpointProps<Size> | Size
  maxHeight?: BreakpointProps<Size> | Size
  maxH?: BreakpointProps<Size> | Size

  // font
  fontSize?: BreakpointProps<Global> | Global
  fontFamily?: BreakpointProps<FontFamily> | FontFamily
  fontWeight?: BreakpointProps<FontWeight> | FontWeight
  lineHeight?: BreakpointProps<LineHeight> | LineHeight
  textAlign?: BreakpointProps<TextAlign> | TextAlign
  textTransform?: BreakpointProps<TextTransform> | TextTransform
  textDecoration?: BreakpointProps<TextDecoration> | TextDecoration
  letterSpacing?: BreakpointProps<LetterSpacing> | LetterSpacing

  // cursor
  cursor?: BreakpointProps<Cursor> | Cursor
  pointerEvents?: BreakpointProps<PointerEvents> | PointerEvents

  // positioning
  left?: BreakpointProps<Global> | Global
  right?: BreakpointProps<Global> | Global
  top?: BreakpointProps<Global> | Global
  bottom?: BreakpointProps<Global> | Global
  position?: BreakpointProps<Position> | Position
  overflow?: BreakpointProps<Overflow> | Overflow
  zIndex?: BreakpointProps<Global> | Global

  // animation
  transition?: BreakpointProps<Global> | Global

  // others
  transform?: BreakpointProps<Transform> | Transform
  boxShadow?: BreakpointProps<Global> | Global
  gap?: BreakpointProps<Global> | Global
  objectFit?: BreakpointProps<ObjectFit> | ObjectFit
  listStyle?: BreakpointProps<ListStyle> | ListStyle
}

export type { StylesType }
