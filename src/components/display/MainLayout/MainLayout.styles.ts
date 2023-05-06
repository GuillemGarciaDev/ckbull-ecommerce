import styled, { css } from "styled-components";

export const MainLayoutRoot = styled.div(
    ({ theme }) => css`
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
        background: ${theme.palette.background};
    `,
);
