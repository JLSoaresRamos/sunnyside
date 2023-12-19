import { useState } from "react";
import { menuItems } from "./Header"


type FloatNavProps = {
    isOpen: boolean
}

export function FloatNav({ isOpen }: FloatNavProps) {

    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
      setClickedIndex(index);
    };

    return(
        <div className={`absolute flex-col top-14 right-6 w-[86%] hidden ${isOpen && 'max-md:flex'}`}>
            <div className="w-0 h-0 border-x-[25px] self-end border-x-transparent border-t-[25px] border-t-white rotate-[315deg] -mb-[1.5%]"></div>
            <nav className="flex flex-col items-center gap-4 p-10 bg-white text-neutral-grayishBlue">
                {menuItems.map(([href, label], index) => (
                    <a
                        key={index}
                        className={`font-bold p-5 rounded-full ${index === clickedIndex ? 'bg-primary-yellow text-neutral-veryDarkDesaturatedBlue font-heading' : 'text-neutral-darkGrayishBlue'}`}
                        href={href}
                        onClick={() => handleItemClick(index)}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    )
}