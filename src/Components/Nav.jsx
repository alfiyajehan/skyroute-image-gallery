import React, { useState } from 'react';
import { Menu } from 'lucide-react'; 
import SideMenu from './SideMenu';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    { id: 1, name: "Log In" },
    { id: 2, name: "Sign Up" },
  ];

  return (
    <>
      <div className="w-full h-[4em] px-10 flex items-center justify-between bg-black text-white sticky top-0 z-10">
        <div className="flex font-[billy] text-4xl pl-0 md:pl-20 pt-6 items-center ">
          ResinDesign
        </div>

        <div className="flex items-center gap-14 pr-[3em] pt-5 font-[Times] ">
          {options.map((opt) => (
            <button
              key={opt.id}
              className="font-medium hidden sm:block text-white text-lg hover:text-gray-400 transition duration-200 hover:underline"
            >
              {opt.name}
            </button>
          ))}

          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} className="cursor-pointer hover:text-gray-400 transition duration-200" />
          </button>
        </div>
      </div>

      <SideMenu open={isMenuOpen} setOpen={setIsMenuOpen} />
    </>
  );
};

export default Nav;
