'use client'

import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, PSmall, H1, PTiny, Code } from '../../tpds/elements/typography'
import { Separator, Container, PaddingBox, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Table from '../../tpds/components/table'
import Tag from '../../tpds/components/tag'

const getTagVariant = campaignState => {
  switch (campaignState) {
    case 'ACTIVE':
      return 'success'
    case 'INACTIVE':
      return 'warning'
    case 'UPCOMING':
      return 'info'
    default:
      // ENDED
      return 'default'
  }
}

const tableColumns = [
  {
    label: 'Id',
    propName: 'id',
    key: 'id',
  },
  {
    label: 'Name',
    propName: 'name',
    key: 'name',
  },
  {
    label: 'State',
    propName: 'state',
    key: 'state',
    render: (item, index) => {
      return (
        <Tag
          key={index}
          label={item.name}
          variant={getTagVariant(item.state)}
          className="inline-flex self-start"
        />
      )
    },
  },
  {
    label: 'Start Date',
    propName: 'start_date',
    key: 'start_date',
  },
  {
    label: 'End Date',
    propName: 'end_date',
    key: 'end_date',
  },
  {
    label: 'Actions',
    propName: null,
    key: 'actions',
    align: 'right',
    render: (item, index) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="cursor-pointer w-6 h-6 text-primary"
        key={index}
        onClick={() => alert('click item: ' + item.name)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
]

const data = [
  {
    id: '88aaa46546',
    name: 'Lalo',
    state: 'ACTIVE',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '884fff6546',
    name: 'Jjaldo',
    state: 'INACTIVE',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '884a6546',
    name: 'Gailok',
    state: 'ACTIVE',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846f546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '884asd6f546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846sdff546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846f5fgh46',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846hjkf546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '884eete6f546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '884345345f546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846uwuqewuf546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846tqrqyqf546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846fertueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '88400006ferdyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846fer88888dyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846fe77777rdyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846f66666erdyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '88465555ferdyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '8846f44444erdyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
  {
    id: '884633333ferdyjgtueru546',
    name: 'Ejstralo',
    state: 'UPCOMING',
    start_date: Date.now(),
    end_date: Date.now(),
  },
]

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Table</H1>
        <P>Standard table component with conditional pagination</P>
      </Hero>
      <Container>
        <PaddingBox>
          <PSmall isItalic className="!text-red">
            This component is currently under development.
          </PSmall>
          <br />
          <P>Features:</P>
          <br />
          <PSmall>- ✅ Accepts array to configure columns</PSmall>
          <PSmall>- ✅ Items in data array can make use of custom render function</PSmall>
          <PSmall>- ✅ Each cell can be optionall aligned to left, center or right</PSmall>
          <PSmall>- ✅ Dark / Light mode ready</PSmall>
          <PSmall>
            - Pagination can be enabled / disabled, in the latter case all items will be displayed
          </PSmall>
          <PSmall>
            - <Code>Current page</Code> and <Code>items per page</Code> can be passed on
            instantiation (when pagination is enabled)
          </PSmall>
          <PSmall>
            - Optional click entire row, or pass a custom render function to provide a specific
            click element
          </PSmall>
          <br />
          <Separator />
          <br />
          <Table
            columns={tableColumns}
            data={data}
            pagination={true}
            rowsPerPage={5}
            rowKey="id"
            page={2}
          />
          {/* <CodeBlock code={codeCustomExample} /> */}
          {/* <br />
          <br />
          <br />
          
          <br />
          <br /> */}
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeExample = String.raw`import { Table } from '@tempoplatform/tpds/components/table/Table'

<Table
  title='Standard Props Table Example'
  items={[
    {
      propName: "title",
      type: 'String',
      default: '"Props"',
      required: 'optional',
      description: 'The title of the component, shown as a header.'
    },
    {
      propName: 'description',
      type: 'String',
      default: "' '",
      required: 'optional',
      description: 'card description'
    },
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

const codeCustomExample = String.raw`import { Table } from '@tempoplatform/tpds/components/table/Table'

<Table
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
