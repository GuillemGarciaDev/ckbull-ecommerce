import { Button } from "@peersyst/react-components";
import styled, { css } from "styled-components";

export const ButtonRoot = styled(Button)(
  () => css`
    text-transform: none;
    font-weight: 500;
  `,
);
