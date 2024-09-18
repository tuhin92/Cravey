import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const NavLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/foods">Foods</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>
    return (
        <div style={{ fontFamily: 'Josefin Sans, sans-serif' }} className="navbar max-w-7xl mx-auto rounded-b-2xl bg-[#0393b7] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {NavLinks}
                    </ul>
                </div>
                <a className="btn bg-[#0393b7] hover:bg-[#0393b7] border-none text-white text-2xl ">Cravey</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;