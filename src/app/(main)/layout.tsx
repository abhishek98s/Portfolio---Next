
import React from 'react';

import 'react-responsive-modal/styles.css';

import { AuthComponent } from "@/components/auth_component";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AuthComponent>
        {children}
        This is protected
      </AuthComponent>
    </>
  )
}
