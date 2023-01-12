import test from 'ava'
import {labels, variants} from './index.js'

test('Labels', (t) => {
    t.deepEqual(labels.brink_pink, {

        dark: {
            hex: '#ff658e',
            rgb: 'rgb(245, 224, 220)',
            hsl: 'hsl(10, 56%, 91%)',
        }
    })
})

test('Variants', (t) => {
    t.deepEqual(variants.dark.spring_green, {
        hex: '#28ec87',
        rgb: 'rgb(245, 224, 220)',
        hsl: 'hsl(10, 56%, 91%)',
    })
})
