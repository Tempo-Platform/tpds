import PageHeader from '../../lib/components/PageHeader'
import { PSmall, H6, H5 } from '../../tpds/elements/typography'
import { Container } from '../../tpds/elements/layout'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title="Design guidelines" />
        <PSmall>
          The Tempo Platform Design System reflects the patterns and components that underpin the
          Tempo Platform products. These patterns and components provide a unified language and
          consistent look and feel when designing apps and products within the Tempo Platform.
        </PSmall>
        <br />
        <PSmall>
          The principles listed here form the foundation of our design system. They guide our team
          when working on different parts of the system and help us do better and more informed
          decisions.
        </PSmall>
        <br />
        <br />
        <br />
        <H5 isMedium>
          Principles <span className="text-tertiary">#</span>
        </H5>
        <br />
        <H6 isMedium className="mb-2">
          Put user needs first
        </H6>
        <PSmall className="text-secondary">
          We care for the people who use our products. We’re here to make their day-to-day and
          long-term work better and more pleasant through great user experience.
        </PSmall>
        <br />
        <br />
        <H6 isMedium className="mb-2">
          Strive for consistency, not uniformity
        </H6>
        <PSmall className="text-secondary">
          We should use the same language and design patterns wherever possible. This helps people
          get familiar with our services. Same holds true for the system and its developer
          experience.
        </PSmall>
        <br />
        <br />
        <H6 isMedium className="mb-2">
          Default to openness
        </H6>
        <PSmall className="text-secondary">
          We should share what we’re doing whenever we can. Building our services transparently
          increases their visibility and accountability and makes us push towards higher quality.
        </PSmall>
        <br />
        <br />
        <H6 isMedium className="mb-2">
          Make it accessible
        </H6>
        <PSmall className="text-secondary">
          Our services are for everyone. We make sure people with different needs can use our
          products and that they meet the accessibility standards.
        </PSmall>
        <br />
        <br />
        <H6 isMedium className="mb-2">
          Provide a good developer experience
        </H6>
        <PSmall className="text-secondary">
          Providing a good developer experience is very important to us. Developers should be able
          to start using our tools in minutes, not hours, days or weeks.
        </PSmall>
        <br />
        <br />
        <H6 isMedium className="mb-2">
          Automate everything you can
        </H6>
        <PSmall className="text-secondary">
          We value the time of our colleagues, users, and our future selves over our own. We are
          always proactively looking for ways to automate repetitive tasks and testing.
        </PSmall>
        <br />
        <br />
      </Container>
    </div>
  )
}
