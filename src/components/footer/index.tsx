/** @format */

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden border-primary-10 pt-[40px] pb-[20px]'>
      <div className='custom-container'>
        <div className='relative z-10 flex flex-col gap-[40px]'>
          <div className='top flex flex-col md:flex-row items-center justify-between'>
            <div className='flex gap-3 items-center mb-[24px]'>
              <figure>
                <Image
                  src='/logo.svg'
                  alt='logo.png'
                  width={60}
                  height={60}
                  decoding='async'
                />
              </figure>
              <span className='font-semibold text-[24px] color-primary-800'>
                Abhishek Shakya
              </span>
            </div>

            <ul
              className={`flex flex-col md:flex-row nav-links-wrapper list-none`}
            >
              <li className='w-full hover:underline md:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                <Link
                  className='w-full h-full inline-flex justify-center items-center'
                  href={'#about'}
                >
                  About
                </Link>
              </li>
              <li className='w-full hover:underline md:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                <Link
                  className='w-full h-full inline-flex justify-center items-center'
                  href={'#skills'}
                >
                  Skills
                </Link>
              </li>
              <li className='w-full hover:underline md:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                <Link
                  className='w-full h-full inline-flex justify-center items-center'
                  href={'#projects'}
                >
                  Projects
                </Link>
              </li>
              <li className='w-full hover:underline md:w-[100px] h-[60px] lg:h-[40px] rounded-[4px] inline-flex justify-center items-center color-primary-400 text-[16px]'>
                <Link
                  className='w-full h-full inline-flex justify-center items-center'
                  href={'#contact'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className='flex gap-2 justify-center'
            aria-label='Email for any query'
          >
            <a href='mailto:abhishek9898@gmail.com'>
              <div className='w-[40px] h-[40px] border-primary-10 flex-center'>
                <Image
                  src='/gmail.svg'
                  alt='Gmail logo'
                  width={40}
                  height={40}
                  decoding='async'
                />
              </div>
            </a>

            <a
              href='https://www.linkedin.com/in/abhishek-shakya-42528624a/'
              aria-label='Linkedin Profile'
            >
              <div className='w-[40px] h-[40px] border-primary-10 flex-center'>
                <Image
                  src='/linkedin.svg'
                  alt='Linkedin logo'
                  width={40}
                  height={40}
                  decoding='async'
                />
              </div>
            </a>

            <a
              href='https://github.com/abhishek98s'
              aria-label='Visit github profile'
            >
              <div className='w-[40px] h-[40px] border-primary-10 flex-center'>
                <Image
                  src='/github.svg'
                  alt='Github logo'
                  width={40}
                  height={40}
                  decoding='async'
                />
              </div>
            </a>
          </div>
        </div>
        {/* <a
          href='/abhishek-shakya-cv.pdf'
          download='abhishek-shakya-cv'
          className='hover:translate-y-[-10px] animate-bounce transition-opacity z-50 shadow-slate-400 md bg-primary-0 w-[60px] rounded-full h-[60px] flex-center border-primary-10 fixed right-[20px] bottom-[20px]'
        >
          <Image
            src={'/download.svg'}
            alt='download'
            width={24}
            height={26}
            decoding='async'
          />
        </a> */}
      </div>

      <div className={`${styles.background_ball} z-0`}></div>
    </footer>
  );
};

export default Footer;
