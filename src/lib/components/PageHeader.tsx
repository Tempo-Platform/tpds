import { P, H4 } from '@tpds/elements/typography'
import { Separator } from '@tpds/elements/layout'

const PageHeader = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  if (!title) {
    throw new Error('PageHeader requires a title prop')
  }
  return (
    <div className="pt-20 pb-10 lg:pt-20 lg:pb-12">
      <H4 isBold>{title}</H4>
      {subTitle && <P className="my-0 text-secondary">{subTitle}</P>}
      <Separator className="mt-10" />
    </div>
  )
}

export default PageHeader
