import React from 'react';
import { X } from 'lucide-react';

const SideMenu = ({ open, setOpen }) => {
  const navOptions = ['Home', 'Categories', 'Shop', 'Gallery', 'About', 'Contact Us'];

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white pl-4 text-zinc-900 font-[] z-50 transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute top-5 right-5 text-black"
      >
        <X size={30} />
      </button>

      <div className="p-6 mt-12">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border-2 border-black rounded-lg text-black focus:outline-none"
        />
      </div>

      <ul className="flex flex-col gap-6 px-6 mt-4 text-lg">
        {navOptions.map((item, index) => (
          <li key={index} className="hover:underline font-[billy] text-4xl cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
