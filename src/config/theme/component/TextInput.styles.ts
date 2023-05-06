import { css } from "styled-components";

export const TextInputStyles = css(({ theme }) => ({
  ".FormControl.Md": {
    ".TextInput": {
      height: "3.75rem",
      padding: "1rem 1.25rem",
    },
  },
  ".Outlined": {
    ".TextInput": {
      border: "1px solid " + theme.palette.overlay[300]["24%"],
      backgroundColor: theme.palette.white,
    },
  },
  ".TextInput": {
    border: "1px solid " + theme.palette.overlay[300]["24%"],
    color: theme.palette.botticelli[900],
    backgroundColor: theme.palette.white,
    borderRadius: theme.borderRadius,
  },
  ".Focused.TextInput": {
    color: theme.palette.botticelli[900],
    input: {
      color: theme.palette.botticelli[900],
    },
  },
  ".Disabled": {
    ".TextInput": {
      border: 0,
      color: theme.palette.red,
      backgroundColor: theme.palette.overlay[300]["24%"],
    },
  },
}));
