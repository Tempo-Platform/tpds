import PageHeader from '@/lib/components/PageHeader'
import Link from 'next/link'
import { P, PSmall, PTiny, H2, H4, H5 } from '@tpds/elements/typography'
import { Container, Separator } from '@tpds/elements/layout'
import Callout from '@tpds/components/callout'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader
          title='Typography'
          subTitle='Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency.'
        />
        <PSmall isMedium>Font-sans: Inter</PSmall>
        <br />
        <H2 isBold className='leading-tight'>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
        </H2>
        <br />
        <br />
        <br />
        <PSmall>Type weights</PSmall>
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-6'>
            <H4 className='py-4 font-light border-solid border-b-2 border-window'>Inter Light</H4>
            <H4 className='py-4 font-normal border-solid border-b-2 border-window'>Inter Regular</H4>
            <H4 className='py-4 font-medium border-solid border-b-2 border-window'>Inter Medium</H4>
            <H4 className='py-4 font-bold border-solid border-b-2 border-window'>Inter Bold</H4>
            <H4 className='py-4 font-black border-solid border-b-2 border-window'>Inter Black</H4>
          </div>
          <div className='grid col-span-12 md:col-span-6'>
            <H4 className='py-4 font-light border-solid border-b-2 border-window italic'>Inter Light Italic</H4>
            <H4 className='py-4 font-normal border-solid border-b-2 border-window italic'>Inter Regular Italic</H4>
            <H4 className='py-4 font-medium border-solid border-b-2 border-window italic'>Inter Medium Italic</H4>
            <H4 className='py-4 font-bold border-solid border-b-2 border-window italic'>Inter Bold Italic</H4>
            <H4 className='py-4 font-black border-solid border-b-2 border-window italic'>Inter Black Italic</H4>
          </div>
        </div>
        <br />
        <br />
        <br />
        <PSmall isMedium>Font-mono: SF Mono</PSmall>
        <br />
        <H2 isBold className='leading-tight font-mono'>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
        </H2>
        <br />
        <br />
        <PSmall>Type weights</PSmall>
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-6'>
            <H4 className='py-4 !font-mono border-solid border-b-2 border-window'>SF Mono Regular</H4>
            <H4 className='py-4 font-mono font-bold border-solid border-b-2 border-window'>SF Mono Bold</H4>
          </div>
          <div className='grid col-span-12 md:col-span-6'>
            <H4 className='py-4 font-mono border-solid border-b-2 border-window italic'>SF Mono Reg. Italic</H4>
            <H4 className='py-4 font-mono font-bold border-solid border-b-2 border-window italic'>
              SF Mono Bold Italic
            </H4>
          </div>
        </div>
        <br />
        <br />
        <Callout
          variant='info'
          title='Download'
          text={
            <span>
              Get access to our font pack in the <Link href='/downloads#typography'>downloads</Link> section.
            </span>
          }
        />
        <br />
        <br />
        <br />
        <br />
        <H5 isMedium>Weight helpers</H5>
        <Separator />
        <br />
        <br />
        <P>Use these font weights to change how thin or heavy the weight is for our font.</P>
        <br />
        <br />
        <br />
        <div className='grid grid-cols-12 gap-4 bg-window'>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>Example</PSmall>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>Description</PSmall>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>Transform</PSmall>
          </div>
        </div>
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-4'>
            <H4 isLight className='py-2 pl-3'>
              Aa
            </H4>
            <PTiny className='py-2 pl-3 font-medium'>
              Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
            </PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PTiny className='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>{'<H4 isLight>Aa</H4>'}</PSmall>
          </div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-4'>
            <H4 className='py-2 pl-3'>Aa</H4>
            <PTiny className='py-2 pl-3 font-medium'>
              Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
            </PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PTiny className='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>None (default)</PSmall>
          </div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-4'>
            <H4 isMedium className='py-2 pl-3'>
              Aa
            </H4>
            <PTiny className='py-2 pl-3 font-medium'>
              Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
            </PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PTiny className='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>{'<H4 isMedium>Aa</H4>'}</PSmall>
          </div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-4'>
            <H4 isBold className='py-2 pl-3'>
              Aa
            </H4>
            <PTiny className='py-2 pl-3 font-medium'>
              Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
            </PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PTiny className='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>{'<H4 isMedium>Aa</H4>'}</PSmall>
          </div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-4'>
            <H4 isExtraBold className='py-2 pl-3'>
              Aa
            </H4>
            <PTiny className='py-2 pl-3 font-medium'>
              Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
            </PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PTiny className='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>{'<H4 isExtraBold>Aa</H4>'}</PSmall>
          </div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid col-span-12 md:col-span-4'>
            <H4 isHeavy className='py-2 pl-3'>
              Aa
            </H4>
            <PTiny className='py-2 pl-3 font-medium'>
              Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
            </PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PTiny className='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
          </div>
          <div className='grid col-span-12 md:col-span-4'>
            <PSmall className='py-2 pl-3 font-medium'>{'<H4 isHeavy>Aa</H4>'}</PSmall>
          </div>
        </div>
        <br />
        <br />
      </Container>
    </div>
  )
}
