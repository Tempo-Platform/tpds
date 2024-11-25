import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P, H6 } from '@tpds/elements/typography'
import { Separator, Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import PropsTable from '@tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title='PropsTable' subTitle='Table components designed to display props' />
        <P>Example:</P>
        <br />
        <PropsTable
          items={[
            {
              propName: 'description',
              type: 'String',
              default: "' '",
              required: 'optional',
              description: 'card description',
            },
            {
              propName: 'children',
              type: 'JSX',
              default: 'null',
              required: 'optional',
              description: 'Custom JSX content',
            },
            {
              propName: 'linkURL',
              type: 'String',
              default: "' '",
              required: 'optional',
              description: 'link destination URL',
            },
            {
              propName: 'external',
              type: 'Boolean',
              default: 'false',
              required: 'conditional',
              description: 'when a link is external, pass {true}',
            },
            {
              propName: 'linkClass',
              type: 'Class',
              default: 'null',
              required: 'conditional',
              description:
                'if "linkUrl" is given and refers to an internal link, pass the "Link" class you are using, eg. imported from "react-router-dom" or "gatsby" or "next/link"',
            },
          ]}
        />
        <br />
        <br />
        <P>Code to reproduce the example above:</P>
        <br />
        <br />
        <CodeBlock code={codeExample} />
        <br />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <H6 isBold>Customization</H6>
        <br />
        <P>The next example shows how to:</P>
        <br />
        <P>- Set custom header names</P>
        <P>- Set custom property names of the given entries</P>
        <P>- Skip one of the columns to have only 4 total</P>
        <br />
        <br />
        <PropsTable
          skipColumn4
          col1Name='Ingredient'
          col2Name='Amount'
          col3Name='Cook time'
          col5Name='Notes'
          param1Name='name'
          param2Name='grams'
          param3Name='minutes'
          param5Name='notes'
          items={[
            {
              name: 'Chocolate',
              grams: '100',
              minutes: '20',
              notes: 'Must be Swiss made.',
            },
            {
              name: 'Egg',
              grams: '20',
              minutes: '15',
              notes: 'Scrambled to perfection.',
            },
            {
              name: 'Chantilly',
              grams: '5',
              minutes: '7',
              notes: 'Add on top only at the end.',
            },
            {
              name: 'Cherry',
              grams: '3',
              minutes: "Don't cook",
              notes: 'Place on top of the chantilly to finalize.',
            },
          ]}
        />
        <br />
        <br />
        <CodeBlock code={codeCustomExample} />
        <br />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'items',
              type: 'Array',
              default: 'true',
              required: 'required',
              description: 'Array of objects with the properties as shown in the example code.',
            },
            {
              propName: 'omitTitle',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Pass "true" to omit the title header.',
            },
            {
              propName: 'col1Name',
              type: 'String',
              default: 'Prop Name',
              required: 'optional',
              description: 'Set to customise the name of the first header label',
            },
            {
              propName: 'col2Name',
              type: 'String',
              default: 'Type',
              required: 'optional',
              description: 'Set to customise the name of the second header label',
            },
            {
              propName: 'col3Name',
              type: 'String',
              default: 'Default',
              required: 'optional',
              description: 'Set to customise the name of the third header label',
            },
            {
              propName: 'col4Name',
              type: 'String',
              default: 'Required',
              required: 'optional',
              description: 'Set to customise the name of the fourth header label',
            },
            {
              propName: 'col5Name',
              type: 'String',
              default: 'Description',
              required: 'optional',
              description: 'Set to customise the name of the fifth header label',
            },
            {
              propName: 'param1Name',
              type: 'String',
              default: 'propName',
              required: 'optional',
              description: 'Set to customise the name of the first property name',
            },
            {
              propName: 'param2Name',
              type: 'String',
              default: 'type',
              required: 'optional',
              description: 'Set to customise the name of the second property name',
            },
            {
              propName: 'param3Name',
              type: 'String',
              default: 'default',
              required: 'optional',
              description: 'Set to customise the name of the third property name',
            },
            {
              propName: 'param4Name',
              type: 'String',
              default: 'required',
              required: 'optional',
              description: 'Set to customise the name of the fourth property name',
            },
            {
              propName: 'param5Name',
              type: 'String',
              default: 'description',
              required: 'optional',
              description: 'Set to customise the name of the fifth property name',
            },
            {
              propName: 'skipColumn2',
              type: 'Boolean',
              default: 'false',
              required: 'optional',
              description: "Set 'true' to skip the second column",
            },
            {
              propName: 'skipColumn3',
              type: 'Boolean',
              default: 'false',
              required: 'optional',
              description: "Set 'true' to skip the third column",
            },
            {
              propName: 'skipColum4',
              type: 'Boolean',
              default: 'false',
              required: 'optional',
              description: "Set 'true' to skip the fourth column",
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeExample = String.raw`import { PropsTable } from '@tempoplatform/tpds/components/table/PropsTable'

<PropsTable
  title='Standard Props Table Example'
  items={[
    {
      propName: 'children',
      type: 'JSX',
      default: 'null',
      required: 'optional',
      description: 'Custom JSX content'
    },
    {
      propName: 'linkURL',
      type: 'String',
      default: "' '",
      required: 'optional',
      description: 'link destination URL'
    },
    {
      propName: 'external',
      type: 'Boolean',
      default: 'false',
      required: 'conditional',
      description: 'when a link is external, pass {true}'
    },
    {
      propName: 'linkClass',
      type: 'Class',
      default: 'null',
      required: 'conditional',
      description: 'if "linkUrl" is given and refers to an internal link, pass the "Link" class you are using, eg. imported from "react-router-dom" or "gatsby" or "next/link"'
    }
  ]}
/>`

const codeCustomExample = String.raw`import { PropsTable } from '@tempoplatform/tpds/components/table/PropsTable'

<PropsTable
  title='Custom example'
  skipColumn4
  col1Name="Ingredient"
  col2Name="Amount"
  col3Name="Cook time"
  col5Name="Notes"
  param1Name="name"
  param2Name="grams"
  param3Name="minutes"
  param5Name="notes"
  items={[
    {
      name: "Chocolate",
      grams: '100',
      minutes: '20',
      notes: 'Must be Swiss made.'
    },
    {
      name: 'Egg',
      grams: '20',
      minutes: "15",
      notes: 'Scrambled to perfection.'
    },
    {
      name: 'Chantilly',
      grams: '5',
      minutes: '7',
      notes: 'Add on top only at the end.'
    },
    {
      name: 'Cherry',
      grams: '3',
      minutes: "Don't cook",
      notes: 'Place on top of the chantilly to finalize.'
    }
  ]}
/>`
