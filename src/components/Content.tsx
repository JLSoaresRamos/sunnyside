import egg from '/images/desktop/image-transform.jpg';
import cup from '/images/desktop/image-stand-out.jpg';

import eggMobile from '/images/mobile/image-transform.jpg';
import cupMobile from '/images/mobile/image-stand-out.jpg';

import CustomLink from './CustomLink';

export default function Content() {

  return (
    <section className="grid grid-cols-2 grid-rows-3 items-center text-neutral-darkGrayishBlue text-lg
                        max-md:grid-cols-1 max-md:grid-rows-[repeat(4,_minmax(0,_auto))_repeat(2,_minmax(0,_30rem))] ">      
        {/* Primeira Seção */}
        <section className="flex flex-col gap-4 p-20 
                            max-md:text-center max-md:items-center max-md:py-6 max-md:px-5">
          <h2 className="font-heading text-4xl text-neutral-veryDarkDesaturatedBlue 
                         max-md:text-3xl">
            Transform your brand
          </h2>
          <p className='max-md:text-balance max-md:text-lg'>
            We are a full-service creative agency specializing in helping brands
            grow fast. We engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <CustomLink href='#'/>
        </section>
        <figure className="h-full w-full max-md:row-start-1">
          <img src={egg} alt="An egg with yellow background" className="h-full w-full max-md:hidden" />
          <img src={eggMobile} alt="An egg with yellow background" className="h-full w-full hidden max-md:block" />
        </figure>

        {/* Segunda Seção */}
        <figure className="h-full w-full">
          <img src={cup} alt="A cup with pink background" className="h-full w-full max-md:hidden" />
          <img src={cupMobile} alt="An egg with yellow background" className="h-full w-full hidden max-md:block" />
        </figure>
        <section className="flex flex-col gap-4 p-20 
                            max-md:text-center max-md:items-center max-md:py-6 max-md:px-5">
          <h2 className="font-heading text-4xl text-neutral-veryDarkDesaturatedBlue
                         max-md:text-3xl">
            Stand out to the right audience
          </h2>
          <p className='max-md:text-balance max-md:text-lg'>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and extend
            your brand in digital places.
          </p>
          <CustomLink href='#' type='red'/>
        </section>

        {/* Terceira Seção */}
        <section className="h-full w-full pb-16 flex flex-col items-center justify-end bg-top bg-no-repeat bg-contain relative text-primary-darkDesaturatedCyan
                            md:bg-cherry max-md:bg-cherryMobile max-md:bg-cover">
          <div className="flex flex-col gap-2 text-center max-w-xs">
            <h2 className='font-heading lg:text-2xl'>Graphic Design</h2>
            <p className='text-balance'>
              Great design makes you memorable. We deliver artwork that underscores
              your brand message and captures potential clients' attention.
            </p>
          </div>
        </section>
        <section className="h-full w-full pb-16 flex flex-col items-center justify-end bg-top bg-no-repeat bg-contain relative text-primary-darkBlue
                            md:bg-orange max-md:bg-orangeMobile max-md:bg-cover">
          <div className="flex flex-col gap-2 text-center max-w-xs">
            <h2 className='font-heading lg:text-2xl'>Photography</h2>
            <p className='text-balance'>
                Increase your credibility by getting the most
                stunning, high-quality photos that improve your
                business image.
            </p>
          </div>
        </section>
    </section>
  );
}
