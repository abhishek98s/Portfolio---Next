'use client';

import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import { projects } from "@/seed/project";
import { IProject } from "@/types/project";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Project = () => {
    const { id } = useParams();

    const [project, setProject] = useState<IProject>(projects[0]);

    useEffect(() => {
        const project_id = parseInt(id as string);
        setProject(projects[project_id - 1])
    }, [id])

    return (
        <>
            <Navbar isHome={false} />

            <section>
                <div className="mt-[180px] max-w-[800px] rounded-[12px] px-[8px] lg:px-[18px] py-[20px] border-primary-10 bg-primary-0 w-full mx-auto">

                    <div className="title source-serif-pro text-[40px] font-bold color-primary-800 mb-[16px]">{project.title}</div>

                    <Image loading="lazy" className="rounded-8 border-primary-10 h-auto w-full mb-[56px]" src={project.image!} alt="sialo-thumbnail.png" width={700} height={400} />

                    <div className="description text-[18px] mb-[20px] color-primary-400">{project.description}</div>

                    {project.features &&
                        <>
                            <div className="title text-[18px] font-semibold color-primary-800">Features</div>
                            <ul className="list-disc pl-[20px] mb-[20px]">
                                {project.features.map((feature: string) => (
                                    <li className="text-[18px] color-primary-400 leading-[150%]">{feature}</li>
                                ))}
                            </ul>
                        </>
                    }

                    <div className="text-[18px] font-semibold mb-[8px] color-primary-800">Technology Used</div>
                    <ul className="flex flex-wrap gap-4 mb-[20px]">
                        {project.tech.map((tech: string) => (
                            <li className="px-[8px] py-[2px] min-w-[50px] h-[30px] bottom-[4px] bg-primary-5 inline-flex items-center justify-center">{tech}</li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 mb-[56px]">
                        <span className="text-[18px] font-semibold color-primary-800">Live Demo : </span>
                        <a className="hover:underline color-primary-400 text-[16px]" target="_blank" href={project.demo_link}>{project.demo_link}</a>
                    </div>

                    <Projects isHome={false} />
                </div>
            </section>

        </>
    )
};

export default Project;
