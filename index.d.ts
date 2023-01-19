/**
 * TbhTheme variants
 */
export namespace variants {
    /**
     * Dark variant
     */
    const dark: Labels<Color, AlphaColor>
}

/**
 * Palette labels
 */
export namespace labels {
    const brink_pink: Variants<Color>
    const flamingo: Variants<Color>
    const mauve: Variants<Color>
    const red: Variants<Color>
    const bittersweet: Variants<Color>
    const naples_yellow: Variants<Color>
    const yellow_red: Variants<Color>
    const emerald: Variants<Color>
    const teal: Variants<Color>
    const sky: Variants<Color>
    const sapphire: Variants<Color>
    const heliotrope: Variants<Color>
    const pink: Variants<Color>

    const surface0: Variants<AlphaColor>
    const surface1: Variants<AlphaColor>
    const surface2: Variants<AlphaColor>
    const subtext0: Variants<AlphaColor>
    const subtext1: Variants<AlphaColor>
    const overlay0: Variants<AlphaColor>
    const overlay1: Variants<AlphaColor>
    const overlay2: Variants<AlphaColor>
    const text: Variants<AlphaColor>

    const base: Variants<AlphaColor>
    const mantle: Variants<AlphaColor>
    const crust: Variants<AlphaColor>
}
export default palette

export interface Color {
    /**
     * Formatted hex value
     * @example #babbf1
     */
    hex: string
    /**
     * Formatted rgb value
     * @example rgb(186, 187, 241)
     */
    rgb: string
    /**
     * Formatted hsl value
     * @example hsl(239, 66%, 84%)
     */
    hsl: string
}

export interface AlphaColor extends Color {
    alpha: Color
}

export interface Labels<T, U> {

    brink_pink: T
    flamingo: T
    mauve: T
    red: T
    bittersweet: T
    naples_yellow: T
    yellow_red: T
    emerald: T
    teal: T
    sky: T
    sapphire: T
    heliotrope: T
    pink: T

    text: U
    subtext0: U
    subtext1: U
    overlay0: U
    overlay1: U
    overlay2: U
    surface0: U
    surface1: U
    surface2: U

    base: U
    mantle: U
    crust: U
}

export interface Variants<T> {
    /**
     * Dark variant
     */
    dark: T
}

declare namespace palette {
    /**
     * Palette variants
     */
    const variants: Variants<Labels<Color, AlphaColor>>
    /**
     * Palette labels
     */
    const labels: Labels<Variants<Color>, Variants<Color>>
}
