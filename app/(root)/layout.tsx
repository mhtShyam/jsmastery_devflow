import React from "react";

import NavBar from "@/components/navigation/navBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default RootLayout;
