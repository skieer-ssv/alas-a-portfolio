export interface Project {
    title: string;
    imagePath: string;
    stack: string[];
    githubLink: string;
    ongoing?: boolean;
    description?: string; // Added for future detailed views
    demoLink?: string;    // Added for future live demos
}

export const projects: Project[] = [
    {
        title: "Alas a Portfolio",
        imagePath: "/projects/next-portfolio.webp",
        stack: ['nextjs', 'react', 'typescript', 'tailwindcss', 'framer-motion'],
        ongoing: true,
        githubLink: "https://github.com/skieer-ssv/alas-a-portfolio",
        description: "My personal portfolio website built with Next.js 14, showcasing my projects and skills with a clean, minimalist design."
    },
    {
        title: "Blockchain with Node.js",
        imagePath: "/projects/cryptolink.webp",
        stack: ['nodejs', 'redis', 'react', 'express'],
        githubLink: "https://github.com/skieer-ssv/javascript-blockchain",
        description: "A comprehensive blockchain implementation in Node.js, featuring a decentralized network, proof-of-work consensus, and a wallet system."
    },
    {
        title: "Tesoroheist - Treasure Hunt",
        imagePath: "/projects/tesoroheist.webp",
        stack: ['php', 'javascript', 'mysql', 'html5', 'css3', 'bootstrap'],
        githubLink: "https://github.com/radonintro1234/tech.treasure.hunt.pages",
        description: "An interactive online treasure hunt game built for a college technical festival, handling hundreds of concurrent users."
    },
    {
        title: "Dining Philosopher Visualized",
        imagePath: "/projects/dining-phil.webp",
        stack: ['c'],
        githubLink: "https://github.com/skieer-ssv/Dining-Philosopher",
        description: "A visualization of the classic Dining Philosophers problem using C and graphics libraries to demonstrate deadlock and concurrency."
    },
];
