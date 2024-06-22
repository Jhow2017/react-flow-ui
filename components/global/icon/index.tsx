import { forwardRef } from 'react';
import ComponentMounter from '../../../core/utils/component-mounter';

//type
import { DsIconType } from './types';

const DsIcon: React.FC<DsIconType> = forwardRef((props, ref) => {
    const { icon, size, color, ...attr } = props;

    const iconSize: string =
        (size === 'xxlarge' && '56') ||
        (size === 'xlarge' && '48') ||
        (size === 'large' && '40') ||
        (size === 'medium' && '32') ||
        (size === 'small' && '24') ||
        (size === 'xsmall' && '16') ||
        '24';
    const iconColor = (color as string) || 'var(--tagGrey)';
    const xmlns = 'http://www.w3.org/2000/svg';

    return (
        <ComponentMounter
            as={attr.as || 'div'}
            ref={ref}
            _styles={{
                flex: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0',
                width:
                    (size === 'xxlarge' && '56px') ||
                    (size === 'xlarge' && '48px') ||
                    (size === 'large' && '40px') ||
                    (size === 'medium' && '32px') ||
                    (size === 'small' && '24px') ||
                    (size === 'xsmall' && '16px') ||
                    '24px',
                height:
                    (size === 'xxlarge' && '56px') ||
                    (size === 'xlarge' && '48px') ||
                    (size === 'large' && '40px') ||
                    (size === 'medium' && '32px') ||
                    (size === 'small' && '24px') ||
                    (size === 'xsmall' && '16px') ||
                    '24px',
                ...attr,
            }}
            {...attr}
        >
            {/* plus */}
            {icon === 'plus' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M6 12H18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 18L12 6" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* minus */}
            {icon === 'minus' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M6 12H18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* close */}
            {icon === 'close' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M6 6L18 18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 18L18 6" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* close-small */}
            {icon === 'close-small' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M7 7L16 16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 16L16 7" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* chevron-up */}
            {icon === 'chevron-up' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7682 14.6402C18.4146 15.0644 17.7841 15.1218 17.3598 14.7682L12 10.3017L6.64016 14.7682C6.21588 15.1218 5.58532 15.0644 5.23175 14.6402C4.87819 14.2159 4.93551 13.5853 5.35979 13.2318L11.3598 8.23175C11.7306 7.92271 12.2693 7.92271 12.6402 8.23175L18.6402 13.2318C19.0644 13.5853 19.1218 14.2159 18.7682 14.6402Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* chevron-down */}
            {icon === 'chevron-down' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.2318 9.35984C5.58537 8.93556 6.21593 8.87824 6.64021 9.2318L12 13.6983L17.3598 9.2318C17.7841 8.87824 18.4147 8.93556 18.7682 9.35984C19.1218 9.78412 19.0645 10.4147 18.6402 10.7682L12.6402 15.7682C12.2694 16.0773 11.7307 16.0773 11.3598 15.7682L5.35984 10.7682C4.93556 10.4147 4.87824 9.78412 5.2318 9.35984Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* chevron-right */}
            {icon === 'chevron-right' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.85984 18.2682C8.43556 17.9146 8.37824 17.2841 8.7318 16.8598L13.1983 11.5L8.7318 6.14016C8.37824 5.71588 8.43556 5.08532 8.85984 4.73175C9.28412 4.37819 9.91468 4.43551 10.2682 4.85979L15.2682 10.8598C15.5773 11.2306 15.5773 11.7693 15.2682 12.1402L10.2682 18.1402C9.91468 18.5644 9.28412 18.6218 8.85984 18.2682Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* chevron-left */}
            {icon === 'chevron-left' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1402 5.7318C15.5644 6.08537 15.6218 6.71593 15.2682 7.14021L10.8017 12.5L15.2682 17.8598C15.6218 18.2841 15.5644 18.9147 15.1402 19.2682C14.7159 19.6218 14.0853 19.5645 13.7318 19.1402L8.73175 13.1402C8.42271 12.7694 8.42271 12.2307 8.73175 11.8598L13.7318 5.85984C14.0853 5.43556 14.7159 5.37824 15.1402 5.7318Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* sort-up */}
            {icon === 'sort-up' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 15C15.4044 15 15.7691 14.7564 15.9238 14.3827C16.0786 14.009 15.9931 13.5789 15.7071 13.2929L12.7071 10.2929C12.3165 9.90237 11.6834 9.90237 11.2929 10.2929L8.29286 13.2929C8.00686 13.5789 7.9213 14.009 8.07608 14.3827C8.23086 14.7564 8.5955 15 8.99996 15L15 15Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* sort-down */}
            {icon === 'sort-down' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.00004 9C8.59557 9 8.23094 9.24364 8.07616 9.61732C7.92138 9.99099 8.00693 10.4211 8.29293 10.7071L11.2929 13.7071C11.6835 14.0976 12.3166 14.0976 12.7071 13.7071L15.7071 10.7071C15.9931 10.4211 16.0787 9.99099 15.9239 9.61732C15.7691 9.24364 15.4045 9 15 9H9.00004Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* check */}
            {icon === 'check' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M5 12.2L8.9 16.1L18 7"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* check-ok */}
            {icon === 'check-ok' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12" r="8" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M8 12.0045L10.5057 14.2955L15.1591 10"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* check-full */}
            {icon === 'check-full' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47716 17.5228 2 12 2C6.47716 2 2 6.47716 2 12C2 17.5228 6.47716 22 12 22ZM16.666 10.3487C17.078 9.98089 17.1138 9.34874 16.7459 8.93677C16.3781 8.5248 15.746 8.48902 15.334 8.85685L10.451 13.2167L8.21899 10.9078C7.83514 10.5107 7.20206 10.4999 6.80498 10.8838C6.40789 11.2676 6.39716 11.9007 6.78101 12.2978L9.68101 15.2978C10.0542 15.6838 10.6655 15.7063 11.066 15.3487L16.666 10.3487Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* shield-check */}
            {icon === 'shield-check' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19 6C16 6 13 4 12 3C11 4 8.2 6 5 6C5 10 4 17.5 12 20C19 17.5 19 13 19 6Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 12.2857L10.8 14L15 10"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* shield-check-full */}
            {icon === 'shield-check-full' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19 6C16 6 13 4 12 3C11 4 8.2 6 5 6C5 10 4 17.5 12 20C19 17.5 19 13 19 6Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.72726 11.1636L11.2329 13.4545L15.8864 9.15906"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* star-outline */}
            {icon === 'star-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M12 4L14.645 9.35942L20.5595 10.2188L16.2798 14.3906L17.2901 20.2812L12 17.5L6.70993 20.2812L7.72025 14.3906L3.44049 10.2188L9.35497 9.35942L12 4Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* star */}
            {icon === 'star' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M12 4L14.645 9.35942L20.5595 10.2188L16.2798 14.3906L17.2901 20.2812L12 17.5L6.70993 20.2812L7.72025 14.3906L3.44049 10.2188L9.35497 9.35942L12 4Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* lock */}
            {icon === 'lock' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M17 10V8C17 5.23858 14.7614 3 12 3V3C9.23858 3 7 5.23858 7 8V10"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <rect x="5" y="11" width="14" height="10" rx="1" stroke={iconColor} strokeWidth="2" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8711 17.3924C12.8025 16.9422 13.0707 16.52 13.3898 16.195C13.7146 15.8639 13.913 15.4221 13.913 14.9368C13.913 13.9103 13.0254 13.0781 11.9304 13.0781C10.8354 13.0781 9.94778 13.9103 9.94778 14.9368C9.94778 15.4221 10.1462 15.864 10.4711 16.195C10.7901 16.5201 11.0584 16.9422 10.9898 17.3925L10.9162 17.8752C10.824 18.4806 11.2925 19.0259 11.9048 19.0259H11.9561C12.5684 19.0259 13.0369 18.4806 12.9447 17.8752L12.8711 17.3924Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* lock-open */}
            {icon === 'lock-open' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2 10C2 10.5523 2.44772 11 3 11C3.55228 11 4 10.5523 4 10H2ZM11 7.5V10H13V7.5H11ZM4 10V7.5H2V10H4ZM7.5 4C9.433 4 11 5.567 11 7.5H13C13 4.46243 10.5376 2 7.5 2V4ZM7.5 2C4.46243 2 2 4.46243 2 7.5H4C4 5.567 5.567 4 7.5 4V2Z"
                        fill={iconColor}
                    />
                    <rect x="9" y="11" width="12" height="10" rx="1" stroke={iconColor} strokeWidth="2" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8711 17.3924C15.8025 16.9422 16.0707 16.52 16.3897 16.195C16.7146 15.8639 16.913 15.4221 16.913 14.9368C16.913 13.9103 16.0253 13.0781 14.9304 13.0781C13.8354 13.0781 12.9478 13.9103 12.9478 14.9368C12.9478 15.4221 13.1461 15.864 13.471 16.195C13.7901 16.5201 14.0584 16.9422 13.9897 17.3925L13.9162 17.8752C13.8239 18.4806 14.2925 19.0259 14.9048 19.0259H14.9561C15.5684 19.0259 16.0369 18.4806 15.9446 17.8752L15.8711 17.3924Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* bell-on */}
            {icon === 'bell-on' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18 14.5C18 16 18.5 17.5 20 18H4C5.5 17.5 6 16 6 14.5V11C6 8.5 7.5 6 12 6C16.5 6 18 8.5 18 11V14.5Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V6H13V4Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 22C14 22 14 21 14 21L10 21C10 21 10 22 12 22Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="18" cy="9" r="4" fill="#EC105F" />
                </svg>
            )}
            {/* bell */}
            {icon === 'bell' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18 14.5C18 16 18.5 17.5 20 18H4C5.5 17.5 6 16 6 14.5V11C6 8.5 7.5 6 12 6C16.5 6 18 8.5 18 11V14.5Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V6H13V4Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 22C14 22 14 21 14 21L10 21C10 21 10 22 12 22Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* bell-price */}
            {icon === 'bell-price' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M16.3 13.5C16.3 15 16.8 16.5 18.3 17H2.3C3.8 16.5 4.3 15 4.3 13.5V10C4.3 7.5 5.8 5 10.3 5C14.8 5 16.3 7.5 16.3 10V13.5Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.3 3C11.3 2.44772 10.8523 2 10.3 2C9.74772 2 9.3 2.44772 9.3 3V5H11.3V3Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.3 21C12.3 21 12.3 20 12.3 20L8.3 20C8.3 20 8.3 21 10.3 21Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect x="11.0756" y="8.80115" width="11.2022" height="11.2313" rx="5.60109" fill={iconColor} />
                    <path
                        d="M17.9853 12.6416C18.199 12.8804 18.5659 12.9008 18.8048 12.6871C19.0437 12.4734 19.064 12.1065 18.8503 11.8676L17.9853 12.6416ZM16.8702 14.4167L16.6458 14.952L16.8702 14.4167ZM15.3084 15.9179C15.0628 15.712 14.6968 15.7442 14.4908 15.9898C14.2849 16.2355 14.3172 16.6015 14.5628 16.8074L15.3084 15.9179ZM16.6767 17.0816L16.6921 16.5014L16.6767 17.0816ZM16.0964 18.0924C16.0964 18.4129 16.3562 18.6727 16.6767 18.6727C16.9972 18.6727 17.2571 18.4129 17.2571 18.0924H16.0964ZM17.4505 10.7411C17.4505 10.4206 17.1907 10.1607 16.8702 10.1607C16.5496 10.1607 16.2898 10.4206 16.2898 10.7411H17.4505ZM17.9046 16.6598L17.5001 16.2436L17.9046 16.6598ZM17.5497 14.7695L17.8743 14.2884L17.5497 14.7695ZM18.8503 11.8676C18.5763 11.5614 17.8488 11.0256 16.8702 11.0256V12.1863C17.4392 12.1863 17.8724 12.5154 17.9853 12.6416L18.8503 11.8676ZM16.8702 11.0256C15.6323 11.0256 14.7422 11.8863 14.7422 12.9032H15.9029C15.9029 12.6229 16.1735 12.1863 16.8702 12.1863V11.0256ZM14.7422 12.9032C14.7422 13.427 14.9856 13.8491 15.339 14.1768C15.6787 14.4916 16.1386 14.7394 16.6458 14.952L17.0945 13.8815C16.6345 13.6887 16.3206 13.504 16.1282 13.3256C15.9496 13.16 15.9029 13.0281 15.9029 12.9032H14.7422ZM16.6921 16.5014C16.2968 16.491 15.8049 16.334 15.3084 15.9179L14.5628 16.8074C15.242 17.3767 15.9814 17.6438 16.6614 17.6618L16.6921 16.5014ZM16.0964 17.0816V18.0924H17.2571V17.0816H16.0964ZM17.4505 11.6059V10.7411H16.2898V11.6059H17.4505ZM17.5001 16.2436C17.3531 16.3865 17.0753 16.5116 16.6921 16.5014L16.6614 17.6618C17.2972 17.6786 17.8981 17.4754 18.3091 17.076L17.5001 16.2436ZM16.6458 14.952C16.8789 15.0497 17.0716 15.147 17.2251 15.2506L17.8743 14.2884C17.6333 14.1258 17.3642 13.9945 17.0945 13.8815L16.6458 14.952ZM17.2251 15.2506C17.7752 15.6218 17.6781 16.0706 17.5001 16.2436L18.3091 17.076C19.1106 16.297 18.9197 14.9938 17.8743 14.2884L17.2251 15.2506Z"
                        fill="white"
                    />
                </svg>
            )}
            {/* arrow-right */}
            {icon === 'arrow-right' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.5 18L18 11.5L11.5 5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 11.4651L18 11.4651"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-left */}
            {icon === 'arrow-left' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.5 5L5 11.5L11.5 18"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 11.5349L5 11.5349"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-down */}
            {icon === 'arrow-down' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6 12.5L12.5 19L19 12.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5349 7L12.5349 19"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-up */}
            {icon === 'arrow-up' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19 12.5L12.5 6L6 12.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.4651 18L12.4651 6"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-down-into */}
            {icon === 'arrow-down-into' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.10153 4.27171C6.50375 4.65018 6.52301 5.28305 6.14455 5.68527C4.81227 7.10118 4 8.99677 4 11.0811C4 15.4461 7.57317 19 12 19C16.4268 19 20 15.4461 20 11.0811C20 8.99677 19.1877 7.10118 17.8555 5.68527C17.477 5.28305 17.4963 4.65018 17.8985 4.27171C18.3007 3.89325 18.9336 3.91251 19.312 4.31473C20.9778 6.08511 22 8.46516 22 11.0811C22 16.5677 17.5143 21 12 21C6.4857 21 2 16.5677 2 11.0811C2 8.46516 3.02217 6.08511 4.68797 4.31473C5.06643 3.91251 5.6993 3.89325 6.10153 4.27171Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C12.5523 2 13 2.44772 13 3L13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L11 3C11 2.44772 11.4477 2 12 2Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9023 15.3166 10.9023 14.6834 11.2929 14.2929L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.29289 10.2929C7.68342 9.9024 8.31658 9.9024 8.70711 10.2929L12.7071 14.2929C13.0976 14.6834 13.0976 15.3166 12.7071 15.7071C12.3166 16.0977 11.6834 16.0977 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* arrow-swap */}
            {icon === 'arrow-swap' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M7.51105 14.1713V19.828H13.1678"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.4821 13.8568L7.51105 19.8279"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.5132 10.0547L16.5132 4.39792L10.8564 4.39792"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.5422 10.3691L16.5132 4.39807"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* sign-out */}
            {icon === 'sign-out' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M14 8V6C14 4.89543 13.1046 4 12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12C13.1046 20 14 19.1046 14 18V16"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.2427 9.24268L21 12L18.2427 14.7573"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 12H21"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* share */}
            {icon === 'share' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8 10L6 10C4.89543 10 4 10.8954 4 12L4 19C4 20.1046 4.89543 21 6 21L18 21C19.1046 21 20 20.1046 20 19L20 12C20 10.8954 19.1046 10 18 10L16 10"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 5.75732L11.7573 3L14.5146 5.75732"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.7573 14L11.7573 3"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-to-bottom */}
            {icon === 'arrow-to-bottom' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5C12.5523 5 13 5.44772 13 6L13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15L11 6C11 5.44772 11.4477 5 12 5Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071C10.9023 16.3166 10.9023 15.6834 11.2929 15.2929L16.2929 10.2929C16.6834 9.90237 17.3166 9.90237 17.7071 10.2929Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.29289 10.2929C6.68342 9.9024 7.31658 9.9024 7.70711 10.2929L12.7071 15.2929C13.0976 15.6834 13.0976 16.3166 12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* arrow-to-top */}
            {icon === 'arrow-to-top' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 19C11.4477 19 11 18.5523 11 18L11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9L13 18C13 18.5523 12.5523 19 12 19Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.29292 13.7071C5.9024 13.3166 5.9024 12.6834 6.29292 12.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.2929C13.0977 7.68342 13.0977 8.31658 12.7071 8.70711L7.70714 13.7071C7.31661 14.0976 6.68345 14.0976 6.29292 13.7071Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7071 13.7071C17.3166 14.0976 16.6834 14.0976 16.2929 13.7071L11.2929 8.70708C10.9024 8.31655 10.9024 7.68339 11.2929 7.29286C11.6834 6.90234 12.3166 6.90234 12.7071 7.29286L17.7071 12.2929C18.0976 12.6834 18.0976 13.3166 17.7071 13.7071Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 5C21 5.55228 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5C3 4.44771 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* email-send-outline */}
            {icon === 'email-send-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.5 18H5C3.89543 18 3 17.1046 3 16V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V13"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M4 6L10.5858 12.5858C11.3668 13.3668 12.6332 13.3668 13.4142 12.5858L20 6"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path d="M15 18H20.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M18.5 20.5L21 18L18.5 15.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* undo-variant */}
            {icon === 'undo-variant' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.5 7C15.2239 7 16.8772 7.68482 18.0962 8.90381C19.3152 10.1228 20 11.7761 20 13.5C20 15.2239 19.3152 16.8772 18.0962 18.0962C16.8772 19.3152 15.2239 20 13.5 20H11C10.4477 20 10 19.5523 10 19C10 18.4477 10.4477 18 11 18H13.5C16 18 18 16 18 13.5C18 11 16 9 13.5 9H7.83L10.2067 11.3844C10.5953 11.7743 10.5948 12.4052 10.2056 12.7944C9.8159 13.1841 9.1841 13.1841 8.79443 12.7944L4.70711 8.70711C4.31658 8.31658 4.31658 7.68342 4.70711 7.29289L8.79539 3.20461C9.18494 2.81506 9.81657 2.81434 10.2075 3.20251C10.6004 3.59262 10.6019 4.22811 10.2104 4.61961L7.83 7H13.5ZM6 19C6 18.4477 6.44772 18 7 18C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* arrow-expand */}
            {icon === 'arrow-expand' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3.92401 15L3.92401 20L8.92401 20"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.31003 19.7791L9.92401 14"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.0066 9L20.0066 4L15.0066 4"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.6206 4.22091L14.0066 10"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-contract */}
            {icon === 'arrow-contract' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.924 5L13.924 10L18.924 10"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.3101 9.77909L19.924 4"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.0067 19L10.0067 14L5.00665 14"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.62063 14.2209L4.00665 20"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-swap-horizontal */}
            {icon === 'arrow-swap-horizontal' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6.19339 11.7057L3.69339 14.2057L6.19339 16.7057"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.9242 14.2325L3.69339 14.2325"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.424 11.7057L19.924 9.20569L17.424 6.70569"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.6933 9.17883L19.924 9.17883"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* refresh */}
            {icon === 'refresh' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18.6233 14.8995C17.5077 17.4526 14.9601 19.2369 11.9958 19.2369C8.00327 19.2369 4.76672 16.0003 4.76672 12.0078C4.76672 8.01536 8.00327 4.77881 11.9958 4.77881C14.7698 4.77881 17.1789 6.34134 18.391 8.63429"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M15.9198 9.54785L19.5098 9.54785L19.5098 5.95785"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* arrow-swap-vertical */}
            {icon === 'arrow-swap-vertical' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.7057 17.8066L14.2057 20.3066L16.7057 17.8066"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.2325 11.0759L14.2325 20.3066"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.7057 6.57605L9.20567 4.07605L6.70567 6.57605"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.17882 13.3068L9.17882 4.07605"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* update */}
            {icon === 'update' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M5.00001 14.5C5.00001 11 5.16372 8.92356 7.11171 6.97557C9.1778 4.90948 12.1834 4.35545 14.7533 5.31351"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M2.5 12.0306L5.03851 14.5692L7.57703 12.0306"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.7533 9.28345C18.7533 12.7834 18.5896 14.8599 16.6416 16.8079C14.5755 18.874 11.5699 19.428 9 18.4699"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M21.2533 11.7528L18.7148 9.21429L16.1763 11.7528"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* external */}
            {icon === 'external' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <g id="external">
                        <g id="Group 12268">
                            <path
                                id="Vector"
                                d="M20.0002 13.1467V20.2056H3.99977V4.20532H11.0588"
                                stroke={iconColor}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                id="Vector_2"
                                d="M9.64694 14.5586L20.0002 4.20532"
                                stroke={iconColor}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                id="Vector_3"
                                d="M14.7808 4.20532H20.0004V9.42486"
                                stroke={iconColor}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            )}
            {/* search */}
            {icon === 'search' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M17.0288 10.9947C17.0288 14.3028 14.3387 16.9894 11.0144 16.9894C7.69008 16.9894 5 14.3028 5 10.9947C5 7.68656 7.69008 5 11.0144 5C14.3387 5 17.0288 7.68656 17.0288 10.9947Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <line
                        x1="1"
                        y1="-1"
                        x2="4.94355"
                        y2="-1"
                        transform="matrix(0.708101 0.706111 -0.708101 0.706111 14.7914 15.8309)"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* wallet-deposit */}
            {icon === 'wallet-deposit' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8 4.88062L11.5 8.38062L15 4.88062"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.5188 1.38061L11.5188 8.38062"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18 12.175C18 12.7273 18.4477 13.175 19 13.175C19.5523 13.175 20 12.7273 20 12.175H18ZM6.5 9.17505C7.05228 9.17505 7.5 8.72733 7.5 8.17505C7.5 7.62276 7.05228 7.17505 6.5 7.17505V9.17505ZM16.5 7.17505C15.9477 7.17505 15.5 7.62276 15.5 8.17505C15.5 8.72733 15.9477 9.17505 16.5 9.17505V7.17505ZM17 21.175H5V23.175H17V21.175ZM4 20.175V10.175H2V20.175H4ZM18 10.175V12.175H20V10.175H18ZM18 18.175V20.175H20V18.175H18ZM5 9.17505H6.5V7.17505H5V9.17505ZM16.5 9.17505H17V7.17505H16.5V9.17505ZM5 21.175C4.44772 21.175 4 20.7273 4 20.175H2C2 21.8319 3.34315 23.175 5 23.175V21.175ZM17 23.175C18.6569 23.175 20 21.8319 20 20.175H18C18 20.7273 17.5523 21.175 17 21.175V23.175ZM20 10.175C20 8.51819 18.6569 7.17505 17 7.17505V9.17505C17.5523 9.17505 18 9.62276 18 10.175H20ZM4 10.175C4 9.62276 4.44772 9.17505 5 9.17505V7.17505C3.34315 7.17505 2 8.51819 2 10.175H4Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12 15.175C12 13.5182 13.3431 12.175 15 12.175H21V18.175H15C13.3431 18.175 12 16.8319 12 15.175V15.175Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path d="M15.5 15.175H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* wallet-withdraw */}
            {icon === 'wallet-withdraw' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M15 4.88062L11.5 1.38061L8 4.88062"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.4812 8.38062L11.4812 1.38062"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18 12.175C18 12.7273 18.4477 13.175 19 13.175C19.5523 13.175 20 12.7273 20 12.175H18ZM7 9.17505C7.55228 9.17505 8 8.72733 8 8.17505C8 7.62276 7.55228 7.17505 7 7.17505V9.17505ZM16 7.17505C15.4477 7.17505 15 7.62276 15 8.17505C15 8.72733 15.4477 9.17505 16 9.17505V7.17505ZM17 21.175H5V23.175H17V21.175ZM4 20.175V10.175H2V20.175H4ZM18 10.175V12.175H20V10.175H18ZM18 18.175V20.175H20V18.175H18ZM5 9.17505H7V7.17505H5V9.17505ZM16 9.17505H17V7.17505H16V9.17505ZM5 21.175C4.44772 21.175 4 20.7273 4 20.175H2C2 21.8319 3.34315 23.175 5 23.175V21.175ZM17 23.175C18.6569 23.175 20 21.8319 20 20.175H18C18 20.7273 17.5523 21.175 17 21.175V23.175ZM20 10.175C20 8.51819 18.6569 7.17505 17 7.17505V9.17505C17.5523 9.17505 18 9.62276 18 10.175H20ZM4 10.175C4 9.62276 4.44772 9.17505 5 9.17505V7.17505C3.34315 7.17505 2 8.51819 2 10.175H4Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12 15.175C12 13.5182 13.3431 12.175 15 12.175H21V18.175H15C13.3431 18.175 12 16.8319 12 15.175V15.175Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path d="M15.5 15.175H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* wallet-money */}
            {icon === 'wallet-money' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18 11.3806C18 11.9329 18.4477 12.3806 19 12.3806C19.5523 12.3806 20 11.9329 20 11.3806H18ZM5 8.38062H17V6.38062H5V8.38062ZM17 20.3806H5V22.3806H17V20.3806ZM4 19.3806V9.38062H2V19.3806H4ZM18 9.38062V11.3806H20V9.38062H18ZM18 17.3806V19.3806H20V17.3806H18ZM5 20.3806C4.44772 20.3806 4 19.9329 4 19.3806H2C2 21.0375 3.34315 22.3806 5 22.3806V20.3806ZM17 22.3806C18.6569 22.3806 20 21.0375 20 19.3806H18C18 19.9329 17.5523 20.3806 17 20.3806V22.3806ZM17 8.38062C17.5523 8.38062 18 8.82833 18 9.38062H20C20 7.72376 18.6569 6.38062 17 6.38062V8.38062ZM5 6.38062C3.34315 6.38062 2 7.72376 2 9.38062H4C4 8.82833 4.44772 8.38062 5 8.38062V6.38062Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12 14.3806C12 12.7238 13.3431 11.3806 15 11.3806H21V17.3806H15C13.3431 17.3806 12 16.0375 12 14.3806V14.3806Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path d="M15.5 14.3806H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M15.0474 7.58618L9.8418 2.38062L4.78094 7.44147"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* wallet */}
            {icon === 'wallet' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19 9.17505C19 9.72733 19.4477 10.175 20 10.175C20.5523 10.175 21 9.72733 21 9.17505H19ZM6 6.17505H18V4.17505H6V6.17505ZM18 18.175H6V20.175H18V18.175ZM5 17.175V7.17505H3V17.175H5ZM19 7.17505V9.17505H21V7.17505H19ZM19 15.175V17.175H21V15.175H19ZM6 18.175C5.44772 18.175 5 17.7273 5 17.175H3C3 18.8319 4.34315 20.175 6 20.175V18.175ZM18 20.175C19.6569 20.175 21 18.8319 21 17.175H19C19 17.7273 18.5523 18.175 18 18.175V20.175ZM18 6.17505C18.5523 6.17505 19 6.62276 19 7.17505H21C21 5.51819 19.6569 4.17505 18 4.17505V6.17505ZM6 4.17505C4.34315 4.17505 3 5.51819 3 7.17505H5C5 6.62276 5.44772 6.17505 6 6.17505V4.17505Z"
                        fill={iconColor}
                    />
                    <path
                        d="M13 12.175C13 10.5182 14.3431 9.17505 16 9.17505H22V15.175H16C14.3431 15.175 13 13.8319 13 12.175V12.175Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path d="M16.5 12.175H17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* calendar-range-outline */}
            {icon === 'calendar-range-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18 2.88062C18 2.32833 17.5523 1.88062 17 1.88062C16.4477 1.88062 16 2.32833 16 2.88062H18ZM8 2.88062C8 2.32833 7.55228 1.88062 7 1.88062C6.44772 1.88062 6 2.32833 6 2.88062H8ZM5 6.38062H19V4.38062H5V6.38062ZM19 20.3806H5V22.3806H19V20.3806ZM18 5.38062V2.88062H16V5.38062H18ZM8 5.38062V2.88062H6V5.38062H8ZM5 20.3806V9.38062H3V20.3806H5ZM5 9.38062V6.38062H3V9.38062H5ZM19 6.38062V9.38062H21V6.38062H19ZM19 9.38062V20.3806H21V9.38062H19ZM4 10.3806H20V8.38062H4V10.3806ZM5 20.3806H3C3 21.4852 3.89543 22.3806 5 22.3806V20.3806ZM19 22.3806C20.1046 22.3806 21 21.4852 21 20.3806H19V22.3806ZM19 6.38062H21C21 5.27605 20.1046 4.38062 19 4.38062V6.38062ZM5 4.38062C3.89543 4.38062 3 5.27605 3 6.38062H5V4.38062Z"
                        fill={iconColor}
                    />
                    <circle cx="8" cy="13.3806" r="1" fill={iconColor} />
                    <circle cx="12" cy="13.3806" r="1" fill={iconColor} />
                    <circle cx="8" cy="17.3806" r="1" fill={iconColor} />
                    <circle cx="12" cy="17.3806" r="1" fill={iconColor} />
                    <circle cx="16" cy="13.3806" r="1" fill={iconColor} />
                </svg>
            )}
            {/* calendar-check-outline */}
            {icon === 'calendar-check-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18 2.88062C18 2.32833 17.5523 1.88062 17 1.88062C16.4477 1.88062 16 2.32833 16 2.88062H18ZM8 2.88062C8 2.32833 7.55228 1.88062 7 1.88062C6.44772 1.88062 6 2.32833 6 2.88062H8ZM5 6.38062H19V4.38062H5V6.38062ZM19 20.3806H5V22.3806H19V20.3806ZM18 5.38062V2.88062H16V5.38062H18ZM8 5.38062V2.88062H6V5.38062H8ZM5 20.3806V9.38062H3V20.3806H5ZM5 9.38062V6.38062H3V9.38062H5ZM19 6.38062V9.38062H21V6.38062H19ZM19 9.38062V20.3806H21V9.38062H19ZM4 10.3806H20V8.38062H4V10.3806ZM5 20.3806H3C3 21.4852 3.89543 22.3806 5 22.3806V20.3806ZM19 22.3806C20.1046 22.3806 21 21.4852 21 20.3806H19V22.3806ZM19 6.38062H21C21 5.27605 20.1046 4.38062 19 4.38062V6.38062ZM5 4.38062C3.89543 4.38062 3 5.27605 3 6.38062H5V4.38062Z"
                        fill={iconColor}
                    />
                    <path
                        d="M8 15.8092L10.4 18.3806L16 12.3806"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* trash-can-outline */}
            {icon === 'trash-can-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M9.5 3.17505C9.22386 3.17505 9 3.39891 9 3.67505C9 3.95119 8.77614 4.17505 8.5 4.17505H5C4.44772 4.17505 4 4.62276 4 5.17505C4 5.72733 4.44772 6.17505 5 6.17505V19.175C5 19.7055 5.21071 20.2142 5.58579 20.5893C5.96086 20.9643 6.46957 21.175 7 21.175H17C17.5304 21.175 18.0391 20.9643 18.4142 20.5893C18.7893 20.2142 19 19.7055 19 19.175V6.17505C19.5523 6.17505 20 5.72733 20 5.17505C20 4.62276 19.5523 4.17505 19 4.17505H15.5C15.2239 4.17505 15 3.95119 15 3.67505C15 3.39891 14.7761 3.17505 14.5 3.17505H9.5ZM7 6.17505H17V18.175C17 18.7273 16.5523 19.175 16 19.175H8C7.44772 19.175 7 18.7273 7 18.175V6.17505ZM10 8.17505C9.44772 8.17505 9 8.62276 9 9.17505V16.175C9 16.7273 9.44772 17.175 10 17.175C10.5523 17.175 11 16.7273 11 16.175V9.17505C11 8.62276 10.5523 8.17505 10 8.17505ZM14 8.17505C13.4477 8.17505 13 8.62276 13 9.17505V16.175C13 16.7273 13.4477 17.175 14 17.175C14.5523 17.175 15 16.7273 15 16.175V9.17505C15 8.62276 14.5523 8.17505 14 8.17505Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* list */}
            {icon === 'list' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M7 6.17505C7 5.62276 7.44772 5.17505 8 5.17505H15C15.5523 5.17505 16 5.62276 16 6.17505V8.17505C16 8.72733 15.5523 9.17505 15 9.17505H8C7.44772 9.17505 7 8.72733 7 8.17505V6.17505Z"
                        fill={iconColor}
                    />
                    <path
                        d="M9.70001 11.175C9.70001 10.6228 10.1477 10.175 10.7 10.175H15C15.5523 10.175 16 10.6228 16 11.175C16 11.7273 15.5523 12.175 15 12.175H10.7C10.1477 12.175 9.70001 11.7273 9.70001 11.175Z"
                        fill={iconColor}
                    />
                    <path
                        d="M9 11.175C9 11.7273 8.55228 12.175 8 12.175C7.44772 12.175 7 11.7273 7 11.175C7 10.6228 7.44772 10.175 8 10.175C8.55228 10.175 9 10.6228 9 11.175Z"
                        fill={iconColor}
                    />
                    <path
                        d="M9.70001 14.175C9.70001 13.6228 10.1477 13.175 10.7 13.175H15C15.5523 13.175 16 13.6228 16 14.175C16 14.7273 15.5523 15.175 15 15.175H10.7C10.1477 15.175 9.70001 14.7273 9.70001 14.175Z"
                        fill={iconColor}
                    />
                    <path
                        d="M9 14.175C9 14.7273 8.55228 15.175 8 15.175C7.44772 15.175 7 14.7273 7 14.175C7 13.6228 7.44772 13.175 8 13.175C8.55228 13.175 9 13.6228 9 14.175Z"
                        fill={iconColor}
                    />
                    <path
                        d="M9.70001 17.175C9.70001 16.6228 10.1477 16.175 10.7 16.175H15C15.5523 16.175 16 16.6228 16 17.175C16 17.7273 15.5523 18.175 15 18.175H10.7C10.1477 18.175 9.70001 17.7273 9.70001 17.175Z"
                        fill={iconColor}
                    />
                    <path
                        d="M9 17.175C9 17.7273 8.55228 18.175 8 18.175C7.44772 18.175 7 17.7273 7 17.175C7 16.6228 7.44772 16.175 8 16.175C8.55228 16.175 9 16.6228 9 17.175Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 5.17505C4 3.51819 5.34315 2.17505 7 2.17505H16C17.6569 2.17505 19 3.51819 19 5.17505V18.175C19 19.8319 17.6569 21.175 16 21.175H7C5.34315 21.175 4 19.8319 4 18.175V5.17505ZM7 4.17505C6.44772 4.17505 6 4.62276 6 5.17505V18.175C6 18.7273 6.44772 19.175 7 19.175H16C16.5523 19.175 17 18.7273 17 18.175V5.17505C17 4.62276 16.5523 4.17505 16 4.17505H7Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* statement */}
            {icon === 'statement' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M20 20.0091C20 20.9338 18.8527 21.3631 18.2457 20.6656L17.6881 20.025C17.3363 19.6208 16.7285 19.5657 16.3098 19.9L15.0399 20.914C14.647 21.2277 14.0824 21.201 13.7209 20.8516L12.7788 19.941C12.405 19.5797 11.8168 19.565 11.4255 19.9072L10.3054 20.8868C9.92841 21.2165 9.36571 21.2165 8.98874 20.8868L7.90269 19.937C7.49747 19.5826 6.88441 19.6126 6.51572 20.0049L5.72865 20.8422C5.10821 21.5023 4 21.0633 4 20.1574L4 4.6814C4 3.57683 4.89543 2.6814 6 2.6814L18 2.6814C19.1046 2.6814 20 3.57683 20 4.6814L20 20.0091Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path d="M11 15.1814H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 15.1814H8.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 11.1814H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 11.1814H8.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 7.1814H16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 7.1814H8.5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* news */}
            {icon === 'news' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M5.88235 4.17505L17 4.17505C18.6569 4.17505 20 5.5182 20 7.17505L20 19.175C20 19.7273 19.5523 20.175 19 20.175L8.76528 20.175C8.213 20.175 7.76528 19.7273 7.76528 19.175L7.76529 6.05798C7.76529 5.01807 6.92227 4.17505 5.88235 4.17505V4.17505ZM5.88235 4.17505V4.17505C4.84276 4.17505 4 5.01781 4 6.0574L4 15.3973C4 15.9496 4.44772 16.3973 5 16.3973L7.76528 16.3973"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path d="M11 8.17505H17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 12.175H17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 16.175H17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* file-document-outline */}
            {icon === 'file-document-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M9 13.3806H15M9 17.3806H11.5714"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M19 9.38062H13V3.38062M19 9.38062V21.3806H5V3.38062H13M19 9.38062L13 3.38062"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* file-upload-outline */}
            {icon === 'file-upload-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18.9241 9.38062H12.9241V3.38062M18.9241 9.38062V21.3806H4.92407V3.38062H12.9241M18.9241 9.38062L12.9241 3.38062"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.3043 15.5707L12.1142 13.3806L9.92407 15.5707"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.1143 18.0152L12.1143 13.5709"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* copy */}
            {icon === 'copy' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8.88892 16.6195H4.88892V4.17505H14.6667V7.28616"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="9.33337"
                        y="7.73059"
                        width="9.77778"
                        height="12.4444"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* file-pdf */}
            {icon === 'file-pdf' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.4667 12.775H3.53333C2.90999 12.775 2.39999 13.255 2.39999 13.8417V18.1084C2.39999 18.695 2.90999 19.175 3.53333 19.175H11.4667C12.09 19.175 12.6 18.695 12.6 18.1084V13.8417C12.6 13.255 12.09 12.775 11.4667 12.775ZM6.08333 15.6681C6.08333 16.0947 5.68666 16.4681 5.23333 16.4681H4.66666V17.5347H3.81666V14.3347H5.23333C5.68666 14.3347 6.08333 14.7081 6.08333 15.1347V15.6681ZM8.91666 16.7347C8.91666 17.1614 8.51999 17.5347 8.06666 17.5347H6.64999V14.3347H8.06666C8.51999 14.3347 8.91666 14.7081 8.91666 15.1347V16.7347ZM11.1833 15.1347H10.3333V15.6681H11.1833V16.4681H10.3333V17.5347H9.48333V14.3347H11.1833V15.1347ZM7.49999 15.1347H8.06666V16.7347H7.49999V15.1347ZM4.66666 15.1347H5.23333V15.6681H4.66666V15.1347Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.79999 2.38062C4.2477 2.38062 3.79999 2.82833 3.79999 3.38062V12.775H5.79999V4.38062H11.8V9.38061C11.8 9.9329 12.2477 10.3806 12.8 10.3806H17.8V20.3806H5.79999V18.9587H3.79999V21.3806C3.79999 21.9329 4.2477 22.3806 4.79999 22.3806H18.8C19.3523 22.3806 19.8 21.9329 19.8 21.3806V9.38061C19.8 9.1154 19.6946 8.86104 19.5071 8.67351L13.5071 2.67351C13.3196 2.48597 13.0652 2.38062 12.8 2.38062H4.79999ZM16.3858 8.38061L13.8 5.79483V8.38061H16.3858Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* mail */}
            {icon === 'mail' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3 7.17505C3 6.07048 3.89543 5.17505 5 5.17505H19C20.1046 5.17505 21 6.07048 21 7.17505V16.175C21 17.2796 20.1046 18.175 19 18.175H5C3.89543 18.175 3 17.2796 3 16.175V7.17505Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M4 6.17505L10.5858 12.7608C11.3668 13.5419 12.6332 13.5419 13.4142 12.7608L20 6.17505"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M20 17.175L14.5 11.675M4 17.175L9.5 11.675"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* lightbulb-outline */}
            {icon === 'lightbulb-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M14 21.175H10M18 9.17505C18 5.86134 15.3137 3.17505 12 3.17505C8.68629 3.17505 6 5.86134 6 9.17505C6 11.4645 7.28229 13.4545 9.16786 14.4659C9.16786 14.8384 9.16786 16.175 9.16786 17.175C11.056 17.175 12.944 17.175 14.8321 17.175C14.8321 16.425 14.8321 15.0786 14.8321 14.4659C16.7177 13.4545 18 11.4645 18 9.17505Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* api */}
            {icon === 'api' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <g clip-path="url(#clip0_953_14468)">
                        <circle cx="12" cy="12.175" r="8" stroke={iconColor} strokeWidth="2" />
                        <path d="M10.5 2.17505V4.17505" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M13.5 2.17505V4.17505" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M10.5 20.175V22.175" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M13.5 20.175V22.175" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M2 12.175L4 12.175" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M20 12.175L22 12.175" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M2 15.675L4 15.675" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M20 15.675L22 15.675" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M2 8.67505L4 8.67505" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <path d="M20 8.67505L22 8.67505" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                        <circle cx="3" cy="21.175" r="1" stroke={iconColor} strokeWidth="2" />
                        <path
                            d="M8 19.175L6.8 20.775C6.61115 21.0269 6.31476 21.175 6 21.175H4.5"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="1"
                            cy="1"
                            r="1"
                            transform="matrix(-1 0 0 1 22 20.175)"
                            stroke={iconColor}
                            strokeWidth="2"
                        />
                        <path
                            d="M16 19.175L17.2 20.775C17.3889 21.0269 17.6852 21.175 18 21.175H19.5"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="1"
                            cy="1"
                            r="1"
                            transform="matrix(1 0 0 -1 2 4.17505)"
                            stroke={iconColor}
                            strokeWidth="2"
                        />
                        <path
                            d="M8 5.17505L6.8 3.57505C6.61115 3.32324 6.31476 3.17505 6 3.17505H4.5"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="21"
                            cy="3.17505"
                            r="1"
                            transform="rotate(-180 21 3.17505)"
                            stroke={iconColor}
                            strokeWidth="2"
                        />
                        <path
                            d="M16 5.17505L17.2 3.57505C17.3889 3.32324 17.6852 3.17505 18 3.17505H19.5"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M9.8 13.675V11.925M7 13.675V11.925M9.8 11.925V11.575C9.8 10.8019 9.1732 10.175 8.4 10.175V10.175C7.6268 10.175 7 10.8019 7 11.575V11.925M9.8 11.925H7"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11.3 13.675C11.3 14.2273 11.7477 14.675 12.3 14.675C12.8523 14.675 13.3 14.2273 13.3 13.675L11.3 13.675ZM12.3 12.175L11.3 12.175L12.3 12.175ZM12.3 10.175L12.3 9.17505C12.0348 9.17505 11.7804 9.28041 11.5929 9.46794C11.4054 9.65548 11.3 9.90983 11.3 10.175L12.3 10.175ZM13.2 11.175L12.3 11.175L12.3 13.175L13.2 13.175L13.2 11.175ZM11.3 12.175L11.3 13.675L13.3 13.675L13.3 12.175L11.3 12.175ZM13.3 12.175L13.3 10.175L11.3 10.175L11.3 12.175L13.3 12.175ZM12.3 11.175L13.2 11.175L13.2 9.17505L12.3 9.17505L12.3 11.175ZM13.2 11.175L13.2 11.175L13.2 13.175C14.3046 13.175 15.2 12.2796 15.2 11.175L13.2 11.175ZM15.2 11.175C15.2 10.0705 14.3046 9.17505 13.2 9.17505L13.2 11.175L13.2 11.175L15.2 11.175Z"
                            fill={iconColor}
                        />
                        <path d="M16.7 13.675L16.7 10.175" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_953_14468">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.175049)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
            {/* heart-outline */}
            {icon === 'heart-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.2232 19.4656L11.2217 19.4643C8.62708 17.1114 6.55406 15.2266 5.11801 13.4697C3.69296 11.7262 3 10.2313 3 8.67505C3 6.13852 4.97109 4.17505 7.5 4.17505C8.9377 4.17505 10.3341 4.84951 11.2412 5.90633C11.4311 6.12768 11.7083 6.25505 12 6.25505C12.2917 6.25505 12.5689 6.12768 12.7588 5.90633C13.6659 4.84951 15.0623 4.17505 16.5 4.17505C19.0289 4.17505 21 6.13852 21 8.67505C21 10.2313 20.307 11.7262 18.882 13.4697C17.4459 15.2266 15.3729 17.1114 12.7783 19.4643L12.7768 19.4656L12.6732 19.5599C12.2916 19.9073 11.7084 19.9073 11.3268 19.5599L11.2232 19.4656Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* heart-full */}
            {icon === 'heart-full' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.2232 19.2905L11.2217 19.2892C8.62708 16.9364 6.55406 15.0515 5.11801 13.2946C3.69296 11.5512 3 10.0562 3 8.5C3 5.96348 4.97109 4 7.5 4C8.9377 4 10.3341 4.67446 11.2412 5.73128C11.4311 5.95263 11.7083 6.08 12 6.08C12.2917 6.08 12.5689 5.95263 12.7588 5.73128C13.6659 4.67446 15.0623 4 16.5 4C19.0289 4 21 5.96348 21 8.5C21 10.0562 20.307 11.5512 18.882 13.2946C17.4459 15.0515 15.3729 16.9364 12.7783 19.2892L12.7768 19.2905L12.6732 19.3849C12.2916 19.7322 11.7084 19.7322 11.3268 19.3849L11.2232 19.2905Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* rocket-launch-outline */}
            {icon === 'rocket-launch-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3.53803 10.13L5.7022 10.8799L7.1057 8.7479L3.53803 10.13Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.1017 20.6937L13.3518 18.5295L15.4838 17.126L14.1017 20.6937Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="15.5376"
                        cy="8.69429"
                        r="0.5"
                        transform="rotate(45 15.5376 8.69429)"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.2864 8.34378C13.2627 5.26258 16.6671 3.41858 20.4251 3.39376L20.8408 3.39101L20.8381 3.8068C20.8133 7.56479 18.9693 10.9692 15.8881 12.9455L10.941 16.1186L8.11324 13.2908L11.2864 8.34378Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.18433 16.0977L3.18433 19.0977"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.30566 18.219L5.30566 21.219"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* picture */}
            {icon === 'picture' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M4.32477 6.17505C4.1454 6.17505 4 6.32408 4 6.50793V18.8422C4 18.9305 4.03422 19.0151 4.09512 19.0776C4.15603 19.14 4.23864 19.175 4.32477 19.175H19.6781C19.8563 19.1734 20 19.0249 20 18.8422V6.50793C20 6.32523 19.8563 6.17667 19.6781 6.17505H4.32477Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M6.48376 19.1749H17.5147C17.695 19.1796 17.8624 19.0893 17.9461 18.9421C18.0298 18.7949 18.0152 18.6167 17.9084 18.4828L16.3868 16.5789C16.3064 16.4764 16.1816 16.4112 16.0449 16.4003C15.9082 16.3895 15.7731 16.434 15.6748 16.5223L14.1113 17.8936L10.4818 13.3526C10.3901 13.2374 10.2428 13.1711 10.0879 13.1752C9.93293 13.1793 9.79005 13.2533 9.70566 13.3732L6.07614 18.5034C5.98074 18.6387 5.97455 18.8116 6.06005 18.9525C6.14555 19.0933 6.30868 19.179 6.48376 19.1749Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <ellipse cx="15.7693" cy="10.955" rx="1.76932" ry="1.77992" fill={iconColor} />
                </svg>
            )}
            {/* square-edit-outline */}
            {icon === 'square-edit-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.87732 11.5263C8.92607 11.3761 9.0097 11.2396 9.12135 11.1279L16.1924 4.05685C17.364 2.88528 19.2635 2.88528 20.4351 4.05685L20.4908 4.11258C21.6624 5.28415 21.6624 7.18365 20.4908 8.35522L13.4197 15.4263C13.3081 15.5379 13.1716 15.6216 13.0214 15.6703L8.75088 17.0567C8.3933 17.1727 8.00083 17.0785 7.735 16.8126C7.46917 16.5468 7.37489 16.1543 7.49097 15.7968L8.87732 11.5263ZM10.2756 13.6964L10.8513 14.2721L9.99885 14.5488L10.2756 13.6964ZM12.7126 13.305L17.3088 8.70877L15.8389 7.23883L11.2427 11.835L12.7126 13.305ZM17.2531 5.82462L18.723 7.29456L19.0766 6.941C19.4671 6.55048 19.4671 5.91732 19.0766 5.52679L19.0208 5.47106C18.6303 5.08054 17.9972 5.08054 17.6066 5.47106L17.2531 5.82462Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 6.34998C5.44772 6.34998 5 6.79769 5 7.34998V18.35C5 18.9023 5.44772 19.35 6 19.35H17C17.5523 19.35 18 18.9023 18 18.35V14.4571C18 13.9048 18.4477 13.4571 19 13.4571C19.5523 13.4571 20 13.9048 20 14.4571V18.35C20 20.0068 18.6569 21.35 17 21.35H6C4.34315 21.35 3 20.0068 3 18.35V7.34998C3 5.69312 4.34315 4.34998 6 4.34998H11.5C12.0523 4.34998 12.5 4.79769 12.5 5.34998C12.5 5.90226 12.0523 6.34998 11.5 6.34998H6Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* edit */}
            {icon === 'edit' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 19.3499C4 18.7976 4.44772 18.3499 5 18.3499L19 18.3499C19.5523 18.3499 20 18.7976 20 19.3499C20 19.9021 19.5523 20.3499 19 20.3499L5 20.3499C4.44772 20.3499 4 19.9021 4 19.3499Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.87732 11.5261C5.92607 11.3759 6.0097 11.2394 6.12135 11.1278L13.1924 4.05673C14.364 2.88515 16.2635 2.88515 17.4351 4.05673L17.4908 4.11246C18.6624 5.28403 18.6624 7.18352 17.4908 8.3551L10.4197 15.4262C10.3081 15.5378 10.1716 15.6214 10.0214 15.6702L5.75088 17.0565C5.3933 17.1726 5.00083 17.0783 4.735 16.8125C4.46917 16.5467 4.37489 16.1542 4.49097 15.7966L5.87732 11.5261ZM7.27558 13.6962L7.85128 14.2719L6.99885 14.5487L7.27558 13.6962ZM9.71261 13.3048L14.3088 8.70865L12.8389 7.23871L8.24267 11.8349L9.71261 13.3048ZM14.2531 5.82449L15.723 7.29444L16.0766 6.94088C16.4671 6.55036 16.4671 5.91719 16.0766 5.52667L16.0208 5.47094C15.6303 5.08042 14.9972 5.08042 14.6066 5.47094L14.2531 5.82449Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* new-post */}
            {icon === 'new-post' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 6.34998C5.44772 6.34998 5 6.79769 5 7.34998V18.35C5 18.9023 5.44772 19.35 6 19.35H17C17.5523 19.35 18 18.9023 18 18.35V14.4571C18 13.9048 18.4477 13.4571 19 13.4571C19.5523 13.4571 20 13.9048 20 14.4571V18.35C20 20.0068 18.6569 21.35 17 21.35H6C4.34315 21.35 3 20.0068 3 18.35V7.34998C3 5.69312 4.34315 4.34998 6 4.34998H10C10.5523 4.34998 11 4.79769 11 5.34998C11 5.90226 10.5523 6.34998 10 6.34998H6Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 9.34998C10 8.79769 10.4477 8.34998 11 8.34998H19C19.5523 8.34998 20 8.79769 20 9.34998C20 9.90226 19.5523 10.35 19 10.35H11C10.4477 10.35 10 9.90226 10 9.34998Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 14.35C14.4477 14.35 14 13.9023 14 13.35L14 5.34998C14 4.79769 14.4477 4.34998 15 4.34998C15.5523 4.34998 16 4.79769 16 5.34998L16 13.35C16 13.9023 15.5523 14.35 15 14.35Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* cube */}
            {icon === 'cube' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3.80005 7.51111V17.4618L12.0768 21.5467L20.2724 16.95V7.51111"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.2724 7.26811L12.0362 11.3862L3.80005 7.26811L12.0362 3.15002L20.2724 7.26811Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.0764 11.3082V20.554"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* go-to-block */}
            {icon === 'go-to-block' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2.2605 8.42822V16.248L8.63158 19.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.63148 19.3502L15.0026 16.248"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.003 8.42846L8.63194 11.614L2.26086 8.42846L8.63194 5.24292L15.003 8.42846Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.63159 12.069V18.8951"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.5001 12.8509L20.3461 12.8509"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.2098 15.7245L21.9844 12.9499L19.2098 10.1753"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* transfer-tokens */}
            {icon === 'transfer-tokens' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M7.61389 9.60791V15.1509L12.13 17.3499"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.6461 9.60791V15.1509L12.13 17.3499"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.6465 9.60804L12.1304 11.8661L7.61426 9.60804L12.1304 7.34998L16.6465 9.60804Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.13 12.1886V17.0273"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.7303 4.73455L20.0765 4.85081"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.9402 7.72448L21.7148 4.94989L18.9402 2.17529"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.89967 19.5958L3.55355 19.4795"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.68982 16.6058L1.91523 19.3804L4.68982 22.155"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* my-tokens */}
            {icon === 'my-tokens' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2 13.9451V19.7222L6.86266 22.014"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.7253 7.94397V19.7222L6.86262 22.014"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.7257 13.9452L6.86303 16.2987L2.00037 13.9452L6.86303 11.5918"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.86261 16.6348V21.6778"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.7257 13.9451V19.7222L16.863 22.014"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.8631 22.014L12.0004 19.7222"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 13.9452L16.8627 16.2987L21.7253 13.9452L16.8627 11.5918"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.8631 16.6348V21.6778"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 5.60718V11.3843L11.8627 13.6761"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.7253 5.60718V11.3843L11.8626 13.6761"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.7257 5.60734L11.863 7.96077L7.00037 5.60734L11.863 3.25391L16.7257 5.60734Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* tokens */}
            {icon === 'tokens' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M21.8604 9.56812V16.1583L11.9301 21.0582"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.8953 12.5471V18.1031"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.8603 9.56814L11.9303 14.5331L2.00037 9.56814L11.9303 4.60315L21.8603 9.56814Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.96533 12.0507L16.8953 7.08569"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.8953 12.0507L6.96535 7.08569"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.9301 14.3912V20.7037"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.00037 9.56812V16.1583L11.9306 21.0582"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.96533 12.5471V18.1031"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* tokens-liqi */}
            {icon === 'tokens-liqi' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2.30005 7.51111V17.4618L10.5768 21.5467L14.6277 19.307V14.2072L18.7724 12.2934V7.51111"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.7724 7.26811L10.5362 11.3862L2.30005 7.26811L10.5362 3.15002L18.7724 7.26811Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.5764 11.3082V20.554"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.8513 12.8824L21.6725 14.2937V18.8141"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.6726 14.4565L17.9375 16.3241L14.7446 14.7075"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.0228 16.5157V19.9652"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.6728 18.8774L17.9377 20.745L14.7448 19.2701"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* overview */}
            {icon === 'overview' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <rect
                        x="2.85"
                        y="3.19998"
                        width="7.71177"
                        height="7.71177"
                        rx="1.15"
                        stroke={iconColor}
                        strokeWidth="1.7"
                    />
                    <rect
                        x="2.85"
                        y="13.7882"
                        width="7.71177"
                        height="7.71177"
                        rx="1.15"
                        stroke={iconColor}
                        strokeWidth="1.7"
                    />
                    <rect
                        x="13.4383"
                        y="3.19998"
                        width="7.71177"
                        height="7.71177"
                        rx="1.15"
                        stroke={iconColor}
                        strokeWidth="1.7"
                    />
                    <rect
                        x="13.4383"
                        y="13.7882"
                        width="7.71177"
                        height="7.71177"
                        rx="1.15"
                        stroke={iconColor}
                        strokeWidth="1.7"
                    />
                </svg>
            )}
            {/* private-profile */}
            {icon === 'private-profile' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.7777 13.8954C14.7777 12.4896 15.9965 11.35 17.4999 11.35C19.0034 11.35 20.2222 12.4896 20.2222 13.8954V14.9863C20.6517 14.9863 20.9999 15.312 20.9999 15.7136V18.6227C20.9999 19.0244 20.6517 19.35 20.2222 19.35H14.7777C14.3482 19.35 13.9999 19.0244 13.9999 18.6227V15.7136C13.9999 15.312 14.3482 14.9863 14.7777 14.9863V13.8954ZM18.6666 13.8954V14.9863H16.3333V13.8954C16.3333 13.2929 16.8556 12.8045 17.4999 12.8045C18.1443 12.8045 18.6666 13.2929 18.6666 13.8954ZM18.6666 16.8045C18.6666 17.2795 18.342 17.6836 17.8888 17.8334V18.2591C17.8888 18.4599 17.7147 18.6227 17.4999 18.6227C17.2852 18.6227 17.1111 18.4599 17.1111 18.2591V17.8334C16.6579 17.6836 16.3333 17.2795 16.3333 16.8045C16.3333 16.202 16.8556 15.7136 17.4999 15.7136C18.1443 15.7136 18.6666 16.202 18.6666 16.8045Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12.4999 13.35H9.99994H7.99994C5.7908 13.35 3.99994 15.1408 3.99994 17.35V18.35H11.4999"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="9.99994" cy="7.34998" r="3" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* user */}
            {icon === 'user' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6 18.35C6 16.1408 7.79086 14.35 10 14.35H14C16.2091 14.35 18 16.1408 18 18.35V19.35H6V18.35Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="12" cy="8.34998" r="3" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* user-plus */}
            {icon === 'user-plus' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 12.35C13 11.7977 13.4477 11.35 14 11.35H22C22.5523 11.35 23 11.7977 23 12.35C23 12.9023 22.5523 13.35 22 13.35H14C13.4477 13.35 13 12.9023 13 12.35Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 17.35C17.4477 17.35 17 16.9023 17 16.35L17 8.34998C17 7.79769 17.4477 7.34998 18 7.34998C18.5523 7.34998 19 7.79769 19 8.34998L19 16.35C19 16.9023 18.5523 17.35 18 17.35Z"
                        fill={iconColor}
                    />
                    <path
                        d="M3 18.35C3 16.1408 4.79086 14.35 7 14.35H11C13.2091 14.35 15 16.1408 15 18.35V19.35H3V18.35Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="9" cy="8.34998" r="3" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* users */}
            {icon === 'users' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="6.8" cy="7.01664" r="2.66667" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M7.86667 16.6166H2L2.445 15.0591C2.81297 13.7712 3.99013 12.8833 5.32957 12.8833H8.86111C9.25596 12.8833 9.64198 13.0002 9.97052 13.2192L10.2667 13.4166"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 19.35C10 17.1408 11.7909 15.35 14 15.35H18C20.2091 15.35 22 17.1408 22 19.35V20.35H10V19.35Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="16" cy="9.34998" r="3" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* users-plus */}
            {icon === 'users-plus' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="6.8" cy="7.01664" r="2.66667" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M7.86667 16.6166H2L2.445 15.0591C2.81297 13.7712 3.99013 12.8833 5.32957 12.8833H8.86111C9.25596 12.8833 9.64198 13.0002 9.97052 13.2192L10.2667 13.4166"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 19.35C10 17.1408 11.7909 15.35 14 15.35H18C20.2091 15.35 22 17.1408 22 19.35V20.35H10V19.35Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="16" cy="9.34998" r="3" stroke={iconColor} strokeWidth="2" />
                    <rect x="14.4" y="14.2731" width="9.6" height="9.6" rx="4.8" fill={iconColor} />
                    <path d="M16.8 19.0731H21.6" stroke="white" strokeLinecap="round" />
                    <path d="M19.2 21.4731L19.2 16.6731" stroke="white" strokeLinecap="round" />
                </svg>
            )}
            {/* user-circle */}
            {icon === 'user-circle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="10" stroke={iconColor} strokeWidth="2" />
                    <circle cx="12" cy="9.34998" r="3" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M18 20.35V19.35C18 17.1408 16.2091 15.35 14 15.35H10C7.79086 15.35 6 17.1408 6 19.35V20.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* eye-slash */}
            {icon === 'eye-slash' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.06248 11.85C3.45193 12.7811 4.33922 13.7402 5.62895 14.5466C5.22506 13.7252 5 12.812 5 11.85C5 10.888 5.22506 9.9748 5.62895 9.15335C4.33922 9.95978 3.45193 10.9189 3.06248 11.85ZM19 11.85C19 12.664 18.8389 13.443 18.5446 14.1611C19.4438 13.4836 20.2054 12.692 20.8021 11.85C20.2391 11.0554 19.5292 10.3058 18.6954 9.65456L20.1182 8.23178C21.2389 9.14225 22.1639 10.2056 22.8522 11.3268C23.0493 11.6477 23.0493 12.0522 22.8522 12.3732C20.8705 15.601 16.9269 18.35 12 18.35C11.3731 18.35 10.7469 18.3053 10.1292 18.2208L12 16.35C14.9036 16.35 17 14.1983 17 11.85C17 11.6916 16.9905 11.5342 16.9718 11.3782L18.6194 9.73054C18.8661 10.3948 19 11.1079 19 11.85ZM9.56501 15.785C7.99566 14.9933 7 13.4683 7 11.85C7 9.50169 9.09642 7.34998 12 7.34998C13.7486 7.34998 15.2044 8.13032 16.086 9.264L18.3351 7.01493C16.5256 5.98996 14.3772 5.34998 12 5.34998C9.55123 5.34998 7.11281 6.0309 5.15267 7.11416C3.21892 8.18284 1.6052 9.7284 1.04403 11.5565C0.985328 11.7478 0.985328 11.9522 1.04403 12.1434C1.6052 13.9715 3.21892 15.5171 5.15267 16.5858C5.93033 17.0156 6.78327 17.382 7.68226 17.6677L9.56501 15.785Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.7071 3.64287C21.0976 4.03339 21.0976 4.66656 20.7071 5.05708L5.70711 20.0571C5.31658 20.4476 4.68342 20.4476 4.29289 20.0571C3.90237 19.6666 3.90237 19.0334 4.29289 18.6429L19.2929 3.64287C19.6834 3.25234 20.3166 3.25234 20.7071 3.64287Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* eye */}
            {icon === 'eye' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 16.35C14.9036 16.35 17 14.1983 17 11.85C17 9.50169 14.9036 7.34998 12 7.34998C9.09641 7.34998 7 9.50169 7 11.85C7 14.1983 9.09641 16.35 12 16.35ZM12 18.35C15.866 18.35 19 15.4398 19 11.85C19 8.26012 15.866 5.34998 12 5.34998C8.13401 5.34998 5 8.26012 5 11.85C5 15.4398 8.13401 18.35 12 18.35Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8681 11.9055C10.9269 12.5279 11.4791 12.9849 12.1015 12.9262C12.724 12.8674 13.181 12.3152 13.1223 11.6928C13.0905 11.3563 12.9159 11.069 12.6606 10.8833C12.2141 10.5583 12.1155 9.93286 12.4404 9.48629C12.7654 9.03972 13.3908 8.94113 13.8374 9.26608C14.5369 9.77507 15.0255 10.5734 15.1134 11.5049C15.2759 13.227 14.0116 14.7548 12.2894 14.9173C10.5673 15.0798 9.03948 13.8155 8.87699 12.0933C8.82511 11.5435 9.22879 11.0557 9.77863 11.0038C10.3285 10.9519 10.8163 11.3556 10.8681 11.9055Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.06247 11.85C3.49956 12.8949 4.56371 13.9752 6.12006 14.8353C7.79628 15.7617 9.90332 16.35 12 16.35C15.8919 16.35 19.0544 14.3164 20.8021 11.85C19.0544 9.38358 15.8919 7.34998 12 7.34998C9.90332 7.34998 7.79628 7.93828 6.12006 8.86464C4.56371 9.72474 3.49956 10.805 3.06247 11.85ZM5.15267 7.11416C7.11281 6.0309 9.55122 5.34998 12 5.34998C16.9269 5.34998 20.8705 8.09894 22.8522 11.3268C23.0493 11.6477 23.0493 12.0522 22.8522 12.3732C20.8705 15.601 16.9269 18.35 12 18.35C9.55122 18.35 7.11281 17.6691 5.15267 16.5858C3.21891 15.5171 1.6052 13.9715 1.04403 12.1434C0.985325 11.9522 0.985325 11.7478 1.04403 11.5565C1.6052 9.7284 3.21891 8.18284 5.15267 7.11416Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* camera */}
            {icon === 'camera' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M18 8.36389V8.34998" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <rect
                        x="3"
                        y="5.55554"
                        width="18"
                        height="14"
                        rx="3"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12.5555" r="3" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* video */}
            {icon === 'video' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M4.32477 6.34998C4.1454 6.34998 4 6.49901 4 6.68286V19.0171C4 19.1054 4.03422 19.1901 4.09512 19.2525C4.15603 19.3149 4.23864 19.35 4.32477 19.35H19.6781C19.8563 19.3484 20 19.1998 20 19.0171V6.68286C20 6.50016 19.8563 6.35159 19.6781 6.34998H4.32477Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M10.071 10.421L14.4296 12.7796L10.0896 15.2604L10.071 10.421Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* phone-circle */}
            {icon === 'phone-circle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 19.35C15.6421 19.35 19 15.9921 19 11.85C19 7.70784 15.6421 4.34998 11.5 4.34998C7.35786 4.34998 4 7.70784 4 11.85C4 15.9921 7.35786 19.35 11.5 19.35ZM11.5 21.35C16.7467 21.35 21 17.0967 21 11.85C21 6.60327 16.7467 2.34998 11.5 2.34998C6.25329 2.34998 2 6.60327 2 11.85C2 17.0967 6.25329 21.35 11.5 21.35Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.6468 13.7835C16.4037 13.6652 14.6693 12.9099 14.4464 12.831C14.2235 12.7521 14.0614 12.7127 13.8992 12.9493C13.7371 13.186 13.2507 13.7184 13.1088 13.8762C12.967 14.0339 12.7612 13.9459 12.582 13.8762C12 13.65 11.6714 13.385 11.0736 12.8764C10.533 12.4006 10.0685 11.849 9.69549 11.2397C9.55362 11.003 9.69552 10.865 9.79686 10.7467L10.1616 10.3326V10.2142L10.3238 9.93816C10.3593 9.87461 10.3779 9.80344 10.3779 9.73112C10.3779 9.65879 10.3593 9.58761 10.3238 9.52405C10.3238 9.40574 9.7766 8.22256 9.55367 7.74929C9.33074 7.27602 9.14831 7.35491 9.00644 7.35491H8.54036C8.4139 7.35639 8.28911 7.38345 8.17397 7.43437C8.05884 7.4853 7.95584 7.55897 7.87154 7.6507C7.59357 7.90254 7.37255 8.20792 7.22251 8.54742C7.07248 8.88692 6.99674 9.25311 7.00011 9.62266C7.00277 9.89628 7.04368 10.1683 7.1217 10.4312C7.31154 11.0282 7.60638 11.5886 7.99313 12.0876C9.02379 13.6455 10.4848 14.8894 12.2085 15.6766C14.7216 16.6231 14.7215 16.3076 15.1674 16.2681C15.5106 16.2066 15.8365 16.0746 16.1231 15.8807C16.4096 15.6869 16.6504 15.4358 16.8292 15.1441C16.9885 14.791 17.0378 14.4002 16.9711 14.0201C16.9711 14.0201 16.89 13.9018 16.6468 13.7835Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* clock-money */}
            {icon === 'clock-money' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M5.38464 7.84998C5.76211 7.29615 6.20731 6.79218 6.70831 6.34998C8.11858 5.10525 9.97107 4.34998 12 4.34998C16.4182 4.34998 20 7.9317 20 12.35C20 16.7683 16.4182 20.35 12 20.35C10.939 20.35 9.92633 20.1435 8.99988 19.7684C8.40626 19.5281 7.84805 19.2186 7.33524 18.85"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M4.46537 12.6638C4.83364 13.0754 5.46583 13.1105 5.87741 12.7423C6.289 12.374 6.32412 11.7418 5.95586 11.3302L4.46537 12.6638ZM3.52641 14.35L3.13986 15.2722L3.52641 14.35ZM2.06354 15.7013C1.64029 15.3465 1.00956 15.402 0.654772 15.8252C0.299985 16.2485 0.355489 16.8792 0.778744 17.234L2.06354 15.7013ZM3.31588 17.25L3.34235 16.2504L3.31588 17.25ZM2.31588 18.35C2.31588 18.9023 2.76359 19.35 3.31588 19.35C3.86816 19.35 4.31588 18.9023 4.31588 18.35H2.31588ZM4.52641 10.35C4.52641 9.79769 4.07869 9.34998 3.52641 9.34998C2.97412 9.34998 2.52641 9.79769 2.52641 10.35H4.52641ZM4.65215 16.791L3.95521 16.0738L4.65215 16.791ZM4.26594 14.7339L4.82525 13.9049V13.9049L4.26594 14.7339ZM5.95586 11.3302C5.60659 10.9399 4.7214 10.2912 3.52641 10.2912V12.2912C3.75973 12.2912 3.97349 12.3565 4.15243 12.4474C4.24126 12.4925 4.31606 12.5413 4.37344 12.5847C4.4019 12.6063 4.42445 12.6253 4.44097 12.6403C4.45804 12.6557 4.46564 12.6641 4.46537 12.6638L5.95586 11.3302ZM3.52641 10.2912C2.00756 10.2912 0.842195 11.3624 0.842195 12.7029H2.8422C2.8422 12.6316 2.93999 12.2912 3.52641 12.2912V10.2912ZM0.842195 12.7029C0.842195 13.3996 1.16957 13.951 1.60968 14.359C2.02598 14.745 2.57281 15.0346 3.13986 15.2722L3.91295 13.4277C3.42737 13.2242 3.13209 13.0432 2.96945 12.8924C2.83061 12.7637 2.8422 12.7121 2.8422 12.7029H0.842195ZM3.34235 16.2504C3.00263 16.2414 2.54575 16.1055 2.06354 15.7013L0.778744 17.234C1.57585 17.9022 2.45902 18.2277 3.2894 18.2497L3.34235 16.2504ZM2.31588 17.25V18.35H4.31588V17.25H2.31588ZM4.52641 11.2912V10.35H2.52641V11.2912H4.52641ZM3.95521 16.0738C3.87896 16.1479 3.67917 16.2593 3.34235 16.2504L3.2894 18.2497C4.06151 18.2701 4.81801 18.0242 5.3491 17.5081L3.95521 16.0738ZM3.13986 15.2722C3.38187 15.3737 3.56734 15.4689 3.70664 15.5629L4.82525 13.9049C4.53519 13.7092 4.21801 13.5556 3.91295 13.4277L3.13986 15.2722ZM3.70664 15.5629C3.93441 15.7165 3.98518 15.8651 3.99484 15.9316C4.00531 16.0036 3.98248 16.0473 3.95521 16.0738L5.3491 17.5081C6.41928 16.468 6.12012 14.7786 4.82525 13.9049L3.70664 15.5629Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12 8.34998V12.35L15 14.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* information */}
            {icon === 'information' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="8" stroke={iconColor} strokeWidth="2" />
                    <path d="M12 8.62027L12 8.65027" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M12 16.15L12 11.75"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* clock */}
            {icon === 'clock' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="8" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M12 8.34998V12.35L15 14.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* crypto */}
            {icon === 'crypto' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="9" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M14.5156 10.1C13.8976 9.40951 12.9996 8.97498 12 8.97498C10.136 8.97498 8.625 10.486 8.625 12.35C8.625 14.2139 10.136 15.725 12 15.725C12.9996 15.725 13.8976 15.2904 14.5156 14.6"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M10.6184 17.1C10.6184 17.6523 11.0661 18.1 11.6184 18.1C12.1707 18.1 12.6184 17.6523 12.6184 17.1H10.6184ZM12.8816 7.09998C12.8816 6.54769 12.4339 6.09998 11.8816 6.09998C11.3293 6.09998 10.8816 6.54769 10.8816 7.09998H12.8816ZM10.6184 15.725V17.1H12.6184V15.725H10.6184ZM12.8816 8.27645V7.09998H10.8816V8.27645H12.8816Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* circle-money */}
            {icon === 'circle-money' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.801 9.85482C14.1693 10.2664 14.8015 10.3015 15.213 9.93326C15.6246 9.565 15.6598 8.93281 15.2915 8.52123L13.801 9.85482ZM12.2829 12.35L11.8964 13.2723L12.2829 12.35ZM10.0961 14.4295C9.67288 14.0747 9.04215 14.1302 8.68736 14.5535C8.33258 14.9767 8.38808 15.6074 8.81134 15.9622L10.0961 14.4295ZM12 16.2473L12.0265 15.2476L12 16.2473ZM11 17.7255C11 18.2778 11.4477 18.7255 12 18.7255C12.5523 18.7255 13 18.2778 13 17.7255H11ZM13.2829 6.97461C13.2829 6.42232 12.8352 5.97461 12.2829 5.97461C11.7306 5.97461 11.2829 6.42232 11.2829 6.97461H13.2829ZM13.7958 15.6304L13.0988 14.9133H13.0988L13.7958 15.6304ZM13.2767 12.866L13.8361 12.037L13.2767 12.866ZM15.2915 8.52123C14.8698 8.04996 13.7675 7.23942 12.2829 7.23942V9.23942C13.0617 9.23942 13.6568 9.69369 13.801 9.85482L15.2915 8.52123ZM12.2829 7.23942C10.4021 7.23942 9.01957 8.55343 9.01957 10.1366H11.0196C11.0196 9.82262 11.3345 9.23942 12.2829 9.23942V7.23942ZM9.01957 10.1366C9.01957 10.9547 9.40124 11.6097 9.94088 12.1101C10.4567 12.5883 11.1483 12.9588 11.8964 13.2723L12.6695 11.4278C12.0029 11.1484 11.5628 10.8865 11.3007 10.6434C11.0623 10.4224 11.0196 10.2672 11.0196 10.1366H9.01957ZM12.0265 15.2476C11.4856 15.2333 10.7983 15.0181 10.0961 14.4295L8.81134 15.9622C9.8284 16.8148 10.942 17.2196 11.9735 17.2469L12.0265 15.2476ZM11 16.2473V17.7255H13V16.2473H11ZM13.2829 8.23942V6.97461H11.2829V8.23942H13.2829ZM13.0988 14.9133C12.9181 15.0888 12.5539 15.2616 12.0265 15.2476L11.9735 17.2469C12.9363 17.2724 13.8572 16.9651 14.4927 16.3475L13.0988 14.9133ZM11.8964 13.2723C12.2324 13.4132 12.5043 13.5512 12.7174 13.6949L13.8361 12.037C13.4722 11.7915 13.0686 11.5951 12.6695 11.4278L11.8964 13.2723ZM12.7174 13.6949C13.0945 13.9493 13.2243 14.2302 13.2527 14.4261C13.282 14.6275 13.2177 14.7977 13.0988 14.9133L14.4927 16.3475C15.7462 15.1293 15.4294 13.1121 13.8361 12.037L12.7174 13.6949Z"
                        fill={iconColor}
                    />
                    <circle cx="12" cy="12.35" r="9" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* money-grow */}
            {icon === 'money-grow' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19.5663 17.2865C19.8972 16.803 19.6107 16.1808 19.0315 16.0925C16.3224 15.6795 15.0035 17.1852 14.4367 18.1915C14.1821 18.6436 14.4436 19.1799 14.9517 19.2848C17.3867 19.7876 18.8539 18.3276 19.5663 17.2865Z"
                        fill={iconColor}
                    />
                    <path
                        d="M4.21592 17.2866C3.88503 16.8031 4.1715 16.1809 4.75075 16.0926C7.45982 15.6797 8.77871 17.1853 9.34552 18.1917C9.60015 18.6438 9.33863 19.18 8.83048 19.2849C6.39557 19.7877 4.92831 18.3277 4.21592 17.2866Z"
                        fill={iconColor}
                    />
                    <path
                        d="M10.9241 21.35C10.9241 21.9023 11.3718 22.35 11.9241 22.35C12.4764 22.35 12.9241 21.9023 12.9241 21.35H10.9241ZM10.9241 14.85V21.35H12.9241V14.85H10.9241Z"
                        fill={iconColor}
                    />
                    <path d="M8.67407 21.35L15.1741 21.35" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9241 16.35C15.7901 16.35 18.9241 13.216 18.9241 9.34998C18.9241 5.48398 15.7901 2.34998 11.9241 2.34998C8.05808 2.34998 4.92407 5.48398 4.92407 9.34998C4.92407 13.216 8.05808 16.35 11.9241 16.35ZM13.1463 5.34998C13.1463 4.79769 12.6986 4.34998 12.1463 4.34998C11.594 4.34998 11.1463 4.79769 11.1463 5.34998V5.44668C10.1104 5.78316 9.36852 6.63525 9.36852 7.70292C9.36852 8.42033 9.72438 8.97614 10.1808 9.37704C10.6143 9.75778 11.1836 10.0437 11.7773 10.2794C12.0358 10.382 12.2364 10.4794 12.3883 10.5765C12.6434 10.7395 12.6894 10.8904 12.6969 10.9394C12.7046 10.9893 12.6916 11.0237 12.6572 11.0553C12.5661 11.1392 12.3323 11.2599 11.9492 11.2503C11.5626 11.2406 11.0622 11.0944 10.546 10.6845C10.1135 10.3411 9.48442 10.4132 9.14096 10.8457C8.79751 11.2782 8.86969 11.9073 9.30219 12.2507C9.82344 12.6647 10.3759 12.943 10.9241 13.0988V13.35C10.9241 13.9023 11.3718 14.35 11.9241 14.35C12.4764 14.35 12.9241 13.9023 12.9241 13.35V13.1227C13.3318 13.0056 13.7066 12.8077 14.0119 12.5266C14.5402 12.0403 14.7815 11.339 14.6738 10.6363C14.5659 9.93267 14.1268 9.31403 13.4655 8.89132C13.1642 8.69876 12.8343 8.54721 12.5153 8.42056C11.9978 8.21509 11.6783 8.03041 11.5007 7.87438C11.4181 7.8019 11.387 7.75335 11.3766 7.73338C11.3693 7.7194 11.3685 7.71408 11.3685 7.70292C11.3685 7.67923 11.4479 7.29115 12.1463 7.29115C12.4133 7.29115 12.6543 7.36199 12.8515 7.45693C12.9496 7.50413 13.0318 7.55496 13.0947 7.60006C13.1259 7.62247 13.1508 7.64229 13.1691 7.65801C13.1782 7.6658 13.1851 7.67213 13.19 7.67679C13.195 7.68153 13.1973 7.68388 13.1971 7.68366C13.5763 8.08518 14.2092 8.10326 14.6107 7.72405C15.0122 7.34484 15.0303 6.71193 14.6511 6.31041C14.3925 6.03659 13.8628 5.64373 13.1463 5.43474V5.34998Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* square-money */}
            {icon === 'square-money' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.0442 10.6638C13.4125 11.0754 14.0447 11.1105 14.4563 10.7423C14.8679 10.374 14.903 9.74182 14.5347 9.33024L13.0442 10.6638ZM12.1053 12.35L11.7187 13.2722L12.1053 12.35ZM10.6424 13.7013C10.2191 13.3465 9.58842 13.402 9.23363 13.8252C8.87884 14.2485 8.93435 14.8792 9.3576 15.234L10.6424 13.7013ZM11.8947 15.25L11.9212 14.2504L11.8947 15.25ZM10.8947 16.35C10.8947 16.9023 11.3425 17.35 11.8947 17.35C12.447 17.35 12.8947 16.9023 12.8947 16.35H10.8947ZM13.1053 8.34998C13.1053 7.79769 12.6575 7.34998 12.1053 7.34998C11.553 7.34998 11.1053 7.79769 11.1053 8.34998H13.1053ZM13.231 14.791L12.5341 14.0738L13.231 14.791ZM12.8448 12.7339L13.4041 11.9049V11.9049L12.8448 12.7339ZM14.5347 9.33024C14.1854 8.93988 13.3003 8.29115 12.1053 8.29115V10.2912C12.3386 10.2912 12.5524 10.3565 12.7313 10.4474C12.8201 10.4925 12.8949 10.5413 12.9523 10.5847C12.9808 10.6063 13.0033 10.6253 13.0198 10.6403C13.0369 10.6557 13.0445 10.6641 13.0442 10.6638L14.5347 9.33024ZM12.1053 8.29115C10.5864 8.29115 9.42105 9.36244 9.42105 10.7029H11.4211C11.4211 10.6316 11.5188 10.2912 12.1053 10.2912V8.29115ZM9.42105 10.7029C9.42105 11.3996 9.74843 11.951 10.1885 12.359C10.6048 12.745 11.1517 13.0346 11.7187 13.2722L12.4918 11.4277C12.0062 11.2242 11.7109 11.0432 11.5483 10.8924C11.4095 10.7637 11.4211 10.7121 11.4211 10.7029H9.42105ZM11.9212 14.2504C11.5815 14.2414 11.1246 14.1055 10.6424 13.7013L9.3576 15.234C10.1547 15.9022 11.0379 16.2277 11.8683 16.2497L11.9212 14.2504ZM10.8947 15.25V16.35H12.8947V15.25H10.8947ZM13.1053 9.29115V8.34998H11.1053V9.29115H13.1053ZM12.5341 14.0738C12.4578 14.1479 12.258 14.2593 11.9212 14.2504L11.8683 16.2497C12.6404 16.2701 13.3969 16.0242 13.928 15.5081L12.5341 14.0738ZM11.7187 13.2722C11.9607 13.3737 12.1462 13.4689 12.2855 13.5629L13.4041 11.9049C13.114 11.7092 12.7969 11.5556 12.4918 11.4277L11.7187 13.2722ZM12.2855 13.5629C12.5133 13.7165 12.564 13.8651 12.5737 13.9316C12.5842 14.0036 12.5613 14.0473 12.5341 14.0738L13.928 15.5081C14.9981 14.468 14.699 12.7786 13.4041 11.9049L12.2855 13.5629Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 7.34998C4 5.69312 5.34315 4.34998 7 4.34998H17C18.6569 4.34998 20 5.69312 20 7.34998V17.35C20 19.0068 18.6569 20.35 17 20.35H7C5.34315 20.35 4 19.0068 4 17.35V7.34998ZM7 6.34998C6.44772 6.34998 6 6.79769 6 7.34998V17.35C6 17.9023 6.44772 18.35 7 18.35H17C17.5523 18.35 18 17.9023 18 17.35V7.34998C18 6.79769 17.5523 6.34998 17 6.34998H7Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* money-dollar-sign */}
            {icon === 'money-dollar-sign' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M9.75476 7.1341C10.123 7.54569 10.7552 7.58081 11.1668 7.21255C11.5784 6.84429 11.6135 6.2121 11.2452 5.80051L9.75476 7.1341ZM6.5 12.0555L6.11346 12.9778L6.5 12.0555ZM2.1424 16.3186C1.71914 15.9638 1.08842 16.0193 0.733629 16.4426C0.378842 16.8658 0.434346 17.4965 0.857601 17.8513L2.1424 16.3186ZM6 18.9432L6.02647 17.9435L6 18.9432ZM5 21.5555C5 22.1078 5.44772 22.5555 6 22.5555C6.55228 22.5555 7 22.1078 7 21.5555H5ZM7.5 2.55554C7.5 2.00326 7.05228 1.55554 6.5 1.55554C5.94772 1.55554 5.5 2.00326 5.5 2.55554H7.5ZM9.8706 18.57C10.2667 18.1851 10.2757 17.552 9.89078 17.1559C9.50587 16.7599 8.87276 16.7509 8.47671 17.1358L9.8706 18.57ZM7.6971 13.7963C8.15492 14.1052 8.77647 13.9845 9.08536 13.5267C9.39426 13.0689 9.27353 12.4473 8.81571 12.1384L7.6971 13.7963ZM11.2452 5.80051C10.6065 5.08662 8.85289 3.79084 6.5 3.79084V5.79084C8.14711 5.79084 9.3935 6.73035 9.75476 7.1341L11.2452 5.80051ZM6.5 3.79084C3.53378 3.79084 1.5 5.83271 1.5 8.14378H3.5C3.5 7.1019 4.46622 5.79084 6.5 5.79084V3.79084ZM1.5 8.14378C1.5 9.32574 2.04448 10.2917 2.88261 11.0687C3.69695 11.8237 4.82272 12.4368 6.11346 12.9778L6.88654 11.1333C5.67728 10.6264 4.80305 10.1219 4.24239 9.6021C3.70552 9.10434 3.5 8.63829 3.5 8.14378H1.5ZM6.02647 17.9435C4.88229 17.9132 3.50413 17.46 2.1424 16.3186L0.857601 17.8513C2.53424 19.2567 4.33868 19.8995 5.97353 19.9428L6.02647 17.9435ZM5 18.9432V21.5555H7V18.9432H5ZM7.5 4.79084V2.55554H5.5V4.79084H7.5ZM8.47671 17.1358C7.98292 17.6157 7.12567 17.9726 6.02647 17.9435L5.97353 19.9428C7.50801 19.9834 8.92197 19.4919 9.8706 18.57L8.47671 17.1358ZM6.11346 12.9778C6.73157 13.2369 7.26262 13.5032 7.6971 13.7963L8.81571 12.1384C8.23046 11.7435 7.56772 11.4188 6.88654 11.1333L6.11346 12.9778Z"
                        fill={iconColor}
                    />
                    <circle cx="16.6082" cy="13.9194" r="5.60825" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M16.6086 16.4685L16.6086 11.3702"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.157 13.9196L14.0588 13.9196"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* square-money-full */}
            {icon === 'square-money-full' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 0.849976C1.34315 0.849976 0 2.19312 0 3.84998V20.85C0 22.5068 1.34315 23.85 3 23.85H21C22.6569 23.85 24 22.5068 24 20.85V3.84998C24 2.19312 22.6569 0.849976 21 0.849976H3ZM13.0994 6.57227C13.0994 6.01998 12.6517 5.57227 12.0994 5.57227C11.5471 5.57227 11.0994 6.01998 11.0994 6.57227V7.08015C9.61727 7.45627 8.61988 8.65456 8.61988 10.0363C8.61988 10.8996 9.02182 11.5934 9.59862 12.1282C10.1516 12.6409 10.8973 13.0416 11.7129 13.3834C12.084 13.539 12.3882 13.6929 12.6289 13.8553C13.0616 14.1473 13.2209 14.4775 13.2563 14.7217C13.2926 14.9715 13.2129 15.1889 13.0598 15.3377C12.8402 15.5511 12.4146 15.7468 11.8159 15.731C11.1999 15.7147 10.4267 15.4698 9.6424 14.8124C9.21914 14.4576 8.58842 14.5131 8.23363 14.9364C7.87884 15.3596 7.93435 15.9903 8.3576 16.3451C9.14057 17.0014 9.97447 17.4107 10.7895 17.6024V18.35C10.7895 18.9023 11.2372 19.35 11.7895 19.35C12.3417 19.35 12.7895 18.9023 12.7895 18.35V17.6355C13.4292 17.4955 14.0085 17.2046 14.4537 16.7719C15.7755 15.4872 15.4523 13.3476 13.7475 12.1974C13.356 11.9333 12.9202 11.7208 12.4859 11.5389C11.7518 11.2312 11.2577 10.9391 10.9584 10.6615C10.6829 10.4061 10.6199 10.2122 10.6199 10.0363C10.6199 9.63168 11.0159 8.95788 12.0994 8.95788C12.9863 8.95788 13.6625 9.47255 13.8337 9.66389C14.2019 10.0755 14.8341 10.1106 15.2457 9.74233C15.6573 9.37407 15.6924 8.74188 15.3242 8.3303C14.9754 7.94055 14.1829 7.32764 13.0994 7.07386V6.57227Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* bank */}
            {icon === 'bank' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M4 20.5555H20"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 17.0555L6 12.5555"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 17.0555L12 12.5555"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18 17.0555L18 12.5555"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11 2.80475C11.5358 2.48245 12.4734 2.46265 13 2.80476L20.5399 7.8566C21.3459 8.38023 21.0255 9.80475 20.1017 9.80475H3.89825C2.95899 9.80475 2.65157 8.34229 3.48541 7.84074L11 2.80475Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* pix */}
            {icon === 'pix' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.1601 2.57192C13.5033 2.71845 13.8151 2.93322 14.0778 3.20396L17 6.11583C16.4308 6.11583 15.5746 6.11583 15.0759 6.58656L12.7702 8.76317C12.3848 9.12694 11.7831 9.12694 11.3978 8.76317L9.09203 6.58656C8.81153 6.32177 8.39391 6.11583 7.59606 6.11583H7.15602L10.0772 3.20396C10.3399 2.93322 10.6517 2.71845 10.9949 2.57192C11.3381 2.42539 11.706 2.34998 12.0775 2.34998C12.449 2.34998 12.8169 2.42539 13.1601 2.57192Z"
                        fill={iconColor}
                    />
                    <path
                        d="M10.8399 21.4281C10.4967 21.2815 10.1849 21.0668 9.92224 20.796L7.00002 17.8842C7.56925 17.8842 8.42542 17.8842 8.92408 17.4134L11.2298 15.2368C11.6152 14.8731 12.2169 14.8731 12.6022 15.2368L14.908 17.4134C15.1885 17.6782 15.6061 17.8842 16.4039 17.8842L16.844 17.8842L13.9228 20.796C13.6601 21.0668 13.3483 21.2815 13.0051 21.4281C12.6619 21.5746 12.294 21.65 11.9225 21.65C11.551 21.65 11.1831 21.5746 10.8399 21.4281Z"
                        fill={iconColor}
                    />
                    <path
                        d="M21.1099 9.95319L18.8078 7.75966C18.7559 7.77988 18.7004 7.79053 18.6443 7.79106H17.5975C17.0528 7.79236 16.5306 7.99849 16.1446 8.36465L13.1449 11.2211C12.8747 11.4781 12.5086 11.6224 12.1269 11.6224C11.7452 11.6224 11.3791 11.4781 11.1089 11.2211L8.09781 8.35378C7.71184 7.9874 7.18966 7.78104 6.64485 7.77959H5.3598C5.30684 7.77845 5.25451 7.76843 5.20519 7.75L2.88856 9.95319C2.31956 10.4965 2 11.2327 2 12.0003C2 12.7679 2.31956 13.5041 2.88856 14.0474L5.20012 16.25C5.24933 16.2312 5.30173 16.2212 5.35473 16.2204H6.64485C7.18965 16.2189 7.7118 16.0125 8.09781 15.6462L11.1083 12.7777C11.6526 12.2596 12.6012 12.2596 13.1449 12.7777L16.1446 15.6354C16.5306 16.0015 17.0528 16.2076 17.5975 16.2089H18.6443C18.7004 16.2093 18.7559 16.22 18.8078 16.2403L21.1099 14.0468C21.3921 13.778 21.6159 13.4589 21.7687 13.1076C21.9214 12.7564 22 12.3799 22 11.9997C22 11.6195 21.9214 11.243 21.7687 10.8918C21.6159 10.5405 21.3921 10.2214 21.1099 9.95259"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* credit card */}
            {icon === 'credit card' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M21.0759 8.84998V7.34998C21.0759 6.24541 20.1805 5.34998 19.0759 5.34998H5.07593C3.97136 5.34998 3.07593 6.24541 3.07593 7.34998V8.84998M21.0759 8.84998V16.35C21.0759 17.4545 20.1805 18.35 19.0759 18.35H5.07593C3.97136 18.35 3.07593 17.4545 3.07593 16.35V8.84998M21.0759 8.84998H3.07593"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path d="M7.07593 14.35H11.0759" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M16.0759 14.35H17.0759" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* tax */}
            {icon === 'tax' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M20.0759 20.184C20.0759 21.1087 18.9286 21.5381 18.3216 20.8405L17.764 20.1999C17.4123 19.7957 16.8044 19.7406 16.3857 20.0749L15.1158 21.089C14.723 21.4027 14.1583 21.3759 13.7968 21.0265L12.8547 20.1159C12.481 19.7546 11.8927 19.7399 11.5014 20.0822L10.3813 21.0618C10.0043 21.3914 9.44164 21.3914 9.06467 21.0618L7.97862 20.1119C7.57339 19.7575 6.96034 19.7875 6.59165 20.1798L5.80458 21.0172C5.18414 21.6773 4.07593 21.2382 4.07593 20.3323L4.07593 4.85632C4.07593 3.75175 4.97136 2.85632 6.07593 2.85632L18.0759 2.85632C19.1805 2.85632 20.0759 3.75176 20.0759 4.85632L20.0759 20.184Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <circle cx="9.64736" cy="8.9214" r="0.571429" fill={iconColor} stroke={iconColor} strokeWidth="2" />
                    <circle
                        cx="14.6474"
                        cy="13.9214"
                        r="0.571429"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path d="M9.07593 14.35L15.0759 8.34998" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* panel */}
            {icon === 'panel' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6 7.55554C6 7.00326 6.44772 6.55554 7 6.55554H10.5385C11.0907 6.55554 11.5385 7.00326 11.5385 7.55554V12.2222C11.5385 12.7745 11.0907 13.2222 10.5385 13.2222H7C6.44771 13.2222 6 12.7745 6 12.2222V7.55554ZM12.4615 12.8889C12.4615 12.3366 12.9093 11.8889 13.4615 11.8889H17C17.5523 11.8889 18 12.3366 18 12.8889V17.5555C18 18.1078 17.5523 18.5555 17 18.5555H13.4615C12.9093 18.5555 12.4615 18.1078 12.4615 17.5555V12.8889ZM6 15.5555C6 15.0033 6.44772 14.5555 7 14.5555H10.5385C11.0907 14.5555 11.5385 15.0033 11.5385 15.5555V17.5555C11.5385 18.1078 11.0907 18.5555 10.5385 18.5555H7C6.44771 18.5555 6 18.1078 6 17.5555V15.5555ZM12.4615 7.55554C12.4615 7.00326 12.9093 6.55554 13.4615 6.55554H17C17.5523 6.55554 18 7.00326 18 7.55554V9.55554C18 10.1078 17.5523 10.5555 17 10.5555H13.4615C12.9093 10.5555 12.4615 10.1078 12.4615 9.55554V7.55554Z"
                        fill={iconColor}
                    />
                    <rect x="3.07593" y="3.55554" width="18" height="18" rx="2" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* megaphone */}
            {icon === 'megaphone' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2.07593 11.6625C2.07593 10.5234 2.99934 9.59998 4.13843 9.59998H9.70092V13.725H4.13843C2.99934 13.725 2.07593 12.8016 2.07593 11.6625Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M7.08073 20.725C6.47017 20.725 5.94578 20.291 5.83153 19.6913L4.90938 14.85L7.49842 14.85L8.32993 19.2154C8.47919 19.999 7.87845 20.725 7.08073 20.725Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M9.95093 14.0564V9.26851L14.9509 5.39096L14.9509 17.934L9.95093 14.0564Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path d="M19.4509 12.1H22.0759" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M19.4509 8.59998L22.0759 6.84998"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path d="M19.4509 15.6L22.0759 17.35" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* comment-dots */}
            {icon === 'comment-dots' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle
                        cx="8.61353"
                        cy="11.2626"
                        r="0.5"
                        transform="rotate(45 8.61353 11.2626)"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="12.6135"
                        cy="11.2626"
                        r="0.5"
                        transform="rotate(45 12.6135 11.2626)"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="16.6135"
                        cy="11.2626"
                        r="0.5"
                        transform="rotate(45 16.6135 11.2626)"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.07593 5.55554C4.07593 5.00326 4.52364 4.55554 5.07593 4.55554H20.0759C20.6282 4.55554 21.0759 5.00326 21.0759 5.55554V16.5555C21.0759 17.1078 20.6282 17.5555 20.0759 17.5555H17.0759V21.0555L10.5759 17.5555H5.07593C4.52364 17.5555 4.07593 17.1078 4.07593 16.5555V5.55554Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* filter-variant */}
            {icon === 'filter-variant' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M5.68311 19.35L5.6831 5.34998"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="5.68307"
                        cy="9.17135"
                        r="1.60714"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.1117 19.35L12.1117 5.34998"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="12.1116"
                        cy="15.5285"
                        r="1.60714"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.5401 19.35L18.5401 5.34998"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="18.5402"
                        cy="9.17135"
                        r="1.60714"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* bars */}
            {icon === 'bars' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M5.07593 5.95276H19.0759"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.07593 11.9528H19.0759"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.07593 17.9528H19.0759"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* settings */}
            {icon === 'settings' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.4459 4.34998C10.4459 3.79769 10.8936 3.34998 11.4459 3.34998H12.7459C13.2982 3.34998 13.7459 3.79769 13.7459 4.34998V5.09749C13.7594 5.35608 13.8448 5.60591 13.9927 5.81871C14.1439 6.03621 14.3541 6.20598 14.5985 6.30803C14.843 6.41008 15.1115 6.44017 15.3724 6.39474C15.6283 6.35021 15.8664 6.23492 16.0599 6.06208L16.5953 5.53641C16.9869 5.15199 17.615 5.15488 18.003 5.54287L18.883 6.42287C19.0706 6.6104 19.1759 6.86476 19.1759 7.12998C19.1759 7.39519 19.0706 7.64955 18.883 7.83708L18.3488 8.37135C18.1629 8.5644 18.0381 8.80811 17.9902 9.07191C17.942 9.33774 17.974 9.6119 18.0822 9.85945C18.0861 9.86845 18.09 9.87751 18.0936 9.88663C18.1919 10.1308 18.3604 10.3404 18.5779 10.4887C18.7943 10.6364 19.0494 10.7168 19.3112 10.72H20.0759C20.6282 10.72 21.0759 11.1677 21.0759 11.72V13.01C21.0759 13.5623 20.6282 14.01 20.0759 14.01H19.3002C19.0388 14.0126 18.7838 14.0922 18.5673 14.2389C18.35 14.3861 18.181 14.5945 18.0819 14.8376L18.0751 14.8539C17.9705 15.098 17.9408 15.3676 17.9897 15.6286C18.0386 15.8897 18.164 16.1302 18.35 16.3199L18.8895 16.8694C19.2739 17.2609 19.271 17.8891 18.883 18.2771L18.003 19.1571C17.8155 19.3446 17.5611 19.45 17.2959 19.45C17.0307 19.45 16.7764 19.3446 16.5888 19.1571L16.0545 18.6228C15.8615 18.4369 15.6178 18.3121 15.354 18.2643C15.0882 18.216 14.814 18.2481 14.5665 18.3563C14.5574 18.3602 14.5484 18.364 14.5393 18.3677C14.2951 18.4659 14.0855 18.6345 13.9372 18.8519C13.7896 19.0683 13.7091 19.3234 13.7059 19.5852V20.35C13.7059 20.9023 13.2582 21.35 12.7059 21.35H11.4459C10.9128 21.35 10.4734 20.9318 10.4471 20.3993L10.4067 19.5796C10.3962 19.3149 10.3103 19.0587 10.1591 18.8412C10.0079 18.6237 9.79776 18.454 9.55333 18.3519C9.30889 18.2499 9.04039 18.2198 8.77943 18.2652C8.5236 18.3097 8.28546 18.425 8.09193 18.5979L7.55652 19.1235C7.16498 19.508 6.53681 19.5051 6.14882 19.1171L5.26882 18.2371C4.8783 17.8466 4.8783 17.2134 5.26882 16.8229L5.8031 16.2886C5.98901 16.0955 6.11377 15.8518 6.16164 15.588C6.20987 15.3222 6.17785 15.048 6.06964 14.8005C6.06571 14.7915 6.0619 14.7824 6.05824 14.7733C5.95995 14.5291 5.79142 14.3196 5.57396 14.1712C5.35761 14.0236 5.10252 13.9432 4.84069 13.94H4.07593C3.52364 13.94 3.07593 13.4923 3.07593 12.94V11.68C3.07593 11.1277 3.52364 10.68 4.07593 10.68H4.82345C5.08204 10.6665 5.33186 10.5811 5.54467 10.4332C5.76216 10.282 5.93193 10.0718 6.03398 9.82738C6.13603 9.58294 6.16612 9.31444 6.1207 9.05348C6.07616 8.79764 5.96087 8.5595 5.78803 8.36597L5.26236 7.83057C4.87795 7.43903 4.88083 6.81086 5.26882 6.42287L6.14882 5.54287C6.53935 5.15234 7.17251 5.15234 7.56303 5.54287L8.09728 6.07712C8.29033 6.26304 8.53406 6.38781 8.79786 6.43568C9.06369 6.48392 9.33786 6.4519 9.58541 6.34369C9.59441 6.33975 9.60347 6.33595 9.61258 6.33228C9.85679 6.234 10.0663 6.06546 10.2147 5.84801C10.3623 5.63165 10.4427 5.37654 10.4459 5.1147V4.34998Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="12.0759" cy="12.35" r="1" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
                </svg>
            )}
            {/* question-clean */}
            {icon === 'question-clean' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8 9.22221C8 7.65434 9.11255 5.55554 12 5.55554C14.5755 5.55554 16 7.33083 16 9.22221C16 11.1136 14.8572 12.199 13.7143 13.2673C12.5714 14.3356 12 14.9093 12 16.5555"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path d="M12 19.9613V19.9474" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* alert */}
            {icon === 'alert' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="8" stroke={iconColor} strokeWidth="2" />
                    <path d="M12 16.6799V16.6499" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M12 8.02002L12 13.82"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* options */}
            {icon === 'options' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="11.5" cy="7.84998" r="1.5" fill={iconColor} />
                    <circle cx="11.5" cy="12.85" r="1.5" fill={iconColor} />
                    <circle cx="11.5" cy="17.85" r="1.5" fill={iconColor} />
                </svg>
            )}
            {/* processing */}
            {icon === 'processing' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="6.5" cy="12.85" r="1.5" transform="rotate(-90 6.5 12.85)" fill={iconColor} />
                    <circle cx="11.5" cy="12.85" r="1.5" transform="rotate(-90 11.5 12.85)" fill={iconColor} />
                    <circle cx="16.5" cy="12.85" r="1.5" transform="rotate(-90 16.5 12.85)" fill={iconColor} />
                </svg>
            )}
            {/* options-mobile */}
            {icon === 'options-mobile' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="11.5573" cy="5.90729" r="1.55732" fill={iconColor} />
                    <circle cx="11.5573" cy="12.3499" r="1.55732" fill={iconColor} />
                    <circle cx="11.5573" cy="18.7927" r="1.55732" fill={iconColor} />
                </svg>
            )}
            {/* ellipsis-circle */}
            {icon === 'ellipsis-circle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22.35C17.5228 22.35 22 17.8728 22 12.35C22 6.82713 17.5228 2.34998 12 2.34998C6.47715 2.34998 2 6.82713 2 12.35C2 17.8728 6.47715 22.35 12 22.35ZM19.6 12.35C19.6 13.4545 18.7046 14.35 17.6 14.35C16.4954 14.35 15.6 13.4545 15.6 12.35C15.6 11.2454 16.4954 10.35 17.6 10.35C18.7046 10.35 19.6 11.2454 19.6 12.35ZM12 14.35C13.1046 14.35 14 13.4545 14 12.35C14 11.2454 13.1046 10.35 12 10.35C10.8954 10.35 9.99999 11.2454 9.99999 12.35C9.99999 13.4545 10.8954 14.35 12 14.35ZM6.4 14.3501C7.50457 14.3501 8.4 13.4547 8.4 12.3501C8.4 11.2455 7.50457 10.3501 6.4 10.3501C5.29543 10.3501 4.4 11.2455 4.4 12.3501C4.4 13.4547 5.29543 14.3501 6.4 14.3501Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* exclamation-circle */}
            {icon === 'exclamation-circle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12.35C22 17.8728 17.5228 22.35 12 22.35C6.47716 22.35 2 17.8728 2 12.35C2 6.82714 6.47716 2.34998 12 2.34998C17.5228 2.34998 22 6.82714 22 12.35ZM13.4286 18.0643C13.4286 18.8532 12.789 19.4928 12 19.4928C11.211 19.4928 10.5714 18.8532 10.5714 18.0643C10.5714 17.2753 11.211 16.6357 12 16.6357C12.789 16.6357 13.4286 17.2753 13.4286 18.0643ZM12 5.20712C11.211 5.20712 10.5714 5.84671 10.5714 6.63569V14.2547C10.5714 15.0437 11.211 15.6833 12 15.6833C12.789 15.6833 13.4286 15.0437 13.4286 14.2547V6.63569C13.4286 5.84671 12.789 5.20712 12 5.20712Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* info-circle */}
            {icon === 'info-circle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.00006 12.3502C2.00006 6.82738 6.47722 2.35022 12.0001 2.35022C17.5229 2.35022 22.0001 6.82738 22.0001 12.3502C22.0001 17.8731 17.5229 22.3502 12.0001 22.3502C6.47722 22.3502 2.00006 17.8731 2.00006 12.3502ZM10.5715 6.63593C10.5715 5.84695 11.2111 5.20736 12.0001 5.20736C12.789 5.20736 13.4286 5.84695 13.4286 6.63593C13.4286 7.42492 12.789 8.06451 12.0001 8.06451C11.2111 8.06451 10.5715 7.42492 10.5715 6.63593ZM12.0001 19.4931C12.789 19.4931 13.4286 18.8535 13.4286 18.0645L13.4286 10.4455C13.4286 9.65648 12.789 9.01689 12.0001 9.01689C11.2111 9.01689 10.5715 9.65648 10.5715 10.4455L10.5715 18.0645C10.5715 18.8535 11.2111 19.4931 12.0001 19.4931Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* rights */}
            {icon === 'rights' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22.35C17.5228 22.35 22 17.8728 22 12.35C22 6.82713 17.5228 2.34998 12 2.34998C6.47715 2.34998 2 6.82713 2 12.35C2 17.8728 6.47715 22.35 12 22.35Z"
                        fill={iconColor}
                    />
                    <path
                        d="M7.17188 18.35V6.89685H12.0391C13.263 6.89685 14.151 7.00102 14.7031 7.20935C15.2604 7.41248 15.7057 7.77706 16.0391 8.3031C16.3724 8.82914 16.5391 9.4307 16.5391 10.1078C16.5391 10.9672 16.2865 11.6781 15.7812 12.2406C15.276 12.7979 14.5208 13.1495 13.5156 13.2953C14.0156 13.587 14.4271 13.9073 14.75 14.2562C15.0781 14.6052 15.5182 15.225 16.0703 16.1156L17.4688 18.35H14.7031L13.0312 15.8578C12.4375 14.9672 12.0312 14.4073 11.8125 14.1781C11.5938 13.9437 11.362 13.7849 11.1172 13.7015C10.8724 13.613 10.4844 13.5687 9.95312 13.5687H9.48438V18.35H7.17188ZM9.48438 11.7406H11.1953C12.3047 11.7406 12.9974 11.6937 13.2734 11.6C13.5495 11.5062 13.7656 11.3448 13.9219 11.1156C14.0781 10.8864 14.1562 10.6 14.1562 10.2562C14.1562 9.87081 14.0521 9.56091 13.8438 9.32654C13.6406 9.08695 13.3516 8.93591 12.9766 8.87341C12.7891 8.84737 12.2266 8.83435 11.2891 8.83435H9.48438V11.7406Z"
                        fill="white"
                    />
                </svg>
            )}
            {/* times-circle */}
            {icon === 'times-circle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12.35C22 17.8728 17.5228 22.35 12 22.35C6.47715 22.35 2 17.8728 2 12.35C2 6.82713 6.47715 2.34998 12 2.34998C17.5228 2.34998 22 6.82713 22 12.35ZM16.119 8.23097C16.5529 8.66488 16.5529 9.3684 16.119 9.80232L13.5713 12.35L16.119 14.8976C16.5529 15.3316 16.5529 16.0351 16.119 16.469C15.6851 16.9029 14.9816 16.9029 14.5477 16.469L12 13.9213L9.45234 16.469C9.01843 16.9029 8.31491 16.9029 7.88099 16.469C7.44708 16.0351 7.44708 15.3316 7.88099 14.8976L10.4287 12.35L7.88099 9.80232C7.44708 9.3684 7.44708 8.66488 7.88099 8.23097C8.31491 7.79705 9.01843 7.79705 9.45234 8.23097L12 10.7786L14.5477 8.23097C14.9816 7.79705 15.6851 7.79705 16.119 8.23097Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* times-square */}
            {icon === 'times-square' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 3.48041C0 1.75152 1.34315 0.349976 3 0.349976H21C22.6569 0.349976 24 1.75152 24 3.48041V21.2195C24 22.9484 22.6569 24.35 21 24.35H3C1.34315 24.35 0 22.9484 0 21.2195V3.48041ZM17.5607 6.54755C18.1464 7.1588 18.1464 8.14985 17.5607 8.7611L13.8713 12.6108L17.5607 16.4606C18.1464 17.0718 18.1464 18.0629 17.5607 18.6741C16.9749 19.2854 16.0251 19.2854 15.4393 18.6741L11.75 14.8244L8.06066 18.6741C7.47487 19.2854 6.52513 19.2854 5.93934 18.6741C5.35355 18.0629 5.35355 17.0718 5.93934 16.4606L9.62868 12.6108L5.93934 8.7611C5.35355 8.14984 5.35355 7.1588 5.93934 6.54755C6.52513 5.93629 7.47487 5.93629 8.06066 6.54755L11.75 10.3973L15.4393 6.54755C16.0251 5.93629 16.9749 5.93629 17.5607 6.54755Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* check-square */}
            {icon === 'check-square' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 0.349976C1.79086 0.349976 0 2.14084 0 4.34998V20.35C0 22.5591 1.79086 24.35 4 24.35H20C22.2091 24.35 24 22.5591 24 20.35V4.34998C24 2.14084 22.2091 0.349976 20 0.349976H4ZM19.0607 9.41064C19.6464 8.82485 19.6464 7.8751 19.0607 7.28932C18.4749 6.70353 17.5251 6.70353 16.9393 7.28932L9.6 14.6287L7.06066 12.0893C6.47487 11.5035 5.52513 11.5035 4.93934 12.0893C4.35355 12.6751 4.35355 13.6248 4.93934 14.2106L8.53934 17.8106C8.82064 18.0919 9.20218 18.25 9.6 18.25C9.99782 18.25 10.3794 18.0919 10.6607 17.8106L19.0607 9.41064Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* pause-square */}
            {icon === 'pause-square' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 3.34998C0 1.69312 1.34315 0.349976 3 0.349976H21C22.6569 0.349976 24 1.69312 24 3.34998V21.35C24 23.0068 22.6569 24.35 21 24.35H3C1.34315 24.35 0 23.0068 0 21.35V3.34998ZM9 6.84998C9.82843 6.84998 10.5 7.52155 10.5 8.34998V16.35C10.5 17.1784 9.82843 17.85 9 17.85C8.17157 17.85 7.5 17.1784 7.5 16.35L7.5 8.34998C7.5 7.52155 8.17157 6.84998 9 6.84998ZM16.5 8.34998C16.5 7.52155 15.8284 6.84998 15 6.84998C14.1716 6.84998 13.5 7.52155 13.5 8.34998V16.35C13.5 17.1784 14.1716 17.85 15 17.85C15.8284 17.85 16.5 17.1784 16.5 16.35V8.34998Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* play-square */}
            {icon === 'play-square' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 0.349976C1.34315 0.349976 0 1.69312 0 3.34998V21.35C0 23.0068 1.34315 24.35 3 24.35H21C22.6569 24.35 24 23.0068 24 21.35V3.34998C24 1.69312 22.6569 0.349976 21 0.349976H3ZM16.9349 13.216C17.6016 12.8311 17.6016 11.8688 16.9349 11.4839L9.54263 7.216C8.87597 6.8311 8.04263 7.31223 8.04263 8.08203V16.6179C8.04263 17.3877 8.87597 17.8689 9.54263 17.4839L16.9349 13.216Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* exclamation-square */}
            {icon === 'exclamation-square' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 3.34998C0 1.69312 1.34315 0.349976 3 0.349976H21C22.6569 0.349976 24 1.69312 24 3.34998V21.35C24 23.0068 22.6569 24.35 21 24.35H3C1.34315 24.35 0 23.0068 0 21.35V3.34998ZM13.5 17.85C13.5 18.6784 12.8284 19.35 12 19.35C11.1716 19.35 10.5 18.6784 10.5 17.85C10.5 17.0215 11.1716 16.35 12 16.35C12.8284 16.35 13.5 17.0215 13.5 17.85ZM13.5 6.84998C13.5 6.02155 12.8284 5.34998 12 5.34998C11.1716 5.34998 10.5 6.02155 10.5 6.84998V13.85C10.5 14.6784 11.1716 15.35 12 15.35C12.8284 15.35 13.5 14.6784 13.5 13.85V6.84998Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* moon */}
            {icon === 'moon' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2 12.35C1.9999 13.9201 2.36955 15.4682 3.07901 16.869C3.78847 18.2697 4.8178 19.4837 6.08367 20.4127C7.34955 21.3416 8.81638 21.9594 10.3654 22.2161C11.9145 22.4727 13.5022 22.361 15 21.89C12.9696 21.2519 11.1957 19.9826 9.93641 18.2669C8.67711 16.5511 7.99807 14.4783 7.99807 12.35C7.99807 10.2217 8.67711 8.14885 9.93641 6.43308C11.1957 4.7173 12.9696 3.44806 15 2.80997C13.5022 2.33893 11.9145 2.22721 10.3654 2.48386C8.81638 2.74052 7.34955 3.35833 6.08367 4.28729C4.8178 5.21624 3.78847 6.43023 3.07901 7.83097C2.36955 9.2317 1.9999 10.7798 2 12.35Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* sun */}
            {icon === 'sun' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M2 12.3H3.1" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 12.3H22.1" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M12.05 22.35L12.05 21.25" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M12.05 3.34998L12.05 2.24998" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M4.9436 19.4065L5.72142 18.6287"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M18.3786 5.97144L19.1564 5.19362"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M19.1564 19.4065L18.3786 18.6287"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M5.72137 5.97144L4.94356 5.19362"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M12 6.29993C10.4087 6.29993 8.88258 6.93207 7.75736 8.05729C6.63214 9.1825 6 10.7086 6 12.2999C6 13.8912 6.63214 15.4173 7.75736 16.5426C8.88258 17.6678 10.4087 18.2999 12 18.2999C13.5913 18.2999 15.1174 17.6678 16.2426 16.5426C17.3679 15.4173 18 13.8912 18 12.2999C18 8.97993 15.31 6.29993 12 6.29993Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* share-options */}
            {icon === 'share-options' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M16 7.34998L7 12.35L16 17.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="15.5" cy="7.05554" r="2.5" fill={iconColor} stroke={iconColor} strokeWidth="2" />
                    <circle cx="15.5" cy="17.0555" r="2.5" fill={iconColor} stroke={iconColor} strokeWidth="2" />
                    <circle cx="6.5" cy="12.0555" r="2.5" fill={iconColor} stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* save */}
            {icon === 'save' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M4 5.34998V19.35C4 19.9023 4.44772 20.35 5 20.35H19C19.5523 20.35 20 19.9023 20 19.35V7.76419C20 7.49897 19.8946 7.24462 19.7071 7.05708L17.2929 4.64287C17.1054 4.45533 16.851 4.34998 16.5858 4.34998H5C4.44772 4.34998 4 4.79769 4 5.34998Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M8 19.35V13.35C8 12.7977 8.44772 12.35 9 12.35H15C15.5523 12.35 16 12.7977 16 13.35V19.35"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M8 5.34998V7.34998C8 7.90226 8.44772 8.34998 9 8.34998H14C14.5523 8.34998 15 7.90226 15 7.34998V5.34998"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                </svg>
            )}
            {/* link */}
            {icon === 'link' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M15.3137 10.2789L9.65685 15.9358"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.94975 12.4002L6.12132 15.2287C4.94975 16.4002 4.94975 18.2997 6.12132 19.4713V19.4713C7.29289 20.6429 9.19239 20.6429 10.364 19.4713L13.1924 16.6429"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.0208 13.8145L18.8492 10.9861C20.0208 9.81449 20.0208 7.915 18.8492 6.74343V6.74343C17.6777 5.57185 15.7782 5.57185 14.6066 6.74343L11.7782 9.57185"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* unlink-icon */}
            {icon === 'unlink-icon' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8.00007 8.34998L16.9092 17.2591"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.99999 13.4408L5.45453 15.9863C4.40017 17.0407 4.40016 18.7501 5.45453 19.8045V19.8045C6.5089 20.8588 8.21836 20.8588 9.27273 19.8045L11.8182 17.259"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.9091 12.1681L19.4545 9.6226C20.5089 8.56823 20.5089 6.85877 19.4545 5.8044V5.8044C18.4002 4.75004 16.6907 4.75004 15.6363 5.8044L13.0909 8.34987"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* bold */}
            {icon === 'bold' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8 7.34998H11.5C12.8807 7.34998 14 8.46926 14 9.84998V9.84998C14 11.2307 12.8807 12.35 11.5 12.35H8V7.34998Z"
                        stroke={iconColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 12.35H13C14.6569 12.35 16 13.6931 16 15.35V15.35C16 17.0068 14.6569 18.35 13 18.35H8V12.35Z"
                        stroke={iconColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* italic */}
            {icon === 'italic' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M13 18.35H8"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 7.34998H11"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.5 7.34998L10.5 18.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* underline */}
            {icon === 'underline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M15 8.09998C15 6.58119 13.6569 5.34998 12 5.34998C10.3431 5.34998 9 6.58119 9 8.09998C9 9.61876 10 9.93331 12 10.85C14 11.7666 15 12.0812 15 13.6C15 15.1188 13.6569 16.35 12 16.35C10.3431 16.35 9 15.1188 9 13.6"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 19.35H17"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* strikethrough */}
            {icon === 'strikethrough' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M11 9.34998H12.5C13.3284 9.34998 14 10.0215 14 10.85V10.85C14 11.6784 13.3284 12.35 12.5 12.35H11V9.34998Z"
                        stroke={iconColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11 12.35H13.5C14.3284 12.35 15 13.0215 15 13.85V13.85C15 14.6784 14.3284 15.35 13.5 15.35H11V12.35Z"
                        stroke={iconColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 15.35L6.5 9.34998L9 15.35"
                        stroke={iconColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21 9.34998H20C18.3431 9.34998 17 10.6931 17 12.35V12.35C17 14.0068 18.3431 15.35 20 15.35H21"
                        stroke={iconColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M3 12.35L21 12.35" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
            {/* bullet-icon */}
            {icon === 'bullet-icon' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="5.5" cy="7.84998" r="1.5" fill={iconColor} />
                    <path
                        d="M10 7.84998H19"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="5.5" cy="12.85" r="1.5" fill={iconColor} />
                    <path
                        d="M10 12.85H19"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="5.5" cy="17.85" r="1.5" fill={iconColor} />
                    <path
                        d="M10 17.85H19"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* list-ol */}
            {icon === 'list-ol' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path d="M5 15.85H7V17.35H5.5" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 18.85H7V17.35" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M10.5 7.84998H19.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.5 12.85H19.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.5 17.85H19.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 6.34998L6 5.34998V8.84998"
                        stroke={iconColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 10.85H6.29289C6.68342 10.85 7 11.1666 7 11.5571V11.5571C7 11.7446 6.9255 11.9245 6.79289 12.0571L5 13.85H7"
                        stroke={iconColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* align-left */}
            {icon === 'align-left' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6 6.34998H14"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 10.35H19"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 14.35H14"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 18.35H19"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* align-center */}
            {icon === 'align-center' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M8 6.34998H16"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 10.35L19 10.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 14.35H16"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 18.35L19 18.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* align-right */}
            {icon === 'align-right' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19 6.34998H11"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 10.35H6"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 14.35H11"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 18.35H6"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* audio */}
            {icon === 'audio' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6.2375 10.35H5.5C4.39543 10.35 3.5 11.2454 3.5 12.35V12.35C3.5 13.4545 4.39543 14.35 5.5 14.35H6.2375"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M6.5 14.4304V10.2696L10.5 5.22198L10.5 19.478L6.5 14.4304Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M14.5 7.34998C15.7144 8.49013 16.5 10.3054 16.5 12.35C16.5 14.3946 15.7144 16.2098 14.5 17.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17.5 4.34998C19.3217 6.17422 20.5 9.07864 20.5 12.35C20.5 15.6213 19.3217 18.5257 17.5 20.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* nft */}
            {icon === 'nft' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3.90002 7.46613L12.0399 3.34998L20.1 7.46613V10.85H18.3M16.5 10.85H18.3M18.3 10.85V14.93"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.27502 10.7499V14.7499L3.90002 10.7499V17.3L12 21.35L20.1 17.3"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.65 14.9299V13.3299M13.35 10.85H10.65V13.3299M10.65 13.3299H12"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* to-file */}
            {icon === 'to-file' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M18.9241 15.5555V9.55554M4.92407 12.35V3.55554H12.9241M18.9241 9.55554H12.9241V3.55554M18.9241 9.55554L12.9241 3.55554"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21 21.35V15.35H13L10.5 12.35H3V21.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.5 18.8599L8.69012 21.05L10.8802 18.8599"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.69 15.85L8.69 20.8596"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* backspace */}
            {icon === 'backspace' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M16.6364 8.89543L10.6364 14.8954M10.6364 8.89543L13.6364 11.8954L16.6364 14.8954M21 18.4409H7.89882C7.56447 18.4409 7.25224 18.2738 7.06677 17.9956L3.3698 12.4501C3.14587 12.1142 3.14587 11.6766 3.3698 11.3407L7.06677 5.79528C7.25224 5.51708 7.56447 5.34998 7.89882 5.34998H21V18.4409Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* quote */}
            {icon === 'quote' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M10.1595 15.2702C10.1595 16.4188 9.22839 17.35 8.07977 17.35C6.93114 17.35 6 16.4188 6 15.2702V14.3746C6 13.1707 6.10362 12.2233 6.31086 11.5325C6.52796 10.8319 6.9227 10.2052 7.49507 9.65261C7.89046 9.27085 8.3612 8.9456 8.90728 8.67687C9.33778 8.46502 9.84225 8.67983 10.0478 9.11337C10.2882 9.62036 10.0199 10.2091 9.53793 10.4964C9.18921 10.7043 8.91286 10.946 8.70888 11.2217C8.35362 11.7151 8.16612 12.3714 8.14638 13.1904C9.25822 13.1904 10.1595 14.0918 10.1595 15.2036V15.2702Z"
                        fill={iconColor}
                    />
                    <path
                        d="M17.1595 15.2702C17.1595 16.4188 16.2284 17.35 15.0798 17.35C13.9311 17.35 13 16.4188 13 15.2702V14.3746C13 13.1707 13.1036 12.2233 13.3109 11.5325C13.528 10.8319 13.9227 10.2052 14.4951 9.65261C14.8905 9.27085 15.3612 8.9456 15.9073 8.67687C16.3378 8.46502 16.8423 8.67983 17.0478 9.11337C17.2882 9.62036 17.0199 10.2091 16.5379 10.4964C16.1892 10.7043 15.9129 10.946 15.7089 11.2217C15.3536 11.7151 15.1661 12.3714 15.1464 13.1904C16.2582 13.1904 17.1595 14.0918 17.1595 15.2036V15.2702Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* funnel */}
            {icon === 'funnel' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M10.4902 10.8806V20.35L13.5098 17.7377V10.8806L19 4.34998H5L10.4902 10.8806Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* paperclip */}
            {icon === 'paperclip' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M10.3 7.74159V15.6695C10.3 16.6084 11.0611 17.3695 12 17.3695V17.3695C12.9389 17.3695 13.7 16.6084 13.7 15.6695V6.90554C13.7 5.05539 12.2002 3.55554 10.35 3.55554V3.55554C8.49985 3.55554 7 5.05539 7 6.90554V16.5555C7 19.317 9.23858 21.5555 12 21.5555V21.5555C14.7614 21.5555 17 19.317 17 16.5555V7.74159"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* filter */}
            {icon === 'filter' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M22.5 7.59998C22.5 7.18576 22.1642 6.84998 21.75 6.84998H19.425C19.05 5.12498 17.55 3.84998 15.75 3.84998C13.95 3.84998 12.45 5.12498 12.075 6.84998H6.7875H2.25C1.83579 6.84998 1.5 7.18576 1.5 7.59998C1.5 8.01419 1.83579 8.34998 2.25 8.34998H12.075C12.45 10.075 13.95 11.35 15.75 11.35C17.55 11.35 19.05 10.075 19.425 8.34998H21.75C22.1642 8.34998 22.5 8.01419 22.5 7.59998ZM15.75 9.84998C14.475 9.84998 13.5 8.87498 13.5 7.59998C13.5 6.32498 14.475 5.34998 15.75 5.34998C17.025 5.34998 18 6.32498 18 7.59998C18 8.87498 17.025 9.84998 15.75 9.84998ZM1.5 18.1C1.5 18.5142 1.83579 18.85 2.25 18.85H4.575C4.95 20.575 6.45 21.85 8.25 21.85C10.05 21.85 11.55 20.575 11.925 18.85H21.75C22.1642 18.85 22.5 18.5142 22.5 18.1C22.5 17.6858 22.1642 17.35 21.75 17.35H11.925C11.55 15.625 10.05 14.35 8.25 14.35C6.45 14.35 4.95 15.625 4.575 17.35H2.25C1.83579 17.35 1.5 17.6858 1.5 18.1ZM8.25 15.85C9.525 15.85 10.5 16.825 10.5 18.1C10.5 19.375 9.525 20.35 8.25 20.35C6.975 20.35 6 19.375 6 18.1C6 16.825 6.975 15.85 8.25 15.85Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* reward */}
            {icon === 'reward' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M14.7817 19.1709C14.8413 19.4258 14.5664 19.628 14.3408 19.4952L11.9998 18.1177L9.65873 19.4952C9.43309 19.628 9.15828 19.4258 9.21781 19.1709L9.83977 16.5077L7.78395 14.7297C7.58468 14.5573 7.69097 14.2301 7.95348 14.2078L10.6598 13.9777L11.7261 11.487C11.8291 11.2462 12.1704 11.2462 12.2735 11.487L13.3398 13.9777L16.0461 14.2078C16.3086 14.2301 16.4149 14.5573 16.2156 14.7297L14.1598 16.5077L14.7817 19.1709ZM19.9998 3.68062C19.9998 2.94445 19.403 2.34766 18.6668 2.34766L5.33274 2.34766C4.59656 2.34766 3.99977 2.94445 3.99977 3.68062C3.99977 4.10049 4.1976 4.49582 4.53366 4.74752L8.85977 7.98766C7.16418 8.71124 5.77052 9.99823 4.9145 11.631C4.05848 13.2637 3.79263 15.142 4.16191 16.9482C4.53118 18.7543 5.51293 20.3775 6.9411 21.5432C8.36928 22.709 10.1562 23.3457 11.9998 23.3457C13.8433 23.3457 15.6303 22.709 17.0584 21.5432C18.4866 20.3775 19.4684 18.7543 19.8376 16.9482C20.2069 15.142 19.9411 13.2637 19.085 11.631C18.229 9.99823 16.8354 8.71124 15.1398 7.98766L19.4659 4.74752C19.8019 4.49582 19.9998 4.10049 19.9998 3.68062ZM17.9998 15.3477C18.0003 16.4839 17.6782 17.597 17.0709 18.5574C16.4635 19.5177 15.596 20.2859 14.5692 20.7725C13.5424 21.2591 12.3985 21.4441 11.2706 21.306C10.1428 21.1679 9.07733 20.7124 8.19823 19.9925C7.31913 19.2726 6.66253 18.3178 6.30483 17.2393C5.94712 16.1608 5.90302 15.0029 6.17766 13.9003C6.45229 12.7977 7.03437 11.7958 7.85616 11.0111C8.67796 10.2264 9.70568 9.69112 10.8198 9.46766C11.5983 9.30761 12.4012 9.30761 13.1798 9.46766C14.5387 9.74023 15.7613 10.4749 16.64 11.5468C17.5187 12.6186 17.9991 13.9617 17.9998 15.3477ZM12.6298 7.34766L11.3698 7.34766L7.36977 4.34766L16.7098 4.34766L12.6298 7.34766Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* camera-outline */}
            {icon === 'camera-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M20 4.34998H16.83L15.5946 2.99986C15.2158 2.5858 14.6804 2.34998 14.1191 2.34998H9.88089C9.31964 2.34998 8.78422 2.5858 8.40535 2.99986L7.17 4.34998H4C3.46957 4.34998 2.96086 4.56069 2.58579 4.93576C2.21071 5.31083 2 5.81954 2 6.34998V18.35C2 18.8804 2.21071 19.3891 2.58579 19.7642C2.96086 20.1393 3.46957 20.35 4 20.35H20C20.5304 20.35 21.0391 20.1393 21.4142 19.7642C21.7893 19.3891 22 18.8804 22 18.35V6.34998C22 5.81954 21.7893 5.31083 21.4142 4.93576C21.0391 4.56069 20.5304 4.34998 20 4.34998ZM20 17.35C20 17.9023 19.5523 18.35 19 18.35H5C4.44772 18.35 4 17.9023 4 17.35V7.34998C4 6.79769 4.44772 6.34998 5 6.34998H7.16912C7.73036 6.34998 8.26578 6.11415 8.64465 5.70009L9.28535 4.99986C9.66422 4.5858 10.1996 4.34998 10.7609 4.34998H13.2391C13.8004 4.34998 14.3358 4.5858 14.7146 4.99986L15.3554 5.70009C15.7342 6.11415 16.2696 6.34998 16.8309 6.34998H19C19.5523 6.34998 20 6.79769 20 7.34998V17.35ZM12 7.34998C10.6739 7.34998 9.40215 7.87676 8.46447 8.81444C7.52678 9.75212 7 11.0239 7 12.35C7 13.6761 7.52678 14.9478 8.46447 15.8855C9.40215 16.8232 10.6739 17.35 12 17.35C13.3261 17.35 14.5979 16.8232 15.5355 15.8855C16.4732 14.9478 17 13.6761 17 12.35C17 11.0239 16.4732 9.75212 15.5355 8.81444C14.5979 7.87676 13.3261 7.34998 12 7.34998ZM12 15.35C11.2044 15.35 10.4413 15.0339 9.87868 14.4713C9.31607 13.9087 9 13.1456 9 12.35C9 11.5543 9.31607 10.7913 9.87868 10.2287C10.4413 9.66605 11.2044 9.34998 12 9.34998C12.7956 9.34998 13.5587 9.66605 14.1213 10.2287C14.6839 10.7913 15 11.5543 15 12.35C15 13.1456 14.6839 13.9087 14.1213 14.4713C13.5587 15.0339 12.7956 15.35 12 15.35Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* edit-board */}
            {icon === 'edit-board' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <g id="edit">
                        <rect id="Rectangle" opacity="0.01" y="0.349976" width="24" height="24" fill={iconColor} />
                        <path
                            id="Union"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.1944 5.24946C16.567 4.87681 17.0625 4.67157 17.5896 4.67157C18.1166 4.67157 18.6121 4.87681 18.9848 5.24943L19.4217 5.68634C19.7943 6.05899 19.9996 6.55446 19.9996 7.0815C19.9996 7.60854 19.7943 8.10401 19.4217 8.47671L12.7799 15.1185C12.6981 15.2003 12.5964 15.2596 12.4849 15.2905L9.33181 16.164C9.27273 16.1803 9.21261 16.1883 9.15293 16.1883C8.97759 16.1883 8.80645 16.1194 8.67905 15.992C8.50832 15.8213 8.44265 15.572 8.5071 15.3393L9.38058 12.1862C9.41148 12.0747 9.47071 11.9731 9.55254 11.8913L16.1944 5.24946ZM18.0371 6.19715C17.9175 6.07764 17.7586 6.01179 17.5896 6.01179C17.4205 6.01179 17.2616 6.07761 17.1421 6.19715L16.9578 6.38143L18.2897 7.71334L18.474 7.5291C18.5935 7.40956 18.6593 7.25063 18.6593 7.08158C18.6593 6.91252 18.5935 6.7536 18.474 6.63406L18.0371 6.19715ZM16.0101 7.32911L10.9954 12.3438L12.3273 13.6757L17.342 8.66102L16.0101 7.32911ZM11.0528 14.2966L10.3745 13.6184L10.1147 14.5564L11.0528 14.2966ZM6.61465 20.14C5.42406 20.14 4.45541 19.1713 4.45541 17.9807V8.27941C4.45541 7.08882 5.42406 6.12018 6.61465 6.12018H9.92018C10.2903 6.12018 10.5903 6.4202 10.5903 6.79028C10.5903 7.16037 10.2903 7.46039 9.92018 7.46039H6.61465C6.16304 7.46039 5.79563 7.8278 5.79563 8.27941V17.9807C5.79563 18.4323 6.16304 18.7997 6.61465 18.7997H17.0606C17.5122 18.7997 17.8796 18.4323 17.8796 17.9807V14.6752C17.8796 14.3051 18.1796 14.0051 18.5497 14.0051C18.9198 14.0051 19.2198 14.3051 19.2198 14.6752V17.9807C19.2198 19.1713 18.2512 20.14 17.0606 20.14H6.61465Z"
                            fill={iconColor}
                        />
                    </g>
                </svg>
            )}
            {/* refund */}
            {icon === 'refund' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M14.2779 9.90024C14.6462 10.3118 15.2784 10.3469 15.69 9.97868C16.1015 9.61042 16.1367 8.97823 15.7684 8.56665L14.2779 9.90024ZM12.7432 12.4187L12.3567 13.3409L12.7432 12.4187ZM10.5357 14.519C10.1124 14.1642 9.48168 14.2197 9.12689 14.643C8.77211 15.0662 8.82761 15.697 9.25087 16.0517L10.5357 14.519ZM12.4582 16.3445L12.4847 15.3449L12.4582 16.3445ZM11.4582 17.8336C11.4582 18.3858 11.9059 18.8336 12.4582 18.8336C13.0105 18.8336 13.4582 18.3858 13.4582 17.8336H11.4582ZM13.7432 7.00378C13.7432 6.4515 13.2955 6.00378 12.7432 6.00378C12.1909 6.00378 11.7432 6.4515 11.7432 7.00378H13.7432ZM14.2672 15.7231L13.5702 15.006L14.2672 15.7231ZM13.7443 12.9384L14.3036 12.1094L13.7443 12.9384ZM15.7684 8.56665C15.3447 8.09306 14.2361 7.27788 12.7432 7.27788V9.27787C13.5303 9.27787 14.1317 9.73678 14.2779 9.90024L15.7684 8.56665ZM12.7432 7.27788C10.852 7.27788 9.46325 8.59885 9.46325 10.189H11.4633C11.4633 9.86804 11.7844 9.27787 12.7432 9.27787V7.27788ZM9.46325 10.189C9.46325 11.0105 9.84648 11.6686 10.389 12.1715C10.9077 12.6524 11.6034 13.0253 12.3567 13.3409L13.1297 11.4964C12.458 11.2149 12.0138 10.9506 11.7488 10.7049C11.5075 10.4812 11.4633 10.3231 11.4633 10.189H9.46325ZM12.4847 15.3449C11.938 15.3304 11.2441 15.1129 10.5357 14.519L9.25087 16.0517C10.2742 16.9096 11.3944 17.3167 12.4317 17.3442L12.4847 15.3449ZM11.4582 16.3445V17.8336H13.4582V16.3445H11.4582ZM13.7432 8.27788V7.00378H11.7432V8.27788H13.7432ZM13.5702 15.006C13.3865 15.1845 13.0176 15.359 12.4847 15.3449L12.4317 17.3442C13.4 17.3698 14.3256 17.0607 14.9641 16.4402L13.5702 15.006ZM12.3567 13.3409C12.6954 13.4829 12.9698 13.6221 13.185 13.7674L14.3036 12.1094C13.9376 11.8625 13.5316 11.6648 13.1297 11.4964L12.3567 13.3409ZM13.185 13.7674C13.5663 14.0246 13.6984 14.3093 13.7274 14.5089C13.7572 14.7141 13.6917 14.8879 13.5702 15.006L14.9641 16.4402C16.2228 15.2169 15.9056 13.1903 14.3036 12.1094L13.185 13.7674Z"
                        fill={iconColor}
                    />
                    <path
                        d="M3.51217 16.1346C4.9722 19.4763 8.30661 21.8116 12.1865 21.8116C17.4119 21.8116 21.648 17.5755 21.648 12.35C21.648 7.12452 17.4119 2.88843 12.1865 2.88843C8.55568 2.88843 5.40256 4.93351 3.81618 7.9346"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M7.05072 9.13025L2.35202 9.13025L2.35202 4.43155"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* cashback */}
            {icon === 'cashback' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M2.63118 16.8248C4.64303 15.6683 4.85114 15.6683 6.20125 15.6683C8.54841 15.6683 8.58593 16.4559 9.93604 16.4559C11.2862 16.4559 11.295 16.4559 12.9827 16.4559C14.9979 16.4559 14.9979 19.1377 12.9827 19.1377C12.2366 19.1377 10.62 19.1377 10.2825 19.1377"
                        stroke={iconColor}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.50684 23.1219L5.25433 21.3725L9.96694 22.8508C10.5305 23.0276 11.1337 23.0341 11.7009 22.8695L16.0931 21.595C16.5957 21.4492 17.0513 21.1745 17.4149 20.7981L22.4928 15.541C22.1673 15.055 21.0604 14.433 19.2373 15.8325C17.4142 17.2321 15.225 18.2891 14.2483 18.6778"
                        stroke={iconColor}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.6399 7.16569C14.9529 7.51554 15.4902 7.54539 15.8401 7.23237C16.1899 6.91935 16.2198 6.38199 15.9068 6.03214L14.6399 7.16569ZM13.4541 9.14047L13.1255 9.9244L13.4541 9.14047ZM11.7261 10.7765C11.3663 10.4749 10.8302 10.5221 10.5287 10.8818C10.2271 11.2416 10.2743 11.7777 10.634 12.0793L11.7261 10.7765ZM13.2267 12.273L13.2492 11.4233L13.2267 12.273ZM12.3767 13.4611C12.3767 13.9306 12.7572 14.3111 13.2267 14.3111C13.6961 14.3111 14.0767 13.9306 14.0767 13.4611H12.3767ZM14.3041 4.81982C14.3041 4.35038 13.9235 3.96982 13.4541 3.96982C12.9847 3.96982 12.6041 4.35038 12.6041 4.81982H14.3041ZM14.6701 11.7771L14.0777 11.1676L14.6701 11.7771ZM14.2529 9.55517L14.7283 8.85056L14.2529 9.55517ZM15.9068 6.03214C15.5614 5.64617 14.6637 4.98645 13.4541 4.98645V6.68645C14.0637 6.68645 14.5304 7.04334 14.6399 7.16569L15.9068 6.03214ZM13.4541 4.98645C11.9208 4.98645 10.7849 6.05951 10.7849 7.36138H12.4849C12.4849 7.13832 12.7134 6.68645 13.4541 6.68645V4.98645ZM10.7849 7.36138C10.7849 8.03478 11.0995 8.57286 11.5402 8.98147C11.9607 9.37132 12.5224 9.67162 13.1255 9.9244L13.7827 8.35654C13.2488 8.13278 12.9009 7.92477 12.696 7.73483C12.5114 7.56364 12.4849 7.45045 12.4849 7.36138H10.7849ZM13.2492 11.4233C12.8258 11.4121 12.2832 11.2434 11.7261 10.7765L10.634 12.0793C11.4588 12.7706 12.3637 13.1004 13.2042 13.1227L13.2492 11.4233ZM12.3767 12.273V13.4611H14.0767V12.273H12.3767ZM14.3041 5.83645V4.81982H12.6041V5.83645H14.3041ZM14.0777 11.1676C13.943 11.2985 13.6631 11.4342 13.2492 11.4233L13.2042 13.1227C13.9881 13.1435 14.7412 12.8933 15.2625 12.3867L14.0777 11.1676ZM13.1255 9.9244C13.3942 10.037 13.6097 10.1466 13.7775 10.2598L14.7283 8.85056C14.4324 8.65086 14.1049 8.49161 13.7827 8.35654L13.1255 9.9244ZM13.7775 10.2598C14.071 10.4578 14.1671 10.6727 14.1878 10.8158C14.2093 10.9636 14.1622 11.0854 14.0777 11.1676L15.2625 12.3867C16.2948 11.3834 16.0288 9.72798 14.7283 8.85056L13.7775 10.2598Z"
                        fill={iconColor}
                    />
                    <path
                        d="M3.0583 8.08569L5.677 10.7044L8.29571 8.08569"
                        stroke={iconColor}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.7733 10.1532C4.88913 5.25805 8.75048 1.57801 12.923 1.578C16.1883 1.578 20.879 4.29917 20.0497 10.1532"
                        stroke={iconColor}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* archive */}
            {icon === 'archive' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3 8.34998V19.35C3 19.9023 3.44772 20.35 4 20.35H20C20.5523 20.35 21 19.9023 21 19.35V8.34998M3 8.34998V5.34998C3 4.79769 3.44772 4.34998 4 4.34998H20C20.5523 4.34998 21 4.79769 21 5.34998V8.34998M3 8.34998H12H21"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M9 14.35L12 17.35L15 14.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.0161 11.35L12.0161 16.8884"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* archive-file */}
            {icon === 'archive-file' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M21 14.25H19.9V9.44995C19.9 9.14995 19.8 8.94995 19.6 8.74995L13.6 2.74995C13.4 2.54995 13.2 2.44995 12.9 2.44995H4.9C4.4 2.44995 3.9 2.94995 3.9 3.44995V11.25H3C2.5 11.25 2 11.65 2 12.25V21.25C2 21.75 2.5 22.25 3 22.25C3.5 22.25 4 21.75 4 21.25V13.25H10L12.2 15.85C12.4 16.05 12.7 16.25 13 16.25H20V21.25C20 21.75 20.5 22.25 21 22.25C21.5 22.25 22 21.75 22 21.25V15.25C22 14.65 21.5 14.25 21 14.25ZM13.9 5.84995L16.5 8.44995H13.9V5.84995ZM17.9 14.25H13.4L11.2 11.65C11 11.45 10.7 11.25 10.4 11.25H5.9V4.44995H11.9V9.44995C11.9 10.05 12.4 10.45 12.9 10.45H17.9V14.25Z"
                        fill={iconColor}
                    />
                    <path
                        d="M10.2 18.0499L9.7 18.5499V15.7499C9.7 15.2499 9.2 14.7499 8.7 14.7499C8.2 14.7499 7.7 15.2499 7.7 15.7499V18.5499L7.2 18.0499C6.8 17.6499 6.2 17.6499 5.8 18.0499C5.4 18.4499 5.4 19.0499 5.8 19.4499L8 21.6499C8.2 21.8499 8.5 21.9499 8.7 21.9499C8.9 21.9499 9.2 21.8499 9.4 21.6499L11.6 19.4499C12 19.0499 12 18.4499 11.6 18.0499C11.2 17.6499 10.6 17.6499 10.2 18.0499Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* cookie */}
            {icon === 'cookie' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <circle cx="13.1875" cy="17.7042" r="1.52083" stroke={iconColor} />
                    <circle cx="9.70833" cy="9.22498" r="1.375" stroke={iconColor} />
                    <circle cx="9.91663" cy="14.4333" r="0.95" stroke={iconColor} strokeWidth="0.6" />
                    <circle cx="15.125" cy="11.3083" r="0.5" stroke={iconColor} strokeWidth="0.25" />
                    <circle cx="5.95833" cy="12.975" r="0.5" stroke={iconColor} strokeWidth="0.25" />
                    <path
                        d="M14.3088 6.0433C15.2513 7.65523 16.9015 7.49404 16.9015 7.49404C16.9015 7.49404 16.9015 9.47784 18.684 10.2343C20.3044 10.922 21.7628 9.75075 21.7628 9.75075C21.7628 9.75075 22.3921 12.3356 21.6007 15.2313C21.0832 17.1251 19.587 19.1848 18.1978 20.2283C16.0799 21.8192 13.7234 22.496 11.392 22.3239C9.60957 22.1922 7.84182 21.5844 6.20661 20.3895C4.3398 19.0254 2.86889 16.9834 2.31756 14.9089C1.68521 12.5296 2.01855 10.2179 3.12778 7.81643C3.9915 5.94646 6.11269 3.81431 8.31318 2.98062C11.4723 1.78373 14.6329 2.65823 14.6329 2.65823C14.6329 2.65823 13.3662 4.43136 14.3088 6.0433Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                </svg>
            )}
            {/* download-outline */}
            {icon === 'download-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6.5 20.35C4.98 20.35 3.68333 19.8266 2.61 18.78C1.53667 17.7266 1 16.4433 1 14.93C1 13.63 1.39 12.47 2.17 11.45C2.95667 10.43 3.98333 9.77995 5.25 9.49995C5.53667 8.29995 6.24667 7.15995 7.38 6.07995C8.50667 4.99328 9.71333 4.44995 11 4.44995C11.5533 4.44995 12.0233 4.64662 12.41 5.03995C12.8033 5.43328 13 5.90328 13 6.44995V12.5L13.8946 11.6333C14.286 11.2541 14.9091 11.2591 15.2944 11.6444C15.6841 12.0341 15.6841 12.6658 15.2944 13.0555L12.7071 15.6428C12.3166 16.0334 11.6834 16.0334 11.2929 15.6428L8.70555 13.0555C8.31589 12.6658 8.31589 12.0341 8.70556 11.6444C9.09086 11.2591 9.71401 11.2541 10.1054 11.6333L11 12.5V6.44995C9.73333 6.68328 8.75 7.29662 8.05 8.28995C7.35 9.28328 7 10.3033 7 11.35H6.5C5.53333 11.35 4.71 11.6933 4.03 12.38C3.34333 13.06 3 13.8833 3 14.85C3 15.8166 3.34333 16.65 4.03 17.35C4.71 18.0166 5.53333 18.35 6.5 18.35H18.5C19.2 18.35 19.79 18.1066 20.27 17.62C20.7567 17.14 21 16.55 21 15.85C21 15.15 20.7567 14.5599 20.27 14.08C19.79 13.5933 19.2 13.35 18.5 13.35H17V11.35C17 10.55 16.8167 9.80328 16.45 9.10995C16.0833 8.42328 15.6 7.83662 15 7.34995V5.02995C16.2333 5.60995 17.21 6.46995 17.93 7.60995C18.6433 8.76995 19 10.0166 19 11.35C20.1533 11.4833 21.1067 11.9833 21.86 12.85C22.62 13.7033 23 14.7033 23 15.85C23 17.1033 22.5633 18.1666 21.69 19.04C20.8167 19.9133 19.7533 20.35 18.5 20.35"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* table-key */}
            {icon === 'table-key' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <g clip-path="url(#clip0_4562_21051)">
                        <path d="M2.5 5.34998H17.5" stroke={iconColor} />
                        <circle cx="13" cy="17.35" r="2.25" stroke={iconColor} strokeWidth="1.5" />
                        <path d="M15.5 17.35H22" stroke={iconColor} strokeWidth="1.5" />
                        <path d="M19 17.35V20.35" stroke={iconColor} strokeWidth="1.5" />
                        <path
                            d="M7.5 18.35H3C2.44772 18.35 2 17.9023 2 17.35V12.35M2 12.35V5.34998C2 4.79769 2.44772 4.34998 3 4.34998H17C17.5523 4.34998 18 4.79769 18 5.34998V12.35H2Z"
                            stroke={iconColor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M17.25 13.85C17.25 14.2642 17.5858 14.6 18 14.6C18.4142 14.6 18.75 14.2642 18.75 13.85H17.25ZM17.25 12.35V13.85H18.75V12.35H17.25Z"
                            fill={iconColor}
                        />
                        <path d="M10 12.35V4.34998" stroke={iconColor} strokeWidth="1.5" />
                        <rect x="2" y="4.34998" width="16" height="3" fill={iconColor} />
                    </g>
                    <defs>
                        <clipPath id="clip0_4562_21051">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.349976)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
            {/* trending-up */}
            {icon === 'trending-up' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <g clip-path="url(#clip0_4568_20912)">
                        <path
                            d="M16 6.34998L18.29 8.63998L13.41 13.52L9.41 9.51998L2 16.94L3.41 18.35L9.41 12.35L13.41 16.35L19.71 10.06L22 12.35V6.34998H16Z"
                            fill={iconColor}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_4568_20912">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.349976)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
            {/* trending-down */}
            {icon === 'trending-down' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M16 18.35L18.29 16.06L13.41 11.18L9.41 15.18L2 7.75998L3.41 6.34998L9.41 12.35L13.41 8.34998L19.71 14.64L22 12.35V18.35H16Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* chart */}
            {icon === 'chart' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M3 22.35V8.34998H7V22.35H3ZM10 22.35V2.34998H14V22.35H10ZM17 22.35V14.35H21V22.35H17Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* invoice */}
            {icon === 'invoice' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19 9.34998H13V3.34998M19 9.34998V21.35H5V3.34998H13M19 9.34998L13 3.34998"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.2548 14.2795C12.6231 14.691 13.2553 14.7262 13.6668 14.3579C14.0784 13.9896 14.1135 13.3575 13.7453 12.9459L12.2548 14.2795ZM11.7087 15.4168L11.3221 16.339L11.7087 15.4168ZM10.7369 16.2741C10.3136 15.9193 9.6829 15.9748 9.32811 16.3981C8.97332 16.8213 9.02883 17.4521 9.45208 17.8068L10.7369 16.2741ZM11.5473 17.6404L11.5737 16.6407L11.5473 17.6404ZM10.5473 18.4838C10.5473 19.036 10.995 19.4838 11.5473 19.4838C12.0995 19.4838 12.5473 19.036 12.5473 18.4838H10.5473ZM12.7087 12.3498C12.7087 11.7975 12.261 11.3498 11.7087 11.3498C11.1564 11.3498 10.7087 11.7975 10.7087 12.3498H12.7087ZM12.5718 17.2884L11.8749 16.5713L12.5718 17.2884ZM12.2757 15.7111L12.835 14.8822L12.2757 15.7111ZM13.7453 12.9459C13.4451 12.6104 12.7073 12.0714 11.7087 12.0714V14.0714C11.8438 14.0714 11.9716 14.1093 12.083 14.1659C12.2036 14.2272 12.2633 14.289 12.2548 14.2795L13.7453 12.9459ZM11.7087 12.0714C10.4354 12.0714 9.41732 12.9781 9.41732 14.1539H11.4173C11.4173 14.1839 11.4052 14.1751 11.4352 14.1477C11.4585 14.1263 11.5349 14.0714 11.7087 14.0714V12.0714ZM9.41732 14.1539C9.41732 14.7682 9.70787 15.2493 10.0805 15.5948C10.4292 15.9181 10.8779 16.1528 11.3221 16.339L12.0952 14.4945C11.7324 14.3424 11.5353 14.2163 11.4402 14.1281C11.3988 14.0897 11.3954 14.0753 11.402 14.0888C11.4111 14.1072 11.4173 14.1332 11.4173 14.1539H9.41732ZM11.5737 16.6407C11.3705 16.6353 11.0699 16.5532 10.7369 16.2741L9.45208 17.8068C10.1 18.3499 10.8269 18.6216 11.5208 18.64L11.5737 16.6407ZM10.5473 17.6404V18.4838H12.5473V17.6404H10.5473ZM12.7087 13.0714V12.3498H10.7087V13.0714H12.7087ZM11.8749 16.5713C11.8695 16.5765 11.7812 16.6462 11.5737 16.6407L11.5208 18.64C12.1636 18.657 12.8085 18.4528 13.2688 18.0055L11.8749 16.5713ZM11.3221 16.339C11.5003 16.4137 11.6272 16.4799 11.7164 16.5401L12.835 14.8822C12.595 14.7203 12.3365 14.5956 12.0952 14.4945L11.3221 16.339ZM11.7164 16.5401C11.7817 16.5842 11.8123 16.6218 11.8253 16.6415C11.8384 16.6614 11.8379 16.6692 11.837 16.663C11.8362 16.6573 11.8357 16.6432 11.842 16.624C11.8485 16.6043 11.8602 16.5856 11.8749 16.5713L13.2688 18.0055C14.2147 17.0863 13.9274 15.6192 12.835 14.8822L11.7164 16.5401Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* connection */}
            {icon === 'connection' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M19.6038 8.49714C20.2679 9.16129 20.2679 10.2405 19.6038 10.8217L17.2792 13.1462L10.8038 6.67073L13.1283 4.3462C13.7924 3.68205 14.8717 3.68205 15.4528 4.3462L16.9472 5.84054L18.8566 3.93111C19.1775 3.61016 19.6979 3.61016 20.0188 3.93111C20.3398 4.25206 20.3398 4.77242 20.0188 5.09337L18.1094 7.0028L19.6038 8.49714ZM14.2228 13.8983C14.5369 13.573 14.5324 13.0559 14.2126 12.7362C13.8889 12.4124 13.3639 12.4124 13.0402 12.7362L11.3019 14.4745L9.55848 12.7311L11.3019 10.9877C11.6228 10.6668 11.6228 10.1464 11.3019 9.82544C10.9809 9.50449 10.4606 9.50449 10.1396 9.82544L8.39622 11.5688L7.15094 10.4066L4.82641 12.7311C4.16226 13.3952 4.16226 14.4745 4.82641 15.0556L6.32075 16.55L3.58113 19.2896C3.26018 19.6105 3.26018 20.1309 3.58113 20.4518C3.90208 20.7728 4.42244 20.7728 4.74339 20.4518L7.48301 17.7122L8.97735 19.2066C9.6415 19.8707 10.7207 19.8707 11.3019 19.2066L13.6264 16.882L12.4641 15.7198L14.2228 13.8983Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* security-account */}
            {icon === 'security-account' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M6.52954 17.7638C11.1018 14.2788 13.5983 14.4109 17.9512 17.7638"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M12.1829 2.43006L4.76621 5.57654C4.61293 5.64157 4.50404 5.78582 4.48123 5.95076C3.25555 14.8107 5.35017 18.1464 12.1317 21.9657C12.2785 22.0484 12.4633 22.0464 12.6081 21.9603C18.7638 18.3009 20.9448 15.1295 20.0152 5.96022C19.998 5.79025 19.8895 5.63904 19.733 5.57056L12.5595 2.43216C12.4396 2.3797 12.3034 2.37894 12.1829 2.43006Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <circle cx="12.3832" cy="9.72649" r="2.09337" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* stepp-completed */}
            {icon === 'step-completed' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="12" fill={iconColor} />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5438 8.31128C19.1521 8.92636 19.1521 9.92359 18.5438 10.5387L11.2745 17.8887C10.6662 18.5037 9.67994 18.5037 9.07162 17.8887L5.95624 14.7387C5.34792 14.1236 5.34792 13.1264 5.95624 12.5113C6.56455 11.8962 7.55083 11.8962 8.15915 12.5113L10.1731 14.5476L16.3409 8.31128C16.9492 7.69621 17.9354 7.69621 18.5438 8.31128Z"
                        fill="white"
                    />
                </svg>
            )}
            {/* step-active */}
            {icon === 'step-active' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="11" stroke={iconColor} strokeWidth="2" />
                    <circle cx="12" cy="12.35" r="7.5" fill={iconColor} />
                </svg>
            )}
            {/* step-disable */}
            {icon === 'step-disable' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="11" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* step-error */}
            {icon === 'step-error' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <ellipse cx="12" cy="12.5022" rx="12" ry="11.8478" fill={iconColor} />
                    <path d="M7.5 16.9451L16.5 8.05927" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16.5 16.9451L7.5 8.05927" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* alert-small */}
            {icon === 'alert-small' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <circle cx="12" cy="12.35" r="9" stroke={iconColor} strokeWidth="1.33333" />
                    <path d="M12 17.345V17.3" stroke={iconColor} strokeWidth="1.33" strokeLinecap="round" />
                    <path
                        d="M12 7.3501L12 14.3501"
                        stroke={iconColor}
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* question */}
            {icon === 'question' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <path
                        d="M9.75 10.1271C9.75 9.28524 10.3758 8.15833 12 8.15833C13.4487 8.15833 14.25 9.11154 14.25 10.1271C14.25 11.1426 13.6072 11.7254 12.9643 12.299C12.3214 12.8726 12 13.1806 12 14.0646"
                        stroke={iconColor}
                        strokeWidth="1.33"
                        strokeLinecap="round"
                    />
                    <path d="M12 16.8583V16.85" stroke={iconColor} strokeWidth="1.33" strokeLinecap="round" />
                    <circle cx="12" cy="12.35" r="9" stroke={iconColor} strokeWidth="1.33333" />
                </svg>
            )}

            {/* four-tokens */}
            {icon === 'four-tokens' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <path
                        d="M25.7798 30.3499L19.6574 33.6833L13.535 30.3499"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.7803 29.9795V22.5721"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.535 29.9795V22.5721"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.5352 22.2018L19.6576 18.8685"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.78 22.2018L19.6576 18.8685"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.6564 25.9055L19.6564 32.9426"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.7785 22.5723L19.6561 25.9056L13.5337 22.5723"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.7803 15.1647V10.7203"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.535 15.1647V10.7203"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.5352 10.35L19.6576 7.01664"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.78 10.35L19.6576 7.01664"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.6564 14.0536L19.6564 18.8684"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.7785 10.7203L19.6561 14.0536L13.5337 10.7203"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.33362 24.4239L9.45602 27.7572L13.5376 25.535"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.5787 21.0905V16.646"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.33362 24.0534V16.646"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.33366 16.2757L9.45605 12.9424"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.5785 16.2757L9.45605 12.9424"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.45606 19.9795L9.45605 27.0165"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.5782 16.6462L9.45577 19.9796L3.33337 16.6462"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.6666 24.4239L30.5442 27.7572L26.4626 25.535"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.4213 21.0905V16.646"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.6666 24.0534V16.646"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.6663 16.2757L30.5439 12.9424"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.4215 16.2757L30.5439 12.9424"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M30.5442 19.9795L30.5442 27.0165"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.422 16.6462L30.5444 19.9796L36.6667 16.6462"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* exclamation */}
            {icon === 'exclamation' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 6.84998C20.8284 6.84998 21.5 7.52155 21.5 8.34998V27.3498C21.5 27.3499 21.5 27.35 20 27.35C18.5 27.35 18.5 27.3499 18.5 27.3498V8.34998C18.5 7.52155 19.1716 6.84998 20 6.84998ZM20 28.85C19.1716 28.85 18.5 28.1783 18.5 27.3498L20 27.35L21.5 27.3498C21.5 28.1783 20.8284 28.85 20 28.85Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 31.35C20.8284 31.35 21.5 32.0215 21.5 32.85V32.95C21.5 33.7784 20.8284 34.45 20 34.45C19.1716 34.45 18.5 33.7784 18.5 32.95V32.85C18.5 32.0215 19.1716 31.35 20 31.35Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* liqi-logo */}
            {icon === 'liqi-logo' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <path
                        d="M16.0559 4.69071L4.706 11.079C4.18719 11.3713 3.75645 11.7916 3.45699 12.2976C3.15754 12.8036 2.9999 13.3775 3 13.9617V26.7383C2.9999 27.3225 3.15754 27.8964 3.45699 28.4024C3.75645 28.9084 4.18719 29.3287 4.706 29.621L16.0559 36.0093C16.575 36.3015 17.1638 36.4553 17.7632 36.4553C18.3625 36.4553 18.9513 36.3015 19.4704 36.0093L25.1578 32.8067C25.3997 32.6705 25.6006 32.4748 25.7402 32.239C25.8799 32.0032 25.9535 31.7358 25.9536 31.4635V26.6705C25.9504 26.3271 26.0409 25.989 26.2156 25.6908C26.3904 25.3927 26.6433 25.1451 26.9483 24.9734L31.7305 22.3065C31.9724 22.1704 32.1733 21.9746 32.313 21.7388C32.4527 21.5031 32.5262 21.2357 32.5263 20.9634V13.9617C32.5264 13.3775 32.3688 12.8036 32.0694 12.2976C31.7699 11.7916 31.3392 11.3713 30.8204 11.079L19.4704 4.69071C18.9513 4.39856 18.3625 4.24475 17.7632 4.24475C17.1638 4.24475 16.575 4.39856 16.0559 4.69071ZM17.7197 21.6446V29.7907C17.72 30.0118 17.6606 30.2292 17.5473 30.4208C17.4341 30.6125 17.271 30.7716 17.0746 30.8822C16.8782 30.9929 16.6553 31.051 16.4284 31.0509C16.2016 31.0509 15.9788 30.9925 15.7824 30.8817L8.54568 26.8087C8.19234 26.6095 7.899 26.3232 7.69514 25.9785C7.49128 25.6337 7.3841 25.2428 7.38434 24.8449V15.8285C7.3841 15.4306 7.49128 15.0396 7.69514 14.6949C7.899 14.3502 8.19234 14.0639 8.54568 13.8647L16.5558 9.35529C16.9093 9.15633 17.3103 9.05159 17.7184 9.05159C18.1266 9.05159 18.5275 9.15633 18.881 9.35529L26.1153 13.4283C26.3121 13.5386 26.4756 13.6975 26.5893 13.889C26.703 14.0806 26.7629 14.298 26.7629 14.5193C26.7629 14.7406 26.703 14.958 26.5893 15.1495C26.4756 15.3411 26.3121 15.5 26.1153 15.6103L18.8785 19.6833C18.526 19.8826 18.2334 20.1686 18.03 20.5129C17.8266 20.8571 17.7196 21.2474 17.7197 21.6446Z"
                        fill={iconColor}
                    />
                    <path
                        d="M28.9474 32.6616V27.6754C28.9474 27.2892 29.0629 26.9099 29.2825 26.5756C29.502 26.2412 29.8179 25.9636 30.1981 25.7708L35.3227 23.1666C35.4927 23.08 35.6857 23.0343 35.8822 23.0342C36.0787 23.0341 36.2716 23.0796 36.4418 23.1661C36.6119 23.2526 36.7531 23.377 36.8511 23.5268C36.9491 23.6766 37.0005 23.8465 37 24.0194V29.2251C37 29.6113 36.8845 29.9906 36.6649 30.3249C36.4454 30.6593 36.1295 30.9369 35.7493 31.1297L30.8423 33.6215C30.6505 33.7192 30.4329 33.7708 30.2113 33.7711C29.9897 33.7713 29.7719 33.7202 29.5798 33.6229C29.3878 33.5256 29.2282 33.3855 29.1172 33.2168C29.0062 33.048 28.9476 32.8565 28.9474 32.6616Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* money */}
            {icon === 'money' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <circle cx="26.1113" cy="28.7944" r="7.77778" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M27.3543 26.8469C27.7226 27.2585 28.3548 27.2936 28.7664 26.9253C29.1779 26.5571 29.2131 25.9249 28.8448 25.5133L27.3543 26.8469ZM26.2282 28.7945L25.8417 29.7168L26.2282 28.7945ZM24.5314 30.3811C24.1082 30.0263 23.4775 30.0818 23.1227 30.505C22.7679 30.9283 22.8234 31.559 23.2466 31.9138L24.5314 30.3811ZM25.9943 32.0168L26.0208 31.0171L25.9943 32.0168ZM24.9943 33.2389C24.9943 33.7912 25.442 34.2389 25.9943 34.2389C26.5466 34.2389 26.9943 33.7912 26.9943 33.2389H24.9943ZM27.2282 24.35C27.2282 23.7978 26.7805 23.35 26.2282 23.35C25.6759 23.35 25.2282 23.7978 25.2282 24.35H27.2282ZM27.4791 31.5067L26.7821 30.7896L27.4791 31.5067ZM27.0499 29.2211L27.6092 28.3921H27.6092L27.0499 29.2211ZM28.8448 25.5133C28.4721 25.0968 27.5168 24.3958 26.2282 24.3958V26.3958C26.5083 26.3958 26.763 26.4742 26.9741 26.5815C27.1944 26.6934 27.3266 26.8159 27.3543 26.8469L28.8448 25.5133ZM26.2282 24.3958C24.5924 24.3958 23.3569 25.5455 23.3569 26.9644H25.3569C25.3569 26.8147 25.5248 26.3958 26.2282 26.3958V24.3958ZM23.3569 26.9644C23.3569 27.7003 23.7018 28.2852 24.1741 28.7231C24.6225 29.1389 25.2161 29.4546 25.8417 29.7168L26.6148 27.8722C26.0707 27.6442 25.7286 27.437 25.5338 27.2564C25.3628 27.0979 25.3569 27.0128 25.3569 26.9644H23.3569ZM26.0208 31.0171C25.616 31.0064 25.0847 30.8448 24.5314 30.3811L23.2466 31.9138C24.1148 32.6415 25.0724 32.9927 25.9678 33.0164L26.0208 31.0171ZM24.9943 32.0168V33.2389H26.9943V32.0168H24.9943ZM27.2282 25.3958V24.35H25.2282V25.3958H27.2282ZM26.7821 30.7896C26.6721 30.8965 26.4192 31.0277 26.0208 31.0171L25.9678 33.0164C26.8015 33.0385 27.6112 32.7727 28.176 32.2238L26.7821 30.7896ZM25.8417 29.7168C26.1141 29.8309 26.3275 29.9399 26.4906 30.05L27.6092 28.3921C27.2953 28.1803 26.9502 28.0128 26.6148 27.8722L25.8417 29.7168ZM26.4906 30.05C26.7666 30.2363 26.8429 30.4276 26.8587 30.5359C26.8752 30.6497 26.839 30.7343 26.7821 30.7896L28.176 32.2238C29.3054 31.1262 29.0006 29.3308 27.6092 28.3921L26.4906 30.05Z"
                        fill={iconColor}
                    />
                    <path
                        d="M31.4148 17.4536C30.9811 17.7955 30.9068 18.4243 31.2487 18.858C31.5907 19.2917 32.2194 19.3661 32.6531 19.0241L31.4148 17.4536ZM18.5333 10.875C18.4551 11.4218 18.8349 11.9284 19.3816 12.0066C19.9283 12.0848 20.4349 11.705 20.5131 11.1582L18.5333 10.875ZM27.2222 5.34998C30.9655 5.34998 34 8.38449 34 12.1278H36C36 7.27992 32.07 3.34998 27.2222 3.34998V5.34998ZM34 12.1278C34 14.2874 32.991 16.2108 31.4148 17.4536L32.6531 19.0241C34.6897 17.4184 36 14.9258 36 12.1278H34ZM20.5131 11.1582C20.9828 7.87457 23.8085 5.34998 27.2222 5.34998V3.34998C22.7993 3.34998 19.1419 6.62028 18.5333 10.875L20.5131 11.1582Z"
                        fill={iconColor}
                    />
                    <path
                        d="M28.4652 10.1802C28.8335 10.5918 29.4657 10.6269 29.8773 10.2587C30.2888 9.89043 30.324 9.25824 29.9557 8.84665L28.4652 10.1802ZM27.3391 12.1278L26.9526 13.0501L27.3391 12.1278ZM25.6423 13.7144C25.2191 13.3596 24.5884 13.4151 24.2336 13.8384C23.8788 14.2616 23.9343 14.8923 24.3575 15.2471L25.6423 13.7144ZM27.1052 15.3501L27.1317 14.3505L27.1052 15.3501ZM26.1052 16.5723C26.1052 17.1246 26.5529 17.5723 27.1052 17.5723C27.6575 17.5723 28.1052 17.1246 28.1052 16.5723H26.1052ZM28.3391 7.68338C28.3391 7.1311 27.8914 6.68338 27.3391 6.68338C26.7868 6.68338 26.3391 7.1311 26.3391 7.68338H28.3391ZM28.59 14.84L27.893 14.1229L28.59 14.84ZM28.1608 12.5544L28.7201 11.7254H28.7201L28.1608 12.5544ZM29.9557 8.84665C29.583 8.43014 28.6277 7.72913 27.3391 7.72913V9.72913C27.6192 9.72913 27.8739 9.80756 28.085 9.9148C28.3053 10.0267 28.4375 10.1493 28.4652 10.1802L29.9557 8.84665ZM27.3391 7.72913C25.7033 7.72913 24.4678 8.87885 24.4678 10.2978H26.4678C26.4678 10.148 26.6357 9.72913 27.3391 9.72913V7.72913ZM24.4678 10.2978C24.4678 11.0336 24.8127 11.6185 25.285 12.0564C25.7334 12.4722 26.327 12.7879 26.9526 13.0501L27.7257 11.2056C27.1816 10.9775 26.8395 10.7704 26.6447 10.5898C26.4737 10.4312 26.4678 10.3462 26.4678 10.2978H24.4678ZM27.1317 14.3505C26.7269 14.3397 26.1956 14.1782 25.6423 13.7144L24.3575 15.2471C25.2257 15.9749 26.1833 16.326 27.0787 16.3497L27.1317 14.3505ZM26.1052 15.3501V16.5723H28.1052V15.3501H26.1052ZM28.3391 8.72913V7.68338H26.3391V8.72913H28.3391ZM27.893 14.1229C27.783 14.2298 27.5301 14.361 27.1317 14.3505L27.0787 16.3497C27.9124 16.3718 28.7221 16.1061 29.2869 15.5572L27.893 14.1229ZM26.9526 13.0501C27.225 13.1643 27.4384 13.2733 27.6015 13.3834L28.7201 11.7254C28.4062 11.5136 28.0611 11.3462 27.7257 11.2056L26.9526 13.0501ZM27.6015 13.3834C27.8775 13.5696 27.9538 13.7609 27.9696 13.8692C27.9861 13.9831 27.9499 14.0676 27.893 14.1229L29.2869 15.5572C30.4163 14.4595 30.1115 12.6642 28.7201 11.7254L27.6015 13.3834Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12.7778 28.7945C8.48223 28.7945 5 25.3122 5 21.0167C5 16.7212 8.48223 13.2389 12.7778 13.2389C15.8804 13.2389 18.5588 15.0556 19.8071 17.6834"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14.0207 19.0692C14.389 19.4807 15.0212 19.5159 15.4327 19.1476C15.8443 18.7793 15.8794 18.1472 15.5112 17.7356L14.0207 19.0692ZM12.8946 21.0167L12.5081 21.939L12.8946 21.0167ZM11.1978 22.6033C10.7746 22.2485 10.1438 22.304 9.78905 22.7273C9.43426 23.1505 9.48977 23.7813 9.91302 24.1361L11.1978 22.6033ZM12.6607 24.239L12.6872 23.2394L12.6607 24.239ZM11.6607 25.4612C11.6607 26.0135 12.1084 26.4612 12.6607 26.4612C13.213 26.4612 13.6607 26.0135 13.6607 25.4612H11.6607ZM13.8946 16.5723C13.8946 16.02 13.4469 15.5723 12.8946 15.5723C12.3423 15.5723 11.8946 16.02 11.8946 16.5723H13.8946ZM14.1454 23.729L13.4485 23.0118L14.1454 23.729ZM13.7163 21.4433L14.2756 20.6144H14.2756L13.7163 21.4433ZM15.5112 17.7356C15.1385 17.3191 14.1832 16.618 12.8946 16.618V18.618C13.1747 18.618 13.4294 18.6965 13.6405 18.8037C13.8608 18.9156 13.993 19.0382 14.0207 19.0692L15.5112 17.7356ZM12.8946 16.618C11.2588 16.618 10.0233 17.7678 10.0233 19.1867H12.0233C12.0233 19.037 12.1912 18.618 12.8946 18.618V16.618ZM10.0233 19.1867C10.0233 19.9226 10.3682 20.5075 10.8404 20.9453C11.2889 21.3611 11.8825 21.6768 12.5081 21.939L13.2811 20.0945C12.7371 19.8664 12.395 19.6593 12.2002 19.4787C12.0292 19.3201 12.0233 19.2351 12.0233 19.1867H10.0233ZM12.6872 23.2394C12.2824 23.2286 11.7511 23.0671 11.1978 22.6033L9.91302 24.1361C10.7812 24.8638 11.7388 25.215 12.6342 25.2387L12.6872 23.2394ZM11.6607 24.239V25.4612H13.6607V24.239H11.6607ZM13.8946 17.618V16.5723H11.8946V17.618H13.8946ZM13.4485 23.0118C13.3385 23.1187 13.0856 23.2499 12.6872 23.2394L12.6342 25.2387C13.4679 25.2607 14.2776 24.995 14.8424 24.4461L13.4485 23.0118ZM12.5081 21.939C12.7805 22.0532 12.9939 22.1622 13.157 22.2723L14.2756 20.6144C13.9617 20.4026 13.6166 20.2351 13.2811 20.0945L12.5081 21.939ZM13.157 22.2723C13.433 22.4585 13.5093 22.6498 13.525 22.7581C13.5416 22.872 13.5054 22.9565 13.4485 23.0118L14.8424 24.4461C15.9718 23.3485 15.6669 21.5531 14.2756 20.6144L13.157 22.2723Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* money-grow-medium */}
            {icon === 'money-grow-medium' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <path
                        d="M23.9827 17.5805C24.6898 16.0184 26.314 15.0807 28.0204 15.2494L29.0044 15.3467C29.6856 15.414 30.0993 16.1305 29.817 16.7542L29.4093 17.655C28.7022 19.2171 27.078 20.1548 25.3716 19.9861L24.3876 19.8888C23.7064 19.8215 23.2927 19.105 23.575 18.4813L23.9827 17.5805Z"
                        fill={iconColor}
                    />
                    <path
                        d="M16.4092 17.5805C15.7022 16.0184 14.078 15.0807 12.3716 15.2494L11.3876 15.3467C10.7064 15.414 10.2927 16.1305 10.575 16.7542L10.9827 17.655C11.6898 19.2171 13.314 20.1548 15.0204 19.9861L16.0044 19.8888C16.6856 19.8215 17.0993 19.105 16.817 18.4813L16.4092 17.5805Z"
                        fill={iconColor}
                    />
                    <path d="M20 15.35V22.85" stroke={iconColor} strokeWidth="2" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 17.35C23.866 17.35 27 14.216 27 10.35C27 6.48398 23.866 3.34998 20 3.34998C16.134 3.34998 13 6.48398 13 10.35C13 14.216 16.134 17.35 20 17.35ZM21.2222 6.34998C21.2222 5.79769 20.7745 5.34998 20.2222 5.34998C19.6699 5.34998 19.2222 5.79769 19.2222 6.34998V6.44668C18.1863 6.78316 17.4444 7.63525 17.4444 8.70292C17.4444 9.42033 17.8003 9.97614 18.2567 10.377C18.6902 10.7578 19.2596 11.0437 19.8532 11.2794C20.1117 11.382 20.3123 11.4794 20.4643 11.5765C20.7193 11.7395 20.7653 11.8904 20.7728 11.9394C20.7805 11.9893 20.7675 12.0237 20.7332 12.0553C20.6421 12.1392 20.4082 12.2599 20.0251 12.2503C19.6385 12.2406 19.1381 12.0944 18.6219 11.6845C18.1894 11.3411 17.5603 11.4132 17.2169 11.8457C16.8734 12.2782 16.9456 12.9073 17.3781 13.2507C17.8994 13.6647 18.4518 13.943 19 14.0988V14.35C19 14.9023 19.4477 15.35 20 15.35C20.5523 15.35 21 14.9023 21 14.35V14.1227C21.4078 14.0056 21.7826 13.8077 22.0879 13.5266C22.6161 13.0403 22.8575 12.339 22.7497 11.6363C22.6418 10.9327 22.2027 10.314 21.5414 9.89132C21.2402 9.69876 20.9102 9.54721 20.5913 9.42056C20.0738 9.21509 19.7542 9.03041 19.5766 8.87438C19.4941 8.8019 19.4629 8.75335 19.4525 8.73338C19.4452 8.7194 19.4444 8.71408 19.4444 8.70292C19.4444 8.67923 19.5238 8.29115 20.2222 8.29115C20.4892 8.29115 20.7302 8.36199 20.9274 8.45693C21.0255 8.50413 21.1077 8.55496 21.1706 8.60006C21.2019 8.62247 21.2267 8.64229 21.245 8.65801C21.2541 8.6658 21.261 8.67213 21.266 8.67679C21.271 8.68153 21.2732 8.68388 21.273 8.68366C21.6522 9.08518 22.2851 9.10326 22.6866 8.72405C23.0881 8.34484 23.1062 7.71193 22.727 7.31041C22.4684 7.03659 21.9387 6.64373 21.2222 6.43474V6.34998Z"
                        fill={iconColor}
                    />
                    <path
                        d="M20 35.35H23.3095C25.6788 35.35 27.3895 33.7426 28.2619 31.964C29.1261 30.202 29.3286 27.9593 28.3419 26.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M20 35.35H16.6905C14.3212 35.35 12.6105 33.7426 11.7381 31.964C10.8739 30.202 10.6714 27.9593 11.6581 26.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M13.5 26.35H13C11.8954 26.35 11 25.4545 11 24.35V24.35C11 23.2454 11.8954 22.35 13 22.35H27C28.1046 22.35 29 23.2454 29 24.35V24.35C29 25.4545 28.1046 26.35 27 26.35H26.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}
            {/* question-balloon */}
            {icon === 'question-balloon' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <path
                        d="M6 8.34998C6 7.24541 6.89543 6.34998 8 6.34998H31C32.1046 6.34998 33 7.24541 33 8.34998V19.053C33 19.5648 33.1962 20.057 33.5481 20.4285L36.1969 23.2245C36.9277 23.9959 36.9277 25.2041 36.1969 25.9755L33.5481 28.7714C33.1962 29.1429 33 29.6352 33 30.1469V31.35C33 32.4545 32.1046 33.35 31 33.35H8C6.89543 33.35 6 32.4545 6 31.35V8.34998Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M16.6028 16.1488C16.6028 14.952 17.4924 13.35 19.8014 13.35C21.8609 13.35 23 14.7051 23 16.1488C23 17.5925 22.0861 18.4209 21.1722 19.2364C20.2583 20.0518 19.8014 20.4897 19.8014 21.7463"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <circle cx="19.8014" cy="24.9449" r="1.19948" fill={iconColor} />
                </svg>
            )}
            {/* calendar */}
            {icon === 'calendar' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect x="9" y="10.6" width="23" height="21" rx="1" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M14.3125 7.97498C14.3125 7.42269 13.8648 6.97498 13.3125 6.97498C12.7602 6.97498 12.3125 7.42269 12.3125 7.97498H14.3125ZM12.3125 7.97498V10.6H14.3125V7.97498H12.3125Z"
                        fill={iconColor}
                    />
                    <path
                        d="M28.6875 7.97498C28.6875 7.42269 28.2398 6.97498 27.6875 6.97498C27.1352 6.97498 26.6875 7.42269 26.6875 7.97498H28.6875ZM26.6875 7.97498V10.6H28.6875V7.97498H26.6875Z"
                        fill={iconColor}
                    />
                    <path d="M9 15.85H32" stroke={iconColor} strokeWidth="2" />
                    <rect x="13" y="19.35" width="3" height="3" rx="1" stroke={iconColor} strokeWidth="2" />
                    <rect x="19" y="19.35" width="3" height="3" rx="1" stroke={iconColor} strokeWidth="2" />
                    <rect x="13" y="25.35" width="3" height="3" rx="1" stroke={iconColor} strokeWidth="2" />
                    <rect x="19" y="25.35" width="3" height="3" rx="1" stroke={iconColor} strokeWidth="2" />
                    <rect x="25" y="19.35" width="3" height="3" rx="1" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}
            {/* business-person */}
            {icon === 'business-person' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <path
                        d="M28.5748 16.8556C28.5748 15.6802 27.6352 15.0191 27.1655 15.0191C27.7527 13.1826 28.152 8.6281 25.0515 5.10204C25.3334 4.51437 24.5578 4.47333 24.4847 4.43679C24.4116 4.40024 23.3603 4.29399 20.8236 4.00015C17.6527 3.63285 15.5387 2.89826 14.4817 6.57123C13.4248 6.93853 10.9585 8.40772 12.7201 15.0191C11.6631 15.0191 11.3108 16.4883 11.6631 17.5901C12.0155 18.692 12.7201 19.4266 13.7771 19.7939C14.4817 21.9977 16.2434 25.6707 19.7666 25.6707C23.2899 25.6707 24.6992 22.7323 26.1085 19.7939C27.8701 19.4266 28.5748 18.3247 28.5748 16.8556Z"
                        stroke={iconColor}
                        strokeWidth="1.66667"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.156 4.3637C24.156 4.3637 25.3337 4.51437 25.0518 5.10204C27.6455 8.05181 27.79 11.7213 27.4241 13.9172C26.4611 13.5499 24.6995 13.9172 24.3471 11.7134C22.9378 12.448 20.1192 12.9989 16.9483 11.3461C15.3727 10.5248 13.425 11.7134 12.7204 15.0191C10.9588 8.40772 13.425 6.93853 14.482 6.57123C15.539 2.89826 17.653 3.63285 20.8239 4.00015C23.3606 4.29399 24.156 4.3637 24.156 4.3637Z"
                        fill={iconColor}
                    />
                    <path
                        d="M15.2698 25.5794C14.0236 26.3907 12.4698 27.0854 10.6826 27.637C9.93489 27.865 9.61141 28.0453 9.2561 28.4059C8.7523 28.9309 8.397 29.9279 8.33866 31.0097C8.30685 31.5931 8.42351 33.184 8.55609 33.9795L8.61442 34.3454L9.37807 34.7272C13.6471 36.8749 19.263 37.559 24.5767 36.578C26.5601 36.2121 28.5381 35.5598 30.1821 34.7272C30.845 34.3931 30.9404 34.3348 30.9723 34.1916C31.0359 33.9476 31.1791 32.4681 31.2162 31.7256C31.301 29.9862 30.7866 28.6286 29.8109 28.0082C29.673 27.9233 29.2541 27.7536 28.8722 27.637C27.2336 27.1332 25.5737 26.4013 24.4335 25.6854C24.1525 25.5051 23.9032 25.3619 23.8714 25.3619C23.8449 25.3619 23.3517 26.8574 22.7737 28.687C21.5009 32.7173 21.3949 33.0355 21.3524 32.9666C21.3365 32.9348 21.1138 32.3302 20.8646 31.6196L20.4138 30.3362L20.7055 29.8749C21.7025 28.3052 21.5009 27.34 20.138 27.1067C19.4964 27.0006 18.7858 27.1862 18.4676 27.5574C18.2554 27.7961 18.2183 27.9286 18.2501 28.3741C18.2873 28.8142 18.4676 29.2703 18.8494 29.8749L19.1411 30.3362L18.685 31.6249C18.4357 32.3355 18.2183 32.9348 18.1971 32.956C18.1494 33.0037 18.038 32.6643 16.7282 28.5173C16.1819 26.7938 15.7206 25.3725 15.7047 25.3566C15.6834 25.3407 15.4872 25.4415 15.2698 25.5794Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* microphone */}
            {icon === 'microphone' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <g clip-path="url(#clip0_590_10054)">
                        <path
                            d="M8.75 0.631187C3.03126 2.50619 1.00001 9.13119 4.68751 13.7874C5.78126 15.1624 8.40625 16.5999 9.84375 16.5999C10.625 16.5999 11.8125 17.4749 16.7188 21.7874C20 24.6312 24.0313 28.1624 25.7188 29.6312L28.0872 31.7096C28.4791 32.0536 29.0696 32.0386 29.4436 31.6753L29.875 31.2562L30.9375 30.2249L32.875 32.1312C34.5 33.7874 34.8125 34.2562 34.8125 35.1624C34.8125 36.6624 33.6875 37.8499 32.2813 37.8499C31.625 37.8499 29.5938 37.0062 26.5 35.4124C21.0625 32.6312 19.2188 32.0999 15 32.1624C11.7188 32.1624 8.9375 32.8812 5.93751 34.4437C4.46876 35.2087 3.28126 35.7562 3.90626 36.8499L4.00261 37.0052C4.26883 37.4341 4.81297 37.5973 5.27131 37.3858L7.3125 36.4437C10.5313 34.9124 12.5938 34.4124 15.4063 34.4124C18.625 34.4124 21.0313 35.1937 26.2188 37.8812C30.75 40.2249 31.1875 40.4124 32.5938 40.2562C35.125 40.0374 36.875 38.2874 37.125 35.7249C37.2812 33.8187 36.75 32.6937 34.4375 30.2874L32.7188 28.4749L33.7188 27.4124L34.1082 27.0111C34.4709 26.6375 34.4861 26.0482 34.1434 25.6563L26.9063 17.3812C22.0313 11.8187 19.0625 8.19369 19.0625 7.78744C19.0625 5.50619 16.9688 2.44369 14.5938 1.22494C13.1875 0.537437 10.0625 0.193687 8.75 0.631187ZM13.2813 3.22494C13.7188 3.41244 14.0625 3.66244 14.0625 3.75619C14.0625 4.22494 6.28126 11.6624 5.96876 11.4749C5.78126 11.3499 5.50001 10.6937 5.31251 10.0062C4.34376 6.41244 7.09375 2.84994 10.8125 2.84994C11.7188 2.84994 12.8438 3.00619 13.2813 3.22494ZM16.5938 6.97494L16.9375 8.25619L13.8438 11.3499C12.1875 13.0374 10.625 14.4124 10.375 14.4124C10.1563 14.4124 9.46875 14.1937 8.84375 13.9437L7.6875 13.4437L11.7188 9.41244C13.9375 7.19369 15.8438 5.44369 16 5.53744C16.125 5.63119 16.375 6.25619 16.5938 6.97494ZM20.6875 13.9437C20.8125 14.1624 20.0625 15.1624 18.75 16.4437L16.625 18.5687L14.875 17.0374L13.125 15.5374L15.5313 13.0999L17.9063 10.6937L19.1875 12.1312C19.9063 12.9124 20.5625 13.7249 20.6875 13.9437ZM30.2813 27.7249C29.5313 28.4749 28.8438 29.0687 28.7188 29.0374C28.5938 28.9749 26.25 26.9749 23.4688 24.5687L18.4688 20.1937L20.5313 18.1312L22.5625 16.0374L27.0938 21.1937L31.625 26.3499L30.2813 27.7249Z"
                            fill={iconColor}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_590_10054">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.349976)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
            {/* shuffle */}
            {icon === 'shuffle' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="48" height="48" fill={iconColor} />
                    <path
                        d="M36 28.6907C36 27.8429 36.9889 27.3797 37.6402 27.9225L41.0781 30.7874C41.5579 31.1872 41.5579 31.9241 41.0781 32.3239L37.6402 35.1888C36.9889 35.7316 36 35.2685 36 34.4206V28.6907Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 15.0557C6.44772 15.0557 6 15.5034 6 16.0557C6 16.6079 6.44772 17.0557 7 17.0557V15.0557ZM37.5 32.5557C38.0523 32.5557 38.5 32.1079 38.5 31.5557C38.5 31.0034 38.0523 30.5557 37.5 30.5557V32.5557ZM7 17.0557C7.00195 17.0557 7.00391 17.0557 7.00586 17.0557C7.00781 17.0557 7.00977 17.0557 7.01172 17.0557C7.01368 17.0557 7.01563 17.0557 7.01759 17.0557C7.01954 17.0557 7.0215 17.0557 7.02346 17.0557C7.02541 17.0557 7.02737 17.0557 7.02933 17.0557C7.03128 17.0557 7.03324 17.0557 7.0352 17.0557C7.03716 17.0557 7.03912 17.0557 7.04107 17.0557C7.04303 17.0557 7.04499 17.0557 7.04695 17.0557C7.04891 17.0557 7.05087 17.0557 7.05283 17.0557C7.05479 17.0557 7.05676 17.0557 7.05872 17.0557C7.06068 17.0557 7.06264 17.0557 7.0646 17.0557C7.06657 17.0557 7.06853 17.0557 7.07049 17.0557C7.07246 17.0557 7.07442 17.0557 7.07638 17.0557C7.07835 17.0557 7.08031 17.0557 7.08228 17.0557C7.08425 17.0557 7.08621 17.0557 7.08818 17.0557C7.09014 17.0557 7.09211 17.0557 7.09408 17.0557C7.09605 17.0557 7.09802 17.0557 7.09998 17.0557C7.10195 17.0557 7.10392 17.0557 7.10589 17.0557C7.10786 17.0557 7.10983 17.0557 7.1118 17.0557C7.11377 17.0557 7.11574 17.0557 7.11772 17.0557C7.11969 17.0557 7.12166 17.0557 7.12363 17.0557C7.12561 17.0557 7.12758 17.0557 7.12956 17.0557C7.13153 17.0557 7.1335 17.0557 7.13548 17.0557C7.13746 17.0557 7.13943 17.0557 7.14141 17.0557C7.14338 17.0557 7.14536 17.0557 7.14734 17.0557C7.14932 17.0557 7.1513 17.0557 7.15327 17.0557C7.15525 17.0557 7.15723 17.0557 7.15921 17.0557C7.16119 17.0557 7.16317 17.0557 7.16516 17.0557C7.16714 17.0557 7.16912 17.0557 7.1711 17.0557C7.17309 17.0557 7.17507 17.0557 7.17705 17.0557C7.17904 17.0557 7.18102 17.0557 7.18301 17.0557C7.18499 17.0557 7.18698 17.0557 7.18896 17.0557C7.19095 17.0557 7.19294 17.0557 7.19493 17.0557C7.19691 17.0557 7.1989 17.0557 7.20089 17.0557C7.20288 17.0557 7.20487 17.0557 7.20686 17.0557C7.20885 17.0557 7.21085 17.0557 7.21284 17.0557C7.21483 17.0557 7.21682 17.0557 7.21882 17.0557C7.22081 17.0557 7.2228 17.0557 7.2248 17.0557C7.22679 17.0557 7.22879 17.0557 7.23079 17.0557C7.23278 17.0557 7.23478 17.0557 7.23678 17.0557C7.23878 17.0557 7.24077 17.0557 7.24277 17.0557C7.24477 17.0557 7.24677 17.0557 7.24877 17.0557C7.25078 17.0557 7.25278 17.0557 7.25478 17.0557C7.25678 17.0557 7.25879 17.0557 7.26079 17.0557C7.26279 17.0557 7.2648 17.0557 7.2668 17.0557C7.26881 17.0557 7.27082 17.0557 7.27282 17.0557C7.27483 17.0557 7.27684 17.0557 7.27885 17.0557C7.28086 17.0557 7.28287 17.0557 7.28488 17.0557C7.28689 17.0557 7.2889 17.0557 7.29091 17.0557C7.29292 17.0557 7.29493 17.0557 7.29695 17.0557C7.29896 17.0557 7.30098 17.0557 7.30299 17.0557C7.30501 17.0557 7.30702 17.0557 7.30904 17.0557C7.31106 17.0557 7.31307 17.0557 7.31509 17.0557C7.31711 17.0557 7.31913 17.0557 7.32115 17.0557C7.32317 17.0557 7.32519 17.0557 7.32721 17.0557C7.32924 17.0557 7.33126 17.0557 7.33328 17.0557C7.33531 17.0557 7.33733 17.0557 7.33936 17.0557C7.34138 17.0557 7.34341 17.0557 7.34544 17.0557C7.34747 17.0557 7.34949 17.0557 7.35152 17.0557C7.35355 17.0557 7.35558 17.0557 7.35761 17.0557C7.35964 17.0557 7.36168 17.0557 7.36371 17.0557C7.36574 17.0557 7.36778 17.0557 7.36981 17.0557C7.37185 17.0557 7.37388 17.0557 7.37592 17.0557C7.37796 17.0557 7.37999 17.0557 7.38203 17.0557C7.38407 17.0557 7.38611 17.0557 7.38815 17.0557C7.39019 17.0557 7.39223 17.0557 7.39427 17.0557C7.39632 17.0557 7.39836 17.0557 7.4004 17.0557C7.40245 17.0557 7.40449 17.0557 7.40654 17.0557C7.40859 17.0557 7.41063 17.0557 7.41268 17.0557C7.41473 17.0557 7.41678 17.0557 7.41883 17.0557C7.42088 17.0557 7.42293 17.0557 7.42498 17.0557C7.42704 17.0557 7.42909 17.0557 7.43114 17.0557C7.4332 17.0557 7.43525 17.0557 7.43731 17.0557C7.43937 17.0557 7.44142 17.0557 7.44348 17.0557C7.44554 17.0557 7.4476 17.0557 7.44966 17.0557C7.45172 17.0557 7.45378 17.0557 7.45585 17.0557C7.45791 17.0557 7.45997 17.0557 7.46204 17.0557C7.4641 17.0557 7.46617 17.0557 7.46824 17.0557C7.4703 17.0557 7.47237 17.0557 7.47444 17.0557C7.47651 17.0557 7.47858 17.0557 7.48065 17.0557C7.48272 17.0557 7.4848 17.0557 7.48687 17.0557C7.48894 17.0557 7.49102 17.0557 7.49309 17.0557C7.49517 17.0557 7.49725 17.0557 7.49932 17.0557C7.5014 17.0557 7.50348 17.0557 7.50556 17.0557C7.50764 17.0557 7.50972 17.0557 7.51181 17.0557C7.51389 17.0557 7.51597 17.0557 7.51806 17.0557C7.52014 17.0557 7.52223 17.0557 7.52432 17.0557C7.5264 17.0557 7.52849 17.0557 7.53058 17.0557C7.53267 17.0557 7.53476 17.0557 7.53685 17.0557C7.53894 17.0557 7.54104 17.0557 7.54313 17.0557C7.54523 17.0557 7.54732 17.0557 7.54942 17.0557C7.55151 17.0557 7.55361 17.0557 7.55571 17.0557C7.55781 17.0557 7.55991 17.0557 7.56201 17.0557C7.56411 17.0557 7.56622 17.0557 7.56832 17.0557C7.57042 17.0557 7.57253 17.0557 7.57463 17.0557C7.57674 17.0557 7.57885 17.0557 7.58096 17.0557C7.58307 17.0557 7.58518 17.0557 7.58729 17.0557C7.5894 17.0557 7.59151 17.0557 7.59362 17.0557C7.59574 17.0557 7.59785 17.0557 7.59997 17.0557C7.60209 17.0557 7.6042 17.0557 7.60632 17.0557C7.60844 17.0557 7.61056 17.0557 7.61268 17.0557C7.6148 17.0557 7.61693 17.0557 7.61905 17.0557C7.62117 17.0557 7.6233 17.0557 7.62543 17.0557C7.62755 17.0557 7.62968 17.0557 7.63181 17.0557C7.63394 17.0557 7.63607 17.0557 7.6382 17.0557C7.64033 17.0557 7.64247 17.0557 7.6446 17.0557C7.64674 17.0557 7.64887 17.0557 7.65101 17.0557C7.65315 17.0557 7.65528 17.0557 7.65742 17.0557C7.65956 17.0557 7.6617 17.0557 7.66385 17.0557C7.66599 17.0557 7.66813 17.0557 7.67028 17.0557C7.67242 17.0557 7.67457 17.0557 7.67672 17.0557C7.67887 17.0557 7.68102 17.0557 7.68317 17.0557C7.68532 17.0557 7.68747 17.0557 7.68962 17.0557C7.69178 17.0557 7.69393 17.0557 7.69609 17.0557C7.69824 17.0557 7.7004 17.0557 7.70256 17.0557C7.70472 17.0557 7.70688 17.0557 7.70904 17.0557C7.7112 17.0557 7.71337 17.0557 7.71553 17.0557C7.7177 17.0557 7.71986 17.0557 7.72203 17.0557C7.7242 17.0557 7.72637 17.0557 7.72854 17.0557C7.73071 17.0557 7.73288 17.0557 7.73505 17.0557C7.73723 17.0557 7.7394 17.0557 7.74158 17.0557C7.74375 17.0557 7.74593 17.0557 7.74811 17.0557C7.75029 17.0557 7.75247 17.0557 7.75465 17.0557C7.75684 17.0557 7.75902 17.0557 7.76121 17.0557C7.76339 17.0557 7.76558 17.0557 7.76777 17.0557C7.76995 17.0557 7.77214 17.0557 7.77433 17.0557C7.77653 17.0557 7.77872 17.0557 7.78091 17.0557C7.78311 17.0557 7.7853 17.0557 7.7875 17.0557C7.7897 17.0557 7.7919 17.0557 7.7941 17.0557C7.7963 17.0557 7.7985 17.0557 7.8007 17.0557C7.80291 17.0557 7.80511 17.0557 7.80732 17.0557C7.80952 17.0557 7.81173 17.0557 7.81394 17.0557C7.81615 17.0557 7.81836 17.0557 7.82057 17.0557C7.82279 17.0557 7.825 17.0557 7.82722 17.0557C7.82943 17.0557 7.83165 17.0557 7.83387 17.0557C7.83609 17.0557 7.83831 17.0557 7.84053 17.0557C7.84275 17.0557 7.84498 17.0557 7.8472 17.0557C7.84943 17.0557 7.85166 17.0557 7.85388 17.0557C7.85611 17.0557 7.85834 17.0557 7.86058 17.0557C7.86281 17.0557 7.86504 17.0557 7.86728 17.0557C7.86951 17.0557 7.87175 17.0557 7.87399 17.0557C7.87623 17.0557 7.87847 17.0557 7.88071 17.0557C7.88295 17.0557 7.88519 17.0557 7.88744 17.0557C7.88968 17.0557 7.89193 17.0557 7.89418 17.0557C7.89643 17.0557 7.89868 17.0557 7.90093 17.0557C7.90318 17.0557 7.90543 17.0557 7.90769 17.0557C7.90994 17.0557 7.9122 17.0557 7.91446 17.0557C7.91672 17.0557 7.91898 17.0557 7.92124 17.0557C7.9235 17.0557 7.92576 17.0557 7.92803 17.0557C7.93029 17.0557 7.93256 17.0557 7.93483 17.0557C7.9371 17.0557 7.93937 17.0557 7.94164 17.0557C7.94391 17.0557 7.94619 17.0557 7.94846 17.0557C7.95074 17.0557 7.95302 17.0557 7.9553 17.0557C7.95757 17.0557 7.95986 17.0557 7.96214 17.0557C7.96442 17.0557 7.96671 17.0557 7.96899 17.0557C7.97128 17.0557 7.97357 17.0557 7.97586 17.0557C7.97815 17.0557 7.98044 17.0557 7.98273 17.0557C7.98502 17.0557 7.98732 17.0557 7.98962 17.0557C7.99191 17.0557 7.99421 17.0557 7.99651 17.0557C7.99881 17.0557 8.00111 17.0557 8.00342 17.0557C8.00572 17.0557 8.00803 17.0557 8.01034 17.0557C8.01264 17.0557 8.01495 17.0557 8.01726 17.0557C8.01958 17.0557 8.02189 17.0557 8.0242 17.0557C8.02652 17.0557 8.02884 17.0557 8.03115 17.0557C8.03347 17.0557 8.03579 17.0557 8.03812 17.0557C8.04044 17.0557 8.04276 17.0557 8.04509 17.0557C8.04742 17.0557 8.04974 17.0557 8.05207 17.0557C8.0544 17.0557 8.05673 17.0557 8.05907 17.0557C8.0614 17.0557 8.06374 17.0557 8.06607 17.0557C8.06841 17.0557 8.07075 17.0557 8.07309 17.0557C8.07543 17.0557 8.07778 17.0557 8.08012 17.0557C8.08247 17.0557 8.08481 17.0557 8.08716 17.0557C8.08951 17.0557 8.09186 17.0557 8.09422 17.0557C8.09657 17.0557 8.09892 17.0557 8.10128 17.0557C8.10364 17.0557 8.10599 17.0557 8.10835 17.0557C8.11072 17.0557 8.11308 17.0557 8.11544 17.0557C8.11781 17.0557 8.12017 17.0557 8.12254 17.0557C8.12491 17.0557 8.12728 17.0557 8.12965 17.0557C8.13202 17.0557 8.1344 17.0557 8.13677 17.0557C8.13915 17.0557 8.14153 17.0557 8.14391 17.0557C8.14629 17.0557 8.14867 17.0557 8.15105 17.0557C8.15344 17.0557 8.15583 17.0557 8.15821 17.0557C8.1606 17.0557 8.16299 17.0557 8.16538 17.0557C8.16778 17.0557 8.17017 17.0557 8.17257 17.0557C8.17496 17.0557 8.17736 17.0557 8.17976 17.0557C8.18216 17.0557 8.18456 17.0557 8.18697 17.0557C8.18937 17.0557 8.19178 17.0557 8.19419 17.0557C8.1966 17.0557 8.19901 17.0557 8.20142 17.0557C8.20383 17.0557 8.20625 17.0557 8.20866 17.0557C8.21108 17.0557 8.2135 17.0557 8.21592 17.0557C8.21834 17.0557 8.22076 17.0557 8.22319 17.0557C8.22561 17.0557 8.22804 17.0557 8.23047 17.0557C8.2329 17.0557 8.23533 17.0557 8.23776 17.0557C8.2402 17.0557 8.24263 17.0557 8.24507 17.0557C8.24751 17.0557 8.24995 17.0557 8.25239 17.0557C8.25483 17.0557 8.25727 17.0557 8.25972 17.0557C8.26217 17.0557 8.26461 17.0557 8.26707 17.0557C8.26952 17.0557 8.27197 17.0557 8.27442 17.0557C8.27688 17.0557 8.27933 17.0557 8.28179 17.0557C8.28425 17.0557 8.28671 17.0557 8.28918 17.0557C8.29164 17.0557 8.29411 17.0557 8.29657 17.0557C8.29904 17.0557 8.30151 17.0557 8.30398 17.0557C8.30646 17.0557 8.30893 17.0557 8.31141 17.0557C8.31388 17.0557 8.31636 17.0557 8.31884 17.0557C8.32132 17.0557 8.32381 17.0557 8.32629 17.0557C8.32878 17.0557 8.33126 17.0557 8.33375 17.0557C8.33624 17.0557 8.33873 17.0557 8.34123 17.0557C8.34372 17.0557 8.34622 17.0557 8.34872 17.0557C8.35122 17.0557 8.35372 17.0557 8.35622 17.0557C8.35872 17.0557 8.36123 17.0557 8.36374 17.0557C8.36624 17.0557 8.36875 17.0557 8.37127 17.0557C8.37378 17.0557 8.37629 17.0557 8.37881 17.0557C8.38133 17.0557 8.38385 17.0557 8.38637 17.0557C8.38889 17.0557 8.39141 17.0557 8.39394 17.0557C8.39646 17.0557 8.39899 17.0557 8.40152 17.0557C8.40405 17.0557 8.40659 17.0557 8.40912 17.0557C8.41166 17.0557 8.41419 17.0557 8.41673 17.0557C8.41927 17.0557 8.42181 17.0557 8.42436 17.0557C8.4269 17.0557 8.42945 17.0557 8.432 17.0557C8.43455 17.0557 8.4371 17.0557 8.43965 17.0557C8.44221 17.0557 8.44476 17.0557 8.44732 17.0557C8.44988 17.0557 8.45244 17.0557 8.455 17.0557C8.45757 17.0557 8.46013 17.0557 8.4627 17.0557C8.46527 17.0557 8.46784 17.0557 8.47041 17.0557C8.47298 17.0557 8.47556 17.0557 8.47814 17.0557C8.48071 17.0557 8.48329 17.0557 8.48587 17.0557C8.48846 17.0557 8.49104 17.0557 8.49363 17.0557C8.49622 17.0557 8.4988 17.0557 8.5014 17.0557C8.50399 17.0557 8.50658 17.0557 8.50918 17.0557C8.51178 17.0557 8.51438 17.0557 8.51698 17.0557C8.51958 17.0557 8.52218 17.0557 8.52479 17.0557C8.5274 17.0557 8.53 17.0557 8.53262 17.0557C8.53523 17.0557 8.53784 17.0557 8.54046 17.0557C8.54307 17.0557 8.54569 17.0557 8.54831 17.0557C8.55093 17.0557 8.55356 17.0557 8.55618 17.0557C8.55881 17.0557 8.56144 17.0557 8.56407 17.0557C8.5667 17.0557 8.56934 17.0557 8.57197 17.0557C8.57461 17.0557 8.57725 17.0557 8.57989 17.0557C8.58253 17.0557 8.58517 17.0557 8.58782 17.0557C8.59046 17.0557 8.59311 17.0557 8.59576 17.0557C8.59842 17.0557 8.60107 17.0557 8.60373 17.0557C8.60638 17.0557 8.60904 17.0557 8.6117 17.0557C8.61436 17.0557 8.61703 17.0557 8.61969 17.0557C8.62236 17.0557 8.62503 17.0557 8.6277 17.0557C8.63037 17.0557 8.63305 17.0557 8.63572 17.0557C8.6384 17.0557 8.64108 17.0557 8.64376 17.0557C8.64644 17.0557 8.64913 17.0557 8.65181 17.0557C8.6545 17.0557 8.65719 17.0557 8.65988 17.0557C8.66258 17.0557 8.66527 17.0557 8.66797 17.0557C8.67067 17.0557 8.67336 17.0557 8.67607 17.0557C8.67877 17.0557 8.68148 17.0557 8.68418 17.0557C8.68689 17.0557 8.6896 17.0557 8.69232 17.0557C8.69503 17.0557 8.69774 17.0557 8.70046 17.0557C8.70318 17.0557 8.7059 17.0557 8.70863 17.0557C8.71135 17.0557 8.71408 17.0557 8.7168 17.0557C8.71953 17.0557 8.72227 17.0557 8.725 17.0557C8.72773 17.0557 8.73047 17.0557 8.73321 17.0557C8.73595 17.0557 8.73869 17.0557 8.74144 17.0557C8.74418 17.0557 8.74693 17.0557 8.74968 17.0557C8.75243 17.0557 8.75519 17.0557 8.75794 17.0557C8.7607 17.0557 8.76346 17.0557 8.76622 17.0557C8.76898 17.0557 8.77174 17.0557 8.77451 17.0557C8.77728 17.0557 8.78005 17.0557 8.78282 17.0557C8.78559 17.0557 8.78836 17.0557 8.79114 17.0557C8.79392 17.0557 8.7967 17.0557 8.79948 17.0557C8.80227 17.0557 8.80505 17.0557 8.80784 17.0557C8.81063 17.0557 8.81342 17.0557 8.81622 17.0557C8.81901 17.0557 8.82181 17.0557 8.82461 17.0557C8.82741 17.0557 8.83021 17.0557 8.83301 17.0557C8.83582 17.0557 8.83863 17.0557 8.84144 17.0557C8.84425 17.0557 8.84706 17.0557 8.84988 17.0557C8.8527 17.0557 8.85552 17.0557 8.85834 17.0557C8.86116 17.0557 8.86398 17.0557 8.86681 17.0557C8.86964 17.0557 8.87247 17.0557 8.8753 17.0557C8.87814 17.0557 8.88097 17.0557 8.88381 17.0557C8.88665 17.0557 8.88949 17.0557 8.89234 17.0557C8.89518 17.0557 8.89803 17.0557 8.90088 17.0557C8.90373 17.0557 8.90658 17.0557 8.90944 17.0557C8.9123 17.0557 8.91516 17.0557 8.91802 17.0557C8.92088 17.0557 8.92375 17.0557 8.92661 17.0557C8.92948 17.0557 8.93235 17.0557 8.93522 17.0557C8.9381 17.0557 8.94097 17.0557 8.94385 17.0557C8.94673 17.0557 8.94962 17.0557 8.9525 17.0557C8.95539 17.0557 8.95827 17.0557 8.96116 17.0557C8.96406 17.0557 8.96695 17.0557 8.96985 17.0557C8.97274 17.0557 8.97564 17.0557 8.97854 17.0557C8.98145 17.0557 8.98435 17.0557 8.98726 17.0557C8.99017 17.0557 8.99308 17.0557 8.996 17.0557C8.99891 17.0557 9.00183 17.0557 9.00475 17.0557C9.00767 17.0557 9.01059 17.0557 9.01352 17.0557C9.01644 17.0557 9.01937 17.0557 9.02231 17.0557C9.02524 17.0557 9.02817 17.0557 9.03111 17.0557C9.03405 17.0557 9.03699 17.0557 9.03994 17.0557C9.04288 17.0557 9.04583 17.0557 9.04878 17.0557C9.05173 17.0557 9.05468 17.0557 9.05764 17.0557C9.06059 17.0557 9.06355 17.0557 9.06651 17.0557C9.06948 17.0557 9.07244 17.0557 9.07541 17.0557C9.07838 17.0557 9.08135 17.0557 9.08432 17.0557C9.0873 17.0557 9.09028 17.0557 9.09326 17.0557C9.09624 17.0557 9.09922 17.0557 9.10221 17.0557C9.10519 17.0557 9.10818 17.0557 9.11118 17.0557C9.11417 17.0557 9.11717 17.0557 9.12016 17.0557C9.12316 17.0557 9.12617 17.0557 9.12917 17.0557C9.13218 17.0557 9.13518 17.0557 9.1382 17.0557C9.14121 17.0557 9.14422 17.0557 9.14724 17.0557C9.15026 17.0557 9.15328 17.0557 9.1563 17.0557C9.15932 17.0557 9.16235 17.0557 9.16538 17.0557C9.16841 17.0557 9.17144 17.0557 9.17448 17.0557C9.17752 17.0557 9.18056 17.0557 9.1836 17.0557C9.18664 17.0557 9.18969 17.0557 9.19274 17.0557C9.19579 17.0557 9.19884 17.0557 9.20189 17.0557C9.20495 17.0557 9.20801 17.0557 9.21107 17.0557C9.21413 17.0557 9.21719 17.0557 9.22026 17.0557C9.22333 17.0557 9.2264 17.0557 9.22947 17.0557C9.23255 17.0557 9.23563 17.0557 9.23871 17.0557C9.24179 17.0557 9.24487 17.0557 9.24796 17.0557C9.25104 17.0557 9.25413 17.0557 9.25723 17.0557C9.26032 17.0557 9.26342 17.0557 9.26652 17.0557C9.26962 17.0557 9.27272 17.0557 9.27583 17.0557C9.27893 17.0557 9.28204 17.0557 9.28516 17.0557C9.28827 17.0557 9.29138 17.0557 9.2945 17.0557C9.29762 17.0557 9.30075 17.0557 9.30387 17.0557C9.307 17.0557 9.31013 17.0557 9.31326 17.0557C9.31639 17.0557 9.31953 17.0557 9.32267 17.0557C9.3258 17.0557 9.32895 17.0557 9.33209 17.0557C9.33524 17.0557 9.33839 17.0557 9.34154 17.0557C9.34469 17.0557 9.34785 17.0557 9.351 17.0557C9.35416 17.0557 9.35733 17.0557 9.36049 17.0557C9.36366 17.0557 9.36682 17.0557 9.37 17.0557C9.37317 17.0557 9.37634 17.0557 9.37952 17.0557C9.3827 17.0557 9.38588 17.0557 9.38907 17.0557C9.39225 17.0557 9.39544 17.0557 9.39863 17.0557C9.40182 17.0557 9.40502 17.0557 9.40822 17.0557C9.41142 17.0557 9.41462 17.0557 9.41782 17.0557C9.42103 17.0557 9.42424 17.0557 9.42745 17.0557C9.43066 17.0557 9.43388 17.0557 9.4371 17.0557C9.44032 17.0557 9.44354 17.0557 9.44676 17.0557C9.44999 17.0557 9.45322 17.0557 9.45645 17.0557C9.45968 17.0557 9.46292 17.0557 9.46616 17.0557C9.4694 17.0557 9.47264 17.0557 9.47589 17.0557C9.47913 17.0557 9.48238 17.0557 9.48563 17.0557C9.48889 17.0557 9.49214 17.0557 9.4954 17.0557C9.49866 17.0557 9.50193 17.0557 9.50519 17.0557C9.50846 17.0557 9.51173 17.0557 9.515 17.0557C9.51828 17.0557 9.52155 17.0557 9.52484 17.0557C9.52812 17.0557 9.5314 17.0557 9.53469 17.0557C9.53797 17.0557 9.54127 17.0557 9.54456 17.0557C9.54785 17.0557 9.55115 17.0557 9.55445 17.0557C9.55775 17.0557 9.56106 17.0557 9.56437 17.0557C9.56768 17.0557 9.57099 17.0557 9.5743 17.0557C9.57762 17.0557 9.58094 17.0557 9.58426 17.0557C9.58758 17.0557 9.59091 17.0557 9.59424 17.0557C9.59757 17.0557 9.6009 17.0557 9.60424 17.0557C9.60757 17.0557 9.61091 17.0557 9.61426 17.0557C9.6176 17.0557 9.62095 17.0557 9.6243 17.0557C9.62765 17.0557 9.631 17.0557 9.63436 17.0557C9.63772 17.0557 9.64108 17.0557 9.64445 17.0557C9.64781 17.0557 9.65118 17.0557 9.65455 17.0557C9.65792 17.0557 9.6613 17.0557 9.66468 17.0557C9.66806 17.0557 9.67144 17.0557 9.67483 17.0557C9.67821 17.0557 9.6816 17.0557 9.685 17.0557C9.68839 17.0557 9.69179 17.0557 9.69519 17.0557C9.69859 17.0557 9.702 17.0557 9.7054 17.0557C9.70881 17.0557 9.71222 17.0557 9.71564 17.0557C9.71905 17.0557 9.72247 17.0557 9.7259 17.0557C9.72932 17.0557 9.73275 17.0557 9.73618 17.0557C9.73961 17.0557 9.74304 17.0557 9.74648 17.0557C9.74991 17.0557 9.75335 17.0557 9.7568 17.0557C9.76024 17.0557 9.76369 17.0557 9.76714 17.0557C9.7706 17.0557 9.77405 17.0557 9.77751 17.0557C9.78097 17.0557 9.78443 17.0557 9.7879 17.0557C9.79137 17.0557 9.79484 17.0557 9.79831 17.0557C9.80179 17.0557 9.80526 17.0557 9.80875 17.0557C9.81223 17.0557 9.81571 17.0557 9.8192 17.0557C9.82269 17.0557 9.82618 17.0557 9.82968 17.0557C9.83318 17.0557 9.83668 17.0557 9.84018 17.0557C9.84368 17.0557 9.84719 17.0557 9.8507 17.0557C9.85422 17.0557 9.85773 17.0557 9.86125 17.0557C9.86477 17.0557 9.86829 17.0557 9.87182 17.0557C9.87534 17.0557 9.87888 17.0557 9.88241 17.0557C9.88594 17.0557 9.88948 17.0557 9.89302 17.0557C9.89656 17.0557 9.90011 17.0557 9.90366 17.0557C9.90721 17.0557 9.91076 17.0557 9.91432 17.0557C9.91787 17.0557 9.92144 17.0557 9.925 17.0557C9.92856 17.0557 9.93213 17.0557 9.9357 17.0557C9.93928 17.0557 9.94285 17.0557 9.94643 17.0557C9.95001 17.0557 9.9536 17.0557 9.95718 17.0557C9.96077 17.0557 9.96436 17.0557 9.96796 17.0557C9.97155 17.0557 9.97515 17.0557 9.97875 17.0557C9.98236 17.0557 9.98596 17.0557 9.98957 17.0557C9.99318 17.0557 9.9968 17.0557 10.0004 17.0557C10.004 17.0557 10.0077 17.0557 10.0113 17.0557C10.0149 17.0557 10.0185 17.0557 10.0222 17.0557C10.0258 17.0557 10.0294 17.0557 10.0331 17.0557C10.0367 17.0557 10.0404 17.0557 10.044 17.0557C10.0477 17.0557 10.0513 17.0557 10.055 17.0557C10.0586 17.0557 10.0623 17.0557 10.066 17.0557C10.0696 17.0557 10.0733 17.0557 10.077 17.0557C10.0806 17.0557 10.0843 17.0557 10.088 17.0557C10.0917 17.0557 10.0954 17.0557 10.0991 17.0557C10.1027 17.0557 10.1064 17.0557 10.1101 17.0557C10.1138 17.0557 10.1175 17.0557 10.1212 17.0557C10.1249 17.0557 10.1287 17.0557 10.1324 17.0557C10.1361 17.0557 10.1398 17.0557 10.1435 17.0557C10.1472 17.0557 10.151 17.0557 10.1547 17.0557C10.1584 17.0557 10.1622 17.0557 10.1659 17.0557C10.1696 17.0557 10.1734 17.0557 10.1771 17.0557C10.1809 17.0557 10.1846 17.0557 10.1884 17.0557C10.1921 17.0557 10.1959 17.0557 10.1996 17.0557C10.2034 17.0557 10.2072 17.0557 10.2109 17.0557C10.2147 17.0557 10.2185 17.0557 10.2222 17.0557C10.226 17.0557 10.2298 17.0557 10.2336 17.0557C10.2374 17.0557 10.2412 17.0557 10.2449 17.0557C10.2487 17.0557 10.2525 17.0557 10.2563 17.0557C10.2601 17.0557 10.2639 17.0557 10.2678 17.0557C10.2716 17.0557 10.2754 17.0557 10.2792 17.0557C10.283 17.0557 10.2868 17.0557 10.2907 17.0557C10.2945 17.0557 10.2983 17.0557 10.3022 17.0557C10.306 17.0557 10.3098 17.0557 10.3137 17.0557C10.3175 17.0557 10.3214 17.0557 10.3252 17.0557C10.3291 17.0557 10.3329 17.0557 10.3368 17.0557C10.3406 17.0557 10.3445 17.0557 10.3484 17.0557C10.3522 17.0557 10.3561 17.0557 10.36 17.0557C10.3639 17.0557 10.3677 17.0557 10.3716 17.0557C10.3755 17.0557 10.3794 17.0557 10.3833 17.0557C10.3872 17.0557 10.3911 17.0557 10.395 17.0557C10.3989 17.0557 10.4028 17.0557 10.4067 17.0557C10.4106 17.0557 10.4145 17.0557 10.4184 17.0557C10.4223 17.0557 10.4263 17.0557 10.4302 17.0557C10.4341 17.0557 10.438 17.0557 10.442 17.0557C10.4459 17.0557 10.4499 17.0557 10.4538 17.0557C10.4577 17.0557 10.4617 17.0557 10.4656 17.0557C10.4696 17.0557 10.4735 17.0557 10.4775 17.0557C10.4815 17.0557 10.4854 17.0557 10.4894 17.0557C10.4934 17.0557 10.4973 17.0557 10.5013 17.0557C10.5053 17.0557 10.5093 17.0557 10.5133 17.0557C10.5172 17.0557 10.5212 17.0557 10.5252 17.0557C10.5292 17.0557 10.5332 17.0557 10.5372 17.0557C10.5412 17.0557 10.5452 17.0557 10.5492 17.0557C10.5533 17.0557 10.5573 17.0557 10.5613 17.0557C10.5653 17.0557 10.5693 17.0557 10.5734 17.0557C10.5774 17.0557 10.5814 17.0557 10.5855 17.0557C10.5895 17.0557 10.5935 17.0557 10.5976 17.0557C10.6016 17.0557 10.6057 17.0557 10.6097 17.0557C10.6138 17.0557 10.6178 17.0557 10.6219 17.0557C10.626 17.0557 10.63 17.0557 10.6341 17.0557C10.6382 17.0557 10.6423 17.0557 10.6463 17.0557C10.6504 17.0557 10.6545 17.0557 10.6586 17.0557C10.6627 17.0557 10.6668 17.0557 10.6709 17.0557C10.675 17.0557 10.6791 17.0557 10.6832 17.0557C10.6873 17.0557 10.6914 17.0557 10.6955 17.0557C10.6996 17.0557 10.7038 17.0557 10.7079 17.0557C10.712 17.0557 10.7161 17.0557 10.7203 17.0557C10.7244 17.0557 10.7285 17.0557 10.7327 17.0557C10.7368 17.0557 10.741 17.0557 10.7451 17.0557C10.7493 17.0557 10.7534 17.0557 10.7576 17.0557C10.7617 17.0557 10.7659 17.0557 10.7701 17.0557C10.7742 17.0557 10.7784 17.0557 10.7826 17.0557C10.7868 17.0557 10.791 17.0557 10.7951 17.0557C10.7993 17.0557 10.8035 17.0557 10.8077 17.0557C10.8119 17.0557 10.8161 17.0557 10.8203 17.0557C10.8245 17.0557 10.8287 17.0557 10.833 17.0557C10.8372 17.0557 10.8414 17.0557 10.8456 17.0557C10.8498 17.0557 10.8541 17.0557 10.8583 17.0557C10.8625 17.0557 10.8668 17.0557 10.871 17.0557C10.8752 17.0557 10.8795 17.0557 10.8837 17.0557C10.888 17.0557 10.8922 17.0557 10.8965 17.0557C10.9008 17.0557 10.905 17.0557 10.9093 17.0557C10.9136 17.0557 10.9178 17.0557 10.9221 17.0557C10.9264 17.0557 10.9307 17.0557 10.935 17.0557C10.9392 17.0557 10.9435 17.0557 10.9478 17.0557C10.9521 17.0557 10.9564 17.0557 10.9607 17.0557C10.965 17.0557 10.9693 17.0557 10.9737 17.0557C10.978 17.0557 10.9823 17.0557 10.9866 17.0557C10.9909 17.0557 10.9953 17.0557 10.9996 17.0557C11.0039 17.0557 11.0083 17.0557 11.0126 17.0557C11.017 17.0557 11.0213 17.0557 11.0257 17.0557C11.03 17.0557 11.0344 17.0557 11.0387 17.0557C11.0431 17.0557 11.0474 17.0557 11.0518 17.0557C11.0562 17.0557 11.0606 17.0557 11.0649 17.0557C11.0693 17.0557 11.0737 17.0557 11.0781 17.0557C11.0825 17.0557 11.0869 17.0557 11.0913 17.0557C11.0957 17.0557 11.1001 17.0557 11.1045 17.0557C11.1089 17.0557 11.1133 17.0557 11.1177 17.0557C11.1221 17.0557 11.1266 17.0557 11.131 17.0557C11.1354 17.0557 11.1398 17.0557 11.1443 17.0557C11.1487 17.0557 11.1532 17.0557 11.1576 17.0557C11.162 17.0557 11.1665 17.0557 11.1709 17.0557C11.1754 17.0557 11.1799 17.0557 11.1843 17.0557C11.1888 17.0557 11.1933 17.0557 11.1977 17.0557C11.2022 17.0557 11.2067 17.0557 11.2112 17.0557C11.2156 17.0557 11.2201 17.0557 11.2246 17.0557C11.2291 17.0557 11.2336 17.0557 11.2381 17.0557C11.2426 17.0557 11.2471 17.0557 11.2516 17.0557C11.2562 17.0557 11.2607 17.0557 11.2652 17.0557C11.2697 17.0557 11.2742 17.0557 11.2788 17.0557C11.2833 17.0557 11.2878 17.0557 11.2924 17.0557C11.2969 17.0557 11.3015 17.0557 11.306 17.0557C11.3106 17.0557 11.3151 17.0557 11.3197 17.0557C11.3242 17.0557 11.3288 17.0557 11.3334 17.0557C11.3379 17.0557 11.3425 17.0557 11.3471 17.0557C11.3517 17.0557 11.3563 17.0557 11.3609 17.0557C11.3654 17.0557 11.37 17.0557 11.3746 17.0557C11.3792 17.0557 11.3838 17.0557 11.3884 17.0557C11.3931 17.0557 11.3977 17.0557 11.4023 17.0557C11.4069 17.0557 11.4115 17.0557 11.4162 17.0557C11.4208 17.0557 11.4254 17.0557 11.4301 17.0557C11.4347 17.0557 11.4393 17.0557 11.444 17.0557C11.4486 17.0557 11.4533 17.0557 11.4579 17.0557C11.4626 17.0557 11.4673 17.0557 11.4719 17.0557C11.4766 17.0557 11.4813 17.0557 11.486 17.0557C11.4906 17.0557 11.4953 17.0557 11.5 17.0557V15.0557C11.4953 15.0557 11.4906 15.0557 11.486 15.0557C11.4813 15.0557 11.4766 15.0557 11.4719 15.0557C11.4673 15.0557 11.4626 15.0557 11.4579 15.0557C11.4533 15.0557 11.4486 15.0557 11.444 15.0557C11.4393 15.0557 11.4347 15.0557 11.4301 15.0557C11.4254 15.0557 11.4208 15.0557 11.4162 15.0557C11.4115 15.0557 11.4069 15.0557 11.4023 15.0557C11.3977 15.0557 11.3931 15.0557 11.3884 15.0557C11.3838 15.0557 11.3792 15.0557 11.3746 15.0557C11.37 15.0557 11.3654 15.0557 11.3609 15.0557C11.3563 15.0557 11.3517 15.0557 11.3471 15.0557C11.3425 15.0557 11.3379 15.0557 11.3334 15.0557C11.3288 15.0557 11.3242 15.0557 11.3197 15.0557C11.3151 15.0557 11.3106 15.0557 11.306 15.0557C11.3015 15.0557 11.2969 15.0557 11.2924 15.0557C11.2878 15.0557 11.2833 15.0557 11.2788 15.0557C11.2742 15.0557 11.2697 15.0557 11.2652 15.0557C11.2607 15.0557 11.2562 15.0557 11.2516 15.0557C11.2471 15.0557 11.2426 15.0557 11.2381 15.0557C11.2336 15.0557 11.2291 15.0557 11.2246 15.0557C11.2201 15.0557 11.2156 15.0557 11.2112 15.0557C11.2067 15.0557 11.2022 15.0557 11.1977 15.0557C11.1933 15.0557 11.1888 15.0557 11.1843 15.0557C11.1799 15.0557 11.1754 15.0557 11.1709 15.0557C11.1665 15.0557 11.162 15.0557 11.1576 15.0557C11.1532 15.0557 11.1487 15.0557 11.1443 15.0557C11.1398 15.0557 11.1354 15.0557 11.131 15.0557C11.1266 15.0557 11.1221 15.0557 11.1177 15.0557C11.1133 15.0557 11.1089 15.0557 11.1045 15.0557C11.1001 15.0557 11.0957 15.0557 11.0913 15.0557C11.0869 15.0557 11.0825 15.0557 11.0781 15.0557C11.0737 15.0557 11.0693 15.0557 11.0649 15.0557C11.0606 15.0557 11.0562 15.0557 11.0518 15.0557C11.0474 15.0557 11.0431 15.0557 11.0387 15.0557C11.0344 15.0557 11.03 15.0557 11.0257 15.0557C11.0213 15.0557 11.017 15.0557 11.0126 15.0557C11.0083 15.0557 11.0039 15.0557 10.9996 15.0557C10.9953 15.0557 10.9909 15.0557 10.9866 15.0557C10.9823 15.0557 10.978 15.0557 10.9737 15.0557C10.9693 15.0557 10.965 15.0557 10.9607 15.0557C10.9564 15.0557 10.9521 15.0557 10.9478 15.0557C10.9435 15.0557 10.9392 15.0557 10.935 15.0557C10.9307 15.0557 10.9264 15.0557 10.9221 15.0557C10.9178 15.0557 10.9136 15.0557 10.9093 15.0557C10.905 15.0557 10.9008 15.0557 10.8965 15.0557C10.8922 15.0557 10.888 15.0557 10.8837 15.0557C10.8795 15.0557 10.8752 15.0557 10.871 15.0557C10.8668 15.0557 10.8625 15.0557 10.8583 15.0557C10.8541 15.0557 10.8498 15.0557 10.8456 15.0557C10.8414 15.0557 10.8372 15.0557 10.833 15.0557C10.8287 15.0557 10.8245 15.0557 10.8203 15.0557C10.8161 15.0557 10.8119 15.0557 10.8077 15.0557C10.8035 15.0557 10.7993 15.0557 10.7951 15.0557C10.791 15.0557 10.7868 15.0557 10.7826 15.0557C10.7784 15.0557 10.7742 15.0557 10.7701 15.0557C10.7659 15.0557 10.7617 15.0557 10.7576 15.0557C10.7534 15.0557 10.7493 15.0557 10.7451 15.0557C10.741 15.0557 10.7368 15.0557 10.7327 15.0557C10.7285 15.0557 10.7244 15.0557 10.7203 15.0557C10.7161 15.0557 10.712 15.0557 10.7079 15.0557C10.7038 15.0557 10.6996 15.0557 10.6955 15.0557C10.6914 15.0557 10.6873 15.0557 10.6832 15.0557C10.6791 15.0557 10.675 15.0557 10.6709 15.0557C10.6668 15.0557 10.6627 15.0557 10.6586 15.0557C10.6545 15.0557 10.6504 15.0557 10.6463 15.0557C10.6423 15.0557 10.6382 15.0557 10.6341 15.0557C10.63 15.0557 10.626 15.0557 10.6219 15.0557C10.6178 15.0557 10.6138 15.0557 10.6097 15.0557C10.6057 15.0557 10.6016 15.0557 10.5976 15.0557C10.5935 15.0557 10.5895 15.0557 10.5855 15.0557C10.5814 15.0557 10.5774 15.0557 10.5734 15.0557C10.5693 15.0557 10.5653 15.0557 10.5613 15.0557C10.5573 15.0557 10.5533 15.0557 10.5492 15.0557C10.5452 15.0557 10.5412 15.0557 10.5372 15.0557C10.5332 15.0557 10.5292 15.0557 10.5252 15.0557C10.5212 15.0557 10.5172 15.0557 10.5133 15.0557C10.5093 15.0557 10.5053 15.0557 10.5013 15.0557C10.4973 15.0557 10.4934 15.0557 10.4894 15.0557C10.4854 15.0557 10.4815 15.0557 10.4775 15.0557C10.4735 15.0557 10.4696 15.0557 10.4656 15.0557C10.4617 15.0557 10.4577 15.0557 10.4538 15.0557C10.4499 15.0557 10.4459 15.0557 10.442 15.0557C10.438 15.0557 10.4341 15.0557 10.4302 15.0557C10.4263 15.0557 10.4223 15.0557 10.4184 15.0557C10.4145 15.0557 10.4106 15.0557 10.4067 15.0557C10.4028 15.0557 10.3989 15.0557 10.395 15.0557C10.3911 15.0557 10.3872 15.0557 10.3833 15.0557C10.3794 15.0557 10.3755 15.0557 10.3716 15.0557C10.3677 15.0557 10.3639 15.0557 10.36 15.0557C10.3561 15.0557 10.3522 15.0557 10.3484 15.0557C10.3445 15.0557 10.3406 15.0557 10.3368 15.0557C10.3329 15.0557 10.3291 15.0557 10.3252 15.0557C10.3214 15.0557 10.3175 15.0557 10.3137 15.0557C10.3098 15.0557 10.306 15.0557 10.3022 15.0557C10.2983 15.0557 10.2945 15.0557 10.2907 15.0557C10.2868 15.0557 10.283 15.0557 10.2792 15.0557C10.2754 15.0557 10.2716 15.0557 10.2678 15.0557C10.2639 15.0557 10.2601 15.0557 10.2563 15.0557C10.2525 15.0557 10.2487 15.0557 10.2449 15.0557C10.2412 15.0557 10.2374 15.0557 10.2336 15.0557C10.2298 15.0557 10.226 15.0557 10.2222 15.0557C10.2185 15.0557 10.2147 15.0557 10.2109 15.0557C10.2072 15.0557 10.2034 15.0557 10.1996 15.0557C10.1959 15.0557 10.1921 15.0557 10.1884 15.0557C10.1846 15.0557 10.1809 15.0557 10.1771 15.0557C10.1734 15.0557 10.1696 15.0557 10.1659 15.0557C10.1622 15.0557 10.1584 15.0557 10.1547 15.0557C10.151 15.0557 10.1472 15.0557 10.1435 15.0557C10.1398 15.0557 10.1361 15.0557 10.1324 15.0557C10.1287 15.0557 10.1249 15.0557 10.1212 15.0557C10.1175 15.0557 10.1138 15.0557 10.1101 15.0557C10.1064 15.0557 10.1027 15.0557 10.0991 15.0557C10.0954 15.0557 10.0917 15.0557 10.088 15.0557C10.0843 15.0557 10.0806 15.0557 10.077 15.0557C10.0733 15.0557 10.0696 15.0557 10.066 15.0557C10.0623 15.0557 10.0586 15.0557 10.055 15.0557C10.0513 15.0557 10.0477 15.0557 10.044 15.0557C10.0404 15.0557 10.0367 15.0557 10.0331 15.0557C10.0294 15.0557 10.0258 15.0557 10.0222 15.0557C10.0185 15.0557 10.0149 15.0557 10.0113 15.0557C10.0077 15.0557 10.004 15.0557 10.0004 15.0557C9.9968 15.0557 9.99318 15.0557 9.98957 15.0557C9.98596 15.0557 9.98236 15.0557 9.97875 15.0557C9.97515 15.0557 9.97155 15.0557 9.96796 15.0557C9.96436 15.0557 9.96077 15.0557 9.95718 15.0557C9.9536 15.0557 9.95001 15.0557 9.94643 15.0557C9.94285 15.0557 9.93928 15.0557 9.9357 15.0557C9.93213 15.0557 9.92856 15.0557 9.925 15.0557C9.92144 15.0557 9.91787 15.0557 9.91432 15.0557C9.91076 15.0557 9.90721 15.0557 9.90366 15.0557C9.90011 15.0557 9.89656 15.0557 9.89302 15.0557C9.88948 15.0557 9.88594 15.0557 9.88241 15.0557C9.87888 15.0557 9.87534 15.0557 9.87182 15.0557C9.86829 15.0557 9.86477 15.0557 9.86125 15.0557C9.85773 15.0557 9.85422 15.0557 9.8507 15.0557C9.84719 15.0557 9.84368 15.0557 9.84018 15.0557C9.83668 15.0557 9.83318 15.0557 9.82968 15.0557C9.82618 15.0557 9.82269 15.0557 9.8192 15.0557C9.81571 15.0557 9.81223 15.0557 9.80875 15.0557C9.80526 15.0557 9.80179 15.0557 9.79831 15.0557C9.79484 15.0557 9.79137 15.0557 9.7879 15.0557C9.78443 15.0557 9.78097 15.0557 9.77751 15.0557C9.77405 15.0557 9.7706 15.0557 9.76714 15.0557C9.76369 15.0557 9.76024 15.0557 9.7568 15.0557C9.75335 15.0557 9.74991 15.0557 9.74648 15.0557C9.74304 15.0557 9.73961 15.0557 9.73618 15.0557C9.73275 15.0557 9.72932 15.0557 9.7259 15.0557C9.72247 15.0557 9.71905 15.0557 9.71564 15.0557C9.71222 15.0557 9.70881 15.0557 9.7054 15.0557C9.702 15.0557 9.69859 15.0557 9.69519 15.0557C9.69179 15.0557 9.68839 15.0557 9.685 15.0557C9.6816 15.0557 9.67821 15.0557 9.67483 15.0557C9.67144 15.0557 9.66806 15.0557 9.66468 15.0557C9.6613 15.0557 9.65792 15.0557 9.65455 15.0557C9.65118 15.0557 9.64781 15.0557 9.64445 15.0557C9.64108 15.0557 9.63772 15.0557 9.63436 15.0557C9.631 15.0557 9.62765 15.0557 9.6243 15.0557C9.62095 15.0557 9.6176 15.0557 9.61426 15.0557C9.61091 15.0557 9.60757 15.0557 9.60424 15.0557C9.6009 15.0557 9.59757 15.0557 9.59424 15.0557C9.59091 15.0557 9.58758 15.0557 9.58426 15.0557C9.58094 15.0557 9.57762 15.0557 9.5743 15.0557C9.57099 15.0557 9.56768 15.0557 9.56437 15.0557C9.56106 15.0557 9.55775 15.0557 9.55445 15.0557C9.55115 15.0557 9.54785 15.0557 9.54456 15.0557C9.54127 15.0557 9.53797 15.0557 9.53469 15.0557C9.5314 15.0557 9.52812 15.0557 9.52484 15.0557C9.52155 15.0557 9.51828 15.0557 9.515 15.0557C9.51173 15.0557 9.50846 15.0557 9.50519 15.0557C9.50193 15.0557 9.49866 15.0557 9.4954 15.0557C9.49214 15.0557 9.48889 15.0557 9.48563 15.0557C9.48238 15.0557 9.47913 15.0557 9.47589 15.0557C9.47264 15.0557 9.4694 15.0557 9.46616 15.0557C9.46292 15.0557 9.45968 15.0557 9.45645 15.0557C9.45322 15.0557 9.44999 15.0557 9.44676 15.0557C9.44354 15.0557 9.44032 15.0557 9.4371 15.0557C9.43388 15.0557 9.43066 15.0557 9.42745 15.0557C9.42424 15.0557 9.42103 15.0557 9.41782 15.0557C9.41462 15.0557 9.41142 15.0557 9.40822 15.0557C9.40502 15.0557 9.40182 15.0557 9.39863 15.0557C9.39544 15.0557 9.39225 15.0557 9.38907 15.0557C9.38588 15.0557 9.3827 15.0557 9.37952 15.0557C9.37634 15.0557 9.37317 15.0557 9.37 15.0557C9.36682 15.0557 9.36366 15.0557 9.36049 15.0557C9.35733 15.0557 9.35416 15.0557 9.351 15.0557C9.34785 15.0557 9.34469 15.0557 9.34154 15.0557C9.33839 15.0557 9.33524 15.0557 9.33209 15.0557C9.32895 15.0557 9.3258 15.0557 9.32267 15.0557C9.31953 15.0557 9.31639 15.0557 9.31326 15.0557C9.31013 15.0557 9.307 15.0557 9.30387 15.0557C9.30075 15.0557 9.29762 15.0557 9.2945 15.0557C9.29138 15.0557 9.28827 15.0557 9.28516 15.0557C9.28204 15.0557 9.27893 15.0557 9.27583 15.0557C9.27272 15.0557 9.26962 15.0557 9.26652 15.0557C9.26342 15.0557 9.26032 15.0557 9.25723 15.0557C9.25413 15.0557 9.25104 15.0557 9.24796 15.0557C9.24487 15.0557 9.24179 15.0557 9.23871 15.0557C9.23563 15.0557 9.23255 15.0557 9.22947 15.0557C9.2264 15.0557 9.22333 15.0557 9.22026 15.0557C9.21719 15.0557 9.21413 15.0557 9.21107 15.0557C9.20801 15.0557 9.20495 15.0557 9.20189 15.0557C9.19884 15.0557 9.19579 15.0557 9.19274 15.0557C9.18969 15.0557 9.18664 15.0557 9.1836 15.0557C9.18056 15.0557 9.17752 15.0557 9.17448 15.0557C9.17144 15.0557 9.16841 15.0557 9.16538 15.0557C9.16235 15.0557 9.15932 15.0557 9.1563 15.0557C9.15328 15.0557 9.15026 15.0557 9.14724 15.0557C9.14422 15.0557 9.14121 15.0557 9.1382 15.0557C9.13518 15.0557 9.13218 15.0557 9.12917 15.0557C9.12617 15.0557 9.12316 15.0557 9.12016 15.0557C9.11717 15.0557 9.11417 15.0557 9.11118 15.0557C9.10818 15.0557 9.10519 15.0557 9.10221 15.0557C9.09922 15.0557 9.09624 15.0557 9.09326 15.0557C9.09028 15.0557 9.0873 15.0557 9.08432 15.0557C9.08135 15.0557 9.07838 15.0557 9.07541 15.0557C9.07244 15.0557 9.06948 15.0557 9.06651 15.0557C9.06355 15.0557 9.06059 15.0557 9.05764 15.0557C9.05468 15.0557 9.05173 15.0557 9.04878 15.0557C9.04583 15.0557 9.04288 15.0557 9.03994 15.0557C9.03699 15.0557 9.03405 15.0557 9.03111 15.0557C9.02817 15.0557 9.02524 15.0557 9.02231 15.0557C9.01937 15.0557 9.01644 15.0557 9.01352 15.0557C9.01059 15.0557 9.00767 15.0557 9.00475 15.0557C9.00183 15.0557 8.99891 15.0557 8.996 15.0557C8.99308 15.0557 8.99017 15.0557 8.98726 15.0557C8.98435 15.0557 8.98145 15.0557 8.97854 15.0557C8.97564 15.0557 8.97274 15.0557 8.96985 15.0557C8.96695 15.0557 8.96406 15.0557 8.96116 15.0557C8.95827 15.0557 8.95539 15.0557 8.9525 15.0557C8.94962 15.0557 8.94673 15.0557 8.94385 15.0557C8.94097 15.0557 8.9381 15.0557 8.93522 15.0557C8.93235 15.0557 8.92948 15.0557 8.92661 15.0557C8.92375 15.0557 8.92088 15.0557 8.91802 15.0557C8.91516 15.0557 8.9123 15.0557 8.90944 15.0557C8.90658 15.0557 8.90373 15.0557 8.90088 15.0557C8.89803 15.0557 8.89518 15.0557 8.89234 15.0557C8.88949 15.0557 8.88665 15.0557 8.88381 15.0557C8.88097 15.0557 8.87814 15.0557 8.8753 15.0557C8.87247 15.0557 8.86964 15.0557 8.86681 15.0557C8.86398 15.0557 8.86116 15.0557 8.85834 15.0557C8.85552 15.0557 8.8527 15.0557 8.84988 15.0557C8.84706 15.0557 8.84425 15.0557 8.84144 15.0557C8.83863 15.0557 8.83582 15.0557 8.83301 15.0557C8.83021 15.0557 8.82741 15.0557 8.82461 15.0557C8.82181 15.0557 8.81901 15.0557 8.81622 15.0557C8.81342 15.0557 8.81063 15.0557 8.80784 15.0557C8.80505 15.0557 8.80227 15.0557 8.79948 15.0557C8.7967 15.0557 8.79392 15.0557 8.79114 15.0557C8.78836 15.0557 8.78559 15.0557 8.78282 15.0557C8.78005 15.0557 8.77728 15.0557 8.77451 15.0557C8.77174 15.0557 8.76898 15.0557 8.76622 15.0557C8.76346 15.0557 8.7607 15.0557 8.75794 15.0557C8.75519 15.0557 8.75243 15.0557 8.74968 15.0557C8.74693 15.0557 8.74418 15.0557 8.74144 15.0557C8.73869 15.0557 8.73595 15.0557 8.73321 15.0557C8.73047 15.0557 8.72773 15.0557 8.725 15.0557C8.72227 15.0557 8.71953 15.0557 8.7168 15.0557C8.71408 15.0557 8.71135 15.0557 8.70863 15.0557C8.7059 15.0557 8.70318 15.0557 8.70046 15.0557C8.69774 15.0557 8.69503 15.0557 8.69232 15.0557C8.6896 15.0557 8.68689 15.0557 8.68418 15.0557C8.68148 15.0557 8.67877 15.0557 8.67607 15.0557C8.67336 15.0557 8.67067 15.0557 8.66797 15.0557C8.66527 15.0557 8.66258 15.0557 8.65988 15.0557C8.65719 15.0557 8.6545 15.0557 8.65181 15.0557C8.64913 15.0557 8.64644 15.0557 8.64376 15.0557C8.64108 15.0557 8.6384 15.0557 8.63572 15.0557C8.63305 15.0557 8.63037 15.0557 8.6277 15.0557C8.62503 15.0557 8.62236 15.0557 8.61969 15.0557C8.61703 15.0557 8.61436 15.0557 8.6117 15.0557C8.60904 15.0557 8.60638 15.0557 8.60373 15.0557C8.60107 15.0557 8.59842 15.0557 8.59576 15.0557C8.59311 15.0557 8.59046 15.0557 8.58782 15.0557C8.58517 15.0557 8.58253 15.0557 8.57989 15.0557C8.57725 15.0557 8.57461 15.0557 8.57197 15.0557C8.56934 15.0557 8.5667 15.0557 8.56407 15.0557C8.56144 15.0557 8.55881 15.0557 8.55618 15.0557C8.55356 15.0557 8.55093 15.0557 8.54831 15.0557C8.54569 15.0557 8.54307 15.0557 8.54046 15.0557C8.53784 15.0557 8.53523 15.0557 8.53262 15.0557C8.53 15.0557 8.5274 15.0557 8.52479 15.0557C8.52218 15.0557 8.51958 15.0557 8.51698 15.0557C8.51438 15.0557 8.51178 15.0557 8.50918 15.0557C8.50658 15.0557 8.50399 15.0557 8.5014 15.0557C8.4988 15.0557 8.49622 15.0557 8.49363 15.0557C8.49104 15.0557 8.48846 15.0557 8.48587 15.0557C8.48329 15.0557 8.48071 15.0557 8.47814 15.0557C8.47556 15.0557 8.47298 15.0557 8.47041 15.0557C8.46784 15.0557 8.46527 15.0557 8.4627 15.0557C8.46013 15.0557 8.45757 15.0557 8.455 15.0557C8.45244 15.0557 8.44988 15.0557 8.44732 15.0557C8.44476 15.0557 8.44221 15.0557 8.43965 15.0557C8.4371 15.0557 8.43455 15.0557 8.432 15.0557C8.42945 15.0557 8.4269 15.0557 8.42436 15.0557C8.42181 15.0557 8.41927 15.0557 8.41673 15.0557C8.41419 15.0557 8.41166 15.0557 8.40912 15.0557C8.40659 15.0557 8.40405 15.0557 8.40152 15.0557C8.39899 15.0557 8.39646 15.0557 8.39394 15.0557C8.39141 15.0557 8.38889 15.0557 8.38637 15.0557C8.38385 15.0557 8.38133 15.0557 8.37881 15.0557C8.37629 15.0557 8.37378 15.0557 8.37127 15.0557C8.36875 15.0557 8.36624 15.0557 8.36374 15.0557C8.36123 15.0557 8.35872 15.0557 8.35622 15.0557C8.35372 15.0557 8.35122 15.0557 8.34872 15.0557C8.34622 15.0557 8.34372 15.0557 8.34123 15.0557C8.33873 15.0557 8.33624 15.0557 8.33375 15.0557C8.33126 15.0557 8.32878 15.0557 8.32629 15.0557C8.32381 15.0557 8.32132 15.0557 8.31884 15.0557C8.31636 15.0557 8.31388 15.0557 8.31141 15.0557C8.30893 15.0557 8.30646 15.0557 8.30398 15.0557C8.30151 15.0557 8.29904 15.0557 8.29657 15.0557C8.29411 15.0557 8.29164 15.0557 8.28918 15.0557C8.28671 15.0557 8.28425 15.0557 8.28179 15.0557C8.27933 15.0557 8.27688 15.0557 8.27442 15.0557C8.27197 15.0557 8.26952 15.0557 8.26707 15.0557C8.26461 15.0557 8.26217 15.0557 8.25972 15.0557C8.25727 15.0557 8.25483 15.0557 8.25239 15.0557C8.24995 15.0557 8.24751 15.0557 8.24507 15.0557C8.24263 15.0557 8.2402 15.0557 8.23776 15.0557C8.23533 15.0557 8.2329 15.0557 8.23047 15.0557C8.22804 15.0557 8.22561 15.0557 8.22319 15.0557C8.22076 15.0557 8.21834 15.0557 8.21592 15.0557C8.2135 15.0557 8.21108 15.0557 8.20866 15.0557C8.20625 15.0557 8.20383 15.0557 8.20142 15.0557C8.19901 15.0557 8.1966 15.0557 8.19419 15.0557C8.19178 15.0557 8.18937 15.0557 8.18697 15.0557C8.18456 15.0557 8.18216 15.0557 8.17976 15.0557C8.17736 15.0557 8.17496 15.0557 8.17257 15.0557C8.17017 15.0557 8.16778 15.0557 8.16538 15.0557C8.16299 15.0557 8.1606 15.0557 8.15821 15.0557C8.15583 15.0557 8.15344 15.0557 8.15105 15.0557C8.14867 15.0557 8.14629 15.0557 8.14391 15.0557C8.14153 15.0557 8.13915 15.0557 8.13677 15.0557C8.1344 15.0557 8.13202 15.0557 8.12965 15.0557C8.12728 15.0557 8.12491 15.0557 8.12254 15.0557C8.12017 15.0557 8.11781 15.0557 8.11544 15.0557C8.11308 15.0557 8.11072 15.0557 8.10835 15.0557C8.10599 15.0557 8.10364 15.0557 8.10128 15.0557C8.09892 15.0557 8.09657 15.0557 8.09422 15.0557C8.09186 15.0557 8.08951 15.0557 8.08716 15.0557C8.08481 15.0557 8.08247 15.0557 8.08012 15.0557C8.07778 15.0557 8.07543 15.0557 8.07309 15.0557C8.07075 15.0557 8.06841 15.0557 8.06607 15.0557C8.06374 15.0557 8.0614 15.0557 8.05907 15.0557C8.05673 15.0557 8.0544 15.0557 8.05207 15.0557C8.04974 15.0557 8.04742 15.0557 8.04509 15.0557C8.04276 15.0557 8.04044 15.0557 8.03812 15.0557C8.03579 15.0557 8.03347 15.0557 8.03115 15.0557C8.02884 15.0557 8.02652 15.0557 8.0242 15.0557C8.02189 15.0557 8.01958 15.0557 8.01726 15.0557C8.01495 15.0557 8.01264 15.0557 8.01034 15.0557C8.00803 15.0557 8.00572 15.0557 8.00342 15.0557C8.00111 15.0557 7.99881 15.0557 7.99651 15.0557C7.99421 15.0557 7.99191 15.0557 7.98962 15.0557C7.98732 15.0557 7.98502 15.0557 7.98273 15.0557C7.98044 15.0557 7.97815 15.0557 7.97586 15.0557C7.97357 15.0557 7.97128 15.0557 7.96899 15.0557C7.96671 15.0557 7.96442 15.0557 7.96214 15.0557C7.95986 15.0557 7.95757 15.0557 7.9553 15.0557C7.95302 15.0557 7.95074 15.0557 7.94846 15.0557C7.94619 15.0557 7.94391 15.0557 7.94164 15.0557C7.93937 15.0557 7.9371 15.0557 7.93483 15.0557C7.93256 15.0557 7.93029 15.0557 7.92803 15.0557C7.92576 15.0557 7.9235 15.0557 7.92124 15.0557C7.91898 15.0557 7.91672 15.0557 7.91446 15.0557C7.9122 15.0557 7.90994 15.0557 7.90769 15.0557C7.90543 15.0557 7.90318 15.0557 7.90093 15.0557C7.89868 15.0557 7.89643 15.0557 7.89418 15.0557C7.89193 15.0557 7.88968 15.0557 7.88744 15.0557C7.88519 15.0557 7.88295 15.0557 7.88071 15.0557C7.87847 15.0557 7.87623 15.0557 7.87399 15.0557C7.87175 15.0557 7.86951 15.0557 7.86728 15.0557C7.86504 15.0557 7.86281 15.0557 7.86058 15.0557C7.85834 15.0557 7.85611 15.0557 7.85388 15.0557C7.85166 15.0557 7.84943 15.0557 7.8472 15.0557C7.84498 15.0557 7.84275 15.0557 7.84053 15.0557C7.83831 15.0557 7.83609 15.0557 7.83387 15.0557C7.83165 15.0557 7.82943 15.0557 7.82722 15.0557C7.825 15.0557 7.82279 15.0557 7.82057 15.0557C7.81836 15.0557 7.81615 15.0557 7.81394 15.0557C7.81173 15.0557 7.80952 15.0557 7.80732 15.0557C7.80511 15.0557 7.80291 15.0557 7.8007 15.0557C7.7985 15.0557 7.7963 15.0557 7.7941 15.0557C7.7919 15.0557 7.7897 15.0557 7.7875 15.0557C7.7853 15.0557 7.78311 15.0557 7.78091 15.0557C7.77872 15.0557 7.77653 15.0557 7.77433 15.0557C7.77214 15.0557 7.76995 15.0557 7.76777 15.0557C7.76558 15.0557 7.76339 15.0557 7.76121 15.0557C7.75902 15.0557 7.75684 15.0557 7.75465 15.0557C7.75247 15.0557 7.75029 15.0557 7.74811 15.0557C7.74593 15.0557 7.74375 15.0557 7.74158 15.0557C7.7394 15.0557 7.73723 15.0557 7.73505 15.0557C7.73288 15.0557 7.73071 15.0557 7.72854 15.0557C7.72637 15.0557 7.7242 15.0557 7.72203 15.0557C7.71986 15.0557 7.7177 15.0557 7.71553 15.0557C7.71337 15.0557 7.7112 15.0557 7.70904 15.0557C7.70688 15.0557 7.70472 15.0557 7.70256 15.0557C7.7004 15.0557 7.69824 15.0557 7.69609 15.0557C7.69393 15.0557 7.69178 15.0557 7.68962 15.0557C7.68747 15.0557 7.68532 15.0557 7.68317 15.0557C7.68102 15.0557 7.67887 15.0557 7.67672 15.0557C7.67457 15.0557 7.67242 15.0557 7.67028 15.0557C7.66813 15.0557 7.66599 15.0557 7.66385 15.0557C7.6617 15.0557 7.65956 15.0557 7.65742 15.0557C7.65528 15.0557 7.65315 15.0557 7.65101 15.0557C7.64887 15.0557 7.64674 15.0557 7.6446 15.0557C7.64247 15.0557 7.64033 15.0557 7.6382 15.0557C7.63607 15.0557 7.63394 15.0557 7.63181 15.0557C7.62968 15.0557 7.62755 15.0557 7.62543 15.0557C7.6233 15.0557 7.62117 15.0557 7.61905 15.0557C7.61693 15.0557 7.6148 15.0557 7.61268 15.0557C7.61056 15.0557 7.60844 15.0557 7.60632 15.0557C7.6042 15.0557 7.60209 15.0557 7.59997 15.0557C7.59785 15.0557 7.59574 15.0557 7.59362 15.0557C7.59151 15.0557 7.5894 15.0557 7.58729 15.0557C7.58518 15.0557 7.58307 15.0557 7.58096 15.0557C7.57885 15.0557 7.57674 15.0557 7.57463 15.0557C7.57253 15.0557 7.57042 15.0557 7.56832 15.0557C7.56622 15.0557 7.56411 15.0557 7.56201 15.0557C7.55991 15.0557 7.55781 15.0557 7.55571 15.0557C7.55361 15.0557 7.55151 15.0557 7.54942 15.0557C7.54732 15.0557 7.54523 15.0557 7.54313 15.0557C7.54104 15.0557 7.53894 15.0557 7.53685 15.0557C7.53476 15.0557 7.53267 15.0557 7.53058 15.0557C7.52849 15.0557 7.5264 15.0557 7.52432 15.0557C7.52223 15.0557 7.52014 15.0557 7.51806 15.0557C7.51597 15.0557 7.51389 15.0557 7.51181 15.0557C7.50972 15.0557 7.50764 15.0557 7.50556 15.0557C7.50348 15.0557 7.5014 15.0557 7.49932 15.0557C7.49725 15.0557 7.49517 15.0557 7.49309 15.0557C7.49102 15.0557 7.48894 15.0557 7.48687 15.0557C7.4848 15.0557 7.48272 15.0557 7.48065 15.0557C7.47858 15.0557 7.47651 15.0557 7.47444 15.0557C7.47237 15.0557 7.4703 15.0557 7.46824 15.0557C7.46617 15.0557 7.4641 15.0557 7.46204 15.0557C7.45997 15.0557 7.45791 15.0557 7.45585 15.0557C7.45378 15.0557 7.45172 15.0557 7.44966 15.0557C7.4476 15.0557 7.44554 15.0557 7.44348 15.0557C7.44142 15.0557 7.43937 15.0557 7.43731 15.0557C7.43525 15.0557 7.4332 15.0557 7.43114 15.0557C7.42909 15.0557 7.42704 15.0557 7.42498 15.0557C7.42293 15.0557 7.42088 15.0557 7.41883 15.0557C7.41678 15.0557 7.41473 15.0557 7.41268 15.0557C7.41063 15.0557 7.40859 15.0557 7.40654 15.0557C7.40449 15.0557 7.40245 15.0557 7.4004 15.0557C7.39836 15.0557 7.39632 15.0557 7.39427 15.0557C7.39223 15.0557 7.39019 15.0557 7.38815 15.0557C7.38611 15.0557 7.38407 15.0557 7.38203 15.0557C7.37999 15.0557 7.37796 15.0557 7.37592 15.0557C7.37388 15.0557 7.37185 15.0557 7.36981 15.0557C7.36778 15.0557 7.36574 15.0557 7.36371 15.0557C7.36168 15.0557 7.35964 15.0557 7.35761 15.0557C7.35558 15.0557 7.35355 15.0557 7.35152 15.0557C7.34949 15.0557 7.34747 15.0557 7.34544 15.0557C7.34341 15.0557 7.34138 15.0557 7.33936 15.0557C7.33733 15.0557 7.33531 15.0557 7.33328 15.0557C7.33126 15.0557 7.32924 15.0557 7.32721 15.0557C7.32519 15.0557 7.32317 15.0557 7.32115 15.0557C7.31913 15.0557 7.31711 15.0557 7.31509 15.0557C7.31307 15.0557 7.31106 15.0557 7.30904 15.0557C7.30702 15.0557 7.30501 15.0557 7.30299 15.0557C7.30098 15.0557 7.29896 15.0557 7.29695 15.0557C7.29493 15.0557 7.29292 15.0557 7.29091 15.0557C7.2889 15.0557 7.28689 15.0557 7.28488 15.0557C7.28287 15.0557 7.28086 15.0557 7.27885 15.0557C7.27684 15.0557 7.27483 15.0557 7.27282 15.0557C7.27082 15.0557 7.26881 15.0557 7.2668 15.0557C7.2648 15.0557 7.26279 15.0557 7.26079 15.0557C7.25879 15.0557 7.25678 15.0557 7.25478 15.0557C7.25278 15.0557 7.25078 15.0557 7.24877 15.0557C7.24677 15.0557 7.24477 15.0557 7.24277 15.0557C7.24077 15.0557 7.23878 15.0557 7.23678 15.0557C7.23478 15.0557 7.23278 15.0557 7.23079 15.0557C7.22879 15.0557 7.22679 15.0557 7.2248 15.0557C7.2228 15.0557 7.22081 15.0557 7.21882 15.0557C7.21682 15.0557 7.21483 15.0557 7.21284 15.0557C7.21085 15.0557 7.20885 15.0557 7.20686 15.0557C7.20487 15.0557 7.20288 15.0557 7.20089 15.0557C7.1989 15.0557 7.19691 15.0557 7.19493 15.0557C7.19294 15.0557 7.19095 15.0557 7.18896 15.0557C7.18698 15.0557 7.18499 15.0557 7.18301 15.0557C7.18102 15.0557 7.17904 15.0557 7.17705 15.0557C7.17507 15.0557 7.17309 15.0557 7.1711 15.0557C7.16912 15.0557 7.16714 15.0557 7.16516 15.0557C7.16317 15.0557 7.16119 15.0557 7.15921 15.0557C7.15723 15.0557 7.15525 15.0557 7.15327 15.0557C7.1513 15.0557 7.14932 15.0557 7.14734 15.0557C7.14536 15.0557 7.14338 15.0557 7.14141 15.0557C7.13943 15.0557 7.13746 15.0557 7.13548 15.0557C7.1335 15.0557 7.13153 15.0557 7.12956 15.0557C7.12758 15.0557 7.12561 15.0557 7.12363 15.0557C7.12166 15.0557 7.11969 15.0557 7.11772 15.0557C7.11574 15.0557 7.11377 15.0557 7.1118 15.0557C7.10983 15.0557 7.10786 15.0557 7.10589 15.0557C7.10392 15.0557 7.10195 15.0557 7.09998 15.0557C7.09802 15.0557 7.09605 15.0557 7.09408 15.0557C7.09211 15.0557 7.09014 15.0557 7.08818 15.0557C7.08621 15.0557 7.08425 15.0557 7.08228 15.0557C7.08031 15.0557 7.07835 15.0557 7.07638 15.0557C7.07442 15.0557 7.07246 15.0557 7.07049 15.0557C7.06853 15.0557 7.06657 15.0557 7.0646 15.0557C7.06264 15.0557 7.06068 15.0557 7.05872 15.0557C7.05676 15.0557 7.05479 15.0557 7.05283 15.0557C7.05087 15.0557 7.04891 15.0557 7.04695 15.0557C7.04499 15.0557 7.04303 15.0557 7.04107 15.0557C7.03912 15.0557 7.03716 15.0557 7.0352 15.0557C7.03324 15.0557 7.03128 15.0557 7.02933 15.0557C7.02737 15.0557 7.02541 15.0557 7.02346 15.0557C7.0215 15.0557 7.01954 15.0557 7.01759 15.0557C7.01563 15.0557 7.01368 15.0557 7.01172 15.0557C7.00977 15.0557 7.00781 15.0557 7.00586 15.0557C7.00391 15.0557 7.00195 15.0557 7 15.0557V17.0557ZM11.5 17.0557C16.1534 17.0557 18.4874 20.4102 21.3782 24.3931C24.1771 28.2493 27.4463 32.5557 34 32.5557V30.5557C28.5537 30.5557 25.8229 27.112 22.9968 23.2183C20.2626 19.4512 17.3466 15.0557 11.5 15.0557V17.0557ZM34 32.5557C34.0078 32.5557 34.0156 32.5557 34.0234 32.5557C34.0312 32.5557 34.0389 32.5557 34.0467 32.5557C34.0544 32.5557 34.0621 32.5557 34.0698 32.5557C34.0775 32.5557 34.0852 32.5557 34.0929 32.5557C34.1005 32.5557 34.1082 32.5557 34.1158 32.5557C34.1234 32.5557 34.1311 32.5557 34.1386 32.5557C34.1462 32.5557 34.1538 32.5557 34.1614 32.5557C34.1689 32.5557 34.1765 32.5557 34.184 32.5557C34.1915 32.5557 34.199 32.5557 34.2065 32.5557C34.214 32.5557 34.2214 32.5557 34.2289 32.5557C34.2363 32.5557 34.2438 32.5557 34.2512 32.5557C34.2586 32.5557 34.266 32.5557 34.2734 32.5557C34.2807 32.5557 34.2881 32.5557 34.2954 32.5557C34.3028 32.5557 34.3101 32.5557 34.3174 32.5557C34.3247 32.5557 34.332 32.5557 34.3393 32.5557C34.3465 32.5557 34.3538 32.5557 34.361 32.5557C34.3683 32.5557 34.3755 32.5557 34.3827 32.5557C34.3899 32.5557 34.3971 32.5557 34.4042 32.5557C34.4114 32.5557 34.4185 32.5557 34.4257 32.5557C34.4328 32.5557 34.4399 32.5557 34.447 32.5557C34.4541 32.5557 34.4612 32.5557 34.4682 32.5557C34.4753 32.5557 34.4823 32.5557 34.4893 32.5557C34.4964 32.5557 34.5034 32.5557 34.5103 32.5557C34.5173 32.5557 34.5243 32.5557 34.5313 32.5557C34.5382 32.5557 34.5451 32.5557 34.5521 32.5557C34.559 32.5557 34.5659 32.5557 34.5728 32.5557C34.5797 32.5557 34.5865 32.5557 34.5934 32.5557C34.6002 32.5557 34.607 32.5557 34.6139 32.5557C34.6207 32.5557 34.6275 32.5557 34.6343 32.5557C34.641 32.5557 34.6478 32.5557 34.6546 32.5557C34.6613 32.5557 34.668 32.5557 34.6747 32.5557C34.6814 32.5557 34.6881 32.5557 34.6948 32.5557C34.7015 32.5557 34.7082 32.5557 34.7148 32.5557C34.7215 32.5557 34.7281 32.5557 34.7347 32.5557C34.7413 32.5557 34.7479 32.5557 34.7545 32.5557C34.761 32.5557 34.7676 32.5557 34.7741 32.5557C34.7807 32.5557 34.7872 32.5557 34.7937 32.5557C34.8002 32.5557 34.8067 32.5557 34.8132 32.5557C34.8197 32.5557 34.8261 32.5557 34.8326 32.5557C34.839 32.5557 34.8455 32.5557 34.8519 32.5557C34.8583 32.5557 34.8647 32.5557 34.871 32.5557C34.8774 32.5557 34.8838 32.5557 34.8901 32.5557C34.8965 32.5557 34.9028 32.5557 34.9091 32.5557C34.9154 32.5557 34.9217 32.5557 34.928 32.5557C34.9342 32.5557 34.9405 32.5557 34.9468 32.5557C34.953 32.5557 34.9592 32.5557 34.9654 32.5557C34.9716 32.5557 34.9778 32.5557 34.984 32.5557C34.9902 32.5557 34.9964 32.5557 35.0025 32.5557C35.0086 32.5557 35.0148 32.5557 35.0209 32.5557C35.027 32.5557 35.0331 32.5557 35.0392 32.5557C35.0453 32.5557 35.0513 32.5557 35.0574 32.5557C35.0634 32.5557 35.0695 32.5557 35.0755 32.5557C35.0815 32.5557 35.0875 32.5557 35.0935 32.5557C35.0995 32.5557 35.1054 32.5557 35.1114 32.5557C35.1173 32.5557 35.1233 32.5557 35.1292 32.5557C35.1351 32.5557 35.141 32.5557 35.1469 32.5557C35.1528 32.5557 35.1586 32.5557 35.1645 32.5557C35.1704 32.5557 35.1762 32.5557 35.182 32.5557C35.1878 32.5557 35.1937 32.5557 35.1994 32.5557C35.2052 32.5557 35.211 32.5557 35.2168 32.5557C35.2225 32.5557 35.2283 32.5557 35.234 32.5557C35.2397 32.5557 35.2455 32.5557 35.2512 32.5557C35.2569 32.5557 35.2625 32.5557 35.2682 32.5557C35.2739 32.5557 35.2795 32.5557 35.2852 32.5557C35.2908 32.5557 35.2964 32.5557 35.302 32.5557C35.3076 32.5557 35.3132 32.5557 35.3188 32.5557C35.3244 32.5557 35.3299 32.5557 35.3355 32.5557C35.341 32.5557 35.3465 32.5557 35.352 32.5557C35.3575 32.5557 35.363 32.5557 35.3685 32.5557C35.374 32.5557 35.3795 32.5557 35.3849 32.5557C35.3904 32.5557 35.3958 32.5557 35.4012 32.5557C35.4066 32.5557 35.4121 32.5557 35.4174 32.5557C35.4228 32.5557 35.4282 32.5557 35.4336 32.5557C35.4389 32.5557 35.4443 32.5557 35.4496 32.5557C35.4549 32.5557 35.4602 32.5557 35.4655 32.5557C35.4708 32.5557 35.4761 32.5557 35.4814 32.5557C35.4867 32.5557 35.4919 32.5557 35.4971 32.5557C35.5024 32.5557 35.5076 32.5557 35.5128 32.5557C35.518 32.5557 35.5232 32.5557 35.5284 32.5557C35.5336 32.5557 35.5387 32.5557 35.5439 32.5557C35.549 32.5557 35.5542 32.5557 35.5593 32.5557C35.5644 32.5557 35.5695 32.5557 35.5746 32.5557C35.5797 32.5557 35.5848 32.5557 35.5898 32.5557C35.5949 32.5557 35.5999 32.5557 35.605 32.5557C35.61 32.5557 35.615 32.5557 35.62 32.5557C35.625 32.5557 35.63 32.5557 35.635 32.5557C35.6399 32.5557 35.6449 32.5557 35.6498 32.5557C35.6548 32.5557 35.6597 32.5557 35.6646 32.5557C35.6695 32.5557 35.6744 32.5557 35.6793 32.5557C35.6842 32.5557 35.6891 32.5557 35.6939 32.5557C35.6988 32.5557 35.7036 32.5557 35.7085 32.5557C35.7133 32.5557 35.7181 32.5557 35.7229 32.5557C35.7277 32.5557 35.7325 32.5557 35.7372 32.5557C35.742 32.5557 35.7468 32.5557 35.7515 32.5557C35.7563 32.5557 35.761 32.5557 35.7657 32.5557C35.7704 32.5557 35.7751 32.5557 35.7798 32.5557C35.7845 32.5557 35.7891 32.5557 35.7938 32.5557C35.7985 32.5557 35.8031 32.5557 35.8077 32.5557C35.8124 32.5557 35.817 32.5557 35.8216 32.5557C35.8262 32.5557 35.8307 32.5557 35.8353 32.5557C35.8399 32.5557 35.8445 32.5557 35.849 32.5557C35.8535 32.5557 35.8581 32.5557 35.8626 32.5557C35.8671 32.5557 35.8716 32.5557 35.8761 32.5557C35.8806 32.5557 35.8851 32.5557 35.8895 32.5557C35.894 32.5557 35.8984 32.5557 35.9029 32.5557C35.9073 32.5557 35.9117 32.5557 35.9161 32.5557C35.9205 32.5557 35.9249 32.5557 35.9293 32.5557C35.9337 32.5557 35.938 32.5557 35.9424 32.5557C35.9467 32.5557 35.9511 32.5557 35.9554 32.5557C35.9597 32.5557 35.964 32.5557 35.9683 32.5557C35.9726 32.5557 35.9769 32.5557 35.9812 32.5557C35.9855 32.5557 35.9897 32.5557 35.994 32.5557C35.9982 32.5557 36.0024 32.5557 36.0066 32.5557C36.0109 32.5557 36.0151 32.5557 36.0193 32.5557C36.0234 32.5557 36.0276 32.5557 36.0318 32.5557C36.0359 32.5557 36.0401 32.5557 36.0442 32.5557C36.0484 32.5557 36.0525 32.5557 36.0566 32.5557C36.0607 32.5557 36.0648 32.5557 36.0689 32.5557C36.073 32.5557 36.077 32.5557 36.0811 32.5557C36.0852 32.5557 36.0892 32.5557 36.0932 32.5557C36.0973 32.5557 36.1013 32.5557 36.1053 32.5557C36.1093 32.5557 36.1133 32.5557 36.1173 32.5557C36.1212 32.5557 36.1252 32.5557 36.1292 32.5557C36.1331 32.5557 36.1371 32.5557 36.141 32.5557C36.1449 32.5557 36.1488 32.5557 36.1527 32.5557C36.1566 32.5557 36.1605 32.5557 36.1644 32.5557C36.1683 32.5557 36.1721 32.5557 36.176 32.5557C36.1798 32.5557 36.1837 32.5557 36.1875 32.5557C36.1913 32.5557 36.1951 32.5557 36.1989 32.5557C36.2027 32.5557 36.2065 32.5557 36.2103 32.5557C36.2141 32.5557 36.2178 32.5557 36.2216 32.5557C36.2253 32.5557 36.2291 32.5557 36.2328 32.5557C36.2365 32.5557 36.2402 32.5557 36.2439 32.5557C36.2476 32.5557 36.2513 32.5557 36.255 32.5557C36.2587 32.5557 36.2623 32.5557 36.266 32.5557C36.2696 32.5557 36.2733 32.5557 36.2769 32.5557C36.2805 32.5557 36.2841 32.5557 36.2877 32.5557C36.2913 32.5557 36.2949 32.5557 36.2985 32.5557C36.3021 32.5557 36.3056 32.5557 36.3092 32.5557C36.3127 32.5557 36.3163 32.5557 36.3198 32.5557C36.3233 32.5557 36.3268 32.5557 36.3303 32.5557C36.3338 32.5557 36.3373 32.5557 36.3408 32.5557C36.3443 32.5557 36.3477 32.5557 36.3512 32.5557C36.3546 32.5557 36.3581 32.5557 36.3615 32.5557C36.3649 32.5557 36.3684 32.5557 36.3718 32.5557C36.3752 32.5557 36.3786 32.5557 36.3819 32.5557C36.3853 32.5557 36.3887 32.5557 36.3921 32.5557C36.3954 32.5557 36.3988 32.5557 36.4021 32.5557C36.4054 32.5557 36.4087 32.5557 36.4121 32.5557C36.4154 32.5557 36.4187 32.5557 36.422 32.5557C36.4252 32.5557 36.4285 32.5557 36.4318 32.5557C36.435 32.5557 36.4383 32.5557 36.4415 32.5557C36.4448 32.5557 36.448 32.5557 36.4512 32.5557C36.4544 32.5557 36.4576 32.5557 36.4608 32.5557C36.464 32.5557 36.4672 32.5557 36.4704 32.5557C36.4736 32.5557 36.4767 32.5557 36.4799 32.5557C36.483 32.5557 36.4861 32.5557 36.4893 32.5557C36.4924 32.5557 36.4955 32.5557 36.4986 32.5557C36.5017 32.5557 36.5048 32.5557 36.5079 32.5557C36.511 32.5557 36.514 32.5557 36.5171 32.5557C36.5201 32.5557 36.5232 32.5557 36.5262 32.5557C36.5293 32.5557 36.5323 32.5557 36.5353 32.5557C36.5383 32.5557 36.5413 32.5557 36.5443 32.5557C36.5473 32.5557 36.5503 32.5557 36.5532 32.5557C36.5562 32.5557 36.5592 32.5557 36.5621 32.5557C36.565 32.5557 36.568 32.5557 36.5709 32.5557C36.5738 32.5557 36.5767 32.5557 36.5796 32.5557C36.5825 32.5557 36.5854 32.5557 36.5883 32.5557C36.5912 32.5557 36.5941 32.5557 36.5969 32.5557C36.5998 32.5557 36.6026 32.5557 36.6055 32.5557C36.6083 32.5557 36.6111 32.5557 36.6139 32.5557C36.6167 32.5557 36.6195 32.5557 36.6223 32.5557C36.6251 32.5557 36.6279 32.5557 36.6307 32.5557C36.6335 32.5557 36.6362 32.5557 36.639 32.5557C36.6417 32.5557 36.6445 32.5557 36.6472 32.5557C36.6499 32.5557 36.6526 32.5557 36.6553 32.5557C36.658 32.5557 36.6607 32.5557 36.6634 32.5557C36.6661 32.5557 36.6688 32.5557 36.6715 32.5557C36.6741 32.5557 36.6768 32.5557 36.6794 32.5557C36.6821 32.5557 36.6847 32.5557 36.6873 32.5557C36.6899 32.5557 36.6926 32.5557 36.6952 32.5557C36.6978 32.5557 36.7003 32.5557 36.7029 32.5557C36.7055 32.5557 36.7081 32.5557 36.7106 32.5557C36.7132 32.5557 36.7158 32.5557 36.7183 32.5557C36.7208 32.5557 36.7234 32.5557 36.7259 32.5557C36.7284 32.5557 36.7309 32.5557 36.7334 32.5557C36.7359 32.5557 36.7384 32.5557 36.7409 32.5557C36.7434 32.5557 36.7458 32.5557 36.7483 32.5557C36.7508 32.5557 36.7532 32.5557 36.7557 32.5557C36.7581 32.5557 36.7605 32.5557 36.7629 32.5557C36.7654 32.5557 36.7678 32.5557 36.7702 32.5557C36.7726 32.5557 36.775 32.5557 36.7773 32.5557C36.7797 32.5557 36.7821 32.5557 36.7845 32.5557C36.7868 32.5557 36.7892 32.5557 36.7915 32.5557C36.7938 32.5557 36.7962 32.5557 36.7985 32.5557C36.8008 32.5557 36.8031 32.5557 36.8054 32.5557C36.8077 32.5557 36.81 32.5557 36.8123 32.5557C36.8146 32.5557 36.8169 32.5557 36.8191 32.5557C36.8214 32.5557 36.8237 32.5557 36.8259 32.5557C36.8281 32.5557 36.8304 32.5557 36.8326 32.5557C36.8348 32.5557 36.837 32.5557 36.8393 32.5557C36.8415 32.5557 36.8437 32.5557 36.8458 32.5557C36.848 32.5557 36.8502 32.5557 36.8524 32.5557C36.8545 32.5557 36.8567 32.5557 36.8589 32.5557C36.861 32.5557 36.8631 32.5557 36.8653 32.5557C36.8674 32.5557 36.8695 32.5557 36.8716 32.5557C36.8738 32.5557 36.8759 32.5557 36.878 32.5557C36.8801 32.5557 36.8821 32.5557 36.8842 32.5557C36.8863 32.5557 36.8884 32.5557 36.8904 32.5557C36.8925 32.5557 36.8945 32.5557 36.8966 32.5557C36.8986 32.5557 36.9006 32.5557 36.9027 32.5557C36.9047 32.5557 36.9067 32.5557 36.9087 32.5557C36.9107 32.5557 36.9127 32.5557 36.9147 32.5557C36.9167 32.5557 36.9186 32.5557 36.9206 32.5557C36.9226 32.5557 36.9245 32.5557 36.9265 32.5557C36.9284 32.5557 36.9304 32.5557 36.9323 32.5557C36.9343 32.5557 36.9362 32.5557 36.9381 32.5557C36.94 32.5557 36.9419 32.5557 36.9438 32.5557C36.9457 32.5557 36.9476 32.5557 36.9495 32.5557C36.9514 32.5557 36.9532 32.5557 36.9551 32.5557C36.957 32.5557 36.9588 32.5557 36.9607 32.5557C36.9625 32.5557 36.9643 32.5557 36.9662 32.5557C36.968 32.5557 36.9698 32.5557 36.9716 32.5557C36.9735 32.5557 36.9753 32.5557 36.9771 32.5557C36.9788 32.5557 36.9806 32.5557 36.9824 32.5557C36.9842 32.5557 36.986 32.5557 36.9877 32.5557C36.9895 32.5557 36.9912 32.5557 36.993 32.5557C36.9947 32.5557 36.9965 32.5557 36.9982 32.5557C36.9999 32.5557 37.0016 32.5557 37.0034 32.5557C37.0051 32.5557 37.0068 32.5557 37.0085 32.5557C37.0102 32.5557 37.0119 32.5557 37.0135 32.5557C37.0152 32.5557 37.0169 32.5557 37.0185 32.5557C37.0202 32.5557 37.0219 32.5557 37.0235 32.5557C37.0252 32.5557 37.0268 32.5557 37.0284 32.5557C37.0301 32.5557 37.0317 32.5557 37.0333 32.5557C37.0349 32.5557 37.0365 32.5557 37.0381 32.5557C37.0397 32.5557 37.0413 32.5557 37.0429 32.5557C37.0445 32.5557 37.0461 32.5557 37.0476 32.5557C37.0492 32.5557 37.0508 32.5557 37.0523 32.5557C37.0539 32.5557 37.0554 32.5557 37.0569 32.5557C37.0585 32.5557 37.06 32.5557 37.0615 32.5557C37.0631 32.5557 37.0646 32.5557 37.0661 32.5557C37.0676 32.5557 37.0691 32.5557 37.0706 32.5557C37.0721 32.5557 37.0735 32.5557 37.075 32.5557C37.0765 32.5557 37.078 32.5557 37.0794 32.5557C37.0809 32.5557 37.0823 32.5557 37.0838 32.5557C37.0852 32.5557 37.0867 32.5557 37.0881 32.5557C37.0895 32.5557 37.091 32.5557 37.0924 32.5557C37.0938 32.5557 37.0952 32.5557 37.0966 32.5557C37.098 32.5557 37.0994 32.5557 37.1008 32.5557C37.1022 32.5557 37.1036 32.5557 37.1049 32.5557C37.1063 32.5557 37.1077 32.5557 37.109 32.5557C37.1104 32.5557 37.1117 32.5557 37.1131 32.5557C37.1144 32.5557 37.1158 32.5557 37.1171 32.5557C37.1184 32.5557 37.1198 32.5557 37.1211 32.5557C37.1224 32.5557 37.1237 32.5557 37.125 32.5557C37.1263 32.5557 37.1276 32.5557 37.1289 32.5557C37.1302 32.5557 37.1315 32.5557 37.1327 32.5557C37.134 32.5557 37.1353 32.5557 37.1365 32.5557C37.1378 32.5557 37.139 32.5557 37.1403 32.5557C37.1415 32.5557 37.1428 32.5557 37.144 32.5557C37.1452 32.5557 37.1465 32.5557 37.1477 32.5557C37.1489 32.5557 37.1501 32.5557 37.1513 32.5557C37.1525 32.5557 37.1537 32.5557 37.1549 32.5557C37.1561 32.5557 37.1573 32.5557 37.1585 32.5557C37.1597 32.5557 37.1608 32.5557 37.162 32.5557C37.1632 32.5557 37.1643 32.5557 37.1655 32.5557C37.1666 32.5557 37.1678 32.5557 37.1689 32.5557C37.1701 32.5557 37.1712 32.5557 37.1723 32.5557C37.1735 32.5557 37.1746 32.5557 37.1757 32.5557C37.1768 32.5557 37.1779 32.5557 37.179 32.5557C37.1801 32.5557 37.1812 32.5557 37.1823 32.5557C37.1834 32.5557 37.1845 32.5557 37.1856 32.5557C37.1866 32.5557 37.1877 32.5557 37.1888 32.5557C37.1898 32.5557 37.1909 32.5557 37.192 32.5557C37.193 32.5557 37.194 32.5557 37.1951 32.5557C37.1961 32.5557 37.1972 32.5557 37.1982 32.5557C37.1992 32.5557 37.2002 32.5557 37.2013 32.5557C37.2023 32.5557 37.2033 32.5557 37.2043 32.5557C37.2053 32.5557 37.2063 32.5557 37.2073 32.5557C37.2083 32.5557 37.2093 32.5557 37.2102 32.5557C37.2112 32.5557 37.2122 32.5557 37.2132 32.5557C37.2141 32.5557 37.2151 32.5557 37.2161 32.5557C37.217 32.5557 37.218 32.5557 37.2189 32.5557C37.2199 32.5557 37.2208 32.5557 37.2217 32.5557C37.2227 32.5557 37.2236 32.5557 37.2245 32.5557C37.2254 32.5557 37.2264 32.5557 37.2273 32.5557C37.2282 32.5557 37.2291 32.5557 37.23 32.5557C37.2309 32.5557 37.2318 32.5557 37.2327 32.5557C37.2336 32.5557 37.2344 32.5557 37.2353 32.5557C37.2362 32.5557 37.2371 32.5557 37.2379 32.5557C37.2388 32.5557 37.2397 32.5557 37.2405 32.5557C37.2414 32.5557 37.2422 32.5557 37.2431 32.5557C37.2439 32.5557 37.2448 32.5557 37.2456 32.5557C37.2464 32.5557 37.2473 32.5557 37.2481 32.5557C37.2489 32.5557 37.2497 32.5557 37.2505 32.5557C37.2514 32.5557 37.2522 32.5557 37.253 32.5557C37.2538 32.5557 37.2546 32.5557 37.2554 32.5557C37.2562 32.5557 37.2569 32.5557 37.2577 32.5557C37.2585 32.5557 37.2593 32.5557 37.2601 32.5557C37.2608 32.5557 37.2616 32.5557 37.2624 32.5557C37.2631 32.5557 37.2639 32.5557 37.2646 32.5557C37.2654 32.5557 37.2661 32.5557 37.2669 32.5557C37.2676 32.5557 37.2684 32.5557 37.2691 32.5557C37.2698 32.5557 37.2706 32.5557 37.2713 32.5557C37.272 32.5557 37.2727 32.5557 37.2734 32.5557C37.2742 32.5557 37.2749 32.5557 37.2756 32.5557C37.2763 32.5557 37.277 32.5557 37.2777 32.5557C37.2784 32.5557 37.2791 32.5557 37.2798 32.5557C37.2804 32.5557 37.2811 32.5557 37.2818 32.5557C37.2825 32.5557 37.2831 32.5557 37.2838 32.5557C37.2845 32.5557 37.2851 32.5557 37.2858 32.5557C37.2865 32.5557 37.2871 32.5557 37.2878 32.5557C37.2884 32.5557 37.2891 32.5557 37.2897 32.5557C37.2903 32.5557 37.291 32.5557 37.2916 32.5557C37.2922 32.5557 37.2929 32.5557 37.2935 32.5557C37.2941 32.5557 37.2947 32.5557 37.2954 32.5557C37.296 32.5557 37.2966 32.5557 37.2972 32.5557C37.2978 32.5557 37.2984 32.5557 37.299 32.5557C37.2996 32.5557 37.3002 32.5557 37.3008 32.5557C37.3014 32.5557 37.302 32.5557 37.3025 32.5557C37.3031 32.5557 37.3037 32.5557 37.3043 32.5557C37.3048 32.5557 37.3054 32.5557 37.306 32.5557C37.3065 32.5557 37.3071 32.5557 37.3077 32.5557C37.3082 32.5557 37.3088 32.5557 37.3093 32.5557C37.3099 32.5557 37.3104 32.5557 37.311 32.5557C37.3115 32.5557 37.312 32.5557 37.3126 32.5557C37.3131 32.5557 37.3136 32.5557 37.3142 32.5557C37.3147 32.5557 37.3152 32.5557 37.3157 32.5557C37.3163 32.5557 37.3168 32.5557 37.3173 32.5557C37.3178 32.5557 37.3183 32.5557 37.3188 32.5557C37.3193 32.5557 37.3198 32.5557 37.3203 32.5557C37.3208 32.5557 37.3213 32.5557 37.3218 32.5557C37.3223 32.5557 37.3228 32.5557 37.3233 32.5557C37.3237 32.5557 37.3242 32.5557 37.3247 32.5557C37.3252 32.5557 37.3256 32.5557 37.3261 32.5557C37.3266 32.5557 37.327 32.5557 37.3275 32.5557C37.328 32.5557 37.3284 32.5557 37.3289 32.5557C37.3293 32.5557 37.3298 32.5557 37.3302 32.5557C37.3307 32.5557 37.3311 32.5557 37.3316 32.5557C37.332 32.5557 37.3325 32.5557 37.3329 32.5557C37.3333 32.5557 37.3338 32.5557 37.3342 32.5557C37.3346 32.5557 37.3351 32.5557 37.3355 32.5557C37.3359 32.5557 37.3363 32.5557 37.3367 32.5557C37.3372 32.5557 37.3376 32.5557 37.338 32.5557C37.3384 32.5557 37.3388 32.5557 37.3392 32.5557C37.3396 32.5557 37.34 32.5557 37.3404 32.5557C37.3408 32.5557 37.3412 32.5557 37.3416 32.5557C37.342 32.5557 37.3424 32.5557 37.3428 32.5557C37.3432 32.5557 37.3435 32.5557 37.3439 32.5557C37.3443 32.5557 37.3447 32.5557 37.3451 32.5557C37.3454 32.5557 37.3458 32.5557 37.3462 32.5557C37.3466 32.5557 37.3469 32.5557 37.3473 32.5557C37.3477 32.5557 37.348 32.5557 37.3484 32.5557C37.3487 32.5557 37.3491 32.5557 37.3495 32.5557C37.3498 32.5557 37.3502 32.5557 37.3505 32.5557C37.3509 32.5557 37.3512 32.5557 37.3516 32.5557C37.3519 32.5557 37.3523 32.5557 37.3526 32.5557C37.3529 32.5557 37.3533 32.5557 37.3536 32.5557C37.3539 32.5557 37.3543 32.5557 37.3546 32.5557C37.3549 32.5557 37.3553 32.5557 37.3556 32.5557C37.3559 32.5557 37.3562 32.5557 37.3566 32.5557C37.3569 32.5557 37.3572 32.5557 37.3575 32.5557C37.3578 32.5557 37.3582 32.5557 37.3585 32.5557C37.3588 32.5557 37.3591 32.5557 37.3594 32.5557C37.3597 32.5557 37.36 32.5557 37.3603 32.5557C37.3606 32.5557 37.3609 32.5557 37.3612 32.5557C37.3615 32.5557 37.3618 32.5557 37.3621 32.5557C37.3624 32.5557 37.3627 32.5557 37.363 32.5557C37.3633 32.5557 37.3636 32.5557 37.3639 32.5557C37.3642 32.5557 37.3645 32.5557 37.3647 32.5557C37.365 32.5557 37.3653 32.5557 37.3656 32.5557C37.3659 32.5557 37.3661 32.5557 37.3664 32.5557C37.3667 32.5557 37.367 32.5557 37.3673 32.5557C37.3675 32.5557 37.3678 32.5557 37.3681 32.5557C37.3683 32.5557 37.3686 32.5557 37.3689 32.5557C37.3691 32.5557 37.3694 32.5557 37.3697 32.5557C37.3699 32.5557 37.3702 32.5557 37.3705 32.5557C37.3707 32.5557 37.371 32.5557 37.3712 32.5557C37.3715 32.5557 37.3718 32.5557 37.372 32.5557C37.3723 32.5557 37.3725 32.5557 37.3728 32.5557C37.373 32.5557 37.3733 32.5557 37.3735 32.5557C37.3738 32.5557 37.374 32.5557 37.3743 32.5557C37.3745 32.5557 37.3748 32.5557 37.375 32.5557C37.3752 32.5557 37.3755 32.5557 37.3757 32.5557C37.376 32.5557 37.3762 32.5557 37.3764 32.5557C37.3767 32.5557 37.3769 32.5557 37.3772 32.5557C37.3774 32.5557 37.3776 32.5557 37.3779 32.5557C37.3781 32.5557 37.3783 32.5557 37.3786 32.5557C37.3788 32.5557 37.379 32.5557 37.3793 32.5557C37.3795 32.5557 37.3797 32.5557 37.38 32.5557C37.3802 32.5557 37.3804 32.5557 37.3806 32.5557C37.3809 32.5557 37.3811 32.5557 37.3813 32.5557C37.3815 32.5557 37.3818 32.5557 37.382 32.5557C37.3822 32.5557 37.3824 32.5557 37.3827 32.5557C37.3829 32.5557 37.3831 32.5557 37.3833 32.5557C37.3835 32.5557 37.3838 32.5557 37.384 32.5557C37.3842 32.5557 37.3844 32.5557 37.3846 32.5557C37.3848 32.5557 37.3851 32.5557 37.3853 32.5557C37.3855 32.5557 37.3857 32.5557 37.3859 32.5557C37.3861 32.5557 37.3864 32.5557 37.3866 32.5557C37.3868 32.5557 37.387 32.5557 37.3872 32.5557C37.3874 32.5557 37.3876 32.5557 37.3878 32.5557C37.3881 32.5557 37.3883 32.5557 37.3885 32.5557C37.3887 32.5557 37.3889 32.5557 37.3891 32.5557C37.3893 32.5557 37.3895 32.5557 37.3897 32.5557C37.39 32.5557 37.3902 32.5557 37.3904 32.5557C37.3906 32.5557 37.3908 32.5557 37.391 32.5557C37.3912 32.5557 37.3914 32.5557 37.3916 32.5557C37.3918 32.5557 37.392 32.5557 37.3923 32.5557C37.3925 32.5557 37.3927 32.5557 37.3929 32.5557C37.3931 32.5557 37.3933 32.5557 37.3935 32.5557C37.3937 32.5557 37.3939 32.5557 37.3941 32.5557C37.3943 32.5557 37.3945 32.5557 37.3947 32.5557C37.395 32.5557 37.3952 32.5557 37.3954 32.5557C37.3956 32.5557 37.3958 32.5557 37.396 32.5557C37.3962 32.5557 37.3964 32.5557 37.3966 32.5557C37.3968 32.5557 37.397 32.5557 37.3972 32.5557C37.3975 32.5557 37.3977 32.5557 37.3979 32.5557C37.3981 32.5557 37.3983 32.5557 37.3985 32.5557C37.3987 32.5557 37.3989 32.5557 37.3991 32.5557C37.3994 32.5557 37.3996 32.5557 37.3998 32.5557C37.4 32.5557 37.4002 32.5557 37.4004 32.5557C37.4006 32.5557 37.4008 32.5557 37.4011 32.5557C37.4013 32.5557 37.4015 32.5557 37.4017 32.5557C37.4019 32.5557 37.4021 32.5557 37.4023 32.5557C37.4026 32.5557 37.4028 32.5557 37.403 32.5557C37.4032 32.5557 37.4034 32.5557 37.4036 32.5557C37.4039 32.5557 37.4041 32.5557 37.4043 32.5557C37.4045 32.5557 37.4047 32.5557 37.405 32.5557C37.4052 32.5557 37.4054 32.5557 37.4056 32.5557C37.4059 32.5557 37.4061 32.5557 37.4063 32.5557C37.4065 32.5557 37.4068 32.5557 37.407 32.5557C37.4072 32.5557 37.4074 32.5557 37.4077 32.5557C37.4079 32.5557 37.4081 32.5557 37.4084 32.5557C37.4086 32.5557 37.4088 32.5557 37.4091 32.5557C37.4093 32.5557 37.4095 32.5557 37.4098 32.5557C37.41 32.5557 37.4102 32.5557 37.4105 32.5557C37.4107 32.5557 37.4109 32.5557 37.4112 32.5557C37.4114 32.5557 37.4117 32.5557 37.4119 32.5557C37.4121 32.5557 37.4124 32.5557 37.4126 32.5557C37.4129 32.5557 37.4131 32.5557 37.4134 32.5557C37.4136 32.5557 37.4139 32.5557 37.4141 32.5557C37.4144 32.5557 37.4146 32.5557 37.4149 32.5557C37.4151 32.5557 37.4154 32.5557 37.4156 32.5557C37.4159 32.5557 37.4161 32.5557 37.4164 32.5557C37.4167 32.5557 37.4169 32.5557 37.4172 32.5557C37.4174 32.5557 37.4177 32.5557 37.418 32.5557C37.4182 32.5557 37.4185 32.5557 37.4188 32.5557C37.419 32.5557 37.4193 32.5557 37.4196 32.5557C37.4198 32.5557 37.4201 32.5557 37.4204 32.5557C37.4207 32.5557 37.4209 32.5557 37.4212 32.5557C37.4215 32.5557 37.4218 32.5557 37.4221 32.5557C37.4223 32.5557 37.4226 32.5557 37.4229 32.5557C37.4232 32.5557 37.4235 32.5557 37.4238 32.5557C37.4241 32.5557 37.4244 32.5557 37.4246 32.5557C37.4249 32.5557 37.4252 32.5557 37.4255 32.5557C37.4258 32.5557 37.4261 32.5557 37.4264 32.5557C37.4267 32.5557 37.427 32.5557 37.4273 32.5557C37.4276 32.5557 37.4279 32.5557 37.4283 32.5557C37.4286 32.5557 37.4289 32.5557 37.4292 32.5557C37.4295 32.5557 37.4298 32.5557 37.4301 32.5557C37.4305 32.5557 37.4308 32.5557 37.4311 32.5557C37.4314 32.5557 37.4317 32.5557 37.4321 32.5557C37.4324 32.5557 37.4327 32.5557 37.4331 32.5557C37.4334 32.5557 37.4337 32.5557 37.4341 32.5557C37.4344 32.5557 37.4347 32.5557 37.4351 32.5557C37.4354 32.5557 37.4358 32.5557 37.4361 32.5557C37.4364 32.5557 37.4368 32.5557 37.4371 32.5557C37.4375 32.5557 37.4379 32.5557 37.4382 32.5557C37.4386 32.5557 37.4389 32.5557 37.4393 32.5557C37.4396 32.5557 37.44 32.5557 37.4404 32.5557C37.4407 32.5557 37.4411 32.5557 37.4415 32.5557C37.4419 32.5557 37.4422 32.5557 37.4426 32.5557C37.443 32.5557 37.4434 32.5557 37.4437 32.5557C37.4441 32.5557 37.4445 32.5557 37.4449 32.5557C37.4453 32.5557 37.4457 32.5557 37.4461 32.5557C37.4465 32.5557 37.4469 32.5557 37.4473 32.5557C37.4477 32.5557 37.4481 32.5557 37.4485 32.5557C37.4489 32.5557 37.4493 32.5557 37.4497 32.5557C37.4501 32.5557 37.4505 32.5557 37.451 32.5557C37.4514 32.5557 37.4518 32.5557 37.4522 32.5557C37.4526 32.5557 37.4531 32.5557 37.4535 32.5557C37.4539 32.5557 37.4544 32.5557 37.4548 32.5557C37.4552 32.5557 37.4557 32.5557 37.4561 32.5557C37.4566 32.5557 37.457 32.5557 37.4575 32.5557C37.4579 32.5557 37.4584 32.5557 37.4588 32.5557C37.4593 32.5557 37.4597 32.5557 37.4602 32.5557C37.4607 32.5557 37.4611 32.5557 37.4616 32.5557C37.4621 32.5557 37.4625 32.5557 37.463 32.5557C37.4635 32.5557 37.464 32.5557 37.4645 32.5557C37.4649 32.5557 37.4654 32.5557 37.4659 32.5557C37.4664 32.5557 37.4669 32.5557 37.4674 32.5557C37.4679 32.5557 37.4684 32.5557 37.4689 32.5557C37.4694 32.5557 37.4699 32.5557 37.4704 32.5557C37.4709 32.5557 37.4715 32.5557 37.472 32.5557C37.4725 32.5557 37.473 32.5557 37.4736 32.5557C37.4741 32.5557 37.4746 32.5557 37.4752 32.5557C37.4757 32.5557 37.4762 32.5557 37.4768 32.5557C37.4773 32.5557 37.4779 32.5557 37.4784 32.5557C37.479 32.5557 37.4795 32.5557 37.4801 32.5557C37.4806 32.5557 37.4812 32.5557 37.4818 32.5557C37.4823 32.5557 37.4829 32.5557 37.4835 32.5557C37.484 32.5557 37.4846 32.5557 37.4852 32.5557C37.4858 32.5557 37.4864 32.5557 37.487 32.5557C37.4876 32.5557 37.4882 32.5557 37.4888 32.5557C37.4894 32.5557 37.49 32.5557 37.4906 32.5557C37.4912 32.5557 37.4918 32.5557 37.4924 32.5557C37.493 32.5557 37.4936 32.5557 37.4943 32.5557C37.4949 32.5557 37.4955 32.5557 37.4961 32.5557C37.4968 32.5557 37.4974 32.5557 37.4981 32.5557C37.4987 32.5557 37.4993 32.5557 37.5 32.5557V30.5557C37.4993 30.5557 37.4987 30.5557 37.4981 30.5557C37.4974 30.5557 37.4968 30.5557 37.4961 30.5557C37.4955 30.5557 37.4949 30.5557 37.4943 30.5557C37.4936 30.5557 37.493 30.5557 37.4924 30.5557C37.4918 30.5557 37.4912 30.5557 37.4906 30.5557C37.49 30.5557 37.4894 30.5557 37.4888 30.5557C37.4882 30.5557 37.4876 30.5557 37.487 30.5557C37.4864 30.5557 37.4858 30.5557 37.4852 30.5557C37.4846 30.5557 37.484 30.5557 37.4835 30.5557C37.4829 30.5557 37.4823 30.5557 37.4818 30.5557C37.4812 30.5557 37.4806 30.5557 37.4801 30.5557C37.4795 30.5557 37.479 30.5557 37.4784 30.5557C37.4779 30.5557 37.4773 30.5557 37.4768 30.5557C37.4762 30.5557 37.4757 30.5557 37.4752 30.5557C37.4746 30.5557 37.4741 30.5557 37.4736 30.5557C37.473 30.5557 37.4725 30.5557 37.472 30.5557C37.4715 30.5557 37.4709 30.5557 37.4704 30.5557C37.4699 30.5557 37.4694 30.5557 37.4689 30.5557C37.4684 30.5557 37.4679 30.5557 37.4674 30.5557C37.4669 30.5557 37.4664 30.5557 37.4659 30.5557C37.4654 30.5557 37.4649 30.5557 37.4645 30.5557C37.464 30.5557 37.4635 30.5557 37.463 30.5557C37.4625 30.5557 37.4621 30.5557 37.4616 30.5557C37.4611 30.5557 37.4607 30.5557 37.4602 30.5557C37.4597 30.5557 37.4593 30.5557 37.4588 30.5557C37.4584 30.5557 37.4579 30.5557 37.4575 30.5557C37.457 30.5557 37.4566 30.5557 37.4561 30.5557C37.4557 30.5557 37.4552 30.5557 37.4548 30.5557C37.4544 30.5557 37.4539 30.5557 37.4535 30.5557C37.4531 30.5557 37.4526 30.5557 37.4522 30.5557C37.4518 30.5557 37.4514 30.5557 37.451 30.5557C37.4505 30.5557 37.4501 30.5557 37.4497 30.5557C37.4493 30.5557 37.4489 30.5557 37.4485 30.5557C37.4481 30.5557 37.4477 30.5557 37.4473 30.5557C37.4469 30.5557 37.4465 30.5557 37.4461 30.5557C37.4457 30.5557 37.4453 30.5557 37.4449 30.5557C37.4445 30.5557 37.4441 30.5557 37.4437 30.5557C37.4434 30.5557 37.443 30.5557 37.4426 30.5557C37.4422 30.5557 37.4419 30.5557 37.4415 30.5557C37.4411 30.5557 37.4407 30.5557 37.4404 30.5557C37.44 30.5557 37.4396 30.5557 37.4393 30.5557C37.4389 30.5557 37.4386 30.5557 37.4382 30.5557C37.4379 30.5557 37.4375 30.5557 37.4371 30.5557C37.4368 30.5557 37.4364 30.5557 37.4361 30.5557C37.4358 30.5557 37.4354 30.5557 37.4351 30.5557C37.4347 30.5557 37.4344 30.5557 37.4341 30.5557C37.4337 30.5557 37.4334 30.5557 37.4331 30.5557C37.4327 30.5557 37.4324 30.5557 37.4321 30.5557C37.4317 30.5557 37.4314 30.5557 37.4311 30.5557C37.4308 30.5557 37.4305 30.5557 37.4301 30.5557C37.4298 30.5557 37.4295 30.5557 37.4292 30.5557C37.4289 30.5557 37.4286 30.5557 37.4283 30.5557C37.4279 30.5557 37.4276 30.5557 37.4273 30.5557C37.427 30.5557 37.4267 30.5557 37.4264 30.5557C37.4261 30.5557 37.4258 30.5557 37.4255 30.5557C37.4252 30.5557 37.4249 30.5557 37.4246 30.5557C37.4244 30.5557 37.4241 30.5557 37.4238 30.5557C37.4235 30.5557 37.4232 30.5557 37.4229 30.5557C37.4226 30.5557 37.4223 30.5557 37.4221 30.5557C37.4218 30.5557 37.4215 30.5557 37.4212 30.5557C37.4209 30.5557 37.4207 30.5557 37.4204 30.5557C37.4201 30.5557 37.4198 30.5557 37.4196 30.5557C37.4193 30.5557 37.419 30.5557 37.4188 30.5557C37.4185 30.5557 37.4182 30.5557 37.418 30.5557C37.4177 30.5557 37.4174 30.5557 37.4172 30.5557C37.4169 30.5557 37.4167 30.5557 37.4164 30.5557C37.4161 30.5557 37.4159 30.5557 37.4156 30.5557C37.4154 30.5557 37.4151 30.5557 37.4149 30.5557C37.4146 30.5557 37.4144 30.5557 37.4141 30.5557C37.4139 30.5557 37.4136 30.5557 37.4134 30.5557C37.4131 30.5557 37.4129 30.5557 37.4126 30.5557C37.4124 30.5557 37.4121 30.5557 37.4119 30.5557C37.4117 30.5557 37.4114 30.5557 37.4112 30.5557C37.4109 30.5557 37.4107 30.5557 37.4105 30.5557C37.4102 30.5557 37.41 30.5557 37.4098 30.5557C37.4095 30.5557 37.4093 30.5557 37.4091 30.5557C37.4088 30.5557 37.4086 30.5557 37.4084 30.5557C37.4081 30.5557 37.4079 30.5557 37.4077 30.5557C37.4074 30.5557 37.4072 30.5557 37.407 30.5557C37.4068 30.5557 37.4065 30.5557 37.4063 30.5557C37.4061 30.5557 37.4059 30.5557 37.4056 30.5557C37.4054 30.5557 37.4052 30.5557 37.405 30.5557C37.4047 30.5557 37.4045 30.5557 37.4043 30.5557C37.4041 30.5557 37.4039 30.5557 37.4036 30.5557C37.4034 30.5557 37.4032 30.5557 37.403 30.5557C37.4028 30.5557 37.4026 30.5557 37.4023 30.5557C37.4021 30.5557 37.4019 30.5557 37.4017 30.5557C37.4015 30.5557 37.4013 30.5557 37.4011 30.5557C37.4008 30.5557 37.4006 30.5557 37.4004 30.5557C37.4002 30.5557 37.4 30.5557 37.3998 30.5557C37.3996 30.5557 37.3994 30.5557 37.3991 30.5557C37.3989 30.5557 37.3987 30.5557 37.3985 30.5557C37.3983 30.5557 37.3981 30.5557 37.3979 30.5557C37.3977 30.5557 37.3975 30.5557 37.3972 30.5557C37.397 30.5557 37.3968 30.5557 37.3966 30.5557C37.3964 30.5557 37.3962 30.5557 37.396 30.5557C37.3958 30.5557 37.3956 30.5557 37.3954 30.5557C37.3952 30.5557 37.395 30.5557 37.3947 30.5557C37.3945 30.5557 37.3943 30.5557 37.3941 30.5557C37.3939 30.5557 37.3937 30.5557 37.3935 30.5557C37.3933 30.5557 37.3931 30.5557 37.3929 30.5557C37.3927 30.5557 37.3925 30.5557 37.3923 30.5557C37.392 30.5557 37.3918 30.5557 37.3916 30.5557C37.3914 30.5557 37.3912 30.5557 37.391 30.5557C37.3908 30.5557 37.3906 30.5557 37.3904 30.5557C37.3902 30.5557 37.39 30.5557 37.3897 30.5557C37.3895 30.5557 37.3893 30.5557 37.3891 30.5557C37.3889 30.5557 37.3887 30.5557 37.3885 30.5557C37.3883 30.5557 37.3881 30.5557 37.3878 30.5557C37.3876 30.5557 37.3874 30.5557 37.3872 30.5557C37.387 30.5557 37.3868 30.5557 37.3866 30.5557C37.3864 30.5557 37.3861 30.5557 37.3859 30.5557C37.3857 30.5557 37.3855 30.5557 37.3853 30.5557C37.3851 30.5557 37.3848 30.5557 37.3846 30.5557C37.3844 30.5557 37.3842 30.5557 37.384 30.5557C37.3838 30.5557 37.3835 30.5557 37.3833 30.5557C37.3831 30.5557 37.3829 30.5557 37.3827 30.5557C37.3824 30.5557 37.3822 30.5557 37.382 30.5557C37.3818 30.5557 37.3815 30.5557 37.3813 30.5557C37.3811 30.5557 37.3809 30.5557 37.3806 30.5557C37.3804 30.5557 37.3802 30.5557 37.38 30.5557C37.3797 30.5557 37.3795 30.5557 37.3793 30.5557C37.379 30.5557 37.3788 30.5557 37.3786 30.5557C37.3783 30.5557 37.3781 30.5557 37.3779 30.5557C37.3776 30.5557 37.3774 30.5557 37.3772 30.5557C37.3769 30.5557 37.3767 30.5557 37.3764 30.5557C37.3762 30.5557 37.376 30.5557 37.3757 30.5557C37.3755 30.5557 37.3752 30.5557 37.375 30.5557C37.3748 30.5557 37.3745 30.5557 37.3743 30.5557C37.374 30.5557 37.3738 30.5557 37.3735 30.5557C37.3733 30.5557 37.373 30.5557 37.3728 30.5557C37.3725 30.5557 37.3723 30.5557 37.372 30.5557C37.3718 30.5557 37.3715 30.5557 37.3712 30.5557C37.371 30.5557 37.3707 30.5557 37.3705 30.5557C37.3702 30.5557 37.3699 30.5557 37.3697 30.5557C37.3694 30.5557 37.3691 30.5557 37.3689 30.5557C37.3686 30.5557 37.3683 30.5557 37.3681 30.5557C37.3678 30.5557 37.3675 30.5557 37.3673 30.5557C37.367 30.5557 37.3667 30.5557 37.3664 30.5557C37.3661 30.5557 37.3659 30.5557 37.3656 30.5557C37.3653 30.5557 37.365 30.5557 37.3647 30.5557C37.3645 30.5557 37.3642 30.5557 37.3639 30.5557C37.3636 30.5557 37.3633 30.5557 37.363 30.5557C37.3627 30.5557 37.3624 30.5557 37.3621 30.5557C37.3618 30.5557 37.3615 30.5557 37.3612 30.5557C37.3609 30.5557 37.3606 30.5557 37.3603 30.5557C37.36 30.5557 37.3597 30.5557 37.3594 30.5557C37.3591 30.5557 37.3588 30.5557 37.3585 30.5557C37.3582 30.5557 37.3578 30.5557 37.3575 30.5557C37.3572 30.5557 37.3569 30.5557 37.3566 30.5557C37.3562 30.5557 37.3559 30.5557 37.3556 30.5557C37.3553 30.5557 37.3549 30.5557 37.3546 30.5557C37.3543 30.5557 37.3539 30.5557 37.3536 30.5557C37.3533 30.5557 37.3529 30.5557 37.3526 30.5557C37.3523 30.5557 37.3519 30.5557 37.3516 30.5557C37.3512 30.5557 37.3509 30.5557 37.3505 30.5557C37.3502 30.5557 37.3498 30.5557 37.3495 30.5557C37.3491 30.5557 37.3487 30.5557 37.3484 30.5557C37.348 30.5557 37.3477 30.5557 37.3473 30.5557C37.3469 30.5557 37.3466 30.5557 37.3462 30.5557C37.3458 30.5557 37.3454 30.5557 37.3451 30.5557C37.3447 30.5557 37.3443 30.5557 37.3439 30.5557C37.3435 30.5557 37.3432 30.5557 37.3428 30.5557C37.3424 30.5557 37.342 30.5557 37.3416 30.5557C37.3412 30.5557 37.3408 30.5557 37.3404 30.5557C37.34 30.5557 37.3396 30.5557 37.3392 30.5557C37.3388 30.5557 37.3384 30.5557 37.338 30.5557C37.3376 30.5557 37.3372 30.5557 37.3367 30.5557C37.3363 30.5557 37.3359 30.5557 37.3355 30.5557C37.3351 30.5557 37.3346 30.5557 37.3342 30.5557C37.3338 30.5557 37.3333 30.5557 37.3329 30.5557C37.3325 30.5557 37.332 30.5557 37.3316 30.5557C37.3311 30.5557 37.3307 30.5557 37.3302 30.5557C37.3298 30.5557 37.3293 30.5557 37.3289 30.5557C37.3284 30.5557 37.328 30.5557 37.3275 30.5557C37.327 30.5557 37.3266 30.5557 37.3261 30.5557C37.3256 30.5557 37.3252 30.5557 37.3247 30.5557C37.3242 30.5557 37.3237 30.5557 37.3233 30.5557C37.3228 30.5557 37.3223 30.5557 37.3218 30.5557C37.3213 30.5557 37.3208 30.5557 37.3203 30.5557C37.3198 30.5557 37.3193 30.5557 37.3188 30.5557C37.3183 30.5557 37.3178 30.5557 37.3173 30.5557C37.3168 30.5557 37.3163 30.5557 37.3157 30.5557C37.3152 30.5557 37.3147 30.5557 37.3142 30.5557C37.3136 30.5557 37.3131 30.5557 37.3126 30.5557C37.312 30.5557 37.3115 30.5557 37.311 30.5557C37.3104 30.5557 37.3099 30.5557 37.3093 30.5557C37.3088 30.5557 37.3082 30.5557 37.3077 30.5557C37.3071 30.5557 37.3065 30.5557 37.306 30.5557C37.3054 30.5557 37.3048 30.5557 37.3043 30.5557C37.3037 30.5557 37.3031 30.5557 37.3025 30.5557C37.302 30.5557 37.3014 30.5557 37.3008 30.5557C37.3002 30.5557 37.2996 30.5557 37.299 30.5557C37.2984 30.5557 37.2978 30.5557 37.2972 30.5557C37.2966 30.5557 37.296 30.5557 37.2954 30.5557C37.2947 30.5557 37.2941 30.5557 37.2935 30.5557C37.2929 30.5557 37.2922 30.5557 37.2916 30.5557C37.291 30.5557 37.2903 30.5557 37.2897 30.5557C37.2891 30.5557 37.2884 30.5557 37.2878 30.5557C37.2871 30.5557 37.2865 30.5557 37.2858 30.5557C37.2851 30.5557 37.2845 30.5557 37.2838 30.5557C37.2831 30.5557 37.2825 30.5557 37.2818 30.5557C37.2811 30.5557 37.2804 30.5557 37.2798 30.5557C37.2791 30.5557 37.2784 30.5557 37.2777 30.5557C37.277 30.5557 37.2763 30.5557 37.2756 30.5557C37.2749 30.5557 37.2742 30.5557 37.2734 30.5557C37.2727 30.5557 37.272 30.5557 37.2713 30.5557C37.2706 30.5557 37.2698 30.5557 37.2691 30.5557C37.2684 30.5557 37.2676 30.5557 37.2669 30.5557C37.2661 30.5557 37.2654 30.5557 37.2646 30.5557C37.2639 30.5557 37.2631 30.5557 37.2624 30.5557C37.2616 30.5557 37.2608 30.5557 37.2601 30.5557C37.2593 30.5557 37.2585 30.5557 37.2577 30.5557C37.2569 30.5557 37.2562 30.5557 37.2554 30.5557C37.2546 30.5557 37.2538 30.5557 37.253 30.5557C37.2522 30.5557 37.2514 30.5557 37.2505 30.5557C37.2497 30.5557 37.2489 30.5557 37.2481 30.5557C37.2473 30.5557 37.2464 30.5557 37.2456 30.5557C37.2448 30.5557 37.2439 30.5557 37.2431 30.5557C37.2422 30.5557 37.2414 30.5557 37.2405 30.5557C37.2397 30.5557 37.2388 30.5557 37.2379 30.5557C37.2371 30.5557 37.2362 30.5557 37.2353 30.5557C37.2344 30.5557 37.2336 30.5557 37.2327 30.5557C37.2318 30.5557 37.2309 30.5557 37.23 30.5557C37.2291 30.5557 37.2282 30.5557 37.2273 30.5557C37.2264 30.5557 37.2254 30.5557 37.2245 30.5557C37.2236 30.5557 37.2227 30.5557 37.2217 30.5557C37.2208 30.5557 37.2199 30.5557 37.2189 30.5557C37.218 30.5557 37.217 30.5557 37.2161 30.5557C37.2151 30.5557 37.2141 30.5557 37.2132 30.5557C37.2122 30.5557 37.2112 30.5557 37.2102 30.5557C37.2093 30.5557 37.2083 30.5557 37.2073 30.5557C37.2063 30.5557 37.2053 30.5557 37.2043 30.5557C37.2033 30.5557 37.2023 30.5557 37.2013 30.5557C37.2002 30.5557 37.1992 30.5557 37.1982 30.5557C37.1972 30.5557 37.1961 30.5557 37.1951 30.5557C37.194 30.5557 37.193 30.5557 37.192 30.5557C37.1909 30.5557 37.1898 30.5557 37.1888 30.5557C37.1877 30.5557 37.1866 30.5557 37.1856 30.5557C37.1845 30.5557 37.1834 30.5557 37.1823 30.5557C37.1812 30.5557 37.1801 30.5557 37.179 30.5557C37.1779 30.5557 37.1768 30.5557 37.1757 30.5557C37.1746 30.5557 37.1735 30.5557 37.1723 30.5557C37.1712 30.5557 37.1701 30.5557 37.1689 30.5557C37.1678 30.5557 37.1666 30.5557 37.1655 30.5557C37.1643 30.5557 37.1632 30.5557 37.162 30.5557C37.1608 30.5557 37.1597 30.5557 37.1585 30.5557C37.1573 30.5557 37.1561 30.5557 37.1549 30.5557C37.1537 30.5557 37.1525 30.5557 37.1513 30.5557C37.1501 30.5557 37.1489 30.5557 37.1477 30.5557C37.1465 30.5557 37.1452 30.5557 37.144 30.5557C37.1428 30.5557 37.1415 30.5557 37.1403 30.5557C37.139 30.5557 37.1378 30.5557 37.1365 30.5557C37.1353 30.5557 37.134 30.5557 37.1327 30.5557C37.1315 30.5557 37.1302 30.5557 37.1289 30.5557C37.1276 30.5557 37.1263 30.5557 37.125 30.5557C37.1237 30.5557 37.1224 30.5557 37.1211 30.5557C37.1198 30.5557 37.1184 30.5557 37.1171 30.5557C37.1158 30.5557 37.1144 30.5557 37.1131 30.5557C37.1117 30.5557 37.1104 30.5557 37.109 30.5557C37.1077 30.5557 37.1063 30.5557 37.1049 30.5557C37.1036 30.5557 37.1022 30.5557 37.1008 30.5557C37.0994 30.5557 37.098 30.5557 37.0966 30.5557C37.0952 30.5557 37.0938 30.5557 37.0924 30.5557C37.091 30.5557 37.0895 30.5557 37.0881 30.5557C37.0867 30.5557 37.0852 30.5557 37.0838 30.5557C37.0823 30.5557 37.0809 30.5557 37.0794 30.5557C37.078 30.5557 37.0765 30.5557 37.075 30.5557C37.0735 30.5557 37.0721 30.5557 37.0706 30.5557C37.0691 30.5557 37.0676 30.5557 37.0661 30.5557C37.0646 30.5557 37.0631 30.5557 37.0615 30.5557C37.06 30.5557 37.0585 30.5557 37.0569 30.5557C37.0554 30.5557 37.0539 30.5557 37.0523 30.5557C37.0508 30.5557 37.0492 30.5557 37.0476 30.5557C37.0461 30.5557 37.0445 30.5557 37.0429 30.5557C37.0413 30.5557 37.0397 30.5557 37.0381 30.5557C37.0365 30.5557 37.0349 30.5557 37.0333 30.5557C37.0317 30.5557 37.0301 30.5557 37.0284 30.5557C37.0268 30.5557 37.0252 30.5557 37.0235 30.5557C37.0219 30.5557 37.0202 30.5557 37.0185 30.5557C37.0169 30.5557 37.0152 30.5557 37.0135 30.5557C37.0119 30.5557 37.0102 30.5557 37.0085 30.5557C37.0068 30.5557 37.0051 30.5557 37.0034 30.5557C37.0016 30.5557 36.9999 30.5557 36.9982 30.5557C36.9965 30.5557 36.9947 30.5557 36.993 30.5557C36.9912 30.5557 36.9895 30.5557 36.9877 30.5557C36.986 30.5557 36.9842 30.5557 36.9824 30.5557C36.9806 30.5557 36.9788 30.5557 36.9771 30.5557C36.9753 30.5557 36.9735 30.5557 36.9716 30.5557C36.9698 30.5557 36.968 30.5557 36.9662 30.5557C36.9643 30.5557 36.9625 30.5557 36.9607 30.5557C36.9588 30.5557 36.957 30.5557 36.9551 30.5557C36.9532 30.5557 36.9514 30.5557 36.9495 30.5557C36.9476 30.5557 36.9457 30.5557 36.9438 30.5557C36.9419 30.5557 36.94 30.5557 36.9381 30.5557C36.9362 30.5557 36.9343 30.5557 36.9323 30.5557C36.9304 30.5557 36.9284 30.5557 36.9265 30.5557C36.9245 30.5557 36.9226 30.5557 36.9206 30.5557C36.9186 30.5557 36.9167 30.5557 36.9147 30.5557C36.9127 30.5557 36.9107 30.5557 36.9087 30.5557C36.9067 30.5557 36.9047 30.5557 36.9027 30.5557C36.9006 30.5557 36.8986 30.5557 36.8966 30.5557C36.8945 30.5557 36.8925 30.5557 36.8904 30.5557C36.8884 30.5557 36.8863 30.5557 36.8842 30.5557C36.8821 30.5557 36.8801 30.5557 36.878 30.5557C36.8759 30.5557 36.8738 30.5557 36.8716 30.5557C36.8695 30.5557 36.8674 30.5557 36.8653 30.5557C36.8631 30.5557 36.861 30.5557 36.8589 30.5557C36.8567 30.5557 36.8545 30.5557 36.8524 30.5557C36.8502 30.5557 36.848 30.5557 36.8458 30.5557C36.8437 30.5557 36.8415 30.5557 36.8393 30.5557C36.837 30.5557 36.8348 30.5557 36.8326 30.5557C36.8304 30.5557 36.8281 30.5557 36.8259 30.5557C36.8237 30.5557 36.8214 30.5557 36.8191 30.5557C36.8169 30.5557 36.8146 30.5557 36.8123 30.5557C36.81 30.5557 36.8077 30.5557 36.8054 30.5557C36.8031 30.5557 36.8008 30.5557 36.7985 30.5557C36.7962 30.5557 36.7938 30.5557 36.7915 30.5557C36.7892 30.5557 36.7868 30.5557 36.7845 30.5557C36.7821 30.5557 36.7797 30.5557 36.7773 30.5557C36.775 30.5557 36.7726 30.5557 36.7702 30.5557C36.7678 30.5557 36.7654 30.5557 36.7629 30.5557C36.7605 30.5557 36.7581 30.5557 36.7557 30.5557C36.7532 30.5557 36.7508 30.5557 36.7483 30.5557C36.7458 30.5557 36.7434 30.5557 36.7409 30.5557C36.7384 30.5557 36.7359 30.5557 36.7334 30.5557C36.7309 30.5557 36.7284 30.5557 36.7259 30.5557C36.7234 30.5557 36.7208 30.5557 36.7183 30.5557C36.7158 30.5557 36.7132 30.5557 36.7106 30.5557C36.7081 30.5557 36.7055 30.5557 36.7029 30.5557C36.7003 30.5557 36.6978 30.5557 36.6952 30.5557C36.6926 30.5557 36.6899 30.5557 36.6873 30.5557C36.6847 30.5557 36.6821 30.5557 36.6794 30.5557C36.6768 30.5557 36.6741 30.5557 36.6715 30.5557C36.6688 30.5557 36.6661 30.5557 36.6634 30.5557C36.6607 30.5557 36.658 30.5557 36.6553 30.5557C36.6526 30.5557 36.6499 30.5557 36.6472 30.5557C36.6445 30.5557 36.6417 30.5557 36.639 30.5557C36.6362 30.5557 36.6335 30.5557 36.6307 30.5557C36.6279 30.5557 36.6251 30.5557 36.6223 30.5557C36.6195 30.5557 36.6167 30.5557 36.6139 30.5557C36.6111 30.5557 36.6083 30.5557 36.6055 30.5557C36.6026 30.5557 36.5998 30.5557 36.5969 30.5557C36.5941 30.5557 36.5912 30.5557 36.5883 30.5557C36.5854 30.5557 36.5825 30.5557 36.5796 30.5557C36.5767 30.5557 36.5738 30.5557 36.5709 30.5557C36.568 30.5557 36.565 30.5557 36.5621 30.5557C36.5592 30.5557 36.5562 30.5557 36.5532 30.5557C36.5503 30.5557 36.5473 30.5557 36.5443 30.5557C36.5413 30.5557 36.5383 30.5557 36.5353 30.5557C36.5323 30.5557 36.5293 30.5557 36.5262 30.5557C36.5232 30.5557 36.5201 30.5557 36.5171 30.5557C36.514 30.5557 36.511 30.5557 36.5079 30.5557C36.5048 30.5557 36.5017 30.5557 36.4986 30.5557C36.4955 30.5557 36.4924 30.5557 36.4893 30.5557C36.4861 30.5557 36.483 30.5557 36.4799 30.5557C36.4767 30.5557 36.4736 30.5557 36.4704 30.5557C36.4672 30.5557 36.464 30.5557 36.4608 30.5557C36.4576 30.5557 36.4544 30.5557 36.4512 30.5557C36.448 30.5557 36.4448 30.5557 36.4415 30.5557C36.4383 30.5557 36.435 30.5557 36.4318 30.5557C36.4285 30.5557 36.4252 30.5557 36.422 30.5557C36.4187 30.5557 36.4154 30.5557 36.4121 30.5557C36.4087 30.5557 36.4054 30.5557 36.4021 30.5557C36.3988 30.5557 36.3954 30.5557 36.3921 30.5557C36.3887 30.5557 36.3853 30.5557 36.3819 30.5557C36.3786 30.5557 36.3752 30.5557 36.3718 30.5557C36.3684 30.5557 36.3649 30.5557 36.3615 30.5557C36.3581 30.5557 36.3546 30.5557 36.3512 30.5557C36.3477 30.5557 36.3443 30.5557 36.3408 30.5557C36.3373 30.5557 36.3338 30.5557 36.3303 30.5557C36.3268 30.5557 36.3233 30.5557 36.3198 30.5557C36.3163 30.5557 36.3127 30.5557 36.3092 30.5557C36.3056 30.5557 36.3021 30.5557 36.2985 30.5557C36.2949 30.5557 36.2913 30.5557 36.2877 30.5557C36.2841 30.5557 36.2805 30.5557 36.2769 30.5557C36.2733 30.5557 36.2696 30.5557 36.266 30.5557C36.2623 30.5557 36.2587 30.5557 36.255 30.5557C36.2513 30.5557 36.2476 30.5557 36.2439 30.5557C36.2402 30.5557 36.2365 30.5557 36.2328 30.5557C36.2291 30.5557 36.2253 30.5557 36.2216 30.5557C36.2178 30.5557 36.2141 30.5557 36.2103 30.5557C36.2065 30.5557 36.2027 30.5557 36.1989 30.5557C36.1951 30.5557 36.1913 30.5557 36.1875 30.5557C36.1837 30.5557 36.1798 30.5557 36.176 30.5557C36.1721 30.5557 36.1683 30.5557 36.1644 30.5557C36.1605 30.5557 36.1566 30.5557 36.1527 30.5557C36.1488 30.5557 36.1449 30.5557 36.141 30.5557C36.1371 30.5557 36.1331 30.5557 36.1292 30.5557C36.1252 30.5557 36.1212 30.5557 36.1173 30.5557C36.1133 30.5557 36.1093 30.5557 36.1053 30.5557C36.1013 30.5557 36.0973 30.5557 36.0932 30.5557C36.0892 30.5557 36.0852 30.5557 36.0811 30.5557C36.077 30.5557 36.073 30.5557 36.0689 30.5557C36.0648 30.5557 36.0607 30.5557 36.0566 30.5557C36.0525 30.5557 36.0484 30.5557 36.0442 30.5557C36.0401 30.5557 36.0359 30.5557 36.0318 30.5557C36.0276 30.5557 36.0234 30.5557 36.0193 30.5557C36.0151 30.5557 36.0109 30.5557 36.0066 30.5557C36.0024 30.5557 35.9982 30.5557 35.994 30.5557C35.9897 30.5557 35.9855 30.5557 35.9812 30.5557C35.9769 30.5557 35.9726 30.5557 35.9683 30.5557C35.964 30.5557 35.9597 30.5557 35.9554 30.5557C35.9511 30.5557 35.9467 30.5557 35.9424 30.5557C35.938 30.5557 35.9337 30.5557 35.9293 30.5557C35.9249 30.5557 35.9205 30.5557 35.9161 30.5557C35.9117 30.5557 35.9073 30.5557 35.9029 30.5557C35.8984 30.5557 35.894 30.5557 35.8895 30.5557C35.8851 30.5557 35.8806 30.5557 35.8761 30.5557C35.8716 30.5557 35.8671 30.5557 35.8626 30.5557C35.8581 30.5557 35.8535 30.5557 35.849 30.5557C35.8445 30.5557 35.8399 30.5557 35.8353 30.5557C35.8307 30.5557 35.8262 30.5557 35.8216 30.5557C35.817 30.5557 35.8124 30.5557 35.8077 30.5557C35.8031 30.5557 35.7985 30.5557 35.7938 30.5557C35.7891 30.5557 35.7845 30.5557 35.7798 30.5557C35.7751 30.5557 35.7704 30.5557 35.7657 30.5557C35.761 30.5557 35.7563 30.5557 35.7515 30.5557C35.7468 30.5557 35.742 30.5557 35.7372 30.5557C35.7325 30.5557 35.7277 30.5557 35.7229 30.5557C35.7181 30.5557 35.7133 30.5557 35.7085 30.5557C35.7036 30.5557 35.6988 30.5557 35.6939 30.5557C35.6891 30.5557 35.6842 30.5557 35.6793 30.5557C35.6744 30.5557 35.6695 30.5557 35.6646 30.5557C35.6597 30.5557 35.6548 30.5557 35.6498 30.5557C35.6449 30.5557 35.6399 30.5557 35.635 30.5557C35.63 30.5557 35.625 30.5557 35.62 30.5557C35.615 30.5557 35.61 30.5557 35.605 30.5557C35.5999 30.5557 35.5949 30.5557 35.5898 30.5557C35.5848 30.5557 35.5797 30.5557 35.5746 30.5557C35.5695 30.5557 35.5644 30.5557 35.5593 30.5557C35.5542 30.5557 35.549 30.5557 35.5439 30.5557C35.5387 30.5557 35.5336 30.5557 35.5284 30.5557C35.5232 30.5557 35.518 30.5557 35.5128 30.5557C35.5076 30.5557 35.5024 30.5557 35.4971 30.5557C35.4919 30.5557 35.4867 30.5557 35.4814 30.5557C35.4761 30.5557 35.4708 30.5557 35.4655 30.5557C35.4602 30.5557 35.4549 30.5557 35.4496 30.5557C35.4443 30.5557 35.4389 30.5557 35.4336 30.5557C35.4282 30.5557 35.4228 30.5557 35.4174 30.5557C35.4121 30.5557 35.4066 30.5557 35.4012 30.5557C35.3958 30.5557 35.3904 30.5557 35.3849 30.5557C35.3795 30.5557 35.374 30.5557 35.3685 30.5557C35.363 30.5557 35.3575 30.5557 35.352 30.5557C35.3465 30.5557 35.341 30.5557 35.3355 30.5557C35.3299 30.5557 35.3244 30.5557 35.3188 30.5557C35.3132 30.5557 35.3076 30.5557 35.302 30.5557C35.2964 30.5557 35.2908 30.5557 35.2852 30.5557C35.2795 30.5557 35.2739 30.5557 35.2682 30.5557C35.2625 30.5557 35.2569 30.5557 35.2512 30.5557C35.2455 30.5557 35.2397 30.5557 35.234 30.5557C35.2283 30.5557 35.2225 30.5557 35.2168 30.5557C35.211 30.5557 35.2052 30.5557 35.1994 30.5557C35.1937 30.5557 35.1878 30.5557 35.182 30.5557C35.1762 30.5557 35.1704 30.5557 35.1645 30.5557C35.1586 30.5557 35.1528 30.5557 35.1469 30.5557C35.141 30.5557 35.1351 30.5557 35.1292 30.5557C35.1233 30.5557 35.1173 30.5557 35.1114 30.5557C35.1054 30.5557 35.0995 30.5557 35.0935 30.5557C35.0875 30.5557 35.0815 30.5557 35.0755 30.5557C35.0695 30.5557 35.0634 30.5557 35.0574 30.5557C35.0513 30.5557 35.0453 30.5557 35.0392 30.5557C35.0331 30.5557 35.027 30.5557 35.0209 30.5557C35.0148 30.5557 35.0086 30.5557 35.0025 30.5557C34.9964 30.5557 34.9902 30.5557 34.984 30.5557C34.9778 30.5557 34.9716 30.5557 34.9654 30.5557C34.9592 30.5557 34.953 30.5557 34.9468 30.5557C34.9405 30.5557 34.9342 30.5557 34.928 30.5557C34.9217 30.5557 34.9154 30.5557 34.9091 30.5557C34.9028 30.5557 34.8965 30.5557 34.8901 30.5557C34.8838 30.5557 34.8774 30.5557 34.871 30.5557C34.8647 30.5557 34.8583 30.5557 34.8519 30.5557C34.8455 30.5557 34.839 30.5557 34.8326 30.5557C34.8261 30.5557 34.8197 30.5557 34.8132 30.5557C34.8067 30.5557 34.8002 30.5557 34.7937 30.5557C34.7872 30.5557 34.7807 30.5557 34.7741 30.5557C34.7676 30.5557 34.761 30.5557 34.7545 30.5557C34.7479 30.5557 34.7413 30.5557 34.7347 30.5557C34.7281 30.5557 34.7215 30.5557 34.7148 30.5557C34.7082 30.5557 34.7015 30.5557 34.6948 30.5557C34.6881 30.5557 34.6814 30.5557 34.6747 30.5557C34.668 30.5557 34.6613 30.5557 34.6546 30.5557C34.6478 30.5557 34.641 30.5557 34.6343 30.5557C34.6275 30.5557 34.6207 30.5557 34.6139 30.5557C34.607 30.5557 34.6002 30.5557 34.5934 30.5557C34.5865 30.5557 34.5797 30.5557 34.5728 30.5557C34.5659 30.5557 34.559 30.5557 34.5521 30.5557C34.5451 30.5557 34.5382 30.5557 34.5313 30.5557C34.5243 30.5557 34.5173 30.5557 34.5103 30.5557C34.5034 30.5557 34.4964 30.5557 34.4893 30.5557C34.4823 30.5557 34.4753 30.5557 34.4682 30.5557C34.4612 30.5557 34.4541 30.5557 34.447 30.5557C34.4399 30.5557 34.4328 30.5557 34.4257 30.5557C34.4185 30.5557 34.4114 30.5557 34.4042 30.5557C34.3971 30.5557 34.3899 30.5557 34.3827 30.5557C34.3755 30.5557 34.3683 30.5557 34.361 30.5557C34.3538 30.5557 34.3465 30.5557 34.3393 30.5557C34.332 30.5557 34.3247 30.5557 34.3174 30.5557C34.3101 30.5557 34.3028 30.5557 34.2954 30.5557C34.2881 30.5557 34.2807 30.5557 34.2734 30.5557C34.266 30.5557 34.2586 30.5557 34.2512 30.5557C34.2438 30.5557 34.2363 30.5557 34.2289 30.5557C34.2214 30.5557 34.214 30.5557 34.2065 30.5557C34.199 30.5557 34.1915 30.5557 34.184 30.5557C34.1765 30.5557 34.1689 30.5557 34.1614 30.5557C34.1538 30.5557 34.1462 30.5557 34.1386 30.5557C34.1311 30.5557 34.1234 30.5557 34.1158 30.5557C34.1082 30.5557 34.1005 30.5557 34.0929 30.5557C34.0852 30.5557 34.0775 30.5557 34.0698 30.5557C34.0621 30.5557 34.0544 30.5557 34.0467 30.5557C34.0389 30.5557 34.0312 30.5557 34.0234 30.5557C34.0156 30.5557 34.0078 30.5557 34 30.5557V32.5557Z"
                        fill={iconColor}
                    />
                    <path
                        d="M36 19.4206C36 20.2685 36.9889 20.7316 37.6402 20.1888L41.0781 17.3239C41.5579 16.9241 41.5579 16.1872 41.0781 15.7874L37.6402 12.9225C36.9889 12.3797 36 12.8429 36 13.6907V19.4206Z"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 33.0557C6.44772 33.0557 6 32.6079 6 32.0557C6 31.5034 6.44772 31.0557 7 31.0557V33.0557ZM37.5 15.5557C38.0523 15.5557 38.5 16.0034 38.5 16.5557C38.5 17.1079 38.0523 17.5557 37.5 17.5557V15.5557ZM25.7577 21.2083C25.3972 21.6268 24.7658 21.6738 24.3474 21.3133C23.9289 20.9529 23.8819 20.3215 24.2423 19.903L25.7577 21.2083ZM19.2156 26.9354C19.5581 26.5022 20.187 26.4287 20.6202 26.7713C21.0535 27.1138 21.127 27.7427 20.7844 28.1759L19.2156 26.9354ZM7 31.0557C7.00195 31.0557 7.00391 31.0557 7.00586 31.0557C7.00781 31.0557 7.00977 31.0557 7.01172 31.0557C7.01368 31.0557 7.01563 31.0557 7.01759 31.0557C7.01954 31.0557 7.0215 31.0557 7.02346 31.0557C7.02541 31.0557 7.02737 31.0557 7.02933 31.0557C7.03128 31.0557 7.03324 31.0557 7.0352 31.0557C7.03716 31.0557 7.03912 31.0557 7.04107 31.0557C7.04303 31.0557 7.04499 31.0557 7.04695 31.0557C7.04891 31.0557 7.05087 31.0557 7.05283 31.0557C7.05479 31.0557 7.05676 31.0557 7.05872 31.0557C7.06068 31.0557 7.06264 31.0557 7.0646 31.0557C7.06657 31.0557 7.06853 31.0557 7.07049 31.0557C7.07246 31.0557 7.07442 31.0557 7.07638 31.0557C7.07835 31.0557 7.08031 31.0557 7.08228 31.0557C7.08425 31.0557 7.08621 31.0557 7.08818 31.0557C7.09014 31.0557 7.09211 31.0557 7.09408 31.0557C7.09605 31.0557 7.09802 31.0557 7.09998 31.0557C7.10195 31.0557 7.10392 31.0557 7.10589 31.0557C7.10786 31.0557 7.10983 31.0557 7.1118 31.0557C7.11377 31.0557 7.11574 31.0557 7.11772 31.0557C7.11969 31.0557 7.12166 31.0557 7.12363 31.0557C7.12561 31.0557 7.12758 31.0557 7.12956 31.0557C7.13153 31.0557 7.1335 31.0557 7.13548 31.0557C7.13746 31.0557 7.13943 31.0557 7.14141 31.0557C7.14338 31.0557 7.14536 31.0557 7.14734 31.0557C7.14932 31.0557 7.1513 31.0557 7.15327 31.0557C7.15525 31.0557 7.15723 31.0557 7.15921 31.0557C7.16119 31.0557 7.16317 31.0557 7.16516 31.0557C7.16714 31.0557 7.16912 31.0557 7.1711 31.0557C7.17309 31.0557 7.17507 31.0557 7.17705 31.0557C7.17904 31.0557 7.18102 31.0557 7.18301 31.0557C7.18499 31.0557 7.18698 31.0557 7.18896 31.0557C7.19095 31.0557 7.19294 31.0557 7.19493 31.0557C7.19691 31.0557 7.1989 31.0557 7.20089 31.0557C7.20288 31.0557 7.20487 31.0557 7.20686 31.0557C7.20885 31.0557 7.21085 31.0557 7.21284 31.0557C7.21483 31.0557 7.21682 31.0557 7.21882 31.0557C7.22081 31.0557 7.2228 31.0557 7.2248 31.0557C7.22679 31.0557 7.22879 31.0557 7.23079 31.0557C7.23278 31.0557 7.23478 31.0557 7.23678 31.0557C7.23878 31.0557 7.24077 31.0557 7.24277 31.0557C7.24477 31.0557 7.24677 31.0557 7.24877 31.0557C7.25078 31.0557 7.25278 31.0557 7.25478 31.0557C7.25678 31.0557 7.25879 31.0557 7.26079 31.0557C7.26279 31.0557 7.2648 31.0557 7.2668 31.0557C7.26881 31.0557 7.27082 31.0557 7.27282 31.0557C7.27483 31.0557 7.27684 31.0557 7.27885 31.0557C7.28086 31.0557 7.28287 31.0557 7.28488 31.0557C7.28689 31.0557 7.2889 31.0557 7.29091 31.0557C7.29292 31.0557 7.29493 31.0557 7.29695 31.0557C7.29896 31.0557 7.30098 31.0557 7.30299 31.0557C7.30501 31.0557 7.30702 31.0557 7.30904 31.0557C7.31106 31.0557 7.31307 31.0557 7.31509 31.0557C7.31711 31.0557 7.31913 31.0557 7.32115 31.0557C7.32317 31.0557 7.32519 31.0557 7.32721 31.0557C7.32924 31.0557 7.33126 31.0557 7.33328 31.0557C7.33531 31.0557 7.33733 31.0557 7.33936 31.0557C7.34138 31.0557 7.34341 31.0557 7.34544 31.0557C7.34747 31.0557 7.34949 31.0557 7.35152 31.0557C7.35355 31.0557 7.35558 31.0557 7.35761 31.0557C7.35964 31.0557 7.36168 31.0557 7.36371 31.0557C7.36574 31.0557 7.36778 31.0557 7.36981 31.0557C7.37185 31.0557 7.37388 31.0557 7.37592 31.0557C7.37796 31.0557 7.37999 31.0557 7.38203 31.0557C7.38407 31.0557 7.38611 31.0557 7.38815 31.0557C7.39019 31.0557 7.39223 31.0557 7.39427 31.0557C7.39632 31.0557 7.39836 31.0557 7.4004 31.0557C7.40245 31.0557 7.40449 31.0557 7.40654 31.0557C7.40859 31.0557 7.41063 31.0557 7.41268 31.0557C7.41473 31.0557 7.41678 31.0557 7.41883 31.0557C7.42088 31.0557 7.42293 31.0557 7.42498 31.0557C7.42704 31.0557 7.42909 31.0557 7.43114 31.0557C7.4332 31.0557 7.43525 31.0557 7.43731 31.0557C7.43937 31.0557 7.44142 31.0557 7.44348 31.0557C7.44554 31.0557 7.4476 31.0557 7.44966 31.0557C7.45172 31.0557 7.45378 31.0557 7.45585 31.0557C7.45791 31.0557 7.45997 31.0557 7.46204 31.0557C7.4641 31.0557 7.46617 31.0557 7.46824 31.0557C7.4703 31.0557 7.47237 31.0557 7.47444 31.0557C7.47651 31.0557 7.47858 31.0557 7.48065 31.0557C7.48272 31.0557 7.4848 31.0557 7.48687 31.0557C7.48894 31.0557 7.49102 31.0557 7.49309 31.0557C7.49517 31.0557 7.49725 31.0557 7.49932 31.0557C7.5014 31.0557 7.50348 31.0557 7.50556 31.0557C7.50764 31.0557 7.50972 31.0557 7.51181 31.0557C7.51389 31.0557 7.51597 31.0557 7.51806 31.0557C7.52014 31.0557 7.52223 31.0557 7.52432 31.0557C7.5264 31.0557 7.52849 31.0557 7.53058 31.0557C7.53267 31.0557 7.53476 31.0557 7.53685 31.0557C7.53894 31.0557 7.54104 31.0557 7.54313 31.0557C7.54523 31.0557 7.54732 31.0557 7.54942 31.0557C7.55151 31.0557 7.55361 31.0557 7.55571 31.0557C7.55781 31.0557 7.55991 31.0557 7.56201 31.0557C7.56411 31.0557 7.56622 31.0557 7.56832 31.0557C7.57042 31.0557 7.57253 31.0557 7.57463 31.0557C7.57674 31.0557 7.57885 31.0557 7.58096 31.0557C7.58307 31.0557 7.58518 31.0557 7.58729 31.0557C7.5894 31.0557 7.59151 31.0557 7.59362 31.0557C7.59574 31.0557 7.59785 31.0557 7.59997 31.0557C7.60209 31.0557 7.6042 31.0557 7.60632 31.0557C7.60844 31.0557 7.61056 31.0557 7.61268 31.0557C7.6148 31.0557 7.61693 31.0557 7.61905 31.0557C7.62117 31.0557 7.6233 31.0557 7.62543 31.0557C7.62755 31.0557 7.62968 31.0557 7.63181 31.0557C7.63394 31.0557 7.63607 31.0557 7.6382 31.0557C7.64033 31.0557 7.64247 31.0557 7.6446 31.0557C7.64674 31.0557 7.64887 31.0557 7.65101 31.0557C7.65315 31.0557 7.65528 31.0557 7.65742 31.0557C7.65956 31.0557 7.6617 31.0557 7.66385 31.0557C7.66599 31.0557 7.66813 31.0557 7.67028 31.0557C7.67242 31.0557 7.67457 31.0557 7.67672 31.0557C7.67887 31.0557 7.68102 31.0557 7.68317 31.0557C7.68532 31.0557 7.68747 31.0557 7.68962 31.0557C7.69178 31.0557 7.69393 31.0557 7.69609 31.0557C7.69824 31.0557 7.7004 31.0557 7.70256 31.0557C7.70472 31.0557 7.70688 31.0557 7.70904 31.0557C7.7112 31.0557 7.71337 31.0557 7.71553 31.0557C7.7177 31.0557 7.71986 31.0557 7.72203 31.0557C7.7242 31.0557 7.72637 31.0557 7.72854 31.0557C7.73071 31.0557 7.73288 31.0557 7.73505 31.0557C7.73723 31.0557 7.7394 31.0557 7.74158 31.0557C7.74375 31.0557 7.74593 31.0557 7.74811 31.0557C7.75029 31.0557 7.75247 31.0557 7.75465 31.0557C7.75684 31.0557 7.75902 31.0557 7.76121 31.0557C7.76339 31.0557 7.76558 31.0557 7.76777 31.0557C7.76995 31.0557 7.77214 31.0557 7.77433 31.0557C7.77653 31.0557 7.77872 31.0557 7.78091 31.0557C7.78311 31.0557 7.7853 31.0557 7.7875 31.0557C7.7897 31.0557 7.7919 31.0557 7.7941 31.0557C7.7963 31.0557 7.7985 31.0557 7.8007 31.0557C7.80291 31.0557 7.80511 31.0557 7.80732 31.0557C7.80952 31.0557 7.81173 31.0557 7.81394 31.0557C7.81615 31.0557 7.81836 31.0557 7.82057 31.0557C7.82279 31.0557 7.825 31.0557 7.82722 31.0557C7.82943 31.0557 7.83165 31.0557 7.83387 31.0557C7.83609 31.0557 7.83831 31.0557 7.84053 31.0557C7.84275 31.0557 7.84498 31.0557 7.8472 31.0557C7.84943 31.0557 7.85166 31.0557 7.85388 31.0557C7.85611 31.0557 7.85834 31.0557 7.86058 31.0557C7.86281 31.0557 7.86504 31.0557 7.86728 31.0557C7.86951 31.0557 7.87175 31.0557 7.87399 31.0557C7.87623 31.0557 7.87847 31.0557 7.88071 31.0557C7.88295 31.0557 7.88519 31.0557 7.88744 31.0557C7.88968 31.0557 7.89193 31.0557 7.89418 31.0557C7.89643 31.0557 7.89868 31.0557 7.90093 31.0557C7.90318 31.0557 7.90543 31.0557 7.90769 31.0557C7.90994 31.0557 7.9122 31.0557 7.91446 31.0557C7.91672 31.0557 7.91898 31.0557 7.92124 31.0557C7.9235 31.0557 7.92576 31.0557 7.92803 31.0557C7.93029 31.0557 7.93256 31.0557 7.93483 31.0557C7.9371 31.0557 7.93937 31.0557 7.94164 31.0557C7.94391 31.0557 7.94619 31.0557 7.94846 31.0557C7.95074 31.0557 7.95302 31.0557 7.9553 31.0557C7.95757 31.0557 7.95986 31.0557 7.96214 31.0557C7.96442 31.0557 7.96671 31.0557 7.96899 31.0557C7.97128 31.0557 7.97357 31.0557 7.97586 31.0557C7.97815 31.0557 7.98044 31.0557 7.98273 31.0557C7.98502 31.0557 7.98732 31.0557 7.98962 31.0557C7.99191 31.0557 7.99421 31.0557 7.99651 31.0557C7.99881 31.0557 8.00111 31.0557 8.00342 31.0557C8.00572 31.0557 8.00803 31.0557 8.01034 31.0557C8.01264 31.0557 8.01495 31.0557 8.01726 31.0557C8.01958 31.0557 8.02189 31.0557 8.0242 31.0557C8.02652 31.0557 8.02884 31.0557 8.03115 31.0557C8.03347 31.0557 8.03579 31.0557 8.03812 31.0557C8.04044 31.0557 8.04276 31.0557 8.04509 31.0557C8.04742 31.0557 8.04974 31.0557 8.05207 31.0557C8.0544 31.0557 8.05673 31.0557 8.05907 31.0557C8.0614 31.0557 8.06374 31.0557 8.06607 31.0557C8.06841 31.0557 8.07075 31.0557 8.07309 31.0557C8.07543 31.0557 8.07778 31.0557 8.08012 31.0557C8.08247 31.0557 8.08481 31.0557 8.08716 31.0557C8.08951 31.0557 8.09186 31.0557 8.09422 31.0557C8.09657 31.0557 8.09892 31.0557 8.10128 31.0557C8.10364 31.0557 8.10599 31.0557 8.10835 31.0557C8.11072 31.0557 8.11308 31.0557 8.11544 31.0557C8.11781 31.0557 8.12017 31.0557 8.12254 31.0557C8.12491 31.0557 8.12728 31.0557 8.12965 31.0557C8.13202 31.0557 8.1344 31.0557 8.13677 31.0557C8.13915 31.0557 8.14153 31.0557 8.14391 31.0557C8.14629 31.0557 8.14867 31.0557 8.15105 31.0557C8.15344 31.0557 8.15583 31.0557 8.15821 31.0557C8.1606 31.0557 8.16299 31.0557 8.16538 31.0557C8.16778 31.0557 8.17017 31.0557 8.17257 31.0557C8.17496 31.0557 8.17736 31.0557 8.17976 31.0557C8.18216 31.0557 8.18456 31.0557 8.18697 31.0557C8.18937 31.0557 8.19178 31.0557 8.19419 31.0557C8.1966 31.0557 8.19901 31.0557 8.20142 31.0557C8.20383 31.0557 8.20625 31.0557 8.20866 31.0557C8.21108 31.0557 8.2135 31.0557 8.21592 31.0557C8.21834 31.0557 8.22076 31.0557 8.22319 31.0557C8.22561 31.0557 8.22804 31.0557 8.23047 31.0557C8.2329 31.0557 8.23533 31.0557 8.23776 31.0557C8.2402 31.0557 8.24263 31.0557 8.24507 31.0557C8.24751 31.0557 8.24995 31.0557 8.25239 31.0557C8.25483 31.0557 8.25727 31.0557 8.25972 31.0557C8.26217 31.0557 8.26461 31.0557 8.26707 31.0557C8.26952 31.0557 8.27197 31.0557 8.27442 31.0557C8.27688 31.0557 8.27933 31.0557 8.28179 31.0557C8.28425 31.0557 8.28671 31.0557 8.28918 31.0557C8.29164 31.0557 8.29411 31.0557 8.29657 31.0557C8.29904 31.0557 8.30151 31.0557 8.30398 31.0557C8.30646 31.0557 8.30893 31.0557 8.31141 31.0557C8.31388 31.0557 8.31636 31.0557 8.31884 31.0557C8.32132 31.0557 8.32381 31.0557 8.32629 31.0557C8.32878 31.0557 8.33126 31.0557 8.33375 31.0557C8.33624 31.0557 8.33873 31.0557 8.34123 31.0557C8.34372 31.0557 8.34622 31.0557 8.34872 31.0557C8.35122 31.0557 8.35372 31.0557 8.35622 31.0557C8.35872 31.0557 8.36123 31.0557 8.36374 31.0557C8.36624 31.0557 8.36875 31.0557 8.37127 31.0557C8.37378 31.0557 8.37629 31.0557 8.37881 31.0557C8.38133 31.0557 8.38385 31.0557 8.38637 31.0557C8.38889 31.0557 8.39141 31.0557 8.39394 31.0557C8.39646 31.0557 8.39899 31.0557 8.40152 31.0557C8.40405 31.0557 8.40659 31.0557 8.40912 31.0557C8.41166 31.0557 8.41419 31.0557 8.41673 31.0557C8.41927 31.0557 8.42181 31.0557 8.42436 31.0557C8.4269 31.0557 8.42945 31.0557 8.432 31.0557C8.43455 31.0557 8.4371 31.0557 8.43965 31.0557C8.44221 31.0557 8.44476 31.0557 8.44732 31.0557C8.44988 31.0557 8.45244 31.0557 8.455 31.0557C8.45757 31.0557 8.46013 31.0557 8.4627 31.0557C8.46527 31.0557 8.46784 31.0557 8.47041 31.0557C8.47298 31.0557 8.47556 31.0557 8.47814 31.0557C8.48071 31.0557 8.48329 31.0557 8.48587 31.0557C8.48846 31.0557 8.49104 31.0557 8.49363 31.0557C8.49622 31.0557 8.4988 31.0557 8.5014 31.0557C8.50399 31.0557 8.50658 31.0557 8.50918 31.0557C8.51178 31.0557 8.51438 31.0557 8.51698 31.0557C8.51958 31.0557 8.52218 31.0557 8.52479 31.0557C8.5274 31.0557 8.53 31.0557 8.53262 31.0557C8.53523 31.0557 8.53784 31.0557 8.54046 31.0557C8.54307 31.0557 8.54569 31.0557 8.54831 31.0557C8.55093 31.0557 8.55356 31.0557 8.55618 31.0557C8.55881 31.0557 8.56144 31.0557 8.56407 31.0557C8.5667 31.0557 8.56934 31.0557 8.57197 31.0557C8.57461 31.0557 8.57725 31.0557 8.57989 31.0557C8.58253 31.0557 8.58517 31.0557 8.58782 31.0557C8.59046 31.0557 8.59311 31.0557 8.59576 31.0557C8.59842 31.0557 8.60107 31.0557 8.60373 31.0557C8.60638 31.0557 8.60904 31.0557 8.6117 31.0557C8.61436 31.0557 8.61703 31.0557 8.61969 31.0557C8.62236 31.0557 8.62503 31.0557 8.6277 31.0557C8.63037 31.0557 8.63305 31.0557 8.63572 31.0557C8.6384 31.0557 8.64108 31.0557 8.64376 31.0557C8.64644 31.0557 8.64913 31.0557 8.65181 31.0557C8.6545 31.0557 8.65719 31.0557 8.65988 31.0557C8.66258 31.0557 8.66527 31.0557 8.66797 31.0557C8.67067 31.0557 8.67336 31.0557 8.67607 31.0557C8.67877 31.0557 8.68148 31.0557 8.68418 31.0557C8.68689 31.0557 8.6896 31.0557 8.69232 31.0557C8.69503 31.0557 8.69774 31.0557 8.70046 31.0557C8.70318 31.0557 8.7059 31.0557 8.70863 31.0557C8.71135 31.0557 8.71408 31.0557 8.7168 31.0557C8.71953 31.0557 8.72227 31.0557 8.725 31.0557C8.72773 31.0557 8.73047 31.0557 8.73321 31.0557C8.73595 31.0557 8.73869 31.0557 8.74144 31.0557C8.74418 31.0557 8.74693 31.0557 8.74968 31.0557C8.75243 31.0557 8.75519 31.0557 8.75794 31.0557C8.7607 31.0557 8.76346 31.0557 8.76622 31.0557C8.76898 31.0557 8.77174 31.0557 8.77451 31.0557C8.77728 31.0557 8.78005 31.0557 8.78282 31.0557C8.78559 31.0557 8.78836 31.0557 8.79114 31.0557C8.79392 31.0557 8.7967 31.0557 8.79948 31.0557C8.80227 31.0557 8.80505 31.0557 8.80784 31.0557C8.81063 31.0557 8.81342 31.0557 8.81622 31.0557C8.81901 31.0557 8.82181 31.0557 8.82461 31.0557C8.82741 31.0557 8.83021 31.0557 8.83301 31.0557C8.83582 31.0557 8.83863 31.0557 8.84144 31.0557C8.84425 31.0557 8.84706 31.0557 8.84988 31.0557C8.8527 31.0557 8.85552 31.0557 8.85834 31.0557C8.86116 31.0557 8.86398 31.0557 8.86681 31.0557C8.86964 31.0557 8.87247 31.0557 8.8753 31.0557C8.87814 31.0557 8.88097 31.0557 8.88381 31.0557C8.88665 31.0557 8.88949 31.0557 8.89234 31.0557C8.89518 31.0557 8.89803 31.0557 8.90088 31.0557C8.90373 31.0557 8.90658 31.0557 8.90944 31.0557C8.9123 31.0557 8.91516 31.0557 8.91802 31.0557C8.92088 31.0557 8.92375 31.0557 8.92661 31.0557C8.92948 31.0557 8.93235 31.0557 8.93522 31.0557C8.9381 31.0557 8.94097 31.0557 8.94385 31.0557C8.94673 31.0557 8.94962 31.0557 8.9525 31.0557C8.95539 31.0557 8.95827 31.0557 8.96116 31.0557C8.96406 31.0557 8.96695 31.0557 8.96985 31.0557C8.97274 31.0557 8.97564 31.0557 8.97854 31.0557C8.98145 31.0557 8.98435 31.0557 8.98726 31.0557C8.99017 31.0557 8.99308 31.0557 8.996 31.0557C8.99891 31.0557 9.00183 31.0557 9.00475 31.0557C9.00767 31.0557 9.01059 31.0557 9.01352 31.0557C9.01644 31.0557 9.01937 31.0557 9.02231 31.0557C9.02524 31.0557 9.02817 31.0557 9.03111 31.0557C9.03405 31.0557 9.03699 31.0557 9.03994 31.0557C9.04288 31.0557 9.04583 31.0557 9.04878 31.0557C9.05173 31.0557 9.05468 31.0557 9.05764 31.0557C9.06059 31.0557 9.06355 31.0557 9.06651 31.0557C9.06948 31.0557 9.07244 31.0557 9.07541 31.0557C9.07838 31.0557 9.08135 31.0557 9.08432 31.0557C9.0873 31.0557 9.09028 31.0557 9.09326 31.0557C9.09624 31.0557 9.09922 31.0557 9.10221 31.0557C9.10519 31.0557 9.10818 31.0557 9.11118 31.0557C9.11417 31.0557 9.11717 31.0557 9.12016 31.0557C9.12316 31.0557 9.12617 31.0557 9.12917 31.0557C9.13218 31.0557 9.13518 31.0557 9.1382 31.0557C9.14121 31.0557 9.14422 31.0557 9.14724 31.0557C9.15026 31.0557 9.15328 31.0557 9.1563 31.0557C9.15932 31.0557 9.16235 31.0557 9.16538 31.0557C9.16841 31.0557 9.17144 31.0557 9.17448 31.0557C9.17752 31.0557 9.18056 31.0557 9.1836 31.0557C9.18664 31.0557 9.18969 31.0557 9.19274 31.0557C9.19579 31.0557 9.19884 31.0557 9.20189 31.0557C9.20495 31.0557 9.20801 31.0557 9.21107 31.0557C9.21413 31.0557 9.21719 31.0557 9.22026 31.0557C9.22333 31.0557 9.2264 31.0557 9.22947 31.0557C9.23255 31.0557 9.23563 31.0557 9.23871 31.0557C9.24179 31.0557 9.24487 31.0557 9.24796 31.0557C9.25104 31.0557 9.25413 31.0557 9.25723 31.0557C9.26032 31.0557 9.26342 31.0557 9.26652 31.0557C9.26962 31.0557 9.27272 31.0557 9.27583 31.0557C9.27893 31.0557 9.28204 31.0557 9.28516 31.0557C9.28827 31.0557 9.29138 31.0557 9.2945 31.0557C9.29762 31.0557 9.30075 31.0557 9.30387 31.0557C9.307 31.0557 9.31013 31.0557 9.31326 31.0557C9.31639 31.0557 9.31953 31.0557 9.32267 31.0557C9.3258 31.0557 9.32895 31.0557 9.33209 31.0557C9.33524 31.0557 9.33839 31.0557 9.34154 31.0557C9.34469 31.0557 9.34785 31.0557 9.351 31.0557C9.35416 31.0557 9.35733 31.0557 9.36049 31.0557C9.36366 31.0557 9.36682 31.0557 9.37 31.0557C9.37317 31.0557 9.37634 31.0557 9.37952 31.0557C9.3827 31.0557 9.38588 31.0557 9.38907 31.0557C9.39225 31.0557 9.39544 31.0557 9.39863 31.0557C9.40182 31.0557 9.40502 31.0557 9.40822 31.0557C9.41142 31.0557 9.41462 31.0557 9.41782 31.0557C9.42103 31.0557 9.42424 31.0557 9.42745 31.0557C9.43066 31.0557 9.43388 31.0557 9.4371 31.0557C9.44032 31.0557 9.44354 31.0557 9.44676 31.0557C9.44999 31.0557 9.45322 31.0557 9.45645 31.0557C9.45968 31.0557 9.46292 31.0557 9.46616 31.0557C9.4694 31.0557 9.47264 31.0557 9.47589 31.0557C9.47913 31.0557 9.48238 31.0557 9.48563 31.0557C9.48889 31.0557 9.49214 31.0557 9.4954 31.0557C9.49866 31.0557 9.50193 31.0557 9.50519 31.0557C9.50846 31.0557 9.51173 31.0557 9.515 31.0557C9.51828 31.0557 9.52155 31.0557 9.52484 31.0557C9.52812 31.0557 9.5314 31.0557 9.53469 31.0557C9.53797 31.0557 9.54127 31.0557 9.54456 31.0557C9.54785 31.0557 9.55115 31.0557 9.55445 31.0557C9.55775 31.0557 9.56106 31.0557 9.56437 31.0557C9.56768 31.0557 9.57099 31.0557 9.5743 31.0557C9.57762 31.0557 9.58094 31.0557 9.58426 31.0557C9.58758 31.0557 9.59091 31.0557 9.59424 31.0557C9.59757 31.0557 9.6009 31.0557 9.60424 31.0557C9.60757 31.0557 9.61091 31.0557 9.61426 31.0557C9.6176 31.0557 9.62095 31.0557 9.6243 31.0557C9.62765 31.0557 9.631 31.0557 9.63436 31.0557C9.63772 31.0557 9.64108 31.0557 9.64445 31.0557C9.64781 31.0557 9.65118 31.0557 9.65455 31.0557C9.65792 31.0557 9.6613 31.0557 9.66468 31.0557C9.66806 31.0557 9.67144 31.0557 9.67483 31.0557C9.67821 31.0557 9.6816 31.0557 9.685 31.0557C9.68839 31.0557 9.69179 31.0557 9.69519 31.0557C9.69859 31.0557 9.702 31.0557 9.7054 31.0557C9.70881 31.0557 9.71222 31.0557 9.71564 31.0557C9.71905 31.0557 9.72247 31.0557 9.7259 31.0557C9.72932 31.0557 9.73275 31.0557 9.73618 31.0557C9.73961 31.0557 9.74304 31.0557 9.74648 31.0557C9.74991 31.0557 9.75335 31.0557 9.7568 31.0557C9.76024 31.0557 9.76369 31.0557 9.76714 31.0557C9.7706 31.0557 9.77405 31.0557 9.77751 31.0557C9.78097 31.0557 9.78443 31.0557 9.7879 31.0557C9.79137 31.0557 9.79484 31.0557 9.79831 31.0557C9.80179 31.0557 9.80526 31.0557 9.80875 31.0557C9.81223 31.0557 9.81571 31.0557 9.8192 31.0557C9.82269 31.0557 9.82618 31.0557 9.82968 31.0557C9.83318 31.0557 9.83668 31.0557 9.84018 31.0557C9.84368 31.0557 9.84719 31.0557 9.8507 31.0557C9.85422 31.0557 9.85773 31.0557 9.86125 31.0557C9.86477 31.0557 9.86829 31.0557 9.87182 31.0557C9.87534 31.0557 9.87888 31.0557 9.88241 31.0557C9.88594 31.0557 9.88948 31.0557 9.89302 31.0557C9.89656 31.0557 9.90011 31.0557 9.90366 31.0557C9.90721 31.0557 9.91076 31.0557 9.91432 31.0557C9.91787 31.0557 9.92144 31.0557 9.925 31.0557C9.92856 31.0557 9.93213 31.0557 9.9357 31.0557C9.93928 31.0557 9.94285 31.0557 9.94643 31.0557C9.95001 31.0557 9.9536 31.0557 9.95718 31.0557C9.96077 31.0557 9.96436 31.0557 9.96796 31.0557C9.97155 31.0557 9.97515 31.0557 9.97875 31.0557C9.98236 31.0557 9.98596 31.0557 9.98957 31.0557C9.99318 31.0557 9.9968 31.0557 10.0004 31.0557C10.004 31.0557 10.0077 31.0557 10.0113 31.0557C10.0149 31.0557 10.0185 31.0557 10.0222 31.0557C10.0258 31.0557 10.0294 31.0557 10.0331 31.0557C10.0367 31.0557 10.0404 31.0557 10.044 31.0557C10.0477 31.0557 10.0513 31.0557 10.055 31.0557C10.0586 31.0557 10.0623 31.0557 10.066 31.0557C10.0696 31.0557 10.0733 31.0557 10.077 31.0557C10.0806 31.0557 10.0843 31.0557 10.088 31.0557C10.0917 31.0557 10.0954 31.0557 10.0991 31.0557C10.1027 31.0557 10.1064 31.0557 10.1101 31.0557C10.1138 31.0557 10.1175 31.0557 10.1212 31.0557C10.1249 31.0557 10.1287 31.0557 10.1324 31.0557C10.1361 31.0557 10.1398 31.0557 10.1435 31.0557C10.1472 31.0557 10.151 31.0557 10.1547 31.0557C10.1584 31.0557 10.1622 31.0557 10.1659 31.0557C10.1696 31.0557 10.1734 31.0557 10.1771 31.0557C10.1809 31.0557 10.1846 31.0557 10.1884 31.0557C10.1921 31.0557 10.1959 31.0557 10.1996 31.0557C10.2034 31.0557 10.2072 31.0557 10.2109 31.0557C10.2147 31.0557 10.2185 31.0557 10.2222 31.0557C10.226 31.0557 10.2298 31.0557 10.2336 31.0557C10.2374 31.0557 10.2412 31.0557 10.2449 31.0557C10.2487 31.0557 10.2525 31.0557 10.2563 31.0557C10.2601 31.0557 10.2639 31.0557 10.2678 31.0557C10.2716 31.0557 10.2754 31.0557 10.2792 31.0557C10.283 31.0557 10.2868 31.0557 10.2907 31.0557C10.2945 31.0557 10.2983 31.0557 10.3022 31.0557C10.306 31.0557 10.3098 31.0557 10.3137 31.0557C10.3175 31.0557 10.3214 31.0557 10.3252 31.0557C10.3291 31.0557 10.3329 31.0557 10.3368 31.0557C10.3406 31.0557 10.3445 31.0557 10.3484 31.0557C10.3522 31.0557 10.3561 31.0557 10.36 31.0557C10.3639 31.0557 10.3677 31.0557 10.3716 31.0557C10.3755 31.0557 10.3794 31.0557 10.3833 31.0557C10.3872 31.0557 10.3911 31.0557 10.395 31.0557C10.3989 31.0557 10.4028 31.0557 10.4067 31.0557C10.4106 31.0557 10.4145 31.0557 10.4184 31.0557C10.4223 31.0557 10.4263 31.0557 10.4302 31.0557C10.4341 31.0557 10.438 31.0557 10.442 31.0557C10.4459 31.0557 10.4499 31.0557 10.4538 31.0557C10.4577 31.0557 10.4617 31.0557 10.4656 31.0557C10.4696 31.0557 10.4735 31.0557 10.4775 31.0557C10.4815 31.0557 10.4854 31.0557 10.4894 31.0557C10.4934 31.0557 10.4973 31.0557 10.5013 31.0557C10.5053 31.0557 10.5093 31.0557 10.5133 31.0557C10.5172 31.0557 10.5212 31.0557 10.5252 31.0557C10.5292 31.0557 10.5332 31.0557 10.5372 31.0557C10.5412 31.0557 10.5452 31.0557 10.5492 31.0557C10.5533 31.0557 10.5573 31.0557 10.5613 31.0557C10.5653 31.0557 10.5693 31.0557 10.5734 31.0557C10.5774 31.0557 10.5814 31.0557 10.5855 31.0557C10.5895 31.0557 10.5935 31.0557 10.5976 31.0557C10.6016 31.0557 10.6057 31.0557 10.6097 31.0557C10.6138 31.0557 10.6178 31.0557 10.6219 31.0557C10.626 31.0557 10.63 31.0557 10.6341 31.0557C10.6382 31.0557 10.6423 31.0557 10.6463 31.0557C10.6504 31.0557 10.6545 31.0557 10.6586 31.0557C10.6627 31.0557 10.6668 31.0557 10.6709 31.0557C10.675 31.0557 10.6791 31.0557 10.6832 31.0557C10.6873 31.0557 10.6914 31.0557 10.6955 31.0557C10.6996 31.0557 10.7038 31.0557 10.7079 31.0557C10.712 31.0557 10.7161 31.0557 10.7203 31.0557C10.7244 31.0557 10.7285 31.0557 10.7327 31.0557C10.7368 31.0557 10.741 31.0557 10.7451 31.0557C10.7493 31.0557 10.7534 31.0557 10.7576 31.0557C10.7617 31.0557 10.7659 31.0557 10.7701 31.0557C10.7742 31.0557 10.7784 31.0557 10.7826 31.0557C10.7868 31.0557 10.791 31.0557 10.7951 31.0557C10.7993 31.0557 10.8035 31.0557 10.8077 31.0557C10.8119 31.0557 10.8161 31.0557 10.8203 31.0557C10.8245 31.0557 10.8287 31.0557 10.833 31.0557C10.8372 31.0557 10.8414 31.0557 10.8456 31.0557C10.8498 31.0557 10.8541 31.0557 10.8583 31.0557C10.8625 31.0557 10.8668 31.0557 10.871 31.0557C10.8752 31.0557 10.8795 31.0557 10.8837 31.0557C10.888 31.0557 10.8922 31.0557 10.8965 31.0557C10.9008 31.0557 10.905 31.0557 10.9093 31.0557C10.9136 31.0557 10.9178 31.0557 10.9221 31.0557C10.9264 31.0557 10.9307 31.0557 10.935 31.0557C10.9392 31.0557 10.9435 31.0557 10.9478 31.0557C10.9521 31.0557 10.9564 31.0557 10.9607 31.0557C10.965 31.0557 10.9693 31.0557 10.9737 31.0557C10.978 31.0557 10.9823 31.0557 10.9866 31.0557C10.9909 31.0557 10.9953 31.0557 10.9996 31.0557C11.0039 31.0557 11.0083 31.0557 11.0126 31.0557C11.017 31.0557 11.0213 31.0557 11.0257 31.0557C11.03 31.0557 11.0344 31.0557 11.0387 31.0557C11.0431 31.0557 11.0474 31.0557 11.0518 31.0557C11.0562 31.0557 11.0606 31.0557 11.0649 31.0557C11.0693 31.0557 11.0737 31.0557 11.0781 31.0557C11.0825 31.0557 11.0869 31.0557 11.0913 31.0557C11.0957 31.0557 11.1001 31.0557 11.1045 31.0557C11.1089 31.0557 11.1133 31.0557 11.1177 31.0557C11.1221 31.0557 11.1266 31.0557 11.131 31.0557C11.1354 31.0557 11.1398 31.0557 11.1443 31.0557C11.1487 31.0557 11.1532 31.0557 11.1576 31.0557C11.162 31.0557 11.1665 31.0557 11.1709 31.0557C11.1754 31.0557 11.1799 31.0557 11.1843 31.0557C11.1888 31.0557 11.1933 31.0557 11.1977 31.0557C11.2022 31.0557 11.2067 31.0557 11.2112 31.0557C11.2156 31.0557 11.2201 31.0557 11.2246 31.0557C11.2291 31.0557 11.2336 31.0557 11.2381 31.0557C11.2426 31.0557 11.2471 31.0557 11.2516 31.0557C11.2562 31.0557 11.2607 31.0557 11.2652 31.0557C11.2697 31.0557 11.2742 31.0557 11.2788 31.0557C11.2833 31.0557 11.2878 31.0557 11.2924 31.0557C11.2969 31.0557 11.3015 31.0557 11.306 31.0557C11.3106 31.0557 11.3151 31.0557 11.3197 31.0557C11.3242 31.0557 11.3288 31.0557 11.3334 31.0557C11.3379 31.0557 11.3425 31.0557 11.3471 31.0557C11.3517 31.0557 11.3563 31.0557 11.3609 31.0557C11.3654 31.0557 11.37 31.0557 11.3746 31.0557C11.3792 31.0557 11.3838 31.0557 11.3884 31.0557C11.3931 31.0557 11.3977 31.0557 11.4023 31.0557C11.4069 31.0557 11.4115 31.0557 11.4162 31.0557C11.4208 31.0557 11.4254 31.0557 11.4301 31.0557C11.4347 31.0557 11.4393 31.0557 11.444 31.0557C11.4486 31.0557 11.4533 31.0557 11.4579 31.0557C11.4626 31.0557 11.4673 31.0557 11.4719 31.0557C11.4766 31.0557 11.4813 31.0557 11.486 31.0557C11.4906 31.0557 11.4953 31.0557 11.5 31.0557V33.0557C11.4953 33.0557 11.4906 33.0557 11.486 33.0557C11.4813 33.0557 11.4766 33.0557 11.4719 33.0557C11.4673 33.0557 11.4626 33.0557 11.4579 33.0557C11.4533 33.0557 11.4486 33.0557 11.444 33.0557C11.4393 33.0557 11.4347 33.0557 11.4301 33.0557C11.4254 33.0557 11.4208 33.0557 11.4162 33.0557C11.4115 33.0557 11.4069 33.0557 11.4023 33.0557C11.3977 33.0557 11.3931 33.0557 11.3884 33.0557C11.3838 33.0557 11.3792 33.0557 11.3746 33.0557C11.37 33.0557 11.3654 33.0557 11.3609 33.0557C11.3563 33.0557 11.3517 33.0557 11.3471 33.0557C11.3425 33.0557 11.3379 33.0557 11.3334 33.0557C11.3288 33.0557 11.3242 33.0557 11.3197 33.0557C11.3151 33.0557 11.3106 33.0557 11.306 33.0557C11.3015 33.0557 11.2969 33.0557 11.2924 33.0557C11.2878 33.0557 11.2833 33.0557 11.2788 33.0557C11.2742 33.0557 11.2697 33.0557 11.2652 33.0557C11.2607 33.0557 11.2562 33.0557 11.2516 33.0557C11.2471 33.0557 11.2426 33.0557 11.2381 33.0557C11.2336 33.0557 11.2291 33.0557 11.2246 33.0557C11.2201 33.0557 11.2156 33.0557 11.2112 33.0557C11.2067 33.0557 11.2022 33.0557 11.1977 33.0557C11.1933 33.0557 11.1888 33.0557 11.1843 33.0557C11.1799 33.0557 11.1754 33.0557 11.1709 33.0557C11.1665 33.0557 11.162 33.0557 11.1576 33.0557C11.1532 33.0557 11.1487 33.0557 11.1443 33.0557C11.1398 33.0557 11.1354 33.0557 11.131 33.0557C11.1266 33.0557 11.1221 33.0557 11.1177 33.0557C11.1133 33.0557 11.1089 33.0557 11.1045 33.0557C11.1001 33.0557 11.0957 33.0557 11.0913 33.0557C11.0869 33.0557 11.0825 33.0557 11.0781 33.0557C11.0737 33.0557 11.0693 33.0557 11.0649 33.0557C11.0606 33.0557 11.0562 33.0557 11.0518 33.0557C11.0474 33.0557 11.0431 33.0557 11.0387 33.0557C11.0344 33.0557 11.03 33.0557 11.0257 33.0557C11.0213 33.0557 11.017 33.0557 11.0126 33.0557C11.0083 33.0557 11.0039 33.0557 10.9996 33.0557C10.9953 33.0557 10.9909 33.0557 10.9866 33.0557C10.9823 33.0557 10.978 33.0557 10.9737 33.0557C10.9693 33.0557 10.965 33.0557 10.9607 33.0557C10.9564 33.0557 10.9521 33.0557 10.9478 33.0557C10.9435 33.0557 10.9392 33.0557 10.935 33.0557C10.9307 33.0557 10.9264 33.0557 10.9221 33.0557C10.9178 33.0557 10.9136 33.0557 10.9093 33.0557C10.905 33.0557 10.9008 33.0557 10.8965 33.0557C10.8922 33.0557 10.888 33.0557 10.8837 33.0557C10.8795 33.0557 10.8752 33.0557 10.871 33.0557C10.8668 33.0557 10.8625 33.0557 10.8583 33.0557C10.8541 33.0557 10.8498 33.0557 10.8456 33.0557C10.8414 33.0557 10.8372 33.0557 10.833 33.0557C10.8287 33.0557 10.8245 33.0557 10.8203 33.0557C10.8161 33.0557 10.8119 33.0557 10.8077 33.0557C10.8035 33.0557 10.7993 33.0557 10.7951 33.0557C10.791 33.0557 10.7868 33.0557 10.7826 33.0557C10.7784 33.0557 10.7742 33.0557 10.7701 33.0557C10.7659 33.0557 10.7617 33.0557 10.7576 33.0557C10.7534 33.0557 10.7493 33.0557 10.7451 33.0557C10.741 33.0557 10.7368 33.0557 10.7327 33.0557C10.7285 33.0557 10.7244 33.0557 10.7203 33.0557C10.7161 33.0557 10.712 33.0557 10.7079 33.0557C10.7038 33.0557 10.6996 33.0557 10.6955 33.0557C10.6914 33.0557 10.6873 33.0557 10.6832 33.0557C10.6791 33.0557 10.675 33.0557 10.6709 33.0557C10.6668 33.0557 10.6627 33.0557 10.6586 33.0557C10.6545 33.0557 10.6504 33.0557 10.6463 33.0557C10.6423 33.0557 10.6382 33.0557 10.6341 33.0557C10.63 33.0557 10.626 33.0557 10.6219 33.0557C10.6178 33.0557 10.6138 33.0557 10.6097 33.0557C10.6057 33.0557 10.6016 33.0557 10.5976 33.0557C10.5935 33.0557 10.5895 33.0557 10.5855 33.0557C10.5814 33.0557 10.5774 33.0557 10.5734 33.0557C10.5693 33.0557 10.5653 33.0557 10.5613 33.0557C10.5573 33.0557 10.5533 33.0557 10.5492 33.0557C10.5452 33.0557 10.5412 33.0557 10.5372 33.0557C10.5332 33.0557 10.5292 33.0557 10.5252 33.0557C10.5212 33.0557 10.5172 33.0557 10.5133 33.0557C10.5093 33.0557 10.5053 33.0557 10.5013 33.0557C10.4973 33.0557 10.4934 33.0557 10.4894 33.0557C10.4854 33.0557 10.4815 33.0557 10.4775 33.0557C10.4735 33.0557 10.4696 33.0557 10.4656 33.0557C10.4617 33.0557 10.4577 33.0557 10.4538 33.0557C10.4499 33.0557 10.4459 33.0557 10.442 33.0557C10.438 33.0557 10.4341 33.0557 10.4302 33.0557C10.4263 33.0557 10.4223 33.0557 10.4184 33.0557C10.4145 33.0557 10.4106 33.0557 10.4067 33.0557C10.4028 33.0557 10.3989 33.0557 10.395 33.0557C10.3911 33.0557 10.3872 33.0557 10.3833 33.0557C10.3794 33.0557 10.3755 33.0557 10.3716 33.0557C10.3677 33.0557 10.3639 33.0557 10.36 33.0557C10.3561 33.0557 10.3522 33.0557 10.3484 33.0557C10.3445 33.0557 10.3406 33.0557 10.3368 33.0557C10.3329 33.0557 10.3291 33.0557 10.3252 33.0557C10.3214 33.0557 10.3175 33.0557 10.3137 33.0557C10.3098 33.0557 10.306 33.0557 10.3022 33.0557C10.2983 33.0557 10.2945 33.0557 10.2907 33.0557C10.2868 33.0557 10.283 33.0557 10.2792 33.0557C10.2754 33.0557 10.2716 33.0557 10.2678 33.0557C10.2639 33.0557 10.2601 33.0557 10.2563 33.0557C10.2525 33.0557 10.2487 33.0557 10.2449 33.0557C10.2412 33.0557 10.2374 33.0557 10.2336 33.0557C10.2298 33.0557 10.226 33.0557 10.2222 33.0557C10.2185 33.0557 10.2147 33.0557 10.2109 33.0557C10.2072 33.0557 10.2034 33.0557 10.1996 33.0557C10.1959 33.0557 10.1921 33.0557 10.1884 33.0557C10.1846 33.0557 10.1809 33.0557 10.1771 33.0557C10.1734 33.0557 10.1696 33.0557 10.1659 33.0557C10.1622 33.0557 10.1584 33.0557 10.1547 33.0557C10.151 33.0557 10.1472 33.0557 10.1435 33.0557C10.1398 33.0557 10.1361 33.0557 10.1324 33.0557C10.1287 33.0557 10.1249 33.0557 10.1212 33.0557C10.1175 33.0557 10.1138 33.0557 10.1101 33.0557C10.1064 33.0557 10.1027 33.0557 10.0991 33.0557C10.0954 33.0557 10.0917 33.0557 10.088 33.0557C10.0843 33.0557 10.0806 33.0557 10.077 33.0557C10.0733 33.0557 10.0696 33.0557 10.066 33.0557C10.0623 33.0557 10.0586 33.0557 10.055 33.0557C10.0513 33.0557 10.0477 33.0557 10.044 33.0557C10.0404 33.0557 10.0367 33.0557 10.0331 33.0557C10.0294 33.0557 10.0258 33.0557 10.0222 33.0557C10.0185 33.0557 10.0149 33.0557 10.0113 33.0557C10.0077 33.0557 10.004 33.0557 10.0004 33.0557C9.9968 33.0557 9.99318 33.0557 9.98957 33.0557C9.98596 33.0557 9.98236 33.0557 9.97875 33.0557C9.97515 33.0557 9.97155 33.0557 9.96796 33.0557C9.96436 33.0557 9.96077 33.0557 9.95718 33.0557C9.9536 33.0557 9.95001 33.0557 9.94643 33.0557C9.94285 33.0557 9.93928 33.0557 9.9357 33.0557C9.93213 33.0557 9.92856 33.0557 9.925 33.0557C9.92144 33.0557 9.91787 33.0557 9.91432 33.0557C9.91076 33.0557 9.90721 33.0557 9.90366 33.0557C9.90011 33.0557 9.89656 33.0557 9.89302 33.0557C9.88948 33.0557 9.88594 33.0557 9.88241 33.0557C9.87888 33.0557 9.87534 33.0557 9.87182 33.0557C9.86829 33.0557 9.86477 33.0557 9.86125 33.0557C9.85773 33.0557 9.85422 33.0557 9.8507 33.0557C9.84719 33.0557 9.84368 33.0557 9.84018 33.0557C9.83668 33.0557 9.83318 33.0557 9.82968 33.0557C9.82618 33.0557 9.82269 33.0557 9.8192 33.0557C9.81571 33.0557 9.81223 33.0557 9.80875 33.0557C9.80526 33.0557 9.80179 33.0557 9.79831 33.0557C9.79484 33.0557 9.79137 33.0557 9.7879 33.0557C9.78443 33.0557 9.78097 33.0557 9.77751 33.0557C9.77405 33.0557 9.7706 33.0557 9.76714 33.0557C9.76369 33.0557 9.76024 33.0557 9.7568 33.0557C9.75335 33.0557 9.74991 33.0557 9.74648 33.0557C9.74304 33.0557 9.73961 33.0557 9.73618 33.0557C9.73275 33.0557 9.72932 33.0557 9.7259 33.0557C9.72247 33.0557 9.71905 33.0557 9.71564 33.0557C9.71222 33.0557 9.70881 33.0557 9.7054 33.0557C9.702 33.0557 9.69859 33.0557 9.69519 33.0557C9.69179 33.0557 9.68839 33.0557 9.685 33.0557C9.6816 33.0557 9.67821 33.0557 9.67483 33.0557C9.67144 33.0557 9.66806 33.0557 9.66468 33.0557C9.6613 33.0557 9.65792 33.0557 9.65455 33.0557C9.65118 33.0557 9.64781 33.0557 9.64445 33.0557C9.64108 33.0557 9.63772 33.0557 9.63436 33.0557C9.631 33.0557 9.62765 33.0557 9.6243 33.0557C9.62095 33.0557 9.6176 33.0557 9.61426 33.0557C9.61091 33.0557 9.60757 33.0557 9.60424 33.0557C9.6009 33.0557 9.59757 33.0557 9.59424 33.0557C9.59091 33.0557 9.58758 33.0557 9.58426 33.0557C9.58094 33.0557 9.57762 33.0557 9.5743 33.0557C9.57099 33.0557 9.56768 33.0557 9.56437 33.0557C9.56106 33.0557 9.55775 33.0557 9.55445 33.0557C9.55115 33.0557 9.54785 33.0557 9.54456 33.0557C9.54127 33.0557 9.53797 33.0557 9.53469 33.0557C9.5314 33.0557 9.52812 33.0557 9.52484 33.0557C9.52155 33.0557 9.51828 33.0557 9.515 33.0557C9.51173 33.0557 9.50846 33.0557 9.50519 33.0557C9.50193 33.0557 9.49866 33.0557 9.4954 33.0557C9.49214 33.0557 9.48889 33.0557 9.48563 33.0557C9.48238 33.0557 9.47913 33.0557 9.47589 33.0557C9.47264 33.0557 9.4694 33.0557 9.46616 33.0557C9.46292 33.0557 9.45968 33.0557 9.45645 33.0557C9.45322 33.0557 9.44999 33.0557 9.44676 33.0557C9.44354 33.0557 9.44032 33.0557 9.4371 33.0557C9.43388 33.0557 9.43066 33.0557 9.42745 33.0557C9.42424 33.0557 9.42103 33.0557 9.41782 33.0557C9.41462 33.0557 9.41142 33.0557 9.40822 33.0557C9.40502 33.0557 9.40182 33.0557 9.39863 33.0557C9.39544 33.0557 9.39225 33.0557 9.38907 33.0557C9.38588 33.0557 9.3827 33.0557 9.37952 33.0557C9.37634 33.0557 9.37317 33.0557 9.37 33.0557C9.36682 33.0557 9.36366 33.0557 9.36049 33.0557C9.35733 33.0557 9.35416 33.0557 9.351 33.0557C9.34785 33.0557 9.34469 33.0557 9.34154 33.0557C9.33839 33.0557 9.33524 33.0557 9.33209 33.0557C9.32895 33.0557 9.3258 33.0557 9.32267 33.0557C9.31953 33.0557 9.31639 33.0557 9.31326 33.0557C9.31013 33.0557 9.307 33.0557 9.30387 33.0557C9.30075 33.0557 9.29762 33.0557 9.2945 33.0557C9.29138 33.0557 9.28827 33.0557 9.28516 33.0557C9.28204 33.0557 9.27893 33.0557 9.27583 33.0557C9.27272 33.0557 9.26962 33.0557 9.26652 33.0557C9.26342 33.0557 9.26032 33.0557 9.25723 33.0557C9.25413 33.0557 9.25104 33.0557 9.24796 33.0557C9.24487 33.0557 9.24179 33.0557 9.23871 33.0557C9.23563 33.0557 9.23255 33.0557 9.22947 33.0557C9.2264 33.0557 9.22333 33.0557 9.22026 33.0557C9.21719 33.0557 9.21413 33.0557 9.21107 33.0557C9.20801 33.0557 9.20495 33.0557 9.20189 33.0557C9.19884 33.0557 9.19579 33.0557 9.19274 33.0557C9.18969 33.0557 9.18664 33.0557 9.1836 33.0557C9.18056 33.0557 9.17752 33.0557 9.17448 33.0557C9.17144 33.0557 9.16841 33.0557 9.16538 33.0557C9.16235 33.0557 9.15932 33.0557 9.1563 33.0557C9.15328 33.0557 9.15026 33.0557 9.14724 33.0557C9.14422 33.0557 9.14121 33.0557 9.1382 33.0557C9.13518 33.0557 9.13218 33.0557 9.12917 33.0557C9.12617 33.0557 9.12316 33.0557 9.12016 33.0557C9.11717 33.0557 9.11417 33.0557 9.11118 33.0557C9.10818 33.0557 9.10519 33.0557 9.10221 33.0557C9.09922 33.0557 9.09624 33.0557 9.09326 33.0557C9.09028 33.0557 9.0873 33.0557 9.08432 33.0557C9.08135 33.0557 9.07838 33.0557 9.07541 33.0557C9.07244 33.0557 9.06948 33.0557 9.06651 33.0557C9.06355 33.0557 9.06059 33.0557 9.05764 33.0557C9.05468 33.0557 9.05173 33.0557 9.04878 33.0557C9.04583 33.0557 9.04288 33.0557 9.03994 33.0557C9.03699 33.0557 9.03405 33.0557 9.03111 33.0557C9.02817 33.0557 9.02524 33.0557 9.02231 33.0557C9.01937 33.0557 9.01644 33.0557 9.01352 33.0557C9.01059 33.0557 9.00767 33.0557 9.00475 33.0557C9.00183 33.0557 8.99891 33.0557 8.996 33.0557C8.99308 33.0557 8.99017 33.0557 8.98726 33.0557C8.98435 33.0557 8.98145 33.0557 8.97854 33.0557C8.97564 33.0557 8.97274 33.0557 8.96985 33.0557C8.96695 33.0557 8.96406 33.0557 8.96116 33.0557C8.95827 33.0557 8.95539 33.0557 8.9525 33.0557C8.94962 33.0557 8.94673 33.0557 8.94385 33.0557C8.94097 33.0557 8.9381 33.0557 8.93522 33.0557C8.93235 33.0557 8.92948 33.0557 8.92661 33.0557C8.92375 33.0557 8.92088 33.0557 8.91802 33.0557C8.91516 33.0557 8.9123 33.0557 8.90944 33.0557C8.90658 33.0557 8.90373 33.0557 8.90088 33.0557C8.89803 33.0557 8.89518 33.0557 8.89234 33.0557C8.88949 33.0557 8.88665 33.0557 8.88381 33.0557C8.88097 33.0557 8.87814 33.0557 8.8753 33.0557C8.87247 33.0557 8.86964 33.0557 8.86681 33.0557C8.86398 33.0557 8.86116 33.0557 8.85834 33.0557C8.85552 33.0557 8.8527 33.0557 8.84988 33.0557C8.84706 33.0557 8.84425 33.0557 8.84144 33.0557C8.83863 33.0557 8.83582 33.0557 8.83301 33.0557C8.83021 33.0557 8.82741 33.0557 8.82461 33.0557C8.82181 33.0557 8.81901 33.0557 8.81622 33.0557C8.81342 33.0557 8.81063 33.0557 8.80784 33.0557C8.80505 33.0557 8.80227 33.0557 8.79948 33.0557C8.7967 33.0557 8.79392 33.0557 8.79114 33.0557C8.78836 33.0557 8.78559 33.0557 8.78282 33.0557C8.78005 33.0557 8.77728 33.0557 8.77451 33.0557C8.77174 33.0557 8.76898 33.0557 8.76622 33.0557C8.76346 33.0557 8.7607 33.0557 8.75794 33.0557C8.75519 33.0557 8.75243 33.0557 8.74968 33.0557C8.74693 33.0557 8.74418 33.0557 8.74144 33.0557C8.73869 33.0557 8.73595 33.0557 8.73321 33.0557C8.73047 33.0557 8.72773 33.0557 8.725 33.0557C8.72227 33.0557 8.71953 33.0557 8.7168 33.0557C8.71408 33.0557 8.71135 33.0557 8.70863 33.0557C8.7059 33.0557 8.70318 33.0557 8.70046 33.0557C8.69774 33.0557 8.69503 33.0557 8.69232 33.0557C8.6896 33.0557 8.68689 33.0557 8.68418 33.0557C8.68148 33.0557 8.67877 33.0557 8.67607 33.0557C8.67336 33.0557 8.67067 33.0557 8.66797 33.0557C8.66527 33.0557 8.66258 33.0557 8.65988 33.0557C8.65719 33.0557 8.6545 33.0557 8.65181 33.0557C8.64913 33.0557 8.64644 33.0557 8.64376 33.0557C8.64108 33.0557 8.6384 33.0557 8.63572 33.0557C8.63305 33.0557 8.63037 33.0557 8.6277 33.0557C8.62503 33.0557 8.62236 33.0557 8.61969 33.0557C8.61703 33.0557 8.61436 33.0557 8.6117 33.0557C8.60904 33.0557 8.60638 33.0557 8.60373 33.0557C8.60107 33.0557 8.59842 33.0557 8.59576 33.0557C8.59311 33.0557 8.59046 33.0557 8.58782 33.0557C8.58517 33.0557 8.58253 33.0557 8.57989 33.0557C8.57725 33.0557 8.57461 33.0557 8.57197 33.0557C8.56934 33.0557 8.5667 33.0557 8.56407 33.0557C8.56144 33.0557 8.55881 33.0557 8.55618 33.0557C8.55356 33.0557 8.55093 33.0557 8.54831 33.0557C8.54569 33.0557 8.54307 33.0557 8.54046 33.0557C8.53784 33.0557 8.53523 33.0557 8.53262 33.0557C8.53 33.0557 8.5274 33.0557 8.52479 33.0557C8.52218 33.0557 8.51958 33.0557 8.51698 33.0557C8.51438 33.0557 8.51178 33.0557 8.50918 33.0557C8.50658 33.0557 8.50399 33.0557 8.5014 33.0557C8.4988 33.0557 8.49622 33.0557 8.49363 33.0557C8.49104 33.0557 8.48846 33.0557 8.48587 33.0557C8.48329 33.0557 8.48071 33.0557 8.47814 33.0557C8.47556 33.0557 8.47298 33.0557 8.47041 33.0557C8.46784 33.0557 8.46527 33.0557 8.4627 33.0557C8.46013 33.0557 8.45757 33.0557 8.455 33.0557C8.45244 33.0557 8.44988 33.0557 8.44732 33.0557C8.44476 33.0557 8.44221 33.0557 8.43965 33.0557C8.4371 33.0557 8.43455 33.0557 8.432 33.0557C8.42945 33.0557 8.4269 33.0557 8.42436 33.0557C8.42181 33.0557 8.41927 33.0557 8.41673 33.0557C8.41419 33.0557 8.41166 33.0557 8.40912 33.0557C8.40659 33.0557 8.40405 33.0557 8.40152 33.0557C8.39899 33.0557 8.39646 33.0557 8.39394 33.0557C8.39141 33.0557 8.38889 33.0557 8.38637 33.0557C8.38385 33.0557 8.38133 33.0557 8.37881 33.0557C8.37629 33.0557 8.37378 33.0557 8.37127 33.0557C8.36875 33.0557 8.36624 33.0557 8.36374 33.0557C8.36123 33.0557 8.35872 33.0557 8.35622 33.0557C8.35372 33.0557 8.35122 33.0557 8.34872 33.0557C8.34622 33.0557 8.34372 33.0557 8.34123 33.0557C8.33873 33.0557 8.33624 33.0557 8.33375 33.0557C8.33126 33.0557 8.32878 33.0557 8.32629 33.0557C8.32381 33.0557 8.32132 33.0557 8.31884 33.0557C8.31636 33.0557 8.31388 33.0557 8.31141 33.0557C8.30893 33.0557 8.30646 33.0557 8.30398 33.0557C8.30151 33.0557 8.29904 33.0557 8.29657 33.0557C8.29411 33.0557 8.29164 33.0557 8.28918 33.0557C8.28671 33.0557 8.28425 33.0557 8.28179 33.0557C8.27933 33.0557 8.27688 33.0557 8.27442 33.0557C8.27197 33.0557 8.26952 33.0557 8.26707 33.0557C8.26461 33.0557 8.26217 33.0557 8.25972 33.0557C8.25727 33.0557 8.25483 33.0557 8.25239 33.0557C8.24995 33.0557 8.24751 33.0557 8.24507 33.0557C8.24263 33.0557 8.2402 33.0557 8.23776 33.0557C8.23533 33.0557 8.2329 33.0557 8.23047 33.0557C8.22804 33.0557 8.22561 33.0557 8.22319 33.0557C8.22076 33.0557 8.21834 33.0557 8.21592 33.0557C8.2135 33.0557 8.21108 33.0557 8.20866 33.0557C8.20625 33.0557 8.20383 33.0557 8.20142 33.0557C8.19901 33.0557 8.1966 33.0557 8.19419 33.0557C8.19178 33.0557 8.18937 33.0557 8.18697 33.0557C8.18456 33.0557 8.18216 33.0557 8.17976 33.0557C8.17736 33.0557 8.17496 33.0557 8.17257 33.0557C8.17017 33.0557 8.16778 33.0557 8.16538 33.0557C8.16299 33.0557 8.1606 33.0557 8.15821 33.0557C8.15583 33.0557 8.15344 33.0557 8.15105 33.0557C8.14867 33.0557 8.14629 33.0557 8.14391 33.0557C8.14153 33.0557 8.13915 33.0557 8.13677 33.0557C8.1344 33.0557 8.13202 33.0557 8.12965 33.0557C8.12728 33.0557 8.12491 33.0557 8.12254 33.0557C8.12017 33.0557 8.11781 33.0557 8.11544 33.0557C8.11308 33.0557 8.11072 33.0557 8.10835 33.0557C8.10599 33.0557 8.10364 33.0557 8.10128 33.0557C8.09892 33.0557 8.09657 33.0557 8.09422 33.0557C8.09186 33.0557 8.08951 33.0557 8.08716 33.0557C8.08481 33.0557 8.08247 33.0557 8.08012 33.0557C8.07778 33.0557 8.07543 33.0557 8.07309 33.0557C8.07075 33.0557 8.06841 33.0557 8.06607 33.0557C8.06374 33.0557 8.0614 33.0557 8.05907 33.0557C8.05673 33.0557 8.0544 33.0557 8.05207 33.0557C8.04974 33.0557 8.04742 33.0557 8.04509 33.0557C8.04276 33.0557 8.04044 33.0557 8.03812 33.0557C8.03579 33.0557 8.03347 33.0557 8.03115 33.0557C8.02884 33.0557 8.02652 33.0557 8.0242 33.0557C8.02189 33.0557 8.01958 33.0557 8.01726 33.0557C8.01495 33.0557 8.01264 33.0557 8.01034 33.0557C8.00803 33.0557 8.00572 33.0557 8.00342 33.0557C8.00111 33.0557 7.99881 33.0557 7.99651 33.0557C7.99421 33.0557 7.99191 33.0557 7.98962 33.0557C7.98732 33.0557 7.98502 33.0557 7.98273 33.0557C7.98044 33.0557 7.97815 33.0557 7.97586 33.0557C7.97357 33.0557 7.97128 33.0557 7.96899 33.0557C7.96671 33.0557 7.96442 33.0557 7.96214 33.0557C7.95986 33.0557 7.95757 33.0557 7.9553 33.0557C7.95302 33.0557 7.95074 33.0557 7.94846 33.0557C7.94619 33.0557 7.94391 33.0557 7.94164 33.0557C7.93937 33.0557 7.9371 33.0557 7.93483 33.0557C7.93256 33.0557 7.93029 33.0557 7.92803 33.0557C7.92576 33.0557 7.9235 33.0557 7.92124 33.0557C7.91898 33.0557 7.91672 33.0557 7.91446 33.0557C7.9122 33.0557 7.90994 33.0557 7.90769 33.0557C7.90543 33.0557 7.90318 33.0557 7.90093 33.0557C7.89868 33.0557 7.89643 33.0557 7.89418 33.0557C7.89193 33.0557 7.88968 33.0557 7.88744 33.0557C7.88519 33.0557 7.88295 33.0557 7.88071 33.0557C7.87847 33.0557 7.87623 33.0557 7.87399 33.0557C7.87175 33.0557 7.86951 33.0557 7.86728 33.0557C7.86504 33.0557 7.86281 33.0557 7.86058 33.0557C7.85834 33.0557 7.85611 33.0557 7.85388 33.0557C7.85166 33.0557 7.84943 33.0557 7.8472 33.0557C7.84498 33.0557 7.84275 33.0557 7.84053 33.0557C7.83831 33.0557 7.83609 33.0557 7.83387 33.0557C7.83165 33.0557 7.82943 33.0557 7.82722 33.0557C7.825 33.0557 7.82279 33.0557 7.82057 33.0557C7.81836 33.0557 7.81615 33.0557 7.81394 33.0557C7.81173 33.0557 7.80952 33.0557 7.80732 33.0557C7.80511 33.0557 7.80291 33.0557 7.8007 33.0557C7.7985 33.0557 7.7963 33.0557 7.7941 33.0557C7.7919 33.0557 7.7897 33.0557 7.7875 33.0557C7.7853 33.0557 7.78311 33.0557 7.78091 33.0557C7.77872 33.0557 7.77653 33.0557 7.77433 33.0557C7.77214 33.0557 7.76995 33.0557 7.76777 33.0557C7.76558 33.0557 7.76339 33.0557 7.76121 33.0557C7.75902 33.0557 7.75684 33.0557 7.75465 33.0557C7.75247 33.0557 7.75029 33.0557 7.74811 33.0557C7.74593 33.0557 7.74375 33.0557 7.74158 33.0557C7.7394 33.0557 7.73723 33.0557 7.73505 33.0557C7.73288 33.0557 7.73071 33.0557 7.72854 33.0557C7.72637 33.0557 7.7242 33.0557 7.72203 33.0557C7.71986 33.0557 7.7177 33.0557 7.71553 33.0557C7.71337 33.0557 7.7112 33.0557 7.70904 33.0557C7.70688 33.0557 7.70472 33.0557 7.70256 33.0557C7.7004 33.0557 7.69824 33.0557 7.69609 33.0557C7.69393 33.0557 7.69178 33.0557 7.68962 33.0557C7.68747 33.0557 7.68532 33.0557 7.68317 33.0557C7.68102 33.0557 7.67887 33.0557 7.67672 33.0557C7.67457 33.0557 7.67242 33.0557 7.67028 33.0557C7.66813 33.0557 7.66599 33.0557 7.66385 33.0557C7.6617 33.0557 7.65956 33.0557 7.65742 33.0557C7.65528 33.0557 7.65315 33.0557 7.65101 33.0557C7.64887 33.0557 7.64674 33.0557 7.6446 33.0557C7.64247 33.0557 7.64033 33.0557 7.6382 33.0557C7.63607 33.0557 7.63394 33.0557 7.63181 33.0557C7.62968 33.0557 7.62755 33.0557 7.62543 33.0557C7.6233 33.0557 7.62117 33.0557 7.61905 33.0557C7.61693 33.0557 7.6148 33.0557 7.61268 33.0557C7.61056 33.0557 7.60844 33.0557 7.60632 33.0557C7.6042 33.0557 7.60209 33.0557 7.59997 33.0557C7.59785 33.0557 7.59574 33.0557 7.59362 33.0557C7.59151 33.0557 7.5894 33.0557 7.58729 33.0557C7.58518 33.0557 7.58307 33.0557 7.58096 33.0557C7.57885 33.0557 7.57674 33.0557 7.57463 33.0557C7.57253 33.0557 7.57042 33.0557 7.56832 33.0557C7.56622 33.0557 7.56411 33.0557 7.56201 33.0557C7.55991 33.0557 7.55781 33.0557 7.55571 33.0557C7.55361 33.0557 7.55151 33.0557 7.54942 33.0557C7.54732 33.0557 7.54523 33.0557 7.54313 33.0557C7.54104 33.0557 7.53894 33.0557 7.53685 33.0557C7.53476 33.0557 7.53267 33.0557 7.53058 33.0557C7.52849 33.0557 7.5264 33.0557 7.52432 33.0557C7.52223 33.0557 7.52014 33.0557 7.51806 33.0557C7.51597 33.0557 7.51389 33.0557 7.51181 33.0557C7.50972 33.0557 7.50764 33.0557 7.50556 33.0557C7.50348 33.0557 7.5014 33.0557 7.49932 33.0557C7.49725 33.0557 7.49517 33.0557 7.49309 33.0557C7.49102 33.0557 7.48894 33.0557 7.48687 33.0557C7.4848 33.0557 7.48272 33.0557 7.48065 33.0557C7.47858 33.0557 7.47651 33.0557 7.47444 33.0557C7.47237 33.0557 7.4703 33.0557 7.46824 33.0557C7.46617 33.0557 7.4641 33.0557 7.46204 33.0557C7.45997 33.0557 7.45791 33.0557 7.45585 33.0557C7.45378 33.0557 7.45172 33.0557 7.44966 33.0557C7.4476 33.0557 7.44554 33.0557 7.44348 33.0557C7.44142 33.0557 7.43937 33.0557 7.43731 33.0557C7.43525 33.0557 7.4332 33.0557 7.43114 33.0557C7.42909 33.0557 7.42704 33.0557 7.42498 33.0557C7.42293 33.0557 7.42088 33.0557 7.41883 33.0557C7.41678 33.0557 7.41473 33.0557 7.41268 33.0557C7.41063 33.0557 7.40859 33.0557 7.40654 33.0557C7.40449 33.0557 7.40245 33.0557 7.4004 33.0557C7.39836 33.0557 7.39632 33.0557 7.39427 33.0557C7.39223 33.0557 7.39019 33.0557 7.38815 33.0557C7.38611 33.0557 7.38407 33.0557 7.38203 33.0557C7.37999 33.0557 7.37796 33.0557 7.37592 33.0557C7.37388 33.0557 7.37185 33.0557 7.36981 33.0557C7.36778 33.0557 7.36574 33.0557 7.36371 33.0557C7.36168 33.0557 7.35964 33.0557 7.35761 33.0557C7.35558 33.0557 7.35355 33.0557 7.35152 33.0557C7.34949 33.0557 7.34747 33.0557 7.34544 33.0557C7.34341 33.0557 7.34138 33.0557 7.33936 33.0557C7.33733 33.0557 7.33531 33.0557 7.33328 33.0557C7.33126 33.0557 7.32924 33.0557 7.32721 33.0557C7.32519 33.0557 7.32317 33.0557 7.32115 33.0557C7.31913 33.0557 7.31711 33.0557 7.31509 33.0557C7.31307 33.0557 7.31106 33.0557 7.30904 33.0557C7.30702 33.0557 7.30501 33.0557 7.30299 33.0557C7.30098 33.0557 7.29896 33.0557 7.29695 33.0557C7.29493 33.0557 7.29292 33.0557 7.29091 33.0557C7.2889 33.0557 7.28689 33.0557 7.28488 33.0557C7.28287 33.0557 7.28086 33.0557 7.27885 33.0557C7.27684 33.0557 7.27483 33.0557 7.27282 33.0557C7.27082 33.0557 7.26881 33.0557 7.2668 33.0557C7.2648 33.0557 7.26279 33.0557 7.26079 33.0557C7.25879 33.0557 7.25678 33.0557 7.25478 33.0557C7.25278 33.0557 7.25078 33.0557 7.24877 33.0557C7.24677 33.0557 7.24477 33.0557 7.24277 33.0557C7.24077 33.0557 7.23878 33.0557 7.23678 33.0557C7.23478 33.0557 7.23278 33.0557 7.23079 33.0557C7.22879 33.0557 7.22679 33.0557 7.2248 33.0557C7.2228 33.0557 7.22081 33.0557 7.21882 33.0557C7.21682 33.0557 7.21483 33.0557 7.21284 33.0557C7.21085 33.0557 7.20885 33.0557 7.20686 33.0557C7.20487 33.0557 7.20288 33.0557 7.20089 33.0557C7.1989 33.0557 7.19691 33.0557 7.19493 33.0557C7.19294 33.0557 7.19095 33.0557 7.18896 33.0557C7.18698 33.0557 7.18499 33.0557 7.18301 33.0557C7.18102 33.0557 7.17904 33.0557 7.17705 33.0557C7.17507 33.0557 7.17309 33.0557 7.1711 33.0557C7.16912 33.0557 7.16714 33.0557 7.16516 33.0557C7.16317 33.0557 7.16119 33.0557 7.15921 33.0557C7.15723 33.0557 7.15525 33.0557 7.15327 33.0557C7.1513 33.0557 7.14932 33.0557 7.14734 33.0557C7.14536 33.0557 7.14338 33.0557 7.14141 33.0557C7.13943 33.0557 7.13746 33.0557 7.13548 33.0557C7.1335 33.0557 7.13153 33.0557 7.12956 33.0557C7.12758 33.0557 7.12561 33.0557 7.12363 33.0557C7.12166 33.0557 7.11969 33.0557 7.11772 33.0557C7.11574 33.0557 7.11377 33.0557 7.1118 33.0557C7.10983 33.0557 7.10786 33.0557 7.10589 33.0557C7.10392 33.0557 7.10195 33.0557 7.09998 33.0557C7.09802 33.0557 7.09605 33.0557 7.09408 33.0557C7.09211 33.0557 7.09014 33.0557 7.08818 33.0557C7.08621 33.0557 7.08425 33.0557 7.08228 33.0557C7.08031 33.0557 7.07835 33.0557 7.07638 33.0557C7.07442 33.0557 7.07246 33.0557 7.07049 33.0557C7.06853 33.0557 7.06657 33.0557 7.0646 33.0557C7.06264 33.0557 7.06068 33.0557 7.05872 33.0557C7.05676 33.0557 7.05479 33.0557 7.05283 33.0557C7.05087 33.0557 7.04891 33.0557 7.04695 33.0557C7.04499 33.0557 7.04303 33.0557 7.04107 33.0557C7.03912 33.0557 7.03716 33.0557 7.0352 33.0557C7.03324 33.0557 7.03128 33.0557 7.02933 33.0557C7.02737 33.0557 7.02541 33.0557 7.02346 33.0557C7.0215 33.0557 7.01954 33.0557 7.01759 33.0557C7.01563 33.0557 7.01368 33.0557 7.01172 33.0557C7.00977 33.0557 7.00781 33.0557 7.00586 33.0557C7.00391 33.0557 7.00195 33.0557 7 33.0557V31.0557ZM34 15.5557C34.0078 15.5557 34.0156 15.5557 34.0234 15.5557C34.0312 15.5557 34.0389 15.5557 34.0467 15.5557C34.0544 15.5557 34.0621 15.5557 34.0698 15.5557C34.0775 15.5557 34.0852 15.5557 34.0929 15.5557C34.1005 15.5557 34.1082 15.5557 34.1158 15.5557C34.1234 15.5557 34.1311 15.5557 34.1386 15.5557C34.1462 15.5557 34.1538 15.5557 34.1614 15.5557C34.1689 15.5557 34.1765 15.5557 34.184 15.5557C34.1915 15.5557 34.199 15.5557 34.2065 15.5557C34.214 15.5557 34.2214 15.5557 34.2289 15.5557C34.2363 15.5557 34.2438 15.5557 34.2512 15.5557C34.2586 15.5557 34.266 15.5557 34.2734 15.5557C34.2807 15.5557 34.2881 15.5557 34.2954 15.5557C34.3028 15.5557 34.3101 15.5557 34.3174 15.5557C34.3247 15.5557 34.332 15.5557 34.3393 15.5557C34.3465 15.5557 34.3538 15.5557 34.361 15.5557C34.3683 15.5557 34.3755 15.5557 34.3827 15.5557C34.3899 15.5557 34.3971 15.5557 34.4042 15.5557C34.4114 15.5557 34.4185 15.5557 34.4257 15.5557C34.4328 15.5557 34.4399 15.5557 34.447 15.5557C34.4541 15.5557 34.4612 15.5557 34.4682 15.5557C34.4753 15.5557 34.4823 15.5557 34.4893 15.5557C34.4964 15.5557 34.5034 15.5557 34.5103 15.5557C34.5173 15.5557 34.5243 15.5557 34.5313 15.5557C34.5382 15.5557 34.5451 15.5557 34.5521 15.5557C34.559 15.5557 34.5659 15.5557 34.5728 15.5557C34.5797 15.5557 34.5865 15.5557 34.5934 15.5557C34.6002 15.5557 34.607 15.5557 34.6139 15.5557C34.6207 15.5557 34.6275 15.5557 34.6343 15.5557C34.641 15.5557 34.6478 15.5557 34.6546 15.5557C34.6613 15.5557 34.668 15.5557 34.6747 15.5557C34.6814 15.5557 34.6881 15.5557 34.6948 15.5557C34.7015 15.5557 34.7082 15.5557 34.7148 15.5557C34.7215 15.5557 34.7281 15.5557 34.7347 15.5557C34.7413 15.5557 34.7479 15.5557 34.7545 15.5557C34.761 15.5557 34.7676 15.5557 34.7741 15.5557C34.7807 15.5557 34.7872 15.5557 34.7937 15.5557C34.8002 15.5557 34.8067 15.5557 34.8132 15.5557C34.8197 15.5557 34.8261 15.5557 34.8326 15.5557C34.839 15.5557 34.8455 15.5557 34.8519 15.5557C34.8583 15.5557 34.8647 15.5557 34.871 15.5557C34.8774 15.5557 34.8838 15.5557 34.8901 15.5557C34.8965 15.5557 34.9028 15.5557 34.9091 15.5557C34.9154 15.5557 34.9217 15.5557 34.928 15.5557C34.9342 15.5557 34.9405 15.5557 34.9468 15.5557C34.953 15.5557 34.9592 15.5557 34.9654 15.5557C34.9716 15.5557 34.9778 15.5557 34.984 15.5557C34.9902 15.5557 34.9964 15.5557 35.0025 15.5557C35.0086 15.5557 35.0148 15.5557 35.0209 15.5557C35.027 15.5557 35.0331 15.5557 35.0392 15.5557C35.0453 15.5557 35.0513 15.5557 35.0574 15.5557C35.0634 15.5557 35.0695 15.5557 35.0755 15.5557C35.0815 15.5557 35.0875 15.5557 35.0935 15.5557C35.0995 15.5557 35.1054 15.5557 35.1114 15.5557C35.1173 15.5557 35.1233 15.5557 35.1292 15.5557C35.1351 15.5557 35.141 15.5557 35.1469 15.5557C35.1528 15.5557 35.1586 15.5557 35.1645 15.5557C35.1704 15.5557 35.1762 15.5557 35.182 15.5557C35.1878 15.5557 35.1937 15.5557 35.1994 15.5557C35.2052 15.5557 35.211 15.5557 35.2168 15.5557C35.2225 15.5557 35.2283 15.5557 35.234 15.5557C35.2397 15.5557 35.2455 15.5557 35.2512 15.5557C35.2569 15.5557 35.2625 15.5557 35.2682 15.5557C35.2739 15.5557 35.2795 15.5557 35.2852 15.5557C35.2908 15.5557 35.2964 15.5557 35.302 15.5557C35.3076 15.5557 35.3132 15.5557 35.3188 15.5557C35.3244 15.5557 35.3299 15.5557 35.3355 15.5557C35.341 15.5557 35.3465 15.5557 35.352 15.5557C35.3575 15.5557 35.363 15.5557 35.3685 15.5557C35.374 15.5557 35.3795 15.5557 35.3849 15.5557C35.3904 15.5557 35.3958 15.5557 35.4012 15.5557C35.4066 15.5557 35.4121 15.5557 35.4174 15.5557C35.4228 15.5557 35.4282 15.5557 35.4336 15.5557C35.4389 15.5557 35.4443 15.5557 35.4496 15.5557C35.4549 15.5557 35.4602 15.5557 35.4655 15.5557C35.4708 15.5557 35.4761 15.5557 35.4814 15.5557C35.4867 15.5557 35.4919 15.5557 35.4971 15.5557C35.5024 15.5557 35.5076 15.5557 35.5128 15.5557C35.518 15.5557 35.5232 15.5557 35.5284 15.5557C35.5336 15.5557 35.5387 15.5557 35.5439 15.5557C35.549 15.5557 35.5542 15.5557 35.5593 15.5557C35.5644 15.5557 35.5695 15.5557 35.5746 15.5557C35.5797 15.5557 35.5848 15.5557 35.5898 15.5557C35.5949 15.5557 35.5999 15.5557 35.605 15.5557C35.61 15.5557 35.615 15.5557 35.62 15.5557C35.625 15.5557 35.63 15.5557 35.635 15.5557C35.6399 15.5557 35.6449 15.5557 35.6498 15.5557C35.6548 15.5557 35.6597 15.5557 35.6646 15.5557C35.6695 15.5557 35.6744 15.5557 35.6793 15.5557C35.6842 15.5557 35.6891 15.5557 35.6939 15.5557C35.6988 15.5557 35.7036 15.5557 35.7085 15.5557C35.7133 15.5557 35.7181 15.5557 35.7229 15.5557C35.7277 15.5557 35.7325 15.5557 35.7372 15.5557C35.742 15.5557 35.7468 15.5557 35.7515 15.5557C35.7563 15.5557 35.761 15.5557 35.7657 15.5557C35.7704 15.5557 35.7751 15.5557 35.7798 15.5557C35.7845 15.5557 35.7891 15.5557 35.7938 15.5557C35.7985 15.5557 35.8031 15.5557 35.8077 15.5557C35.8124 15.5557 35.817 15.5557 35.8216 15.5557C35.8262 15.5557 35.8307 15.5557 35.8353 15.5557C35.8399 15.5557 35.8445 15.5557 35.849 15.5557C35.8535 15.5557 35.8581 15.5557 35.8626 15.5557C35.8671 15.5557 35.8716 15.5557 35.8761 15.5557C35.8806 15.5557 35.8851 15.5557 35.8895 15.5557C35.894 15.5557 35.8984 15.5557 35.9029 15.5557C35.9073 15.5557 35.9117 15.5557 35.9161 15.5557C35.9205 15.5557 35.9249 15.5557 35.9293 15.5557C35.9337 15.5557 35.938 15.5557 35.9424 15.5557C35.9467 15.5557 35.9511 15.5557 35.9554 15.5557C35.9597 15.5557 35.964 15.5557 35.9683 15.5557C35.9726 15.5557 35.9769 15.5557 35.9812 15.5557C35.9855 15.5557 35.9897 15.5557 35.994 15.5557C35.9982 15.5557 36.0024 15.5557 36.0066 15.5557C36.0109 15.5557 36.0151 15.5557 36.0193 15.5557C36.0234 15.5557 36.0276 15.5557 36.0318 15.5557C36.0359 15.5557 36.0401 15.5557 36.0442 15.5557C36.0484 15.5557 36.0525 15.5557 36.0566 15.5557C36.0607 15.5557 36.0648 15.5557 36.0689 15.5557C36.073 15.5557 36.077 15.5557 36.0811 15.5557C36.0852 15.5557 36.0892 15.5557 36.0932 15.5557C36.0973 15.5557 36.1013 15.5557 36.1053 15.5557C36.1093 15.5557 36.1133 15.5557 36.1173 15.5557C36.1212 15.5557 36.1252 15.5557 36.1292 15.5557C36.1331 15.5557 36.1371 15.5557 36.141 15.5557C36.1449 15.5557 36.1488 15.5557 36.1527 15.5557C36.1566 15.5557 36.1605 15.5557 36.1644 15.5557C36.1683 15.5557 36.1721 15.5557 36.176 15.5557C36.1798 15.5557 36.1837 15.5557 36.1875 15.5557C36.1913 15.5557 36.1951 15.5557 36.1989 15.5557C36.2027 15.5557 36.2065 15.5557 36.2103 15.5557C36.2141 15.5557 36.2178 15.5557 36.2216 15.5557C36.2253 15.5557 36.2291 15.5557 36.2328 15.5557C36.2365 15.5557 36.2402 15.5557 36.2439 15.5557C36.2476 15.5557 36.2513 15.5557 36.255 15.5557C36.2587 15.5557 36.2623 15.5557 36.266 15.5557C36.2696 15.5557 36.2733 15.5557 36.2769 15.5557C36.2805 15.5557 36.2841 15.5557 36.2877 15.5557C36.2913 15.5557 36.2949 15.5557 36.2985 15.5557C36.3021 15.5557 36.3056 15.5557 36.3092 15.5557C36.3127 15.5557 36.3163 15.5557 36.3198 15.5557C36.3233 15.5557 36.3268 15.5557 36.3303 15.5557C36.3338 15.5557 36.3373 15.5557 36.3408 15.5557C36.3443 15.5557 36.3477 15.5557 36.3512 15.5557C36.3546 15.5557 36.3581 15.5557 36.3615 15.5557C36.3649 15.5557 36.3684 15.5557 36.3718 15.5557C36.3752 15.5557 36.3786 15.5557 36.3819 15.5557C36.3853 15.5557 36.3887 15.5557 36.3921 15.5557C36.3954 15.5557 36.3988 15.5557 36.4021 15.5557C36.4054 15.5557 36.4087 15.5557 36.4121 15.5557C36.4154 15.5557 36.4187 15.5557 36.422 15.5557C36.4252 15.5557 36.4285 15.5557 36.4318 15.5557C36.435 15.5557 36.4383 15.5557 36.4415 15.5557C36.4448 15.5557 36.448 15.5557 36.4512 15.5557C36.4544 15.5557 36.4576 15.5557 36.4608 15.5557C36.464 15.5557 36.4672 15.5557 36.4704 15.5557C36.4736 15.5557 36.4767 15.5557 36.4799 15.5557C36.483 15.5557 36.4861 15.5557 36.4893 15.5557C36.4924 15.5557 36.4955 15.5557 36.4986 15.5557C36.5017 15.5557 36.5048 15.5557 36.5079 15.5557C36.511 15.5557 36.514 15.5557 36.5171 15.5557C36.5201 15.5557 36.5232 15.5557 36.5262 15.5557C36.5293 15.5557 36.5323 15.5557 36.5353 15.5557C36.5383 15.5557 36.5413 15.5557 36.5443 15.5557C36.5473 15.5557 36.5503 15.5557 36.5532 15.5557C36.5562 15.5557 36.5592 15.5557 36.5621 15.5557C36.565 15.5557 36.568 15.5557 36.5709 15.5557C36.5738 15.5557 36.5767 15.5557 36.5796 15.5557C36.5825 15.5557 36.5854 15.5557 36.5883 15.5557C36.5912 15.5557 36.5941 15.5557 36.5969 15.5557C36.5998 15.5557 36.6026 15.5557 36.6055 15.5557C36.6083 15.5557 36.6111 15.5557 36.6139 15.5557C36.6167 15.5557 36.6195 15.5557 36.6223 15.5557C36.6251 15.5557 36.6279 15.5557 36.6307 15.5557C36.6335 15.5557 36.6362 15.5557 36.639 15.5557C36.6417 15.5557 36.6445 15.5557 36.6472 15.5557C36.6499 15.5557 36.6526 15.5557 36.6553 15.5557C36.658 15.5557 36.6607 15.5557 36.6634 15.5557C36.6661 15.5557 36.6688 15.5557 36.6715 15.5557C36.6741 15.5557 36.6768 15.5557 36.6794 15.5557C36.6821 15.5557 36.6847 15.5557 36.6873 15.5557C36.6899 15.5557 36.6926 15.5557 36.6952 15.5557C36.6978 15.5557 36.7003 15.5557 36.7029 15.5557C36.7055 15.5557 36.7081 15.5557 36.7106 15.5557C36.7132 15.5557 36.7158 15.5557 36.7183 15.5557C36.7208 15.5557 36.7234 15.5557 36.7259 15.5557C36.7284 15.5557 36.7309 15.5557 36.7334 15.5557C36.7359 15.5557 36.7384 15.5557 36.7409 15.5557C36.7434 15.5557 36.7458 15.5557 36.7483 15.5557C36.7508 15.5557 36.7532 15.5557 36.7557 15.5557C36.7581 15.5557 36.7605 15.5557 36.7629 15.5557C36.7654 15.5557 36.7678 15.5557 36.7702 15.5557C36.7726 15.5557 36.775 15.5557 36.7773 15.5557C36.7797 15.5557 36.7821 15.5557 36.7845 15.5557C36.7868 15.5557 36.7892 15.5557 36.7915 15.5557C36.7938 15.5557 36.7962 15.5557 36.7985 15.5557C36.8008 15.5557 36.8031 15.5557 36.8054 15.5557C36.8077 15.5557 36.81 15.5557 36.8123 15.5557C36.8146 15.5557 36.8169 15.5557 36.8191 15.5557C36.8214 15.5557 36.8237 15.5557 36.8259 15.5557C36.8281 15.5557 36.8304 15.5557 36.8326 15.5557C36.8348 15.5557 36.837 15.5557 36.8393 15.5557C36.8415 15.5557 36.8437 15.5557 36.8458 15.5557C36.848 15.5557 36.8502 15.5557 36.8524 15.5557C36.8545 15.5557 36.8567 15.5557 36.8589 15.5557C36.861 15.5557 36.8631 15.5557 36.8653 15.5557C36.8674 15.5557 36.8695 15.5557 36.8716 15.5557C36.8738 15.5557 36.8759 15.5557 36.878 15.5557C36.8801 15.5557 36.8821 15.5557 36.8842 15.5557C36.8863 15.5557 36.8884 15.5557 36.8904 15.5557C36.8925 15.5557 36.8945 15.5557 36.8966 15.5557C36.8986 15.5557 36.9006 15.5557 36.9027 15.5557C36.9047 15.5557 36.9067 15.5557 36.9087 15.5557C36.9107 15.5557 36.9127 15.5557 36.9147 15.5557C36.9167 15.5557 36.9186 15.5557 36.9206 15.5557C36.9226 15.5557 36.9245 15.5557 36.9265 15.5557C36.9284 15.5557 36.9304 15.5557 36.9323 15.5557C36.9343 15.5557 36.9362 15.5557 36.9381 15.5557C36.94 15.5557 36.9419 15.5557 36.9438 15.5557C36.9457 15.5557 36.9476 15.5557 36.9495 15.5557C36.9514 15.5557 36.9532 15.5557 36.9551 15.5557C36.957 15.5557 36.9588 15.5557 36.9607 15.5557C36.9625 15.5557 36.9643 15.5557 36.9662 15.5557C36.968 15.5557 36.9698 15.5557 36.9716 15.5557C36.9735 15.5557 36.9753 15.5557 36.9771 15.5557C36.9788 15.5557 36.9806 15.5557 36.9824 15.5557C36.9842 15.5557 36.986 15.5557 36.9877 15.5557C36.9895 15.5557 36.9912 15.5557 36.993 15.5557C36.9947 15.5557 36.9965 15.5557 36.9982 15.5557C36.9999 15.5557 37.0016 15.5557 37.0034 15.5557C37.0051 15.5557 37.0068 15.5557 37.0085 15.5557C37.0102 15.5557 37.0119 15.5557 37.0135 15.5557C37.0152 15.5557 37.0169 15.5557 37.0185 15.5557C37.0202 15.5557 37.0219 15.5557 37.0235 15.5557C37.0252 15.5557 37.0268 15.5557 37.0284 15.5557C37.0301 15.5557 37.0317 15.5557 37.0333 15.5557C37.0349 15.5557 37.0365 15.5557 37.0381 15.5557C37.0397 15.5557 37.0413 15.5557 37.0429 15.5557C37.0445 15.5557 37.0461 15.5557 37.0476 15.5557C37.0492 15.5557 37.0508 15.5557 37.0523 15.5557C37.0539 15.5557 37.0554 15.5557 37.0569 15.5557C37.0585 15.5557 37.06 15.5557 37.0615 15.5557C37.0631 15.5557 37.0646 15.5557 37.0661 15.5557C37.0676 15.5557 37.0691 15.5557 37.0706 15.5557C37.0721 15.5557 37.0735 15.5557 37.075 15.5557C37.0765 15.5557 37.078 15.5557 37.0794 15.5557C37.0809 15.5557 37.0823 15.5557 37.0838 15.5557C37.0852 15.5557 37.0867 15.5557 37.0881 15.5557C37.0895 15.5557 37.091 15.5557 37.0924 15.5557C37.0938 15.5557 37.0952 15.5557 37.0966 15.5557C37.098 15.5557 37.0994 15.5557 37.1008 15.5557C37.1022 15.5557 37.1036 15.5557 37.1049 15.5557C37.1063 15.5557 37.1077 15.5557 37.109 15.5557C37.1104 15.5557 37.1117 15.5557 37.1131 15.5557C37.1144 15.5557 37.1158 15.5557 37.1171 15.5557C37.1184 15.5557 37.1198 15.5557 37.1211 15.5557C37.1224 15.5557 37.1237 15.5557 37.125 15.5557C37.1263 15.5557 37.1276 15.5557 37.1289 15.5557C37.1302 15.5557 37.1315 15.5557 37.1327 15.5557C37.134 15.5557 37.1353 15.5557 37.1365 15.5557C37.1378 15.5557 37.139 15.5557 37.1403 15.5557C37.1415 15.5557 37.1428 15.5557 37.144 15.5557C37.1452 15.5557 37.1465 15.5557 37.1477 15.5557C37.1489 15.5557 37.1501 15.5557 37.1513 15.5557C37.1525 15.5557 37.1537 15.5557 37.1549 15.5557C37.1561 15.5557 37.1573 15.5557 37.1585 15.5557C37.1597 15.5557 37.1608 15.5557 37.162 15.5557C37.1632 15.5557 37.1643 15.5557 37.1655 15.5557C37.1666 15.5557 37.1678 15.5557 37.1689 15.5557C37.1701 15.5557 37.1712 15.5557 37.1723 15.5557C37.1735 15.5557 37.1746 15.5557 37.1757 15.5557C37.1768 15.5557 37.1779 15.5557 37.179 15.5557C37.1801 15.5557 37.1812 15.5557 37.1823 15.5557C37.1834 15.5557 37.1845 15.5557 37.1856 15.5557C37.1866 15.5557 37.1877 15.5557 37.1888 15.5557C37.1898 15.5557 37.1909 15.5557 37.192 15.5557C37.193 15.5557 37.194 15.5557 37.1951 15.5557C37.1961 15.5557 37.1972 15.5557 37.1982 15.5557C37.1992 15.5557 37.2002 15.5557 37.2013 15.5557C37.2023 15.5557 37.2033 15.5557 37.2043 15.5557C37.2053 15.5557 37.2063 15.5557 37.2073 15.5557C37.2083 15.5557 37.2093 15.5557 37.2102 15.5557C37.2112 15.5557 37.2122 15.5557 37.2132 15.5557C37.2141 15.5557 37.2151 15.5557 37.2161 15.5557C37.217 15.5557 37.218 15.5557 37.2189 15.5557C37.2199 15.5557 37.2208 15.5557 37.2217 15.5557C37.2227 15.5557 37.2236 15.5557 37.2245 15.5557C37.2254 15.5557 37.2264 15.5557 37.2273 15.5557C37.2282 15.5557 37.2291 15.5557 37.23 15.5557C37.2309 15.5557 37.2318 15.5557 37.2327 15.5557C37.2336 15.5557 37.2344 15.5557 37.2353 15.5557C37.2362 15.5557 37.2371 15.5557 37.2379 15.5557C37.2388 15.5557 37.2397 15.5557 37.2405 15.5557C37.2414 15.5557 37.2422 15.5557 37.2431 15.5557C37.2439 15.5557 37.2448 15.5557 37.2456 15.5557C37.2464 15.5557 37.2473 15.5557 37.2481 15.5557C37.2489 15.5557 37.2497 15.5557 37.2505 15.5557C37.2514 15.5557 37.2522 15.5557 37.253 15.5557C37.2538 15.5557 37.2546 15.5557 37.2554 15.5557C37.2562 15.5557 37.2569 15.5557 37.2577 15.5557C37.2585 15.5557 37.2593 15.5557 37.2601 15.5557C37.2608 15.5557 37.2616 15.5557 37.2624 15.5557C37.2631 15.5557 37.2639 15.5557 37.2646 15.5557C37.2654 15.5557 37.2661 15.5557 37.2669 15.5557C37.2676 15.5557 37.2684 15.5557 37.2691 15.5557C37.2698 15.5557 37.2706 15.5557 37.2713 15.5557C37.272 15.5557 37.2727 15.5557 37.2734 15.5557C37.2742 15.5557 37.2749 15.5557 37.2756 15.5557C37.2763 15.5557 37.277 15.5557 37.2777 15.5557C37.2784 15.5557 37.2791 15.5557 37.2798 15.5557C37.2804 15.5557 37.2811 15.5557 37.2818 15.5557C37.2825 15.5557 37.2831 15.5557 37.2838 15.5557C37.2845 15.5557 37.2851 15.5557 37.2858 15.5557C37.2865 15.5557 37.2871 15.5557 37.2878 15.5557C37.2884 15.5557 37.2891 15.5557 37.2897 15.5557C37.2903 15.5557 37.291 15.5557 37.2916 15.5557C37.2922 15.5557 37.2929 15.5557 37.2935 15.5557C37.2941 15.5557 37.2947 15.5557 37.2954 15.5557C37.296 15.5557 37.2966 15.5557 37.2972 15.5557C37.2978 15.5557 37.2984 15.5557 37.299 15.5557C37.2996 15.5557 37.3002 15.5557 37.3008 15.5557C37.3014 15.5557 37.302 15.5557 37.3025 15.5557C37.3031 15.5557 37.3037 15.5557 37.3043 15.5557C37.3048 15.5557 37.3054 15.5557 37.306 15.5557C37.3065 15.5557 37.3071 15.5557 37.3077 15.5557C37.3082 15.5557 37.3088 15.5557 37.3093 15.5557C37.3099 15.5557 37.3104 15.5557 37.311 15.5557C37.3115 15.5557 37.312 15.5557 37.3126 15.5557C37.3131 15.5557 37.3136 15.5557 37.3142 15.5557C37.3147 15.5557 37.3152 15.5557 37.3157 15.5557C37.3163 15.5557 37.3168 15.5557 37.3173 15.5557C37.3178 15.5557 37.3183 15.5557 37.3188 15.5557C37.3193 15.5557 37.3198 15.5557 37.3203 15.5557C37.3208 15.5557 37.3213 15.5557 37.3218 15.5557C37.3223 15.5557 37.3228 15.5557 37.3233 15.5557C37.3237 15.5557 37.3242 15.5557 37.3247 15.5557C37.3252 15.5557 37.3256 15.5557 37.3261 15.5557C37.3266 15.5557 37.327 15.5557 37.3275 15.5557C37.328 15.5557 37.3284 15.5557 37.3289 15.5557C37.3293 15.5557 37.3298 15.5557 37.3302 15.5557C37.3307 15.5557 37.3311 15.5557 37.3316 15.5557C37.332 15.5557 37.3325 15.5557 37.3329 15.5557C37.3333 15.5557 37.3338 15.5557 37.3342 15.5557C37.3346 15.5557 37.3351 15.5557 37.3355 15.5557C37.3359 15.5557 37.3363 15.5557 37.3367 15.5557C37.3372 15.5557 37.3376 15.5557 37.338 15.5557C37.3384 15.5557 37.3388 15.5557 37.3392 15.5557C37.3396 15.5557 37.34 15.5557 37.3404 15.5557C37.3408 15.5557 37.3412 15.5557 37.3416 15.5557C37.342 15.5557 37.3424 15.5557 37.3428 15.5557C37.3432 15.5557 37.3435 15.5557 37.3439 15.5557C37.3443 15.5557 37.3447 15.5557 37.3451 15.5557C37.3454 15.5557 37.3458 15.5557 37.3462 15.5557C37.3466 15.5557 37.3469 15.5557 37.3473 15.5557C37.3477 15.5557 37.348 15.5557 37.3484 15.5557C37.3487 15.5557 37.3491 15.5557 37.3495 15.5557C37.3498 15.5557 37.3502 15.5557 37.3505 15.5557C37.3509 15.5557 37.3512 15.5557 37.3516 15.5557C37.3519 15.5557 37.3523 15.5557 37.3526 15.5557C37.3529 15.5557 37.3533 15.5557 37.3536 15.5557C37.3539 15.5557 37.3543 15.5557 37.3546 15.5557C37.3549 15.5557 37.3553 15.5557 37.3556 15.5557C37.3559 15.5557 37.3562 15.5557 37.3566 15.5557C37.3569 15.5557 37.3572 15.5557 37.3575 15.5557C37.3578 15.5557 37.3582 15.5557 37.3585 15.5557C37.3588 15.5557 37.3591 15.5557 37.3594 15.5557C37.3597 15.5557 37.36 15.5557 37.3603 15.5557C37.3606 15.5557 37.3609 15.5557 37.3612 15.5557C37.3615 15.5557 37.3618 15.5557 37.3621 15.5557C37.3624 15.5557 37.3627 15.5557 37.363 15.5557C37.3633 15.5557 37.3636 15.5557 37.3639 15.5557C37.3642 15.5557 37.3645 15.5557 37.3647 15.5557C37.365 15.5557 37.3653 15.5557 37.3656 15.5557C37.3659 15.5557 37.3661 15.5557 37.3664 15.5557C37.3667 15.5557 37.367 15.5557 37.3673 15.5557C37.3675 15.5557 37.3678 15.5557 37.3681 15.5557C37.3683 15.5557 37.3686 15.5557 37.3689 15.5557C37.3691 15.5557 37.3694 15.5557 37.3697 15.5557C37.3699 15.5557 37.3702 15.5557 37.3705 15.5557C37.3707 15.5557 37.371 15.5557 37.3712 15.5557C37.3715 15.5557 37.3718 15.5557 37.372 15.5557C37.3723 15.5557 37.3725 15.5557 37.3728 15.5557C37.373 15.5557 37.3733 15.5557 37.3735 15.5557C37.3738 15.5557 37.374 15.5557 37.3743 15.5557C37.3745 15.5557 37.3748 15.5557 37.375 15.5557C37.3752 15.5557 37.3755 15.5557 37.3757 15.5557C37.376 15.5557 37.3762 15.5557 37.3764 15.5557C37.3767 15.5557 37.3769 15.5557 37.3772 15.5557C37.3774 15.5557 37.3776 15.5557 37.3779 15.5557C37.3781 15.5557 37.3783 15.5557 37.3786 15.5557C37.3788 15.5557 37.379 15.5557 37.3793 15.5557C37.3795 15.5557 37.3797 15.5557 37.38 15.5557C37.3802 15.5557 37.3804 15.5557 37.3806 15.5557C37.3809 15.5557 37.3811 15.5557 37.3813 15.5557C37.3815 15.5557 37.3818 15.5557 37.382 15.5557C37.3822 15.5557 37.3824 15.5557 37.3827 15.5557C37.3829 15.5557 37.3831 15.5557 37.3833 15.5557C37.3835 15.5557 37.3838 15.5557 37.384 15.5557C37.3842 15.5557 37.3844 15.5557 37.3846 15.5557C37.3848 15.5557 37.3851 15.5557 37.3853 15.5557C37.3855 15.5557 37.3857 15.5557 37.3859 15.5557C37.3861 15.5557 37.3864 15.5557 37.3866 15.5557C37.3868 15.5557 37.387 15.5557 37.3872 15.5557C37.3874 15.5557 37.3876 15.5557 37.3878 15.5557C37.3881 15.5557 37.3883 15.5557 37.3885 15.5557C37.3887 15.5557 37.3889 15.5557 37.3891 15.5557C37.3893 15.5557 37.3895 15.5557 37.3897 15.5557C37.39 15.5557 37.3902 15.5557 37.3904 15.5557C37.3906 15.5557 37.3908 15.5557 37.391 15.5557C37.3912 15.5557 37.3914 15.5557 37.3916 15.5557C37.3918 15.5557 37.392 15.5557 37.3923 15.5557C37.3925 15.5557 37.3927 15.5557 37.3929 15.5557C37.3931 15.5557 37.3933 15.5557 37.3935 15.5557C37.3937 15.5557 37.3939 15.5557 37.3941 15.5557C37.3943 15.5557 37.3945 15.5557 37.3947 15.5557C37.395 15.5557 37.3952 15.5557 37.3954 15.5557C37.3956 15.5557 37.3958 15.5557 37.396 15.5557C37.3962 15.5557 37.3964 15.5557 37.3966 15.5557C37.3968 15.5557 37.397 15.5557 37.3972 15.5557C37.3975 15.5557 37.3977 15.5557 37.3979 15.5557C37.3981 15.5557 37.3983 15.5557 37.3985 15.5557C37.3987 15.5557 37.3989 15.5557 37.3991 15.5557C37.3994 15.5557 37.3996 15.5557 37.3998 15.5557C37.4 15.5557 37.4002 15.5557 37.4004 15.5557C37.4006 15.5557 37.4008 15.5557 37.4011 15.5557C37.4013 15.5557 37.4015 15.5557 37.4017 15.5557C37.4019 15.5557 37.4021 15.5557 37.4023 15.5557C37.4026 15.5557 37.4028 15.5557 37.403 15.5557C37.4032 15.5557 37.4034 15.5557 37.4036 15.5557C37.4039 15.5557 37.4041 15.5557 37.4043 15.5557C37.4045 15.5557 37.4047 15.5557 37.405 15.5557C37.4052 15.5557 37.4054 15.5557 37.4056 15.5557C37.4059 15.5557 37.4061 15.5557 37.4063 15.5557C37.4065 15.5557 37.4068 15.5557 37.407 15.5557C37.4072 15.5557 37.4074 15.5557 37.4077 15.5557C37.4079 15.5557 37.4081 15.5557 37.4084 15.5557C37.4086 15.5557 37.4088 15.5557 37.4091 15.5557C37.4093 15.5557 37.4095 15.5557 37.4098 15.5557C37.41 15.5557 37.4102 15.5557 37.4105 15.5557C37.4107 15.5557 37.4109 15.5557 37.4112 15.5557C37.4114 15.5557 37.4117 15.5557 37.4119 15.5557C37.4121 15.5557 37.4124 15.5557 37.4126 15.5557C37.4129 15.5557 37.4131 15.5557 37.4134 15.5557C37.4136 15.5557 37.4139 15.5557 37.4141 15.5557C37.4144 15.5557 37.4146 15.5557 37.4149 15.5557C37.4151 15.5557 37.4154 15.5557 37.4156 15.5557C37.4159 15.5557 37.4161 15.5557 37.4164 15.5557C37.4167 15.5557 37.4169 15.5557 37.4172 15.5557C37.4174 15.5557 37.4177 15.5557 37.418 15.5557C37.4182 15.5557 37.4185 15.5557 37.4188 15.5557C37.419 15.5557 37.4193 15.5557 37.4196 15.5557C37.4198 15.5557 37.4201 15.5557 37.4204 15.5557C37.4207 15.5557 37.4209 15.5557 37.4212 15.5557C37.4215 15.5557 37.4218 15.5557 37.4221 15.5557C37.4223 15.5557 37.4226 15.5557 37.4229 15.5557C37.4232 15.5557 37.4235 15.5557 37.4238 15.5557C37.4241 15.5557 37.4244 15.5557 37.4246 15.5557C37.4249 15.5557 37.4252 15.5557 37.4255 15.5557C37.4258 15.5557 37.4261 15.5557 37.4264 15.5557C37.4267 15.5557 37.427 15.5557 37.4273 15.5557C37.4276 15.5557 37.4279 15.5557 37.4283 15.5557C37.4286 15.5557 37.4289 15.5557 37.4292 15.5557C37.4295 15.5557 37.4298 15.5557 37.4301 15.5557C37.4305 15.5557 37.4308 15.5557 37.4311 15.5557C37.4314 15.5557 37.4317 15.5557 37.4321 15.5557C37.4324 15.5557 37.4327 15.5557 37.4331 15.5557C37.4334 15.5557 37.4337 15.5557 37.4341 15.5557C37.4344 15.5557 37.4347 15.5557 37.4351 15.5557C37.4354 15.5557 37.4358 15.5557 37.4361 15.5557C37.4364 15.5557 37.4368 15.5557 37.4371 15.5557C37.4375 15.5557 37.4379 15.5557 37.4382 15.5557C37.4386 15.5557 37.4389 15.5557 37.4393 15.5557C37.4396 15.5557 37.44 15.5557 37.4404 15.5557C37.4407 15.5557 37.4411 15.5557 37.4415 15.5557C37.4419 15.5557 37.4422 15.5557 37.4426 15.5557C37.443 15.5557 37.4434 15.5557 37.4437 15.5557C37.4441 15.5557 37.4445 15.5557 37.4449 15.5557C37.4453 15.5557 37.4457 15.5557 37.4461 15.5557C37.4465 15.5557 37.4469 15.5557 37.4473 15.5557C37.4477 15.5557 37.4481 15.5557 37.4485 15.5557C37.4489 15.5557 37.4493 15.5557 37.4497 15.5557C37.4501 15.5557 37.4505 15.5557 37.451 15.5557C37.4514 15.5557 37.4518 15.5557 37.4522 15.5557C37.4526 15.5557 37.4531 15.5557 37.4535 15.5557C37.4539 15.5557 37.4544 15.5557 37.4548 15.5557C37.4552 15.5557 37.4557 15.5557 37.4561 15.5557C37.4566 15.5557 37.457 15.5557 37.4575 15.5557C37.4579 15.5557 37.4584 15.5557 37.4588 15.5557C37.4593 15.5557 37.4597 15.5557 37.4602 15.5557C37.4607 15.5557 37.4611 15.5557 37.4616 15.5557C37.4621 15.5557 37.4625 15.5557 37.463 15.5557C37.4635 15.5557 37.464 15.5557 37.4645 15.5557C37.4649 15.5557 37.4654 15.5557 37.4659 15.5557C37.4664 15.5557 37.4669 15.5557 37.4674 15.5557C37.4679 15.5557 37.4684 15.5557 37.4689 15.5557C37.4694 15.5557 37.4699 15.5557 37.4704 15.5557C37.4709 15.5557 37.4715 15.5557 37.472 15.5557C37.4725 15.5557 37.473 15.5557 37.4736 15.5557C37.4741 15.5557 37.4746 15.5557 37.4752 15.5557C37.4757 15.5557 37.4762 15.5557 37.4768 15.5557C37.4773 15.5557 37.4779 15.5557 37.4784 15.5557C37.479 15.5557 37.4795 15.5557 37.4801 15.5557C37.4806 15.5557 37.4812 15.5557 37.4818 15.5557C37.4823 15.5557 37.4829 15.5557 37.4835 15.5557C37.484 15.5557 37.4846 15.5557 37.4852 15.5557C37.4858 15.5557 37.4864 15.5557 37.487 15.5557C37.4876 15.5557 37.4882 15.5557 37.4888 15.5557C37.4894 15.5557 37.49 15.5557 37.4906 15.5557C37.4912 15.5557 37.4918 15.5557 37.4924 15.5557C37.493 15.5557 37.4936 15.5557 37.4943 15.5557C37.4949 15.5557 37.4955 15.5557 37.4961 15.5557C37.4968 15.5557 37.4974 15.5557 37.4981 15.5557C37.4987 15.5557 37.4993 15.5557 37.5 15.5557V17.5557C37.4993 17.5557 37.4987 17.5557 37.4981 17.5557C37.4974 17.5557 37.4968 17.5557 37.4961 17.5557C37.4955 17.5557 37.4949 17.5557 37.4943 17.5557C37.4936 17.5557 37.493 17.5557 37.4924 17.5557C37.4918 17.5557 37.4912 17.5557 37.4906 17.5557C37.49 17.5557 37.4894 17.5557 37.4888 17.5557C37.4882 17.5557 37.4876 17.5557 37.487 17.5557C37.4864 17.5557 37.4858 17.5557 37.4852 17.5557C37.4846 17.5557 37.484 17.5557 37.4835 17.5557C37.4829 17.5557 37.4823 17.5557 37.4818 17.5557C37.4812 17.5557 37.4806 17.5557 37.4801 17.5557C37.4795 17.5557 37.479 17.5557 37.4784 17.5557C37.4779 17.5557 37.4773 17.5557 37.4768 17.5557C37.4762 17.5557 37.4757 17.5557 37.4752 17.5557C37.4746 17.5557 37.4741 17.5557 37.4736 17.5557C37.473 17.5557 37.4725 17.5557 37.472 17.5557C37.4715 17.5557 37.4709 17.5557 37.4704 17.5557C37.4699 17.5557 37.4694 17.5557 37.4689 17.5557C37.4684 17.5557 37.4679 17.5557 37.4674 17.5557C37.4669 17.5557 37.4664 17.5557 37.4659 17.5557C37.4654 17.5557 37.4649 17.5557 37.4645 17.5557C37.464 17.5557 37.4635 17.5557 37.463 17.5557C37.4625 17.5557 37.4621 17.5557 37.4616 17.5557C37.4611 17.5557 37.4607 17.5557 37.4602 17.5557C37.4597 17.5557 37.4593 17.5557 37.4588 17.5557C37.4584 17.5557 37.4579 17.5557 37.4575 17.5557C37.457 17.5557 37.4566 17.5557 37.4561 17.5557C37.4557 17.5557 37.4552 17.5557 37.4548 17.5557C37.4544 17.5557 37.4539 17.5557 37.4535 17.5557C37.4531 17.5557 37.4526 17.5557 37.4522 17.5557C37.4518 17.5557 37.4514 17.5557 37.451 17.5557C37.4505 17.5557 37.4501 17.5557 37.4497 17.5557C37.4493 17.5557 37.4489 17.5557 37.4485 17.5557C37.4481 17.5557 37.4477 17.5557 37.4473 17.5557C37.4469 17.5557 37.4465 17.5557 37.4461 17.5557C37.4457 17.5557 37.4453 17.5557 37.4449 17.5557C37.4445 17.5557 37.4441 17.5557 37.4437 17.5557C37.4434 17.5557 37.443 17.5557 37.4426 17.5557C37.4422 17.5557 37.4419 17.5557 37.4415 17.5557C37.4411 17.5557 37.4407 17.5557 37.4404 17.5557C37.44 17.5557 37.4396 17.5557 37.4393 17.5557C37.4389 17.5557 37.4386 17.5557 37.4382 17.5557C37.4379 17.5557 37.4375 17.5557 37.4371 17.5557C37.4368 17.5557 37.4364 17.5557 37.4361 17.5557C37.4358 17.5557 37.4354 17.5557 37.4351 17.5557C37.4347 17.5557 37.4344 17.5557 37.4341 17.5557C37.4337 17.5557 37.4334 17.5557 37.4331 17.5557C37.4327 17.5557 37.4324 17.5557 37.4321 17.5557C37.4317 17.5557 37.4314 17.5557 37.4311 17.5557C37.4308 17.5557 37.4305 17.5557 37.4301 17.5557C37.4298 17.5557 37.4295 17.5557 37.4292 17.5557C37.4289 17.5557 37.4286 17.5557 37.4283 17.5557C37.4279 17.5557 37.4276 17.5557 37.4273 17.5557C37.427 17.5557 37.4267 17.5557 37.4264 17.5557C37.4261 17.5557 37.4258 17.5557 37.4255 17.5557C37.4252 17.5557 37.4249 17.5557 37.4246 17.5557C37.4244 17.5557 37.4241 17.5557 37.4238 17.5557C37.4235 17.5557 37.4232 17.5557 37.4229 17.5557C37.4226 17.5557 37.4223 17.5557 37.4221 17.5557C37.4218 17.5557 37.4215 17.5557 37.4212 17.5557C37.4209 17.5557 37.4207 17.5557 37.4204 17.5557C37.4201 17.5557 37.4198 17.5557 37.4196 17.5557C37.4193 17.5557 37.419 17.5557 37.4188 17.5557C37.4185 17.5557 37.4182 17.5557 37.418 17.5557C37.4177 17.5557 37.4174 17.5557 37.4172 17.5557C37.4169 17.5557 37.4167 17.5557 37.4164 17.5557C37.4161 17.5557 37.4159 17.5557 37.4156 17.5557C37.4154 17.5557 37.4151 17.5557 37.4149 17.5557C37.4146 17.5557 37.4144 17.5557 37.4141 17.5557C37.4139 17.5557 37.4136 17.5557 37.4134 17.5557C37.4131 17.5557 37.4129 17.5557 37.4126 17.5557C37.4124 17.5557 37.4121 17.5557 37.4119 17.5557C37.4117 17.5557 37.4114 17.5557 37.4112 17.5557C37.4109 17.5557 37.4107 17.5557 37.4105 17.5557C37.4102 17.5557 37.41 17.5557 37.4098 17.5557C37.4095 17.5557 37.4093 17.5557 37.4091 17.5557C37.4088 17.5557 37.4086 17.5557 37.4084 17.5557C37.4081 17.5557 37.4079 17.5557 37.4077 17.5557C37.4074 17.5557 37.4072 17.5557 37.407 17.5557C37.4068 17.5557 37.4065 17.5557 37.4063 17.5557C37.4061 17.5557 37.4059 17.5557 37.4056 17.5557C37.4054 17.5557 37.4052 17.5557 37.405 17.5557C37.4047 17.5557 37.4045 17.5557 37.4043 17.5557C37.4041 17.5557 37.4039 17.5557 37.4036 17.5557C37.4034 17.5557 37.4032 17.5557 37.403 17.5557C37.4028 17.5557 37.4026 17.5557 37.4023 17.5557C37.4021 17.5557 37.4019 17.5557 37.4017 17.5557C37.4015 17.5557 37.4013 17.5557 37.4011 17.5557C37.4008 17.5557 37.4006 17.5557 37.4004 17.5557C37.4002 17.5557 37.4 17.5557 37.3998 17.5557C37.3996 17.5557 37.3994 17.5557 37.3991 17.5557C37.3989 17.5557 37.3987 17.5557 37.3985 17.5557C37.3983 17.5557 37.3981 17.5557 37.3979 17.5557C37.3977 17.5557 37.3975 17.5557 37.3972 17.5557C37.397 17.5557 37.3968 17.5557 37.3966 17.5557C37.3964 17.5557 37.3962 17.5557 37.396 17.5557C37.3958 17.5557 37.3956 17.5557 37.3954 17.5557C37.3952 17.5557 37.395 17.5557 37.3947 17.5557C37.3945 17.5557 37.3943 17.5557 37.3941 17.5557C37.3939 17.5557 37.3937 17.5557 37.3935 17.5557C37.3933 17.5557 37.3931 17.5557 37.3929 17.5557C37.3927 17.5557 37.3925 17.5557 37.3923 17.5557C37.392 17.5557 37.3918 17.5557 37.3916 17.5557C37.3914 17.5557 37.3912 17.5557 37.391 17.5557C37.3908 17.5557 37.3906 17.5557 37.3904 17.5557C37.3902 17.5557 37.39 17.5557 37.3897 17.5557C37.3895 17.5557 37.3893 17.5557 37.3891 17.5557C37.3889 17.5557 37.3887 17.5557 37.3885 17.5557C37.3883 17.5557 37.3881 17.5557 37.3878 17.5557C37.3876 17.5557 37.3874 17.5557 37.3872 17.5557C37.387 17.5557 37.3868 17.5557 37.3866 17.5557C37.3864 17.5557 37.3861 17.5557 37.3859 17.5557C37.3857 17.5557 37.3855 17.5557 37.3853 17.5557C37.3851 17.5557 37.3848 17.5557 37.3846 17.5557C37.3844 17.5557 37.3842 17.5557 37.384 17.5557C37.3838 17.5557 37.3835 17.5557 37.3833 17.5557C37.3831 17.5557 37.3829 17.5557 37.3827 17.5557C37.3824 17.5557 37.3822 17.5557 37.382 17.5557C37.3818 17.5557 37.3815 17.5557 37.3813 17.5557C37.3811 17.5557 37.3809 17.5557 37.3806 17.5557C37.3804 17.5557 37.3802 17.5557 37.38 17.5557C37.3797 17.5557 37.3795 17.5557 37.3793 17.5557C37.379 17.5557 37.3788 17.5557 37.3786 17.5557C37.3783 17.5557 37.3781 17.5557 37.3779 17.5557C37.3776 17.5557 37.3774 17.5557 37.3772 17.5557C37.3769 17.5557 37.3767 17.5557 37.3764 17.5557C37.3762 17.5557 37.376 17.5557 37.3757 17.5557C37.3755 17.5557 37.3752 17.5557 37.375 17.5557C37.3748 17.5557 37.3745 17.5557 37.3743 17.5557C37.374 17.5557 37.3738 17.5557 37.3735 17.5557C37.3733 17.5557 37.373 17.5557 37.3728 17.5557C37.3725 17.5557 37.3723 17.5557 37.372 17.5557C37.3718 17.5557 37.3715 17.5557 37.3712 17.5557C37.371 17.5557 37.3707 17.5557 37.3705 17.5557C37.3702 17.5557 37.3699 17.5557 37.3697 17.5557C37.3694 17.5557 37.3691 17.5557 37.3689 17.5557C37.3686 17.5557 37.3683 17.5557 37.3681 17.5557C37.3678 17.5557 37.3675 17.5557 37.3673 17.5557C37.367 17.5557 37.3667 17.5557 37.3664 17.5557C37.3661 17.5557 37.3659 17.5557 37.3656 17.5557C37.3653 17.5557 37.365 17.5557 37.3647 17.5557C37.3645 17.5557 37.3642 17.5557 37.3639 17.5557C37.3636 17.5557 37.3633 17.5557 37.363 17.5557C37.3627 17.5557 37.3624 17.5557 37.3621 17.5557C37.3618 17.5557 37.3615 17.5557 37.3612 17.5557C37.3609 17.5557 37.3606 17.5557 37.3603 17.5557C37.36 17.5557 37.3597 17.5557 37.3594 17.5557C37.3591 17.5557 37.3588 17.5557 37.3585 17.5557C37.3582 17.5557 37.3578 17.5557 37.3575 17.5557C37.3572 17.5557 37.3569 17.5557 37.3566 17.5557C37.3562 17.5557 37.3559 17.5557 37.3556 17.5557C37.3553 17.5557 37.3549 17.5557 37.3546 17.5557C37.3543 17.5557 37.3539 17.5557 37.3536 17.5557C37.3533 17.5557 37.3529 17.5557 37.3526 17.5557C37.3523 17.5557 37.3519 17.5557 37.3516 17.5557C37.3512 17.5557 37.3509 17.5557 37.3505 17.5557C37.3502 17.5557 37.3498 17.5557 37.3495 17.5557C37.3491 17.5557 37.3487 17.5557 37.3484 17.5557C37.348 17.5557 37.3477 17.5557 37.3473 17.5557C37.3469 17.5557 37.3466 17.5557 37.3462 17.5557C37.3458 17.5557 37.3454 17.5557 37.3451 17.5557C37.3447 17.5557 37.3443 17.5557 37.3439 17.5557C37.3435 17.5557 37.3432 17.5557 37.3428 17.5557C37.3424 17.5557 37.342 17.5557 37.3416 17.5557C37.3412 17.5557 37.3408 17.5557 37.3404 17.5557C37.34 17.5557 37.3396 17.5557 37.3392 17.5557C37.3388 17.5557 37.3384 17.5557 37.338 17.5557C37.3376 17.5557 37.3372 17.5557 37.3367 17.5557C37.3363 17.5557 37.3359 17.5557 37.3355 17.5557C37.3351 17.5557 37.3346 17.5557 37.3342 17.5557C37.3338 17.5557 37.3333 17.5557 37.3329 17.5557C37.3325 17.5557 37.332 17.5557 37.3316 17.5557C37.3311 17.5557 37.3307 17.5557 37.3302 17.5557C37.3298 17.5557 37.3293 17.5557 37.3289 17.5557C37.3284 17.5557 37.328 17.5557 37.3275 17.5557C37.327 17.5557 37.3266 17.5557 37.3261 17.5557C37.3256 17.5557 37.3252 17.5557 37.3247 17.5557C37.3242 17.5557 37.3237 17.5557 37.3233 17.5557C37.3228 17.5557 37.3223 17.5557 37.3218 17.5557C37.3213 17.5557 37.3208 17.5557 37.3203 17.5557C37.3198 17.5557 37.3193 17.5557 37.3188 17.5557C37.3183 17.5557 37.3178 17.5557 37.3173 17.5557C37.3168 17.5557 37.3163 17.5557 37.3157 17.5557C37.3152 17.5557 37.3147 17.5557 37.3142 17.5557C37.3136 17.5557 37.3131 17.5557 37.3126 17.5557C37.312 17.5557 37.3115 17.5557 37.311 17.5557C37.3104 17.5557 37.3099 17.5557 37.3093 17.5557C37.3088 17.5557 37.3082 17.5557 37.3077 17.5557C37.3071 17.5557 37.3065 17.5557 37.306 17.5557C37.3054 17.5557 37.3048 17.5557 37.3043 17.5557C37.3037 17.5557 37.3031 17.5557 37.3025 17.5557C37.302 17.5557 37.3014 17.5557 37.3008 17.5557C37.3002 17.5557 37.2996 17.5557 37.299 17.5557C37.2984 17.5557 37.2978 17.5557 37.2972 17.5557C37.2966 17.5557 37.296 17.5557 37.2954 17.5557C37.2947 17.5557 37.2941 17.5557 37.2935 17.5557C37.2929 17.5557 37.2922 17.5557 37.2916 17.5557C37.291 17.5557 37.2903 17.5557 37.2897 17.5557C37.2891 17.5557 37.2884 17.5557 37.2878 17.5557C37.2871 17.5557 37.2865 17.5557 37.2858 17.5557C37.2851 17.5557 37.2845 17.5557 37.2838 17.5557C37.2831 17.5557 37.2825 17.5557 37.2818 17.5557C37.2811 17.5557 37.2804 17.5557 37.2798 17.5557C37.2791 17.5557 37.2784 17.5557 37.2777 17.5557C37.277 17.5557 37.2763 17.5557 37.2756 17.5557C37.2749 17.5557 37.2742 17.5557 37.2734 17.5557C37.2727 17.5557 37.272 17.5557 37.2713 17.5557C37.2706 17.5557 37.2698 17.5557 37.2691 17.5557C37.2684 17.5557 37.2676 17.5557 37.2669 17.5557C37.2661 17.5557 37.2654 17.5557 37.2646 17.5557C37.2639 17.5557 37.2631 17.5557 37.2624 17.5557C37.2616 17.5557 37.2608 17.5557 37.2601 17.5557C37.2593 17.5557 37.2585 17.5557 37.2577 17.5557C37.2569 17.5557 37.2562 17.5557 37.2554 17.5557C37.2546 17.5557 37.2538 17.5557 37.253 17.5557C37.2522 17.5557 37.2514 17.5557 37.2505 17.5557C37.2497 17.5557 37.2489 17.5557 37.2481 17.5557C37.2473 17.5557 37.2464 17.5557 37.2456 17.5557C37.2448 17.5557 37.2439 17.5557 37.2431 17.5557C37.2422 17.5557 37.2414 17.5557 37.2405 17.5557C37.2397 17.5557 37.2388 17.5557 37.2379 17.5557C37.2371 17.5557 37.2362 17.5557 37.2353 17.5557C37.2344 17.5557 37.2336 17.5557 37.2327 17.5557C37.2318 17.5557 37.2309 17.5557 37.23 17.5557C37.2291 17.5557 37.2282 17.5557 37.2273 17.5557C37.2264 17.5557 37.2254 17.5557 37.2245 17.5557C37.2236 17.5557 37.2227 17.5557 37.2217 17.5557C37.2208 17.5557 37.2199 17.5557 37.2189 17.5557C37.218 17.5557 37.217 17.5557 37.2161 17.5557C37.2151 17.5557 37.2141 17.5557 37.2132 17.5557C37.2122 17.5557 37.2112 17.5557 37.2102 17.5557C37.2093 17.5557 37.2083 17.5557 37.2073 17.5557C37.2063 17.5557 37.2053 17.5557 37.2043 17.5557C37.2033 17.5557 37.2023 17.5557 37.2013 17.5557C37.2002 17.5557 37.1992 17.5557 37.1982 17.5557C37.1972 17.5557 37.1961 17.5557 37.1951 17.5557C37.194 17.5557 37.193 17.5557 37.192 17.5557C37.1909 17.5557 37.1898 17.5557 37.1888 17.5557C37.1877 17.5557 37.1866 17.5557 37.1856 17.5557C37.1845 17.5557 37.1834 17.5557 37.1823 17.5557C37.1812 17.5557 37.1801 17.5557 37.179 17.5557C37.1779 17.5557 37.1768 17.5557 37.1757 17.5557C37.1746 17.5557 37.1735 17.5557 37.1723 17.5557C37.1712 17.5557 37.1701 17.5557 37.1689 17.5557C37.1678 17.5557 37.1666 17.5557 37.1655 17.5557C37.1643 17.5557 37.1632 17.5557 37.162 17.5557C37.1608 17.5557 37.1597 17.5557 37.1585 17.5557C37.1573 17.5557 37.1561 17.5557 37.1549 17.5557C37.1537 17.5557 37.1525 17.5557 37.1513 17.5557C37.1501 17.5557 37.1489 17.5557 37.1477 17.5557C37.1465 17.5557 37.1452 17.5557 37.144 17.5557C37.1428 17.5557 37.1415 17.5557 37.1403 17.5557C37.139 17.5557 37.1378 17.5557 37.1365 17.5557C37.1353 17.5557 37.134 17.5557 37.1327 17.5557C37.1315 17.5557 37.1302 17.5557 37.1289 17.5557C37.1276 17.5557 37.1263 17.5557 37.125 17.5557C37.1237 17.5557 37.1224 17.5557 37.1211 17.5557C37.1198 17.5557 37.1184 17.5557 37.1171 17.5557C37.1158 17.5557 37.1144 17.5557 37.1131 17.5557C37.1117 17.5557 37.1104 17.5557 37.109 17.5557C37.1077 17.5557 37.1063 17.5557 37.1049 17.5557C37.1036 17.5557 37.1022 17.5557 37.1008 17.5557C37.0994 17.5557 37.098 17.5557 37.0966 17.5557C37.0952 17.5557 37.0938 17.5557 37.0924 17.5557C37.091 17.5557 37.0895 17.5557 37.0881 17.5557C37.0867 17.5557 37.0852 17.5557 37.0838 17.5557C37.0823 17.5557 37.0809 17.5557 37.0794 17.5557C37.078 17.5557 37.0765 17.5557 37.075 17.5557C37.0735 17.5557 37.0721 17.5557 37.0706 17.5557C37.0691 17.5557 37.0676 17.5557 37.0661 17.5557C37.0646 17.5557 37.0631 17.5557 37.0615 17.5557C37.06 17.5557 37.0585 17.5557 37.0569 17.5557C37.0554 17.5557 37.0539 17.5557 37.0523 17.5557C37.0508 17.5557 37.0492 17.5557 37.0476 17.5557C37.0461 17.5557 37.0445 17.5557 37.0429 17.5557C37.0413 17.5557 37.0397 17.5557 37.0381 17.5557C37.0365 17.5557 37.0349 17.5557 37.0333 17.5557C37.0317 17.5557 37.0301 17.5557 37.0284 17.5557C37.0268 17.5557 37.0252 17.5557 37.0235 17.5557C37.0219 17.5557 37.0202 17.5557 37.0185 17.5557C37.0169 17.5557 37.0152 17.5557 37.0135 17.5557C37.0119 17.5557 37.0102 17.5557 37.0085 17.5557C37.0068 17.5557 37.0051 17.5557 37.0034 17.5557C37.0016 17.5557 36.9999 17.5557 36.9982 17.5557C36.9965 17.5557 36.9947 17.5557 36.993 17.5557C36.9912 17.5557 36.9895 17.5557 36.9877 17.5557C36.986 17.5557 36.9842 17.5557 36.9824 17.5557C36.9806 17.5557 36.9788 17.5557 36.9771 17.5557C36.9753 17.5557 36.9735 17.5557 36.9716 17.5557C36.9698 17.5557 36.968 17.5557 36.9662 17.5557C36.9643 17.5557 36.9625 17.5557 36.9607 17.5557C36.9588 17.5557 36.957 17.5557 36.9551 17.5557C36.9532 17.5557 36.9514 17.5557 36.9495 17.5557C36.9476 17.5557 36.9457 17.5557 36.9438 17.5557C36.9419 17.5557 36.94 17.5557 36.9381 17.5557C36.9362 17.5557 36.9343 17.5557 36.9323 17.5557C36.9304 17.5557 36.9284 17.5557 36.9265 17.5557C36.9245 17.5557 36.9226 17.5557 36.9206 17.5557C36.9186 17.5557 36.9167 17.5557 36.9147 17.5557C36.9127 17.5557 36.9107 17.5557 36.9087 17.5557C36.9067 17.5557 36.9047 17.5557 36.9027 17.5557C36.9006 17.5557 36.8986 17.5557 36.8966 17.5557C36.8945 17.5557 36.8925 17.5557 36.8904 17.5557C36.8884 17.5557 36.8863 17.5557 36.8842 17.5557C36.8821 17.5557 36.8801 17.5557 36.878 17.5557C36.8759 17.5557 36.8738 17.5557 36.8716 17.5557C36.8695 17.5557 36.8674 17.5557 36.8653 17.5557C36.8631 17.5557 36.861 17.5557 36.8589 17.5557C36.8567 17.5557 36.8545 17.5557 36.8524 17.5557C36.8502 17.5557 36.848 17.5557 36.8458 17.5557C36.8437 17.5557 36.8415 17.5557 36.8393 17.5557C36.837 17.5557 36.8348 17.5557 36.8326 17.5557C36.8304 17.5557 36.8281 17.5557 36.8259 17.5557C36.8237 17.5557 36.8214 17.5557 36.8191 17.5557C36.8169 17.5557 36.8146 17.5557 36.8123 17.5557C36.81 17.5557 36.8077 17.5557 36.8054 17.5557C36.8031 17.5557 36.8008 17.5557 36.7985 17.5557C36.7962 17.5557 36.7938 17.5557 36.7915 17.5557C36.7892 17.5557 36.7868 17.5557 36.7845 17.5557C36.7821 17.5557 36.7797 17.5557 36.7773 17.5557C36.775 17.5557 36.7726 17.5557 36.7702 17.5557C36.7678 17.5557 36.7654 17.5557 36.7629 17.5557C36.7605 17.5557 36.7581 17.5557 36.7557 17.5557C36.7532 17.5557 36.7508 17.5557 36.7483 17.5557C36.7458 17.5557 36.7434 17.5557 36.7409 17.5557C36.7384 17.5557 36.7359 17.5557 36.7334 17.5557C36.7309 17.5557 36.7284 17.5557 36.7259 17.5557C36.7234 17.5557 36.7208 17.5557 36.7183 17.5557C36.7158 17.5557 36.7132 17.5557 36.7106 17.5557C36.7081 17.5557 36.7055 17.5557 36.7029 17.5557C36.7003 17.5557 36.6978 17.5557 36.6952 17.5557C36.6926 17.5557 36.6899 17.5557 36.6873 17.5557C36.6847 17.5557 36.6821 17.5557 36.6794 17.5557C36.6768 17.5557 36.6741 17.5557 36.6715 17.5557C36.6688 17.5557 36.6661 17.5557 36.6634 17.5557C36.6607 17.5557 36.658 17.5557 36.6553 17.5557C36.6526 17.5557 36.6499 17.5557 36.6472 17.5557C36.6445 17.5557 36.6417 17.5557 36.639 17.5557C36.6362 17.5557 36.6335 17.5557 36.6307 17.5557C36.6279 17.5557 36.6251 17.5557 36.6223 17.5557C36.6195 17.5557 36.6167 17.5557 36.6139 17.5557C36.6111 17.5557 36.6083 17.5557 36.6055 17.5557C36.6026 17.5557 36.5998 17.5557 36.5969 17.5557C36.5941 17.5557 36.5912 17.5557 36.5883 17.5557C36.5854 17.5557 36.5825 17.5557 36.5796 17.5557C36.5767 17.5557 36.5738 17.5557 36.5709 17.5557C36.568 17.5557 36.565 17.5557 36.5621 17.5557C36.5592 17.5557 36.5562 17.5557 36.5532 17.5557C36.5503 17.5557 36.5473 17.5557 36.5443 17.5557C36.5413 17.5557 36.5383 17.5557 36.5353 17.5557C36.5323 17.5557 36.5293 17.5557 36.5262 17.5557C36.5232 17.5557 36.5201 17.5557 36.5171 17.5557C36.514 17.5557 36.511 17.5557 36.5079 17.5557C36.5048 17.5557 36.5017 17.5557 36.4986 17.5557C36.4955 17.5557 36.4924 17.5557 36.4893 17.5557C36.4861 17.5557 36.483 17.5557 36.4799 17.5557C36.4767 17.5557 36.4736 17.5557 36.4704 17.5557C36.4672 17.5557 36.464 17.5557 36.4608 17.5557C36.4576 17.5557 36.4544 17.5557 36.4512 17.5557C36.448 17.5557 36.4448 17.5557 36.4415 17.5557C36.4383 17.5557 36.435 17.5557 36.4318 17.5557C36.4285 17.5557 36.4252 17.5557 36.422 17.5557C36.4187 17.5557 36.4154 17.5557 36.4121 17.5557C36.4087 17.5557 36.4054 17.5557 36.4021 17.5557C36.3988 17.5557 36.3954 17.5557 36.3921 17.5557C36.3887 17.5557 36.3853 17.5557 36.3819 17.5557C36.3786 17.5557 36.3752 17.5557 36.3718 17.5557C36.3684 17.5557 36.3649 17.5557 36.3615 17.5557C36.3581 17.5557 36.3546 17.5557 36.3512 17.5557C36.3477 17.5557 36.3443 17.5557 36.3408 17.5557C36.3373 17.5557 36.3338 17.5557 36.3303 17.5557C36.3268 17.5557 36.3233 17.5557 36.3198 17.5557C36.3163 17.5557 36.3127 17.5557 36.3092 17.5557C36.3056 17.5557 36.3021 17.5557 36.2985 17.5557C36.2949 17.5557 36.2913 17.5557 36.2877 17.5557C36.2841 17.5557 36.2805 17.5557 36.2769 17.5557C36.2733 17.5557 36.2696 17.5557 36.266 17.5557C36.2623 17.5557 36.2587 17.5557 36.255 17.5557C36.2513 17.5557 36.2476 17.5557 36.2439 17.5557C36.2402 17.5557 36.2365 17.5557 36.2328 17.5557C36.2291 17.5557 36.2253 17.5557 36.2216 17.5557C36.2178 17.5557 36.2141 17.5557 36.2103 17.5557C36.2065 17.5557 36.2027 17.5557 36.1989 17.5557C36.1951 17.5557 36.1913 17.5557 36.1875 17.5557C36.1837 17.5557 36.1798 17.5557 36.176 17.5557C36.1721 17.5557 36.1683 17.5557 36.1644 17.5557C36.1605 17.5557 36.1566 17.5557 36.1527 17.5557C36.1488 17.5557 36.1449 17.5557 36.141 17.5557C36.1371 17.5557 36.1331 17.5557 36.1292 17.5557C36.1252 17.5557 36.1212 17.5557 36.1173 17.5557C36.1133 17.5557 36.1093 17.5557 36.1053 17.5557C36.1013 17.5557 36.0973 17.5557 36.0932 17.5557C36.0892 17.5557 36.0852 17.5557 36.0811 17.5557C36.077 17.5557 36.073 17.5557 36.0689 17.5557C36.0648 17.5557 36.0607 17.5557 36.0566 17.5557C36.0525 17.5557 36.0484 17.5557 36.0442 17.5557C36.0401 17.5557 36.0359 17.5557 36.0318 17.5557C36.0276 17.5557 36.0234 17.5557 36.0193 17.5557C36.0151 17.5557 36.0109 17.5557 36.0066 17.5557C36.0024 17.5557 35.9982 17.5557 35.994 17.5557C35.9897 17.5557 35.9855 17.5557 35.9812 17.5557C35.9769 17.5557 35.9726 17.5557 35.9683 17.5557C35.964 17.5557 35.9597 17.5557 35.9554 17.5557C35.9511 17.5557 35.9467 17.5557 35.9424 17.5557C35.938 17.5557 35.9337 17.5557 35.9293 17.5557C35.9249 17.5557 35.9205 17.5557 35.9161 17.5557C35.9117 17.5557 35.9073 17.5557 35.9029 17.5557C35.8984 17.5557 35.894 17.5557 35.8895 17.5557C35.8851 17.5557 35.8806 17.5557 35.8761 17.5557C35.8716 17.5557 35.8671 17.5557 35.8626 17.5557C35.8581 17.5557 35.8535 17.5557 35.849 17.5557C35.8445 17.5557 35.8399 17.5557 35.8353 17.5557C35.8307 17.5557 35.8262 17.5557 35.8216 17.5557C35.817 17.5557 35.8124 17.5557 35.8077 17.5557C35.8031 17.5557 35.7985 17.5557 35.7938 17.5557C35.7891 17.5557 35.7845 17.5557 35.7798 17.5557C35.7751 17.5557 35.7704 17.5557 35.7657 17.5557C35.761 17.5557 35.7563 17.5557 35.7515 17.5557C35.7468 17.5557 35.742 17.5557 35.7372 17.5557C35.7325 17.5557 35.7277 17.5557 35.7229 17.5557C35.7181 17.5557 35.7133 17.5557 35.7085 17.5557C35.7036 17.5557 35.6988 17.5557 35.6939 17.5557C35.6891 17.5557 35.6842 17.5557 35.6793 17.5557C35.6744 17.5557 35.6695 17.5557 35.6646 17.5557C35.6597 17.5557 35.6548 17.5557 35.6498 17.5557C35.6449 17.5557 35.6399 17.5557 35.635 17.5557C35.63 17.5557 35.625 17.5557 35.62 17.5557C35.615 17.5557 35.61 17.5557 35.605 17.5557C35.5999 17.5557 35.5949 17.5557 35.5898 17.5557C35.5848 17.5557 35.5797 17.5557 35.5746 17.5557C35.5695 17.5557 35.5644 17.5557 35.5593 17.5557C35.5542 17.5557 35.549 17.5557 35.5439 17.5557C35.5387 17.5557 35.5336 17.5557 35.5284 17.5557C35.5232 17.5557 35.518 17.5557 35.5128 17.5557C35.5076 17.5557 35.5024 17.5557 35.4971 17.5557C35.4919 17.5557 35.4867 17.5557 35.4814 17.5557C35.4761 17.5557 35.4708 17.5557 35.4655 17.5557C35.4602 17.5557 35.4549 17.5557 35.4496 17.5557C35.4443 17.5557 35.4389 17.5557 35.4336 17.5557C35.4282 17.5557 35.4228 17.5557 35.4174 17.5557C35.4121 17.5557 35.4066 17.5557 35.4012 17.5557C35.3958 17.5557 35.3904 17.5557 35.3849 17.5557C35.3795 17.5557 35.374 17.5557 35.3685 17.5557C35.363 17.5557 35.3575 17.5557 35.352 17.5557C35.3465 17.5557 35.341 17.5557 35.3355 17.5557C35.3299 17.5557 35.3244 17.5557 35.3188 17.5557C35.3132 17.5557 35.3076 17.5557 35.302 17.5557C35.2964 17.5557 35.2908 17.5557 35.2852 17.5557C35.2795 17.5557 35.2739 17.5557 35.2682 17.5557C35.2625 17.5557 35.2569 17.5557 35.2512 17.5557C35.2455 17.5557 35.2397 17.5557 35.234 17.5557C35.2283 17.5557 35.2225 17.5557 35.2168 17.5557C35.211 17.5557 35.2052 17.5557 35.1994 17.5557C35.1937 17.5557 35.1878 17.5557 35.182 17.5557C35.1762 17.5557 35.1704 17.5557 35.1645 17.5557C35.1586 17.5557 35.1528 17.5557 35.1469 17.5557C35.141 17.5557 35.1351 17.5557 35.1292 17.5557C35.1233 17.5557 35.1173 17.5557 35.1114 17.5557C35.1054 17.5557 35.0995 17.5557 35.0935 17.5557C35.0875 17.5557 35.0815 17.5557 35.0755 17.5557C35.0695 17.5557 35.0634 17.5557 35.0574 17.5557C35.0513 17.5557 35.0453 17.5557 35.0392 17.5557C35.0331 17.5557 35.027 17.5557 35.0209 17.5557C35.0148 17.5557 35.0086 17.5557 35.0025 17.5557C34.9964 17.5557 34.9902 17.5557 34.984 17.5557C34.9778 17.5557 34.9716 17.5557 34.9654 17.5557C34.9592 17.5557 34.953 17.5557 34.9468 17.5557C34.9405 17.5557 34.9342 17.5557 34.928 17.5557C34.9217 17.5557 34.9154 17.5557 34.9091 17.5557C34.9028 17.5557 34.8965 17.5557 34.8901 17.5557C34.8838 17.5557 34.8774 17.5557 34.871 17.5557C34.8647 17.5557 34.8583 17.5557 34.8519 17.5557C34.8455 17.5557 34.839 17.5557 34.8326 17.5557C34.8261 17.5557 34.8197 17.5557 34.8132 17.5557C34.8067 17.5557 34.8002 17.5557 34.7937 17.5557C34.7872 17.5557 34.7807 17.5557 34.7741 17.5557C34.7676 17.5557 34.761 17.5557 34.7545 17.5557C34.7479 17.5557 34.7413 17.5557 34.7347 17.5557C34.7281 17.5557 34.7215 17.5557 34.7148 17.5557C34.7082 17.5557 34.7015 17.5557 34.6948 17.5557C34.6881 17.5557 34.6814 17.5557 34.6747 17.5557C34.668 17.5557 34.6613 17.5557 34.6546 17.5557C34.6478 17.5557 34.641 17.5557 34.6343 17.5557C34.6275 17.5557 34.6207 17.5557 34.6139 17.5557C34.607 17.5557 34.6002 17.5557 34.5934 17.5557C34.5865 17.5557 34.5797 17.5557 34.5728 17.5557C34.5659 17.5557 34.559 17.5557 34.5521 17.5557C34.5451 17.5557 34.5382 17.5557 34.5313 17.5557C34.5243 17.5557 34.5173 17.5557 34.5103 17.5557C34.5034 17.5557 34.4964 17.5557 34.4893 17.5557C34.4823 17.5557 34.4753 17.5557 34.4682 17.5557C34.4612 17.5557 34.4541 17.5557 34.447 17.5557C34.4399 17.5557 34.4328 17.5557 34.4257 17.5557C34.4185 17.5557 34.4114 17.5557 34.4042 17.5557C34.3971 17.5557 34.3899 17.5557 34.3827 17.5557C34.3755 17.5557 34.3683 17.5557 34.361 17.5557C34.3538 17.5557 34.3465 17.5557 34.3393 17.5557C34.332 17.5557 34.3247 17.5557 34.3174 17.5557C34.3101 17.5557 34.3028 17.5557 34.2954 17.5557C34.2881 17.5557 34.2807 17.5557 34.2734 17.5557C34.266 17.5557 34.2586 17.5557 34.2512 17.5557C34.2438 17.5557 34.2363 17.5557 34.2289 17.5557C34.2214 17.5557 34.214 17.5557 34.2065 17.5557C34.199 17.5557 34.1915 17.5557 34.184 17.5557C34.1765 17.5557 34.1689 17.5557 34.1614 17.5557C34.1538 17.5557 34.1462 17.5557 34.1386 17.5557C34.1311 17.5557 34.1234 17.5557 34.1158 17.5557C34.1082 17.5557 34.1005 17.5557 34.0929 17.5557C34.0852 17.5557 34.0775 17.5557 34.0698 17.5557C34.0621 17.5557 34.0544 17.5557 34.0467 17.5557C34.0389 17.5557 34.0312 17.5557 34.0234 17.5557C34.0156 17.5557 34.0078 17.5557 34 17.5557V15.5557ZM24.2423 19.903C25.4401 18.5126 26.6917 17.4038 28.2729 16.6556C29.8541 15.9073 31.6879 15.5557 34 15.5557V17.5557C31.8923 17.5557 30.3702 17.8757 29.1284 18.4634C27.8866 19.051 26.8482 19.9423 25.7577 21.2083L24.2423 19.903ZM11.5 31.0557C13.3356 31.0557 14.7379 30.6599 15.9239 29.9774C17.1239 29.2867 18.161 28.2691 19.2156 26.9354L20.7844 28.1759C19.6494 29.6113 18.4282 30.8437 16.9215 31.7108C15.4009 32.5859 13.6479 33.0557 11.5 33.0557V31.0557Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* persona */}
            {icon === 'persona' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="48" height="48" fill={iconColor} />
                    <path
                        d="M36.5 23.0557C36.5 21.4557 35.1667 20.5557 34.5 20.5557C35.3333 18.0557 35.9 11.8557 31.5 7.05566C31.9 6.25566 32 5.389 32 5.05566C31.3333 5.389 29.1 5.95566 25.5 5.55566C21 5.05566 18 4.05566 16.5 9.05566C15 9.55566 11.5 11.5557 14 20.5557C12.5 20.5557 12 22.5557 12.5 24.0557C13 25.5557 14 26.5557 15.5 27.0557C16.5 30.0557 19 35.0557 24 35.0557C29 35.0557 31 31.0557 33 27.0557C35.5 26.5557 36.5 25.0557 36.5 23.0557Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 30.5557C17 31.2223 16.7 32.9557 15.5 34.5557C13 35.0557 8.5 36.0557 8.5 38.5557C8.5 41.0557 15 44.0557 24 44.0557C33 44.0557 39.5 41.5557 39.5 38.5557C39.5 36.1557 35 34.7223 32.5 34.5557C32 33.889 31 32.1557 31 30.5557"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M32 5.05566C32 5.389 31.9 6.25566 31.5 7.05566C35.1809 11.0712 35.3859 16.0665 34.8667 19.0557C33.5 18.5557 31 19.0557 30.5 16.0557C28.5 17.0557 24.5 17.8057 20 15.5557C17.7639 14.4376 15 16.0557 14 20.5557C11.5 11.5557 15 9.55566 16.5 9.05566C18 4.05566 21 5.05566 25.5 5.55566C29.1 5.95566 31.3333 5.389 32 5.05566Z"
                        fill={iconColor}
                    />
                    <path
                        d="M8.5 38.5557C8.5 36.0557 13 35.0557 15.5 34.5557C16 36.0557 18.4 39.0557 24 39.0557C29.6 39.0557 32 36.0557 32.5 34.5557C35 34.7223 39.5 36.1557 39.5 38.5557C39.5 41.5557 33 44.0557 24 44.0557C15 44.0557 8.5 41.0557 8.5 38.5557Z"
                        fill={iconColor}
                    />
                </svg>
            )}
            {/* token-family */}
            {icon === 'token-family' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M42 13.85V34.85L24 43.85L6 34.85V13.85"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24 43.1V22.85"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33 39.35V18.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 39.35V18.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 24.3501L24 33.3501L42 24.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 13.85L24 22.85L42 13.85"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M42 13.85L24 4.84999L6 13.85"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33 9.34999L15 18.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 9.34999L33 18.35"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* care-token */}
            {icon === 'care-token' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 54" fill="none" xmlns={xmlns}>
                    <path
                        d="M10.6838 35.1694C13.4923 33.5358 13.7828 33.5358 15.6676 33.5358C18.9442 33.5358 18.9965 34.6482 20.8813 34.6482C22.766 34.6482 22.7784 34.6482 25.1344 34.6482C27.9476 34.6482 27.9476 38.4367 25.1344 38.4367C24.0928 38.4367 21.8361 38.4367 21.3649 38.4367"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.11432 44.0649L14.3458 41.5936L21.2574 43.7876C21.8268 43.9683 22.4371 43.975 23.0103 43.8067L29.7768 41.8198C30.2816 41.6716 30.7385 41.3933 31.1017 41.0128L38.4106 33.3559C37.9561 32.6695 36.4109 31.7908 33.8659 33.7678C31.3209 35.7449 28.2647 37.238 26.9013 37.7871"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.469 17.5702C31.9695 17.3366 32.1859 16.7416 31.9523 16.2411C31.7188 15.7406 31.1237 15.5242 30.6232 15.7578L31.469 17.5702ZM24.5677 19.6872L24.1448 18.781L24.5677 19.6872ZM16.8206 17.5702L23.2991 20.5934L24.1448 18.781L17.6664 15.7578L16.8206 17.5702ZM24.9906 20.5934L31.469 17.5702L30.6232 15.7578L24.1448 18.781L24.9906 20.5934ZM23.2991 20.5934C23.8352 20.8436 24.4545 20.8436 24.9906 20.5934L24.1448 18.781L24.1448 18.781L23.2991 20.5934Z"
                        fill={iconColor}
                    />
                    <path d="M24.1448 29.0864V19.8847" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M17.2435 16.664L24.1448 13.4434L31.0461 16.664V25.8657L24.1448 29.0863L17.2435 25.8657V16.664Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.4449 12.5584L12.9127 10.3453"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.2941 12.5584L35.8264 10.3453"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.2941 9.05564V5.94171"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* active-token */}
            {icon === 'active-token' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M29.5658 36.3991C30.0662 36.1656 30.2826 35.5705 30.0491 35.0701C29.8155 34.5696 29.2205 34.3532 28.72 34.5868L29.5658 36.3991ZM24.7759 37.5309L24.353 36.6247L24.7759 37.5309ZM19.1402 36.3991L23.5072 38.4371L24.353 36.6247L19.9859 34.5868L19.1402 36.3991ZM25.1987 38.4371L29.5658 36.3991L28.72 34.5868L24.353 36.6247L25.1987 38.4371ZM23.5072 38.4371C24.0433 38.6873 24.6626 38.6873 25.1987 38.4371L24.353 36.6247L23.5072 38.4371Z"
                        fill={iconColor}
                    />
                    <path d="M24.353 44.1148V37.7282" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M19.563 35.493L24.353 33.2577L29.1429 35.493V41.8796L24.353 44.1149L19.563 41.8796V35.493Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.5658 21.7101C30.0662 21.4765 30.2826 20.8815 30.0491 20.381C29.8155 19.8805 29.2205 19.6641 28.72 19.8977L29.5658 21.7101ZM19.1402 21.7101L23.5072 23.748L24.353 21.9356L19.9859 19.8977L19.1402 21.7101ZM25.1987 23.748L29.5658 21.7101L28.72 19.8977L24.353 21.9356L25.1987 23.748ZM23.5072 23.748C24.0433 23.9982 24.6626 23.9982 25.1987 23.748L24.353 21.9356L24.353 21.9356L23.5072 23.748Z"
                        fill={iconColor}
                    />
                    <path d="M24.353 29.4257V23.0392" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M19.563 20.8039L24.353 18.5686L29.1429 20.8039V27.1905L24.353 29.4258L19.563 27.1905V20.8039Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M43.885 28.7689C44.3855 28.5353 44.6019 27.9403 44.3683 27.4398C44.1348 26.9393 43.5397 26.723 43.0393 26.9565L43.885 28.7689ZM38.2494 29.9006L37.8265 30.8068L38.2494 29.9006ZM39.0951 29.9006L38.6722 28.9945L39.0951 29.9006ZM33.4594 28.7689L37.8265 30.8068L38.6722 28.9945L34.3052 26.9565L33.4594 28.7689ZM39.518 30.8068L43.885 28.7689L43.0393 26.9565L38.6722 28.9945L39.518 30.8068ZM37.8265 30.8068C38.3626 31.057 38.9819 31.057 39.518 30.8068L38.6722 28.9945L37.8265 30.8068Z"
                        fill={iconColor}
                    />
                    <path d="M38.6722 36.4845V30.098" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M33.8823 27.8627L38.6722 25.6274L43.4622 27.8627V34.2493L38.6722 36.4846L33.8823 34.2493V27.8627Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.6498 28.7689C16.1502 28.5353 16.3666 27.9403 16.133 27.4398C15.8995 26.9393 15.3045 26.723 14.804 26.9565L15.6498 28.7689ZM10.8598 29.9006L10.4369 28.9945L10.8598 29.9006ZM5.22415 28.7689L9.59118 30.8068L10.4369 28.9945L6.06992 26.9565L5.22415 28.7689ZM11.2827 30.8068L15.6498 28.7689L14.804 26.9565L10.4369 28.9945L11.2827 30.8068ZM9.59118 30.8068C10.1273 31.057 10.7466 31.057 11.2827 30.8068L10.4369 28.9945L9.59118 30.8068Z"
                        fill={iconColor}
                    />
                    <path d="M10.437 36.4845V30.098" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M5.64703 27.8627L10.4369 25.6274L15.2269 27.8627V34.2493L10.4369 36.4846L5.64703 34.2493V27.8627Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.5658 7.02098C30.0662 6.78743 30.2826 6.19239 30.0491 5.69191C29.8155 5.19144 29.2205 4.97506 28.72 5.20862L29.5658 7.02098ZM24.7759 8.15275L24.353 7.24656L24.7759 8.15275ZM19.1402 7.02098L23.5072 9.05893L24.353 7.24656L19.9859 5.20862L19.1402 7.02098ZM25.1987 9.05893L29.5658 7.02098L28.72 5.20862L24.353 7.24656L25.1987 9.05893ZM23.5072 9.05893C24.0433 9.30911 24.6626 9.30911 25.1987 9.05893L24.353 7.24656V7.24656L23.5072 9.05893Z"
                        fill={iconColor}
                    />
                    <path d="M24.353 14.7367V8.35011" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M19.563 6.1148L24.353 3.87951L29.1429 6.1148V12.5014L24.353 14.7367L19.563 12.5014V6.1148Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M43.885 14.0798C44.3855 13.8463 44.6019 13.2512 44.3683 12.7507C44.1348 12.2503 43.5397 12.0339 43.0393 12.2674L43.885 14.0798ZM33.4594 14.0798L37.8265 16.1178L38.6722 14.3054L34.3052 12.2674L33.4594 14.0798ZM39.518 16.1178L43.885 14.0798L43.0393 12.2674L38.6722 14.3054L39.518 16.1178ZM37.8265 16.1178C38.3626 16.3679 38.9819 16.3679 39.518 16.1178L38.6722 14.3054L37.8265 16.1178Z"
                        fill={iconColor}
                    />
                    <path d="M38.6722 21.7955V15.4089" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M33.8823 13.1736L38.6722 10.9383L43.4622 13.1736V19.5602L38.6722 21.7955L33.8823 19.5602V13.1736Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.6498 14.0798C16.1502 13.8463 16.3666 13.2512 16.133 12.7507C15.8995 12.2503 15.3045 12.0339 14.804 12.2674L15.6498 14.0798ZM10.0141 15.2116L9.59118 16.1178L10.0141 15.2116ZM10.8598 15.2116L10.4369 14.3054L10.8598 15.2116ZM5.22415 14.0798L9.59118 16.1178L10.4369 14.3054L6.06992 12.2674L5.22415 14.0798ZM11.2827 16.1178L15.6498 14.0798L14.804 12.2674L10.4369 14.3054L11.2827 16.1178ZM9.59118 16.1178C10.1273 16.3679 10.7466 16.3679 11.2827 16.1178L10.4369 14.3054V14.3054L9.59118 16.1178Z"
                        fill={iconColor}
                    />
                    <path d="M10.437 21.7955V15.4089" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M5.64703 13.1736L10.4369 10.9383L15.2269 13.1736V19.5602L10.4369 21.7955L5.64703 19.5602V13.1736Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* choose-assets */}
            {icon === 'choose-assets' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M25.2059 16.85V10.1298L19.9202 7.41126V14.2646L25.2059 16.85Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.2059 16.85V10.1298L30.4916 7.41126V14.2646L25.2059 16.85Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.9202 7.39733L25.2059 10.0541L30.4916 7.39733L25.2059 4.7684L19.9202 7.39733Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.9916 26.1562V19.436L6.70587 16.7174V23.5708L11.9916 26.1562Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.9916 26.1562V19.436L17.2773 16.7174V23.5708L11.9916 26.1562Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.70587 16.7035L11.9916 19.3603L17.2773 16.7035L11.9916 14.0746L6.70587 16.7035Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M38.4201 26.1562V19.436L33.1344 16.7174V23.5708L38.4201 26.1562Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M38.4201 26.1562V19.436L43.7058 16.7174V23.5708L38.4201 26.1562Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.1344 16.7035L38.4201 19.3603L43.7058 16.7035L38.4201 14.0746L33.1344 16.7035Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.6045 43.3501C21.2632 43.2649 20.3247 42.6342 19.3009 40.7932C18.0211 38.4919 17.2533 35.4236 16.4854 34.6565C15.7175 33.8895 15.2056 32.0996 16.4854 31.3325C17.7652 30.5655 19.0449 31.3325 19.5568 32.0996C20.0687 32.8667 21.8604 35.4236 22.3723 36.9578C22.3723 33.6338 22.3723 26.73 22.3723 24.1731C22.3723 21.6163 26.2117 21.8719 26.2117 24.1732V30.0542C27.4915 28.7757 30.307 30.0542 29.7951 32.0996C31.0748 30.8213 33.6344 31.8441 33.3784 33.3782C34.6582 32.3554 36.7059 33.3782 36.7059 35.4238V39.5148C36.7059 41.1513 35.5114 42.7535 34.9142 43.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* prepayment-eceivables */}
            {icon === 'prepayment-receivables' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M6.22394 11.2872V21.9843"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.2368 11.2872V21.9843"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.2368 21.9843L15.2587 26.0986L6.22394 21.9843"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.2368 10.9649L15.2304 15.4015L6.22394 10.9649L14.9032 6.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.2365 10.8758L15.2304 6.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.2304 15.4015V26.0986"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.2549 29.3821C36.6231 29.7937 37.2553 29.8288 37.6669 29.4606C38.0785 29.0923 38.1136 28.4601 37.7454 28.0485L36.2549 29.3821ZM34.5815 32.0943L34.1949 33.0166L34.5815 32.0943ZM32.2006 34.369C31.7773 34.0142 31.1466 34.0697 30.7918 34.493C30.437 34.9163 30.4925 35.547 30.9158 35.9018L32.2006 34.369ZM34.2791 36.259L34.3056 35.2593L34.2791 36.259ZM33.2791 37.8386C33.2791 38.3909 33.7269 38.8386 34.2791 38.8386C34.8314 38.8386 35.2791 38.3909 35.2791 37.8386H33.2791ZM35.5815 26.35C35.5815 25.7978 35.1338 25.35 34.5815 25.35C34.0292 25.35 33.5815 25.7978 33.5815 26.35H35.5815ZM36.1981 35.5997L35.5012 34.8826L36.1981 35.5997ZM35.6435 32.6457L36.2028 31.8167L35.6435 32.6457ZM37.7454 28.0485C37.3043 27.5556 36.1437 26.7016 34.5815 26.7016V28.7016C35.4379 28.7016 36.0913 29.1993 36.2549 29.3821L37.7454 28.0485ZM34.5815 26.7016C32.6036 26.7016 31.1628 28.0807 31.1628 29.729H33.1628C33.1628 29.3499 33.536 28.7016 34.5815 28.7016V26.7016ZM31.1628 29.729C31.1628 30.5796 31.5591 31.2625 32.1254 31.7875C32.6679 32.2905 33.3984 32.6827 34.1949 33.0166L34.968 31.172C34.2529 30.8723 33.774 30.5887 33.4852 30.3209C33.2201 30.0751 33.1628 29.8921 33.1628 29.729H31.1628ZM34.3056 35.2593C33.7108 35.2436 32.9617 35.007 32.2006 34.369L30.9158 35.9018C31.9918 36.8037 33.1672 37.2299 34.2527 37.2586L34.3056 35.2593ZM33.2791 36.259V37.8386H35.2791V36.259H33.2791ZM35.5815 27.7016V26.35H33.5815V27.7016H35.5815ZM35.5012 34.8826C35.2925 35.0854 34.8842 35.2747 34.3056 35.2593L34.2527 37.2586C35.2665 37.2855 36.2316 36.9617 36.8951 36.3169L35.5012 34.8826ZM34.1949 33.0166C34.5562 33.168 34.8513 33.3175 35.0842 33.4746L36.2028 31.8167C35.8191 31.5578 35.3924 31.3499 34.968 31.172L34.1949 33.0166ZM35.0842 33.4746C35.5012 33.756 35.6522 34.0723 35.6857 34.3029C35.72 34.5391 35.6447 34.7432 35.5012 34.8826L36.8951 36.3169C38.1977 35.0509 37.8762 32.9458 36.2028 31.8167L35.0842 33.4746Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="34.4711"
                        cy="32.27"
                        rx="10.2346"
                        ry="10.2857"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.3242 35.15L5.40515 35.15"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.35547 40.3436L4.58618 35.5505L9.35547 30.7574"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.1495 12.933H43.8873"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M39.9366 8.63516L44.7059 13.4282L39.9366 18.2213"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* token-frame */}
            {icon === 'token-frame' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M4.70587 37.8564L4.70587 43.8564L10.7059 43.8564"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M38.7059 43.8564L44.7059 43.8564L44.7059 37.8564"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M44.7059 10.8564L44.7059 4.85645L38.7059 4.85645"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.7059 4.85645H4.70587V10.8564"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.2059 35.966V22.5554L14.6579 17.1304V30.8066L25.2059 35.966Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.2058 35.966V22.5554L35.7538 17.1304V30.8066L25.2058 35.966Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.6579 17.1026L25.2059 22.4044L35.7538 17.1026L25.2059 11.8564L14.6579 17.1026Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* token-user */}
            {icon === 'token-user' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M34.0085 25.9042C37.2108 25.9042 39.8068 23.2648 39.8068 20.0088C39.8068 16.7529 37.2108 14.1134 34.0085 14.1134C30.8062 14.1134 28.2103 16.7529 28.2103 20.0088C28.2103 23.2648 30.8062 25.9042 34.0085 25.9042Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M30.6386 29.2294H37.1916C38.0676 29.2235 38.9363 29.3909 39.7474 29.7221C40.5584 30.0533 41.296 30.5416 41.9176 31.159C42.5392 31.7764 43.0325 32.5107 43.3691 33.3196C43.7057 34.1284 43.879 34.9959 43.879 35.872V37.471H23.9961V35.872C23.9961 34.1102 24.6959 32.4207 25.9416 31.1749C27.1874 29.9292 28.8769 29.2294 30.6386 29.2294V29.2294Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.4095 31.4709V20.9055L6.14551 16.6316V27.4062L14.4095 31.4709Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.4095 31.4709V20.9055L22.6736 16.6316V27.4062L14.4095 31.4709Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.14551 16.6315L14.4095 20.9054L22.6735 16.6315L14.4095 12.4023L6.14551 16.6315Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* exchange */}
            {icon === 'exchange' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns={xmlns}>
                    <path
                        d="M4.57144 13.8L9.52382 8.7176L12 11.2588L19.4286 4.19995"
                        stroke={iconColor}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M19.4286 7.19995V4.19995H16"
                        stroke={iconColor}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <mask id="path-3-inside-1_3950_53382" fill={iconColor}>
                        <rect x="4.57144" y="15.6" width="4" height="4.8" rx="1" />
                    </mask>
                    <rect
                        x="4.57144"
                        y="15.6"
                        width="4"
                        height="4.8"
                        rx="1"
                        stroke={iconColor}
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        mask="url(#path-3-inside-1_3950_53382)"
                    />
                    <mask id="path-4-inside-2_3950_53381" fill={iconColor}>
                        <rect x="10.0741" y="13.2" width="3.85185" height="7.2" rx="1" />
                    </mask>
                    <rect
                        x="10.0741"
                        y="13.2"
                        width="3.85185"
                        height="7.2"
                        rx="1"
                        stroke={iconColor}
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        mask="url(#path-4-inside-2_3950_53381)"
                    />
                    <mask id="path-5-inside-3_3950_53382" fill={iconColor}>
                        <rect x="15.5767" y="10.8" width="3.85185" height="9.6" rx="1" />
                    </mask>
                    <rect
                        x="15.5767"
                        y="10.8"
                        width="3.85185"
                        height="9.6"
                        rx="1"
                        stroke={iconColor}
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        mask="url(#path-5-inside-3_3950_53382)"
                    />
                </svg>
                // <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns={xmlns}>
                //     <path
                //         d="M4.57144 13.8L9.52382 8.7176L12 11.2588L19.4286 4.19995"
                //         stroke="white"
                //         stroke-width="1.5"
                //         stroke-linecap="round"
                //         stroke-linejoin="round"
                //     />

                //     <path
                //         d="M39.563 14.7501V8.7501H32.7059"
                //         stroke={iconColor}
                //         strokeWidth="2"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //     />
                //     <mask id="path-3-inside-1_590_10225" fill="white">
                //         <rect x="9.84872" y="31.5501" width="8" height="9.6" rx="1" />
                //     </mask>
                //     <rect
                //         x="9.84872"
                //         y="31.5501"
                //         width="8"
                //         height="9.6"
                //         rx="1"
                //         stroke={iconColor}
                //         strokeWidth="4"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         mask="url(#path-3-inside-1_590_10225)"
                //     />
                //     <mask id="path-4-inside-2_590_10225" fill="white">
                //         <rect x="20.854" y="26.7501" width="7.7037" height="14.4" rx="1" />
                //     </mask>
                //     <rect
                //         x="20.854"
                //         y="26.7501"
                //         width="7.7037"
                //         height="14.4"
                //         rx="1"
                //         stroke={iconColor}
                //         strokeWidth="4"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         mask="url(#path-4-inside-2_590_10225)"
                //     />
                //     <mask id="path-5-inside-3_590_10225" fill="white">
                //         <rect x="31.8593" y="21.9501" width="7.7037" height="19.2" rx="1" />
                //     </mask>
                //     <rect
                //         x="31.8593"
                //         y="21.9501"
                //         width="7.7037"
                //         height="19.2"
                //         rx="1"
                //         stroke={iconColor}
                //         strokeWidth="4"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         mask="url(#path-5-inside-3_590_10225)"
                //     />
                // </svg>
            )}
            {/* garantee */}
            {icon === 'garantee' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M19.7058 23.3501L23.7058 27.3501L30.2058 20.8501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="24.7058" cy="24.3501" r="11" stroke={iconColor} strokeWidth="2" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.4808 7.36848C25.677 6.01063 23.7346 6.01063 22.9308 7.36848L22.4035 8.25913C21.3408 10.0543 19.1342 10.7807 17.233 9.96121L16.2897 9.55465C14.8516 8.93482 13.2802 10.0915 13.4176 11.6687L13.5078 12.7033C13.6895 14.7884 12.3258 16.6901 10.3122 17.1593L9.31319 17.3922C7.79013 17.7471 7.18992 19.6186 8.21617 20.8128L8.88932 21.5961C10.2461 23.1748 10.2461 25.5254 8.88932 27.1041L8.21617 27.8874C7.18992 29.0815 7.79013 30.9531 9.31319 31.308L10.3122 31.5408C12.3258 32.0101 13.6895 33.9117 13.5078 35.9969L13.4176 37.0315C13.2802 38.6087 14.8516 39.7654 16.2897 39.1455L17.233 38.739C19.1342 37.9195 21.3408 38.6459 22.4035 40.4411L22.9308 41.3317C23.7346 42.6896 25.677 42.6896 26.4808 41.3317L27.0081 40.441C28.0708 38.6459 30.2774 37.9195 32.1786 38.739L33.1219 39.1455C34.56 39.7654 36.1314 38.6087 35.994 37.0315L35.9038 35.9969C35.7221 33.9117 37.0858 32.0101 39.0994 31.5408L40.0984 31.308C41.6215 30.9531 42.2217 29.0815 41.1954 27.8874L40.5223 27.1041C39.1655 25.5254 39.1655 23.1748 40.5223 21.5961L41.1954 20.8128C42.2217 19.6186 41.6215 17.7471 40.0984 17.3922L39.0994 17.1593C37.0858 16.6901 35.7221 14.7884 35.9038 12.7033L35.994 11.6687C36.1314 10.0915 34.56 8.93482 33.1219 9.55465L32.1786 9.96121C30.2774 10.7807 28.0708 10.0543 27.0081 8.25913L26.4808 7.36848Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                </svg>
            )}
            {/* blog */}
            {icon === 'blog' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path d="M20.6084 43.5557V38.7635M28.0629 43.5557V38.7635" stroke={iconColor} strokeWidth="2" />
                    <path d="M33.9201 23.3218H14.7513" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M23.0046 28.1141H14.7513" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M23.0046 32.9063H14.7513" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M14.7513 14.346C14.7513 13.4218 15.5857 12.6726 16.6149 12.6726H20.3422C21.3715 12.6726 22.2058 13.4218 22.2058 14.346V16.8562C22.2058 17.7805 21.3715 18.5297 20.3422 18.5297H16.6149C15.5857 18.5297 14.7513 17.7805 14.7513 16.8562V14.346Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M26.4656 29.2551C26.4656 28.3309 27.2999 27.5816 28.3292 27.5816H32.0565C33.0857 27.5816 33.9201 28.3309 33.9201 29.2551V31.7653C33.9201 32.6895 33.0857 33.4388 32.0565 33.4388H28.3292C27.2999 33.4388 26.4656 32.6895 26.4656 31.7653V29.2551Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M33.9201 43.5557H14.7513M42.9721 19.3284V36.1011C42.9721 37.5715 41.7801 38.7635 40.3097 38.7635H8.36168C6.89131 38.7635 5.69934 37.5715 5.69934 36.1011V10.0102C5.69934 8.53984 6.89131 7.34787 8.36168 7.34787H29.1279"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M32.2376 12.9097V12.9097C32.1135 13.0338 32.0177 13.1831 31.9566 13.3476L31.1214 15.5963C30.5255 17.2005 32.0885 18.7634 33.6926 18.1676L35.9414 17.3323C36.1058 17.2712 36.2552 17.1754 36.3792 17.0514V17.0514M32.2376 12.9097L40.5208 4.62648C41.6645 3.4828 43.5188 3.4828 44.6625 4.62648V4.62648C45.8061 5.77016 45.8061 7.62442 44.6625 8.7681L36.3792 17.0514M32.2376 12.9097L36.3792 17.0514M39.0148 6.13252L43.1564 10.2741"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                </svg>
            )}
            {/* handler */}
            {icon === 'handler' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M18.6211 37.3501C18.1824 37.1387 16.2274 35.5029 15.3308 32.9111C14.0145 29.1062 12.6984 27.2038 11.3825 25.9355C9.59522 24.2128 11.5749 20.7747 14.6727 22.7647C17.9631 24.8785 17.9631 29.1062 19.9375 29.7403V13.6534C19.9375 12.3813 20.9687 11.3501 22.2408 11.3501V11.3501C23.5129 11.3501 24.5441 12.3813 24.5441 13.6534V21.4964C25.8601 20.8623 29.1505 21.4964 28.4926 24.033C29.8088 22.7647 33.0992 22.7647 33.7573 25.9355C34.4154 24.6672 37.7058 24.6672 37.7058 27.8379C37.7058 28.8948 37.7058 31.3891 37.7058 32.9111C37.7058 34.433 35.9509 36.5046 35.0735 37.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            {/* free-fees */}
            {icon === 'free-fees' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <rect x="35" y="27.3501" width="8" height="15" rx="2" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M27 37.3501C27.5523 37.3501 28 36.9024 28 36.3501C28 35.7978 27.5523 35.3501 27 35.3501V37.3501ZM35 28.8501C34.999 28.8501 34.998 28.8501 34.9971 28.8501C34.9961 28.8501 34.9951 28.8501 34.9941 28.8501C34.9931 28.8501 34.9921 28.8501 34.9911 28.8501C34.9901 28.8501 34.9891 28.8501 34.9881 28.8501C34.9871 28.8501 34.9861 28.8501 34.9851 28.8501C34.9841 28.8501 34.983 28.8501 34.982 28.8501C34.981 28.8501 34.98 28.8501 34.9789 28.8501C34.9779 28.8501 34.9769 28.8501 34.9758 28.8501C34.9748 28.8501 34.9738 28.8501 34.9727 28.8501C34.9717 28.8501 34.9706 28.8501 34.9696 28.8501C34.9685 28.8501 34.9675 28.8501 34.9664 28.8501C34.9653 28.8501 34.9643 28.8501 34.9632 28.8501C34.9621 28.8501 34.9611 28.8501 34.96 28.8501C34.9589 28.8501 34.9578 28.8501 34.9568 28.8501C34.9557 28.8501 34.9546 28.8501 34.9535 28.8501C34.9524 28.8501 34.9513 28.8501 34.9502 28.8501C34.9491 28.8501 34.948 28.8501 34.9469 28.8501C34.9458 28.8501 34.9447 28.8501 34.9436 28.8501C34.9425 28.8501 34.9414 28.8501 34.9402 28.8501C34.9391 28.8501 34.938 28.8501 34.9369 28.8501C34.9357 28.8501 34.9346 28.8501 34.9335 28.8501C34.9323 28.8501 34.9312 28.8501 34.93 28.8501C34.9289 28.8501 34.9278 28.8501 34.9266 28.8501C34.9255 28.8501 34.9243 28.8501 34.9231 28.8501C34.922 28.8501 34.9208 28.8501 34.9197 28.8501C34.9185 28.8501 34.9173 28.8501 34.9162 28.8501C34.915 28.8501 34.9138 28.8501 34.9126 28.8501C34.9114 28.8501 34.9103 28.8501 34.9091 28.8501C34.9079 28.8501 34.9067 28.8501 34.9055 28.8501C34.9043 28.8501 34.9031 28.8501 34.9019 28.8501C34.9007 28.8501 34.8995 28.8501 34.8983 28.8501C34.8971 28.8501 34.8959 28.8501 34.8947 28.8501C34.8934 28.8501 34.8922 28.8501 34.891 28.8501C34.8898 28.8501 34.8885 28.8501 34.8873 28.8501C34.8861 28.8501 34.8848 28.8501 34.8836 28.8501C34.8824 28.8501 34.8811 28.8501 34.8799 28.8501C34.8786 28.8501 34.8774 28.8501 34.8761 28.8501C34.8749 28.8501 34.8736 28.8501 34.8724 28.8501C34.8711 28.8501 34.8698 28.8501 34.8686 28.8501C34.8673 28.8501 34.866 28.8501 34.8647 28.8501C34.8635 28.8501 34.8622 28.8501 34.8609 28.8501C34.8596 28.8501 34.8583 28.8501 34.857 28.8501C34.8558 28.8501 34.8545 28.8501 34.8532 28.8501C34.8519 28.8501 34.8506 28.8501 34.8493 28.8501C34.8479 28.8501 34.8466 28.8501 34.8453 28.8501C34.844 28.8501 34.8427 28.8501 34.8414 28.8501C34.8401 28.8501 34.8387 28.8501 34.8374 28.8501C34.8361 28.8501 34.8348 28.8501 34.8334 28.8501C34.8321 28.8501 34.8307 28.8501 34.8294 28.8501C34.8281 28.8501 34.8267 28.8501 34.8254 28.8501C34.824 28.8501 34.8227 28.8501 34.8213 28.8501C34.82 28.8501 34.8186 28.8501 34.8172 28.8501C34.8159 28.8501 34.8145 28.8501 34.8131 28.8501C34.8118 28.8501 34.8104 28.8501 34.809 28.8501C34.8076 28.8501 34.8063 28.8501 34.8049 28.8501C34.8035 28.8501 34.8021 28.8501 34.8007 28.8501C34.7993 28.8501 34.7979 28.8501 34.7965 28.8501C34.7951 28.8501 34.7937 28.8501 34.7923 28.8501C34.7909 28.8501 34.7895 28.8501 34.7881 28.8501C34.7867 28.8501 34.7852 28.8501 34.7838 28.8501C34.7824 28.8501 34.781 28.8501 34.7796 28.8501C34.7781 28.8501 34.7767 28.8501 34.7753 28.8501C34.7738 28.8501 34.7724 28.8501 34.7709 28.8501C34.7695 28.8501 34.7681 28.8501 34.7666 28.8501C34.7652 28.8501 34.7637 28.8501 34.7622 28.8501C34.7608 28.8501 34.7593 28.8501 34.7579 28.8501C34.7564 28.8501 34.7549 28.8501 34.7535 28.8501C34.752 28.8501 34.7505 28.8501 34.749 28.8501C34.7476 28.8501 34.7461 28.8501 34.7446 28.8501C34.7431 28.8501 34.7416 28.8501 34.7401 28.8501C34.7386 28.8501 34.7371 28.8501 34.7356 28.8501C34.7341 28.8501 34.7326 28.8501 34.7311 28.8501C34.7296 28.8501 34.7281 28.8501 34.7266 28.8501C34.7251 28.8501 34.7236 28.8501 34.722 28.8501C34.7205 28.8501 34.719 28.8501 34.7175 28.8501C34.7159 28.8501 34.7144 28.8501 34.7129 28.8501C34.7113 28.8501 34.7098 28.8501 34.7083 28.8501C34.7067 28.8501 34.7052 28.8501 34.7036 28.8501C34.7021 28.8501 34.7005 28.8501 34.699 28.8501C34.6974 28.8501 34.6959 28.8501 34.6943 28.8501C34.6927 28.8501 34.6912 28.8501 34.6896 28.8501C34.688 28.8501 34.6864 28.8501 34.6849 28.8501C34.6833 28.8501 34.6817 28.8501 34.6801 28.8501C34.6785 28.8501 34.677 28.8501 34.6754 28.8501C34.6738 28.8501 34.6722 28.8501 34.6706 28.8501C34.669 28.8501 34.6674 28.8501 34.6658 28.8501C34.6642 28.8501 34.6626 28.8501 34.6609 28.8501C34.6593 28.8501 34.6577 28.8501 34.6561 28.8501C34.6545 28.8501 34.6529 28.8501 34.6512 28.8501C34.6496 28.8501 34.648 28.8501 34.6463 28.8501C34.6447 28.8501 34.6431 28.8501 34.6414 28.8501C34.6398 28.8501 34.6382 28.8501 34.6365 28.8501C34.6349 28.8501 34.6332 28.8501 34.6316 28.8501C34.6299 28.8501 34.6282 28.8501 34.6266 28.8501C34.6249 28.8501 34.6233 28.8501 34.6216 28.8501C34.6199 28.8501 34.6183 28.8501 34.6166 28.8501C34.6149 28.8501 34.6132 28.8501 34.6115 28.8501C34.6099 28.8501 34.6082 28.8501 34.6065 28.8501C34.6048 28.8501 34.6031 28.8501 34.6014 28.8501C34.5997 28.8501 34.598 28.8501 34.5963 28.8501C34.5946 28.8501 34.5929 28.8501 34.5912 28.8501C34.5895 28.8501 34.5878 28.8501 34.5861 28.8501C34.5843 28.8501 34.5826 28.8501 34.5809 28.8501C34.5792 28.8501 34.5775 28.8501 34.5757 28.8501C34.574 28.8501 34.5723 28.8501 34.5705 28.8501C34.5688 28.8501 34.567 28.8501 34.5653 28.8501C34.5636 28.8501 34.5618 28.8501 34.5601 28.8501C34.5583 28.8501 34.5566 28.8501 34.5548 28.8501C34.553 28.8501 34.5513 28.8501 34.5495 28.8501C34.5478 28.8501 34.546 28.8501 34.5442 28.8501C34.5424 28.8501 34.5407 28.8501 34.5389 28.8501C34.5371 28.8501 34.5353 28.8501 34.5336 28.8501C34.5318 28.8501 34.53 28.8501 34.5282 28.8501C34.5264 28.8501 34.5246 28.8501 34.5228 28.8501C34.521 28.8501 34.5192 28.8501 34.5174 28.8501C34.5156 28.8501 34.5138 28.8501 34.512 28.8501C34.5102 28.8501 34.5084 28.8501 34.5065 28.8501C34.5047 28.8501 34.5029 28.8501 34.5011 28.8501C34.4992 28.8501 34.4974 28.8501 34.4956 28.8501C34.4938 28.8501 34.4919 28.8501 34.4901 28.8501C34.4882 28.8501 34.4864 28.8501 34.4846 28.8501C34.4827 28.8501 34.4809 28.8501 34.479 28.8501C34.4772 28.8501 34.4753 28.8501 34.4734 28.8501C34.4716 28.8501 34.4697 28.8501 34.4679 28.8501C34.466 28.8501 34.4641 28.8501 34.4623 28.8501C34.4604 28.8501 34.4585 28.8501 34.4566 28.8501C34.4547 28.8501 34.4529 28.8501 34.451 28.8501C34.4491 28.8501 34.4472 28.8501 34.4453 28.8501C34.4434 28.8501 34.4415 28.8501 34.4396 28.8501C34.4377 28.8501 34.4358 28.8501 34.4339 28.8501C34.432 28.8501 34.4301 28.8501 34.4282 28.8501C34.4263 28.8501 34.4244 28.8501 34.4224 28.8501C34.4205 28.8501 34.4186 28.8501 34.4167 28.8501C34.4148 28.8501 34.4128 28.8501 34.4109 28.8501C34.409 28.8501 34.407 28.8501 34.4051 28.8501C34.4032 28.8501 34.4012 28.8501 34.3993 28.8501C34.3973 28.8501 34.3954 28.8501 34.3934 28.8501C34.3915 28.8501 34.3895 28.8501 34.3876 28.8501C34.3856 28.8501 34.3836 28.8501 34.3817 28.8501C34.3797 28.8501 34.3777 28.8501 34.3758 28.8501C34.3738 28.8501 34.3718 28.8501 34.3698 28.8501C34.3679 28.8501 34.3659 28.8501 34.3639 28.8501C34.3619 28.8501 34.3599 28.8501 34.3579 28.8501C34.3559 28.8501 34.3539 28.8501 34.3519 28.8501C34.3499 28.8501 34.3479 28.8501 34.3459 28.8501C34.3439 28.8501 34.3419 28.8501 34.3399 28.8501C34.3379 28.8501 34.3359 28.8501 34.3339 28.8501C34.3319 28.8501 34.3298 28.8501 34.3278 28.8501C34.3258 28.8501 34.3238 28.8501 34.3217 28.8501C34.3197 28.8501 34.3177 28.8501 34.3156 28.8501C34.3136 28.8501 34.3116 28.8501 34.3095 28.8501C34.3075 28.8501 34.3054 28.8501 34.3034 28.8501C34.3013 28.8501 34.2993 28.8501 34.2972 28.8501C34.2951 28.8501 34.2931 28.8501 34.291 28.8501C34.289 28.8501 34.2869 28.8501 34.2848 28.8501C34.2828 28.8501 34.2807 28.8501 34.2786 28.8501C34.2765 28.8501 34.2745 28.8501 34.2724 28.8501C34.2703 28.8501 34.2682 28.8501 34.2661 28.8501C34.264 28.8501 34.2619 28.8501 34.2598 28.8501C34.2577 28.8501 34.2556 28.8501 34.2535 28.8501C34.2514 28.8501 34.2493 28.8501 34.2472 28.8501C34.2451 28.8501 34.243 28.8501 34.2409 28.8501C34.2388 28.8501 34.2367 28.8501 34.2345 28.8501C34.2324 28.8501 34.2303 28.8501 34.2282 28.8501C34.226 28.8501 34.2239 28.8501 34.2218 28.8501C34.2196 28.8501 34.2175 28.8501 34.2154 28.8501C34.2132 28.8501 34.2111 28.8501 34.2089 28.8501C34.2068 28.8501 34.2046 28.8501 34.2025 28.8501C34.2003 28.8501 34.1982 28.8501 34.196 28.8501C34.1938 28.8501 34.1917 28.8501 34.1895 28.8501C34.1874 28.8501 34.1852 28.8501 34.183 28.8501C34.1808 28.8501 34.1787 28.8501 34.1765 28.8501C34.1743 28.8501 34.1721 28.8501 34.1699 28.8501C34.1678 28.8501 34.1656 28.8501 34.1634 28.8501C34.1612 28.8501 34.159 28.8501 34.1568 28.8501C34.1546 28.8501 34.1524 28.8501 34.1502 28.8501C34.148 28.8501 34.1458 28.8501 34.1436 28.8501C34.1414 28.8501 34.1391 28.8501 34.1369 28.8501C34.1347 28.8501 34.1325 28.8501 34.1303 28.8501C34.128 28.8501 34.1258 28.8501 34.1236 28.8501C34.1214 28.8501 34.1191 28.8501 34.1169 28.8501C34.1147 28.8501 34.1124 28.8501 34.1102 28.8501C34.1079 28.8501 34.1057 28.8501 34.1034 28.8501C34.1012 28.8501 34.0989 28.8501 34.0967 28.8501C34.0944 28.8501 34.0922 28.8501 34.0899 28.8501C34.0877 28.8501 34.0854 28.8501 34.0831 28.8501C34.0809 28.8501 34.0786 28.8501 34.0763 28.8501C34.074 28.8501 34.0718 28.8501 34.0695 28.8501C34.0672 28.8501 34.0649 28.8501 34.0626 28.8501C34.0604 28.8501 34.0581 28.8501 34.0558 28.8501C34.0535 28.8501 34.0512 28.8501 34.0489 28.8501C34.0466 28.8501 34.0443 28.8501 34.042 28.8501C34.0397 28.8501 34.0374 28.8501 34.0351 28.8501C34.0328 28.8501 34.0304 28.8501 34.0281 28.8501C34.0258 28.8501 34.0235 28.8501 34.0212 28.8501C34.0188 28.8501 34.0165 28.8501 34.0142 28.8501C34.0119 28.8501 34.0095 28.8501 34.0072 28.8501C34.0049 28.8501 34.0025 28.8501 34.0002 28.8501C33.9978 28.8501 33.9955 28.8501 33.9932 28.8501C33.9908 28.8501 33.9885 28.8501 33.9861 28.8501C33.9837 28.8501 33.9814 28.8501 33.979 28.8501C33.9767 28.8501 33.9743 28.8501 33.9719 28.8501C33.9696 28.8501 33.9672 28.8501 33.9648 28.8501C33.9625 28.8501 33.9601 28.8501 33.9577 28.8501C33.9553 28.8501 33.953 28.8501 33.9506 28.8501C33.9482 28.8501 33.9458 28.8501 33.9434 28.8501C33.941 28.8501 33.9386 28.8501 33.9362 28.8501C33.9338 28.8501 33.9314 28.8501 33.929 28.8501C33.9266 28.8501 33.9242 28.8501 33.9218 28.8501C33.9194 28.8501 33.917 28.8501 33.9146 28.8501C33.9122 28.8501 33.9097 28.8501 33.9073 28.8501C33.9049 28.8501 33.9025 28.8501 33.9001 28.8501C33.8976 28.8501 33.8952 28.8501 33.8928 28.8501C33.8903 28.8501 33.8879 28.8501 33.8855 28.8501C33.883 28.8501 33.8806 28.8501 33.8781 28.8501C33.8757 28.8501 33.8732 28.8501 33.8708 28.8501C33.8683 28.8501 33.8659 28.8501 33.8634 28.8501C33.861 28.8501 33.8585 28.8501 33.8561 28.8501C33.8536 28.8501 33.8511 28.8501 33.8487 28.8501C33.8462 28.8501 33.8437 28.8501 33.8412 28.8501C33.8388 28.8501 33.8363 28.8501 33.8338 28.8501C33.8313 28.8501 33.8288 28.8501 33.8264 28.8501C33.8239 28.8501 33.8214 28.8501 33.8189 28.8501C33.8164 28.8501 33.8139 28.8501 33.8114 28.8501C33.8089 28.8501 33.8064 28.8501 33.8039 28.8501C33.8014 28.8501 33.7989 28.8501 33.7964 28.8501C33.7939 28.8501 33.7913 28.8501 33.7888 28.8501C33.7863 28.8501 33.7838 28.8501 33.7813 28.8501C33.7788 28.8501 33.7762 28.8501 33.7737 28.8501C33.7712 28.8501 33.7686 28.8501 33.7661 28.8501C33.7636 28.8501 33.761 28.8501 33.7585 28.8501C33.756 28.8501 33.7534 28.8501 33.7509 28.8501C33.7483 28.8501 33.7458 28.8501 33.7432 28.8501C33.7407 28.8501 33.7381 28.8501 33.7356 28.8501C33.733 28.8501 33.7304 28.8501 33.7279 28.8501C33.7253 28.8501 33.7227 28.8501 33.7202 28.8501C33.7176 28.8501 33.715 28.8501 33.7125 28.8501C33.7099 28.8501 33.7073 28.8501 33.7047 28.8501C33.7021 28.8501 33.6996 28.8501 33.697 28.8501C33.6944 28.8501 33.6918 28.8501 33.6892 28.8501C33.6866 28.8501 33.684 28.8501 33.6814 28.8501C33.6788 28.8501 33.6762 28.8501 33.6736 28.8501C33.671 28.8501 33.6684 28.8501 33.6658 28.8501C33.6632 28.8501 33.6606 28.8501 33.6579 28.8501C33.6553 28.8501 33.6527 28.8501 33.6501 28.8501C33.6475 28.8501 33.6448 28.8501 33.6422 28.8501C33.6396 28.8501 33.6369 28.8501 33.6343 28.8501C33.6317 28.8501 33.629 28.8501 33.6264 28.8501C33.6238 28.8501 33.6211 28.8501 33.6185 28.8501C33.6158 28.8501 33.6132 28.8501 33.6105 28.8501C33.6079 28.8501 33.6052 28.8501 33.6026 28.8501C33.5999 28.8501 33.5973 28.8501 33.5946 28.8501C33.5919 28.8501 33.5893 28.8501 33.5866 28.8501C33.5839 28.8501 33.5813 28.8501 33.5786 28.8501C33.5759 28.8501 33.5732 28.8501 33.5705 28.8501C33.5679 28.8501 33.5652 28.8501 33.5625 28.8501C33.5598 28.8501 33.5571 28.8501 33.5544 28.8501C33.5517 28.8501 33.549 28.8501 33.5464 28.8501C33.5437 28.8501 33.541 28.8501 33.5383 28.8501C33.5356 28.8501 33.5328 28.8501 33.5301 28.8501C33.5274 28.8501 33.5247 28.8501 33.522 28.8501C33.5193 28.8501 33.5166 28.8501 33.5139 28.8501C33.5111 28.8501 33.5084 28.8501 33.5057 28.8501C33.503 28.8501 33.5002 28.8501 33.4975 28.8501C33.4948 28.8501 33.492 28.8501 33.4893 28.8501C33.4866 28.8501 33.4838 28.8501 33.4811 28.8501C33.4783 28.8501 33.4756 28.8501 33.4728 28.8501C33.4701 28.8501 33.4673 28.8501 33.4646 28.8501C33.4618 28.8501 33.4591 28.8501 33.4563 28.8501C33.4536 28.8501 33.4508 28.8501 33.448 28.8501C33.4453 28.8501 33.4425 28.8501 33.4397 28.8501C33.437 28.8501 33.4342 28.8501 33.4314 28.8501C33.4286 28.8501 33.4259 28.8501 33.4231 28.8501C33.4203 28.8501 33.4175 28.8501 33.4147 28.8501C33.4119 28.8501 33.4091 28.8501 33.4064 28.8501C33.4036 28.8501 33.4008 28.8501 33.398 28.8501C33.3952 28.8501 33.3924 28.8501 33.3896 28.8501C33.3868 28.8501 33.3839 28.8501 33.3811 28.8501C33.3783 28.8501 33.3755 28.8501 33.3727 28.8501C33.3699 28.8501 33.3671 28.8501 33.3642 28.8501C33.3614 28.8501 33.3586 28.8501 33.3558 28.8501C33.353 28.8501 33.3501 28.8501 33.3473 28.8501C33.3445 28.8501 33.3416 28.8501 33.3388 28.8501C33.3359 28.8501 33.3331 28.8501 33.3303 28.8501C33.3274 28.8501 33.3246 28.8501 33.3217 28.8501C33.3189 28.8501 33.316 28.8501 33.3132 28.8501C33.3103 28.8501 33.3075 28.8501 33.3046 28.8501C33.3017 28.8501 33.2989 28.8501 33.296 28.8501C33.2932 28.8501 33.2903 28.8501 33.2874 28.8501C33.2845 28.8501 33.2817 28.8501 33.2788 28.8501C33.2759 28.8501 33.273 28.8501 33.2702 28.8501C33.2673 28.8501 33.2644 28.8501 33.2615 28.8501C33.2586 28.8501 33.2557 28.8501 33.2528 28.8501C33.25 28.8501 33.2471 28.8501 33.2442 28.8501C33.2413 28.8501 33.2384 28.8501 33.2355 28.8501C33.2326 28.8501 33.2296 28.8501 33.2267 28.8501C33.2238 28.8501 33.2209 28.8501 33.218 28.8501C33.2151 28.8501 33.2122 28.8501 33.2093 28.8501C33.2063 28.8501 33.2034 28.8501 33.2005 28.8501C33.1976 28.8501 33.1946 28.8501 33.1917 28.8501C33.1888 28.8501 33.1858 28.8501 33.1829 28.8501C33.18 28.8501 33.177 28.8501 33.1741 28.8501C33.1712 28.8501 33.1682 28.8501 33.1653 28.8501C33.1623 28.8501 33.1594 28.8501 33.1564 28.8501C33.1535 28.8501 33.1505 28.8501 33.1476 28.8501C33.1446 28.8501 33.1416 28.8501 33.1387 28.8501C33.1357 28.8501 33.1327 28.8501 33.1298 28.8501C33.1268 28.8501 33.1238 28.8501 33.1209 28.8501C33.1179 28.8501 33.1149 28.8501 33.1119 28.8501C33.109 28.8501 33.106 28.8501 33.103 28.8501C33.1 28.8501 33.097 28.8501 33.094 28.8501C33.0911 28.8501 33.0881 28.8501 33.0851 28.8501C33.0821 28.8501 33.0791 28.8501 33.0761 28.8501C33.0731 28.8501 33.0701 28.8501 33.0671 28.8501C33.0641 28.8501 33.0611 28.8501 33.058 28.8501C33.055 28.8501 33.052 28.8501 33.049 28.8501C33.046 28.8501 33.043 28.8501 33.04 28.8501C33.0369 28.8501 33.0339 28.8501 33.0309 28.8501C33.0279 28.8501 33.0248 28.8501 33.0218 28.8501C33.0188 28.8501 33.0157 28.8501 33.0127 28.8501C33.0097 28.8501 33.0066 28.8501 33.0036 28.8501C33.0005 28.8501 32.9975 28.8501 32.9944 28.8501C32.9914 28.8501 32.9883 28.8501 32.9853 28.8501C32.9822 28.8501 32.9792 28.8501 32.9761 28.8501C32.9731 28.8501 32.97 28.8501 32.967 28.8501C32.9639 28.8501 32.9608 28.8501 32.9578 28.8501C32.9547 28.8501 32.9516 28.8501 32.9485 28.8501C32.9455 28.8501 32.9424 28.8501 32.9393 28.8501C32.9362 28.8501 32.9332 28.8501 32.9301 28.8501C32.927 28.8501 32.9239 28.8501 32.9208 28.8501C32.9177 28.8501 32.9146 28.8501 32.9115 28.8501C32.9085 28.8501 32.9054 28.8501 32.9023 28.8501C32.8992 28.8501 32.8961 28.8501 32.893 28.8501C32.8898 28.8501 32.8867 28.8501 32.8836 28.8501C32.8805 28.8501 32.8774 28.8501 32.8743 28.8501C32.8712 28.8501 32.8681 28.8501 32.8649 28.8501C32.8618 28.8501 32.8587 28.8501 32.8556 28.8501C32.8525 28.8501 32.8493 28.8501 32.8462 28.8501C32.8431 28.8501 32.8399 28.8501 32.8368 28.8501C32.8337 28.8501 32.8305 28.8501 32.8274 28.8501C32.8242 28.8501 32.8211 28.8501 32.818 28.8501C32.8148 28.8501 32.8117 28.8501 32.8085 28.8501C32.8054 28.8501 32.8022 28.8501 32.7991 28.8501C32.7959 28.8501 32.7927 28.8501 32.7896 28.8501C32.7864 28.8501 32.7833 28.8501 32.7801 28.8501C32.7769 28.8501 32.7738 28.8501 32.7706 28.8501C32.7674 28.8501 32.7643 28.8501 32.7611 28.8501C32.7579 28.8501 32.7547 28.8501 32.7515 28.8501C32.7484 28.8501 32.7452 28.8501 32.742 28.8501C32.7388 28.8501 32.7356 28.8501 32.7324 28.8501C32.7292 28.8501 32.726 28.8501 32.7229 28.8501C32.7197 28.8501 32.7165 28.8501 32.7133 28.8501C32.7101 28.8501 32.7069 28.8501 32.7036 28.8501C32.7004 28.8501 32.6972 28.8501 32.694 28.8501C32.6908 28.8501 32.6876 28.8501 32.6844 28.8501C32.6812 28.8501 32.678 28.8501 32.6747 28.8501C32.6715 28.8501 32.6683 28.8501 32.6651 28.8501C32.6618 28.8501 32.6586 28.8501 32.6554 28.8501C32.6521 28.8501 32.6489 28.8501 32.6457 28.8501C32.6424 28.8501 32.6392 28.8501 32.636 28.8501C32.6327 28.8501 32.6295 28.8501 32.6262 28.8501C32.623 28.8501 32.6197 28.8501 32.6165 28.8501C32.6132 28.8501 32.61 28.8501 32.6067 28.8501C32.6035 28.8501 32.6002 28.8501 32.597 28.8501C32.5937 28.8501 32.5904 28.8501 32.5872 28.8501C32.5839 28.8501 32.5806 28.8501 32.5774 28.8501C32.5741 28.8501 32.5708 28.8501 32.5676 28.8501C32.5643 28.8501 32.561 28.8501 32.5577 28.8501C32.5544 28.8501 32.5512 28.8501 32.5479 28.8501C32.5446 28.8501 32.5413 28.8501 32.538 28.8501C32.5347 28.8501 32.5314 28.8501 32.5281 28.8501C32.5248 28.8501 32.5216 28.8501 32.5183 28.8501C32.515 28.8501 32.5117 28.8501 32.5083 28.8501C32.505 28.8501 32.5017 28.8501 32.4984 28.8501C32.4951 28.8501 32.4918 28.8501 32.4885 28.8501C32.4852 28.8501 32.4819 28.8501 32.4785 28.8501C32.4752 28.8501 32.4719 28.8501 32.4686 28.8501C32.4653 28.8501 32.4619 28.8501 32.4586 28.8501C32.4553 28.8501 32.4519 28.8501 32.4486 28.8501C32.4453 28.8501 32.4419 28.8501 32.4386 28.8501C32.4353 28.8501 32.4319 28.8501 32.4286 28.8501C32.4252 28.8501 32.4219 28.8501 32.4186 28.8501C32.4152 28.8501 32.4119 28.8501 32.4085 28.8501C32.4051 28.8501 32.4018 28.8501 32.3984 28.8501C32.3951 28.8501 32.3917 28.8501 32.3884 28.8501C32.385 28.8501 32.3816 28.8501 32.3783 28.8501C32.3749 28.8501 32.3715 28.8501 32.3682 28.8501C32.3648 28.8501 32.3614 28.8501 32.358 28.8501C32.3547 28.8501 32.3513 28.8501 32.3479 28.8501C32.3445 28.8501 32.3411 28.8501 32.3378 28.8501C32.3344 28.8501 32.331 28.8501 32.3276 28.8501C32.3242 28.8501 32.3208 28.8501 32.3174 28.8501C32.314 28.8501 32.3106 28.8501 32.3072 28.8501C32.3038 28.8501 32.3004 28.8501 32.297 28.8501C32.2936 28.8501 32.2902 28.8501 32.2868 28.8501C32.2834 28.8501 32.28 28.8501 32.2766 28.8501C32.2732 28.8501 32.2697 28.8501 32.2663 28.8501C32.2629 28.8501 32.2595 28.8501 32.2561 28.8501C32.2526 28.8501 32.2492 28.8501 32.2458 28.8501C32.2424 28.8501 32.2389 28.8501 32.2355 28.8501C32.2321 28.8501 32.2286 28.8501 32.2252 28.8501C32.2217 28.8501 32.2183 28.8501 32.2149 28.8501C32.2114 28.8501 32.208 28.8501 32.2045 28.8501C32.2011 28.8501 32.1976 28.8501 32.1942 28.8501C32.1907 28.8501 32.1873 28.8501 32.1838 28.8501C32.1804 28.8501 32.1769 28.8501 32.1735 28.8501C32.17 28.8501 32.1665 28.8501 32.1631 28.8501C32.1596 28.8501 32.1561 28.8501 32.1527 28.8501C32.1492 28.8501 32.1457 28.8501 32.1423 28.8501C32.1388 28.8501 32.1353 28.8501 32.1318 28.8501C32.1283 28.8501 32.1249 28.8501 32.1214 28.8501C32.1179 28.8501 32.1144 28.8501 32.1109 28.8501C32.1074 28.8501 32.104 28.8501 32.1005 28.8501C32.097 28.8501 32.0935 28.8501 32.09 28.8501C32.0865 28.8501 32.083 28.8501 32.0795 28.8501C32.076 28.8501 32.0725 28.8501 32.069 28.8501C32.0655 28.8501 32.062 28.8501 32.0584 28.8501C32.0549 28.8501 32.0514 28.8501 32.0479 28.8501C32.0444 28.8501 32.0409 28.8501 32.0374 28.8501C32.0338 28.8501 32.0303 28.8501 32.0268 28.8501C32.0233 28.8501 32.0197 28.8501 32.0162 28.8501C32.0127 28.8501 32.0092 28.8501 32.0056 28.8501C32.0021 28.8501 31.9986 28.8501 31.995 28.8501C31.9915 28.8501 31.9879 28.8501 31.9844 28.8501C31.9809 28.8501 31.9773 28.8501 31.9738 28.8501C31.9702 28.8501 31.9667 28.8501 31.9631 28.8501C31.9596 28.8501 31.956 28.8501 31.9525 28.8501C31.9489 28.8501 31.9454 28.8501 31.9418 28.8501C31.9382 28.8501 31.9347 28.8501 31.9311 28.8501C31.9275 28.8501 31.924 28.8501 31.9204 28.8501C31.9168 28.8501 31.9133 28.8501 31.9097 28.8501C31.9061 28.8501 31.9025 28.8501 31.899 28.8501C31.8954 28.8501 31.8918 28.8501 31.8882 28.8501C31.8847 28.8501 31.8811 28.8501 31.8775 28.8501C31.8739 28.8501 31.8703 28.8501 31.8667 28.8501C31.8631 28.8501 31.8595 28.8501 31.8559 28.8501C31.8523 28.8501 31.8487 28.8501 31.8451 28.8501C31.8415 28.8501 31.8379 28.8501 31.8343 28.8501C31.8307 28.8501 31.8271 28.8501 31.8235 28.8501C31.8199 28.8501 31.8163 28.8501 31.8127 28.8501C31.8091 28.8501 31.8055 28.8501 31.8019 28.8501C31.7982 28.8501 31.7946 28.8501 31.791 28.8501C31.7874 28.8501 31.7838 28.8501 31.7801 28.8501C31.7765 28.8501 31.7729 28.8501 31.7692 28.8501C31.7656 28.8501 31.762 28.8501 31.7583 28.8501C31.7547 28.8501 31.7511 28.8501 31.7474 28.8501C31.7438 28.8501 31.7402 28.8501 31.7365 28.8501C31.7329 28.8501 31.7292 28.8501 31.7256 28.8501C31.7219 28.8501 31.7183 28.8501 31.7146 28.8501C31.711 28.8501 31.7073 28.8501 31.7037 28.8501C31.7 28.8501 31.6964 28.8501 31.6927 28.8501C31.689 28.8501 31.6854 28.8501 31.6817 28.8501C31.6781 28.8501 31.6744 28.8501 31.6707 28.8501C31.6671 28.8501 31.6634 28.8501 31.6597 28.8501C31.656 28.8501 31.6524 28.8501 31.6487 28.8501C31.645 28.8501 31.6413 28.8501 31.6377 28.8501C31.634 28.8501 31.6303 28.8501 31.6266 28.8501C31.6229 28.8501 31.6192 28.8501 31.6155 28.8501C31.6119 28.8501 31.6082 28.8501 31.6045 28.8501C31.6008 28.8501 31.5971 28.8501 31.5934 28.8501C31.5897 28.8501 31.586 28.8501 31.5823 28.8501C31.5786 28.8501 31.5749 28.8501 31.5712 28.8501C31.5675 28.8501 31.5638 28.8501 31.56 28.8501C31.5563 28.8501 31.5526 28.8501 31.5489 28.8501C31.5452 28.8501 31.5415 28.8501 31.5378 28.8501C31.534 28.8501 31.5303 28.8501 31.5266 28.8501C31.5229 28.8501 31.5191 28.8501 31.5154 28.8501C31.5117 28.8501 31.508 28.8501 31.5042 28.8501C31.5005 28.8501 31.4968 28.8501 31.493 28.8501C31.4893 28.8501 31.4856 28.8501 31.4818 28.8501C31.4781 28.8501 31.4743 28.8501 31.4706 28.8501C31.4668 28.8501 31.4631 28.8501 31.4594 28.8501C31.4556 28.8501 31.4519 28.8501 31.4481 28.8501C31.4444 28.8501 31.4406 28.8501 31.4368 28.8501C31.4331 28.8501 31.4293 28.8501 31.4256 28.8501C31.4218 28.8501 31.418 28.8501 31.4143 28.8501C31.4105 28.8501 31.4068 28.8501 31.403 28.8501C31.3992 28.8501 31.3954 28.8501 31.3917 28.8501C31.3879 28.8501 31.3841 28.8501 31.3804 28.8501C31.3766 28.8501 31.3728 28.8501 31.369 28.8501C31.3652 28.8501 31.3615 28.8501 31.3577 28.8501C31.3539 28.8501 31.3501 28.8501 31.3463 28.8501C31.3425 28.8501 31.3387 28.8501 31.3349 28.8501C31.3311 28.8501 31.3274 28.8501 31.3236 28.8501C31.3198 28.8501 31.316 28.8501 31.3122 28.8501C31.3084 28.8501 31.3046 28.8501 31.3008 28.8501C31.2969 28.8501 31.2931 28.8501 31.2893 28.8501C31.2855 28.8501 31.2817 28.8501 31.2779 28.8501C31.2741 28.8501 31.2703 28.8501 31.2665 28.8501C31.2626 28.8501 31.2588 28.8501 31.255 28.8501C31.2512 28.8501 31.2474 28.8501 31.2435 28.8501C31.2397 28.8501 31.2359 28.8501 31.2321 28.8501C31.2282 28.8501 31.2244 28.8501 31.2206 28.8501C31.2167 28.8501 31.2129 28.8501 31.2091 28.8501C31.2052 28.8501 31.2014 28.8501 31.1975 28.8501C31.1937 28.8501 31.1899 28.8501 31.186 28.8501C31.1822 28.8501 31.1783 28.8501 31.1745 28.8501C31.1706 28.8501 31.1668 28.8501 31.1629 28.8501C31.1591 28.8501 31.1552 28.8501 31.1514 28.8501C31.1475 28.8501 31.1437 28.8501 31.1398 28.8501C31.1359 28.8501 31.1321 28.8501 31.1282 28.8501C31.1243 28.8501 31.1205 28.8501 31.1166 28.8501C31.1127 28.8501 31.1089 28.8501 31.105 28.8501C31.1011 28.8501 31.0973 28.8501 31.0934 28.8501C31.0895 28.8501 31.0856 28.8501 31.0817 28.8501C31.0779 28.8501 31.074 28.8501 31.0701 28.8501C31.0662 28.8501 31.0623 28.8501 31.0585 28.8501C31.0546 28.8501 31.0507 28.8501 31.0468 28.8501C31.0429 28.8501 31.039 28.8501 31.0351 28.8501C31.0312 28.8501 31.0273 28.8501 31.0234 28.8501C31.0195 28.8501 31.0156 28.8501 31.0117 28.8501C31.0078 28.8501 31.0039 28.8501 31 28.8501V30.8501C31.0039 30.8501 31.0078 30.8501 31.0117 30.8501C31.0156 30.8501 31.0195 30.8501 31.0234 30.8501C31.0273 30.8501 31.0312 30.8501 31.0351 30.8501C31.039 30.8501 31.0429 30.8501 31.0468 30.8501C31.0507 30.8501 31.0546 30.8501 31.0585 30.8501C31.0623 30.8501 31.0662 30.8501 31.0701 30.8501C31.074 30.8501 31.0779 30.8501 31.0817 30.8501C31.0856 30.8501 31.0895 30.8501 31.0934 30.8501C31.0973 30.8501 31.1011 30.8501 31.105 30.8501C31.1089 30.8501 31.1127 30.8501 31.1166 30.8501C31.1205 30.8501 31.1243 30.8501 31.1282 30.8501C31.1321 30.8501 31.1359 30.8501 31.1398 30.8501C31.1437 30.8501 31.1475 30.8501 31.1514 30.8501C31.1552 30.8501 31.1591 30.8501 31.1629 30.8501C31.1668 30.8501 31.1706 30.8501 31.1745 30.8501C31.1783 30.8501 31.1822 30.8501 31.186 30.8501C31.1899 30.8501 31.1937 30.8501 31.1975 30.8501C31.2014 30.8501 31.2052 30.8501 31.2091 30.8501C31.2129 30.8501 31.2167 30.8501 31.2206 30.8501C31.2244 30.8501 31.2282 30.8501 31.2321 30.8501C31.2359 30.8501 31.2397 30.8501 31.2435 30.8501C31.2474 30.8501 31.2512 30.8501 31.255 30.8501C31.2588 30.8501 31.2626 30.8501 31.2665 30.8501C31.2703 30.8501 31.2741 30.8501 31.2779 30.8501C31.2817 30.8501 31.2855 30.8501 31.2893 30.8501C31.2931 30.8501 31.2969 30.8501 31.3008 30.8501C31.3046 30.8501 31.3084 30.8501 31.3122 30.8501C31.316 30.8501 31.3198 30.8501 31.3236 30.8501C31.3274 30.8501 31.3311 30.8501 31.3349 30.8501C31.3387 30.8501 31.3425 30.8501 31.3463 30.8501C31.3501 30.8501 31.3539 30.8501 31.3577 30.8501C31.3615 30.8501 31.3652 30.8501 31.369 30.8501C31.3728 30.8501 31.3766 30.8501 31.3804 30.8501C31.3841 30.8501 31.3879 30.8501 31.3917 30.8501C31.3954 30.8501 31.3992 30.8501 31.403 30.8501C31.4068 30.8501 31.4105 30.8501 31.4143 30.8501C31.418 30.8501 31.4218 30.8501 31.4256 30.8501C31.4293 30.8501 31.4331 30.8501 31.4368 30.8501C31.4406 30.8501 31.4444 30.8501 31.4481 30.8501C31.4519 30.8501 31.4556 30.8501 31.4594 30.8501C31.4631 30.8501 31.4668 30.8501 31.4706 30.8501C31.4743 30.8501 31.4781 30.8501 31.4818 30.8501C31.4856 30.8501 31.4893 30.8501 31.493 30.8501C31.4968 30.8501 31.5005 30.8501 31.5042 30.8501C31.508 30.8501 31.5117 30.8501 31.5154 30.8501C31.5191 30.8501 31.5229 30.8501 31.5266 30.8501C31.5303 30.8501 31.534 30.8501 31.5378 30.8501C31.5415 30.8501 31.5452 30.8501 31.5489 30.8501C31.5526 30.8501 31.5563 30.8501 31.56 30.8501C31.5638 30.8501 31.5675 30.8501 31.5712 30.8501C31.5749 30.8501 31.5786 30.8501 31.5823 30.8501C31.586 30.8501 31.5897 30.8501 31.5934 30.8501C31.5971 30.8501 31.6008 30.8501 31.6045 30.8501C31.6082 30.8501 31.6119 30.8501 31.6155 30.8501C31.6192 30.8501 31.6229 30.8501 31.6266 30.8501C31.6303 30.8501 31.634 30.8501 31.6377 30.8501C31.6413 30.8501 31.645 30.8501 31.6487 30.8501C31.6524 30.8501 31.656 30.8501 31.6597 30.8501C31.6634 30.8501 31.6671 30.8501 31.6707 30.8501C31.6744 30.8501 31.6781 30.8501 31.6817 30.8501C31.6854 30.8501 31.689 30.8501 31.6927 30.8501C31.6964 30.8501 31.7 30.8501 31.7037 30.8501C31.7073 30.8501 31.711 30.8501 31.7146 30.8501C31.7183 30.8501 31.7219 30.8501 31.7256 30.8501C31.7292 30.8501 31.7329 30.8501 31.7365 30.8501C31.7402 30.8501 31.7438 30.8501 31.7474 30.8501C31.7511 30.8501 31.7547 30.8501 31.7583 30.8501C31.762 30.8501 31.7656 30.8501 31.7692 30.8501C31.7729 30.8501 31.7765 30.8501 31.7801 30.8501C31.7838 30.8501 31.7874 30.8501 31.791 30.8501C31.7946 30.8501 31.7982 30.8501 31.8019 30.8501C31.8055 30.8501 31.8091 30.8501 31.8127 30.8501C31.8163 30.8501 31.8199 30.8501 31.8235 30.8501C31.8271 30.8501 31.8307 30.8501 31.8343 30.8501C31.8379 30.8501 31.8415 30.8501 31.8451 30.8501C31.8487 30.8501 31.8523 30.8501 31.8559 30.8501C31.8595 30.8501 31.8631 30.8501 31.8667 30.8501C31.8703 30.8501 31.8739 30.8501 31.8775 30.8501C31.8811 30.8501 31.8847 30.8501 31.8882 30.8501C31.8918 30.8501 31.8954 30.8501 31.899 30.8501C31.9025 30.8501 31.9061 30.8501 31.9097 30.8501C31.9133 30.8501 31.9168 30.8501 31.9204 30.8501C31.924 30.8501 31.9275 30.8501 31.9311 30.8501C31.9347 30.8501 31.9382 30.8501 31.9418 30.8501C31.9454 30.8501 31.9489 30.8501 31.9525 30.8501C31.956 30.8501 31.9596 30.8501 31.9631 30.8501C31.9667 30.8501 31.9702 30.8501 31.9738 30.8501C31.9773 30.8501 31.9809 30.8501 31.9844 30.8501C31.9879 30.8501 31.9915 30.8501 31.995 30.8501C31.9986 30.8501 32.0021 30.8501 32.0056 30.8501C32.0092 30.8501 32.0127 30.8501 32.0162 30.8501C32.0197 30.8501 32.0233 30.8501 32.0268 30.8501C32.0303 30.8501 32.0338 30.8501 32.0374 30.8501C32.0409 30.8501 32.0444 30.8501 32.0479 30.8501C32.0514 30.8501 32.0549 30.8501 32.0584 30.8501C32.062 30.8501 32.0655 30.8501 32.069 30.8501C32.0725 30.8501 32.076 30.8501 32.0795 30.8501C32.083 30.8501 32.0865 30.8501 32.09 30.8501C32.0935 30.8501 32.097 30.8501 32.1005 30.8501C32.104 30.8501 32.1074 30.8501 32.1109 30.8501C32.1144 30.8501 32.1179 30.8501 32.1214 30.8501C32.1249 30.8501 32.1283 30.8501 32.1318 30.8501C32.1353 30.8501 32.1388 30.8501 32.1423 30.8501C32.1457 30.8501 32.1492 30.8501 32.1527 30.8501C32.1561 30.8501 32.1596 30.8501 32.1631 30.8501C32.1665 30.8501 32.17 30.8501 32.1735 30.8501C32.1769 30.8501 32.1804 30.8501 32.1838 30.8501C32.1873 30.8501 32.1907 30.8501 32.1942 30.8501C32.1976 30.8501 32.2011 30.8501 32.2045 30.8501C32.208 30.8501 32.2114 30.8501 32.2149 30.8501C32.2183 30.8501 32.2217 30.8501 32.2252 30.8501C32.2286 30.8501 32.2321 30.8501 32.2355 30.8501C32.2389 30.8501 32.2424 30.8501 32.2458 30.8501C32.2492 30.8501 32.2526 30.8501 32.2561 30.8501C32.2595 30.8501 32.2629 30.8501 32.2663 30.8501C32.2697 30.8501 32.2732 30.8501 32.2766 30.8501C32.28 30.8501 32.2834 30.8501 32.2868 30.8501C32.2902 30.8501 32.2936 30.8501 32.297 30.8501C32.3004 30.8501 32.3038 30.8501 32.3072 30.8501C32.3106 30.8501 32.314 30.8501 32.3174 30.8501C32.3208 30.8501 32.3242 30.8501 32.3276 30.8501C32.331 30.8501 32.3344 30.8501 32.3378 30.8501C32.3411 30.8501 32.3445 30.8501 32.3479 30.8501C32.3513 30.8501 32.3547 30.8501 32.358 30.8501C32.3614 30.8501 32.3648 30.8501 32.3682 30.8501C32.3715 30.8501 32.3749 30.8501 32.3783 30.8501C32.3816 30.8501 32.385 30.8501 32.3884 30.8501C32.3917 30.8501 32.3951 30.8501 32.3984 30.8501C32.4018 30.8501 32.4051 30.8501 32.4085 30.8501C32.4119 30.8501 32.4152 30.8501 32.4186 30.8501C32.4219 30.8501 32.4252 30.8501 32.4286 30.8501C32.4319 30.8501 32.4353 30.8501 32.4386 30.8501C32.4419 30.8501 32.4453 30.8501 32.4486 30.8501C32.4519 30.8501 32.4553 30.8501 32.4586 30.8501C32.4619 30.8501 32.4653 30.8501 32.4686 30.8501C32.4719 30.8501 32.4752 30.8501 32.4785 30.8501C32.4819 30.8501 32.4852 30.8501 32.4885 30.8501C32.4918 30.8501 32.4951 30.8501 32.4984 30.8501C32.5017 30.8501 32.505 30.8501 32.5083 30.8501C32.5117 30.8501 32.515 30.8501 32.5183 30.8501C32.5216 30.8501 32.5248 30.8501 32.5281 30.8501C32.5314 30.8501 32.5347 30.8501 32.538 30.8501C32.5413 30.8501 32.5446 30.8501 32.5479 30.8501C32.5512 30.8501 32.5544 30.8501 32.5577 30.8501C32.561 30.8501 32.5643 30.8501 32.5676 30.8501C32.5708 30.8501 32.5741 30.8501 32.5774 30.8501C32.5806 30.8501 32.5839 30.8501 32.5872 30.8501C32.5904 30.8501 32.5937 30.8501 32.597 30.8501C32.6002 30.8501 32.6035 30.8501 32.6067 30.8501C32.61 30.8501 32.6132 30.8501 32.6165 30.8501C32.6197 30.8501 32.623 30.8501 32.6262 30.8501C32.6295 30.8501 32.6327 30.8501 32.636 30.8501C32.6392 30.8501 32.6424 30.8501 32.6457 30.8501C32.6489 30.8501 32.6521 30.8501 32.6554 30.8501C32.6586 30.8501 32.6618 30.8501 32.6651 30.8501C32.6683 30.8501 32.6715 30.8501 32.6747 30.8501C32.678 30.8501 32.6812 30.8501 32.6844 30.8501C32.6876 30.8501 32.6908 30.8501 32.694 30.8501C32.6972 30.8501 32.7004 30.8501 32.7036 30.8501C32.7069 30.8501 32.7101 30.8501 32.7133 30.8501C32.7165 30.8501 32.7197 30.8501 32.7229 30.8501C32.726 30.8501 32.7292 30.8501 32.7324 30.8501C32.7356 30.8501 32.7388 30.8501 32.742 30.8501C32.7452 30.8501 32.7484 30.8501 32.7515 30.8501C32.7547 30.8501 32.7579 30.8501 32.7611 30.8501C32.7643 30.8501 32.7674 30.8501 32.7706 30.8501C32.7738 30.8501 32.7769 30.8501 32.7801 30.8501C32.7833 30.8501 32.7864 30.8501 32.7896 30.8501C32.7927 30.8501 32.7959 30.8501 32.7991 30.8501C32.8022 30.8501 32.8054 30.8501 32.8085 30.8501C32.8117 30.8501 32.8148 30.8501 32.818 30.8501C32.8211 30.8501 32.8242 30.8501 32.8274 30.8501C32.8305 30.8501 32.8337 30.8501 32.8368 30.8501C32.8399 30.8501 32.8431 30.8501 32.8462 30.8501C32.8493 30.8501 32.8525 30.8501 32.8556 30.8501C32.8587 30.8501 32.8618 30.8501 32.8649 30.8501C32.8681 30.8501 32.8712 30.8501 32.8743 30.8501C32.8774 30.8501 32.8805 30.8501 32.8836 30.8501C32.8867 30.8501 32.8898 30.8501 32.893 30.8501C32.8961 30.8501 32.8992 30.8501 32.9023 30.8501C32.9054 30.8501 32.9085 30.8501 32.9115 30.8501C32.9146 30.8501 32.9177 30.8501 32.9208 30.8501C32.9239 30.8501 32.927 30.8501 32.9301 30.8501C32.9332 30.8501 32.9362 30.8501 32.9393 30.8501C32.9424 30.8501 32.9455 30.8501 32.9485 30.8501C32.9516 30.8501 32.9547 30.8501 32.9578 30.8501C32.9608 30.8501 32.9639 30.8501 32.967 30.8501C32.97 30.8501 32.9731 30.8501 32.9761 30.8501C32.9792 30.8501 32.9822 30.8501 32.9853 30.8501C32.9883 30.8501 32.9914 30.8501 32.9944 30.8501C32.9975 30.8501 33.0005 30.8501 33.0036 30.8501C33.0066 30.8501 33.0097 30.8501 33.0127 30.8501C33.0157 30.8501 33.0188 30.8501 33.0218 30.8501C33.0248 30.8501 33.0279 30.8501 33.0309 30.8501C33.0339 30.8501 33.0369 30.8501 33.04 30.8501C33.043 30.8501 33.046 30.8501 33.049 30.8501C33.052 30.8501 33.055 30.8501 33.058 30.8501C33.0611 30.8501 33.0641 30.8501 33.0671 30.8501C33.0701 30.8501 33.0731 30.8501 33.0761 30.8501C33.0791 30.8501 33.0821 30.8501 33.0851 30.8501C33.0881 30.8501 33.0911 30.8501 33.094 30.8501C33.097 30.8501 33.1 30.8501 33.103 30.8501C33.106 30.8501 33.109 30.8501 33.1119 30.8501C33.1149 30.8501 33.1179 30.8501 33.1209 30.8501C33.1238 30.8501 33.1268 30.8501 33.1298 30.8501C33.1327 30.8501 33.1357 30.8501 33.1387 30.8501C33.1416 30.8501 33.1446 30.8501 33.1476 30.8501C33.1505 30.8501 33.1535 30.8501 33.1564 30.8501C33.1594 30.8501 33.1623 30.8501 33.1653 30.8501C33.1682 30.8501 33.1712 30.8501 33.1741 30.8501C33.177 30.8501 33.18 30.8501 33.1829 30.8501C33.1858 30.8501 33.1888 30.8501 33.1917 30.8501C33.1946 30.8501 33.1976 30.8501 33.2005 30.8501C33.2034 30.8501 33.2063 30.8501 33.2093 30.8501C33.2122 30.8501 33.2151 30.8501 33.218 30.8501C33.2209 30.8501 33.2238 30.8501 33.2267 30.8501C33.2296 30.8501 33.2326 30.8501 33.2355 30.8501C33.2384 30.8501 33.2413 30.8501 33.2442 30.8501C33.2471 30.8501 33.25 30.8501 33.2528 30.8501C33.2557 30.8501 33.2586 30.8501 33.2615 30.8501C33.2644 30.8501 33.2673 30.8501 33.2702 30.8501C33.273 30.8501 33.2759 30.8501 33.2788 30.8501C33.2817 30.8501 33.2845 30.8501 33.2874 30.8501C33.2903 30.8501 33.2932 30.8501 33.296 30.8501C33.2989 30.8501 33.3017 30.8501 33.3046 30.8501C33.3075 30.8501 33.3103 30.8501 33.3132 30.8501C33.316 30.8501 33.3189 30.8501 33.3217 30.8501C33.3246 30.8501 33.3274 30.8501 33.3303 30.8501C33.3331 30.8501 33.3359 30.8501 33.3388 30.8501C33.3416 30.8501 33.3445 30.8501 33.3473 30.8501C33.3501 30.8501 33.353 30.8501 33.3558 30.8501C33.3586 30.8501 33.3614 30.8501 33.3642 30.8501C33.3671 30.8501 33.3699 30.8501 33.3727 30.8501C33.3755 30.8501 33.3783 30.8501 33.3811 30.8501C33.3839 30.8501 33.3868 30.8501 33.3896 30.8501C33.3924 30.8501 33.3952 30.8501 33.398 30.8501C33.4008 30.8501 33.4036 30.8501 33.4064 30.8501C33.4091 30.8501 33.4119 30.8501 33.4147 30.8501C33.4175 30.8501 33.4203 30.8501 33.4231 30.8501C33.4259 30.8501 33.4286 30.8501 33.4314 30.8501C33.4342 30.8501 33.437 30.8501 33.4397 30.8501C33.4425 30.8501 33.4453 30.8501 33.448 30.8501C33.4508 30.8501 33.4536 30.8501 33.4563 30.8501C33.4591 30.8501 33.4618 30.8501 33.4646 30.8501C33.4673 30.8501 33.4701 30.8501 33.4728 30.8501C33.4756 30.8501 33.4783 30.8501 33.4811 30.8501C33.4838 30.8501 33.4866 30.8501 33.4893 30.8501C33.492 30.8501 33.4948 30.8501 33.4975 30.8501C33.5002 30.8501 33.503 30.8501 33.5057 30.8501C33.5084 30.8501 33.5111 30.8501 33.5139 30.8501C33.5166 30.8501 33.5193 30.8501 33.522 30.8501C33.5247 30.8501 33.5274 30.8501 33.5301 30.8501C33.5328 30.8501 33.5356 30.8501 33.5383 30.8501C33.541 30.8501 33.5437 30.8501 33.5464 30.8501C33.549 30.8501 33.5517 30.8501 33.5544 30.8501C33.5571 30.8501 33.5598 30.8501 33.5625 30.8501C33.5652 30.8501 33.5679 30.8501 33.5705 30.8501C33.5732 30.8501 33.5759 30.8501 33.5786 30.8501C33.5813 30.8501 33.5839 30.8501 33.5866 30.8501C33.5893 30.8501 33.5919 30.8501 33.5946 30.8501C33.5973 30.8501 33.5999 30.8501 33.6026 30.8501C33.6052 30.8501 33.6079 30.8501 33.6105 30.8501C33.6132 30.8501 33.6158 30.8501 33.6185 30.8501C33.6211 30.8501 33.6238 30.8501 33.6264 30.8501C33.629 30.8501 33.6317 30.8501 33.6343 30.8501C33.6369 30.8501 33.6396 30.8501 33.6422 30.8501C33.6448 30.8501 33.6475 30.8501 33.6501 30.8501C33.6527 30.8501 33.6553 30.8501 33.6579 30.8501C33.6606 30.8501 33.6632 30.8501 33.6658 30.8501C33.6684 30.8501 33.671 30.8501 33.6736 30.8501C33.6762 30.8501 33.6788 30.8501 33.6814 30.8501C33.684 30.8501 33.6866 30.8501 33.6892 30.8501C33.6918 30.8501 33.6944 30.8501 33.697 30.8501C33.6996 30.8501 33.7021 30.8501 33.7047 30.8501C33.7073 30.8501 33.7099 30.8501 33.7125 30.8501C33.715 30.8501 33.7176 30.8501 33.7202 30.8501C33.7227 30.8501 33.7253 30.8501 33.7279 30.8501C33.7304 30.8501 33.733 30.8501 33.7356 30.8501C33.7381 30.8501 33.7407 30.8501 33.7432 30.8501C33.7458 30.8501 33.7483 30.8501 33.7509 30.8501C33.7534 30.8501 33.756 30.8501 33.7585 30.8501C33.761 30.8501 33.7636 30.8501 33.7661 30.8501C33.7686 30.8501 33.7712 30.8501 33.7737 30.8501C33.7762 30.8501 33.7788 30.8501 33.7813 30.8501C33.7838 30.8501 33.7863 30.8501 33.7888 30.8501C33.7913 30.8501 33.7939 30.8501 33.7964 30.8501C33.7989 30.8501 33.8014 30.8501 33.8039 30.8501C33.8064 30.8501 33.8089 30.8501 33.8114 30.8501C33.8139 30.8501 33.8164 30.8501 33.8189 30.8501C33.8214 30.8501 33.8239 30.8501 33.8264 30.8501C33.8288 30.8501 33.8313 30.8501 33.8338 30.8501C33.8363 30.8501 33.8388 30.8501 33.8412 30.8501C33.8437 30.8501 33.8462 30.8501 33.8487 30.8501C33.8511 30.8501 33.8536 30.8501 33.8561 30.8501C33.8585 30.8501 33.861 30.8501 33.8634 30.8501C33.8659 30.8501 33.8683 30.8501 33.8708 30.8501C33.8732 30.8501 33.8757 30.8501 33.8781 30.8501C33.8806 30.8501 33.883 30.8501 33.8855 30.8501C33.8879 30.8501 33.8903 30.8501 33.8928 30.8501C33.8952 30.8501 33.8976 30.8501 33.9001 30.8501C33.9025 30.8501 33.9049 30.8501 33.9073 30.8501C33.9097 30.8501 33.9122 30.8501 33.9146 30.8501C33.917 30.8501 33.9194 30.8501 33.9218 30.8501C33.9242 30.8501 33.9266 30.8501 33.929 30.8501C33.9314 30.8501 33.9338 30.8501 33.9362 30.8501C33.9386 30.8501 33.941 30.8501 33.9434 30.8501C33.9458 30.8501 33.9482 30.8501 33.9506 30.8501C33.953 30.8501 33.9553 30.8501 33.9577 30.8501C33.9601 30.8501 33.9625 30.8501 33.9648 30.8501C33.9672 30.8501 33.9696 30.8501 33.9719 30.8501C33.9743 30.8501 33.9767 30.8501 33.979 30.8501C33.9814 30.8501 33.9837 30.8501 33.9861 30.8501C33.9885 30.8501 33.9908 30.8501 33.9932 30.8501C33.9955 30.8501 33.9978 30.8501 34.0002 30.8501C34.0025 30.8501 34.0049 30.8501 34.0072 30.8501C34.0095 30.8501 34.0119 30.8501 34.0142 30.8501C34.0165 30.8501 34.0188 30.8501 34.0212 30.8501C34.0235 30.8501 34.0258 30.8501 34.0281 30.8501C34.0304 30.8501 34.0328 30.8501 34.0351 30.8501C34.0374 30.8501 34.0397 30.8501 34.042 30.8501C34.0443 30.8501 34.0466 30.8501 34.0489 30.8501C34.0512 30.8501 34.0535 30.8501 34.0558 30.8501C34.0581 30.8501 34.0604 30.8501 34.0626 30.8501C34.0649 30.8501 34.0672 30.8501 34.0695 30.8501C34.0718 30.8501 34.074 30.8501 34.0763 30.8501C34.0786 30.8501 34.0809 30.8501 34.0831 30.8501C34.0854 30.8501 34.0877 30.8501 34.0899 30.8501C34.0922 30.8501 34.0944 30.8501 34.0967 30.8501C34.0989 30.8501 34.1012 30.8501 34.1034 30.8501C34.1057 30.8501 34.1079 30.8501 34.1102 30.8501C34.1124 30.8501 34.1147 30.8501 34.1169 30.8501C34.1191 30.8501 34.1214 30.8501 34.1236 30.8501C34.1258 30.8501 34.128 30.8501 34.1303 30.8501C34.1325 30.8501 34.1347 30.8501 34.1369 30.8501C34.1391 30.8501 34.1414 30.8501 34.1436 30.8501C34.1458 30.8501 34.148 30.8501 34.1502 30.8501C34.1524 30.8501 34.1546 30.8501 34.1568 30.8501C34.159 30.8501 34.1612 30.8501 34.1634 30.8501C34.1656 30.8501 34.1678 30.8501 34.1699 30.8501C34.1721 30.8501 34.1743 30.8501 34.1765 30.8501C34.1787 30.8501 34.1808 30.8501 34.183 30.8501C34.1852 30.8501 34.1874 30.8501 34.1895 30.8501C34.1917 30.8501 34.1938 30.8501 34.196 30.8501C34.1982 30.8501 34.2003 30.8501 34.2025 30.8501C34.2046 30.8501 34.2068 30.8501 34.2089 30.8501C34.2111 30.8501 34.2132 30.8501 34.2154 30.8501C34.2175 30.8501 34.2196 30.8501 34.2218 30.8501C34.2239 30.8501 34.226 30.8501 34.2282 30.8501C34.2303 30.8501 34.2324 30.8501 34.2345 30.8501C34.2367 30.8501 34.2388 30.8501 34.2409 30.8501C34.243 30.8501 34.2451 30.8501 34.2472 30.8501C34.2493 30.8501 34.2514 30.8501 34.2535 30.8501C34.2556 30.8501 34.2577 30.8501 34.2598 30.8501C34.2619 30.8501 34.264 30.8501 34.2661 30.8501C34.2682 30.8501 34.2703 30.8501 34.2724 30.8501C34.2745 30.8501 34.2765 30.8501 34.2786 30.8501C34.2807 30.8501 34.2828 30.8501 34.2848 30.8501C34.2869 30.8501 34.289 30.8501 34.291 30.8501C34.2931 30.8501 34.2951 30.8501 34.2972 30.8501C34.2993 30.8501 34.3013 30.8501 34.3034 30.8501C34.3054 30.8501 34.3075 30.8501 34.3095 30.8501C34.3116 30.8501 34.3136 30.8501 34.3156 30.8501C34.3177 30.8501 34.3197 30.8501 34.3217 30.8501C34.3238 30.8501 34.3258 30.8501 34.3278 30.8501C34.3298 30.8501 34.3319 30.8501 34.3339 30.8501C34.3359 30.8501 34.3379 30.8501 34.3399 30.8501C34.3419 30.8501 34.3439 30.8501 34.3459 30.8501C34.3479 30.8501 34.3499 30.8501 34.3519 30.8501C34.3539 30.8501 34.3559 30.8501 34.3579 30.8501C34.3599 30.8501 34.3619 30.8501 34.3639 30.8501C34.3659 30.8501 34.3679 30.8501 34.3698 30.8501C34.3718 30.8501 34.3738 30.8501 34.3758 30.8501C34.3777 30.8501 34.3797 30.8501 34.3817 30.8501C34.3836 30.8501 34.3856 30.8501 34.3876 30.8501C34.3895 30.8501 34.3915 30.8501 34.3934 30.8501C34.3954 30.8501 34.3973 30.8501 34.3993 30.8501C34.4012 30.8501 34.4032 30.8501 34.4051 30.8501C34.407 30.8501 34.409 30.8501 34.4109 30.8501C34.4128 30.8501 34.4148 30.8501 34.4167 30.8501C34.4186 30.8501 34.4205 30.8501 34.4224 30.8501C34.4244 30.8501 34.4263 30.8501 34.4282 30.8501C34.4301 30.8501 34.432 30.8501 34.4339 30.8501C34.4358 30.8501 34.4377 30.8501 34.4396 30.8501C34.4415 30.8501 34.4434 30.8501 34.4453 30.8501C34.4472 30.8501 34.4491 30.8501 34.451 30.8501C34.4529 30.8501 34.4547 30.8501 34.4566 30.8501C34.4585 30.8501 34.4604 30.8501 34.4623 30.8501C34.4641 30.8501 34.466 30.8501 34.4679 30.8501C34.4697 30.8501 34.4716 30.8501 34.4734 30.8501C34.4753 30.8501 34.4772 30.8501 34.479 30.8501C34.4809 30.8501 34.4827 30.8501 34.4846 30.8501C34.4864 30.8501 34.4882 30.8501 34.4901 30.8501C34.4919 30.8501 34.4938 30.8501 34.4956 30.8501C34.4974 30.8501 34.4992 30.8501 34.5011 30.8501C34.5029 30.8501 34.5047 30.8501 34.5065 30.8501C34.5084 30.8501 34.5102 30.8501 34.512 30.8501C34.5138 30.8501 34.5156 30.8501 34.5174 30.8501C34.5192 30.8501 34.521 30.8501 34.5228 30.8501C34.5246 30.8501 34.5264 30.8501 34.5282 30.8501C34.53 30.8501 34.5318 30.8501 34.5336 30.8501C34.5353 30.8501 34.5371 30.8501 34.5389 30.8501C34.5407 30.8501 34.5424 30.8501 34.5442 30.8501C34.546 30.8501 34.5478 30.8501 34.5495 30.8501C34.5513 30.8501 34.553 30.8501 34.5548 30.8501C34.5566 30.8501 34.5583 30.8501 34.5601 30.8501C34.5618 30.8501 34.5636 30.8501 34.5653 30.8501C34.567 30.8501 34.5688 30.8501 34.5705 30.8501C34.5723 30.8501 34.574 30.8501 34.5757 30.8501C34.5775 30.8501 34.5792 30.8501 34.5809 30.8501C34.5826 30.8501 34.5843 30.8501 34.5861 30.8501C34.5878 30.8501 34.5895 30.8501 34.5912 30.8501C34.5929 30.8501 34.5946 30.8501 34.5963 30.8501C34.598 30.8501 34.5997 30.8501 34.6014 30.8501C34.6031 30.8501 34.6048 30.8501 34.6065 30.8501C34.6082 30.8501 34.6099 30.8501 34.6115 30.8501C34.6132 30.8501 34.6149 30.8501 34.6166 30.8501C34.6183 30.8501 34.6199 30.8501 34.6216 30.8501C34.6233 30.8501 34.6249 30.8501 34.6266 30.8501C34.6282 30.8501 34.6299 30.8501 34.6316 30.8501C34.6332 30.8501 34.6349 30.8501 34.6365 30.8501C34.6382 30.8501 34.6398 30.8501 34.6414 30.8501C34.6431 30.8501 34.6447 30.8501 34.6463 30.8501C34.648 30.8501 34.6496 30.8501 34.6512 30.8501C34.6529 30.8501 34.6545 30.8501 34.6561 30.8501C34.6577 30.8501 34.6593 30.8501 34.6609 30.8501C34.6626 30.8501 34.6642 30.8501 34.6658 30.8501C34.6674 30.8501 34.669 30.8501 34.6706 30.8501C34.6722 30.8501 34.6738 30.8501 34.6754 30.8501C34.677 30.8501 34.6785 30.8501 34.6801 30.8501C34.6817 30.8501 34.6833 30.8501 34.6849 30.8501C34.6864 30.8501 34.688 30.8501 34.6896 30.8501C34.6912 30.8501 34.6927 30.8501 34.6943 30.8501C34.6959 30.8501 34.6974 30.8501 34.699 30.8501C34.7005 30.8501 34.7021 30.8501 34.7036 30.8501C34.7052 30.8501 34.7067 30.8501 34.7083 30.8501C34.7098 30.8501 34.7113 30.8501 34.7129 30.8501C34.7144 30.8501 34.7159 30.8501 34.7175 30.8501C34.719 30.8501 34.7205 30.8501 34.722 30.8501C34.7236 30.8501 34.7251 30.8501 34.7266 30.8501C34.7281 30.8501 34.7296 30.8501 34.7311 30.8501C34.7326 30.8501 34.7341 30.8501 34.7356 30.8501C34.7371 30.8501 34.7386 30.8501 34.7401 30.8501C34.7416 30.8501 34.7431 30.8501 34.7446 30.8501C34.7461 30.8501 34.7476 30.8501 34.749 30.8501C34.7505 30.8501 34.752 30.8501 34.7535 30.8501C34.7549 30.8501 34.7564 30.8501 34.7579 30.8501C34.7593 30.8501 34.7608 30.8501 34.7622 30.8501C34.7637 30.8501 34.7652 30.8501 34.7666 30.8501C34.7681 30.8501 34.7695 30.8501 34.7709 30.8501C34.7724 30.8501 34.7738 30.8501 34.7753 30.8501C34.7767 30.8501 34.7781 30.8501 34.7796 30.8501C34.781 30.8501 34.7824 30.8501 34.7838 30.8501C34.7852 30.8501 34.7867 30.8501 34.7881 30.8501C34.7895 30.8501 34.7909 30.8501 34.7923 30.8501C34.7937 30.8501 34.7951 30.8501 34.7965 30.8501C34.7979 30.8501 34.7993 30.8501 34.8007 30.8501C34.8021 30.8501 34.8035 30.8501 34.8049 30.8501C34.8063 30.8501 34.8076 30.8501 34.809 30.8501C34.8104 30.8501 34.8118 30.8501 34.8131 30.8501C34.8145 30.8501 34.8159 30.8501 34.8172 30.8501C34.8186 30.8501 34.82 30.8501 34.8213 30.8501C34.8227 30.8501 34.824 30.8501 34.8254 30.8501C34.8267 30.8501 34.8281 30.8501 34.8294 30.8501C34.8307 30.8501 34.8321 30.8501 34.8334 30.8501C34.8348 30.8501 34.8361 30.8501 34.8374 30.8501C34.8387 30.8501 34.8401 30.8501 34.8414 30.8501C34.8427 30.8501 34.844 30.8501 34.8453 30.8501C34.8466 30.8501 34.8479 30.8501 34.8493 30.8501C34.8506 30.8501 34.8519 30.8501 34.8532 30.8501C34.8545 30.8501 34.8558 30.8501 34.857 30.8501C34.8583 30.8501 34.8596 30.8501 34.8609 30.8501C34.8622 30.8501 34.8635 30.8501 34.8647 30.8501C34.866 30.8501 34.8673 30.8501 34.8686 30.8501C34.8698 30.8501 34.8711 30.8501 34.8724 30.8501C34.8736 30.8501 34.8749 30.8501 34.8761 30.8501C34.8774 30.8501 34.8786 30.8501 34.8799 30.8501C34.8811 30.8501 34.8824 30.8501 34.8836 30.8501C34.8848 30.8501 34.8861 30.8501 34.8873 30.8501C34.8885 30.8501 34.8898 30.8501 34.891 30.8501C34.8922 30.8501 34.8934 30.8501 34.8947 30.8501C34.8959 30.8501 34.8971 30.8501 34.8983 30.8501C34.8995 30.8501 34.9007 30.8501 34.9019 30.8501C34.9031 30.8501 34.9043 30.8501 34.9055 30.8501C34.9067 30.8501 34.9079 30.8501 34.9091 30.8501C34.9103 30.8501 34.9114 30.8501 34.9126 30.8501C34.9138 30.8501 34.915 30.8501 34.9162 30.8501C34.9173 30.8501 34.9185 30.8501 34.9197 30.8501C34.9208 30.8501 34.922 30.8501 34.9231 30.8501C34.9243 30.8501 34.9255 30.8501 34.9266 30.8501C34.9278 30.8501 34.9289 30.8501 34.93 30.8501C34.9312 30.8501 34.9323 30.8501 34.9335 30.8501C34.9346 30.8501 34.9357 30.8501 34.9369 30.8501C34.938 30.8501 34.9391 30.8501 34.9402 30.8501C34.9414 30.8501 34.9425 30.8501 34.9436 30.8501C34.9447 30.8501 34.9458 30.8501 34.9469 30.8501C34.948 30.8501 34.9491 30.8501 34.9502 30.8501C34.9513 30.8501 34.9524 30.8501 34.9535 30.8501C34.9546 30.8501 34.9557 30.8501 34.9568 30.8501C34.9578 30.8501 34.9589 30.8501 34.96 30.8501C34.9611 30.8501 34.9621 30.8501 34.9632 30.8501C34.9643 30.8501 34.9653 30.8501 34.9664 30.8501C34.9675 30.8501 34.9685 30.8501 34.9696 30.8501C34.9706 30.8501 34.9717 30.8501 34.9727 30.8501C34.9738 30.8501 34.9748 30.8501 34.9758 30.8501C34.9769 30.8501 34.9779 30.8501 34.9789 30.8501C34.98 30.8501 34.981 30.8501 34.982 30.8501C34.983 30.8501 34.9841 30.8501 34.9851 30.8501C34.9861 30.8501 34.9871 30.8501 34.9881 30.8501C34.9891 30.8501 34.9901 30.8501 34.9911 30.8501C34.9921 30.8501 34.9931 30.8501 34.9941 30.8501C34.9951 30.8501 34.9961 30.8501 34.9971 30.8501C34.998 30.8501 34.999 30.8501 35 30.8501V28.8501ZM31 28.8501C29.3875 28.8501 28.1694 29.0441 27.2865 29.594L28.3438 31.2917C28.7298 31.0513 29.4693 30.8501 31 30.8501V28.8501ZM25.766 30.3501C25.7635 30.3501 25.7611 30.3501 25.7587 30.3501C25.7563 30.3501 25.7538 30.3501 25.7514 30.3501C25.749 30.3501 25.7466 30.3501 25.7441 30.3501C25.7417 30.3501 25.7392 30.3501 25.7368 30.3501C25.7344 30.3501 25.7319 30.3501 25.7295 30.3501C25.727 30.3501 25.7246 30.3501 25.7221 30.3501C25.7197 30.3501 25.7172 30.3501 25.7148 30.3501C25.7123 30.3501 25.7099 30.3501 25.7074 30.3501C25.705 30.3501 25.7025 30.3501 25.7 30.3501C25.6976 30.3501 25.6951 30.3501 25.6926 30.3501C25.6902 30.3501 25.6877 30.3501 25.6852 30.3501C25.6827 30.3501 25.6803 30.3501 25.6778 30.3501C25.6753 30.3501 25.6728 30.3501 25.6703 30.3501C25.6679 30.3501 25.6654 30.3501 25.6629 30.3501C25.6604 30.3501 25.6579 30.3501 25.6554 30.3501C25.6529 30.3501 25.6504 30.3501 25.6479 30.3501C25.6454 30.3501 25.6429 30.3501 25.6404 30.3501C25.6379 30.3501 25.6354 30.3501 25.6329 30.3501C25.6304 30.3501 25.6279 30.3501 25.6254 30.3501C25.6229 30.3501 25.6203 30.3501 25.6178 30.3501C25.6153 30.3501 25.6128 30.3501 25.6103 30.3501C25.6078 30.3501 25.6052 30.3501 25.6027 30.3501C25.6002 30.3501 25.5976 30.3501 25.5951 30.3501C25.5926 30.3501 25.59 30.3501 25.5875 30.3501C25.585 30.3501 25.5824 30.3501 25.5799 30.3501C25.5774 30.3501 25.5748 30.3501 25.5723 30.3501C25.5697 30.3501 25.5672 30.3501 25.5646 30.3501C25.5621 30.3501 25.5595 30.3501 25.557 30.3501C25.5544 30.3501 25.5519 30.3501 25.5493 30.3501C25.5467 30.3501 25.5442 30.3501 25.5416 30.3501C25.539 30.3501 25.5365 30.3501 25.5339 30.3501C25.5313 30.3501 25.5288 30.3501 25.5262 30.3501C25.5236 30.3501 25.5211 30.3501 25.5185 30.3501C25.5159 30.3501 25.5133 30.3501 25.5107 30.3501C25.5082 30.3501 25.5056 30.3501 25.503 30.3501C25.5004 30.3501 25.4978 30.3501 25.4952 30.3501C25.4926 30.3501 25.49 30.3501 25.4874 30.3501C25.4848 30.3501 25.4822 30.3501 25.4796 30.3501C25.477 30.3501 25.4744 30.3501 25.4718 30.3501C25.4692 30.3501 25.4666 30.3501 25.464 30.3501C25.4614 30.3501 25.4588 30.3501 25.4562 30.3501C25.4536 30.3501 25.4509 30.3501 25.4483 30.3501C25.4457 30.3501 25.4431 30.3501 25.4405 30.3501C25.4378 30.3501 25.4352 30.3501 25.4326 30.3501C25.43 30.3501 25.4273 30.3501 25.4247 30.3501C25.4221 30.3501 25.4194 30.3501 25.4168 30.3501C25.4142 30.3501 25.4115 30.3501 25.4089 30.3501C25.4062 30.3501 25.4036 30.3501 25.401 30.3501C25.3983 30.3501 25.3957 30.3501 25.393 30.3501C25.3904 30.3501 25.3877 30.3501 25.3851 30.3501C25.3824 30.3501 25.3798 30.3501 25.3771 30.3501C25.3744 30.3501 25.3718 30.3501 25.3691 30.3501C25.3665 30.3501 25.3638 30.3501 25.3611 30.3501C25.3585 30.3501 25.3558 30.3501 25.3531 30.3501C25.3505 30.3501 25.3478 30.3501 25.3451 30.3501C25.3424 30.3501 25.3398 30.3501 25.3371 30.3501C25.3344 30.3501 25.3317 30.3501 25.329 30.3501C25.3263 30.3501 25.3237 30.3501 25.321 30.3501C25.3183 30.3501 25.3156 30.3501 25.3129 30.3501C25.3102 30.3501 25.3075 30.3501 25.3048 30.3501C25.3021 30.3501 25.2994 30.3501 25.2967 30.3501C25.294 30.3501 25.2913 30.3501 25.2886 30.3501C25.2859 30.3501 25.2832 30.3501 25.2805 30.3501C25.2778 30.3501 25.2751 30.3501 25.2724 30.3501C25.2697 30.3501 25.2669 30.3501 25.2642 30.3501C25.2615 30.3501 25.2588 30.3501 25.2561 30.3501C25.2533 30.3501 25.2506 30.3501 25.2479 30.3501C25.2452 30.3501 25.2424 30.3501 25.2397 30.3501C25.237 30.3501 25.2343 30.3501 25.2315 30.3501C25.2288 30.3501 25.2261 30.3501 25.2233 30.3501C25.2206 30.3501 25.2178 30.3501 25.2151 30.3501C25.2124 30.3501 25.2096 30.3501 25.2069 30.3501C25.2041 30.3501 25.2014 30.3501 25.1986 30.3501C25.1959 30.3501 25.1931 30.3501 25.1904 30.3501C25.1876 30.3501 25.1849 30.3501 25.1821 30.3501C25.1794 30.3501 25.1766 30.3501 25.1738 30.3501C25.1711 30.3501 25.1683 30.3501 25.1655 30.3501C25.1628 30.3501 25.16 30.3501 25.1572 30.3501C25.1545 30.3501 25.1517 30.3501 25.1489 30.3501C25.1462 30.3501 25.1434 30.3501 25.1406 30.3501C25.1378 30.3501 25.135 30.3501 25.1323 30.3501C25.1295 30.3501 25.1267 30.3501 25.1239 30.3501C25.1211 30.3501 25.1183 30.3501 25.1156 30.3501C25.1128 30.3501 25.11 30.3501 25.1072 30.3501C25.1044 30.3501 25.1016 30.3501 25.0988 30.3501C25.096 30.3501 25.0932 30.3501 25.0904 30.3501C25.0876 30.3501 25.0848 30.3501 25.082 30.3501C25.0792 30.3501 25.0764 30.3501 25.0736 30.3501C25.0708 30.3501 25.068 30.3501 25.0651 30.3501C25.0623 30.3501 25.0595 30.3501 25.0567 30.3501C25.0539 30.3501 25.0511 30.3501 25.0483 30.3501C25.0454 30.3501 25.0426 30.3501 25.0398 30.3501C25.037 30.3501 25.0341 30.3501 25.0313 30.3501C25.0285 30.3501 25.0257 30.3501 25.0228 30.3501C25.02 30.3501 25.0172 30.3501 25.0143 30.3501C25.0115 30.3501 25.0087 30.3501 25.0058 30.3501C25.003 30.3501 25.0001 30.3501 24.9973 30.3501C24.9945 30.3501 24.9916 30.3501 24.9888 30.3501C24.9859 30.3501 24.9831 30.3501 24.9802 30.3501C24.9774 30.3501 24.9745 30.3501 24.9717 30.3501C24.9688 30.3501 24.966 30.3501 24.9631 30.3501C24.9603 30.3501 24.9574 30.3501 24.9545 30.3501C24.9517 30.3501 24.9488 30.3501 24.9459 30.3501C24.9431 30.3501 24.9402 30.3501 24.9374 30.3501C24.9345 30.3501 24.9316 30.3501 24.9287 30.3501C24.9259 30.3501 24.923 30.3501 24.9201 30.3501C24.9173 30.3501 24.9144 30.3501 24.9115 30.3501C24.9086 30.3501 24.9057 30.3501 24.9029 30.3501C24.9 30.3501 24.8971 30.3501 24.8942 30.3501C24.8913 30.3501 24.8884 30.3501 24.8856 30.3501C24.8827 30.3501 24.8798 30.3501 24.8769 30.3501C24.874 30.3501 24.8711 30.3501 24.8682 30.3501C24.8653 30.3501 24.8624 30.3501 24.8595 30.3501C24.8566 30.3501 24.8537 30.3501 24.8508 30.3501C24.8479 30.3501 24.845 30.3501 24.8421 30.3501C24.8392 30.3501 24.8363 30.3501 24.8334 30.3501C24.8305 30.3501 24.8275 30.3501 24.8246 30.3501C24.8217 30.3501 24.8188 30.3501 24.8159 30.3501C24.813 30.3501 24.8101 30.3501 24.8071 30.3501C24.8042 30.3501 24.8013 30.3501 24.7984 30.3501C24.7955 30.3501 24.7925 30.3501 24.7896 30.3501C24.7867 30.3501 24.7837 30.3501 24.7808 30.3501C24.7779 30.3501 24.775 30.3501 24.772 30.3501C24.7691 30.3501 24.7662 30.3501 24.7632 30.3501C24.7603 30.3501 24.7573 30.3501 24.7544 30.3501C24.7515 30.3501 24.7485 30.3501 24.7456 30.3501C24.7426 30.3501 24.7397 30.3501 24.7367 30.3501C24.7338 30.3501 24.7309 30.3501 24.7279 30.3501C24.725 30.3501 24.722 30.3501 24.7191 30.3501C24.7161 30.3501 24.7131 30.3501 24.7102 30.3501C24.7072 30.3501 24.7043 30.3501 24.7013 30.3501C24.6984 30.3501 24.6954 30.3501 24.6924 30.3501C24.6895 30.3501 24.6865 30.3501 24.6835 30.3501C24.6806 30.3501 24.6776 30.3501 24.6746 30.3501C24.6717 30.3501 24.6687 30.3501 24.6657 30.3501C24.6628 30.3501 24.6598 30.3501 24.6568 30.3501C24.6538 30.3501 24.6509 30.3501 24.6479 30.3501C24.6449 30.3501 24.6419 30.3501 24.6389 30.3501C24.636 30.3501 24.633 30.3501 24.63 30.3501C24.627 30.3501 24.624 30.3501 24.621 30.3501C24.618 30.3501 24.6151 30.3501 24.6121 30.3501C24.6091 30.3501 24.6061 30.3501 24.6031 30.3501C24.6001 30.3501 24.5971 30.3501 24.5941 30.3501C24.5911 30.3501 24.5881 30.3501 24.5851 30.3501C24.5821 30.3501 24.5791 30.3501 24.5761 30.3501C24.5731 30.3501 24.5701 30.3501 24.5671 30.3501C24.5641 30.3501 24.5611 30.3501 24.5581 30.3501C24.5551 30.3501 24.5521 30.3501 24.549 30.3501C24.546 30.3501 24.543 30.3501 24.54 30.3501C24.537 30.3501 24.534 30.3501 24.531 30.3501C24.5279 30.3501 24.5249 30.3501 24.5219 30.3501C24.5189 30.3501 24.5158 30.3501 24.5128 30.3501C24.5098 30.3501 24.5068 30.3501 24.5038 30.3501C24.5007 30.3501 24.4977 30.3501 24.4947 30.3501C24.4916 30.3501 24.4886 30.3501 24.4856 30.3501C24.4825 30.3501 24.4795 30.3501 24.4765 30.3501C24.4734 30.3501 24.4704 30.3501 24.4674 30.3501C24.4643 30.3501 24.4613 30.3501 24.4582 30.3501C24.4552 30.3501 24.4522 30.3501 24.4491 30.3501C24.4461 30.3501 24.443 30.3501 24.44 30.3501C24.4369 30.3501 24.4339 30.3501 24.4308 30.3501C24.4278 30.3501 24.4247 30.3501 24.4217 30.3501C24.4186 30.3501 24.4156 30.3501 24.4125 30.3501C24.4095 30.3501 24.4064 30.3501 24.4034 30.3501C24.4003 30.3501 24.3972 30.3501 24.3942 30.3501C24.3911 30.3501 24.3881 30.3501 24.385 30.3501C24.3819 30.3501 24.3789 30.3501 24.3758 30.3501C24.3727 30.3501 24.3697 30.3501 24.3666 30.3501C24.3635 30.3501 24.3605 30.3501 24.3574 30.3501C24.3543 30.3501 24.3512 30.3501 24.3482 30.3501C24.3451 30.3501 24.342 30.3501 24.3389 30.3501C24.3359 30.3501 24.3328 30.3501 24.3297 30.3501C24.3266 30.3501 24.3235 30.3501 24.3205 30.3501C24.3174 30.3501 24.3143 30.3501 24.3112 30.3501C24.3081 30.3501 24.305 30.3501 24.302 30.3501C24.2989 30.3501 24.2958 30.3501 24.2927 30.3501C24.2896 30.3501 24.2865 30.3501 24.2834 30.3501C24.2803 30.3501 24.2772 30.3501 24.2741 30.3501C24.271 30.3501 24.2679 30.3501 24.2648 30.3501C24.2617 30.3501 24.2586 30.3501 24.2555 30.3501C24.2524 30.3501 24.2493 30.3501 24.2462 30.3501C24.2431 30.3501 24.24 30.3501 24.2369 30.3501C24.2338 30.3501 24.2307 30.3501 24.2276 30.3501C24.2245 30.3501 24.2214 30.3501 24.2183 30.3501C24.2152 30.3501 24.2121 30.3501 24.2089 30.3501C24.2058 30.3501 24.2027 30.3501 24.1996 30.3501C24.1965 30.3501 24.1934 30.3501 24.1903 30.3501C24.1871 30.3501 24.184 30.3501 24.1809 30.3501C24.1778 30.3501 24.1747 30.3501 24.1715 30.3501C24.1684 30.3501 24.1653 30.3501 24.1622 30.3501C24.159 30.3501 24.1559 30.3501 24.1528 30.3501C24.1497 30.3501 24.1465 30.3501 24.1434 30.3501C24.1403 30.3501 24.1371 30.3501 24.134 30.3501C24.1309 30.3501 24.1277 30.3501 24.1246 30.3501C24.1215 30.3501 24.1183 30.3501 24.1152 30.3501C24.1121 30.3501 24.1089 30.3501 24.1058 30.3501C24.1026 30.3501 24.0995 30.3501 24.0964 30.3501C24.0932 30.3501 24.0901 30.3501 24.0869 30.3501C24.0838 30.3501 24.0806 30.3501 24.0775 30.3501C24.0744 30.3501 24.0712 30.3501 24.0681 30.3501C24.0649 30.3501 24.0618 30.3501 24.0586 30.3501C24.0555 30.3501 24.0523 30.3501 24.0492 30.3501C24.046 30.3501 24.0428 30.3501 24.0397 30.3501C24.0365 30.3501 24.0334 30.3501 24.0302 30.3501C24.0271 30.3501 24.0239 30.3501 24.0207 30.3501C24.0176 30.3501 24.0144 30.3501 24.0113 30.3501C24.0081 30.3501 24.0049 30.3501 24.0018 30.3501C23.9986 30.3501 23.9955 30.3501 23.9923 30.3501C23.9891 30.3501 23.986 30.3501 23.9828 30.3501C23.9796 30.3501 23.9764 30.3501 23.9733 30.3501C23.9701 30.3501 23.9669 30.3501 23.9638 30.3501C23.9606 30.3501 23.9574 30.3501 23.9542 30.3501C23.9511 30.3501 23.9479 30.3501 23.9447 30.3501C23.9415 30.3501 23.9384 30.3501 23.9352 30.3501C23.932 30.3501 23.9288 30.3501 23.9256 30.3501C23.9225 30.3501 23.9193 30.3501 23.9161 30.3501C23.9129 30.3501 23.9097 30.3501 23.9065 30.3501C23.9034 30.3501 23.9002 30.3501 23.897 30.3501C23.8938 30.3501 23.8906 30.3501 23.8874 30.3501C23.8842 30.3501 23.881 30.3501 23.8779 30.3501C23.8747 30.3501 23.8715 30.3501 23.8683 30.3501C23.8651 30.3501 23.8619 30.3501 23.8587 30.3501C23.8555 30.3501 23.8523 30.3501 23.8491 30.3501C23.8459 30.3501 23.8427 30.3501 23.8395 30.3501C23.8363 30.3501 23.8331 30.3501 23.8299 30.3501C23.8267 30.3501 23.8235 30.3501 23.8203 30.3501C23.8171 30.3501 23.8139 30.3501 23.8107 30.3501C23.8075 30.3501 23.8043 30.3501 23.8011 30.3501C23.7979 30.3501 23.7947 30.3501 23.7915 30.3501C23.7882 30.3501 23.785 30.3501 23.7818 30.3501C23.7786 30.3501 23.7754 30.3501 23.7722 30.3501C23.769 30.3501 23.7658 30.3501 23.7626 30.3501C23.7593 30.3501 23.7561 30.3501 23.7529 30.3501C23.7497 30.3501 23.7465 30.3501 23.7433 30.3501C23.74 30.3501 23.7368 30.3501 23.7336 30.3501C23.7304 30.3501 23.7272 30.3501 23.7239 30.3501C23.7207 30.3501 23.7175 30.3501 23.7143 30.3501C23.7111 30.3501 23.7078 30.3501 23.7046 30.3501C23.7014 30.3501 23.6982 30.3501 23.6949 30.3501C23.6917 30.3501 23.6885 30.3501 23.6853 30.3501C23.682 30.3501 23.6788 30.3501 23.6756 30.3501C23.6723 30.3501 23.6691 30.3501 23.6659 30.3501C23.6626 30.3501 23.6594 30.3501 23.6562 30.3501C23.6529 30.3501 23.6497 30.3501 23.6465 30.3501C23.6432 30.3501 23.64 30.3501 23.6368 30.3501C23.6335 30.3501 23.6303 30.3501 23.6271 30.3501C23.6238 30.3501 23.6206 30.3501 23.6173 30.3501C23.6141 30.3501 23.6109 30.3501 23.6076 30.3501C23.6044 30.3501 23.6011 30.3501 23.5979 30.3501C23.5946 30.3501 23.5914 30.3501 23.5882 30.3501C23.5849 30.3501 23.5817 30.3501 23.5784 30.3501C23.5752 30.3501 23.5719 30.3501 23.5687 30.3501C23.5654 30.3501 23.5622 30.3501 23.5589 30.3501C23.5557 30.3501 23.5524 30.3501 23.5492 30.3501C23.5459 30.3501 23.5427 30.3501 23.5394 30.3501C23.5362 30.3501 23.5329 30.3501 23.5297 30.3501C23.5264 30.3501 23.5232 30.3501 23.5199 30.3501C23.5167 30.3501 23.5134 30.3501 23.5101 30.3501C23.5069 30.3501 23.5036 30.3501 23.5004 30.3501C23.4971 30.3501 23.4939 30.3501 23.4906 30.3501C23.4873 30.3501 23.4841 30.3501 23.4808 30.3501C23.4776 30.3501 23.4743 30.3501 23.471 30.3501C23.4678 30.3501 23.4645 30.3501 23.4612 30.3501C23.458 30.3501 23.4547 30.3501 23.4514 30.3501C23.4482 30.3501 23.4449 30.3501 23.4416 30.3501C23.4384 30.3501 23.4351 30.3501 23.4318 30.3501C23.4286 30.3501 23.4253 30.3501 23.422 30.3501C23.4188 30.3501 23.4155 30.3501 23.4122 30.3501C23.409 30.3501 23.4057 30.3501 23.4024 30.3501C23.3991 30.3501 23.3959 30.3501 23.3926 30.3501C23.3893 30.3501 23.3861 30.3501 23.3828 30.3501C23.3795 30.3501 23.3762 30.3501 23.3729 30.3501C23.3697 30.3501 23.3664 30.3501 23.3631 30.3501C23.3598 30.3501 23.3566 30.3501 23.3533 30.3501C23.35 30.3501 23.3467 30.3501 23.3434 30.3501C23.3402 30.3501 23.3369 30.3501 23.3336 30.3501C23.3303 30.3501 23.327 30.3501 23.3238 30.3501C23.3205 30.3501 23.3172 30.3501 23.3139 30.3501C23.3106 30.3501 23.3073 30.3501 23.3041 30.3501C23.3008 30.3501 23.2975 30.3501 23.2942 30.3501C23.2909 30.3501 23.2876 30.3501 23.2843 30.3501C23.2811 30.3501 23.2778 30.3501 23.2745 30.3501C23.2712 30.3501 23.2679 30.3501 23.2646 30.3501C23.2613 30.3501 23.258 30.3501 23.2548 30.3501C23.2515 30.3501 23.2482 30.3501 23.2449 30.3501C23.2416 30.3501 23.2383 30.3501 23.235 30.3501C23.2317 30.3501 23.2284 30.3501 23.2251 30.3501C23.2218 30.3501 23.2185 30.3501 23.2152 30.3501C23.2119 30.3501 23.2087 30.3501 23.2054 30.3501C23.2021 30.3501 23.1988 30.3501 23.1955 30.3501C23.1922 30.3501 23.1889 30.3501 23.1856 30.3501C23.1823 30.3501 23.179 30.3501 23.1757 30.3501C23.1724 30.3501 23.1691 30.3501 23.1658 30.3501C23.1625 30.3501 23.1592 30.3501 23.1559 30.3501C23.1526 30.3501 23.1493 30.3501 23.146 30.3501C23.1427 30.3501 23.1394 30.3501 23.1361 30.3501C23.1328 30.3501 23.1295 30.3501 23.1262 30.3501C23.1229 30.3501 23.1196 30.3501 23.1163 30.3501C23.1129 30.3501 23.1096 30.3501 23.1063 30.3501C23.103 30.3501 23.0997 30.3501 23.0964 30.3501C23.0931 30.3501 23.0898 30.3501 23.0865 30.3501C23.0832 30.3501 23.0799 30.3501 23.0766 30.3501C23.0733 30.3501 23.07 30.3501 23.0667 30.3501C23.0633 30.3501 23.06 30.3501 23.0567 30.3501C23.0534 30.3501 23.0501 30.3501 23.0468 30.3501C23.0435 30.3501 23.0402 30.3501 23.0369 30.3501C23.0336 30.3501 23.0302 30.3501 23.0269 30.3501C23.0236 30.3501 23.0203 30.3501 23.017 30.3501C23.0137 30.3501 23.0104 30.3501 23.007 30.3501C23.0037 30.3501 23.0004 30.3501 22.9971 30.3501C22.9938 30.3501 22.9905 30.3501 22.9872 30.3501C22.9838 30.3501 22.9805 30.3501 22.9772 30.3501C22.9739 30.3501 22.9706 30.3501 22.9673 30.3501C22.964 30.3501 22.9606 30.3501 22.9573 30.3501C22.954 30.3501 22.9507 30.3501 22.9474 30.3501C22.944 30.3501 22.9407 30.3501 22.9374 30.3501C22.9341 30.3501 22.9308 30.3501 22.9275 30.3501C22.9241 30.3501 22.9208 30.3501 22.9175 30.3501C22.9142 30.3501 22.9109 30.3501 22.9075 30.3501C22.9042 30.3501 22.9009 30.3501 22.8976 30.3501C22.8942 30.3501 22.8909 30.3501 22.8876 30.3501C22.8843 30.3501 22.881 30.3501 22.8776 30.3501C22.8743 30.3501 22.871 30.3501 22.8677 30.3501C22.8643 30.3501 22.861 30.3501 22.8577 30.3501C22.8544 30.3501 22.851 30.3501 22.8477 30.3501C22.8444 30.3501 22.8411 30.3501 22.8378 30.3501C22.8344 30.3501 22.8311 30.3501 22.8278 30.3501C22.8245 30.3501 22.8211 30.3501 22.8178 30.3501C22.8145 30.3501 22.8111 30.3501 22.8078 30.3501C22.8045 30.3501 22.8012 30.3501 22.7978 30.3501C22.7945 30.3501 22.7912 30.3501 22.7879 30.3501C22.7845 30.3501 22.7812 30.3501 22.7779 30.3501C22.7746 30.3501 22.7712 30.3501 22.7679 30.3501C22.7646 30.3501 22.7612 30.3501 22.7579 30.3501C22.7546 30.3501 22.7513 30.3501 22.7479 30.3501C22.7446 30.3501 22.7413 30.3501 22.7379 30.3501C22.7346 30.3501 22.7313 30.3501 22.7279 30.3501C22.7246 30.3501 22.7213 30.3501 22.718 30.3501C22.7146 30.3501 22.7113 30.3501 22.708 30.3501C22.7046 30.3501 22.7013 30.3501 22.698 30.3501C22.6946 30.3501 22.6913 30.3501 22.688 30.3501C22.6846 30.3501 22.6813 30.3501 22.678 30.3501C22.6747 30.3501 22.6713 30.3501 22.668 30.3501C22.6647 30.3501 22.6613 30.3501 22.658 30.3501C22.6547 30.3501 22.6513 30.3501 22.648 30.3501C22.6447 30.3501 22.6413 30.3501 22.638 30.3501C22.6347 30.3501 22.6313 30.3501 22.628 30.3501C22.6247 30.3501 22.6213 30.3501 22.618 30.3501C22.6147 30.3501 22.6113 30.3501 22.608 30.3501C22.6047 30.3501 22.6013 30.3501 22.598 30.3501C22.5947 30.3501 22.5913 30.3501 22.588 30.3501C22.5847 30.3501 22.5813 30.3501 22.578 30.3501C22.5747 30.3501 22.5713 30.3501 22.568 30.3501C22.5647 30.3501 22.5613 30.3501 22.558 30.3501C22.5547 30.3501 22.5513 30.3501 22.548 30.3501C22.5447 30.3501 22.5413 30.3501 22.538 30.3501C22.5347 30.3501 22.5313 30.3501 22.528 30.3501C22.5247 30.3501 22.5213 30.3501 22.518 30.3501C22.5146 30.3501 22.5113 30.3501 22.508 30.3501C22.5046 30.3501 22.5013 30.3501 22.498 30.3501C22.4946 30.3501 22.4913 30.3501 22.488 30.3501C22.4846 30.3501 22.4813 30.3501 22.478 30.3501C22.4746 30.3501 22.4713 30.3501 22.468 30.3501C22.4646 30.3501 22.4613 30.3501 22.458 30.3501C22.4546 30.3501 22.4513 30.3501 22.4479 30.3501C22.4446 30.3501 22.4413 30.3501 22.4379 30.3501C22.4346 30.3501 22.4313 30.3501 22.4279 30.3501C22.4246 30.3501 22.4213 30.3501 22.4179 30.3501C22.4146 30.3501 22.4113 30.3501 22.4079 30.3501C22.4046 30.3501 22.4013 30.3501 22.3979 30.3501C22.3946 30.3501 22.3913 30.3501 22.3879 30.3501C22.3846 30.3501 22.3812 30.3501 22.3779 30.3501C22.3746 30.3501 22.3712 30.3501 22.3679 30.3501C22.3646 30.3501 22.3612 30.3501 22.3579 30.3501C22.3546 30.3501 22.3512 30.3501 22.3479 30.3501C22.3446 30.3501 22.3412 30.3501 22.3379 30.3501C22.3346 30.3501 22.3312 30.3501 22.3279 30.3501C22.3246 30.3501 22.3212 30.3501 22.3179 30.3501C22.3146 30.3501 22.3112 30.3501 22.3079 30.3501C22.3046 30.3501 22.3012 30.3501 22.2979 30.3501C22.2946 30.3501 22.2912 30.3501 22.2879 30.3501C22.2846 30.3501 22.2812 30.3501 22.2779 30.3501C22.2746 30.3501 22.2712 30.3501 22.2679 30.3501C22.2646 30.3501 22.2612 30.3501 22.2579 30.3501C22.2546 30.3501 22.2512 30.3501 22.2479 30.3501C22.2446 30.3501 22.2412 30.3501 22.2379 30.3501C22.2346 30.3501 22.2312 30.3501 22.2279 30.3501C22.2246 30.3501 22.2212 30.3501 22.2179 30.3501C22.2146 30.3501 22.2113 30.3501 22.2079 30.3501C22.2046 30.3501 22.2013 30.3501 22.1979 30.3501C22.1946 30.3501 22.1913 30.3501 22.1879 30.3501C22.1846 30.3501 22.1813 30.3501 22.1779 30.3501C22.1746 30.3501 22.1713 30.3501 22.168 30.3501C22.1646 30.3501 22.1613 30.3501 22.158 30.3501C22.1546 30.3501 22.1513 30.3501 22.148 30.3501C22.1447 30.3501 22.1413 30.3501 22.138 30.3501C22.1347 30.3501 22.1313 30.3501 22.128 30.3501C22.1247 30.3501 22.1214 30.3501 22.118 30.3501C22.1147 30.3501 22.1114 30.3501 22.108 30.3501C22.1047 30.3501 22.1014 30.3501 22.0981 30.3501C22.0947 30.3501 22.0914 30.3501 22.0881 30.3501C22.0848 30.3501 22.0814 30.3501 22.0781 30.3501C22.0748 30.3501 22.0715 30.3501 22.0681 30.3501C22.0648 30.3501 22.0615 30.3501 22.0582 30.3501C22.0548 30.3501 22.0515 30.3501 22.0482 30.3501C22.0449 30.3501 22.0415 30.3501 22.0382 30.3501C22.0349 30.3501 22.0316 30.3501 22.0283 30.3501C22.0249 30.3501 22.0216 30.3501 22.0183 30.3501C22.015 30.3501 22.0116 30.3501 22.0083 30.3501C22.005 30.3501 22.0017 30.3501 21.9984 30.3501C21.995 30.3501 21.9917 30.3501 21.9884 30.3501C21.9851 30.3501 21.9818 30.3501 21.9784 30.3501C21.9751 30.3501 21.9718 30.3501 21.9685 30.3501C21.9652 30.3501 21.9618 30.3501 21.9585 30.3501C21.9552 30.3501 21.9519 30.3501 21.9486 30.3501C21.9452 30.3501 21.9419 30.3501 21.9386 30.3501C21.9353 30.3501 21.932 30.3501 21.9287 30.3501C21.9253 30.3501 21.922 30.3501 21.9187 30.3501C21.9154 30.3501 21.9121 30.3501 21.9088 30.3501C21.9055 30.3501 21.9021 30.3501 21.8988 30.3501C21.8955 30.3501 21.8922 30.3501 21.8889 30.3501C21.8856 30.3501 21.8823 30.3501 21.8789 30.3501C21.8756 30.3501 21.8723 30.3501 21.869 30.3501C21.8657 30.3501 21.8624 30.3501 21.8591 30.3501C21.8558 30.3501 21.8525 30.3501 21.8491 30.3501C21.8458 30.3501 21.8425 30.3501 21.8392 30.3501C21.8359 30.3501 21.8326 30.3501 21.8293 30.3501C21.826 30.3501 21.8227 30.3501 21.8194 30.3501C21.8161 30.3501 21.8128 30.3501 21.8094 30.3501C21.8061 30.3501 21.8028 30.3501 21.7995 30.3501C21.7962 30.3501 21.7929 30.3501 21.7896 30.3501C21.7863 30.3501 21.783 30.3501 21.7797 30.3501C21.7764 30.3501 21.7731 30.3501 21.7698 30.3501C21.7665 30.3501 21.7632 30.3501 21.7599 30.3501C21.7566 30.3501 21.7533 30.3501 21.75 30.3501C21.7467 30.3501 21.7434 30.3501 21.7401 30.3501C21.7368 30.3501 21.7335 30.3501 21.7302 30.3501C21.7269 30.3501 21.7236 30.3501 21.7203 30.3501C21.717 30.3501 21.7137 30.3501 21.7104 30.3501C21.7071 30.3501 21.7038 30.3501 21.7005 30.3501C21.6972 30.3501 21.6939 30.3501 21.6906 30.3501C21.6873 30.3501 21.684 30.3501 21.6807 30.3501C21.6774 30.3501 21.6741 30.3501 21.6708 30.3501C21.6676 30.3501 21.6643 30.3501 21.661 30.3501C21.6577 30.3501 21.6544 30.3501 21.6511 30.3501C21.6478 30.3501 21.6445 30.3501 21.6412 30.3501C21.6379 30.3501 21.6346 30.3501 21.6314 30.3501C21.6281 30.3501 21.6248 30.3501 21.6215 30.3501C21.6182 30.3501 21.6149 30.3501 21.6116 30.3501C21.6084 30.3501 21.6051 30.3501 21.6018 30.3501C21.5985 30.3501 21.5952 30.3501 21.5919 30.3501C21.5886 30.3501 21.5854 30.3501 21.5821 30.3501C21.5788 30.3501 21.5755 30.3501 21.5722 30.3501C21.569 30.3501 21.5657 30.3501 21.5624 30.3501C21.5591 30.3501 21.5558 30.3501 21.5526 30.3501C21.5493 30.3501 21.546 30.3501 21.5427 30.3501C21.5394 30.3501 21.5362 30.3501 21.5329 30.3501C21.5296 30.3501 21.5263 30.3501 21.5231 30.3501C21.5198 30.3501 21.5165 30.3501 21.5132 30.3501C21.51 30.3501 21.5067 30.3501 21.5034 30.3501C21.5001 30.3501 21.4969 30.3501 21.4936 30.3501C21.4903 30.3501 21.4871 30.3501 21.4838 30.3501C21.4805 30.3501 21.4772 30.3501 21.474 30.3501C21.4707 30.3501 21.4674 30.3501 21.4642 30.3501C21.4609 30.3501 21.4576 30.3501 21.4544 30.3501C21.4511 30.3501 21.4478 30.3501 21.4446 30.3501C21.4413 30.3501 21.4381 30.3501 21.4348 30.3501C21.4315 30.3501 21.4283 30.3501 21.425 30.3501C21.4217 30.3501 21.4185 30.3501 21.4152 30.3501C21.412 30.3501 21.4087 30.3501 21.4054 30.3501C21.4022 30.3501 21.3989 30.3501 21.3957 30.3501C21.3924 30.3501 21.3892 30.3501 21.3859 30.3501C21.3826 30.3501 21.3794 30.3501 21.3761 30.3501C21.3729 30.3501 21.3696 30.3501 21.3664 30.3501C21.3631 30.3501 21.3599 30.3501 21.3566 30.3501C21.3534 30.3501 21.3501 30.3501 21.3469 30.3501C21.3436 30.3501 21.3404 30.3501 21.3371 30.3501C21.3339 30.3501 21.3306 30.3501 21.3274 30.3501C21.3241 30.3501 21.3209 30.3501 21.3176 30.3501C21.3144 30.3501 21.3112 30.3501 21.3079 30.3501C21.3047 30.3501 21.3014 30.3501 21.2982 30.3501C21.2949 30.3501 21.2917 30.3501 21.2885 30.3501C21.2852 30.3501 21.282 30.3501 21.2787 30.3501C21.2755 30.3501 21.2723 30.3501 21.269 30.3501C21.2658 30.3501 21.2625 30.3501 21.2593 30.3501C21.2561 30.3501 21.2528 30.3501 21.2496 30.3501C21.2464 30.3501 21.2431 30.3501 21.2399 30.3501C21.2367 30.3501 21.2334 30.3501 21.2302 30.3501C21.227 30.3501 21.2238 30.3501 21.2205 30.3501C21.2173 30.3501 21.2141 30.3501 21.2108 30.3501C21.2076 30.3501 21.2044 30.3501 21.2012 30.3501C21.1979 30.3501 21.1947 30.3501 21.1915 30.3501C21.1883 30.3501 21.185 30.3501 21.1818 30.3501C21.1786 30.3501 21.1754 30.3501 21.1722 30.3501C21.1689 30.3501 21.1657 30.3501 21.1625 30.3501C21.1593 30.3501 21.1561 30.3501 21.1529 30.3501C21.1496 30.3501 21.1464 30.3501 21.1432 30.3501C21.14 30.3501 21.1368 30.3501 21.1336 30.3501C21.1304 30.3501 21.1271 30.3501 21.1239 30.3501C21.1207 30.3501 21.1175 30.3501 21.1143 30.3501C21.1111 30.3501 21.1079 30.3501 21.1047 30.3501C21.1015 30.3501 21.0983 30.3501 21.0951 30.3501C21.0919 30.3501 21.0887 30.3501 21.0854 30.3501C21.0822 30.3501 21.079 30.3501 21.0758 30.3501C21.0726 30.3501 21.0694 30.3501 21.0662 30.3501C21.063 30.3501 21.0598 30.3501 21.0566 30.3501C21.0534 30.3501 21.0502 30.3501 21.0471 30.3501C21.0439 30.3501 21.0407 30.3501 21.0375 30.3501C21.0343 30.3501 21.0311 30.3501 21.0279 30.3501C21.0247 30.3501 21.0215 30.3501 21.0183 30.3501C21.0151 30.3501 21.0119 30.3501 21.0088 30.3501C21.0056 30.3501 21.0024 30.3501 20.9992 30.3501V32.3501C21.0024 32.3501 21.0056 32.3501 21.0088 32.3501C21.0119 32.3501 21.0151 32.3501 21.0183 32.3501C21.0215 32.3501 21.0247 32.3501 21.0279 32.3501C21.0311 32.3501 21.0343 32.3501 21.0375 32.3501C21.0407 32.3501 21.0439 32.3501 21.0471 32.3501C21.0502 32.3501 21.0534 32.3501 21.0566 32.3501C21.0598 32.3501 21.063 32.3501 21.0662 32.3501C21.0694 32.3501 21.0726 32.3501 21.0758 32.3501C21.079 32.3501 21.0822 32.3501 21.0854 32.3501C21.0887 32.3501 21.0919 32.3501 21.0951 32.3501C21.0983 32.3501 21.1015 32.3501 21.1047 32.3501C21.1079 32.3501 21.1111 32.3501 21.1143 32.3501C21.1175 32.3501 21.1207 32.3501 21.1239 32.3501C21.1271 32.3501 21.1304 32.3501 21.1336 32.3501C21.1368 32.3501 21.14 32.3501 21.1432 32.3501C21.1464 32.3501 21.1496 32.3501 21.1529 32.3501C21.1561 32.3501 21.1593 32.3501 21.1625 32.3501C21.1657 32.3501 21.1689 32.3501 21.1722 32.3501C21.1754 32.3501 21.1786 32.3501 21.1818 32.3501C21.185 32.3501 21.1883 32.3501 21.1915 32.3501C21.1947 32.3501 21.1979 32.3501 21.2012 32.3501C21.2044 32.3501 21.2076 32.3501 21.2108 32.3501C21.2141 32.3501 21.2173 32.3501 21.2205 32.3501C21.2238 32.3501 21.227 32.3501 21.2302 32.3501C21.2334 32.3501 21.2367 32.3501 21.2399 32.3501C21.2431 32.3501 21.2464 32.3501 21.2496 32.3501C21.2528 32.3501 21.2561 32.3501 21.2593 32.3501C21.2625 32.3501 21.2658 32.3501 21.269 32.3501C21.2723 32.3501 21.2755 32.3501 21.2787 32.3501C21.282 32.3501 21.2852 32.3501 21.2885 32.3501C21.2917 32.3501 21.2949 32.3501 21.2982 32.3501C21.3014 32.3501 21.3047 32.3501 21.3079 32.3501C21.3112 32.3501 21.3144 32.3501 21.3176 32.3501C21.3209 32.3501 21.3241 32.3501 21.3274 32.3501C21.3306 32.3501 21.3339 32.3501 21.3371 32.3501C21.3404 32.3501 21.3436 32.3501 21.3469 32.3501C21.3501 32.3501 21.3534 32.3501 21.3566 32.3501C21.3599 32.3501 21.3631 32.3501 21.3664 32.3501C21.3696 32.3501 21.3729 32.3501 21.3761 32.3501C21.3794 32.3501 21.3826 32.3501 21.3859 32.3501C21.3892 32.3501 21.3924 32.3501 21.3957 32.3501C21.3989 32.3501 21.4022 32.3501 21.4054 32.3501C21.4087 32.3501 21.412 32.3501 21.4152 32.3501C21.4185 32.3501 21.4217 32.3501 21.425 32.3501C21.4283 32.3501 21.4315 32.3501 21.4348 32.3501C21.4381 32.3501 21.4413 32.3501 21.4446 32.3501C21.4478 32.3501 21.4511 32.3501 21.4544 32.3501C21.4576 32.3501 21.4609 32.3501 21.4642 32.3501C21.4674 32.3501 21.4707 32.3501 21.474 32.3501C21.4772 32.3501 21.4805 32.3501 21.4838 32.3501C21.4871 32.3501 21.4903 32.3501 21.4936 32.3501C21.4969 32.3501 21.5001 32.3501 21.5034 32.3501C21.5067 32.3501 21.51 32.3501 21.5132 32.3501C21.5165 32.3501 21.5198 32.3501 21.5231 32.3501C21.5263 32.3501 21.5296 32.3501 21.5329 32.3501C21.5362 32.3501 21.5394 32.3501 21.5427 32.3501C21.546 32.3501 21.5493 32.3501 21.5526 32.3501C21.5558 32.3501 21.5591 32.3501 21.5624 32.3501C21.5657 32.3501 21.569 32.3501 21.5722 32.3501C21.5755 32.3501 21.5788 32.3501 21.5821 32.3501C21.5854 32.3501 21.5886 32.3501 21.5919 32.3501C21.5952 32.3501 21.5985 32.3501 21.6018 32.3501C21.6051 32.3501 21.6084 32.3501 21.6116 32.3501C21.6149 32.3501 21.6182 32.3501 21.6215 32.3501C21.6248 32.3501 21.6281 32.3501 21.6314 32.3501C21.6346 32.3501 21.6379 32.3501 21.6412 32.3501C21.6445 32.3501 21.6478 32.3501 21.6511 32.3501C21.6544 32.3501 21.6577 32.3501 21.661 32.3501C21.6643 32.3501 21.6676 32.3501 21.6708 32.3501C21.6741 32.3501 21.6774 32.3501 21.6807 32.3501C21.684 32.3501 21.6873 32.3501 21.6906 32.3501C21.6939 32.3501 21.6972 32.3501 21.7005 32.3501C21.7038 32.3501 21.7071 32.3501 21.7104 32.3501C21.7137 32.3501 21.717 32.3501 21.7203 32.3501C21.7236 32.3501 21.7269 32.3501 21.7302 32.3501C21.7335 32.3501 21.7368 32.3501 21.7401 32.3501C21.7434 32.3501 21.7467 32.3501 21.75 32.3501C21.7533 32.3501 21.7566 32.3501 21.7599 32.3501C21.7632 32.3501 21.7665 32.3501 21.7698 32.3501C21.7731 32.3501 21.7764 32.3501 21.7797 32.3501C21.783 32.3501 21.7863 32.3501 21.7896 32.3501C21.7929 32.3501 21.7962 32.3501 21.7995 32.3501C21.8028 32.3501 21.8061 32.3501 21.8094 32.3501C21.8128 32.3501 21.8161 32.3501 21.8194 32.3501C21.8227 32.3501 21.826 32.3501 21.8293 32.3501C21.8326 32.3501 21.8359 32.3501 21.8392 32.3501C21.8425 32.3501 21.8458 32.3501 21.8491 32.3501C21.8525 32.3501 21.8558 32.3501 21.8591 32.3501C21.8624 32.3501 21.8657 32.3501 21.869 32.3501C21.8723 32.3501 21.8756 32.3501 21.8789 32.3501C21.8823 32.3501 21.8856 32.3501 21.8889 32.3501C21.8922 32.3501 21.8955 32.3501 21.8988 32.3501C21.9021 32.3501 21.9055 32.3501 21.9088 32.3501C21.9121 32.3501 21.9154 32.3501 21.9187 32.3501C21.922 32.3501 21.9253 32.3501 21.9287 32.3501C21.932 32.3501 21.9353 32.3501 21.9386 32.3501C21.9419 32.3501 21.9452 32.3501 21.9486 32.3501C21.9519 32.3501 21.9552 32.3501 21.9585 32.3501C21.9618 32.3501 21.9652 32.3501 21.9685 32.3501C21.9718 32.3501 21.9751 32.3501 21.9784 32.3501C21.9818 32.3501 21.9851 32.3501 21.9884 32.3501C21.9917 32.3501 21.995 32.3501 21.9984 32.3501C22.0017 32.3501 22.005 32.3501 22.0083 32.3501C22.0116 32.3501 22.015 32.3501 22.0183 32.3501C22.0216 32.3501 22.0249 32.3501 22.0283 32.3501C22.0316 32.3501 22.0349 32.3501 22.0382 32.3501C22.0415 32.3501 22.0449 32.3501 22.0482 32.3501C22.0515 32.3501 22.0548 32.3501 22.0582 32.3501C22.0615 32.3501 22.0648 32.3501 22.0681 32.3501C22.0715 32.3501 22.0748 32.3501 22.0781 32.3501C22.0814 32.3501 22.0848 32.3501 22.0881 32.3501C22.0914 32.3501 22.0947 32.3501 22.0981 32.3501C22.1014 32.3501 22.1047 32.3501 22.108 32.3501C22.1114 32.3501 22.1147 32.3501 22.118 32.3501C22.1214 32.3501 22.1247 32.3501 22.128 32.3501C22.1313 32.3501 22.1347 32.3501 22.138 32.3501C22.1413 32.3501 22.1447 32.3501 22.148 32.3501C22.1513 32.3501 22.1546 32.3501 22.158 32.3501C22.1613 32.3501 22.1646 32.3501 22.168 32.3501C22.1713 32.3501 22.1746 32.3501 22.1779 32.3501C22.1813 32.3501 22.1846 32.3501 22.1879 32.3501C22.1913 32.3501 22.1946 32.3501 22.1979 32.3501C22.2013 32.3501 22.2046 32.3501 22.2079 32.3501C22.2113 32.3501 22.2146 32.3501 22.2179 32.3501C22.2212 32.3501 22.2246 32.3501 22.2279 32.3501C22.2312 32.3501 22.2346 32.3501 22.2379 32.3501C22.2412 32.3501 22.2446 32.3501 22.2479 32.3501C22.2512 32.3501 22.2546 32.3501 22.2579 32.3501C22.2612 32.3501 22.2646 32.3501 22.2679 32.3501C22.2712 32.3501 22.2746 32.3501 22.2779 32.3501C22.2812 32.3501 22.2846 32.3501 22.2879 32.3501C22.2912 32.3501 22.2946 32.3501 22.2979 32.3501C22.3012 32.3501 22.3046 32.3501 22.3079 32.3501C22.3112 32.3501 22.3146 32.3501 22.3179 32.3501C22.3212 32.3501 22.3246 32.3501 22.3279 32.3501C22.3312 32.3501 22.3346 32.3501 22.3379 32.3501C22.3412 32.3501 22.3446 32.3501 22.3479 32.3501C22.3512 32.3501 22.3546 32.3501 22.3579 32.3501C22.3612 32.3501 22.3646 32.3501 22.3679 32.3501C22.3712 32.3501 22.3746 32.3501 22.3779 32.3501C22.3812 32.3501 22.3846 32.3501 22.3879 32.3501C22.3913 32.3501 22.3946 32.3501 22.3979 32.3501C22.4013 32.3501 22.4046 32.3501 22.4079 32.3501C22.4113 32.3501 22.4146 32.3501 22.4179 32.3501C22.4213 32.3501 22.4246 32.3501 22.4279 32.3501C22.4313 32.3501 22.4346 32.3501 22.4379 32.3501C22.4413 32.3501 22.4446 32.3501 22.4479 32.3501C22.4513 32.3501 22.4546 32.3501 22.458 32.3501C22.4613 32.3501 22.4646 32.3501 22.468 32.3501C22.4713 32.3501 22.4746 32.3501 22.478 32.3501C22.4813 32.3501 22.4846 32.3501 22.488 32.3501C22.4913 32.3501 22.4946 32.3501 22.498 32.3501C22.5013 32.3501 22.5046 32.3501 22.508 32.3501C22.5113 32.3501 22.5146 32.3501 22.518 32.3501C22.5213 32.3501 22.5247 32.3501 22.528 32.3501C22.5313 32.3501 22.5347 32.3501 22.538 32.3501C22.5413 32.3501 22.5447 32.3501 22.548 32.3501C22.5513 32.3501 22.5547 32.3501 22.558 32.3501C22.5613 32.3501 22.5647 32.3501 22.568 32.3501C22.5713 32.3501 22.5747 32.3501 22.578 32.3501C22.5813 32.3501 22.5847 32.3501 22.588 32.3501C22.5913 32.3501 22.5947 32.3501 22.598 32.3501C22.6013 32.3501 22.6047 32.3501 22.608 32.3501C22.6113 32.3501 22.6147 32.3501 22.618 32.3501C22.6213 32.3501 22.6247 32.3501 22.628 32.3501C22.6313 32.3501 22.6347 32.3501 22.638 32.3501C22.6413 32.3501 22.6447 32.3501 22.648 32.3501C22.6513 32.3501 22.6547 32.3501 22.658 32.3501C22.6613 32.3501 22.6647 32.3501 22.668 32.3501C22.6713 32.3501 22.6747 32.3501 22.678 32.3501C22.6813 32.3501 22.6846 32.3501 22.688 32.3501C22.6913 32.3501 22.6946 32.3501 22.698 32.3501C22.7013 32.3501 22.7046 32.3501 22.708 32.3501C22.7113 32.3501 22.7146 32.3501 22.718 32.3501C22.7213 32.3501 22.7246 32.3501 22.7279 32.3501C22.7313 32.3501 22.7346 32.3501 22.7379 32.3501C22.7413 32.3501 22.7446 32.3501 22.7479 32.3501C22.7513 32.3501 22.7546 32.3501 22.7579 32.3501C22.7612 32.3501 22.7646 32.3501 22.7679 32.3501C22.7712 32.3501 22.7746 32.3501 22.7779 32.3501C22.7812 32.3501 22.7845 32.3501 22.7879 32.3501C22.7912 32.3501 22.7945 32.3501 22.7978 32.3501C22.8012 32.3501 22.8045 32.3501 22.8078 32.3501C22.8111 32.3501 22.8145 32.3501 22.8178 32.3501C22.8211 32.3501 22.8245 32.3501 22.8278 32.3501C22.8311 32.3501 22.8344 32.3501 22.8378 32.3501C22.8411 32.3501 22.8444 32.3501 22.8477 32.3501C22.851 32.3501 22.8544 32.3501 22.8577 32.3501C22.861 32.3501 22.8643 32.3501 22.8677 32.3501C22.871 32.3501 22.8743 32.3501 22.8776 32.3501C22.881 32.3501 22.8843 32.3501 22.8876 32.3501C22.8909 32.3501 22.8942 32.3501 22.8976 32.3501C22.9009 32.3501 22.9042 32.3501 22.9075 32.3501C22.9109 32.3501 22.9142 32.3501 22.9175 32.3501C22.9208 32.3501 22.9241 32.3501 22.9275 32.3501C22.9308 32.3501 22.9341 32.3501 22.9374 32.3501C22.9407 32.3501 22.944 32.3501 22.9474 32.3501C22.9507 32.3501 22.954 32.3501 22.9573 32.3501C22.9606 32.3501 22.964 32.3501 22.9673 32.3501C22.9706 32.3501 22.9739 32.3501 22.9772 32.3501C22.9805 32.3501 22.9838 32.3501 22.9872 32.3501C22.9905 32.3501 22.9938 32.3501 22.9971 32.3501C23.0004 32.3501 23.0037 32.3501 23.007 32.3501C23.0104 32.3501 23.0137 32.3501 23.017 32.3501C23.0203 32.3501 23.0236 32.3501 23.0269 32.3501C23.0302 32.3501 23.0336 32.3501 23.0369 32.3501C23.0402 32.3501 23.0435 32.3501 23.0468 32.3501C23.0501 32.3501 23.0534 32.3501 23.0567 32.3501C23.06 32.3501 23.0633 32.3501 23.0667 32.3501C23.07 32.3501 23.0733 32.3501 23.0766 32.3501C23.0799 32.3501 23.0832 32.3501 23.0865 32.3501C23.0898 32.3501 23.0931 32.3501 23.0964 32.3501C23.0997 32.3501 23.103 32.3501 23.1063 32.3501C23.1096 32.3501 23.1129 32.3501 23.1163 32.3501C23.1196 32.3501 23.1229 32.3501 23.1262 32.3501C23.1295 32.3501 23.1328 32.3501 23.1361 32.3501C23.1394 32.3501 23.1427 32.3501 23.146 32.3501C23.1493 32.3501 23.1526 32.3501 23.1559 32.3501C23.1592 32.3501 23.1625 32.3501 23.1658 32.3501C23.1691 32.3501 23.1724 32.3501 23.1757 32.3501C23.179 32.3501 23.1823 32.3501 23.1856 32.3501C23.1889 32.3501 23.1922 32.3501 23.1955 32.3501C23.1988 32.3501 23.2021 32.3501 23.2054 32.3501C23.2087 32.3501 23.2119 32.3501 23.2152 32.3501C23.2185 32.3501 23.2218 32.3501 23.2251 32.3501C23.2284 32.3501 23.2317 32.3501 23.235 32.3501C23.2383 32.3501 23.2416 32.3501 23.2449 32.3501C23.2482 32.3501 23.2515 32.3501 23.2548 32.3501C23.258 32.3501 23.2613 32.3501 23.2646 32.3501C23.2679 32.3501 23.2712 32.3501 23.2745 32.3501C23.2778 32.3501 23.2811 32.3501 23.2843 32.3501C23.2876 32.3501 23.2909 32.3501 23.2942 32.3501C23.2975 32.3501 23.3008 32.3501 23.3041 32.3501C23.3073 32.3501 23.3106 32.3501 23.3139 32.3501C23.3172 32.3501 23.3205 32.3501 23.3238 32.3501C23.327 32.3501 23.3303 32.3501 23.3336 32.3501C23.3369 32.3501 23.3402 32.3501 23.3434 32.3501C23.3467 32.3501 23.35 32.3501 23.3533 32.3501C23.3566 32.3501 23.3598 32.3501 23.3631 32.3501C23.3664 32.3501 23.3697 32.3501 23.3729 32.3501C23.3762 32.3501 23.3795 32.3501 23.3828 32.3501C23.3861 32.3501 23.3893 32.3501 23.3926 32.3501C23.3959 32.3501 23.3991 32.3501 23.4024 32.3501C23.4057 32.3501 23.409 32.3501 23.4122 32.3501C23.4155 32.3501 23.4188 32.3501 23.422 32.3501C23.4253 32.3501 23.4286 32.3501 23.4318 32.3501C23.4351 32.3501 23.4384 32.3501 23.4416 32.3501C23.4449 32.3501 23.4482 32.3501 23.4514 32.3501C23.4547 32.3501 23.458 32.3501 23.4612 32.3501C23.4645 32.3501 23.4678 32.3501 23.471 32.3501C23.4743 32.3501 23.4776 32.3501 23.4808 32.3501C23.4841 32.3501 23.4873 32.3501 23.4906 32.3501C23.4939 32.3501 23.4971 32.3501 23.5004 32.3501C23.5036 32.3501 23.5069 32.3501 23.5101 32.3501C23.5134 32.3501 23.5167 32.3501 23.5199 32.3501C23.5232 32.3501 23.5264 32.3501 23.5297 32.3501C23.5329 32.3501 23.5362 32.3501 23.5394 32.3501C23.5427 32.3501 23.5459 32.3501 23.5492 32.3501C23.5524 32.3501 23.5557 32.3501 23.5589 32.3501C23.5622 32.3501 23.5654 32.3501 23.5687 32.3501C23.5719 32.3501 23.5752 32.3501 23.5784 32.3501C23.5817 32.3501 23.5849 32.3501 23.5882 32.3501C23.5914 32.3501 23.5946 32.3501 23.5979 32.3501C23.6011 32.3501 23.6044 32.3501 23.6076 32.3501C23.6109 32.3501 23.6141 32.3501 23.6173 32.3501C23.6206 32.3501 23.6238 32.3501 23.6271 32.3501C23.6303 32.3501 23.6335 32.3501 23.6368 32.3501C23.64 32.3501 23.6432 32.3501 23.6465 32.3501C23.6497 32.3501 23.6529 32.3501 23.6562 32.3501C23.6594 32.3501 23.6626 32.3501 23.6659 32.3501C23.6691 32.3501 23.6723 32.3501 23.6756 32.3501C23.6788 32.3501 23.682 32.3501 23.6853 32.3501C23.6885 32.3501 23.6917 32.3501 23.6949 32.3501C23.6982 32.3501 23.7014 32.3501 23.7046 32.3501C23.7078 32.3501 23.7111 32.3501 23.7143 32.3501C23.7175 32.3501 23.7207 32.3501 23.7239 32.3501C23.7272 32.3501 23.7304 32.3501 23.7336 32.3501C23.7368 32.3501 23.74 32.3501 23.7433 32.3501C23.7465 32.3501 23.7497 32.3501 23.7529 32.3501C23.7561 32.3501 23.7593 32.3501 23.7626 32.3501C23.7658 32.3501 23.769 32.3501 23.7722 32.3501C23.7754 32.3501 23.7786 32.3501 23.7818 32.3501C23.785 32.3501 23.7882 32.3501 23.7915 32.3501C23.7947 32.3501 23.7979 32.3501 23.8011 32.3501C23.8043 32.3501 23.8075 32.3501 23.8107 32.3501C23.8139 32.3501 23.8171 32.3501 23.8203 32.3501C23.8235 32.3501 23.8267 32.3501 23.8299 32.3501C23.8331 32.3501 23.8363 32.3501 23.8395 32.3501C23.8427 32.3501 23.8459 32.3501 23.8491 32.3501C23.8523 32.3501 23.8555 32.3501 23.8587 32.3501C23.8619 32.3501 23.8651 32.3501 23.8683 32.3501C23.8715 32.3501 23.8747 32.3501 23.8779 32.3501C23.881 32.3501 23.8842 32.3501 23.8874 32.3501C23.8906 32.3501 23.8938 32.3501 23.897 32.3501C23.9002 32.3501 23.9034 32.3501 23.9065 32.3501C23.9097 32.3501 23.9129 32.3501 23.9161 32.3501C23.9193 32.3501 23.9225 32.3501 23.9256 32.3501C23.9288 32.3501 23.932 32.3501 23.9352 32.3501C23.9384 32.3501 23.9415 32.3501 23.9447 32.3501C23.9479 32.3501 23.9511 32.3501 23.9542 32.3501C23.9574 32.3501 23.9606 32.3501 23.9638 32.3501C23.9669 32.3501 23.9701 32.3501 23.9733 32.3501C23.9764 32.3501 23.9796 32.3501 23.9828 32.3501C23.986 32.3501 23.9891 32.3501 23.9923 32.3501C23.9955 32.3501 23.9986 32.3501 24.0018 32.3501C24.0049 32.3501 24.0081 32.3501 24.0113 32.3501C24.0144 32.3501 24.0176 32.3501 24.0207 32.3501C24.0239 32.3501 24.0271 32.3501 24.0302 32.3501C24.0334 32.3501 24.0365 32.3501 24.0397 32.3501C24.0428 32.3501 24.046 32.3501 24.0492 32.3501C24.0523 32.3501 24.0555 32.3501 24.0586 32.3501C24.0618 32.3501 24.0649 32.3501 24.0681 32.3501C24.0712 32.3501 24.0744 32.3501 24.0775 32.3501C24.0806 32.3501 24.0838 32.3501 24.0869 32.3501C24.0901 32.3501 24.0932 32.3501 24.0964 32.3501C24.0995 32.3501 24.1026 32.3501 24.1058 32.3501C24.1089 32.3501 24.1121 32.3501 24.1152 32.3501C24.1183 32.3501 24.1215 32.3501 24.1246 32.3501C24.1277 32.3501 24.1309 32.3501 24.134 32.3501C24.1371 32.3501 24.1403 32.3501 24.1434 32.3501C24.1465 32.3501 24.1497 32.3501 24.1528 32.3501C24.1559 32.3501 24.159 32.3501 24.1622 32.3501C24.1653 32.3501 24.1684 32.3501 24.1715 32.3501C24.1747 32.3501 24.1778 32.3501 24.1809 32.3501C24.184 32.3501 24.1871 32.3501 24.1903 32.3501C24.1934 32.3501 24.1965 32.3501 24.1996 32.3501C24.2027 32.3501 24.2058 32.3501 24.2089 32.3501C24.2121 32.3501 24.2152 32.3501 24.2183 32.3501C24.2214 32.3501 24.2245 32.3501 24.2276 32.3501C24.2307 32.3501 24.2338 32.3501 24.2369 32.3501C24.24 32.3501 24.2431 32.3501 24.2462 32.3501C24.2493 32.3501 24.2524 32.3501 24.2555 32.3501C24.2586 32.3501 24.2617 32.3501 24.2648 32.3501C24.2679 32.3501 24.271 32.3501 24.2741 32.3501C24.2772 32.3501 24.2803 32.3501 24.2834 32.3501C24.2865 32.3501 24.2896 32.3501 24.2927 32.3501C24.2958 32.3501 24.2989 32.3501 24.302 32.3501C24.305 32.3501 24.3081 32.3501 24.3112 32.3501C24.3143 32.3501 24.3174 32.3501 24.3205 32.3501C24.3235 32.3501 24.3266 32.3501 24.3297 32.3501C24.3328 32.3501 24.3359 32.3501 24.3389 32.3501C24.342 32.3501 24.3451 32.3501 24.3482 32.3501C24.3512 32.3501 24.3543 32.3501 24.3574 32.3501C24.3605 32.3501 24.3635 32.3501 24.3666 32.3501C24.3697 32.3501 24.3727 32.3501 24.3758 32.3501C24.3789 32.3501 24.3819 32.3501 24.385 32.3501C24.3881 32.3501 24.3911 32.3501 24.3942 32.3501C24.3972 32.3501 24.4003 32.3501 24.4034 32.3501C24.4064 32.3501 24.4095 32.3501 24.4125 32.3501C24.4156 32.3501 24.4186 32.3501 24.4217 32.3501C24.4247 32.3501 24.4278 32.3501 24.4308 32.3501C24.4339 32.3501 24.4369 32.3501 24.44 32.3501C24.443 32.3501 24.4461 32.3501 24.4491 32.3501C24.4522 32.3501 24.4552 32.3501 24.4582 32.3501C24.4613 32.3501 24.4643 32.3501 24.4674 32.3501C24.4704 32.3501 24.4734 32.3501 24.4765 32.3501C24.4795 32.3501 24.4825 32.3501 24.4856 32.3501C24.4886 32.3501 24.4916 32.3501 24.4947 32.3501C24.4977 32.3501 24.5007 32.3501 24.5038 32.3501C24.5068 32.3501 24.5098 32.3501 24.5128 32.3501C24.5158 32.3501 24.5189 32.3501 24.5219 32.3501C24.5249 32.3501 24.5279 32.3501 24.531 32.3501C24.534 32.3501 24.537 32.3501 24.54 32.3501C24.543 32.3501 24.546 32.3501 24.549 32.3501C24.5521 32.3501 24.5551 32.3501 24.5581 32.3501C24.5611 32.3501 24.5641 32.3501 24.5671 32.3501C24.5701 32.3501 24.5731 32.3501 24.5761 32.3501C24.5791 32.3501 24.5821 32.3501 24.5851 32.3501C24.5881 32.3501 24.5911 32.3501 24.5941 32.3501C24.5971 32.3501 24.6001 32.3501 24.6031 32.3501C24.6061 32.3501 24.6091 32.3501 24.6121 32.3501C24.6151 32.3501 24.618 32.3501 24.621 32.3501C24.624 32.3501 24.627 32.3501 24.63 32.3501C24.633 32.3501 24.636 32.3501 24.6389 32.3501C24.6419 32.3501 24.6449 32.3501 24.6479 32.3501C24.6509 32.3501 24.6538 32.3501 24.6568 32.3501C24.6598 32.3501 24.6628 32.3501 24.6657 32.3501C24.6687 32.3501 24.6717 32.3501 24.6746 32.3501C24.6776 32.3501 24.6806 32.3501 24.6835 32.3501C24.6865 32.3501 24.6895 32.3501 24.6924 32.3501C24.6954 32.3501 24.6984 32.3501 24.7013 32.3501C24.7043 32.3501 24.7072 32.3501 24.7102 32.3501C24.7131 32.3501 24.7161 32.3501 24.7191 32.3501C24.722 32.3501 24.725 32.3501 24.7279 32.3501C24.7309 32.3501 24.7338 32.3501 24.7367 32.3501C24.7397 32.3501 24.7426 32.3501 24.7456 32.3501C24.7485 32.3501 24.7515 32.3501 24.7544 32.3501C24.7573 32.3501 24.7603 32.3501 24.7632 32.3501C24.7662 32.3501 24.7691 32.3501 24.772 32.3501C24.775 32.3501 24.7779 32.3501 24.7808 32.3501C24.7837 32.3501 24.7867 32.3501 24.7896 32.3501C24.7925 32.3501 24.7955 32.3501 24.7984 32.3501C24.8013 32.3501 24.8042 32.3501 24.8071 32.3501C24.8101 32.3501 24.813 32.3501 24.8159 32.3501C24.8188 32.3501 24.8217 32.3501 24.8246 32.3501C24.8275 32.3501 24.8305 32.3501 24.8334 32.3501C24.8363 32.3501 24.8392 32.3501 24.8421 32.3501C24.845 32.3501 24.8479 32.3501 24.8508 32.3501C24.8537 32.3501 24.8566 32.3501 24.8595 32.3501C24.8624 32.3501 24.8653 32.3501 24.8682 32.3501C24.8711 32.3501 24.874 32.3501 24.8769 32.3501C24.8798 32.3501 24.8827 32.3501 24.8856 32.3501C24.8884 32.3501 24.8913 32.3501 24.8942 32.3501C24.8971 32.3501 24.9 32.3501 24.9029 32.3501C24.9057 32.3501 24.9086 32.3501 24.9115 32.3501C24.9144 32.3501 24.9173 32.3501 24.9201 32.3501C24.923 32.3501 24.9259 32.3501 24.9287 32.3501C24.9316 32.3501 24.9345 32.3501 24.9374 32.3501C24.9402 32.3501 24.9431 32.3501 24.9459 32.3501C24.9488 32.3501 24.9517 32.3501 24.9545 32.3501C24.9574 32.3501 24.9603 32.3501 24.9631 32.3501C24.966 32.3501 24.9688 32.3501 24.9717 32.3501C24.9745 32.3501 24.9774 32.3501 24.9802 32.3501C24.9831 32.3501 24.9859 32.3501 24.9888 32.3501C24.9916 32.3501 24.9945 32.3501 24.9973 32.3501C25.0001 32.3501 25.003 32.3501 25.0058 32.3501C25.0087 32.3501 25.0115 32.3501 25.0143 32.3501C25.0172 32.3501 25.02 32.3501 25.0228 32.3501C25.0257 32.3501 25.0285 32.3501 25.0313 32.3501C25.0341 32.3501 25.037 32.3501 25.0398 32.3501C25.0426 32.3501 25.0454 32.3501 25.0483 32.3501C25.0511 32.3501 25.0539 32.3501 25.0567 32.3501C25.0595 32.3501 25.0623 32.3501 25.0651 32.3501C25.068 32.3501 25.0708 32.3501 25.0736 32.3501C25.0764 32.3501 25.0792 32.3501 25.082 32.3501C25.0848 32.3501 25.0876 32.3501 25.0904 32.3501C25.0932 32.3501 25.096 32.3501 25.0988 32.3501C25.1016 32.3501 25.1044 32.3501 25.1072 32.3501C25.11 32.3501 25.1128 32.3501 25.1156 32.3501C25.1183 32.3501 25.1211 32.3501 25.1239 32.3501C25.1267 32.3501 25.1295 32.3501 25.1323 32.3501C25.135 32.3501 25.1378 32.3501 25.1406 32.3501C25.1434 32.3501 25.1462 32.3501 25.1489 32.3501C25.1517 32.3501 25.1545 32.3501 25.1572 32.3501C25.16 32.3501 25.1628 32.3501 25.1655 32.3501C25.1683 32.3501 25.1711 32.3501 25.1738 32.3501C25.1766 32.3501 25.1794 32.3501 25.1821 32.3501C25.1849 32.3501 25.1876 32.3501 25.1904 32.3501C25.1931 32.3501 25.1959 32.3501 25.1986 32.3501C25.2014 32.3501 25.2041 32.3501 25.2069 32.3501C25.2096 32.3501 25.2124 32.3501 25.2151 32.3501C25.2178 32.3501 25.2206 32.3501 25.2233 32.3501C25.2261 32.3501 25.2288 32.3501 25.2315 32.3501C25.2343 32.3501 25.237 32.3501 25.2397 32.3501C25.2424 32.3501 25.2452 32.3501 25.2479 32.3501C25.2506 32.3501 25.2533 32.3501 25.2561 32.3501C25.2588 32.3501 25.2615 32.3501 25.2642 32.3501C25.2669 32.3501 25.2697 32.3501 25.2724 32.3501C25.2751 32.3501 25.2778 32.3501 25.2805 32.3501C25.2832 32.3501 25.2859 32.3501 25.2886 32.3501C25.2913 32.3501 25.294 32.3501 25.2967 32.3501C25.2994 32.3501 25.3021 32.3501 25.3048 32.3501C25.3075 32.3501 25.3102 32.3501 25.3129 32.3501C25.3156 32.3501 25.3183 32.3501 25.321 32.3501C25.3237 32.3501 25.3263 32.3501 25.329 32.3501C25.3317 32.3501 25.3344 32.3501 25.3371 32.3501C25.3398 32.3501 25.3424 32.3501 25.3451 32.3501C25.3478 32.3501 25.3505 32.3501 25.3531 32.3501C25.3558 32.3501 25.3585 32.3501 25.3611 32.3501C25.3638 32.3501 25.3665 32.3501 25.3691 32.3501C25.3718 32.3501 25.3744 32.3501 25.3771 32.3501C25.3798 32.3501 25.3824 32.3501 25.3851 32.3501C25.3877 32.3501 25.3904 32.3501 25.393 32.3501C25.3957 32.3501 25.3983 32.3501 25.401 32.3501C25.4036 32.3501 25.4062 32.3501 25.4089 32.3501C25.4115 32.3501 25.4142 32.3501 25.4168 32.3501C25.4194 32.3501 25.4221 32.3501 25.4247 32.3501C25.4273 32.3501 25.43 32.3501 25.4326 32.3501C25.4352 32.3501 25.4378 32.3501 25.4405 32.3501C25.4431 32.3501 25.4457 32.3501 25.4483 32.3501C25.4509 32.3501 25.4536 32.3501 25.4562 32.3501C25.4588 32.3501 25.4614 32.3501 25.464 32.3501C25.4666 32.3501 25.4692 32.3501 25.4718 32.3501C25.4744 32.3501 25.477 32.3501 25.4796 32.3501C25.4822 32.3501 25.4848 32.3501 25.4874 32.3501C25.49 32.3501 25.4926 32.3501 25.4952 32.3501C25.4978 32.3501 25.5004 32.3501 25.503 32.3501C25.5056 32.3501 25.5082 32.3501 25.5107 32.3501C25.5133 32.3501 25.5159 32.3501 25.5185 32.3501C25.5211 32.3501 25.5236 32.3501 25.5262 32.3501C25.5288 32.3501 25.5313 32.3501 25.5339 32.3501C25.5365 32.3501 25.539 32.3501 25.5416 32.3501C25.5442 32.3501 25.5467 32.3501 25.5493 32.3501C25.5519 32.3501 25.5544 32.3501 25.557 32.3501C25.5595 32.3501 25.5621 32.3501 25.5646 32.3501C25.5672 32.3501 25.5697 32.3501 25.5723 32.3501C25.5748 32.3501 25.5774 32.3501 25.5799 32.3501C25.5824 32.3501 25.585 32.3501 25.5875 32.3501C25.59 32.3501 25.5926 32.3501 25.5951 32.3501C25.5976 32.3501 25.6002 32.3501 25.6027 32.3501C25.6052 32.3501 25.6078 32.3501 25.6103 32.3501C25.6128 32.3501 25.6153 32.3501 25.6178 32.3501C25.6203 32.3501 25.6229 32.3501 25.6254 32.3501C25.6279 32.3501 25.6304 32.3501 25.6329 32.3501C25.6354 32.3501 25.6379 32.3501 25.6404 32.3501C25.6429 32.3501 25.6454 32.3501 25.6479 32.3501C25.6504 32.3501 25.6529 32.3501 25.6554 32.3501C25.6579 32.3501 25.6604 32.3501 25.6629 32.3501C25.6654 32.3501 25.6679 32.3501 25.6703 32.3501C25.6728 32.3501 25.6753 32.3501 25.6778 32.3501C25.6803 32.3501 25.6827 32.3501 25.6852 32.3501C25.6877 32.3501 25.6902 32.3501 25.6926 32.3501C25.6951 32.3501 25.6976 32.3501 25.7 32.3501C25.7025 32.3501 25.705 32.3501 25.7074 32.3501C25.7099 32.3501 25.7123 32.3501 25.7148 32.3501C25.7172 32.3501 25.7197 32.3501 25.7221 32.3501C25.7246 32.3501 25.727 32.3501 25.7295 32.3501C25.7319 32.3501 25.7344 32.3501 25.7368 32.3501C25.7392 32.3501 25.7417 32.3501 25.7441 32.3501C25.7466 32.3501 25.749 32.3501 25.7514 32.3501C25.7538 32.3501 25.7563 32.3501 25.7587 32.3501C25.7611 32.3501 25.7635 32.3501 25.766 32.3501V30.3501ZM21 37.3501H27V35.3501H21V37.3501ZM17.5 33.8501C17.5 35.7831 19.067 37.3501 21 37.3501V35.3501C20.1716 35.3501 19.5 34.6785 19.5 33.8501H17.5ZM20.9992 30.3501C19.0658 30.3501 17.5 31.9175 17.5 33.8501H19.5C19.5 33.0213 20.1712 32.3501 20.9992 32.3501V30.3501ZM27.2865 29.594C26.8989 29.8354 26.6642 30.0064 26.3693 30.161C26.104 30.3 25.9182 30.3501 25.766 30.3501V32.3501C26.3713 32.3501 26.8885 32.1469 27.2977 31.9324C27.6773 31.7335 28.0883 31.4508 28.3438 31.2917L27.2865 29.594Z"
                        fill={iconColor}
                    />
                    <path
                        d="M19 35.3501L9.76092 32.5382C8.50274 32.1553 7.16855 32.8445 6.75266 34.0921V34.0921C6.33465 35.3461 6.99735 36.704 8.24308 37.146L19.1184 41.005C20.6857 41.5612 22.3587 41.7547 24.0116 41.571L35 40.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <rect x="13" y="19.3501" width="5.33333" height="9.6" rx="2" stroke={iconColor} strokeWidth="2" />
                    <circle
                        cx="22.0667"
                        cy="19.8834"
                        r="0.533333"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <circle
                        cx="28.4667"
                        cy="26.2834"
                        r="0.533333"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M22.0667 26.2834L27.9333 20.4168"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M32.3463 29.8501C32.7702 28.5942 33 27.249 33 25.8501C33 18.9465 27.4036 13.3501 20.5 13.3501C13.5964 13.3501 8 18.9465 8 25.8501C8 28.298 8.70362 30.5815 9.91964 32.5094M20.5 8.8501V3.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path d="M32 12.3501L36 8.3501" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 12.3501L6 8.3501" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* security */}
            {icon === 'security' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M16 20.5557C16 20.5557 16 17.9606 16 14.5574C16 10.1391 19.5817 6.55566 24 6.55566V6.55566C28.4183 6.55566 32 10.1374 32 14.5557V20.5557"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M20 20.5557C20 20.5557 20 17.7735 20 14.5562C20 12.3471 21.7909 10.5557 24 10.5557V10.5557C26.2091 10.5557 28 12.3465 28 14.5557V20.5557"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.5635 36.6795C25.4949 36.2293 25.7566 35.8051 26.0989 35.5045C26.5732 35.088 26.8696 34.4956 26.8696 33.8383C26.8696 32.5776 25.7795 31.5557 24.4348 31.5557C23.0901 31.5557 22 32.5776 22 33.8383C22 34.4956 22.2964 35.0881 22.7708 35.5046C23.1131 35.8052 23.3749 36.2294 23.3062 36.6797L23.1493 37.7093C23.0571 38.3146 23.5256 38.8599 24.1379 38.8599H24.7318C25.3441 38.8599 25.8126 38.3146 25.7204 37.7093L25.5635 36.6795Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12 23.5557C12 21.8988 13.3431 20.5557 15 20.5557H33C34.6569 20.5557 36 21.8988 36 23.5557V38.5557C36 40.2125 34.6569 41.5557 33 41.5557H15C13.3431 41.5557 12 40.2125 12 38.5557V23.5557Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path d="M36 28.5557H12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}
            {/* search-large */}
            {icon === 'search-large' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M17.5 26.3501L7.02282 37.5396C6.36792 38.1779 6 39.0437 6 39.9464C6 40.8491 6.36792 41.7149 7.02282 42.3532C7.67772 42.9915 8.56595 43.3501 9.49212 43.3501C10.4183 43.3501 11.3065 42.9915 11.9614 42.3532L22.4386 31.1719"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path d="M14.5 39.3501L9.5 34.8501" stroke={iconColor} strokeWidth="2" />
                    <circle cx="29" cy="19.3501" r="8" stroke={iconColor} strokeWidth="2" />
                    <circle cx="29" cy="19.3501" r="13" stroke={iconColor} strokeWidth="2" />
                </svg>
            )}

            {/* shield */}
            {icon === 'shield' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0703 4.92362C26.0835 5.02166 29.3943 5.3963 32.8798 6.20284C36.3562 7.00726 40.1153 8.26557 42.9294 10.1838C43.2417 10.3967 43.4286 10.7502 43.4286 11.1281C43.4286 18.6304 41.4772 26.0001 38.1364 31.8775C34.8069 37.7351 30.028 42.2204 24.3116 43.7356C24.2114 43.7641 24.1067 43.779 24 43.779C23.8933 43.779 23.7885 43.7641 23.6884 43.7356C17.9719 42.2204 13.1931 37.7351 9.86356 31.8775C6.52276 26.0001 4.57141 18.6304 4.57141 11.1281C4.57141 10.7502 4.75826 10.3967 5.07056 10.1838C7.88466 8.26557 11.6438 7.00726 15.1201 6.20284C18.6056 5.3963 21.9165 5.02166 23.9297 4.92362C23.9529 4.92221 23.9764 4.92151 24 4.92153C24.0236 4.92151 24.047 4.92221 24.0703 4.92362ZM24 41.4506C28.8211 40.0712 33.0685 36.168 36.1493 30.748C39.1943 25.391 41.0346 18.6557 41.1382 11.7442C38.7178 10.2351 35.5132 9.15829 32.3646 8.42971C29.0427 7.66105 25.8891 7.30355 24 7.20865C22.1109 7.30355 18.9573 7.66105 15.6354 8.42971C12.4868 9.15829 9.28213 10.2351 6.86175 11.7442C6.96535 18.6557 8.80571 25.391 11.8507 30.748C14.9315 36.168 19.1789 40.0712 24 41.4506Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.71866 13.3007C11.9592 12.0204 17.8858 9.49296 24 9.49296C28.6731 9.49296 33.2367 10.9694 36.1287 12.237C36.9224 12.5849 36.8404 13.6772 36.0263 13.9745C34.0665 14.6902 32.1839 15.4463 30.389 16.2237C30.0047 16.3902 29.561 16.2981 29.2449 16.0235C27.8405 14.8031 26.0065 14.0644 24 14.0644C19.5817 14.0644 16 17.6461 16 22.0644C16 22.3956 16.0201 22.7221 16.0592 23.0427C16.1096 23.4564 15.9394 23.8739 15.5898 24.1007C14.5397 24.7819 13.6055 25.4222 12.7965 26.0041C12.2669 26.3851 11.5143 26.1832 11.2855 25.5723C9.69506 21.3241 9.14282 17.1005 9.14282 14.293C9.14282 13.8828 9.36258 13.5042 9.71866 13.3007ZM18.9661 28.2825C18.6021 27.9874 18.0883 27.927 17.6967 28.1843C16.473 28.9885 15.4409 29.7182 14.6206 30.3365C14.2118 30.6446 14.1151 31.2161 14.4056 31.6376C16.5607 34.7651 19.5332 37.5086 23.5755 39.1255C23.8142 39.221 24.0781 39.2332 24.3246 39.1602C28.4156 37.948 36.3336 32.2936 38.3817 19.4979C38.4986 18.7677 37.7878 18.1951 37.0946 18.4526C35.538 19.0307 34.035 19.6344 32.5913 20.2525C32.1628 20.436 31.9285 20.8933 31.9692 21.3576C31.9896 21.5905 32 21.8262 32 22.0644C32 26.4827 28.4182 30.0644 24 30.0644C22.0924 30.0644 20.3409 29.3968 18.9661 28.2825Z"
                        fill={iconColor}
                    />
                    <path
                        d="M25.5496 20.0757C25.9178 20.4873 26.55 20.5224 26.9616 20.1542C27.3732 19.7859 27.4083 19.1537 27.0401 18.7421L25.5496 20.0757ZM24.1896 22.3501L23.803 23.2724L24.1896 22.3501ZM22.2004 24.2308C21.7771 23.876 21.1464 23.9315 20.7916 24.3548C20.4368 24.778 20.4923 25.4088 20.9156 25.7635L22.2004 24.2308ZM23.9264 25.9752L23.9529 24.9755L23.9264 25.9752ZM22.9264 27.3501C22.9264 27.9024 23.3741 28.3501 23.9264 28.3501C24.4787 28.3501 24.9264 27.9024 24.9264 27.3501H22.9264ZM25.1896 17.3501C25.1896 16.7978 24.7418 16.3501 24.1896 16.3501C23.6373 16.3501 23.1896 16.7978 23.1896 17.3501H25.1896ZM25.5967 25.4014L24.8998 24.6842L25.5967 25.4014ZM25.114 22.83L25.6733 22.0011L25.114 22.83ZM27.0401 18.7421C26.6382 18.293 25.5951 17.5266 24.1896 17.5266V19.5266C24.5281 19.5266 24.834 19.6214 25.0853 19.749C25.3458 19.8813 25.5073 20.0284 25.5496 20.0757L27.0401 18.7421ZM24.1896 17.5266C22.4076 17.5266 21.0843 18.7743 21.0843 20.2913H23.0843C23.0843 20.0435 23.34 19.5266 24.1896 19.5266V17.5266ZM21.0843 20.2913C21.0843 21.0762 21.4511 21.703 21.9636 22.1781C22.4523 22.6312 23.1044 22.9796 23.803 23.2724L24.5761 21.4278C23.9589 21.1692 23.5584 20.9294 23.3234 20.7115C23.1122 20.5156 23.0843 20.3887 23.0843 20.2913H21.0843ZM23.9529 24.9755C23.4669 24.9627 22.8425 24.7691 22.2004 24.2308L20.9156 25.7635C21.8726 26.5658 22.9233 26.949 23.8999 26.9748L23.9529 24.9755ZM22.9264 25.9752V27.3501H24.9264V25.9752H22.9264ZM25.1896 18.5266V17.3501H23.1896V18.5266H25.1896ZM24.8998 24.6842C24.7476 24.8321 24.4283 24.9881 23.9529 24.9755L23.8999 26.9748C24.8106 26.9989 25.6867 26.7084 26.2937 26.1185L24.8998 24.6842ZM23.803 23.2724C24.1134 23.4025 24.3617 23.5288 24.5547 23.659L25.6733 22.0011C25.3296 21.7691 24.9496 21.5844 24.5761 21.4278L23.803 23.2724ZM24.5547 23.659C24.891 23.8859 24.9992 24.1306 25.0225 24.2912C25.0466 24.4573 24.9937 24.593 24.8998 24.6842L26.2937 26.1185C27.4971 24.9489 27.1852 23.0212 25.6733 22.0011L24.5547 23.659Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* map-marker-alt */}
            {icon === 'map-marker-alt' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 49 49" fill="none" xmlns={xmlns}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1792 32.2561C15.2939 32.8592 14.892 33.44 14.2814 33.5534C12.2235 33.9354 10.5995 34.4239 9.51981 34.9528C8.97811 35.2181 8.62941 35.4668 8.43035 35.6718C8.33425 35.7707 8.28817 35.844 8.26728 35.8875C8.25718 35.9085 8.25316 35.9221 8.25155 35.9288C8.25002 35.9352 8.25 35.9381 8.25 35.9391C8.25 35.9401 8.25005 35.9421 8.25085 35.9461C8.25168 35.9503 8.25374 35.9587 8.25895 35.9718C8.26953 35.9983 8.29418 36.0466 8.34926 36.1152C8.46449 36.2587 8.67854 36.4483 9.03696 36.6643C9.75592 37.0974 10.8711 37.5272 12.3486 37.9037C15.2867 38.6524 19.4065 39.1279 24 39.1279C28.5935 39.1279 32.7133 38.6524 35.6514 37.9037C37.1289 37.5272 38.2441 37.0974 38.963 36.6643C39.3215 36.4483 39.5355 36.2587 39.6507 36.1152C39.7058 36.0466 39.7305 35.9983 39.7411 35.9718C39.7463 35.9587 39.7483 35.9503 39.7491 35.9461C39.7499 35.9421 39.75 35.9401 39.75 35.9391C39.75 35.9381 39.75 35.9352 39.7485 35.9288C39.7468 35.9221 39.7428 35.9085 39.7327 35.8875C39.7118 35.844 39.6657 35.7707 39.5697 35.6718C39.3706 35.4668 39.0219 35.2181 38.4802 34.9528C37.4005 34.4239 35.7765 33.9354 33.7186 33.5534C33.108 33.44 32.7061 32.8592 32.8208 32.2561C32.9356 31.6531 33.5237 31.2561 34.1343 31.3694C36.2879 31.7692 38.1382 32.3048 39.4799 32.962C40.1489 33.2897 40.7477 33.6745 41.1934 34.1335C41.6438 34.5972 42 35.2056 42 35.9391C42 37.151 41.058 38.0051 40.1347 38.5614C39.1458 39.1571 37.7898 39.6538 36.2135 40.0554C33.044 40.8631 28.7263 41.3501 24 41.3501C19.2737 41.3501 14.956 40.8631 11.7865 40.0554C10.2102 39.6538 8.85417 39.1571 7.86528 38.5614C6.94202 38.0051 6 37.151 6 35.9391C6 35.2056 6.35618 34.5972 6.80659 34.1335C7.25233 33.6745 7.85112 33.2897 8.52012 32.962C9.86178 32.3048 11.7121 31.7692 13.8657 31.3694C14.4763 31.2561 15.0644 31.6531 15.1792 32.2561Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 9.5101C19.772 9.5101 16.2222 13.0894 16.2222 17.6564C16.2222 18.6787 16.685 20.1097 17.5034 21.7817C18.3057 23.421 19.386 25.1668 20.4824 26.7784C21.5762 28.3862 22.6722 29.8403 23.4957 30.8935C23.6784 31.1272 23.8475 31.3408 24 31.5318C24.1525 31.3408 24.3216 31.1272 24.5043 30.8935C25.3278 29.8403 26.4238 28.3862 27.5176 26.7784C28.614 25.1668 29.6943 23.421 30.4966 21.7817C31.315 20.1097 31.7778 18.6787 31.7778 17.6564C31.7778 13.0894 28.228 9.5101 24 9.5101ZM24 33.2701C23.1414 33.9556 23.1413 33.9555 23.1412 33.9553L23.1337 33.9464L23.1132 33.9221L23.0361 33.8297C22.9691 33.7491 22.8715 33.6311 22.7479 33.4797C22.5006 33.177 22.1485 32.7402 21.7265 32.2005C20.8834 31.1223 19.7571 29.6284 18.6287 27.9698C17.5029 26.3148 16.361 24.4757 15.4966 22.7097C14.6483 20.9764 14 19.1818 14 17.6564C14 12.0323 18.4096 7.3501 24 7.3501C29.5904 7.3501 34 12.0323 34 17.6564C34 19.1818 33.3517 20.9764 32.5034 22.7097C31.639 24.4757 30.4971 26.3148 29.3713 27.9698C28.2429 29.6284 27.1166 31.1223 26.2735 32.2005C25.8515 32.7402 25.4994 33.177 25.2521 33.4797C25.1285 33.6311 25.0309 33.7491 24.9639 33.8297L24.8868 33.9221L24.8664 33.9464L24.8593 33.9548C24.8592 33.9549 24.8586 33.9556 24 33.2701ZM24 33.2701L24.8586 33.9556C24.6475 34.2054 24.3325 34.3501 24 34.3501C23.6675 34.3501 23.3522 34.205 23.1412 33.9553L24 33.2701ZM24 13.8301C22.1591 13.8301 20.6667 15.2807 20.6667 17.0701C20.6667 18.8595 22.1591 20.3101 24 20.3101C25.8409 20.3101 27.3333 18.8595 27.3333 17.0701C27.3333 15.2807 25.8409 13.8301 24 13.8301ZM18.4444 17.0701C18.4444 14.0878 20.9318 11.6701 24 11.6701C27.0682 11.6701 29.5556 14.0878 29.5556 17.0701C29.5556 20.0524 27.0682 22.4701 24 22.4701C20.9318 22.4701 18.4444 20.0524 18.4444 17.0701Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* garantee-ribbon */}
            {icon === 'garantee-ribbon' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M14.67 33.0774L12.3481 39.1739C12.0273 40.0162 12.897 40.8192 13.7114 40.4327L16.0178 39.338C16.5299 39.095 17.1414 39.3255 17.3653 39.8461L18.4095 42.2739C18.7539 43.0747 19.887 43.0818 20.2419 42.2854L23.1301 35.8046"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M33.0217 33.0774L35.3436 39.1739C35.6644 40.0162 34.7946 40.8192 33.9802 40.4327L31.6738 39.338C31.1617 39.095 30.5502 39.3255 30.3263 39.8461L29.2822 42.2739C28.9378 43.0747 27.8047 43.0818 27.4498 42.2854L24.5616 35.8046"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M38.2994 14.2952L38.2985 14.2948L35.5899 12.9872L35.5871 12.9859C35.3421 12.8667 35.1261 12.6909 34.9599 12.4699C34.9599 12.4699 34.9599 12.4699 34.9599 12.4699L35.7591 11.8688C35.69 11.7769 35.6448 11.6705 35.6273 11.5584L38.2994 14.2952ZM38.2994 14.2952C38.5417 14.4119 38.7548 14.5722 38.9275 14.7648C39.1002 14.9574 39.2293 15.1784 39.3095 15.4144L40.2563 15.0926M38.2994 14.2952L40.2563 15.0926M40.2563 15.0926L39.3095 15.4144C39.3896 15.6503 39.42 15.898 39.3994 16.1436C39.3789 16.3892 39.3078 16.6299 39.1887 16.8521C39.1886 16.8523 39.1885 16.8526 39.1883 16.8528L37.7918 19.4451C37.7914 19.4459 37.7909 19.4467 37.7905 19.4475C37.6577 19.6924 37.5869 19.9671 37.5869 20.248C37.5869 20.5292 37.6578 20.8042 37.7909 21.0492C37.7912 21.0498 37.7915 21.0504 37.7918 21.051L39.1973 23.652C39.1975 23.6522 39.1976 23.6524 39.1977 23.6526C39.3168 23.8749 39.3879 24.1156 39.4085 24.3611C39.429 24.6068 39.3987 24.8544 39.3185 25.0903C39.2383 25.3263 39.1092 25.5474 38.9366 25.7399C38.7638 25.9326 38.5508 26.0928 38.3084 26.2096L38.3076 26.21L35.6017 27.5162M40.2563 15.0926L35.5992 27.5174M11.9346 12.9884L11.9346 12.9883L9.2259 14.2872L9.21913 14.2905L9.21912 14.2905C8.97322 14.4061 8.75677 14.5665 8.58119 14.76C8.40572 14.9534 8.2745 15.1762 8.19301 15.4143C8.11157 15.6523 8.08091 15.9023 8.10208 16.1502C8.12325 16.3982 8.19603 16.6413 8.31778 16.8653L8.31957 16.8686L8.31956 16.8686L9.71686 19.4624C9.71729 19.4632 9.71772 19.4639 9.71815 19.4647C9.85103 19.7097 9.92175 19.9844 9.92175 20.2654C9.92175 20.5462 9.85106 20.821 9.71822 21.0658C9.71777 21.0667 9.71731 21.0675 9.71686 21.0684L8.32038 23.6606C8.32028 23.6608 8.32017 23.661 8.32007 23.6612C8.20091 23.8835 8.12981 24.1243 8.10928 24.3697C8.08873 24.6154 8.11906 24.8631 8.19925 25.099L7.25245 25.4208L8.19925 25.099C8.27948 25.335 8.40855 25.5561 8.58117 25.7486L7.83862 26.4145L8.58118 25.7486C8.75365 25.9409 8.96633 26.101 9.20828 26.2177C9.20864 26.2179 9.20899 26.218 9.20934 26.2182L11.9165 27.5164L11.9216 27.5188C12.1667 27.6381 12.3826 27.8139 12.5488 28.0349C12.7151 28.2559 12.8262 28.5153 12.8694 28.7919L12.8693 28.7912L11.8814 28.9463L12.8695 28.7922L11.9346 12.9884ZM11.9346 12.9884L11.9397 12.9859M11.9346 12.9884L11.9397 12.9859M11.9397 12.9859C12.1847 12.8667 12.4007 12.6909 12.5669 12.4699L11.9397 12.9859ZM35.5992 27.5174L35.5989 27.5175L36.0336 28.4181L35.6017 27.5162M35.5992 27.5174C35.6001 27.517 35.6009 27.5166 35.6017 27.5162M35.5992 27.5174L35.6017 27.5162M34.6393 11.7125C34.6393 11.7126 34.6393 11.7127 34.6393 11.7128L28.0521 6.5274C28.1345 6.60746 28.2357 6.66735 28.3473 6.70201C28.4588 6.73667 28.5775 6.74509 28.6931 6.72656L28.8501 7.71418L28.8505 7.71411C28.8507 7.71407 28.851 7.71402 28.8513 7.71398L31.8446 7.2384C31.845 7.23833 31.8455 7.23826 31.8459 7.23819C32.116 7.19632 32.3921 7.20615 32.6577 7.26693C32.9238 7.3278 33.1725 7.43818 33.3899 7.58992C33.6071 7.74161 33.7881 7.93114 33.9243 8.14586C34.0603 8.36024 34.1493 8.59615 34.1882 8.83986C34.1882 8.84011 34.1882 8.84036 34.1883 8.84061L34.6393 11.7125ZM23.7634 4.62283C24.3174 4.62283 24.8434 4.82529 25.2364 5.17806L12.5669 12.4699C12.7332 12.2488 12.8443 11.9894 12.8874 11.713C12.8875 11.7128 12.8875 11.7127 12.8875 11.7125L13.3385 8.84061C13.3385 8.84035 13.3386 8.84009 13.3386 8.83983C13.3775 8.59613 13.4665 8.36023 13.6025 8.14586C13.7386 7.93114 13.9196 7.74161 14.1369 7.58992C14.3543 7.43817 14.6029 7.3278 14.869 7.26693C15.1347 7.20615 15.4107 7.19632 15.6808 7.23818C15.6813 7.23825 15.6817 7.23833 15.6822 7.2384L18.6738 7.71371C18.9416 7.75762 19.2168 7.73875 19.4765 7.65804C19.7371 7.57711 19.977 7.43551 20.1742 7.24199C20.1749 7.24132 20.1756 7.24064 20.1763 7.23996L22.2903 5.17809C22.6833 4.82529 23.2093 4.62283 23.7634 4.62283ZM13.3205 31.6646L12.3328 31.8212L13.3207 31.666L13.3206 31.6651C13.3206 31.665 13.3205 31.6648 13.3205 31.6646ZM15.6704 33.2668L15.6701 33.2668L15.827 34.2544L15.6704 33.2668ZM25.224 35.3388L25.2231 35.3397L25.9211 36.0554L25.2248 35.338C25.2245 35.3383 25.2242 35.3385 25.224 35.3388ZM28.0513 32.8498L28.348 33.8048L28.0513 32.8498C28.0513 32.8498 28.0513 32.8498 28.0513 32.8498ZM21.6055 36.0556L22.3022 35.3382L22.302 35.338L21.6055 36.0556ZM34.1978 31.6614C34.1976 31.6621 34.1975 31.6628 34.1974 31.6636L34.968 28.0342C34.8011 28.2561 34.6902 28.5166 34.648 28.7941L34.1978 31.6614Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M18.2269 11.9954C19.8685 10.8992 21.7986 10.3141 23.773 10.314C26.4203 10.3163 28.9583 11.3682 30.83 13.2387C32.7018 15.1092 33.7542 17.6455 33.7564 20.2905C33.7562 22.2631 33.1708 24.1914 32.0741 25.8317C30.9772 27.4722 29.4182 28.7509 27.5939 29.506C25.7697 30.2611 23.7624 30.4587 21.8257 30.0738C19.8891 29.6888 18.1103 28.7386 16.7142 27.3434C15.3181 25.9482 14.3674 24.1707 13.9823 22.2358C13.5971 20.3008 13.7948 18.2951 14.5503 16.4724C15.3058 14.6496 16.5852 13.0916 18.2269 11.9954Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M19.2988 21.6253L22.2276 24.7613L29.0615 17.4441"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* social-impact */}
            {icon === 'social-impact' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M8.82141 33.348C12.0809 31.4744 12.418 31.4744 14.6054 31.4744C18.4081 31.4744 18.4689 32.7502 20.6562 32.7502C22.8436 32.7502 22.858 32.7502 25.5922 32.7502C28.8571 32.7502 28.8571 37.0952 25.5922 37.0952C24.3834 37.0952 21.7643 37.0952 21.2175 37.0952"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 43.5501L13.0714 40.7158L21.2424 43.279C21.8059 43.4558 22.4091 43.4623 22.9764 43.2977L31.1073 40.9383C31.6098 40.7925 32.0655 40.5177 32.429 40.1414L41 31.268C40.4726 30.4807 38.6793 29.4729 35.7257 31.7404C32.772 34.0078 29.2252 35.7203 27.6429 36.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <ellipse cx="24.6071" cy="16.5501" rx="11.5357" ry="11.4" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M20.9365 6.18652L23.5583 7.74107V10.8502L21.9852 13.4411H18.3148L16.7417 14.9956L18.8391 16.032L23.5583 17.0683V19.6593L21.9852 21.2138L20.9365 23.8047L20.4122 26.3956"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.4239 7.74121L29.8508 11.8867L31.4239 14.9958L35.6187 16.0321"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* token-sports */}
            {icon === 'token-sports' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M34.0786 11.918L22.5341 5.20203L4.96653 15.276C4.29729 22.9995 7.47616 37.6068 22.5341 45.4981C32.4055 40.629 37.2575 31.3945 37.9267 27.8686"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M39.0444 17.6639C39.4126 18.0755 40.0448 18.1107 40.4564 17.7424C40.868 17.3741 40.9031 16.7419 40.5348 16.3304L39.0444 17.6639ZM38.1054 19.3501L37.7188 20.2724L38.1054 19.3501ZM36.6425 20.7014C36.2193 20.3466 35.5885 20.4021 35.2338 20.8253C34.879 21.2486 34.9345 21.8793 35.3577 22.2341L36.6425 20.7014ZM37.8949 22.2501L37.9213 21.2505L37.8949 22.2501ZM36.8949 23.3501C36.8949 23.9024 37.3426 24.3501 37.8949 24.3501C38.4471 24.3501 38.8949 23.9024 38.8949 23.3501H36.8949ZM39.1054 15.3501C39.1054 14.7978 38.6577 14.3501 38.1054 14.3501C37.5531 14.3501 37.1054 14.7978 37.1054 15.3501H39.1054ZM39.2311 21.7911L38.5342 21.074L39.2311 21.7911ZM38.8449 19.734L39.4042 18.9051L38.8449 19.734ZM40.5348 16.3304C40.1856 15.94 39.3004 15.2913 38.1054 15.2913V17.2913C38.3387 17.2913 38.5525 17.3566 38.7314 17.4475C38.8202 17.4926 38.895 17.5414 38.9524 17.5849C38.9809 17.6064 39.0034 17.6254 39.02 17.6404C39.037 17.6558 39.0446 17.6642 39.0444 17.6639L40.5348 16.3304ZM38.1054 15.2913C36.5865 15.2913 35.4212 16.3626 35.4212 17.703H37.4212C37.4212 17.6317 37.519 17.2913 38.1054 17.2913V15.2913ZM35.4212 17.703C35.4212 18.3997 35.7486 18.9511 36.1887 19.3591C36.605 19.7451 37.1518 20.0347 37.7188 20.2724L38.4919 18.4278C38.0063 18.2243 37.7111 18.0433 37.5484 17.8925C37.4096 17.7638 37.4212 17.7122 37.4212 17.703H35.4212ZM37.9213 21.2505C37.5816 21.2415 37.1247 21.1056 36.6425 20.7014L35.3577 22.2341C36.1548 22.9023 37.038 23.2278 37.8684 23.2498L37.9213 21.2505ZM36.8949 22.2501V23.3501H38.8949V22.2501H36.8949ZM39.1054 16.2913V15.3501H37.1054V16.2913H39.1054ZM38.5342 21.074C38.4579 21.1481 38.2582 21.2594 37.9213 21.2505L37.8684 23.2498C38.6405 23.2702 39.397 23.0243 39.9281 22.5082L38.5342 21.074ZM37.7188 20.2724C37.9608 20.3738 38.1463 20.469 38.2856 20.563L39.4042 18.9051C39.1142 18.7093 38.797 18.5557 38.4919 18.4278L37.7188 20.2724ZM38.2856 20.563C38.5134 20.7167 38.5642 20.8652 38.5738 20.9317C38.5843 21.0038 38.5615 21.0474 38.5342 21.074L39.9281 22.5082C40.9983 21.4681 40.6991 19.7787 39.4042 18.9051L38.2856 20.563Z"
                        fill={iconColor}
                    />
                    <circle
                        cx="37.6569"
                        cy="19.3569"
                        r="8.3116"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5402 24.1412L15.7638 21.7234L14.152 18.0968"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.0415 14.8256L22.2112 17.3137L25.2971 14.8182"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19.3378 33.0509L18.3302 29.1493L14.363 29.2582"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.454 33.0509L26.4616 29.1493L30.4288 29.2582"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.1816 22.9323L22.2112 19.7086L26.2409 22.9323L24.629 27.3649H19.7935L18.1816 22.9323Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26.6438 29.3797L24.629 27.3649M26.2409 22.9323L29.4645 21.7235M22.2112 17.2909V19.3057"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.7639 21.7234L17.7787 22.5294"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.1816 29.3797L19.7935 27.3649"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.4645 17.1501C27.6322 15.2495 25.0598 14.0672 22.2112 14.0672C16.6475 14.0672 12.1372 18.5775 12.1372 24.1412C12.1372 29.7049 16.6475 34.2152 22.2112 34.2152C27.2607 34.2152 31.4425 30.5002 32.1724 25.6543"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* money-transfer */}
            {icon === 'money-transfer' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M26.0442 28.664C26.4125 29.0755 27.0447 29.1107 27.4563 28.7424C27.8679 28.3741 27.903 27.7419 27.5347 27.3304L26.0442 28.664ZM25.1053 30.3501L24.7187 31.2724L25.1053 30.3501ZM23.6424 31.7014C23.2191 31.3466 22.5884 31.4021 22.2336 31.8253C21.8788 32.2486 21.9343 32.8793 22.3576 33.2341L23.6424 31.7014ZM24.8947 33.2501L24.9212 32.2505L24.8947 33.2501ZM23.8947 34.3501C23.8947 34.9024 24.3425 35.3501 24.8947 35.3501C25.447 35.3501 25.8947 34.9024 25.8947 34.3501H23.8947ZM26.1053 26.3501C26.1053 25.7978 25.6575 25.3501 25.1053 25.3501C24.553 25.3501 24.1053 25.7978 24.1053 26.3501H26.1053ZM26.231 32.7911L25.5341 32.074L26.231 32.7911ZM25.8448 30.734L26.4041 29.9051L25.8448 30.734ZM27.5347 27.3304C27.1854 26.94 26.3003 26.2913 25.1053 26.2913V28.2913C25.3386 28.2913 25.5524 28.3566 25.7313 28.4475C25.8201 28.4927 25.8949 28.5414 25.9523 28.5849C25.9808 28.6064 26.0033 28.6254 26.0198 28.6404C26.0369 28.6559 26.0445 28.6642 26.0442 28.664L27.5347 27.3304ZM25.1053 26.2913C23.5864 26.2913 22.4211 27.3626 22.4211 28.703H24.4211C24.4211 28.6318 24.5188 28.2913 25.1053 28.2913V26.2913ZM22.4211 28.703C22.4211 29.3997 22.7484 29.9511 23.1885 30.3591C23.6048 30.7451 24.1517 31.0347 24.7187 31.2724L25.4918 29.4278C25.0062 29.2243 24.7109 29.0433 24.5483 28.8925C24.4095 28.7638 24.4211 28.7123 24.4211 28.703H22.4211ZM24.9212 32.2505C24.5815 32.2415 24.1246 32.1056 23.6424 31.7014L22.3576 33.2341C23.1547 33.9023 24.0379 34.2278 24.8683 34.2498L24.9212 32.2505ZM23.8947 33.2501V34.3501H25.8947V33.2501H23.8947ZM26.1053 27.2913V26.3501H24.1053V27.2913H26.1053ZM25.5341 32.074C25.4578 32.1481 25.258 32.2594 24.9212 32.2505L24.8683 34.2498C25.6404 34.2702 26.3969 34.0244 26.928 33.5082L25.5341 32.074ZM24.7187 31.2724C24.9607 31.3738 25.1462 31.469 25.2855 31.563L26.4041 29.9051C26.114 29.7094 25.7969 29.5557 25.4918 29.4278L24.7187 31.2724ZM25.2855 31.563C25.5133 31.7167 25.564 31.8652 25.5737 31.9317C25.5842 32.0038 25.5613 32.0475 25.5341 32.074L26.928 33.5082C27.9981 32.4681 27.699 30.7787 26.4041 29.9051L25.2855 31.563Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="24.9055"
                        cy="30.3503"
                        rx="7.5"
                        ry="7.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.1555 15.3549C19.9055 15.4799 11.4055 19.2549 11.4055 33.3549C11.4055 33.7793 11.4055 34.4941 11.4055 35.3546C11.4055 39.2206 14.5395 42.3549 18.4055 42.3549H32.0305C35.3442 42.3549 38.0305 39.6686 38.0305 36.3549V36.3549C38.0305 31.8549 39.5305 19.8549 28.6555 16.1049C29.7805 13.8549 33.5305 5.97987 27.5305 8.22987C26.7805 6.72985 24.5305 5.60485 23.0305 6.72985C21.5305 7.85485 21.9055 10.1049 23.0305 11.9799"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.9055 8.22987C19.1555 7.60487 15.0805 8.22987 20.7805 15.7299"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.03052 14.2299H12.5305"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.9055 14.2299H44.4055"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M39.9152 8.97986L45.1652 14.2299L39.9152 19.4799"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* search-token */}
            {icon === 'search-token' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M33.8891 10.2806H36.465C40.331 10.2806 43.465 13.4146 43.465 17.2806V38.0375C43.465 41.9035 40.331 45.0375 36.465 45.0375H24.9293C21.0633 45.0375 17.9293 41.9035 17.9293 38.0375V26.2814"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="24.3132"
                        y="37.9443"
                        width="12.7678"
                        height="7.09325"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="22.1852"
                        y="30.1417"
                        width="6.38392"
                        height="4.25595"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="32.8251"
                        y="30.1417"
                        width="6.38392"
                        height="4.25595"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="32.8251"
                        y="22.3392"
                        width="6.38392"
                        height="4.25595"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="32.8251"
                        y="14.5366"
                        width="6.38392"
                        height="4.25595"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28.5692 23.0485V26.9498H22.1852V25.8858"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.6972 13.4726C29.6972 18.6007 25.54 22.7578 20.4119 22.7578C15.2839 22.7578 11.1267 18.6007 11.1267 13.4726C11.1267 8.34452 15.2839 4.18739 20.4119 4.18739C25.54 4.18739 29.6972 8.34452 29.6972 13.4726Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M12.6317 19.0809L3.61442 28.0981C2.91922 28.7933 2.91922 29.9205 3.61442 30.6157V30.6157C4.30962 31.3109 5.43676 31.3109 6.13196 30.6157L15.1492 21.5984"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M26.1548 10.8322C26.6552 10.5986 26.8716 10.0036 26.6381 9.50309C26.4045 9.00262 25.8095 8.78624 25.309 9.01979L26.1548 10.8322ZM20.8348 12.2113L20.4119 11.3051L20.8348 12.2113ZM14.6691 10.8322L19.5662 13.1174L20.4119 11.3051L15.5149 9.01979L14.6691 10.8322ZM21.2577 13.1174L26.1548 10.8322L25.309 9.01979L20.4119 11.3051L21.2577 13.1174ZM19.5662 13.1174C20.1023 13.3676 20.7216 13.3676 21.2577 13.1174L20.4119 11.3051L20.4119 11.3051L19.5662 13.1174Z"
                        fill={iconColor}
                    />
                    <path d="M20.412 19.5019V12.4086" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M15.092 9.92598L20.4119 7.44334L25.7319 9.92598V17.0192L20.4119 19.5019L15.092 17.0192V9.92598Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* news-large */}
            {icon === 'news-large' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.3045 42.285L27.9055 42.285C34.5329 42.285 39.9055 36.9124 39.9055 30.285L39.9055 5.76326L16.5558 5.76326C16.5558 7.07331 16.5558 8.6044 16.5558 10.2756M13.3045 42.285C15.0779 42.285 16.5558 40.7762 16.5558 39.3661C16.5558 35.6258 16.5558 19.7573 16.5558 10.2756M13.3045 42.285V42.285C11.4273 42.285 9.90552 40.7632 9.90552 38.886L9.90552 10.2756L16.5558 10.2756"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.6446 13.432V20.3334C21.6446 21.0985 22.0812 21.7966 22.7691 22.1315L28.2865 24.818"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M34.9283 13.432V20.3334C34.9283 21.0985 34.4918 21.7966 33.8038 22.1315L28.2865 24.818"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M34.9283 13.432L28.2865 16.7529L21.6447 13.432L28.2865 10.1111L34.9283 13.432Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28.2865 17.2272V24.3434"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.7751 29.2414H35.9925"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.7751 33.0349H35.9925"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.7751 36.8284H28.6012"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* money-grow-outline */}
            {icon === 'money-grow-medium-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M28.1445 23.4934C28.8218 22.0483 30.3776 21.1809 32.0122 21.337L32.9547 21.427C33.6073 21.4893 34.0036 22.1521 33.7332 22.729L33.3426 23.5623C32.6653 25.0074 31.1095 25.8748 29.4749 25.7188L28.5323 25.6288C27.8798 25.5665 27.4835 24.9036 27.7539 24.3267L28.1445 23.4934Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.8899 23.4934C20.2125 22.0483 18.6568 21.1809 17.0222 21.337L16.0796 21.427C15.4271 21.4893 15.0308 22.1521 15.3012 22.729L15.6918 23.5623C16.3691 25.0074 17.9249 25.8748 19.5595 25.7188L20.502 25.6288C21.1546 25.5665 21.5509 24.9036 21.2805 24.3267L20.8899 23.4934Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M24.5114 18.9376V28.5076" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M26.3003 9.45015C25.9498 9.31869 25.2151 9.18723 24.5003 9.20726M22.4003 14.2501C23.0608 14.5143 23.8377 14.604 24.5003 14.5192M24.5003 7.95015V9.20726M24.5003 9.20726C23.584 9.23292 22.7003 9.50753 22.7003 10.3502C22.7003 11.8502 26.0004 11.8501 26.0004 13.3501C26.0004 14.0217 25.3426 14.4114 24.5003 14.5192M24.5003 15.7501V14.5192"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <ellipse
                        cx="24.5002"
                        cy="11.8501"
                        rx="7.5"
                        ry="7.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.5114 43.781H28.3349C31.0721 43.781 33.0484 41.9451 34.0563 39.9136C35.0547 37.9011 35.2887 35.3397 34.1487 33.5015"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M24.5114 43.781H20.6879C17.9507 43.781 15.9744 41.9451 14.9665 39.9136C13.968 37.9011 13.7341 35.3397 14.874 33.5015"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17.002 33.5015H16.3981C15.1365 33.5015 14.1137 32.4788 14.1137 31.2172V31.2172C14.1137 29.9555 15.1365 28.9328 16.3981 28.9328H32.6247C33.8863 28.9328 34.909 29.9555 34.909 31.2172V31.2172C34.909 32.4788 33.8863 33.5015 32.6247 33.5015H32.0208"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {/* big-company */}
            {icon === 'big-company' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M37.0976 42.8883H19.258C17.6878 42.8864 16.1824 42.2618 15.072 41.1515C13.9617 40.0411 13.3371 38.5357 13.3352 36.9654V10.8836C13.3371 9.31331 13.9617 7.80789 15.072 6.69755C16.1824 5.5872 17.6878 4.96259 19.258 4.96071H37.0976C38.6678 4.96259 40.1732 5.5872 41.2836 6.69755C42.3939 7.80789 43.0185 9.31331 43.0204 10.8836V36.9654C43.0185 38.5357 42.3939 40.0411 41.2836 41.1515C40.1732 42.2618 38.6678 42.8864 37.0976 42.8883ZM19.258 6.71274C18.1575 6.71274 17.1021 7.14992 16.3239 7.92812C15.5457 8.70631 15.1085 9.76176 15.1085 10.8623V36.9654C15.1085 38.066 15.5457 39.1214 16.3239 39.8996C17.1021 40.6778 18.1575 41.115 19.258 41.115H37.0976C38.1981 41.115 39.2535 40.6778 40.0317 39.8996C40.8099 39.1214 41.2471 38.066 41.2471 36.9654V10.8836C41.2471 9.78304 40.8099 8.72759 40.0317 7.9494C39.2535 7.1712 38.1981 6.73402 37.0976 6.73402L19.258 6.71274Z"
                        fill={iconColor}
                    />
                    <path
                        d="M7.99408 42.8458C7.75892 42.8458 7.5334 42.7524 7.36712 42.5861C7.20084 42.4198 7.10742 42.1943 7.10742 41.9591V38.909C7.10742 38.6739 7.20084 38.4483 7.36712 38.2821C7.5334 38.1158 7.75892 38.0224 7.99408 38.0224C8.22923 38.0224 8.45476 38.1158 8.62104 38.2821C8.78732 38.4483 8.88073 38.6739 8.88073 38.909V41.9662C8.87886 42.2001 8.78462 42.4238 8.61855 42.5886C8.45247 42.7533 8.22801 42.8458 7.99408 42.8458Z"
                        fill={iconColor}
                    />
                    <path
                        d="M7.994 39.6467C6.27744 39.6467 5.03613 37.4265 5.03613 34.3764C5.03613 31.3263 6.27744 29.1061 7.994 29.1061C9.71057 29.1061 10.9235 31.3689 10.9235 34.3693C10.9235 37.3698 9.6822 39.6467 7.994 39.6467ZM7.994 30.8795C7.65353 30.8795 6.80944 32.1066 6.80944 34.3764C6.80944 36.6463 7.65353 37.8734 7.994 37.8734C8.33448 37.8734 9.17859 36.6463 9.17859 34.3764C9.17859 32.1066 8.34157 30.8724 7.994 30.8724V30.8795Z"
                        fill={iconColor}
                    />
                    <path
                        d="M21.5634 42.8883H6.25616C6.02101 42.8883 5.79546 42.7949 5.62918 42.6286C5.4629 42.4624 5.36951 42.2368 5.36951 42.0017C5.36951 41.7665 5.4629 41.541 5.62918 41.3747C5.79546 41.2084 6.02101 41.115 6.25616 41.115H21.5634C21.7985 41.115 22.0241 41.2084 22.1904 41.3747C22.3566 41.541 22.45 41.7665 22.45 42.0017C22.45 42.2368 22.3566 42.4624 22.1904 42.6286C22.0241 42.7949 21.7985 42.8883 21.5634 42.8883Z"
                        fill={iconColor}
                    />
                    <path
                        d="M34.3312 42.8883C34.0961 42.8883 33.8705 42.7949 33.7043 42.6286C33.538 42.4624 33.4446 42.2368 33.4446 42.0017V37.235C33.4446 37.2276 33.4431 37.2202 33.4403 37.2133C33.4374 37.2064 33.4332 37.2002 33.428 37.1949C33.4227 37.1896 33.4164 37.1855 33.4096 37.1826C33.4027 37.1797 33.3953 37.1783 33.3878 37.1783H22.982C22.967 37.1783 22.9526 37.1843 22.9419 37.1949C22.9313 37.2055 22.9253 37.22 22.9253 37.235V41.9946C22.9253 42.2298 22.8319 42.4553 22.6656 42.6216C22.4993 42.7878 22.2738 42.8813 22.0386 42.8813C21.8035 42.8813 21.578 42.7878 21.4117 42.6216C21.2454 42.4553 21.152 42.2298 21.152 41.9946V37.235C21.152 36.9947 21.1993 36.7567 21.2913 36.5347C21.3833 36.3127 21.5181 36.1109 21.688 35.941C21.8579 35.771 22.0597 35.6362 22.2817 35.5443C22.5038 35.4523 22.7417 35.405 22.982 35.405H33.402C33.6424 35.405 33.8803 35.4523 34.1023 35.5443C34.3244 35.6362 34.5261 35.771 34.6961 35.941C34.866 36.1109 35.0008 36.3127 35.0928 36.5347C35.1847 36.7567 35.2321 36.9947 35.2321 37.235V41.9946C35.2331 42.1128 35.2104 42.2301 35.1653 42.3394C35.1203 42.4487 35.0539 42.548 34.97 42.6312C34.886 42.7145 34.7862 42.7802 34.6766 42.8243C34.5669 42.8685 34.4495 42.8902 34.3312 42.8883Z"
                        fill={iconColor}
                    />
                    <path
                        d="M24.9256 24.6587H19.8965C19.6722 24.677 19.4465 24.6508 19.2325 24.5814C19.0185 24.5121 18.8203 24.4009 18.6494 24.2545C18.4786 24.1081 18.3385 23.9292 18.2372 23.7283C18.1359 23.5274 18.0754 23.3084 18.0593 23.084V19.4593C18.0754 19.2349 18.1359 19.0159 18.2372 18.8149C18.3385 18.614 18.4786 18.4352 18.6494 18.2887C18.8203 18.1423 19.0185 18.0312 19.2325 17.9618C19.4465 17.8925 19.6722 17.8662 19.8965 17.8846H24.9256C25.1498 17.8662 25.3755 17.8925 25.5896 17.9618C25.8036 18.0312 26.0018 18.1423 26.1726 18.2887C26.3435 18.4352 26.4836 18.614 26.5849 18.8149C26.6861 19.0159 26.7466 19.2349 26.7628 19.4593V23.091C26.7457 23.3149 26.6846 23.5331 26.583 23.7332C26.4813 23.9333 26.341 24.1113 26.1703 24.257C25.9995 24.4027 25.8016 24.5132 25.588 24.5821C25.3744 24.6511 25.1493 24.6771 24.9256 24.6587ZM19.8326 22.8924H24.9894V19.665H19.8326V22.8924Z"
                        fill={iconColor}
                    />
                    <path
                        d="M36.3244 24.6587H31.2953C31.071 24.677 30.8454 24.6508 30.6313 24.5814C30.4173 24.5121 30.2191 24.4009 30.0482 24.2545C29.8774 24.1081 29.7373 23.9292 29.636 23.7283C29.5347 23.5274 29.4743 23.3084 29.4581 23.084V19.4593C29.4743 19.2349 29.5347 19.0159 29.636 18.8149C29.7373 18.614 29.8774 18.4352 30.0482 18.2887C30.2191 18.1423 30.4173 18.0312 30.6313 17.9618C30.8454 17.8925 31.071 17.8662 31.2953 17.8846H36.3244C36.5486 17.8662 36.7743 17.8925 36.9884 17.9618C37.2024 18.0312 37.4006 18.1423 37.5714 18.2887C37.7423 18.4352 37.8824 18.614 37.9837 18.8149C38.0849 19.0159 38.1454 19.2349 38.1616 19.4593V23.091C38.1445 23.3149 38.0834 23.5331 37.9818 23.7332C37.8801 23.9333 37.7398 24.1113 37.5691 24.257C37.3983 24.4027 37.2004 24.5132 36.9868 24.5821C36.7732 24.6511 36.5481 24.6771 36.3244 24.6587ZM31.2243 22.8924H36.3811V19.665H31.2243V22.8924Z"
                        fill={iconColor}
                    />
                    <path
                        d="M24.9825 33.4188H19.9533C19.7291 33.4372 19.5034 33.411 19.2894 33.3416C19.0753 33.2723 18.8771 33.1611 18.7063 33.0147C18.5355 32.8683 18.3954 32.6894 18.2941 32.4885C18.1928 32.2876 18.1323 32.0686 18.1162 31.8441V28.2195C18.1323 27.9951 18.1928 27.7761 18.2941 27.5751C18.3954 27.3742 18.5355 27.1954 18.7063 27.0489C18.8771 26.9025 19.0753 26.7914 19.2894 26.722C19.5034 26.6527 19.7291 26.6264 19.9533 26.6448H24.9825C25.2067 26.6264 25.4324 26.6527 25.6465 26.722C25.8605 26.7914 26.0587 26.9025 26.2295 27.0489C26.4003 27.1954 26.5405 27.3742 26.6417 27.5751C26.743 27.7761 26.8035 27.9951 26.8196 28.2195V31.8512C26.8026 32.075 26.7415 32.2933 26.6398 32.4934C26.5381 32.6935 26.3979 32.8715 26.2271 33.0172C26.0564 33.1629 25.8585 33.2734 25.6449 33.3423C25.4313 33.4113 25.2062 33.4373 24.9825 33.4188ZM19.8895 31.6384H25.0463V28.4252H19.8895V31.6384Z"
                        fill={iconColor}
                    />
                    <path
                        d="M36.3812 33.4188H31.352C31.1278 33.4372 30.9021 33.411 30.6881 33.3416C30.474 33.2723 30.2758 33.1611 30.105 33.0147C29.9341 32.8683 29.794 32.6894 29.6927 32.4885C29.5915 32.2876 29.531 32.0686 29.5149 31.8441V28.2195C29.531 27.9951 29.5915 27.7761 29.6927 27.5751C29.794 27.3742 29.9341 27.1954 30.105 27.0489C30.2758 26.9025 30.474 26.7914 30.6881 26.722C30.9021 26.6527 31.1278 26.6264 31.352 26.6448H36.3812C36.6054 26.6264 36.8311 26.6527 37.0451 26.722C37.2592 26.7914 37.4573 26.9025 37.6282 27.0489C37.799 27.1954 37.9391 27.3742 38.0404 27.5751C38.1417 27.7761 38.2022 27.9951 38.2183 28.2195V31.8512C38.2013 32.075 38.1402 32.2933 38.0385 32.4934C37.9368 32.6935 37.7965 32.8715 37.6258 33.0172C37.4551 33.1629 37.2572 33.2734 37.0436 33.3423C36.83 33.4113 36.6049 33.4373 36.3812 33.4188ZM31.2882 31.6384H36.4592V28.4252H31.3024L31.2882 31.6384Z"
                        fill={iconColor}
                    />
                    <path
                        d="M25.0674 15.8985H20.0383C19.814 15.9169 19.5884 15.8907 19.3743 15.8213C19.1603 15.7519 18.9621 15.6408 18.7913 15.4944C18.6204 15.3479 18.4803 15.1691 18.379 14.9682C18.2777 14.7673 18.2173 14.5483 18.2012 14.3238V10.6992C18.2173 10.4747 18.2777 10.2557 18.379 10.0548C18.4803 9.85389 18.6204 9.67504 18.7913 9.52861C18.9621 9.38218 19.1603 9.27106 19.3743 9.2017C19.5884 9.13233 19.814 9.10608 20.0383 9.12447H25.0674C25.2917 9.10608 25.5174 9.13233 25.7314 9.2017C25.9455 9.27106 26.1436 9.38218 26.3145 9.52861C26.4853 9.67504 26.6254 9.85389 26.7267 10.0548C26.828 10.2557 26.8885 10.4747 26.9046 10.6992V14.3309C26.8876 14.5547 26.8265 14.773 26.7248 14.9731C26.6231 15.1732 26.4829 15.3512 26.3121 15.4969C26.1414 15.6426 25.9435 15.7531 25.7299 15.822C25.5163 15.8909 25.2911 15.9169 25.0674 15.8985ZM19.9745 14.1181H25.11V10.9049H19.9532L19.9745 14.1181Z"
                        fill={iconColor}
                    />
                    <path
                        d="M36.4593 15.8985H31.4301C31.2059 15.9169 30.9802 15.8907 30.7662 15.8213C30.5521 15.7519 30.354 15.6408 30.1831 15.4944C30.0123 15.3479 29.8722 15.1691 29.7709 14.9682C29.6696 14.7673 29.6091 14.5483 29.593 14.3238V10.6992C29.6091 10.4747 29.6696 10.2557 29.7709 10.0548C29.8722 9.85389 30.0123 9.67504 30.1831 9.52861C30.354 9.38218 30.5521 9.27106 30.7662 9.2017C30.9802 9.13233 31.2059 9.10608 31.4301 9.12447H36.4593C36.6835 9.10608 36.9092 9.13233 37.1233 9.2017C37.3373 9.27106 37.5355 9.38218 37.7063 9.52861C37.8771 9.67504 38.0173 9.85389 38.1185 10.0548C38.2198 10.2557 38.2803 10.4747 38.2964 10.6992V14.3309C38.2794 14.5547 38.2183 14.773 38.1166 14.9731C38.015 15.1732 37.8747 15.3512 37.704 15.4969C37.5332 15.6426 37.3353 15.7531 37.1217 15.822C36.9081 15.8909 36.683 15.9169 36.4593 15.8985ZM31.3663 14.1181H36.5231V10.9049H31.3663V14.1181Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* art */}
            {icon === 'art' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M31.792 37.7883C31.424 37.7884 31.0623 37.6931 30.7422 37.5116C30.4705 37.3572 30.2386 37.1415 30.065 36.8817C29.8913 36.6219 29.7808 36.3251 29.7421 36.015C29.7224 35.6876 29.7936 35.3611 29.9478 35.0716C30.0924 34.8017 30.1797 34.5049 30.2041 34.1997C30.2285 33.8946 30.1895 33.5876 30.0896 33.2983C28.9405 29.7516 29.4938 28.56 31.9906 26.4178C32.2571 26.1871 32.5778 26.0276 32.9226 25.9545C33.2675 25.8813 33.6253 25.8967 33.9625 25.9993L35.9699 26.6164C36.3066 26.7145 36.6131 26.896 36.8611 27.1439C37.109 27.3919 37.2905 27.6984 37.3886 28.0351C38.5164 32.0357 37.7007 34.7949 34.8988 36.476C34.1653 36.9099 33.4021 37.2915 32.6148 37.618C32.3546 37.7289 32.0749 37.7868 31.792 37.7883ZM31.5296 35.8802C31.554 35.9191 31.5883 35.9509 31.6289 35.9724C31.673 35.9943 31.7215 36.0057 31.7707 36.0057C31.8199 36.0057 31.8685 35.9943 31.9126 35.9724C32.6215 35.6782 33.3089 35.3345 33.9696 34.9439C36.0479 33.6955 36.5657 31.7094 35.6649 28.5032C35.6514 28.4525 35.6255 28.4059 35.5896 28.3675C35.5537 28.3291 35.5089 28.3002 35.4592 28.2833L33.4518 27.6733C33.4003 27.6585 33.3458 27.6573 33.2936 27.6697C33.2414 27.6821 33.1933 27.7078 33.1539 27.7442C31.1465 29.4679 30.8841 29.9431 31.7849 32.7095C32.1184 33.7013 32.047 34.7846 31.5863 35.7241L31.5296 35.8802Z"
                        fill={iconColor}
                    />
                    <path
                        d="M36.6012 28.8437C36.4448 28.8432 36.2912 28.8014 36.1561 28.7224C36.0211 28.6434 35.9094 28.53 35.8323 28.3939C35.7552 28.2577 35.7155 28.1036 35.7173 27.9471C35.719 27.7907 35.7621 27.6375 35.8422 27.5031C37.8283 24.1834 40.3748 16.5298 40.8075 11.2595C40.8075 11.0184 40.4812 10.7701 40.1336 10.6637C39.7861 10.5573 39.3605 10.5715 39.2399 10.7843C36.8282 15.0402 34.5229 22.4527 34.2746 26.5809C34.2624 26.8161 34.1573 27.0368 33.9823 27.1944C33.8074 27.352 33.577 27.4337 33.3419 27.4215C33.1067 27.4093 32.8861 27.3041 32.7284 27.1292C32.5708 26.9543 32.4891 26.7239 32.5013 26.4887C32.7425 22.0625 35.1045 14.4799 37.6652 9.91891C37.9731 9.42837 38.445 9.06294 38.997 8.88761C39.549 8.71227 40.1453 8.73839 40.6798 8.96132C41.2331 9.08271 41.7272 9.39229 42.0778 9.83726C42.4283 10.2822 42.6136 10.835 42.6021 11.4014C42.141 17.076 39.4882 24.9211 37.3957 28.4252C37.3125 28.5593 37.195 28.6689 37.0553 28.7424C36.9157 28.816 36.7589 28.851 36.6012 28.8437Z"
                        fill={iconColor}
                    />
                    <path
                        d="M24.0816 16.2745C23.1113 16.2724 22.1794 15.8953 21.4808 15.222C20.7822 14.5487 20.371 13.6314 20.3331 12.6619C20.2952 11.6924 20.6336 10.7458 21.2775 10.02C21.9214 9.29427 22.821 8.84556 23.7881 8.76775C24.7552 8.68993 25.715 8.98904 26.4667 9.60251C27.2183 10.216 27.7037 11.0963 27.8213 12.0594C27.9389 13.0225 27.6796 13.9937 27.0976 14.7701C26.5157 15.5464 25.6561 16.0676 24.6987 16.2248C24.4947 16.2583 24.2883 16.2749 24.0816 16.2745ZM24.0816 10.5289C23.973 10.5201 23.8638 10.5201 23.7553 10.5289C23.2444 10.571 22.7696 10.8091 22.4301 11.1932C22.0907 11.5773 21.9129 12.0778 21.934 12.59C21.955 13.1022 22.1733 13.5864 22.5432 13.9413C22.913 14.2962 23.4058 14.4944 23.9184 14.4944C24.431 14.4944 24.9238 14.2962 25.2936 13.9413C25.6635 13.5864 25.8818 13.1022 25.9028 12.59C25.9239 12.0778 25.7461 11.5773 25.4067 11.1932C25.0672 10.8091 24.5924 10.571 24.0816 10.5289Z"
                        fill={iconColor}
                    />
                    <path
                        d="M15.2009 22.1831C14.2631 22.1749 13.3623 21.8166 12.6752 21.1784C11.9881 20.5402 11.5643 19.6683 11.487 18.7337C11.4098 17.7991 11.6845 16.8694 12.2575 16.127C12.8304 15.3846 13.6601 14.8831 14.5838 14.721C15.071 14.6398 15.5694 14.6554 16.0505 14.7669C16.5317 14.8784 16.9862 15.0836 17.388 15.3708C17.7899 15.658 18.1312 16.0216 18.3924 16.4407C18.6537 16.8599 18.8298 17.3264 18.9106 17.8137C18.9991 18.3518 18.9695 18.9027 18.8238 19.4282C18.6781 19.9537 18.4198 20.4412 18.0669 20.8569C17.7139 21.2726 17.2748 21.6065 16.7799 21.8355C16.285 22.0645 15.7462 22.1831 15.2009 22.1831ZM15.2009 16.4376C15.0899 16.4284 14.9784 16.4284 14.8675 16.4376C14.4799 16.5019 14.12 16.6798 13.8335 16.9487C13.547 17.2176 13.3467 17.5654 13.2579 17.9482C13.1691 18.331 13.1959 18.7315 13.3348 19.099C13.4737 19.4666 13.7185 19.7847 14.0383 20.0131C14.358 20.2414 14.7383 20.3699 15.131 20.3821C15.5238 20.3942 15.9113 20.2897 16.2446 20.0815C16.5779 19.8734 16.842 19.5711 17.0034 19.2129C17.1648 18.8546 17.2164 18.4566 17.1515 18.069C17.0745 17.6067 16.8365 17.1864 16.4795 16.8827C16.1225 16.5789 15.6696 16.4112 15.2009 16.4092V16.4376Z"
                        fill={iconColor}
                    />
                    <path
                        d="M13.9029 33.0358C13.1857 33.0356 12.4837 32.8302 11.8795 32.444C11.2752 32.0578 10.7941 31.5068 10.4928 30.8561C10.1914 30.2053 10.0825 29.482 10.1789 28.7714C10.2752 28.0608 10.5727 27.3925 11.0364 26.8455C11.5001 26.2985 12.1106 25.8955 12.7958 25.6841C13.481 25.4726 14.2124 25.4616 14.9037 25.6523C15.595 25.8429 16.2174 26.2274 16.6974 26.7601C17.1773 27.2929 17.4949 27.9519 17.6126 28.6593C17.7023 29.1979 17.6735 29.7496 17.5283 30.2759C17.3831 30.8023 17.125 31.2907 16.772 31.7073C16.4189 32.1238 15.9794 32.4584 15.4839 32.6878C14.9884 32.9173 14.4489 33.036 13.9029 33.0358ZM13.9029 27.2903C13.7919 27.2811 13.6804 27.2811 13.5695 27.2903C13.1818 27.3546 12.822 27.5325 12.5355 27.8014C12.249 28.0703 12.0487 28.4181 11.9599 28.8009C11.8711 29.1836 11.8979 29.5841 12.0368 29.9517C12.1757 30.3193 12.4205 30.6374 12.7402 30.8658C13.06 31.0941 13.4403 31.2226 13.833 31.2347C14.2258 31.2469 14.6133 31.1424 14.9466 30.9342C15.2799 30.7261 15.5439 30.4238 15.7054 30.0656C15.8668 29.7073 15.9184 29.3093 15.8535 28.9217C15.7765 28.4594 15.5385 28.0391 15.1815 27.7354C14.8245 27.4316 14.3716 27.2639 13.9029 27.2619V27.2903Z"
                        fill={iconColor}
                    />
                    <path
                        d="M22.4574 39.7602C21.4872 39.7581 20.5553 39.381 19.8567 38.7077C19.1581 38.0344 18.7468 37.1171 18.7089 36.1476C18.671 35.1781 19.0094 34.2315 19.6534 33.5058C20.2973 32.78 21.1969 32.3313 22.164 32.2535C23.1311 32.1757 24.0908 32.4748 24.8425 33.0882C25.5942 33.7017 26.0796 34.582 26.1972 35.5451C26.3148 36.5082 26.0555 37.4795 25.4735 38.2558C24.8915 39.0321 24.0319 39.5534 23.0745 39.7105C22.8705 39.744 22.6641 39.7606 22.4574 39.7602ZM22.4574 34.0147C22.0504 34.0163 21.6537 34.143 21.321 34.3776C20.9883 34.6122 20.7358 34.9433 20.5975 35.3261C20.4592 35.709 20.4419 36.1251 20.548 36.5181C20.654 36.9111 20.8782 37.262 21.1903 37.5234C21.5023 37.7847 21.8872 37.9439 22.2927 37.9793C22.6982 38.0148 23.1048 37.9247 23.4574 37.7215C23.8101 37.5182 24.0917 37.2114 24.2643 36.8428C24.4369 36.4741 24.492 36.0613 24.4222 35.6603C24.3405 35.2006 24.0995 34.7845 23.7415 34.4848C23.3835 34.1852 22.9314 34.0212 22.4645 34.0218L22.4574 34.0147Z"
                        fill={iconColor}
                    />
                    <path
                        d="M25.1882 44.6758C20.0405 44.6763 15.0841 42.7247 11.3188 39.2144C7.55352 35.7042 5.25953 30.8967 4.89955 25.7616C4.53957 20.6265 6.14039 15.5459 9.37911 11.5447C12.6178 7.54353 17.2534 4.91944 22.3509 4.20176C26.0323 3.71232 29.2171 4.91108 31.0827 7.54267C32.9482 10.1743 33.1326 13.7564 31.487 17.0618C31.1182 17.6854 30.8932 18.3833 30.8281 19.1048C30.7631 19.8263 30.8597 20.5532 31.111 21.2326C31.3841 21.7781 31.7787 22.2535 32.2645 22.6225C32.7502 22.9914 33.3142 23.2439 33.9129 23.3606C34.1326 23.426 34.3185 23.5739 34.4315 23.7734C34.5445 23.9729 34.5758 24.2084 34.5189 24.4305C34.462 24.6526 34.3213 24.844 34.1263 24.9646C33.9313 25.0852 33.6972 25.1255 33.4731 25.0772C32.6204 24.895 31.8201 24.5222 31.1322 23.9866C30.4442 23.4509 29.8865 22.7665 29.5009 21.9845C29.1401 21.0685 28.9891 20.0833 29.0591 19.1013C29.1291 18.1194 29.4182 17.1655 29.9052 16.3099C31.2529 13.6003 31.1536 10.7275 29.6427 8.61375C28.1319 6.49997 25.5925 5.59203 22.5849 5.99635C19.5413 6.42707 16.6523 7.60689 14.1773 9.42988C11.7022 11.2529 9.71863 13.662 8.40458 16.4409C7.09053 19.2198 6.48715 22.2816 6.64861 25.3513C6.81007 28.421 7.73132 31.4025 9.32965 34.0283C10.928 36.654 13.1533 38.8417 15.806 40.395C18.4586 41.9483 21.4555 42.8185 24.5275 42.9276C27.5995 43.0366 30.6505 42.3811 33.4066 41.0198C36.1627 39.6585 38.5376 37.6341 40.3181 35.1283C40.9769 34.2602 41.418 33.2468 41.6043 32.1731C41.7907 31.0993 41.7169 29.9965 41.3891 28.9572C41.1155 28.1595 40.6545 27.4391 40.0448 26.8565C39.435 26.2739 38.6944 25.8462 37.8851 25.6092C37.6721 25.5318 37.4969 25.3758 37.3953 25.1733C37.2937 24.9708 37.2735 24.737 37.3389 24.5201C37.4042 24.3031 37.5502 24.1194 37.7467 24.0067C37.9433 23.894 38.1755 23.8607 38.3958 23.9139C39.4737 24.2305 40.46 24.8008 41.272 25.5771C42.0841 26.3534 42.6983 27.313 43.0631 28.3755C43.4793 29.6755 43.5787 31.0562 43.3529 32.4024C43.1271 33.7486 42.5827 35.0212 41.7651 36.1143C39.895 38.7701 37.4114 40.9352 34.5254 42.4258C31.6395 43.9163 28.4363 44.6882 25.1882 44.6758Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* attention */}
            {icon === 'attention' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M25.7622 17.5557L25.7622 24.2715"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M25.7622 27.5266L25.7622 27.5557"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.7446 22.4726C16.7446 27.6007 20.9018 31.7578 26.0299 31.7578C31.1579 31.7578 35.3151 27.6007 35.3151 22.4726C35.3151 17.3445 31.1579 13.1874 26.0299 13.1874C20.9018 13.1874 16.7446 17.3445 16.7446 22.4726Z"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M33.8102 28.0809L42.8274 37.0982C43.5226 37.7934 43.5226 38.9205 42.8274 39.6157V39.6157C42.1322 40.3109 41.0051 40.3109 40.3099 39.6157L31.2926 30.5984"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                    <path
                        d="M29.3887 9.71166V8.55566C29.3887 8.00338 28.941 7.55566 28.3887 7.55566H5.38867C4.83639 7.55566 4.38867 8.00338 4.38867 8.55566V39.5557C4.38867 40.1079 4.83639 40.5557 5.38867 40.5557H28.3887C28.941 40.5557 29.3887 40.1079 29.3887 39.5557V35.7309"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.38867 13.5557H15.3887"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.38867 18.5557H12.3887"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.38867 23.5557H12.3887"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.38867 28.5557H13.3887"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.38867 33.5557H18.3887"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* your-money */}
            {icon === 'your-money' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M8.82141 33.348C12.0809 31.4744 12.418 31.4744 14.6054 31.4744C18.4081 31.4744 18.4689 32.7502 20.6562 32.7502C22.8436 32.7502 22.858 32.7502 25.5922 32.7502C28.8571 32.7502 28.8571 37.0952 25.5922 37.0952C24.3834 37.0952 21.7643 37.0952 21.2175 37.0952"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 43.5501L13.0714 40.7158L21.2424 43.279C21.8059 43.4558 22.4091 43.4623 22.9764 43.2977L31.1073 40.9383C31.6098 40.7925 32.0655 40.5177 32.429 40.1414L41 31.268C40.4726 30.4807 38.6793 29.4729 35.7257 31.7404C32.772 34.0078 29.2252 35.7203 27.6429 36.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26.9178 12.8992C27.2861 13.3108 27.9183 13.346 28.3299 12.9777C28.7415 12.6094 28.7766 11.9772 28.4083 11.5657L26.9178 12.8992ZM24.7157 16.3501L24.3292 17.2724L24.7157 16.3501ZM21.6739 19.2896C21.2506 18.9348 20.6199 18.9903 20.2651 19.4136C19.9103 19.8368 19.9658 20.4676 20.3891 20.8224L21.6739 19.2896ZM24.3473 21.4252L24.3738 20.4255L24.3473 21.4252ZM23.3473 23.3501C23.3473 23.9024 23.795 24.3501 24.3473 24.3501C24.8996 24.3501 25.3473 23.9024 25.3473 23.3501H23.3473ZM25.7157 9.3501C25.7157 8.79781 25.268 8.3501 24.7157 8.3501C24.1634 8.3501 23.7157 8.79781 23.7157 9.3501H25.7157ZM26.6858 20.6218L25.9888 19.9047L26.6858 20.6218ZM26.0099 17.022L26.5692 16.193L26.0099 17.022ZM28.4083 11.5657C27.9011 10.9988 26.5423 9.99716 24.7157 9.99716V11.9972C25.8365 11.9972 26.6882 12.6425 26.9178 12.8992L28.4083 11.5657ZM24.7157 9.99716C22.4074 9.99716 20.7683 11.5979 20.7683 13.4677H22.7683C22.7683 12.867 23.3398 11.9972 24.7157 11.9972V9.99716ZM20.7683 13.4677C20.7683 14.4291 21.2141 15.2066 21.8713 15.816C22.5048 16.4032 23.3674 16.8693 24.3292 17.2724L25.1022 15.4278C24.2219 15.0589 23.6109 14.7014 23.2311 14.3493C22.8752 14.0193 22.7683 13.7417 22.7683 13.4677H20.7683ZM24.3738 20.4255C23.5952 20.4049 22.6358 20.0959 21.6739 19.2896L20.3891 20.8224C21.6659 21.8927 23.0516 22.3912 24.3208 22.4248L24.3738 20.4255ZM23.3473 21.4252V23.3501H25.3473V21.4252H23.3473ZM25.7157 10.9972V9.3501H23.7157V10.9972H25.7157ZM25.9888 19.9047C25.6848 20.2001 25.1264 20.4455 24.3738 20.4255L24.3208 22.4248C25.5088 22.4563 26.6239 22.0764 27.3827 21.339L25.9888 19.9047ZM24.3292 17.2724C24.7763 17.4598 25.1503 17.6483 25.4506 17.8509L26.5692 16.193C26.1181 15.8887 25.6125 15.6417 25.1022 15.4278L24.3292 17.2724ZM25.4506 17.8509C26.5431 18.588 26.3843 19.5204 25.9888 19.9047L27.3827 21.339C28.8526 19.9104 28.5152 17.506 26.5692 16.193L25.4506 17.8509Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="24.0315"
                        cy="16.3501"
                        rx="12"
                        ry="12"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* site */}
            {icon === 'site' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <rect x="3" y="8.3501" width="42.2241" height="31" rx="4" stroke={iconColor} strokeWidth="2" />
                    <path d="M3 16.3673H45.2241" stroke={iconColor} strokeWidth="2" />
                    <path d="M37.2069 16.3673L37.207 8.3501" stroke={iconColor} strokeWidth="2" />
                    <circle cx="41" cy="12.3501" r="1" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M8 25.1367L9.81956 30.9593L11.6391 26.0445L13.4587 30.9593L15.2782 25.1367"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.1851 25.1367L20.1259 30.9593L22.0668 26.0445L24.0077 30.9593L25.9485 25.1367"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28.8558 25.1367L30.6754 30.9593L32.495 26.0445L34.3145 30.9593L36.1341 25.1367"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="0.966166"
                        cy="0.966166"
                        r="0.966166"
                        transform="matrix(1 0 0 -1 38.0676 31.2824)"
                        stroke={iconColor}
                        strokeWidth="2"
                    />
                </svg>
            )}

            {/* equity */}
            {icon === 'equity' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M11.2863 28.1583C11.6545 28.5699 12.2867 28.605 12.6983 28.2368C13.1099 27.8685 13.145 27.2363 12.7767 26.8247L11.2863 28.1583ZM10.4784 29.6614L10.0918 30.5836L10.4784 29.6614ZM9.17933 30.8479C8.75607 30.4931 8.12534 30.5486 7.77056 30.9718C7.41577 31.3951 7.47127 32.0258 7.89453 32.3806L9.17933 30.8479ZM10.2842 32.3357L10.3107 31.3361L10.2842 32.3357ZM9.28421 33.3501C9.28421 33.9024 9.73193 34.3501 10.2842 34.3501C10.8365 34.3501 11.2842 33.9024 11.2842 33.3501H9.28421ZM11.4784 25.9727C11.4784 25.4204 11.0306 24.9727 10.4784 24.9727C9.92607 24.9727 9.47836 25.4204 9.47836 25.9727H11.4784ZM11.5165 31.9124L10.8196 31.1953L11.5165 31.9124ZM11.1603 30.0154L11.7197 29.1865L11.1603 30.0154ZM12.7767 26.8247C12.4439 26.4527 11.6078 25.8406 10.4784 25.8406V27.8406C10.6789 27.8406 10.864 27.8968 11.0204 27.9762C11.098 28.0157 11.1631 28.0581 11.2125 28.0956C11.2646 28.135 11.2878 28.1601 11.2863 28.1583L12.7767 26.8247ZM10.4784 25.8406C9.04143 25.8406 7.92521 26.8569 7.92521 28.1425H9.92521C9.92521 28.1261 9.97386 27.8406 10.4784 27.8406V25.8406ZM7.92521 28.1425C7.92521 28.8117 8.2403 29.3396 8.65788 29.7268C9.05166 30.0919 9.56572 30.3632 10.0918 30.5836L10.8649 28.7391C10.4203 28.5528 10.1578 28.3901 10.0177 28.2602C9.9537 28.2009 9.9329 28.1643 9.92781 28.154C9.92518 28.1487 9.92521 28.1493 9.92521 28.1425H7.92521ZM10.3107 31.3361C10.0165 31.3283 9.61175 31.2103 9.17933 30.8479L7.89453 32.3806C8.64186 33.007 9.47288 33.3146 10.2577 33.3354L10.3107 31.3361ZM9.28421 32.3357V33.3501H11.2842V32.3357H9.28421ZM11.4784 26.8406V25.9727H9.47836V26.8406H11.4784ZM10.8196 31.1953C10.7669 31.2464 10.6044 31.3439 10.3107 31.3361L10.2577 33.3354C10.9867 33.3547 11.706 33.1227 12.2134 32.6295L10.8196 31.1953ZM10.0918 30.5836C10.3125 30.6762 10.4784 30.7617 10.601 30.8444L11.7197 29.1865C11.4463 29.002 11.1487 28.858 10.8649 28.7391L10.0918 30.5836ZM10.601 30.8444C10.795 30.9753 10.8279 31.0939 10.8333 31.1311C10.8395 31.1739 10.8261 31.1889 10.8196 31.1953L12.2134 32.6295C13.2422 31.6298 12.947 30.0145 11.7197 29.1865L10.601 30.8444Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="10.4685"
                        cy="29.8501"
                        rx="7.5"
                        ry="7.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.96851 30.3501V30.3501C2.96851 28.7016 3.31302 27.0714 3.97994 25.5638L10.7104 10.3501L17.0107 25.5408C17.643 27.0654 17.9685 28.6996 17.9685 30.3501V30.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M40.2862 22.1583C40.6545 22.5699 41.2867 22.605 41.6982 22.2368C42.1098 21.8685 42.1449 21.2363 41.7767 20.8247L40.2862 22.1583ZM39.4783 23.6614L39.0918 24.5836L39.4783 23.6614ZM38.1793 24.8479C37.756 24.4931 37.1253 24.5486 36.7705 24.9718C36.4157 25.3951 36.4712 26.0258 36.8945 26.3806L38.1793 24.8479ZM39.2842 26.3357L39.3106 25.3361L39.2842 26.3357ZM38.2842 27.3501C38.2842 27.9024 38.7319 28.3501 39.2842 28.3501C39.8364 28.3501 40.2842 27.9024 40.2842 27.3501H38.2842ZM40.4783 19.9727C40.4783 19.4204 40.0306 18.9727 39.4783 18.9727C38.926 18.9727 38.4783 19.4204 38.4783 19.9727H40.4783ZM40.5164 25.9124L39.8195 25.1953L40.5164 25.9124ZM40.1603 24.0154L40.7196 23.1865L40.1603 24.0154ZM41.7767 20.8247C41.4438 20.4527 40.6078 19.8406 39.4783 19.8406V21.8406C39.6789 21.8406 39.8639 21.8968 40.0204 21.9762C40.0979 22.0157 40.163 22.0581 40.2124 22.0956C40.2646 22.135 40.2878 22.1601 40.2862 22.1583L41.7767 20.8247ZM39.4783 19.8406C38.0414 19.8406 36.9252 20.8569 36.9252 22.1425H38.9252C38.9252 22.1261 38.9738 21.8406 39.4783 21.8406V19.8406ZM36.9252 22.1425C36.9252 22.8117 37.2402 23.3396 37.6578 23.7268C38.0516 24.0919 38.5657 24.3632 39.0918 24.5836L39.8648 22.7391C39.4202 22.5528 39.1577 22.3901 39.0176 22.2602C38.9536 22.2009 38.9328 22.1643 38.9278 22.154C38.9251 22.1487 38.9252 22.1493 38.9252 22.1425H36.9252ZM39.3106 25.3361C39.0164 25.3283 38.6117 25.2103 38.1793 24.8479L36.8945 26.3806C37.6418 27.007 38.4728 27.3146 39.2577 27.3354L39.3106 25.3361ZM38.2842 26.3357V27.3501H40.2842V26.3357H38.2842ZM40.4783 20.8406V19.9727H38.4783V20.8406H40.4783ZM39.8195 25.1953C39.7669 25.2464 39.6043 25.3439 39.3106 25.3361L39.2577 27.3354C39.9866 27.3547 40.7059 27.1227 41.2134 26.6295L39.8195 25.1953ZM39.0918 24.5836C39.3125 24.6762 39.4784 24.7617 39.601 24.8444L40.7196 23.1865C40.4462 23.002 40.1486 22.858 39.8648 22.7391L39.0918 24.5836ZM39.601 24.8444C39.795 24.9753 39.8279 25.0939 39.8333 25.1311C39.8395 25.1739 39.826 25.1889 39.8195 25.1953L41.2134 26.6295C42.2421 25.6298 41.9469 24.0145 40.7196 23.1865L39.601 24.8444Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="39.4685"
                        cy="23.8501"
                        rx="7.5"
                        ry="7.5"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31.9685 24.3501V24.3501C31.9685 22.7016 32.313 21.0714 32.9799 19.5638L39.7104 4.3501L46.0107 19.5408C46.643 21.0654 46.9685 22.6996 46.9685 24.3501V24.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.9685 10.3501L21.9685 7.8501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.9685 6.8501L39.4685 4.3501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.9685 10.3501V37.8501"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="24.9685"
                        cy="7.3501"
                        r="3"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.9685 41.3501L23.6352 38.3501H26.3018L31.9685 41.3501V43.3501H17.9685V41.3501Z"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* profit */}
            {icon === 'profit' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M26.1075 14.664C26.4758 15.0756 27.108 15.1107 27.5196 14.7424C27.9311 14.3742 27.9663 13.742 27.598 13.3304L26.1075 14.664ZM25.1686 16.3501L24.782 17.2724L25.1686 16.3501ZM23.7057 17.7014C23.2824 17.3466 22.6517 17.4021 22.2969 17.8254C21.9421 18.2486 21.9976 18.8793 22.4209 19.2341L23.7057 17.7014ZM24.958 19.2502L24.9845 18.2505L24.958 19.2502ZM23.958 20.3501C23.958 20.9024 24.4057 21.3501 24.958 21.3501C25.5103 21.3501 25.958 20.9024 25.958 20.3501H23.958ZM26.1686 12.3501C26.1686 11.7978 25.7208 11.3501 25.1686 11.3501C24.6163 11.3501 24.1686 11.7978 24.1686 12.3501H26.1686ZM26.2943 18.7911L25.5974 18.074L26.2943 18.7911ZM25.9081 16.734L26.4674 15.9051L25.9081 16.734ZM27.598 13.3304C27.2487 12.94 26.3636 12.2913 25.1686 12.2913V14.2913C25.4019 14.2913 25.6156 14.3566 25.7946 14.4475C25.8834 14.4927 25.9582 14.5414 26.0156 14.5849C26.0441 14.6064 26.0666 14.6254 26.0831 14.6404C26.1002 14.6559 26.1078 14.6643 26.1075 14.664L27.598 13.3304ZM25.1686 12.2913C23.6497 12.2913 22.4843 13.3626 22.4843 14.7031H24.4843C24.4843 14.6318 24.5821 14.2913 25.1686 14.2913V12.2913ZM22.4843 14.7031C22.4843 15.3997 22.8117 15.9511 23.2518 16.3592C23.6681 16.7451 24.215 17.0347 24.782 17.2724L25.5551 15.4278C25.0695 15.2243 24.7742 15.0433 24.6116 14.8925C24.4728 14.7638 24.4843 14.7123 24.4843 14.7031H22.4843ZM24.9845 18.2505C24.6448 18.2415 24.1879 18.1056 23.7057 17.7014L22.4209 19.2341C23.218 19.9023 24.1012 20.2278 24.9316 20.2498L24.9845 18.2505ZM23.958 19.2502V20.3501H25.958V19.2502H23.958ZM26.1686 13.2913V12.3501H24.1686V13.2913H26.1686ZM25.5974 18.074C25.5211 18.1481 25.3213 18.2594 24.9845 18.2505L24.9316 20.2498C25.7037 20.2703 26.4602 20.0244 26.9913 19.5082L25.5974 18.074ZM24.782 17.2724C25.024 17.3738 25.2095 17.469 25.3488 17.563L26.4674 15.9051C26.1773 15.7094 25.8602 15.5557 25.5551 15.4278L24.782 17.2724ZM25.3488 17.563C25.5766 17.7167 25.6273 17.8652 25.637 17.9317C25.6475 18.0038 25.6246 18.0475 25.5974 18.074L26.9913 19.5082C28.0614 18.4682 27.7623 16.7787 26.4674 15.9051L25.3488 17.563Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="24.9685"
                        cy="16.3501"
                        rx="8"
                        ry="8"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <ellipse
                        cx="24.9685"
                        cy="16.3501"
                        rx="10.6667"
                        ry="10.6667"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.9685 31.3501H20.9685C22.3018 31.3501 22.9685 32.3501 22.9685 33.0168H28.9695C30.2582 33.0168 31.3018 34.0614 31.3018 35.3501C31.3018 36.6388 30.2572 37.6834 28.9685 37.6834H22.9685"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="6.96851"
                        y="28.6834"
                        width="8"
                        height="15.3333"
                        rx="3"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M30.9685 36.6834L40.0569 33.7431C41.2915 33.3436 42.6141 34.0317 42.9957 35.2719C43.3556 36.4416 42.7475 37.6901 41.6046 38.1278L31.2922 42.0772C29.1105 42.9128 26.7556 43.1946 24.4383 42.8975L14.9685 41.6834"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* coins */}
            {icon === 'coins' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 48 49" fill="none" xmlns={xmlns}>
                    <path
                        d="M37.5109 32.2271C37.8791 32.6387 38.5113 32.6738 38.9229 32.3055C39.3345 31.9373 39.3696 31.3051 39.0013 30.8935L37.5109 32.2271ZM36.4076 34.1428L36.021 35.065L36.4076 34.1428ZM34.7393 35.7007C34.3161 35.3459 33.6853 35.4014 33.3306 35.8246C32.9758 36.2479 33.0313 36.8786 33.4545 37.2334L34.7393 35.7007ZM36.1765 37.3258L36.203 36.3261L36.1765 37.3258ZM35.1765 38.533C35.1765 39.0853 35.6242 39.533 36.1765 39.533C36.7288 39.533 37.1765 39.0853 37.1765 38.533H35.1765ZM37.4076 29.7525C37.4076 29.2002 36.9599 28.7525 36.4076 28.7525C35.8553 28.7525 35.4076 29.2002 35.4076 29.7525H37.4076ZM37.6432 36.8219L36.9462 36.1048L37.6432 36.8219ZM37.2193 34.5642L37.7786 33.7352V33.7352L37.2193 34.5642ZM39.0013 30.8935C38.6315 30.4802 37.6847 29.7855 36.4076 29.7855V31.7855C36.682 31.7855 36.9317 31.8624 37.1389 31.9676C37.3552 32.0775 37.4846 32.1977 37.5109 32.2271L39.0013 30.8935ZM36.4076 29.7855C34.786 29.7855 33.5591 30.9257 33.5591 32.335H35.5591C35.5591 32.1949 35.7185 31.7855 36.4076 31.7855V29.7855ZM33.5591 32.335C33.5591 33.0661 33.9018 33.6469 34.3702 34.0812C34.8147 34.4933 35.4026 34.8059 36.021 35.065L36.7941 33.2205C36.2572 32.9955 35.9208 32.7915 35.73 32.6145C35.5629 32.4596 35.5591 32.3787 35.5591 32.335H33.5591ZM36.203 36.3261C35.8062 36.3156 35.2839 36.1572 34.7393 35.7007L33.4545 37.2334C34.314 37.9539 35.2626 38.3019 36.15 38.3254L36.203 36.3261ZM35.1765 37.3258V38.533H37.1765V37.3258H35.1765ZM37.4076 30.7855V29.7525H35.4076V30.7855H37.4076ZM36.9462 36.1048C36.8403 36.2077 36.5939 36.3365 36.203 36.3261L36.15 38.3254C36.9762 38.3473 37.7794 38.084 38.3401 37.539L36.9462 36.1048ZM36.021 35.065C36.2897 35.1777 36.4997 35.285 36.66 35.3931L37.7786 33.7352C37.4676 33.5254 37.1259 33.3595 36.7941 33.2205L36.021 35.065ZM36.66 35.3931C36.9301 35.5754 37.0033 35.7615 37.0183 35.8647C37.0341 35.9734 36.9995 36.053 36.9462 36.1048L38.3401 37.539C39.4623 36.4484 39.1581 34.666 37.7786 33.7352L36.66 35.3931Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="36.188"
                        cy="34.1428"
                        rx="8.78049"
                        ry="8.78049"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.0718 32.2271C15.4401 32.6387 16.0723 32.6738 16.4839 32.3055C16.8955 31.9373 16.9306 31.3051 16.5623 30.8935L15.0718 32.2271ZM13.9686 34.1428L13.582 35.065L13.9686 34.1428ZM12.3003 35.7007C11.877 35.3459 11.2463 35.4014 10.8915 35.8246C10.5367 36.2479 10.5922 36.8786 11.0155 37.2334L12.3003 35.7007ZM13.7375 37.3258L13.764 36.3261L13.7375 37.3258ZM12.7375 38.533C12.7375 39.0853 13.1852 39.533 13.7375 39.533C14.2898 39.533 14.7375 39.0853 14.7375 38.533H12.7375ZM14.9686 29.7525C14.9686 29.2002 14.5208 28.7525 13.9686 28.7525C13.4163 28.7525 12.9686 29.2002 12.9686 29.7525H14.9686ZM15.2041 36.8219L14.5072 36.1048L15.2041 36.8219ZM14.7802 34.5642L15.3395 33.7352V33.7352L14.7802 34.5642ZM16.5623 30.8935C16.1925 30.4802 15.2457 29.7855 13.9686 29.7855V31.7855C14.243 31.7855 14.4927 31.8624 14.6998 31.9676C14.9162 32.0775 15.0456 32.1977 15.0718 32.2271L16.5623 30.8935ZM13.9686 29.7855C12.347 29.7855 11.12 30.9257 11.12 32.335H13.12C13.12 32.1949 13.2794 31.7855 13.9686 31.7855V29.7855ZM11.12 32.335C11.12 33.0661 11.4628 33.6469 11.9312 34.0812C12.3757 34.4933 12.9636 34.8059 13.582 35.065L14.3551 33.2205C13.8182 32.9955 13.4818 32.7915 13.2909 32.6145C13.1238 32.4596 13.12 32.3787 13.12 32.335H11.12ZM13.764 36.3261C13.3672 36.3156 12.8449 36.1572 12.3003 35.7007L11.0155 37.2334C11.875 37.9539 12.8235 38.3019 13.711 38.3254L13.764 36.3261ZM12.7375 37.3258V38.533H14.7375V37.3258H12.7375ZM14.9686 30.7855V29.7525H12.9686V30.7855H14.9686ZM14.5072 36.1048C14.4013 36.2077 14.1549 36.3365 13.764 36.3261L13.711 38.3254C14.5372 38.3473 15.3404 38.084 15.9011 37.539L14.5072 36.1048ZM13.582 35.065C13.8507 35.1777 14.0607 35.285 14.2209 35.3931L15.3395 33.7352C15.0285 33.5254 14.6868 33.3595 14.3551 33.2205L13.582 35.065ZM14.2209 35.3931C14.4911 35.5754 14.5642 35.7615 14.5792 35.8647C14.595 35.9734 14.5605 36.053 14.5072 36.1048L15.9011 37.539C17.0233 36.4484 16.7191 34.666 15.3395 33.7352L14.2209 35.3931Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="13.749"
                        cy="34.1428"
                        rx="8.78049"
                        ry="8.78049"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26.0718 12.7149C26.4401 13.1265 27.0723 13.1616 27.4839 12.7933C27.8955 12.4251 27.9306 11.7929 27.5623 11.3813L26.0718 12.7149ZM24.9686 14.6306L24.582 15.5529L24.9686 14.6306ZM23.3003 16.1885C22.877 15.8337 22.2463 15.8892 21.8915 16.3124C21.5367 16.7357 21.5922 17.3664 22.0155 17.7212L23.3003 16.1885ZM24.7375 17.8136L24.764 16.8139L24.7375 17.8136ZM23.7375 19.0208C23.7375 19.5731 24.1852 20.0208 24.7375 20.0208C25.2898 20.0208 25.7375 19.5731 25.7375 19.0208H23.7375ZM25.9686 10.2403C25.9686 9.68806 25.5208 9.24034 24.9686 9.24034C24.4163 9.24034 23.9686 9.68806 23.9686 10.2403H25.9686ZM26.2041 17.3097L25.5072 16.5926L26.2041 17.3097ZM25.7802 15.052L26.3395 14.223V14.223L25.7802 15.052ZM27.5623 11.3813C27.1925 10.968 26.2457 10.2733 24.9686 10.2733V12.2733C25.243 12.2733 25.4927 12.3502 25.6998 12.4554C25.9162 12.5653 26.0456 12.6855 26.0718 12.7149L27.5623 11.3813ZM24.9686 10.2733C23.347 10.2733 22.12 11.4135 22.12 12.8228H24.12C24.12 12.6827 24.2794 12.2733 24.9686 12.2733V10.2733ZM22.12 12.8228C22.12 13.5539 22.4628 14.1348 22.9312 14.569C23.3757 14.9811 23.9636 15.2937 24.582 15.5529L25.3551 13.7083C24.8182 13.4833 24.4818 13.2793 24.2909 13.1023C24.1238 12.9474 24.12 12.8665 24.12 12.8228H22.12ZM24.764 16.8139C24.3672 16.8034 23.8449 16.645 23.3003 16.1885L22.0155 17.7212C22.875 18.4417 23.8235 18.7897 24.711 18.8132L24.764 16.8139ZM23.7375 17.8136V19.0208H25.7375V17.8136H23.7375ZM25.9686 11.2733V10.2403H23.9686V11.2733H25.9686ZM25.5072 16.5926C25.4013 16.6955 25.1549 16.8243 24.764 16.8139L24.711 18.8132C25.5372 18.8351 26.3404 18.5718 26.9011 18.0268L25.5072 16.5926ZM24.582 15.5529C24.8507 15.6655 25.0607 15.7728 25.2209 15.8809L26.3395 14.223C26.0285 14.0132 25.6868 13.8474 25.3551 13.7083L24.582 15.5529ZM25.2209 15.8809C25.4911 16.0632 25.5642 16.2493 25.5792 16.3525C25.595 16.4613 25.5605 16.5408 25.5072 16.5926L26.9011 18.0268C28.0233 16.9362 27.7191 15.1538 26.3395 14.223L25.2209 15.8809Z"
                        fill={iconColor}
                    />
                    <ellipse
                        cx="24.749"
                        cy="14.6306"
                        rx="8.78049"
                        ry="8.78049"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* linkedin-box */}
            {icon === 'linkedin-box' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        d="M15.5004 28.1782H12.2191V17.5845H15.5004V28.1782ZM15.8278 14.2093C15.8278 13.1486 14.9672 12.2876 13.907 12.2876C12.8428 12.2876 11.9844 13.1486 11.9844 14.2093C11.9844 15.2704 12.8428 16.1313 13.907 16.1313C14.9672 16.1313 15.8278 15.2704 15.8278 14.2093ZM27.7812 22.35C27.7812 19.5062 27.1805 17.397 23.8584 17.397C22.2621 17.397 21.1906 18.1953 20.7531 19.0255H20.75V17.5845H17.5625V28.1782H20.75V22.9183C20.75 21.5408 21.1006 20.2064 22.8081 20.2064C24.4923 20.2064 24.5469 21.7816 24.5469 23.0059V28.1782H27.7812V22.35ZM32 29.5376V11.1626C32 9.61169 30.7384 8.3501 29.1875 8.3501H10.8125C9.2616 8.3501 8 9.61169 8 11.1626V29.5376C8 31.0885 9.2616 32.3501 10.8125 32.3501H29.1875C30.7384 32.3501 32 31.0885 32 29.5376ZM29.1875 10.2251C29.7044 10.2251 30.125 10.6457 30.125 11.1626V29.5376C30.125 30.0545 29.7044 30.4751 29.1875 30.4751H10.8125C10.2956 30.4751 9.875 30.0545 9.875 29.5376V11.1626C9.875 10.6457 10.2956 10.2251 10.8125 10.2251H29.1875Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* facebook-box */}
            {icon === 'facebook-box' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2806 17.1421V15.8573C21.2806 15.2411 21.7169 15.0936 22.0327 15.0936H23.9536V12.35H21.3087C18.3667 12.35 17.7076 14.3815 17.7076 15.7012V17.1421H16V19.078V20.3457H17.7263V28.35H21.151V20.3457H23.6845L23.7959 19.0868L24 17.1421H21.2806Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.56 8.3501H28.44C30.4039 8.35559 31.9945 9.94624 32 11.9101V28.7901C31.9945 30.754 30.4039 32.3446 28.44 32.3501H11.56C9.59615 32.3446 8.00549 30.754 8 28.7901V11.9101C8.00549 9.94624 9.59615 8.35559 11.56 8.3501ZM28.44 30.3502C29.3016 30.3502 30 29.6517 30 28.7902V11.9102C30 11.0486 29.3016 10.3502 28.44 10.3502H11.56C10.6985 10.3502 10 11.0486 10 11.9102V28.7902C10 29.6517 10.6985 30.3502 11.56 30.3502H28.44Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* instagram */}
            {icon === 'instagram' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.56 8.3501H28.44C30.4039 8.35559 31.9945 9.94624 32 11.9101V28.7901C31.9945 30.754 30.4039 32.3446 28.44 32.3501H11.56C9.59615 32.3446 8.00549 30.754 8 28.7901V11.9101C8.00549 9.94624 9.59615 8.35559 11.56 8.3501ZM28.44 30.3501C29.3016 30.3501 30 29.6517 30 28.7901V11.9101C30 11.0485 29.3016 10.3501 28.44 10.3501H11.56C10.6984 10.3501 10 11.0485 10 11.9101V28.7901C10 29.6517 10.6984 30.3501 11.56 30.3501H28.44ZM14 20.3501C14 17.0364 16.6863 14.3501 20 14.3501C21.5913 14.3501 23.1174 14.9822 24.2426 16.1075C25.3679 17.2327 26 18.7588 26 20.3501C26 23.6638 23.3137 26.3501 20 26.3501C16.6863 26.3501 14 23.6638 14 20.3501ZM16 20.3501C16 22.5592 17.7909 24.3501 20 24.3501C21.0609 24.3501 22.0783 23.9287 22.8284 23.1785C23.5786 22.4284 24 21.411 24 20.3501C24 18.141 22.2091 16.3501 20 16.3501C17.7909 16.3501 16 18.141 16 20.3501ZM26.5 15.3501C27.3284 15.3501 28 14.6785 28 13.8501C28 13.0217 27.3284 12.3501 26.5 12.3501C25.6716 12.3501 25 13.0217 25 13.8501C25 14.6785 25.6716 15.3501 26.5 15.3501Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* youtube-outline */}
            {icon === 'youtube-outline' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.7745 10.0332C17.2036 9.12239 22.7444 9.12239 28.1735 10.0332L28.1819 10.0347L28.1904 10.0362C31.5846 10.6659 34 13.0355 34 16.2432V25.4307C34 28.6478 31.5895 31.0181 28.2221 31.6629L28.2107 31.6651L28.1992 31.667C25.4894 32.121 22.7472 32.3495 20.0002 32.3501L19.9984 32.3501C17.2593 32.3456 14.5254 32.1126 11.8244 31.6535L11.8024 31.6497L11.7805 31.645C8.37446 30.9081 6 28.6499 6 25.4176V16.2301C6 13.0432 8.36764 10.7526 11.7332 10.0411L11.7538 10.0367L11.7745 10.0332ZM12.1267 12.0021C9.42131 12.5808 8 14.2506 8 16.2301V25.4176C8 27.4301 9.41425 29.0799 12.1821 29.6856C14.7657 30.1235 17.3806 30.3457 20.0004 30.3501C22.6326 30.3495 25.2602 30.1309 27.857 29.6964C30.5146 29.1836 32 27.4608 32 25.4307V16.2432C32 14.2292 30.5184 12.5052 27.8338 12.0042C22.6337 11.1328 17.327 11.1321 12.1267 12.0021Z"
                        fill={iconColor}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.3432 21.0217C25.3432 21.3611 25.1711 21.6773 24.8861 21.8615L17.9966 26.3152C17.689 26.514 17.2974 26.5288 16.9757 26.3537C16.654 26.1786 16.4537 25.8417 16.4537 25.4754L16.4537 16.5681C16.4537 16.2018 16.654 15.8648 16.9757 15.6897C17.2974 15.5146 17.689 15.5294 17.9966 15.7282L24.8861 20.1819C25.1711 20.3662 25.3432 20.6824 25.3432 21.0217ZM18.4537 18.4053L18.4537 23.6382L22.5012 21.0217L18.4537 18.4053Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* telegram */}
            {icon === 'telegram' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.97292 18.8798L30.175 9.60539C30.175 9.60539 32 8.75197 32 10.1659L28.0472 31.3926C28.0472 31.3926 27.4935 32.8648 25.9719 32.1582L20.3466 27.5658L16.7373 31.0689C16.7373 31.0689 16.4563 31.2966 16.1473 31.1536C16.1473 31.1536 15.881 31.1272 15.5491 30.01C15.2173 28.8897 13.531 23.002 13.531 23.002L7.94448 21.0003C7.94448 21.0003 7.08792 20.6767 7.00448 19.9691C6.92323 19.2628 7.97292 18.8798 7.97292 18.8798ZM20.2263 24.7738L26.2444 29.6854L29.5116 12.1475L11.0063 19.8781L15.8566 21.6157L26.7913 15.1001L18.7694 22.7307L18.3588 26.5857L20.2263 24.7738Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* whats-app */}
            {icon === 'whats-app' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        d="M27.5 23.3502C27.5 23.8502 27.5 24.35 27 25.3501C26.8807 25.5997 25.9999 26.3504 24.9999 26.3504C23.9999 26.3504 20 25.8504 17.5 22.8504C15 19.8504 13.4999 17.8501 15 14.85C15.3625 14.1251 16.4999 13.85 16.9999 13.8501C17.4999 13.8502 19 16.8503 19 17.3503C19 17.8503 18 18.3503 18 18.8503C18 19.3503 18.5 20.3503 19.5 21.3503C20.5 22.3503 22 23.3503 22.5 23.3503C23 23.3503 24 21.8503 24.5 21.8503C25 21.8503 27.5 22.8501 27.5 23.3501V23.3502Z"
                        fill={iconColor}
                    />
                    <path
                        d="M8 33.3501L7.05132 33.0339C6.93154 33.3932 7.02506 33.7894 7.29289 34.0572C7.56073 34.325 7.95689 34.4186 8.31623 34.2988L8 33.3501ZM15 30.8501L15.4171 29.9412C15.1749 29.8301 14.8984 29.8202 14.6489 29.9138L15 30.8501ZM10.5 26.3501L11.4363 26.7012C11.5434 26.4158 11.5144 26.097 11.3575 25.8356L10.5 26.3501ZM32 20.3501C32 26.4252 27.0751 31.3501 21 31.3501V33.3501C28.1797 33.3501 34 27.5298 34 20.3501H32ZM9.99999 20.3501C9.99999 14.275 14.9249 9.3501 21 9.3501V7.3501C13.8203 7.3501 7.99999 13.1704 7.99999 20.3501H9.99999ZM21 9.3501C27.0751 9.3501 32 14.275 32 20.3501H34C34 13.1704 28.1797 7.3501 21 7.3501V9.3501ZM21 31.3501C19.4131 31.3501 16.8679 30.6071 15.4171 29.9412L14.5829 31.7589C16.1763 32.4903 19.018 33.3501 21 33.3501V31.3501ZM14.6489 29.9138C10.6567 31.4108 10.6688 31.4064 7.68377 32.4014L8.31623 34.2988C11.3312 33.2938 11.3433 33.2894 15.3511 31.7864L14.6489 29.9138ZM8.94868 33.6663C9.94369 30.6813 9.93926 30.6934 11.4363 26.7012L9.56367 25.999C8.06072 30.0068 8.05628 30.0189 7.05132 33.0339L8.94868 33.6663ZM11.3575 25.8356C9.99848 23.5706 9.99999 22.0766 9.99999 20.3501H7.99999C7.99999 22.1924 8.00149 24.1296 9.64251 26.8646L11.3575 25.8356Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* wordpress */}
            {icon === 'wordpress' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        d="M19.5 7.3501C12.6038 7.3501 7 12.9539 7 19.8501C7 26.7463 12.6038 32.3501 19.5 32.3501C26.3962 32.3501 32 26.7463 32 19.8501C32 12.9539 26.3962 7.3501 19.5 7.3501ZM19.5 9.43468C22.2165 9.43468 24.6751 10.4721 26.5256 12.1634C26.4859 12.1626 26.4458 12.1522 26.396 12.1522C25.3749 12.1522 24.7096 13.0471 24.7096 14.0057C24.7096 14.8702 25.145 15.5902 25.6768 16.4547C26.0719 17.1422 26.5312 18.0379 26.5312 19.3186C26.5312 20.2148 26.1974 21.2453 25.7387 22.6934L24.7096 26.1621L20.7996 14.1165C21.4246 14.0848 21.9865 14.0226 21.9865 14.0226C22.549 13.9601 22.487 13.127 21.9245 13.1588C21.9245 13.1588 20.2374 13.294 19.1432 13.294C18.123 13.294 16.4032 13.1588 16.4032 13.1588C15.8407 13.127 15.7787 13.9919 16.3412 14.0226C16.3412 14.0226 16.8717 14.0848 17.4342 14.1165L19.1883 19.4125L16.9159 26.2466L12.9758 14.1184C13.6114 14.0867 14.174 14.0245 14.174 14.0245C14.7365 13.962 14.6639 13.1289 14.112 13.1606C14.112 13.1606 12.4949 13.289 11.4002 13.294C13.3067 10.9383 16.2193 9.43468 19.5 9.43468ZM28.6459 14.8508C29.4551 16.3335 29.9154 18.0354 29.9154 19.8501C29.9154 23.9746 27.5372 27.5129 24.0767 29.2026C24.3012 29.0918 24.5244 28.9809 24.7396 28.8495L27.9172 19.6529C28.5105 18.1741 28.7079 16.9857 28.7079 15.9232C28.7079 15.5376 28.6881 15.1929 28.6478 14.8602C28.6463 14.8574 28.6472 14.8537 28.6459 14.8508ZM10.0799 15.4124L14.9477 29.2157C11.4737 27.5309 9.08459 23.9845 9.08459 19.8501C9.08459 18.2586 9.44721 16.7588 10.0799 15.4124ZM19.6765 20.7572L22.886 29.5368C22.9066 29.5874 22.9271 29.6299 22.9574 29.6702C21.8749 30.0492 20.7152 30.2655 19.5 30.2655C18.4741 30.2655 17.4865 30.113 16.5515 29.8392L19.6765 20.7572ZM15.0735 29.2758C15.3442 29.3996 15.6175 29.5118 15.8942 29.6176C15.6146 29.5149 15.3412 29.4012 15.0735 29.2758ZM23.7462 29.3622C23.5265 29.46 23.3013 29.5462 23.0738 29.6289C23.3022 29.5493 23.5262 29.4593 23.7462 29.3622ZM16.1928 29.7265C16.3041 29.7633 16.4148 29.8 16.529 29.8336C16.4157 29.8001 16.3044 29.7637 16.1928 29.7265Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* twitter */}
            {icon === 'twitter' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        d="M34 11.2255C32.9101 11.7062 31.7575 12.0239 30.578 12.1689C31.8224 11.4131 32.7548 10.2242 33.2025 8.82269C32.0332 9.53035 30.7531 10.0289 29.418 10.2968C28.5256 9.31293 27.3372 8.65803 26.0392 8.43479C24.7412 8.21154 23.4071 8.43259 22.246 9.06325C21.0849 9.69391 20.1626 10.6985 19.6236 11.9195C19.0846 13.1405 18.9596 14.5088 19.268 15.8099C16.9037 15.6883 14.5909 15.0624 12.48 13.973C10.3692 12.8835 8.50733 11.3547 7.0155 9.48603C6.49225 10.415 6.2173 11.4669 6.218 12.5374C6.21614 13.5315 6.45611 14.5106 6.91655 15.3876C7.37698 16.2647 8.04358 17.0123 8.857 17.564C7.91157 17.5379 6.98633 17.28 6.16 16.8123V16.886C6.16709 18.2788 6.64719 19.6264 7.51911 20.7009C8.39102 21.7753 9.60122 22.5106 10.945 22.7823C10.4277 22.9424 9.89067 23.0267 9.35 23.0329C8.97574 23.0285 8.60241 22.994 8.2335 22.9297C8.61617 24.1279 9.3567 25.175 10.3521 25.9253C11.3474 26.6757 12.5481 27.0919 13.787 27.1162C11.6949 28.7896 9.11203 29.703 6.45 29.7106C5.96532 29.7122 5.48102 29.6826 5 29.6221C7.71792 31.4061 10.8853 32.3532 14.1205 32.3492C16.3531 32.3727 18.5678 31.9438 20.6355 31.0875C22.7032 30.2311 24.5823 28.9645 26.163 27.3616C27.7438 25.7587 28.9945 23.8516 29.8422 21.7518C30.6899 19.652 31.1175 17.4015 31.1 15.1318C31.1 14.8812 31.1 14.6159 31.1 14.3505C32.2378 13.4879 33.2191 12.4304 34 11.2255Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* discord */}
            {icon === 'discord' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <path
                        d="M26.7897 30.7301C26.7897 30.7301 25.8797 29.6357 25.1213 28.6684C28.4328 27.7267 29.6966 25.6396 29.6966 25.6396C28.6603 26.3269 27.6744 26.8105 26.7897 27.1414C25.5258 27.6759 24.3125 28.0322 23.1244 28.2358C20.6977 28.694 18.4732 28.5667 16.5774 28.2104C15.1365 27.9304 13.8979 27.5231 12.8615 27.1159C12.2801 26.8868 11.6481 26.6069 11.0162 26.2506C10.9403 26.1996 10.8645 26.1741 10.7887 26.1232C10.7381 26.0978 10.7128 26.0724 10.6876 26.0469C10.2326 25.7924 9.97977 25.6142 9.97977 25.6142C9.97977 25.6142 11.1931 27.6504 14.4034 28.6175C13.6451 29.5848 12.7098 30.7301 12.7098 30.7301C7.12336 30.5519 5 26.8614 5 26.8614C5 18.6658 8.64003 12.0228 8.64003 12.0228C12.2801 9.27395 15.7432 9.35031 15.7432 9.35031L15.996 9.65573C11.4459 10.9792 9.34783 12.99 9.34783 12.99C9.34783 12.99 9.90394 12.6845 10.8392 12.2519C13.544 11.0556 15.6926 10.7247 16.5774 10.6484C16.729 10.6229 16.8555 10.5975 17.0071 10.5975C18.549 10.3938 20.2932 10.3429 22.1133 10.5466C24.5146 10.8265 27.0931 11.5392 29.7219 12.99C29.7219 12.99 27.725 11.0811 23.4277 9.75754L23.7815 9.35031C23.7815 9.35031 27.2447 9.27395 30.8847 12.0228C30.8847 12.0228 34.5248 18.6658 34.5248 26.8614C34.5248 26.8614 32.3761 30.5519 26.7897 30.7301ZM15.0354 18.844C13.5945 18.844 12.457 20.1165 12.457 21.6691C12.457 23.2218 13.6198 24.4943 15.0354 24.4943C16.4763 24.4943 17.6137 23.2218 17.6137 21.6691C17.639 20.1165 16.4763 18.844 15.0354 18.844ZM24.2619 18.844C22.821 18.844 21.6835 20.1165 21.6835 21.6691C21.6835 23.2218 22.8463 24.4943 24.2619 24.4943C25.7028 24.4943 26.8402 23.2218 26.8402 21.6691C26.8402 20.1165 25.7028 18.844 24.2619 18.844Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* web */}
            {icon === 'web' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 40 41" fill="none" xmlns={xmlns}>
                    <rect opacity="0.01" y="0.350098" width="40" height="40" fill={iconColor} />
                    <circle cx="20" cy="20.3501" r="14" stroke={iconColor} strokeWidth="2" />
                    <ellipse cx="20" cy="20.3501" rx="7.77778" ry="14" stroke={iconColor} strokeWidth="2" />
                    <path d="M20 6.3501V34.3501" stroke={iconColor} strokeWidth="2" />
                    <path d="M6 20.3501L34 20.3501" stroke={iconColor} strokeWidth="2" />
                    <path
                        d="M8.0741 13.6093L31.9259 13.6093"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M8.0741 27.0909L31.9259 27.0908"
                        stroke={iconColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {/* facebook */}
            {icon === 'facebook' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <g clip-path="url(#clip0_851_10241)">
                        <path
                            d="M16.5103 14.1626L17.0935 10.3621H13.4468V7.89582C13.4468 6.85607 13.9562 5.84258 15.5895 5.84258H17.2473V2.60686C17.2473 2.60686 15.7429 2.3501 14.3044 2.3501C11.3013 2.3501 9.33826 4.17037 9.33826 7.46557V10.3621H6V14.1626H9.33826V23.3501H13.4468V14.1626H16.5103Z"
                            fill={iconColor}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_851_10241">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.350098)" />
                        </clipPath>
                    </defs>
                </svg>
            )}

            {/* linkedin */}
            {icon === 'linkedin' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <g clip-path="url(#clip0_851_10249)">
                        <path
                            d="M6.47679 22.3496H2.33036V8.99697H6.47679V22.3496ZM4.40134 7.17554C3.07545 7.17554 2 6.07733 2 4.75144C2 4.11456 2.253 3.50377 2.70334 3.05343C3.15367 2.6031 3.76446 2.3501 4.40134 2.3501C5.03821 2.3501 5.649 2.6031 6.09934 3.05343C6.54968 3.50377 6.80268 4.11456 6.80268 4.75144C6.80268 6.07733 5.72679 7.17554 4.40134 7.17554ZM21.9955 22.3496H17.858V15.8496C17.858 14.3005 17.8268 12.3139 15.7022 12.3139C13.5464 12.3139 13.2161 13.997 13.2161 15.738V22.3496H9.07411V8.99697H13.0509V10.8184H13.1089C13.6625 9.76929 15.0147 8.66215 17.0321 8.66215C21.2286 8.66215 22 11.4255 22 15.0148V22.3496H21.9955Z"
                            fill={iconColor}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_851_10249">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.350098)" />
                        </clipPath>
                    </defs>
                </svg>
            )}

            {/* savings */}
            {icon === 'savings' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <path
                        d="M10.08 4.43998C10.61 4.79998 11.12 5.03998 11.54 5.09998C11.31 5.54998 11.14 6.03998 11.07 6.53998C10.407 6.36946 9.78252 6.0742 9.23 5.66998C8.97841 5.49786 8.73482 5.31434 8.5 5.11998V7.34998C8.5 7.64998 8.31 7.92998 8.03 8.04998C7.9725 8.07123 7.9158 8.09458 7.86 8.11998C7.18672 8.43972 6.56892 8.8651 6.03 9.37998C5.61791 9.81902 5.31026 10.3454 5.13 10.92C4.93 11.52 4.43 12.08 3.69 12.2C3.63699 12.2073 3.58846 12.2336 3.55349 12.2741C3.51852 12.3146 3.4995 12.3665 3.5 12.42V14.18C3.5 14.34 3.62 14.48 3.78 14.51C4.41 14.61 4.9 15.02 5.18 15.51C5.43 15.97 5.88 16.66 6.53 17.31C7.18165 17.9528 7.99845 18.4027 8.89 18.61C9.25 18.68 9.5 18.99 9.5 19.35V20.6C9.5 20.74 9.61 20.85 9.75 20.85H11C11 20.02 11.67 19.35 12.5 19.35H14.5C15.33 19.35 16 20.02 16 20.85H17.25C17.39 20.85 17.5 20.74 17.5 20.6V18.35C17.5 18.07 17.66 17.81 17.91 17.68H17.93L18 17.63L18.28 17.44C18.9883 16.9042 19.559 16.2076 19.945 15.4078C20.331 14.608 20.5212 13.7278 20.5 12.84C20.5 11.84 20.31 11.03 20 10.36C20.35 9.88998 20.62 9.35998 20.79 8.78998C21.6097 9.98265 22.0331 11.4032 22 12.85C22.02 14.0065 21.7571 15.1503 21.2343 16.1821C20.7114 17.2138 19.9444 18.1022 19 18.77V20.6C19 21.57 18.22 22.35 17.25 22.35H16C15.6022 22.35 15.2206 22.1919 14.9393 21.9106C14.658 21.6293 14.5 21.2478 14.5 20.85H12.5C12.5 21.68 11.83 22.35 11 22.35H9.75C8.78 22.35 8 21.57 8 20.6V19.92C7.05648 19.593 6.19384 19.0679 5.47 18.38C4.84277 17.7456 4.30452 17.0291 3.87 16.25C3.83771 16.1849 3.79135 16.1278 3.73428 16.0828C3.6772 16.0378 3.61084 16.0061 3.54 15.99C3.11075 15.919 2.72053 15.6983 2.4386 15.3669C2.15667 15.0356 2.00127 14.615 2 14.18V12.42C2 11.58 2.6 10.86 3.44 10.72C3.53 10.71 3.66 10.62 3.72 10.44C3.91 9.85998 4.28 9.00998 4.97 8.31998C5.56604 7.7327 6.25116 7.24332 7 6.86998V4.01998C7 3.07998 8.13 2.69998 8.74 3.29998C9.07 3.62998 9.55 4.06998 10.08 4.43998ZM13.07 9.19998C12.58 8.99998 12.17 8.59998 12.07 8.08998C11.9365 7.38169 11.9969 6.65049 12.2447 5.97369C12.4925 5.29688 12.9186 4.69961 13.4779 4.24502C14.0372 3.79042 14.709 3.4954 15.4222 3.39115C16.1353 3.28689 16.8634 3.37726 17.5295 3.65272C18.1955 3.92817 18.7748 4.37847 19.206 4.95601C19.6372 5.53355 19.9043 6.21687 19.9792 6.93373C20.054 7.65059 19.9338 8.37436 19.6311 9.02851C19.3285 9.68266 18.8548 10.2429 18.26 10.65C17.82 10.95 17.26 10.93 16.76 10.73L13.07 9.19998ZM17.47 9.37998C17.8293 9.11855 18.1124 8.7661 18.2902 8.35889C18.4681 7.95168 18.5341 7.50444 18.4817 7.06321C18.4292 6.62198 18.2601 6.20271 17.9917 5.84856C17.7233 5.49442 17.3654 5.21819 16.9549 5.04833C16.5443 4.87847 16.0958 4.8211 15.6557 4.88215C15.2156 4.94319 14.7997 5.12043 14.4508 5.39563C14.1019 5.67082 13.8327 6.03402 13.6709 6.44783C13.509 6.86165 13.4604 7.31112 13.53 7.74998L13.55 7.75998L13.65 7.80998L17.33 9.34998C17.3683 9.36796 17.4086 9.38139 17.45 9.38998L17.47 9.37998ZM9 10.35C9 10.6152 8.89464 10.8695 8.70711 11.0571C8.51957 11.2446 8.26522 11.35 8 11.35C7.73478 11.35 7.48043 11.2446 7.29289 11.0571C7.10536 10.8695 7 10.6152 7 10.35C7 10.0848 7.10536 9.83041 7.29289 9.64287C7.48043 9.45533 7.73478 9.34998 8 9.34998C8.26522 9.34998 8.51957 9.45533 8.70711 9.64287C8.89464 9.83041 9 10.0848 9 10.35Z"
                        fill={iconColor}
                    />
                </svg>
            )}

            {/* percentage */}
            {icon === 'percentage' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <ellipse
                        cx="7.96637"
                        cy="8.78894"
                        rx="0.879086"
                        ry="0.879085"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="1.88997"
                    />
                    <circle
                        cx="15.6578"
                        cy="16.4808"
                        r="0.879086"
                        fill={iconColor}
                        stroke={iconColor}
                        strokeWidth="1.88997"
                    />
                    <path
                        d="M7.08728 17.1402L16.3177 7.90985"
                        stroke={iconColor}
                        strokeWidth="1.88997"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {/* purchase */}
            {icon === 'purchase' && (
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 25" fill="none" xmlns={xmlns}>
                    <path
                        d="M13.9697 12.741C14.2311 13.0332 14.68 13.0582 14.9722 12.7967C15.2645 12.5352 15.2894 12.0864 15.0279 11.7941L13.9697 12.741ZM13.0504 14.2911L12.7759 14.9459L13.0504 14.2911ZM11.6959 15.5682C11.3954 15.3163 10.9476 15.3557 10.6957 15.6562C10.4438 15.9567 10.4832 16.4046 10.7837 16.6564L11.6959 15.5682ZM12.8693 16.7852L12.8881 16.0754L12.8693 16.7852ZM12.1593 17.7312C12.1593 18.1233 12.4772 18.4412 12.8693 18.4412C13.2614 18.4412 13.5793 18.1233 13.5793 17.7312H12.1593ZM13.7604 10.8511C13.7604 10.459 13.4425 10.1411 13.0504 10.1411C12.6582 10.1411 12.3404 10.459 12.3404 10.8511H13.7604ZM14.0185 16.3904L13.5237 15.8812L14.0185 16.3904ZM13.6864 14.6213L14.0835 14.0327L13.6864 14.6213ZM15.0279 11.7941C14.7484 11.4817 14.0251 10.9505 13.0504 10.9505V12.3705C13.2792 12.3705 13.4862 12.4345 13.6567 12.5211C13.8337 12.6111 13.9425 12.7106 13.9697 12.741L15.0279 11.7941ZM13.0504 10.9505C11.8141 10.9505 10.8919 11.817 10.8919 12.8746H12.3119C12.3119 12.7181 12.4761 12.3705 13.0504 12.3705V10.9505ZM10.8919 12.8746C10.8919 13.4222 11.148 13.8589 11.5039 14.1889C11.8429 14.5032 12.2944 14.7441 12.7759 14.9459L13.3248 13.6363C12.9011 13.4587 12.6283 13.2949 12.4694 13.1476C12.3274 13.0159 12.3119 12.9341 12.3119 12.8746H10.8919ZM12.8881 16.0754C12.5591 16.0667 12.1342 15.9356 11.6959 15.5682L10.7837 16.6564C11.4456 17.2113 12.1732 17.477 12.8505 17.495L12.8881 16.0754ZM12.1593 16.7852V17.7312H13.5793V16.7852H12.1593ZM13.7604 11.6605V10.8511H12.3404V11.6605H13.7604ZM13.5237 15.8812C13.424 15.9781 13.2104 16.084 12.8881 16.0754L12.8505 17.495C13.4819 17.5117 14.0907 17.3103 14.5133 16.8996L13.5237 15.8812ZM12.7759 14.9459C12.9888 15.0351 13.1582 15.1214 13.2893 15.2099L14.0835 14.0327C13.8453 13.8721 13.5824 13.7443 13.3248 13.6363L12.7759 14.9459ZM13.2893 15.2099C13.5161 15.3629 13.5866 15.5261 13.6017 15.6298C13.6173 15.7374 13.583 15.8236 13.5237 15.8812L14.5133 16.8996C15.3531 16.0834 15.1331 14.7409 14.0835 14.0327L13.2893 15.2099Z"
                        fill={iconColor}
                    />
                    <path
                        d="M12.1946 7.85236C10.0696 7.91486 5.81958 9.80236 5.81958 16.8524V16.8524C5.81958 19.3376 7.8343 21.3524 10.3196 21.3524H16.1321C17.7889 21.3524 19.1321 20.0092 19.1321 18.3524V18.3524C19.1321 16.1024 19.8821 10.1024 14.4446 8.22736C15.0071 7.10236 16.8821 3.16486 13.8821 4.28986C13.5071 3.53985 12.3821 2.97735 11.6321 3.53985C10.8821 4.10235 11.0696 5.22736 11.6321 6.16486"
                        stroke={iconColor}
                        strokeWidth="1.42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.0696 4.28985C9.6946 3.97735 7.6571 4.28985 10.5071 8.03985"
                        stroke={iconColor}
                        strokeWidth="1.42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </ComponentMounter>
    );
});

export default DsIcon;
