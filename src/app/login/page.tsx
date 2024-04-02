import '@/app/ui/styles/login.css';
import LoginBg from '../../../public/login-bg.png';
import Logo from '../../../public/logo.png';

import Image from 'next/image';


export default function Page() {
    return (
        <div className="font-sans text-gray-900 antialiased">
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container wb-white">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-5 p-0">
                                <Image 
                                    src={LoginBg}
                                    className="hidden md:block"
                                    alt="Login"
                                />      
                            </div>
                            <div className="col-lg-7 col-md-7 d-flex flex-column align-items-center justify-content-center">
                                <div className="col-lg-6 mb-3">
                                    <div className="d-flex justify-content-center py-4">
                                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                                            <Image 
                                                src={Logo}
                                                className="hidden md:block"
                                                alt="Logo"
                                            />                 
                                        </a>
                                    </div>
                                    
                                    <div className="card-body">
                                        <form className="row g-3" method="POST" action="">
                                            
                                            <div className="col-12">
                                                <label for="Email" className="form-label">Email</label>
                                                <div className="input-group">
                                                    <input id="username" className="form-control" placeholder="Username" type="text" name="username" value="" maxlength="50" autofocus />
                                                </div>
                                            </div>
                                            
                                            <div className="col-12">
                                                <label for="password" className="form-label">Password</label>
                                                <input id="password" className="form-control" type="password" name="password" autocomplete="current-password" placeholder="Password" />
                                            </div>

                                            <div className="col-12 text-center">
                                                <button className="btn btn-primary w-50" type="submit">Sign</button>
                                            </div>
                                            <div className="col-12 text-center">
                                                <p className="Forgot mb-0"><a href="">Forgot Password?</a></p>
                                            </div>                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}