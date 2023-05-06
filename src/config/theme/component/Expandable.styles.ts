import { css } from "styled-components";

export const ExpandableStyles = css(({ theme }) => ({
    ".ExpandableDisplay": {
        borderBottom: 0,
    },
    ".ExpandableBody": {
        border: `1px solid ${theme.palette.border}`,
        borderRadius: theme.borderRadiusMd,
    },
}));
