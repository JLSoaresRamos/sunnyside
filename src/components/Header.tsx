import { useState } from 'react';
import logo from '/images/logo.svg';
import { FloatNav } from './FloatNav';


type MenuItem = [string, string];

export const menuItems: MenuItem[] = [
  ['#', 'About'],
  ['#', 'Services'],
  ['#', 'Projects'],
  ['#', 'Contact']
];

export default function Header() {

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState(false)

  const handleItemClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <>
      <FloatNav isOpen={openMenu} />
      <section className='bg-hero-pattern-desktop bg-no-repeat bg-cover bg-bottom px-14 pt-14
                          max-md:pt-3 max-md:px-3'>
        <header className="flex justify-between items-center">
          <img src={logo} alt="Sunnyside logo" className='h-10 max-md:h-5' />
          <nav className='flex gap-10 max-md:hidden'>
            {menuItems.map(([href, label], index) => (
              <a
                key={index}
                className={`text-2xl font-normal p-5 rounded-full hover:bg-[#5dc9ff] ${index === clickedIndex ? 'bg-white text-black font-heading' : 'text-white'}`}
                href={href}
                onClick={() => handleItemClick(index)}
              >
                {label}
              </a>
              
            ))}
          </nav>
          <button className='max-md:block hidden' onClick={() => setOpenMenu(!openMenu)}>
            <svg  width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
          </button>
        </header>
        <div className='flex flex-col items-center mx-auto mt-[8%] gap-32
                        max-md:mt-[30%]'>
          <h1 className='text-5xl max-md:text-balance max-md:text-3xl font-heading text-neutral-white uppercase tracking-widest 
                        lg:text-6xl max-md:text-center'>
            We are creatives
          </h1>
          <svg width="36" height="200" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}
