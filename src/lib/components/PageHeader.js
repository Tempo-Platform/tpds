import { P, H4 } from '../../tpds/elements/typography'
import { Separator } from '../../tpds/elements/layout'

const PageHeader = ({ title, subTitle }) => {
  if (!title) {
    throw new Error('PageHeader requires a title prop')
  }
  return (
    <div className="mt-20 mb-10 lg:mt-20 lg:mb-12">
      <H4 isBold>{title}</H4>
      {subTitle && <P className="my-0 text-tertiary">{subTitle}</P>}
      <Separator className="mt-10" />
    </div>
  )
}

export default PageHeader
