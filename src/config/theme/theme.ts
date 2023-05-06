import { createTheme } from "@peersyst/react-components";
import typography from "./typography";
import { spacing } from "./spacing";

const theme = createTheme({
    borderRadius: spacing[2],
    borderRadiusMd: spacing[3],
    borderRadiusLg: spacing[4],
    typography,
});

export default theme;
