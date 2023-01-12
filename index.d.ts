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
    const spring_green: Variants<Color>
    const naples_yellow: Variants<Color>
    const bittersweet_red: Variants<Color>
    const slate_blue: Variants<Color>
    const jet: Variants<Color>
    const magnolia: Variants<Color>
    const dim_gray: Variants<Color>
    const hot_pink: Variants<Color>
    const english_violet: Variants<Color>
    const pink: Variants<Color>
    const thistle: Variants<Color>
    const max_yellow_red: Variants<Color>

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
    spring_green: T
    naples_yellow: T
    bittersweet_red: T
    slate_blue: T
    jet: T
    magnolia: T
    dim_gray: T
    hot_pink: T
    english_violet: T
    pink: T
    thistle: T
    max_yellow_red: T
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
