'use client'
import Hero from '../../../../tpds/components/hero/Hero'
import { P, H6, H1 } from '../../../../tpds/elements/typography'
import { Container, PaddingBox } from '../../../../tpds/elements/layout'
import tokens from '../../../../tpds/tokens/index.json'
const colorTokens = tokens.colors

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Colors</H1>
        <P>
          Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
          <H6 isBold id="primary-colors">
            Main Colors
          </H6>
          <br />
          <P>Each "main color" corresponds to the level "500" of the respective color.</P>
          <br />
          <br />
          <MainColorsRow>
            <SwatchItem>
              <SwatchInfo label="Green" hex={colorTokens.color_palettes.green['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.green['500'] }} />
            </SwatchItem>
            <SwatchItem>
              <SwatchInfo label="Blue" hex={colorTokens.color_palettes.blue['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.blue['500'] }} />
            </SwatchItem>
            <SwatchItem>
              <SwatchInfo label="Purple" hex={colorTokens.color_palettes.purple['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.purple['500'] }} />
            </SwatchItem>
            <SwatchItem>
              <SwatchInfo label="Magenta" hex={colorTokens.color_palettes.magenta['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.magenta['500'] }} />
            </SwatchItem>
            <SwatchItem>
              <SwatchInfo label="Red" hex={colorTokens.color_palettes.red['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.red['500'] }} />
            </SwatchItem>
            <SwatchItem>
              <SwatchInfo label="Orange" hex={colorTokens.color_palettes.orange['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.orange['500'] }} />
            </SwatchItem>
            <SwatchItem>
              <SwatchInfo label="Yellow" hex={colorTokens.color_palettes.yellow['500']} />
              <ColorSwatch style={{ backgroundColor: colorTokens.color_palettes.yellow['500'] }} />
            </SwatchItem>
          </MainColorsRow>
          <br />
          <br />
          <br />
          <H6 isBold id="primary-colors">
            Color Levels
          </H6>
          <br />
          <Palette colorName="Green" colors={colorTokens.color_palettes.green} />
          <Palette colorName="Blue" colors={colorTokens.color_palettes.blue} />
          <Palette colorName="Purple" colors={colorTokens.color_palettes.purple} />
          <Palette colorName="Magenta" colors={colorTokens.color_palettes.magenta} />
          <Palette colorName="Red" colors={colorTokens.color_palettes.red} />
          <Palette colorName="Orange" colors={colorTokens.color_palettes.orange} />
          <Palette colorName="Yellow" colors={colorTokens.color_palettes.yellow} />
          <Palette colorName="Grey Light" colors={colorTokens.color_palettes.grey_light} />
          <Palette colorName="Grey Dark" colors={colorTokens.color_palettes.grey_dark} />
        </PaddingBox>
      </Container>
    </div>
  )
}

const MainColorsRow = props => {
  return <div className="block sm:grid sm:grid-cols-8 sm:gap-2">{props.children}</div>
}
const ColorsRow = props => {
  return <div className="block sm:grid sm:grid-cols-10 sm:gap-2">{props.children}</div>
}
const SwatchItem = props => {
  return <div className="mb-2 grid grid-cols-2 gap-4 sm:block sm:mb-0">{props.children}</div>
}
const ColorHexLabel = props => {
  return <div className="font-mono text-tertiary mb-2">{props.children}</div>
}
const ColorSwatch = props => {
  return <div className="aspect-auto rounded sm:aspect-video" {...props} />
}

function Palette({ colorName, colors }) {
  return (
    <div>
      <P className="mb-4">{colorName}</P>
      <ColorsRow>
        <SwatchItem>
          <SwatchInfo label="50" hex={colors['50']} />
          <ColorSwatch style={{ backgroundColor: colors['50'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="100" hex={colors['100']} />
          <ColorSwatch style={{ backgroundColor: colors['100'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="200" hex={colors['200']} />
          <ColorSwatch style={{ backgroundColor: colors['200'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="300" hex={colors['300']} />
          <ColorSwatch style={{ backgroundColor: colors['300'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="400" hex={colors['400']} />
          <ColorSwatch style={{ backgroundColor: colors['400'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="500" hex={colors['500']} highlight={true} />
          <ColorSwatch style={{ backgroundColor: colors['500'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="600" hex={colors['600']} />
          <ColorSwatch style={{ backgroundColor: colors['600'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="700" hex={colors['700']} />
          <ColorSwatch style={{ backgroundColor: colors['700'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="800" hex={colors['800']} />
          <ColorSwatch style={{ backgroundColor: colors['800'] }} />
        </SwatchItem>
        <SwatchItem>
          <SwatchInfo label="900" hex={colors['900']} />
          <ColorSwatch style={{ backgroundColor: colors['900'] }} />
        </SwatchItem>
      </ColorsRow>
      <br />
      <br />
    </div>
  )
}

const ColorLabel = props => {
  return <div className="mb-[2px]">{props.children}</div>
}

function SwatchInfo({ label, hex, highlight }) {
  return (
    <div>
      <ColorLabel style={{ fontWeight: highlight ? '900' : '500' }}>{label}</ColorLabel>
      <ColorHexLabel>{hex}</ColorHexLabel>
    </div>
  )
}
