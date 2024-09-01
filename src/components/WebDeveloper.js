// src/components/WebDeveloper.js
import React from "react";
import SectionTemplate from "./SectionTemplate";

const WebDeveloper = () => {

    const title = "The Web Development Wizard (sounds kinda cool)"
    const subTitle = "When it comes to web development, my friends often tell me that I possess 'Golden fingers'. For some reason, I am good at debugging (don't ask me why). So when we are all questioning our life decisions because of a 'life-threatening' bug, I come through with a patch. And that's how I earned the name. Also, I love the power of creativity and tech that web development offers. I started off my IT journey from this field for the same reason."

    const internships = [
        {company: "Mobiezy", role: "Product Development intern", duration: "May '22 - Jul '22", technologies: "React.js, Context API, MySQL, AWS S3, Numpy, Pandas, Git", 
        description: [
            "Lead with the development of a responsive client website using React.js and Bootstrap CSS.",
            "Utilized Context API for state management and MySQL, and AWS S3 bucket for storing customer data.",
            "Analyzed user data to extract preferences and optimized the accuracy of the recommendation system by 10%.",
          ],
        },
        {company: "Tequid Labs ", role: "Web Development Intern", duration: "Mar ’21 – Apr ’21", technologies: "HTML, CSS, JavaScript, React.js, Git, Heroku", 
        description: [
            "Involved with brainstorming and implementing core features in a client’s website using HTML, CSS and JavaScript.",
            "Updated the entire codebase from vanilla JavaScript and HTML to React, adding detailed comments to improve the maintainability and readability of the project."
        ]}
    ]

    const projects = [
        { name: "Job Journal", description: "A tool designed to help job seekers efficiently manage and monitor their job applications.", storyTime: "Honestly, I use this website for my own use. Searching and preparing for jobs is already an ordeal, and keeping track of the applications adds on to the burden. I simply thought, since I am a self-proclaimed web development wizard, I should put my skills to good use.", technologies: "Next.js, React Query, Prisma, Clerk, TypeScript, TailwindCSS, Git", link: "https://github.com/overlordiam/Job-Journal" },
        { name: "One Stop", description: "A full-stack E-commerce application from sign-in to checkout.", storyTime: "I can say this with chest, I struggled with this project the most. As a fledging web developer, it took everything in me to learn the concepts of React and complex state management libraries like Redux. At the end, I came out strong with solid foundations in React and state management.", technologies: "React.js, Redux, Firestore, Firebase OAuth, SASS, Stripe, Git", link: "https://github.com/overlordiam/one-stop" },
        { name: "Hangout", description: "A chat platform designed to facilitate real-time communication among multiple users.", storyTime: "I made this app immediately after completing a Node.js course. I showed this to my mum and dad, and they thought I am going to be the next Mark Zuckerberg.", technologies: "HTML, CSS, JavaScript, Node.js, Express.js, Socket.io, Git", link: "https://github.com/overlordiam/Hangout" },
        { name: "Ask Me Anything", description: "A chatbot application with a complete 'unique' style, integrated with an LLM.", storyTime: "I really wanted to learn about Large Language Models like Gemini and wanted a piece of the chatbot hype. Instead of just plain inferencing in the back end, make a 'unique' and 'never seen before' UI instead..... Fine!, I added some padding at least =(", technologies: "React.js, Context API, Gemini-pro, Git", link: "https://github.com/overlordiam/AskMeAnything" },
        { name: "Yearbook For Graduating Seniors", description: "A digital yearbook that displays the pictures and details of graduating seniors of my college.", storyTime: "Although this project does not have anything to flaunt technically, it holds a more deeper meaning to me than the other projects I have made. At such poignant times, when the honor was bestowed upon me, I went ahead with a CYBERPUNK theme. God bless me.", technologies: "HTML, CSS, React.js and some cyberpunk styles", link: "https://github.com/overlordiam/yearbook-for-seniors" },
        { name: "Capitals Quiz", description: "A simple multiple choice quiz that tests your knowledge on the world's geography.", storyTime: "A stepping stone to learn TypeScript and TailwindCSS. Nothing more to it really. Actually...... at one point in my life, I memorized all the capital cities in the world.", technologies: "React.js, TypeScript, TailwindCSS, Git", link: "https://github.com/overlordiam/capitals-quiz" },
    ];

    return <SectionTemplate title={title} subtitle={subTitle} projects={projects} internships={internships} />;
};

export default WebDeveloper;
