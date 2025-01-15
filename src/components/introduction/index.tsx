/** @format */

import React from 'react';

import style from './introduction.module.scss';
import Image from 'next/image';

export default function Introduction() {
  return (
    <>
      <main className={`${style.overlay} relative pt-[256px] pb-[56px]`}>
        <Image
          src={'/pattern.png'}
          width={928}
          height={894}
          className='absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover object-center'
          alt='pattern'
          decoding='async'
        />
        <div className='custom-container'>
          <div className='flex'>
            <div className='max-w-[587px] w-full'>
              <div className='relative'>
                <div className='sc-title flex items-end mb-[32px]'>
                  <div className='color-primary-500 font-bold text-[24px]'>
                    01.
                  </div>
                  <div className='line color-primary-500 font-bold text-[24px]'></div>
                  <div className='color-primary-500 font-bold text-[24px] h-[24px]'>
                    Introduction
                  </div>
                </div>

                <h1 className='source-serif-pro font-semibold color-primary-800 text-[65px] max-md:text-[48px] max-sm:text-[32px] max-md:h-[96px] leading-[100%] mb-[32px]'>
                  👋 Greetings, I am
                  <br />
                  Abhishek Shakya,
                </h1>

                <div className='description color-primary-400 text-[20px] mb-[56px]'>
                  <div className='mb-[8px]'>
                    Web developer dedicated to building applications that{' '}
                  </div>
                  <div>
                    solve{' '}
                    <span className='inline-flex items-center justify-center font-bold mx-[6px] w-[130px] rounded-[4px] bg-primary-10 color-primary-800 px-[12px] py-[4px]'>
                      real world
                    </span>{' '}
                    problem
                  </div>
                </div>

                <div className='flex gap-[16px]'>
                  <a href='#projects' className='primary-btn'>
                    View projects
                  </a>
                  {/* <button className='secondary-btn'>Contact</button> */}
                </div>
              </div>
            </div>
          </div>

          <div className={`${style.ball} absolute right-0 bottom-0`}></div>
        </div>
      </main>
    </>
  );
}
