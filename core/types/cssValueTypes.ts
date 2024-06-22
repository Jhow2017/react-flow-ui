type GlobalColors =
  | 'primary-primary-6'
  | 'var(--lavenderPurple)'
  | 'var(--pureLilac)'
  | 'var(--brightLilac)'
  | 'var(--softOrchid)'
  | 'var(--pureWhite)'
  | 'var(--white)'
  | 'var(--black)'
  | 'var(--amethystDeep)'
  | 'var(--silverFrost)'
  | 'var(--midnightBlue)'
  | 'var(--twilightBlue)'
  | 'var(--slateGray)'
  | 'var(--duskBlue)'
  | 'var(--midnightSky)'
  | 'var(--twilightHaze)'
  | 'var(--lilacMist)'
  | 'var(--clearSkyBlue)'
  | 'var(--actionBlue)'
  | 'var(--error)'
  | 'var(--disabled)'
  | 'var(--inactive)'

export type GlobalValues = 'inherit' | 'initial' | 'revert' | 'unset' | 'auto'

export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none'
  | 'table'
  | GlobalValues

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | GlobalValues

export type ListStyle =
  | 'none'
  | 'disc'
  | 'circle'
  | 'square'
  | 'decimal'
  | 'decimal-leading-zero'
  | 'lower-roman'
  | 'upper-roman'
  | 'lower-greek'
  | 'lower-latin'
  | 'upper-latin'
  | 'armenian'
  | 'georgian'
  | 'lower-alpha'
  | 'upper-alpha'
  | 'none'
  | GlobalValues

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | GlobalValues

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | GlobalValues

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalValues

export type JustifySelf =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | GlobalValues

export type AlignSelf =
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch'
  | GlobalValues

export type Overflow = 'visible' | 'hidden' | 'scroll' | 'clip' | GlobalValues

export type Position =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'
  | GlobalValues

export type PointerEvents =
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | GlobalValues

export type Cursor =
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'all-scroll'
  | 'col-resize'
  | 'row-resize'
  | 'zoom-in'
  | 'zoom-out'
  | GlobalValues

export type LetterSpacing = 'normal' | string | GlobalValues

export type TextDecoration =
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink'
  | GlobalValues

export type TextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | GlobalValues

export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end'
  | 'justify-all'
  | 'match-parent'
  | GlobalValues

export type LineHeight = 'normal' | string | GlobalValues

export type FontFamily =
  | 'var(--primaryFont)'
  | 'var(--secondaryFont)'
  | GlobalValues

export type FontWeight =
  | 'normal'
  | 'semi-bold'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | GlobalValues

export type Size = 'max-content' | 'min-content' | string | GlobalValues

export type Transform =
  | `matrix(${string})`
  | `matrix3d(${string})`
  | `translate(${string})`
  | `translate3d(${string})`
  | `translateX(${string})`
  | `translateY(${string})`
  | `translateZ(${string})`
  | `scale(${string})`
  | `scale3d(${string})`
  | `scaleX(${string})`
  | `scaleY(${string})`
  | `scaleZ(${string})`
  | `rotate(${string})`
  | `rotate3d(${string})`
  | `rotateX(${string})`
  | `rotateY(${string})`
  | `rotateZ(${string})`
  | `skew(${string})`
  | `skewX(${string})`
  | `skewY(${string})`
  | `perspective(${string})`
  | string
  | GlobalValues

export type PlaceContent = 'center' | 'start' | 'end' | GlobalValues

export type Color = GlobalColors | GlobalValues

export type BackgroundColor = GlobalColors | GlobalValues

export type BackgroundAttachment = 'scroll' | 'fixed' | 'local' | GlobalValues

export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | GlobalValues

export type BackgroundSize = 'cover' | 'contain' | GlobalValues

export type ObjectFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | GlobalValues

export type Visibility = 'visible' | 'hidden' | GlobalValues

export type Global = string | GlobalValues
