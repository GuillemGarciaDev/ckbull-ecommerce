export type ThemeSpacingKeys = 0 | 1 | 1.5 | 2 | 3 | 3.5 | 4 | 4.5 | 5 | 6 | 7 | 8;

export type ThemeSpacingValues = Record<ThemeSpacingKeys, string>;

export type SpaceDirectionParams = [ThemeSpacingKeys] | [ThemeSpacingKeys, ThemeSpacingKeys];

export type SpaceParams =
    | SpaceDirectionParams
    | [ThemeSpacingKeys, ThemeSpacingKeys, ThemeSpacingKeys]
    | [ThemeSpacingKeys, ThemeSpacingKeys, ThemeSpacingKeys, ThemeSpacingKeys];

export type ThemeSpacing = ThemeSpacingValues & {
    all(...indices: SpaceParams): string;
    horizontal(...indices: SpaceDirectionParams): string;
    vertical(...indices: SpaceDirectionParams): string;
};
