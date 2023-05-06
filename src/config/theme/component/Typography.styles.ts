import { css } from "styled-components";

export const TypographyStyle = css(({ theme }) => ({
  ".Typography": {
    "&.Light": {
      opacity: 1,
      color: theme.palette.gray[20],
    },
  },
}));
