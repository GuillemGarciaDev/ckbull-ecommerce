import styled, { css } from "styled-components";
import { Col, ExpandableBody } from "@peersyst/react-components";

export const PurchaseModalRoot = styled(Col)(
  () => css`
    border-radius: 0.5rem;
  `,
);

export const ExpandableBodyRoot = styled(ExpandableBody)(
  () => css`
    border: 0;
  `,
);
