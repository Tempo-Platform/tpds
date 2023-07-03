/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled, css } from 'twin.macro'

const Grid = styled.div(() => [
  tw`w-full h-auto rounded-lg p-2`,
  tw`grid grid-cols-4 gap-2`,
  tw`bg-grey-dark-scale-600/10`,
])

const IconBox = styled.div(() => [
  tw`flex items-center justify-center cursor-pointer`,
  tw`!bg-grey-dark-scale-600/20 box-border`,
  tw`w-full aspect-square`,
  tw`rounded overflow-hidden`,
])

const Img = styled.img(() => [
  css`
    max-height: none;
  `,
])

function ThumbnailsRow({ images, props }) {
  return (
    <Grid {...props}>
      {images.map(image => (
        <IconBox
          onClick={image.callBack ? image.callBack : null}
          style={{
            background: `url(${image.url}) no-repeat center center`,
            backgroundSize: 'contain',
          }}
        />
      ))}
    </Grid>
  )
}

export default ThumbnailsRow
