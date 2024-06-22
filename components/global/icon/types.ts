import React from 'react'
import type { ComponentType } from '../../../core/types/componentType'

//types
import type {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  SVGProps
} from 'react'
import type { Color } from '@ds/core/types/cssValueTypes'

export type SizeTypes =
  | 'xxlarge'
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall'

export type DsIconSvgType =
  | 'minus'
  | 'plus'
  | 'close'
  | 'close-small'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-right'
  | 'chevron-left'
  | 'sort-up'
  | 'sort-down'
  | 'check'
  | 'check-ok'
  | 'check-full'
  | 'shield-check'
  | 'shield-check-full'
  | 'star-outline'
  | 'star'
  | 'lock'
  | 'lock-open'
  | 'bell-on'
  | 'bell'
  | 'bell-price'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-down-into'
  | 'arrow-swap'
  | 'sign-out'
  | 'share'
  | 'arrow-to-bottom'
  | 'arrow-to-top'
  | 'send'
  | 'email-send-outline'
  | 'undo-variant'
  | 'arrow-expand'
  | 'arrow-contract'
  | 'arrow-swap-horizontal'
  | 'refresh'
  | 'arrow-swap-vertical'
  | 'update'
  | 'external'
  | 'search'
  | 'wallet-deposit'
  | 'wallet-withdraw'
  | 'wallet-money'
  | 'wallet'
  | 'calendar-range-outline'
  | 'calendar-check-outline'
  | 'trash-can-outline'
  | 'list'
  | 'statement'
  | 'news'
  | 'file-document-outline'
  | 'file-upload-outline'
  | 'copy'
  | 'file-pdf'
  | 'mail'
  | 'lightbulb-outline'
  | 'api'
  | 'heart-outline'
  | 'heart-full'
  | 'rocket-launch-outline'
  | 'picture'
  | 'square-edit-outline'
  | 'edit'
  | 'new-post'
  | 'cube'
  | 'go-to-block'
  | 'transfer-tokens'
  | 'my-tokens'
  | 'tokens'
  | 'tokens-liqi'
  | 'overview'
  | 'private-profile'
  | 'user'
  | 'user-plus'
  | 'users'
  | 'users-plus'
  | 'user-circle'
  | 'eye-slash'
  | 'eye'
  | 'camera'
  | 'video'
  | 'phone-circle'
  | 'clock-money'
  | 'information'
  | 'clock'
  | 'crypto'
  | 'circle-money'
  | 'money-grow'
  | 'square-money'
  | 'money-dollar-sign'
  | 'square-money-full'
  | 'bank'
  | 'pix'
  | 'credit card'
  | 'tax'
  | 'panel'
  | 'megaphone'
  | 'comment-dots'
  | 'filter-variant'
  | 'bars'
  | 'settings'
  | 'question-clean'
  | 'alert'
  | 'options'
  | 'processing'
  | 'options-mobile'
  | 'ellipsis-circle'
  | 'exclamation-circle'
  | 'info-circle'
  | 'rights'
  | 'times-circle'
  | 'times-square'
  | 'check-square'
  | 'pause-square'
  | 'play-square'
  | 'exclamation-square'
  | 'moon'
  | 'sun'
  | 'share-options'
  | 'save'
  | 'link'
  | 'unlink-icon'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'bullet-icon'
  | 'list-ol'
  | 'align-left'
  | 'align-center'
  | 'align-right'
  | 'audio'
  | 'nft'
  | 'to-file'
  | 'backspace'
  | 'quote'
  | 'funnel'
  | 'paperclip'
  | 'filter'
  | 'reward'
  | 'camera-outline'
  | 'edit-board'
  | 'refund'
  | 'cashback'
  | 'archive'
  | 'archive-file'
  | 'cookie'
  | 'download-outline'
  | 'table-key'
  | 'trending-up'
  | 'trending-down'
  | 'chart'
  | 'invoice'
  | 'connection'
  | 'security-account'
  | 'step-completed'
  | 'step-active'
  | 'step-disable'
  | 'step-error'
  | 'alert-small'
  | 'question'
  | 'four-tokens'
  | 'exclamation'
  | 'liqi-logo'
  | 'money'
  | 'money-grow-medium'
  | 'question-balloon'
  | 'calendar'
  | 'business-person'
  | 'microphone'
  | 'shuffle'
  | 'persona'
  | 'token-family'
  | 'care-token'
  | 'active-token'
  | 'choose-assets'
  | 'prepayment-receivables'
  | 'token-frame'
  | 'garantee'
  | 'blog'
  | 'handler'
  | 'free-fees'
  | 'security'
  | 'search-large'
  | 'shield'
  | 'map-marker-alt'
  | 'garantee-ribbon'
  | 'social-impact'
  | 'token-sports'
  | 'money-transfer'
  | 'search-token'
  | 'news-large'
  | 'money-grow-medium-outline'
  | 'token-user'
  | 'exchange'
  | 'big-company'
  | 'art'
  | 'attention'
  | 'your-money'
  | 'site'
  | 'equity'
  | 'profit'
  | 'coins'
  | 'linkedin-box'
  | 'facebook-box'
  | 'instagram'
  | 'youtube-outline'
  | 'telegram'
  | 'whats-app'
  | 'wordpress'
  | 'twitter'
  | 'discord'
  | 'web'
  | 'facebook'
  | 'linkedin'
  | 'savings'
  | 'percentage'
  | 'purchase'
  | 'fire'
  | 'more'
  | 'add-reaction'
  | 'comment'
  | 'share-flat'
  | 'blush'
  | 'surprised'
  | 'sweat-grinning'
  | 'cool'
  | 'sleepy'
  | 'crying-with-laughter'
  | 'heart-eyes'
  | 'smile-eyes'
  | 'chats'
  | 'heart'
  | 'gallery'
  | 'gif'
  | 'smily'
  | 'house'
  | 'bell'
  | 'plus-solid-icon'
  | 'like'
  | 'comment-social'
  | 'delete'

export type IconProps = {
  size?: SizeTypes | string
  color?: Color | string
}

export type SvgComponentProps = {
  children?: ReactNode
} & IconProps &
  SVGProps<SVGSVGElement>

export type DsIconType = {
  children?: ReactNode
  size?: SizeTypes
  customSize?: string
  onClick?: (e: React.MouseEventHandler) => void
  icon: DsIconSvgType
} & ComponentType &
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
