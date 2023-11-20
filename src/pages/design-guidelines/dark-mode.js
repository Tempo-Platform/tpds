import PageHeader from '../../lib/components/PageHeader'
import { P, H6, Underline, Code } from '../../tpds/elements/typography'
import { Section, Container, Window, Separator } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import tokens from '../../tpds/tokens/index.json'
const colorTokens = tokens.colors

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title="Dark/Light Mode" subtitle="Color guide for dark and light modes" />
        <P>
          The Tempo Platform Design System provides an automatic dark mode out of the box. By
          applying the TailwindCSS classes correctly, the UI will adapt to the current color scheme.
        </P>
        <br />
        <P>
          See below the appearence of the different color schemes. See further below on how to
          implement them.
        </P>
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <H6 isBold>Dark Mode</H6>
        <br />
        <P>Appearance of Body, Window and Text variants in dark mode:</P>
        <br />
        <div style={darkModeBgStyles} className="p-8">
          <P style={{ color: colorTokens.white }}>Body bg: {colorTokens.dark.body_bg}</P>
          <P style={{ color: colorTokens.white }}>Body border: {colorTokens.dark.body_border}</P>
          <div style={darkModeWindowStyles} className="w-[50%] p-8 my-10 mx-auto">
            <P style={{ color: colorTokens.white }}>Window bg: {colorTokens.dark.window_bg}</P>
            <P style={{ color: colorTokens.white }}>
              Window border: {colorTokens.dark.window_border}
            </P>
            <br />
            <P style={{ color: colorTokens.dark.text_primar }}>
              Text Primary: {colorTokens.dark.text_primary}
            </P>
            <br />
            <P style={{ color: colorTokens.dark.text_secondary }}>
              Text Secondary: {colorTokens.dark.text_secondary}
            </P>
            <br />
            <P style={{ color: colorTokens.dark.text_tertiary }}>
              Text Tertiary: {colorTokens.dark.text_tertiary}
            </P>
          </div>
        </div>
        <br />
        <br />
        <br />
        <H6 isBold>Light Mode</H6>
        <br />
        <P>Appearance of Body, Window and Text variants in light mode:</P>
        <br />
        <div style={lightModeBgStyle} className="p-8">
          <P style={{ color: colorTokens.light.text_primary }}>
            Body bg: {colorTokens.light.body_bg}
          </P>
          <P style={{ color: colorTokens.light.text_primary }}>
            Body border: {colorTokens.light.body_border}
          </P>
          <div style={lightModeWindowStyles} className="w-[50%] p-8 my-10 mx-auto">
            <P style={{ color: colorTokens.light.text_primary }} className="font-medium">
              Window bg: {colorTokens.light.window_bg}
            </P>
            <P style={{ color: colorTokens.light.text_primary }} className="font-medium">
              Window border: {colorTokens.light.window_border}
            </P>
            <br />
            <P style={{ color: colorTokens.light.text_primary }}>
              Text Primary: {colorTokens.light.text_primary}
            </P>
            <br />
            <P style={{ color: colorTokens.light.text_secondary }}>
              Text Secondary: {colorTokens.light.text_secondary}
            </P>
            <br />
            <P style={{ color: colorTokens.light.text_tertiary }}>
              Text Tertiary: {colorTokens.light.text_tertiary}
            </P>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <H6 isBold>Implementation</H6>
        <br />
        <P>
          You should use TPDS's layout elements to achieve this effect systematically. The required
          classes have already been added for you, saving you time and possible errors.
        </P>
        <br />
        <CodeBlock code={codeTPDSImport} />
        <br />
        <br />
        <P>
          The code above produces the following HTML block. Press the Sun/Moon icon on the left
          sidebar to see the effect. (Note that the whole page will change as well)
        </P>
        <br />
        <Section className="border-body border py-16">
          <Container>
            <Window>
              <P className="text-primary">Text Primary</P>
              <br />
              <P className="text-secondary">Text Secondary</P>
              <br />
              <P className="text-tertiary">Text Tertiary</P>
            </Window>
          </Container>
        </Section>
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <H6 isBold>Doing it by hand</H6>
        <br />
        <P>
          It is useful to know how to achieve the same "by hand". The following code would produce
          the same effect:
        </P>
        <br />
        <CodeBlock code={codeImport} />
        <br />
        <P>Result is the same:</P>
        <P className="text-tertiary">(Press the Sun/Moon icon on the left sidebar to test)</P>
        <br />
        <div className="bg-body border border-body p-8">
          <div className="bg-window border border-window w-[50%] p-8 my-10 mx-auto">
            <P className="text-primary">Text Primary</P>
            <br />
            <P className="text-secondary">Text Secondary</P>
            <br />
            <P className="text-tertiary">Text Tertiary</P>
          </div>
        </div>
        <br />
        <br />
        <P className="text-secondary">Understanding the classes in use:</P>
        <br />
        <P>
          The class <Code>bg-body</Code> tells the element to assume the current scheme's{' '}
          <Underline>background color</Underline>.
        </P>
        <P>
          The class <Code>bg-window</Code> tells the element to assume the current scheme's{' '}
          <Underline>window color</Underline>.
        </P>
        <br />
        <P>
          The class <Code>bg-border</Code> tells the element to assume the current scheme's
          background-specific <Underline>border color</Underline>.
        </P>
        <P>
          The class <Code>window-border</Code> tells the element to assume the current scheme's
          window-specific <Underline>border color</Underline>.
        </P>
        <br />
        <P>
          The class <Code>text-primary</Code> tells the element to assume the current scheme's
          primary <Underline>text color</Underline>.
        </P>
        <P>
          The class <Code>text-secondary</Code> tells the element to assume the current scheme's
          secondary <Underline>text color</Underline>.
        </P>
        <P>
          The class <Code>text-tertiary</Code> tells the element to assume the current scheme's
          tertiary <Underline>text color</Underline>.
        </P>

        <br />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <H6 isBold>Different colors per scheme</H6>
        <br />
        <P>
          It is also possible to achieve different colors per color scheme. See the example below:
        </P>
        <br />
        <br />
        <P isBold>Text</P>
        <P className="text-magenta dark:text-blue">
          This text will be magenta on light mode, and blue on dark mode.
        </P>
        <br />
        <CodeBlock code={codeDifferentP} />
        <br />
        <br />
        <P isBold className="mb-2">
          Background
        </P>
        <P className="mb-2">Make a square magenta on light mode, and blue on dark mode:</P>
        <div className="bg-magenta dark:bg-blue h-28 w-28 text-black p-2" />
        <br />
        <CodeBlock code={codeDifferentDiv} />
        <br />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <H6 isBold>Custom colors per scheme</H6>
        <br />
        <P>
          It is also possible to achieve completely custom colors per color scheme. See the example
          below:
        </P>
        <br />
        <br />
        <P isBold>Text</P>
        <P className="text-[#ff0000] dark:text-[#00ff00]">
          This text will be red on light mode, and green on dark mode.
        </P>
        <br />
        <CodeBlock code={codeCustomP} />
        <br />
        <br />
        <P isBold className="mb-2">
          Background
        </P>
        <P className="mb-2">Make a square red on light mode, and green on dark mode:</P>
        <div className="bg-[#ff0000] dark:bg-[#00ff00] h-28 w-28 text-black p-2" />
        <br />
        <CodeBlock code={codeCustomDiv} />
        <br />
        <br />
      </Container>
    </div>
  )
}

const darkModeBgStyles = {
  backgroundColor: colorTokens.dark.body_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.dark.body_border}`,
}

const darkModeWindowStyles = {
  backgroundColor: colorTokens.dark.window_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.dark.window_border}`,
}

const lightModeBgStyle = {
  backgroundColor: colorTokens.light.body_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.light.body_border}`,
}

const lightModeWindowStyles = {
  backgroundColor: colorTokens.light.window_bg,
  borderRadius: '3px',
  border: `1px solid ${colorTokens.light.window_border}`,
}

const codeImport = String.raw`import { P } from '@tempoplatform/tpds/elements/typography' // use TPDS's "P" to enable responsive type

// the body element
<div className='bg-body p-8'>
  // the window element
  <div className='bg-window border-window border w-[50%] p-8 my-10 mx-auto'>
    <P className='text-primary'>Text Primary</P>
    <br />
    <P className='text-secondary'>Text Secondary</P>
    <br />
    <P className='text-tertiary'>Text Tertiary</P>
  </div>
</div>`

const codeTPDSImport = String.raw`import { Section, Container, Window } from '@tempoplatform/tpds/elements/layout'
import { P } from '@tempoplatform/tpds/elements/typography'

<Section> // the "body" element
  <Container>
    <Window> // the window element
      <P className='text-primary'>Text Primary</P>
      <br />
      <P className='text-secondary'>Text Secondary</P>
      <br />
      <P className='text-tertiary'>Text Tertiary</P>
    </Window>
  </Container>
</Section>`

const codeDifferentP = String.raw`import { P } from '@tempoplatform/tpds/elements/typography'

<P className='text-magenta dark:text-blue'>This text will be magenta on light mode, and blue on dark mode.</P>`

const codeDifferentDiv = String.raw`<div className='bg-magenta dark:bg-blue h-28 w-28'/>`

const codeCustomP = String.raw`import { P } from '@tempoplatform/tpds/elements/typography'

<P className='text-[#ff0000] dark:text-[#00ff00]'>This text will be red on light mode, and gren on dark mode.</P>`

const codeCustomDiv = String.raw`<div className='bg-[#ff0000] dark:bg-[#00ff00] h-28 w-28'/>`
