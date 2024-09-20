'use client';

import React from 'react';

import Navbar from '@/components/navbar';
import Introduction from '@/components/introduction';
import Expertise from '@/components/expertise';
import Projects from '@/components/projects';

export default function IndexPage() {
    return (
        <>
            <Navbar />
            <Introduction />
            <Expertise />
            <Projects />
        </>
    );
}
