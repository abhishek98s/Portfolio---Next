import React from 'react';
import { Metadata } from "next";

import IndexPage from "./(main)/home/home";
import { AuthComponent } from "@/components/auth_component";

export const metadata: Metadata = {
  title: 'Title',
}

export default function Home() {

  return (
    <>
      <AuthComponent>
        <IndexPage />
      </AuthComponent>
    </>
  );
}
