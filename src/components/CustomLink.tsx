import { FC, ReactNode } from 'react';

interface CustomLinkProps {
  href: string;
  type?: 'yellow' | 'red';
  children?: ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ type = 'yellow', children = 'Learn more', href }) => {
  const customBorderBottom = (
    <div className={`opacity-0 group-hover:opacity-100 transition duration-100 w-full -mt-2 ${type === 'yellow' ? 'border-primary-softYellow' : 'border-primary-softOrange'}`}>
      <div className={`border-4 rounded-full w-full ${type === 'yellow' ? 'border-primary-yellow' : 'border-primary-softRed'}`}></div>
    </div>
  );

  return (
    <a href={href} className="group w-fit font-heading text-neutral-veryDarkDesaturatedBlue">
      {children}
      {customBorderBottom}
    </a>
  );
};

export default CustomLink;
