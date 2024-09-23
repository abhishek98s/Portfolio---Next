'use client';

import React, { useEffect, useState } from 'react';

import style from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC<{ isHome: boolean }> = ({ isHome }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className='fixed top-[12px] w-full z-50'>
            <div className="custom-container">
                <div className={`${style.navbar_wrapper} relative flex justify-between items-center border-primary-10 rounded-[12px] px-[24px] py-[16px]`}>
                    <Link href="/">
                        <figure className='rounded-full'>
                            <Image src="/logo.svg" width="60" height="60" alt="logo" />
                        </figure>
                    </Link>


                    {isHome && isMenuOpen &&
                        <ul className={`${style.nav_links_wrapper} hidden lg:flex nav-links-wrapper list-none`}>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link onClick={closeMenu} href={'#about'}>About</Link>
                            </li>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link onClick={closeMenu} href={'#skills'}>Skills</Link>
                            </li>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link onClick={closeMenu} href={'#projects'}>Projects</Link>
                            </li>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link onClick={closeMenu} href={'#contact'}>Contact</Link>
                            </li>
                        </ul>
                    }

                    {isHome &&
                        <ul className={`${style.nav_links_wrapper_desktop} hidden lg:flex nav-links-wrapper list-none`}>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link href={'#about'}>About</Link>
                            </li>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link href={'#skills'}>Skills</Link>
                            </li>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link href={'#projects'}>Projects</Link>
                            </li>
                            <li className='w-full lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link href={'#contact'}>Contact</Link>
                            </li>
                        </ul>}

                    {isHome &&
                        <div onClick={toggleMenu} className={`${style.menu_wrapper} lg:hidden cursor-pointer flex justify-center items-center max-w-[45px] w-full h-[45px]`}>
                            <div className={`${style.menu_box} ${isMenuOpen ? style.active : ''} space-y-[4px] max-w-[36px] w-full h-[18px]`}>
                                <div className={`${style.line_1}`}></div>
                                <div className={`${style.line_2}`}></div>
                                <div className={`${style.line_3}`}></div>
                            </div>
                        </div>
                    }

                    {!isHome &&
                        <ul className={`${style.nav_links_wrapper_desktop} hidden lg:flex nav-links-wrapper list-none`}>
                            <li className='w-[100px] h-[60px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link onClick={closeMenu} href={'/'}>Home</Link>
                            </li>
                        </ul>}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
