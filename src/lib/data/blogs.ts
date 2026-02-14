export type Blog = {
    id: number;
    title: string;
    link: string;
    description: string;
    date: string;
};

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Aree bro kya Questions pucha?",
        link: "https://this-is-sid.blogspot.com/2020/12/aree-kya-questions-pucha.html",
        description:
            "When faced with the challenge of viva during the lockdown, I decided to solve one of the crucial questions faced by all the students.",
        date: "2020-12-05", // Fixed invalid date 51
    },
    {
        id: 2,
        title: "The making of: a Treasure Hunt Website",
        link: "https://hashnode.com/post/the-making-of-a-treasure-hunt-website-cktbybyhd00coxgs1d6qb7gs4",
        description:
            "I have tried to pen down the process, problems faced and solutions we came up with to make this one of the most successful event of Technitude 2021.",
        date: "2021-09-09",
    },
    {
        id: 3,
        title: "Tech I plan to invest my time in 2022",
        link: "https://hashnode.com/post/tech-i-plan-to-invest-my-time-in-2022-ckz5vrbj30plqghs18c2o9jz8",
        description:
            "Over the past few years I have been trying my hand at various technologies in the domain of web, cross-platform, cloud, cybersec, IOT, ML and general scripting...",
        date: "2022-02-02",
    },
].reverse();
