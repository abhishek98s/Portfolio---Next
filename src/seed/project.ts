import { IProject } from "@/types/project";

const commonTech = ['HTML', 'CSS', 'SCSS', 'JS', 'Git']

export const projects: IProject[] = [
    {
        id: 1,
        title: 'Litmark : Bookmark Manager',
        description: 'Litmakr a bookmark manager that helps users to save their valuable resourece link saving the time of user instaead of saving in a nodepad.',
        image: '/project/litmark-thumbnail.png',
        features: ['User can save url',
            'User can make folder to organize the bookmark',
            'Nested Bookmarks',
            'User can drag and move a bookmark to its sub folder',
            'User can sort the bookmarks',
            'User can search bookmark by title',
            'User can search folder by title'],
        type: 'fullstack',
        tech: [...commonTech, 'Tailwind', 'Angular', 'Node js', 'Express js', 'Typescript', 'Postgres', 'Knex', 'Swagger', 'Logger', 'Cloudinary', 'bcrypt', 'JWT', 'Joi', 'Axios'],
        demo_link: 'https://litmark.vercel.app/',
    },
    {
        id: 2,
        title: 'Sialo : Social Media App',
        description: 'Social media app to connect with the people close to you and share memories.',
        image: '/project/sialo-thumbnail.png',
        features: [
            'User can share post',
            'User can delete post',
            'Like other posts',
            'Update post caption',
            'Comment on others post',
            'View other users profile, post, friends',
            'Send friend request',
            'Accept or rejext friend request',
            'Storeis',
            'See other friends stories',
            'Search other users stories',
            'Change password',
            'Delete the account',
            'Change profile and cover picture',
            'View photos of other user'
        ],
        type: 'fullstack',
        tech: [...commonTech, 'Tailwind', 'Next js', 'Node js', 'Express js', 'Typescript', 'Mongo DB', 'Swagger', 'Cloudinary', 'bcrypt', 'JWT', 'Joi', 'Axios'],
        demo_link: 'https://sialo.vercel.app/',
    },
    {
        id: 3,
        title: 'HooBank : Landing page',
        description: 'Landing page for a wallet like application.',
        image: '/project/payment-thumbnail.png',
        type: 'frontend',
        tech: [...commonTech, 'Tailwind', 'Typescript',],
        demo_link: 'https://modern-ui-ux-two.vercel.app/'
    },
    {
        id: 4,
        title: 'WebOn : Modern App',
        description: 'Landing page of templete for a app focusing on the asthetic.',
        image: '/project/mobile-thumbnail.png',
        type: 'frontend',
        tech: [...commonTech, 'Bootstrap'],
        demo_link: 'https://abhishek98s.github.io/Mobile-app/'
    },
    {
        id: 5,
        title: 'Specto : Movie templete',
        description: 'Design for a movie review application with different pages. The main foucus is on the design and makeing the UI clearner.',
        image: '/project/movie-thumbnail.png',
        type: 'frontend',
        tech: [...commonTech, 'Angular', 'Tailwind'],
        demo_link: 'https://angular-cinema-app.vercel.app/'
    },
    {
        id: 6,
        title: 'CIELO : Landing page',
        description: 'Design of a portfolio website. ',
        image: '/project/cielo-thumbnail.png',
        type: 'frontend',
        tech: [...commonTech, 'Bootstrap', 'Figma'],
        demo_link: 'https://abhishek98s.github.io/CIELO-TEST/',
    },
]