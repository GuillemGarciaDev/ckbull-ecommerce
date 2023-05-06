import { css } from "styled-components";

export const SkeletonStyles = css(
    ({ theme }) => css`
        .Skeleton {
            --skeleton-bg: ${theme.palette.overlay[300]["24%"]};
            --skeleton-pulse: alpha(${theme.palette.overlay[300]["24%"]}, 0.08);
        }
    `,
);
