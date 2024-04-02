'use client';

import Image from "next/image";
import ProfileImg from '../../../../public/profile-img.jpg';

export default function Header({title}) {
    function toggleSideBar() {
        document.body.classList.toggle('toggle-sidebar');
    }
    
    return (
        <>
        
            <div className="pagetitle">    
                <div className="d-flex">
                    <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSideBar}></i> <h5 className="card-title">{title}</h5>
                </div>      
                <div>
                    <ul>
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <Image src={ProfileImg}
                                    width={30}
                                    alt="User Picture" className="rounded-circle"/>
                            {/* <ProfileImg /> */}
                            {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"> */}
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                Username    
                            </span>
                            </a>
                
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">                
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        

                                    </>
            
    )
}