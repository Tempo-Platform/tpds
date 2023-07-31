export const breadcrumbs = 'temporarily disabled'

// import React from 'react'
// import tw, { css, styled } from 'twin.macro'
// import { P, PSmall } from '../../elements/typography'
// import { ItemsRow } from '../../elements/layout'
// import { Button } from '../../elements/buttons'
// import HomeIcon from '../../assets/svgs/icons/Home'

// function BreadcrumbsBar({ links, linkClass, buttons, history }) {
//   const LinkClass = linkClass
//   return (
//     <BreadcrumbsBarRoot>
//       {links && <HomeIcon tw="fill-current text-primary" />}
//       {links && <ChevronRight />}
//       {links && (
//         <LinksRow>
//           {links.map((link, index) => {
//             return (
//               <span key={link.url + index} tw="flex items-center">
//                 {index !== 0 && <P className="divider">/</P>}
//                 <LinkClass to={link.url} href={link.url}>
//                   <PSmall tw="flex select-none cursor-pointer focus:outline-none font-medium text-tertiary">
//                     {link.label}
//                   </PSmall>
//                 </LinkClass>
//               </span>
//             )
//           })}
//         </LinksRow>
//       )}
//       {buttons && (
//         <div style={{ margin: '0 auto', width: '696px' }}>
//           <ItemsRow>
//             {buttons.map((button, index) => {
//               return (
//                 <LinkClass key={button.url + index} to={button.url} href={button.url}>
//                   {button.url === history.pathname ? (
//                     <Button isSuccess isSmall>
//                       {button.label}
//                     </Button>
//                   ) : (
//                     <Button isSmall>{button.label}</Button>
//                   )}
//                 </LinkClass>
//               )
//             })}
//           </ItemsRow>
//         </div>
//       )}
//     </BreadcrumbsBarRoot>
//   )
// }

// export default BreadcrumbsBar

// const BreadcrumbsBarRoot = styled.div(({ isUppercase, isDisabled }) => [
//   tw`flex w-full relative`,
//   tw`items-center`,
//   tw`relative py-2.5 px-4`,
//   tw`border-b border-body`,
//   css`
//     a.active {
//       ${tw`text-green`}
//     }
//     .home-icon {
//       ${tw`relative top-[-1px]`}
//     }
//     .divider {
//       ${tw`text-sm text-tertiary`}
//       display: inline;
//       line-height: 100%;
//     }
//     .inner-chevron-right,
//     .divider {
//       ${tw`mx-[10px]`}
//     }
//   `,
// ])

// const LinksRow = styled.div(() => [tw`flex items-center`])

// function ChevronRight() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="5"
//       height="9"
//       fill="none"
//       viewBox="0 0 5 9"
//       className="inner-chevron-right"
//     >
//       <path
//         fill="#788187"
//         d="M1.086.562C.876.328.524.328.289.54c-.234.211-.234.563-.023.797l3 3.164-3 3.187c-.211.235-.211.586.023.797.235.211.586.211.797-.023l3.375-3.563a.665.665 0 00.164-.398c0-.117-.07-.258-.164-.375L1.086.562z"
//       ></path>
//     </svg>
//   )
// }
