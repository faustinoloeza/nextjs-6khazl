import React, { useState } from 'react';
import Side from './SideMenu';
import Header from './Header';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex w-full h-screen">
        <Side />

        {children}
      </main>
    </>
  );
};
