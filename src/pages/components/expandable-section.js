import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import PropsTable from '../../tpds/components/props-table'
import ExpandableSection from '../../tpds/components/expandable-section'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium tw="leading-tight">
          Expandable Section
        </H1>
        <P>A box that expands and contracts on tap.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>An expandable box that opens and closes by clicking or tapping the top area.</P>
          <br />
          <P>
            When opening it automatically moves to the (vertical) center of the screen if it would
            otherwise would open fully or partially outside of the viewable area of the screen.
          </P>
          <br />
          <P>
            It can optionally take the ID of a DOM element to take into account when calculating the
            available vertical area (available height will be screen height minus the element's
            height).
          </P>
          <br />
          <br />
          <ExpandableSection title="Box title" addBorderBottomIfOpen={true}>
            <div>
              <P>
                Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus
                porttitor.
              </P>
              <br />
              <P>
                Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis
                ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia
                bibendum nulla sed consectetur.
              </P>
            </div>
          </ExpandableSection>
          <br />
          <br />
          <CodeBlock code={code} />
          <br />
          <br />
          <PropsTable
            title="Props"
            items={[
              {
                propName: 'title',
                type: 'String',
                default: "' '",
                required: 'true',
                description: 'The title of the box',
              },
              {
                propName: 'children',
                type: 'String | JSX',
                default: 'null',
                required: 'true',
                description: 'Content to display inside the box. Can be a string or JSX.',
              },
              {
                propName: 'shouldClose',
                type: 'Boolean',
                default: 'null',
                required: 'optional',
                description: "Pass 'true' to close the box externally.",
              },
              {
                propName: 'excludeElementId',
                type: 'String',
                default: 'null',
                required: 'optional',
                description:
                  "ID of a DOM element to take it's height into account when calculating if the box will be fully visible after opening.",
              },
              {
                propName: 'removeBorderTop',
                type: 'Boolean',
                default: 'false',
                required: 'optional',
                description: "Pass 'true' to remove the top border of the box.",
              },
              {
                propName: 'addBorderBottomIfOpen',
                type: 'Boolean',
                default: 'false',
                required: 'optional',
                description: "Pass 'true' to add a border at the bottom when open.",
              },
            ]}
          />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const code = String.raw`import ExpandableSection from '@tempoplatform/tpds/components/expandable-section'
import { P } from '../../tpds/elements/typography'

<ExpandableSection
    title='Box title'
    children={
        <div>
            <P>Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</P>
            <br />
            <P>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.</P>
        </div>                    
    }
/>`
