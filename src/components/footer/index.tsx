import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className='relative overflow-hidden border-primary-10 pt-[40px] pb-[20px]'>
            <div className="custom-container">
                <div className="flex flex-col gap-[40px]">
                    <div className="top flex justify-between">
                        <div className="flex gap-3 items-center">
                            <figure>
                                <Image src='/logo.svg' alt='logo.png' width={60} height={60} />
                            </figure>
                            <span className='font-semibold text-[24px] color-primary-800'>Abhishek Shakya</span>
                        </div>

                        <ul className={`flex nav-links-wrapper list-none`}>
                            <li className='w-full hover:underline lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link className='w-full h-full inline-flex justify-center items-center' href={'#about'}>About</Link>
                            </li>
                            <li className='w-full hover:underline lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link className='w-full h-full inline-flex justify-center items-center' href={'#skills'}>Skills</Link>
                            </li>
                            <li className='w-full hover:underline lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link className='w-full h-full inline-flex justify-center items-center' href={'#projects'}>Projects</Link>
                            </li>
                            <li className='w-full hover:underline lg:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                                <Link className='w-full h-full inline-flex justify-center items-center' href={'#contact'}>Contact</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="flex gap-2 justify-center">
                        <a href='mailto:abhishek9898@gmail.com'>
                            <div className="w-[40px] h-[40px] border-primary-10 flex-center">
                                <Image src='/gmail.svg' alt='' width={40} height={40} />
                            </div>
                        </a>

                        <a href='https://www.linkedin.com/in/abhishek-shakya-42528624a/'>
                            <div className="w-[40px] h-[40px] border-primary-10 flex-center">
                                <Image src='/linkedin.svg' alt='' width={40} height={40} />
                            </div>
                        </a>

                        <a href='https://github.com/abhishek98s'>
                            <div className="w-[40px] h-[40px] border-primary-10 flex-center">
                                <Image src='/github.svg' alt='' width={40} height={40} />
                            </div>
                        </a>
                    </div>
                </div>
                <a href="/abhishek-shakya-cv.pdf" download='cv' className='w-[80px] rounded-full h-[80px] flex-center border-primary-10 fixed right-[20vw] bottom-[20px]'>
                    <Image src={'/download.svg'} alt='download' width={30} height={32} />
                </a>
            </div>

            <div className={`${styles.background_ball}`}></div>

        </footer>
    )
};

export default Footer;
