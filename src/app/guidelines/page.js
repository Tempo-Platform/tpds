import Hero from '@/tpds/components/hero/Hero'
import { P, H6, H5, H1, PLarge } from '@/tpds/elements/typography'
import { Separator, Container, PaddingBox } from '@/tpds/elements/layout'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Design guidelines</H1>
        <P>
          Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <br />
          <PLarge>
            The Tempo Platform Design System reflects the patterns and components that underpin the
            Tempo Platform products. These patterns and components provide a unified language and
            consistent look and feel when designing apps and products within the Tempo Platform.
          </PLarge>
          <br />
          <br />
          <H5 isMedium className="mb-2">
            Principles <span tw="text-tertiary">#</span>
          </H5>
          <Separator />
          <br />
          <PLarge>
            These principles form the foundation of our design system. They guide our team when
            working on different parts of the system and help us do better and more informed
            decisions.
          </PLarge>
          <br />
          <br />
          <br />
          <H6 isMedium className="mb-2">
            Put user needs first
          </H6>
          <P>
            We care for the people who use our products. We’re here to make their day-to-day and
            long-term work better and more pleasant through great user experience.
          </P>
          <br />
          <br />
          <H6 isMedium className="mb-2">
            Strive for consistency, not uniformity
          </H6>
          <P>
            We should use the same language and design patterns wherever possible. This helps people
            get familiar with our services. Same holds true for the system and its developer
            experience.
          </P>
          <br />
          <br />
          <H6 isMedium className="mb-2">
            Default to openness
          </H6>
          <P>
            We should share what we’re doing whenever we can. Building our services transparently
            increases their visibility and accountability and makes us push towards higher quality.
          </P>
          <br />
          <br />
          <H6 isMedium className="mb-2">
            Make it accessible
          </H6>
          <P>
            Our services are for everyone. We make sure people with different needs can use our
            products and that they meet the accessibility standards.
          </P>
          <br />
          <br />
          <H6 isMedium className="mb-2">
            Provide a good developer experience
          </H6>
          <P>
            Providing a good developer experience is very important to us. Developers should be able
            to start using our tools in minutes, not hours, days or weeks.
          </P>
          <br />
          <br />
          <H6 isMedium className="mb-2">
            Automate everything you can
          </H6>
          <P>
            We value the time of our colleagues, users, and our future selves over our own. We are
            always proactively looking for ways to automate repetitive tasks and testing.
          </P>
          <br />
          <br />
          <br />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}
