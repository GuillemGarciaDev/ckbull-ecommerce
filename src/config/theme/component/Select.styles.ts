import { css } from "styled-components";

const filledApprearance = css(({ theme }) => ({
  ".Select": {
    ".SelectDisplay": {
      background: theme.palette.botticelli[950],
      color: theme.palette.white,
    },
    ".Open": {
      border: 0,
    },
    ".DisplayedContent": {
      color: theme.palette.white,
    },
    ".SelectMenu": {
      backgroundColor: theme.palette.botticelli[950],
      color: theme.palette.white,
      marginTop: "2px",
    },
    ".SelectItem": {
      background: "transparent",
      fontWeight: theme.typography.h5Light.style.fontWeight,
      color: theme.palette.white,

      "&:hover": {
        color: theme.palette.white,
        background: theme.palette.overlay[300]["8%"],
      },
    },
  },
}));

const outlinedAppearance = css(({ theme }) => ({
  ".Select": {
    ".SelectDisplay": {
      background: "transparent",
      color: theme.palette.botticelli[950],
      border: `1px solid ${theme.palette.overlay[100]["8%"]}`,
    },
    ".Disabled": {
      color: theme.palette.disabled,
    },
    ".DisplayedContent": {
      color: theme.palette.botticelli[950],
    },
    ".Open": {
      border: `1px solid ${theme.palette.botticelli[950]}`,
    },
    ".SelectMenu": {
      backgroundColor: theme.palette.white,
      color: theme.palette.botticelli[950],
      marginTop: "2px",
      border: `1px solid ${theme.palette.border}`,
    },
    ".SelectItem": {
      background: "transparent",
      fontWeight: theme.typography.h5Light.style.fontWeight,
      color: theme.palette.botticelli[950],
      "&:hover": {
        color: theme.palette.botticelli[950],
        background: theme.palette.overlay[100]["8%"],
      },
    },
  },
}));

const selectAppearances = {
  filled: filledApprearance,
  outlined: outlinedAppearance,
};

export const SelectStyles = css(({ theme: { typography } }) => {
  return css`
    .Select {
      .Skeleton {
        min-width: 6rem;
      }
      font-weight: ${typography.h5Light.style.fontWeight};
      .SelectDropDown {
        width: 1rem;
        height: 1rem;
      }
      .SelectMenu {
        box-shadow: none;
      }
    }
    //Size styles
    .FormControl.Md {
      .SelectDisplay {
        height: 2.75rem;
        padding: 0.5rem 1rem;
        ${typography.h5Regular.style}
      }
    }
    .FormControl.Lg {
      .SelectDisplay {
        height: 3.25rem;
        padding: 1rem 1.25rem;
        ${typography.h5Regular.style}
      }
    }
    //Variant styles
    .FormControl.Filled {
      ${selectAppearances["filled"]}
    }
    .FormControl.Outlined {
      ${selectAppearances["outlined"]}
    }
    //Rounded
    .FormControl.Rounded {
      .SelectDisplay {
        border-radius: 9999px;
      }
    }
  `;
});
