import { css } from "styled-components";
import { emphasize } from "@peersyst/react-utils";

export const LinkStyles = css(({ theme }) => {
    return css`
        .Link {
            display: flex;
            text-decoration: none;

            .Typography {
                transition: color 0.2s ease-in-out;
            }

            &:hover {
                .Typography {
                    color: ${emphasize(theme.palette.primary, 0.05)};
                    transition: color 0.2s ease-in-out;
                }
            }
        }
    `;
});
