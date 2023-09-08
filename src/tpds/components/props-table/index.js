import React from 'react'
import { H6, P, PTiny } from '../../elements/typography'

const lastPVariants = {
  default: 'col-span-4',
  skip1Columns: 'col-span-6',
  skip2Columns: 'col-span-8',
  skip3Columns: 'col-span-10',
}

const getLastPVariant = (skipColumn2, skipColumn3, skipColumn4) => {
  let skipColumnsNum = 0
  if (skipColumn2) skipColumnsNum++
  if (skipColumn3) skipColumnsNum++
  if (skipColumn4) skipColumnsNum++
  if (skipColumnsNum === 0) return 'default'

  return `skip${skipColumnsNum}Columns`
}
function PropsTable({
  title = 'Props',
  items = null,
  omitTitle = false,
  col1Name = 'Prop Name',
  col2Name = 'Type',
  col3Name = 'Default',
  col4Name = 'Required',
  col5Name = 'Description',
  param1Name = 'propName',
  param2Name = 'type',
  param3Name = 'default',
  param4Name = 'required',
  param5Name = 'description',
  skipColumn2 = false,
  skipColumn3 = false,
  skipColumn4 = false,
}) {
  const lastPClass = lastPVariants[getLastPVariant(skipColumn2, skipColumn3, skipColumn4)]
  return (
    <div>
      {!omitTitle && <H6>{title || 'Props'}</H6>}
      {!omitTitle && <br />}
      <span className="grid grid-cols-12 gap-4 pb-2 mb-8 border-b border-grey-light-scale-500 dark:border-grey-light-scale-900">
        <P isBold className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
          {col1Name}
        </P>
        {!skipColumn2 && (
          <P isBold className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
            {col2Name}
          </P>
        )}
        {!skipColumn3 && (
          <P isBold className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
            {col3Name}
          </P>
        )}
        {!skipColumn4 && (
          <P isBold className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
            {col4Name}
          </P>
        )}
        <P isBold className={lastPClass}>
          {col5Name}
        </P>
      </span>
      {items.map((item, index) => (
        <span className="grid grid-cols-12 gap-4 mb-4" key={index}>
          <PTiny className="col-span-2 break-words" isBold>
            {item[param1Name]}
          </PTiny>
          {!skipColumn2 && (
            <P className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
              {item[param2Name]}
            </P>
          )}
          {!skipColumn3 && (
            <P className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
              {item[param3Name]}
            </P>
          )}
          {!skipColumn4 && (
            <P className="whitespace-nowrap text-ellipsis overflow-hidden col-span-2">
              {item[param4Name]}
            </P>
          )}
          <P className={lastPClass}>{item[param5Name]}</P>
        </span>
      ))}
    </div>
  )
}

export default PropsTable
