import { css } from 'styled-components'

const sizes = {
    phone: 576,
    tablet: 768,
    desktop: 992,
    giant: 1170
};

export const media = Object.keys(sizes).reduce((finalModia, size) => {
    return {
        ...finalModia,
        [size]: function (...args) {
            return css`
            @media (max-width:  ${sizes[size]}px) {
                ${css(...args)}
            }
            `;
        }
    };
}, {});

