import { css } from "styled-components";

export const RootStyles = css(
    () => css`
        :root {
            overflow-x: hidden;
            --horizontal-page-padding: 1rem;
            --horizontal-appbar-padding: 1.5rem;
            --page-max-width: 70.5rem;
            --appbar-height: 4.75rem;
            strong {
                font-weight: 600;
            }
        }
    `,
);
