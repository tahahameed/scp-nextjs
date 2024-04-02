// 'use client';

import '@/app/ui/styles/bootstrap.min.css';
import '@/app/ui/styles/bootstrap-icons/bootstrap-icons.css';
import '@/app/ui/styles/boxicons/css/boxicons.min.css';
import '@/app/ui/styles/quill/quill.snow.css';
import '@/app/ui/styles/quill/quill.bubble.css';
import '@/app/ui/styles/remixicon/remixicon.css';

import '@/app/ui/styles/custom.css';
import '@/app/ui/styles/style.css';

import {openSans, nunito, poppins} from '@/app/ui/styles/fonts/fonts';
// import { useState } from 'react';

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  // var [sideBar, setSideBar] = useState(true);
  
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>{children}</body>
    </html>
  );
}
