import {
  // sans
  Inter,
  // serif
  Lora,
  // monospace
  Inconsolata,
} from 'next/font/google'

// sans
export const sans_neutral = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-neutral',
  weight: ['400', '500', '600', '700', '800'],
})

// serif
export const serif_book = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif-book',
  weight: ['400', '500', '600'],
})

// monospace
export const monospace = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-monospace',
  weight: ['400', '700'],
})

export const fontStyles = {
  mono: {
    name: 'Inconsolata',
    variable: monospace.variable,
  },
  serif: {
    name: 'Lora',
    variable: serif_book.variable,
  },
  sans: {
    name: 'Inter',
    variable: sans_neutral.variable,
  },
}
