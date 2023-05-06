import { Theme } from "@peersyst/react-components";

export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type FontWeight = "strong" | "regular" | "light";

export interface TypographyStyle {
    lineHeight?: string | number;
    fontSize?: string | number;
    fontWeight?: number;
}

export const FONT_WEIGHT: Record<FontWeight, number> = {
    strong: 600,
    regular: 500,
    light: 400,
};

export const FONT_STYLE: Record<TypographyVariant, TypographyStyle> = {
    h1: {
        lineHeight: "2.375rem",
        fontSize: "2rem",
    },
    h2: {
        lineHeight: "2rem",
        fontSize: "1.5rem",
    },
    h3: {
        lineHeight: "2rem",
        fontSize: "1.25rem",
    },
    h4: {
        lineHeight: "1.875rem",
        fontSize: "1.125rem",
    },
    h5: {
        lineHeight: "1.5rem",
        fontSize: "1rem",
    },
    h6: {
        lineHeight: "1.25rem",
        fontSize: "0.875rem",
    },
};

function createTypographyVariant(typographyVariant: TypographyVariant, fontWeight: FontWeight) {
    return {
        component: typographyVariant,
        style: {
            ...FONT_STYLE[typographyVariant],
            fontWeight: FONT_WEIGHT[fontWeight],
        },
    };
}

const typography: Partial<Theme["typography"]> = {
    h1Strong: createTypographyVariant("h1", "strong"),
    h1Regular: createTypographyVariant("h1", "regular"),
    h1Light: createTypographyVariant("h1", "light"),
    h2Strong: createTypographyVariant("h2", "strong"),
    h2Regular: createTypographyVariant("h2", "regular"),
    h2Light: createTypographyVariant("h2", "light"),
    h3Strong: createTypographyVariant("h3", "strong"),
    h3Regular: createTypographyVariant("h3", "regular"),
    h3Light: createTypographyVariant("h3", "light"),
    h4Strong: createTypographyVariant("h4", "strong"),
    h4Regular: createTypographyVariant("h4", "regular"),
    h4Light: createTypographyVariant("h4", "light"),
    h5Strong: createTypographyVariant("h5", "strong"),
    h5Regular: createTypographyVariant("h5", "regular"),
    h5Light: createTypographyVariant("h5", "light"),
    h6Strong: createTypographyVariant("h6", "strong"),
    h6Regular: createTypographyVariant("h6", "regular"),
    h6Light: createTypographyVariant("h6", "light"),
};

export default typography;
