'use client';

import Navbar from '@/components/navbar';
import ProjectDetail from '@/components/project-detail';
import { projects } from '@/seed/project';
import { IProject } from '@/types/project';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Project = () => {
  const { id } = useParams();

  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const project_id = parseInt(id as string);
    setProject(projects[project_id - 1]);
  }, [id]);

  return (
    <>
      <Navbar isHome={false} />

      {project && <ProjectDetail project={project} />}
    </>
  );
};

export default Project;
