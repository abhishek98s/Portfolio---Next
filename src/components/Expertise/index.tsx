import Image from 'next/image';
import React from 'react';

interface ISkill {
    title: string,
    image: string
}

const Expertise = () => {

    const skillsArr: ISkill[] = [
        {
            title: 'HTML',
            image: '/skills/skill-1.png',
        },
        {
            title: 'CSS',
            image: '/skills/skill-2.png',
        },
        {
            title: 'SCSS',
            image: '/skills/skill-3.png',
        },
        {
            title: 'JS',
            image: '/skills/skill-4.png',
        },
        {
            title: 'Bootstrap',
            image: '/skills/skill-5.png',
        },
        {
            title: 'Git/Github',
            image: '/skills/skill-6.png',
        },
        {
            title: 'Tailwind',
            image: '/skills/skill-7.png',
        },
        {
            title: 'React',
            image: '/skills/skill-8.png',
        },
        {
            title: 'Next',
            image: '/skills/skill-9.png',
        },
        {
            title: 'Node',
            image: '/skills/skill-10.png',
        },
        {
            title: 'Express',
            image: '/skills/skill-11.png',
        },
        {
            title: 'Typescript',
            image: '/skills/skill-12.png',
        },
        {
            title: 'MongoDB',
            image: '/skills/skill-13.png',
        },
        {
            title: 'Angular',
            image: '/skills/skill-14.png',
        },
    ];

    return (
        <section className='py-[80px]' id="skills">
            <div className="custom-container">
                <div className="sc-title flex items-end mb-[20px]">
                    <div className="color-primary-500 font-bold text-[24px]">02.</div>
                    <div className="line color-primary-500 font-bold text-[24px]"></div>
                    <div className="color-primary-500 font-bold text-[24px]">Skills</div>
                </div>

                <h2 className='source-serif-pro font-semibold color-primary-800 text-[40px] leading-[100%] mb-[64px]'>Area of Experience</h2>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-y-[20px]">
                    {skillsArr.length && skillsArr.map((skill: ISkill, index: number) => (
                        <div key={index} className="skill px-[4px] pt-[16px] pb-[12px] border-primary-10 rounded-[4px] w-[108px]">
                            <figure className='mx-auto w-[50px] h-[50px] flex-center mb-[12px]'>
                                <Image src={`${skill.image}`} alt="s" width={50} height={50} />
                            </figure>

                            <div className="title text-center text-[16px] color-primary-400">{skill.title}</div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
};

export default Expertise;
