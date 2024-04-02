'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SidebarLoginBg from '../../../../public/login-bg.svg';

export default function Sidebar() {
    const pathname = usePathname();
    let [menu, setMenu] = useState('');
    
    return (
    <>
        <Link href="/" className="logo d-flex align-items-center">
            <SidebarLoginBg />
        </Link>
        <aside id="sidebar" className="sidebar">   
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link 
                        href="" 
                        className={`nav-link ${['/dashboard', '/detailed-stats', '/search-detailed-stats'].includes(pathname) ? '' : menu === 'dashboard' ? '' : 'collapsed'}`} 
                        data-bs-target="#detailed-stats-nav" 
                        data-bs-toggle="collapse" 
                        aria-expanded={menu === 'dashboard' ? true : false}
                        onClick={() => setMenu('dashboard')}
                    >
                        <div className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                <g clipPath="url(#clip0_1503_422)">
                                    <path d="M10.2169 4.45668C10.1588 4.40105 10.0814 4.37 10.0009 4.37C9.92044 4.37 9.84307 4.40105 9.78491 4.45668L2.59351 11.3266C2.56296 11.3558 2.53867 11.3909 2.52208 11.4298C2.5055 11.4687 2.49697 11.5105 2.49702 11.5528L2.49585 18.0004C2.49585 18.3319 2.62755 18.6499 2.86197 18.8843C3.09639 19.1187 3.41433 19.2504 3.74585 19.2504H7.49975C7.66551 19.2504 7.82449 19.1846 7.9417 19.0674C8.05891 18.9502 8.12475 18.7912 8.12475 18.6254V13.3129C8.12475 13.23 8.15768 13.1506 8.21628 13.092C8.27489 13.0333 8.35437 13.0004 8.43725 13.0004H11.5623C11.6451 13.0004 11.7246 13.0333 11.7832 13.092C11.8418 13.1506 11.8748 13.23 11.8748 13.3129V18.6254C11.8748 18.7912 11.9406 18.9502 12.0578 19.0674C12.175 19.1846 12.334 19.2504 12.4998 19.2504H16.2521C16.5836 19.2504 16.9016 19.1187 17.136 18.8843C17.3704 18.6499 17.5021 18.3319 17.5021 18.0004V11.5528C17.5021 11.5105 17.4936 11.4687 17.477 11.4298C17.4605 11.3909 17.4362 11.3558 17.4056 11.3266L10.2169 4.45668Z"/>
                                    <path d="M19.1764 10.0383L16.2545 7.24302V3.00122C16.2545 2.83546 16.1887 2.67649 16.0715 2.55928C15.9543 2.44207 15.7953 2.37622 15.6295 2.37622H13.7545C13.5888 2.37622 13.4298 2.44207 13.3126 2.55928C13.1954 2.67649 13.1295 2.83546 13.1295 3.00122V4.25122L10.8671 2.08794C10.6553 1.87388 10.3405 1.75122 10.0003 1.75122C9.66119 1.75122 9.34713 1.87388 9.13541 2.08833L0.826821 10.0375C0.583853 10.2719 0.553384 10.6575 0.774478 10.9114C0.829998 10.9755 0.897978 11.0276 0.974282 11.0646C1.05059 11.1016 1.13362 11.1226 1.21832 11.1265C1.30303 11.1304 1.38763 11.117 1.46699 11.0871C1.54635 11.0572 1.61881 11.0115 1.67995 10.9528L9.78541 3.20747C9.84357 3.15184 9.92095 3.12079 10.0014 3.12079C10.0819 3.12079 10.1593 3.15184 10.2174 3.20747L18.3237 10.9528C18.4431 11.0673 18.603 11.1298 18.7685 11.1266C18.9339 11.1233 19.0913 11.0547 19.2061 10.9356C19.446 10.6872 19.426 10.277 19.1764 10.0383Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1503_422">
                                    <rect width="20" height="20" transform="translate(-0.000244141 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>  
                        <span>Dashboard</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    
                    <ul 
                        id="detailed-stats-nav" 
                        className={`nav-content collapse ${['/dashboard', '/detailed-stats', '/search-detailed-stats'].includes(pathname) || menu === 'dashboard' ? 'show' : ''}`}
                        data-bs-parent="#sidebar-nav" >
                        <li className={`${pathname === '/dashboard' ? 'active' : ''}`}>
                            <Link href="dashboard">
                                <i className="bi bi-circle"></i><span>Summary Stats</span>
                            </Link>
                        </li>
                        <li className={`${pathname === '/detailed-stats' ? 'active' : ''}`}>
                            <Link href="detailed-stats">
                                <i className="bi bi-circle"></i><span>Detailed Stats</span>
                            </Link>
                        </li>
                        <li className={`${pathname === '/search-detailed-stats' ? 'active' : ''}`}>
                            <Link href="search-detailed-stats">
                                <i className="bi bi-circle"></i><span>Search</span>
                            </Link>
                        </li>
                    </ul>
                </li> 

                <li className="nav-item">
                    <Link 
                        href="#" 
                        className={`nav-link ${['/active-causelist', '/search-communication'].includes(pathname) ? '' : menu === 'communication' ? '' : 'collapsed'}`} 
                        data-bs-target="#components-nav" 
                        data-bs-toggle="collapse" 
                        aria-expanded={menu === 'communication' ? true : false}
                        onClick={() => setMenu('communication')}
                    >
                        <div className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 20" fill="none">
                            <path d="M9.80005 8.64003C9.80005 9.43189 9.16963 10.0801 8.39998 10.0801H3.50005C2.73019 10.0801 2.09998 9.43189 2.09998 8.64003V3.60011C2.09998 2.80825 2.73019 2.16003 3.50005 2.16003H8.39998C9.16963 2.16003 9.80005 2.80825 9.80005 3.60011V8.64003Z" />
                            <path d="M9.80005 17.9999C9.80005 18.7918 9.16963 19.44 8.39998 19.44H3.50005C2.73019 19.44 2.09998 18.7918 2.09998 17.9999V12.96C2.09998 12.1684 2.73019 11.5201 3.50005 11.5201H8.39998C9.16963 11.5201 9.80005 12.1684 9.80005 12.96V17.9999Z" />
                            <path d="M14.7 2.16003H11.2V3.60011H14.7V2.16003Z"/>
                            <path d="M16.1001 7.92004H11.2V9.36012H16.1001V7.92004Z"/>
                            <path d="M18.9 5.03992H11.2V6.47999H18.9V5.03992Z"/>
                            <path d="M18.9 11.5201H11.2V12.96H18.9V11.5201Z"/>
                            <path d="M16.1001 17.28H11.2V18.7201H16.1001V17.28Z"/>
                            <path d="M14.7 14.4H11.2V15.8399H14.7V14.4Z"/>
                            </svg>
                        </div>
                        <span>Communication</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul 
                        id="components-nav" 
                        className={`nav-content collapse ${['/active-causelist', '/search-communication'].includes(pathname) || menu === 'communication' ? 'show' : '' }`} 
                        data-bs-parent="#sidebar-nav" >
                        <li className={`${pathname === '/active-causelist' ? 'active' : ''}`}>
                            <a href="active-causelist">
                            <i className="bi bi-circle"></i><span>Active Cause Lists</span>
                            </a>
                        </li>
                        <li className={`${pathname === '/search-communication' ? 'active' : ''}`}>
                            <a href="search-communication">
                            <i className="bi bi-circle"></i><span>Search</span>
                            </a>
                        </li>            
                    </ul>
                </li> 
                <li className="nav-item">
                    <Link
                        href="fir" 
                        className={`nav-link ${pathname === '/fir' ? '' : 'collapsed'} `}
                    >
                        <div className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14 14" >
                            <g clipPath="url(#clip0_1622_340)">
                            <path d="M13.8086 12.1051L11.0824 9.37891C10.9594 9.25586 10.7926 9.1875 10.6176 9.1875H10.1719C10.9266 8.22227 11.375 7.0082 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.0082 11.375 8.22227 10.9266 9.1875 10.1719V10.6176C9.1875 10.7926 9.25586 10.9594 9.37891 11.0824L12.1051 13.8086C12.3621 14.0656 12.7777 14.0656 13.032 13.8086L13.8059 13.0348C14.0629 12.7777 14.0629 12.3621 13.8086 12.1051ZM5.6875 9.1875C3.7543 9.1875 2.1875 7.62344 2.1875 5.6875C2.1875 3.7543 3.75156 2.1875 5.6875 2.1875C7.6207 2.1875 9.1875 3.75156 9.1875 5.6875C9.1875 7.6207 7.62344 9.1875 5.6875 9.1875Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_1622_340">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <span>FIR</span>
                    </Link>
                </li> 
                
                <li className="nav-item">
                    <Link
                        href="/case-institution" 
                        className={`nav-link ${pathname === '/case-institution' ? '' : 'collapsed'}`}
                    >
                        <div className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 22 20" fill="none">
                            <path d="M4.17999 2.91205V19.4881C4.17999 19.6663 4.24953 19.8372 4.3733 19.9632C4.49708 20.0893 4.66495 20.1601 4.83999 20.1601H17.16C17.335 20.1601 17.5029 20.0893 17.6267 19.9632C17.7505 19.8372 17.82 19.6663 17.82 19.4881V7.39205C17.8198 7.21389 17.7502 7.04307 17.6264 6.91717L13.2264 2.45509C13.1187 2.34584 12.9773 2.2778 12.826 2.26245H12.7336H12.6676H4.83999C4.6687 2.26235 4.50407 2.33007 4.38091 2.45129C4.25775 2.57251 4.1857 2.73774 4.17999 2.91205ZM13.42 4.53157L15.5738 6.72005H13.42V4.53157ZM5.49999 3.58405H12.1V7.39205C12.1 7.57028 12.1695 7.7412 12.2933 7.86723C12.4171 7.99325 12.5849 8.06405 12.76 8.06405H16.5V18.8161H5.49999V3.58405Z" />
                            <path d="M11.44 9.40796H7.03998V10.752H11.44V9.40796Z" />
                            <path d="M14.96 12.5439H7.03998V13.8879H14.96V12.5439Z" />
                            <path d="M14.96 15.6799H7.03998V17.0239H14.96V15.6799Z" />
                            </svg>
                        </div>
                        <span>Case Institution</span>
                    </Link>
                </li>  
                
                <li className="nav-item">
                    <Link 
                        href="#" 
                        className={`nav-link ${pathname === '/auto-fixation' ? '' : 'collapsed'}`} 
                        data-bs-target="#components-nav-fixation" 
                        data-bs-toggle="collapse" 
                        aria-expanded={menu === 'auto-fixation' ? true : false}
                        onClick={() => setMenu('auto-fixation')}
                    >
                        <div className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 20" fill="none">
                            <path d="M9.80005 8.64003C9.80005 9.43189 9.16963 10.0801 8.39998 10.0801H3.50005C2.73019 10.0801 2.09998 9.43189 2.09998 8.64003V3.60011C2.09998 2.80825 2.73019 2.16003 3.50005 2.16003H8.39998C9.16963 2.16003 9.80005 2.80825 9.80005 3.60011V8.64003Z" />
                            <path d="M9.80005 17.9999C9.80005 18.7918 9.16963 19.44 8.39998 19.44H3.50005C2.73019 19.44 2.09998 18.7918 2.09998 17.9999V12.96C2.09998 12.1684 2.73019 11.5201 3.50005 11.5201H8.39998C9.16963 11.5201 9.80005 12.1684 9.80005 12.96V17.9999Z" />
                            <path d="M14.7 2.16003H11.2V3.60011H14.7V2.16003Z"/>
                            <path d="M16.1001 7.92004H11.2V9.36012H16.1001V7.92004Z"/>
                            <path d="M18.9 5.03992H11.2V6.47999H18.9V5.03992Z"/>
                            <path d="M18.9 11.5201H11.2V12.96H18.9V11.5201Z"/>
                            <path d="M16.1001 17.28H11.2V18.7201H16.1001V17.28Z"/>
                            <path d="M14.7 14.4H11.2V15.8399H14.7V14.4Z"/>
                            </svg>
                        </div>
                        <span>Auto Fixation</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul 
                        id="components-nav-fixation" 
                        className={`nav-content collapse ${['auto-fixation', 'view-case-ranking'].includes(pathname) || menu === 'auto-fixation' ? 'show' : ''}`} 
                        data-bs-parent="#sidebar-nav" >
                        <li className={`${pathname === '/auto-fixation' ? 'active' : ''}`}>
                            <Link href="auto-fixation">
                                <i className="bi bi-circle"></i><span>Prepare ACL</span>
                            </Link>
                        </li>
                        <li className={`${pathname === '/view-case-ranking' ? 'active' : ''}`}>
                            <Link href="view-case-ranking">
                                <i className="bi bi-circle"></i><span>View Ranking</span>
                            </Link>
                        </li>
                
                    </ul>
                </li>
            </ul>

        </aside>
    </>
    )
}