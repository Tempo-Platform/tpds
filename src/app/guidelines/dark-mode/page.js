import Hero from '@/tpds/components/hero/Hero'
import { P, H4, H1 } from '@/tpds/elements/typography'
import { Separator, Container, PaddingBox } from '@/tpds/elements/layout'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Dark Mode</H1>
        <P>
          Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
          <H4>Headline</H4>
          <br />
          <P>Text</P>
          <Separator />
        </PaddingBox>
      </Container>
    </div>
  )
}
