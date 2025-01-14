import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../componentes/Header'; // Importar Header
import Footer from '../componentes/Footer'; // Importar Footer

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;