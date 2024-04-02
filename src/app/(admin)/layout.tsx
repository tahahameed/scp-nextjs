// 'use client';
import { Suspense, useEffect } from "react";

import Header from "@/app/ui/layout/header";
import SideNav from '@/app/ui/layout/sidebar';
import {hideLoading} from '@/app/ui/scripts/common';
import Loading from "./loading";

export default function Layout({ children }: { children: React.ReactNode }) {
    // useEffect(() => {
    //     if (document.readyState != 'loading')
    //       hideLoading();
    //     else
    //       document.addEventListener('DOMContentLoaded', hideLoading);
    //   }, []);

    return (
        <>
            {/* <div className="loadding">
                <span className="loader"></span>
            </div> */}
            <div className="min-h-screen bg-gray-100">
                <SideNav />   
                <main id="main" className="main">
                    <Header title="abc" />
                    <Suspense fallback={<Loading />}>
                        <div className="">{children}</div>

                    </Suspense>

                    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>    
                </main>             
            </div>
        </>
    );
  }