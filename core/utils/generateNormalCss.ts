import { breakpoints } from '../../config';
import getBreakpointValue from './getBreakpointValue';
import { cssValues } from './constants';
import getDashFromCamel from './getDashFromCamel';
import getCssNameFromMinified from './getCssNameFromMinified';

import type { StylesType } from '../types/stylesType';

const generateNormalCss = (_styles: StylesType | undefined): string => {
    let styles = '';

    for (const breakpoint in breakpoints) {
        let breakpointStyles = '';

        for (const style in _styles) {
            if (cssValues.indexOf(style) > -1) {
                if (
                    style === 'm' ||
                    style === 'mt' ||
                    style === 'ml' ||
                    style === 'mb' ||
                    style === 'mr' ||
                    style === 'p' ||
                    style === 'pt' ||
                    style === 'pl' ||
                    style === 'pb' ||
                    style === 'pr' ||
                    style === 'w' ||
                    style === 'minW' ||
                    style === 'maxW' ||
                    style === 'h' ||
                    style === 'minH' ||
                    style === 'maxH' ||
                    style === 'bgColor' ||
                    style === 'bg' ||
                    style === 'bgImage' ||
                    style === 'bgSize' ||
                    style === 'bgPosition' ||
                    style === 'bgRepeat' ||
                    style === 'bgAttachment'
                ) {
                breakpointStyles += `${getDashFromCamel(getCssNameFromMinified(style))}: ${getBreakpointValue(
                        _styles[style],
                        breakpoint,
                    )};`;
                } else {
                    breakpointStyles += `${getDashFromCamel(style)}: ${getBreakpointValue(
                        _styles[style],
                        breakpoint,
                    )};`;
                }
            }
        }

        styles += `
            @media (min-width: ${breakpoints[breakpoint]}) {
                ${breakpointStyles}
            }
        `;
    }

    return styles;
};

export default generateNormalCss;
