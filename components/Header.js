import React, { useState } from 'react';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <nav className="flex items-center">
        <img
          className="w-7 h-7"
          src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png"
        />
        <div className="text-white text-xs hidden sm:block ml-2">
          <a
            href="#"
            className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            Page 1
          </a>
          <a
            href="#"
            className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1"
          >
            Page 2
          </a>
          <a
            href="#"
            className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1"
          >
            Page 3
          </a>
          <a
            href="#"
            className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1"
          >
            Page 4
          </a>
        </div>
      </nav>
      <div className="w-8 h-8 cursor-pointer">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/6463553?s=400&u=538963e17ed013c039be01612c397b0b90c26ac1&v=4"
        />
      </div>
    </header>
  );
}
