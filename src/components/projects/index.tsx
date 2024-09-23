'use client';

import React, { useState } from 'react';

import styles from './projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface IProject {
    id: number,
    title: string,
    image: string,
    type: 'frontend' | 'fullstack',
}

const Projects = () => {
    const [projecType, setProjecType] = useState<'all' | 'frontend' | 'fullstack'>('frontend');

    const projects: IProject[] = [
        {
            id: 1,
            title: 'Sialo : Social Media App',
            image: '/project/sialo-thumbnail.png',
            type: 'fullstack',
        },
        {
            id: 2,
            title: 'Litmark : Bookmark Manager',
            image: '/project/litmark-thumbnail.png',
            type: 'fullstack',
        },
        {
            id: 3,
            title: 'HooBank : Landing page',
            image: '/project/payment-thumbnail.png',
            type: 'frontend',
        },
        {
            id: 4,
            title: 'WebOn : Modern App',
            image: '/project/mobile-thumbnail.png',
            type: 'frontend',
        },
        {
            id: 5,
            title: 'Specto : Movie templete',
            image: '/project/movie-thumbnail.png',
            type: 'frontend',
        },
        {
            id: 6,
            title: 'CIELO : Landing page',
            image: '/project/cielo-thumbnail.png',
            type: 'frontend',
        },
    ]

    const [filteredArray, setFilteredArray] = useState<IProject[]>(projects);

    const changeProjecType = (category: 'all' | 'frontend' | 'fullstack') => {

        if (category == 'all') {
            setFilteredArray(projects);
        } else {

            const arr = projects.filter((item) => item.type === category);

            setFilteredArray(arr);
        }
        setProjecType(category);
    }

    return (
        <section className={`  py-[80px] pb-[140px] w-[94vw] mx-auto overflow-x-hidden`} id="projects">
            <div className={`${styles.project_wrpper} custom-container relative`}>
                <div className="sc-title flex items-end mb-[20px]">
                    <div className="color-primary-500 font-bold text-[24px]">03.</div>
                    <div className="line color-primary-500 font-bold text-[24px]"></div>
                    <div className="color-primary-500 font-bold text-[24px]">Projects</div>
                </div>

                <h2 className='source-serif-pro font-semibold color-primary-800 text-[40px] leading-[100%] mb-[40px]'>Featured Projects</h2>

                <div className={`${styles.filter_box} w-fit h-[56px] flex gap-[8px] border-primary-10 p-[8px] rounded-[8px] mb-[8px]`}>
                    <button onClick={() => changeProjecType('all')} className={`${projecType === 'all' ? styles.active : ''} px-[24px] color-primary-800 text-[16px] rounded-[4px]`}>All</button>
                    <button onClick={() => changeProjecType('frontend')} className={`${projecType === 'frontend' ? styles.active : ''} px-[24px] color-primary-800 text-[16px] rounded-[4px]`}>Frontend</button>
                    <button onClick={() => changeProjecType('fullstack')} className={`${projecType === 'fullstack' ? styles.active : ''} px-[24px] color-primary-800 text-[16px] rounded-[4px]`}>Full stack</button>
                </div>

                <div className="project-list gap-[24px] min-h-[418px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-20">
                    {projects.length && filteredArray.map((project: IProject, index: number) => (
                        <Link key={index} href="">
                            <div className={`${styles.project_box} animation-opacity relative project rounded-[8px] overflow-hidden border-primary-300`}>
                                <figure>
                                    <Image className='w-full aspect-[1.8]' src={project.image} alt={project.image} width={500} height={185} />
                                </figure>
                                <div className={`${styles.overlay} absolute left-0 right-0 top-0 p-[12px] translate-y-full bottom-0 text-[24px] font-bold color-primary-800 bg-white/80 flex-center`}>{project.title}</div>
                            </div>
                        </Link>
                    ))}

                </div>

                <div className={`${styles.ball} ball absolute right-0 bottom-0`}></div>
            </div>
        </section>
    )
};

export default Projects;
