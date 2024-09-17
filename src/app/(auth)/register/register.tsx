"use client"

import React from 'react';

import  { Toaster } from 'react-hot-toast';
import { toast_error_option, toast_sucess_option } from '@/utils/toast';


export default function RegisterForm() {

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    success: { ...toast_sucess_option },
                    error: { ...toast_error_option },
                }}
            />
            <section>
              This is regester page
            </section>
        </>
    )
}
