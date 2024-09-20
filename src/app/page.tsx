import React from 'react';
import { Metadata } from "next";

import Navbar from '@/components/navbar';
import Introduction from '@/components/introduction';
import Expertise from '@/components/expertise';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Abhishek Shakya',
}

export default function Home() {

  return (
    <>
      <Navbar />
      <Introduction />
      <Expertise />
      <Projects />
      <Footer />
    </>
  );
}
