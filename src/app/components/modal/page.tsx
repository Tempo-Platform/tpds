'use client'

import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P, PSmall } from '@tpds/elements/typography'
import Modal from '@tpds/components/modal'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import PropsTable from '@tpds/components/props-table'
import { Button } from '@tpds/elements/buttons'

export default function Page() {
  const [error, setError] = React.useState(false)
  const errorModal = (
    <Modal
      showOpen={error}
      title='The request failed'
      description='The server rejected the request'
      content={
        <div className='flex flex-col gap-y-4'>
          <PSmall className='leading-normal'>
            An error ocurred while submitting the form. Please review your data or contact support.
          </PSmall>
        </div>
      }
      options={[
        {
          label: 'Return to form',
          variant: 'info',
          callBack: () => {
            setError(false)
          },
        },
      ]}
    />
  )

  return (
    <div>
      <Container>
        <PageHeader title='Modal' subTitle='Modal dialog component' />
        <P>Click the "Show modal" button to trigger the modal.</P>
        <br />
        <Button variant='info' onClick={() => setError(true)}>
          Show modal
        </Button>
        <br />
        {errorModal}
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'showOpen',
              type: 'Boolean',
              default: 'false',
              required: 'yes',
              description: 'The title of the modal',
            },
            {
              propName: 'title',
              type: 'String',
              default: "' '",
              required: 'yes',
              description: 'The title of the modal',
            },
            {
              propName: 'description',
              type: 'String',
              default: '',
              required: 'no',
              description: 'Subtitle to display under the title',
            },
            {
              propName: 'content',
              type: 'JSX',
              default: 'null',
              required: 'no',
              description: 'Custom content to display inside the modal.',
            },
            {
              propName: 'options',
              type: 'Array',
              default: 'Close button',
              required: 'no',
              description:
                'The buttons to render at the bottom of the modal. If not passed, a close button will be rendered.',
            },
            {
              propName: 'clickElement',
              type: 'JSX Element',
              default: 'null',
              required: 'no',
              description:
                "The element to click to open the modal. If not passed, the modal will open if 'showOpen' is true.",
            },
            {
              propName: 'maxWidth',
              type: 'String | Number',
              default: '500px',
              required: 'no',
              description: 'The maximum width of the modal. Can be a string or a number.',
            },
            {
              propName: 'overlayProps',
              type: 'Object',
              default: 'null',
              required: 'no',
              description: 'Any props to pass to the overlay element.',
            },
            {
              propName: 'titleProps',
              type: 'Object',
              default: 'null',
              required: 'no',
              description: 'Any props to pass to the title element.',
            },
            {
              propName: 'descriptionProps',
              type: 'Object',
              default: 'null',
              required: 'no',
              description: 'Any props to pass to the description element.',
            },
            {
              propName: 'dialogOnClose',
              type: 'Function',
              default: 'null',
              required: 'no',
              description: 'A function to call when the modal is closed.',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import Modal from "@tempoplatform/tpds/components/modal"
import { Button } from '@tempoplatform/tpds/elements/buttons'


export default function Page() {
  const [error, setError] = React.useState(false)

  const errorModal = (
    <Modal
      showOpen={error}
      title="The request failed"
      description="The server rejected the request"
      content={
        <div className="flex flex-col gap-y-4">
          <PSmall className="leading-normal">
            An error ocurred while submitting the form. Please review your data or contact support.
          </PSmall>
        </div>
      }
      options={[
        {
          label: 'Return to form',
          variant: 'info',
          callBack: () => {
            setError(false)
          },
        },
      ]}
    />
  )
  
  return (
    <>
      <Button variant="info" onClick={() => setShowModal(true)}>
        Show modal
      </Button>
      <br />
      {errorModal}
    </>
  )
}`
