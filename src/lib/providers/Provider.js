'use client';

import KeenProvider from '@/context/Context';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <KeenProvider>
            {children}
        </KeenProvider>

    );
};

export default Providers;