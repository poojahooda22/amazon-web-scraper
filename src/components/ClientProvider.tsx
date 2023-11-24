'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast';

export default function ClientProvider({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* // This is the toast container */}
            <Toaster />
            {children}
        </>
    );
};