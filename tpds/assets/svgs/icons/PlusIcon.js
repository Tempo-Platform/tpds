/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'

function PlusIcon({...props}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="44"
			height="44"
			viewBox="0 0 44 44"
			tw="fill-current text-primary"
			{...props}
		>
			<path d="M0 0H44V44H0z" opacity="0.01" />
			<path d="M14 21H30V23H14z" />
			<path d="M23 14H39V16H23z" transform="rotate(90 23 14)" />
		</svg>
	);
}

export default PlusIcon;
