/** @format */

'use client';

import React, { useState } from 'react';

import styles from './projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types/project';
import { projects } from '@/seed/project';

const Projects: React.FC<{ isHome: boolean }> = ({ isHome }) => {
  const [projecType, setProjecType] = useState<
    'all' | 'frontend' | 'fullstack'
  >('all');

  const [filteredArray, setFilteredArray] = useState<IProject[]>(projects);

  const changeProjecType = (category: 'all' | 'frontend' | 'fullstack') => {
    if (category == 'all') {
      setFilteredArray(projects);
    } else {
      const arr = projects.filter((item) => item.type === category);

      setFilteredArray(arr);
    }
    setProjecType(category);
  };

  return (
    <section
      className={`${
        isHome && 'w-[100%] py-[80px] pb-[140px] overflow-x-hidden'
      } mx-auto`}
      id='projects'
    >
      <div
        className={`${isHome && styles.project_wrpper} ${
          isHome && 'custom-container'
        } relative`}
      >
        {isHome && (
          <>
            <div className='sc-title flex items-end mb-[20px]'>
              <div className='color-primary-500 font-bold text-[24px]'>03.</div>
              <div className='line color-primary-500 font-bold text-[24px]'></div>
              <div className='color-primary-500 font-bold text-[24px]'>
                Projects
              </div>
            </div>

            <h2 className='source-serif-pro font-semibold color-primary-800 text-[40px] leading-[100%] mb-[40px]'>
              Featured Projects
            </h2>
          </>
        )}
        {!isHome && (
          <div className='text-[18px] font-semibold mb-[8px] color-primary-800'>
            Others Projects
          </div>
        )}
        <div
          className={`${styles.filter_box} w-fit h-[56px] flex gap-[8px] border-primary-10 p-[8px] rounded-[8px] mb-[8px]`}
        >
          <button
            onClick={() => changeProjecType('all')}
            className={`${
              projecType === 'all' ? styles.active : ''
            } px-[24px] color-primary-800 text-[16px] rounded-[4px]`}
          >
            All
          </button>
          <button
            onClick={() => changeProjecType('frontend')}
            className={`${
              projecType === 'frontend' ? styles.active : ''
            } px-[24px] color-primary-800 text-[16px] rounded-[4px]`}
          >
            Frontend
          </button>
          <button
            onClick={() => changeProjecType('fullstack')}
            className={`${
              projecType === 'fullstack' ? styles.active : ''
            } px-[24px] color-primary-800 text-[16px] rounded-[4px]`}
          >
            Full stack
          </button>
        </div>

        <div
          className={`project-list gap-[24px] ${
            isHome && 'min-h-[200px]'
          } grid grid-cols-1 md:grid-cols-2 ${
            isHome && 'md:grid-cols-3'
          } relative z-20`}
        >
          {projects.length &&
            filteredArray.map((project: IProject) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <div
                  className={`${styles.project_box} animation-opacity relative project rounded-[8px] overflow-hidden border-primary-300`}
                >
                  <figure className='aspect-[1.8] w-full'>
                    <Image
                      className='w-full object-cover'
                      src={project.image}
                      alt={project.image}
                      width={500}
                      height={185}
                    />
                  </figure>
                  <div
                    className={`${styles.overlay} absolute left-0 right-0 top-0 p-[12px] translate-y-full bottom-0 text-[24px] font-bold color-primary-800 bg-white/80 flex-center`}
                  >
                    {project.title}
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {isHome && (
          <div
            className={`${styles.ball} ball absolute right-0 bottom-0`}
          ></div>
        )}
      </div>
    </section>
  );
};

export default Projects;
