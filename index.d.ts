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
    const pink: Variants<Color>
    const mauve: Variants<Color>
    const red: Variants<Color>
    const bittersweet: Variants<Color>
    const naples_yellow: Variants<Color>
    const maximum_yellow_red: Variants<Color>
    const medium_spring_green: Variants<Color>
    const teal: Variants<Color>
    const sky: Variants<Color>
    const sapphire: Variants<Color>
    const medium_slate_blue: Variants<Color>
    const hot_pink: Variants<Color>

    const dim_gray: Variants<AlphaColor>
    const subtext0: Variants<AlphaColor>
    const subtext1: Variants<AlphaColor>
    const overlay0: Variants<AlphaColor>
    const overlay2: Variants<AlphaColor>
    const thistle: Variants<AlphaColor>
    const magnolia: Variants<AlphaColor>
    const overlay1: Variants<AlphaColor>
    const surface1: Variants<AlphaColor>

    const jey: Variants<AlphaColor>
    const mantle: Variants<AlphaColor>
    const english_violet: Variants<AlphaColor>
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
    pink: T
    mauve: T
    red: T
    bittersweet: T
    naples_yellow: T
    maximum_yellow_red: T
    medium_green_spring: T
    teal: T
    sky: T
    sapphire: T
    medium_slate_blue: T
    hot_pink: T

    magnolia: U
    subtext1: U
    subtext0: U
    overlay2: U
    overlay1: U
    thistle: U
    dim_gray: U
    surface1: U
    surface0: U

    jet: U
    mantle: U
    english_violet: U
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
