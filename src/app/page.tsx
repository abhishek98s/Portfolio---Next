import React from 'react';
import { Metadata } from "next";

import IndexPage from "./(main)/home/home";

export const metadata: Metadata = {
  title: 'Abhishek Shakya',
}

export default function Home() {

  return (
    <>
      <IndexPage />
    </>
  );
}
