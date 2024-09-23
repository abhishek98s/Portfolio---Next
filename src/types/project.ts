export interface IProject {
    id: number,
    title: string,
    description: string,
    image: string,
    features?: string[],
    type: 'frontend' | 'fullstack',
    tech: string[],
    demo_link: string,
};
