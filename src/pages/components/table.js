'use client'

import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, PSmall } from '../../tpds/elements/typography'
import { Separator, Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Table from '../../tpds/components/table'
import Tag from '../../tpds/components/tag'
import PropsTable from '../../tpds/components/props-table'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const getTagVariant = campaignState => {
  switch (campaignState) {
    case 'ACTIVE':
      return 'success'
    case 'INACTIVE':
      return 'warning'
    case 'UPCOMING':
      return 'info'
    default:
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
    addClass: 'font-bold',
    enableSort: true,
    sortFunction: null,
  },
  {
    label: 'State',
    propName: 'state',
    key: 'state',
    enableSort: true,
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
    label: 'Quantity',
    propName: 'quantity',
    key: 'quantity',
    enableSort: true,
  },
  // {
  //   label: 'Actions',
  //   propName: null,
  //   key: 'actions',
  //   align: 'right',
  //   render: (item, index) => (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={1.5}
  //       stroke="currentColor"
  //       className="cursor-pointer w-6 h-6 text-primary"
  //       key={index}
  //       onClick={() => alert('click item: ' + item.name)}
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
  //       />
  //     </svg>
  //   ),
  // },
]

const data = [
  {
    id: 'f211addc-8fe3-4e73-b12c-ee754020b2a0',
    name: 'Orange',
    quantity: 162756867077,
    state: 'ACTIVE',
  },
  {
    id: 'e00411aa-8dfd-44c1-ae08-ffce5917d5d6',
    name: 'Grape',
    quantity: 93493788680,
    state: 'INACTIVE',
  },
  {
    id: '12ffef8a-7e52-4997-a2cb-e38d78904845',
    name: 'Banana',
    quantity: 205003717696,
    state: 'ACTIVE',
  },
  {
    id: '9c103098-b834-498a-adc8-12da99fc9538',
    name: 'Strawberry',
    quantity: 233559506538,
    state: 'ACTIVE',
  },
  {
    id: '9d99169e-93b0-4bf6-bca3-5ad4f7b62378',
    name: 'Pear',
    quantity: 120109071563,
    state: 'UPCOMING',
  },
  {
    id: '00791166-8b69-4a5e-8c96-8af69e430210',
    name: 'Pineapple',
    quantity: 262939354976,
    state: 'UPCOMING',
  },
  {
    id: 'b4796640-664c-41ae-a3c1-de5cf29be387',
    name: 'Blueberry',
    quantity: 104208500516,
    state: 'INACTIVE',
  },
  {
    id: 'a5c5b832-088c-4220-a507-b5b184535c3f',
    name: 'Apple',
    quantity: 48856636279,
    state: 'UPCOMING',
  },
  {
    id: '4170b32a-e9c0-4822-b2a7-81aab51625af',
    name: 'Mango',
    quantity: 125426069604,
    state: 'ACTIVE',
  },
  {
    id: '7bd2984c-2da6-4567-8ed2-4542965c40cd',
    name: 'Lemon',
    quantity: 109314970672,
    state: 'ACTIVE',
  },
  {
    id: '66b98469-cf54-4f8d-b9bf-ff6a888edab2',
    name: 'Kiwi',
    quantity: 114027869935,
    state: 'UPCOMING',
  },
  {
    id: 'ee0e8f93-e9c2-4039-8ba8-b4ab2a899f6a',
    name: 'Watermelon',
    quantity: 195375309150,
    state: 'INACTIVE',
  },
  {
    id: '88e5af24-726c-4cbc-b240-c89d20cd0266',
    name: 'Peach',
    quantity: 228749120903,
    state: 'ACTIVE',
  },
  {
    id: '96f1319b-3106-4949-ae80-f61f5711acbd',
    name: 'Maracuja',
    quantity: 127008928254,
    state: 'INACTIVE',
  },
  {
    id: '58205bd1-d0b9-4641-9f0e-44a0566437f5',
    name: 'Lime',
    quantity: 246922784751,
    state: 'ACTIVE',
  },
  {
    id: '200949f4-1404-4c0d-b2b5-242385d67922',
    name: 'Pomegrenate',
    quantity: 98473295591,
    state: 'ACTIVE',
  },
  {
    id: 'caee91e1-8ec3-4c0a-8ea7-e35621a1fb5a',
    name: 'Cranberry',
    quantity: 139727530843,
    state: 'UPCOMING',
  },
  {
    id: '80aac484-b3e9-4f2a-980a-556479af47ae',
    name: 'Raspberry',
    quantity: 218871853404,
    state: 'INACTIVE',
  },
  {
    id: '66cd61ca-fb4d-475c-87b0-e204f5fade1c',
    name: 'Blackberry',
    quantity: 293278713861,
    state: 'ACTIVE',
  },
  {
    id: '331fb692-5476-4751-9f5c-ff47d4c42523',
    name: 'Mandarin',
    quantity: 276906705201,
    state: 'INACTIVE',
  },
]

export default function Page() {
  const searchParams = useSearchParams()
  const router = useRouter()
  let page = searchParams.get('page')
  if (page) {
    page = parseInt(page)
  } else {
    page = 1
  }

  return (
    <div>
      <Container>
        <PageHeader title="Table" subTitle="Table component with optional pagination" />
        <P>Features:</P>
        <br />
        <PSmall>- Uses URL params to navigate between pages / set current page</PSmall>
        <PSmall>- Accepts array to configure columns</PSmall>
        <PSmall>- Cells can be displayed by a custom render function</PSmall>
        <PSmall>- Each cell can be optionall aligned to left, center or right</PSmall>
        <PSmall>
          - Every cell of a specific column can take additional classes, for styling or other
          purposes
        </PSmall>
        <PSmall>- Dark / Light mode ready</PSmall>
        <PSmall>
          - Pagination can be enabled / disabled, in the latter case all items will be displayed
        </PSmall>
        <PSmall>
          - Current page and items per page can be passed on instantiation (when pagination is
          enabled)
        </PSmall>
        <PSmall>
          - Optional click entire row, or pass a custom render function to provide a specific click
          element
        </PSmall>
        <PSmall>- Ellipsis (...) are applied when text doesn't fit in a cell</PSmall>
        <br />
        <Separator />
        <br />
        <Table
          columns={tableColumns}
          data={data}
          pagination={true}
          router={router}
          rowsPerPage={5}
          rowKey="id"
          density="medium"
          rowSpacing="low"
          rowClick={(item, index) => alert('clicked item with id: ' + item.id)}
          page={page}
        />
        <br />
        <br />
        <CodeBlock code={codeExample} />
        <br />
        <br />
        <br />
        <PSmall>Table general props</PSmall>
        <br />
        <PropsTable
          items={[
            {
              propName: 'columns',
              type: 'Array',
              default: 'null',
              required: 'yes',
              description: 'An array defining the columns of the table.',
            },
            {
              propName: 'data',
              type: 'Array',
              default: 'null',
              required: 'yes',
              description: 'The items to be displayed in the table.',
            },
            {
              propName: 'pagination',
              type: 'Boolean',
              default: 'true',
              required: 'no',
              description:
                'If true, pagination will be enabled. If false, all items will be displayed.',
            },
            {
              propName: 'router',
              type: 'Component',
              default: 'null',
              required: 'no',
              description:
                'Only required when pagination is active. Used to navigate between pages.',
            },
            {
              propName: 'rowsPerPage',
              type: 'Number',
              default: '10',
              required: 'no',
              description:
                'The number of items to be displayed per page. Only used when pagination is enabled.',
            },
            {
              propName: 'rowClick',
              type: 'Boolean',
              default: 'null',
              required: 'no',
              description:
                'If true, the entire row will be clickable. An hover effect will be added.',
            },
            {
              propName: 'page',
              type: 'Number',
              default: '1',
              required: 'no',
              description: 'The current page. Only used when pagination is enabled.',
            },
            {
              propName: 'rowKey',
              type: 'String',
              default: 'null',
              required: 'yes',
              description: 'The key to be used as unique identifier for each row.',
            },
            {
              propName: 'density',
              type: 'String',
              default: 'low',
              required: 'no',
              description:
                "The density of the table. Can be 'low', 'medium' or 'high'. Defines vertical padding inside rows",
            },
            {
              propName: 'rowSpacing',
              type: 'String',
              default: 'low',
              required: 'no',
              description:
                "The spacing between rows. Can be 'none', 'low', 'medium' or 'high'. Defines vertical margin between rows",
            },
          ]}
        />
        <br />
        <br />
        <br />
        <PSmall>Table data items props</PSmall>
        <br />
        <PropsTable
          items={[
            {
              propName: 'label',
              type: 'String',
              default: 'null',
              required: 'yes',
              description: 'The label to be displayed in the table header.',
            },
            {
              propName: 'name',
              type: 'String',
              default: 'null',
              required: 'yes',
              description: 'The property name to get the value to display in the cell.',
            },
            {
              propName: 'key',
              type: 'String',
              default: '""',
              required: 'yes',
              description: 'The key to be used as unique identifier for each cell.',
            },
            {
              propName: 'addClass',
              type: 'String',
              default: '""',
              required: 'no',
              description: 'Additional classes to be added to every cell of this column.',
            },
            {
              propName: 'enableSort',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'If true, the column will be sortable.',
            },
            {
              propName: 'sortFunction',
              type: 'Function',
              default: 'null',
              required: 'no',
              description:
                'A custom sort function to be used when sorting this column. Otherwise falls to automatic sorting.',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeExample = String.raw`import { Table } from '@tempoplatform/tpds/components/table/Table'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


const searchParams = useSearchParams()
const router = useRouter()
let page = searchParams.get('page')
if (page) {
  page = parseInt(page)
} else {
  page = 1
}

<Table
  columns={tableColumns}
  data={data}
  pagination={true}
  rowsPerPage={5}
  router={router}
  rowKey="id"
  density="medium"
  rowSpacing="low"
  rowClick={(item, index) => alert('clicked item with id: ' + item.id)}
  page={page}
/>

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
    addClass: 'font-bold',
    enableSort: true,
  },
  {
    label: 'State',
    propName: 'state',
    key: 'state',
    enableSort: true,
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
    label: 'Quantity',
    propName: 'quantity',
    key: 'quantity',
    enableSort: true,
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

const getTagVariant = campaignState => {
  switch (campaignState) {
    case 'ACTIVE':
      return 'success'
    case 'INACTIVE':
      return 'warning'
    case 'UPCOMING':
      return 'info'
    default:
      return 'default'
  }
}

const data = [
  {
    id: 'f211addc-8fe3-4e73-b12c-ee754020b2a0',
    name: 'Orange',
    quantity: 162756867077,
    state: 'ACTIVE',
  },
  {
    id: 'e00411aa-8dfd-44c1-ae08-ffce5917d5d6',
    name: 'Grape',
    quantity: 93493788680,
    state: 'INACTIVE',
  },
  {
    id: '12ffef8a-7e52-4997-a2cb-e38d78904845',
    name: 'Banana',
    quantity: 205003717696,
    state: 'ACTIVE',
  },
  {
    id: '9c103098-b834-498a-adc8-12da99fc9538',
    name: 'Strawberry',
    quantity: 233559506538,
    state: 'ACTIVE',
  },
  {
    id: '9d99169e-93b0-4bf6-bca3-5ad4f7b62378',
    name: 'Pear',
    quantity: 120109071563,
    state: 'UPCOMING',
  },
  {
    id: '00791166-8b69-4a5e-8c96-8af69e430210',
    name: 'Pineapple',
    quantity: 262939354976,
    state: 'UPCOMING',
  },
  {
    id: 'b4796640-664c-41ae-a3c1-de5cf29be387',
    name: 'Blueberry',
    quantity: 104208500516,
    state: 'INACTIVE',
  },
  {
    id: 'a5c5b832-088c-4220-a507-b5b184535c3f',
    name: 'Apple',
    quantity: 48856636279,
    state: 'UPCOMING',
  },
  {
    id: '4170b32a-e9c0-4822-b2a7-81aab51625af',
    name: 'Mango',
    quantity: 125426069604,
    state: 'ACTIVE',
  },
  {
    id: '7bd2984c-2da6-4567-8ed2-4542965c40cd',
    name: 'Lemon',
    quantity: 109314970672,
    state: 'ACTIVE',
  },
  {
    id: '66b98469-cf54-4f8d-b9bf-ff6a888edab2',
    name: 'Kiwi',
    quantity: 114027869935,
    state: 'UPCOMING',
  },
  {
    id: 'ee0e8f93-e9c2-4039-8ba8-b4ab2a899f6a',
    name: 'Watermelon',
    quantity: 195375309150,
    state: 'INACTIVE',
  },
  {
    id: '88e5af24-726c-4cbc-b240-c89d20cd0266',
    name: 'Peach',
    quantity: 228749120903,
    state: 'ACTIVE',
  },
  {
    id: '96f1319b-3106-4949-ae80-f61f5711acbd',
    name: 'Maracuja',
    quantity: 127008928254,
    state: 'INACTIVE',
  },
  {
    id: '58205bd1-d0b9-4641-9f0e-44a0566437f5',
    name: 'Lime',
    quantity: 246922784751,
    state: 'ACTIVE',
  },
  {
    id: '200949f4-1404-4c0d-b2b5-242385d67922',
    name: 'Pomegrenate',
    quantity: 98473295591,
    state: 'ACTIVE',
  },
  {
    id: 'caee91e1-8ec3-4c0a-8ea7-e35621a1fb5a',
    name: 'Cranberry',
    quantity: 139727530843,
    state: 'UPCOMING',
  },
  {
    id: '80aac484-b3e9-4f2a-980a-556479af47ae',
    name: 'Raspberry',
    quantity: 218871853404,
    state: 'INACTIVE',
  },
  {
    id: '66cd61ca-fb4d-475c-87b0-e204f5fade1c',
    name: 'Blackberry',
    quantity: 293278713861,
    state: 'ACTIVE',
  },
  {
    id: '331fb692-5476-4751-9f5c-ff47d4c42523',
    name: 'Mandarin',
    quantity: 276906705201,
    state: 'INACTIVE',
  },
]`
