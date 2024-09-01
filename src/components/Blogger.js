// src/components/WebDeveloper.js
import React from "react";
import SectionTemplate from "./SectionTemplate";

const Blogger = () => {
  const projects = [
    { name: "Transformers, a Glimpse into the New Era…", storyTime: "My very first blog!! Never thought I would be writing blogs. But again, who knew Ronaldo would launch a youtube channel. This was around the time when I read the paper introduceing transformers and even coded the architecture myself (check out the AI section for more on that). I understood the architecture pretty well and I really wanted to share the mind-blowing innovation with everyone, irrespective of their background. And that my friends, is how I started off as a blogger.", description: "A brief introduction to the world of transformers. (Not the autobots/decepticons one, the other one)", technologies: "", link: "https://suhaasgummalam.medium.com/transformers-a-glimpse-into-the-new-era-9" },
    { name: "Client-Server Architecture, simply explained", storyTime: "My dad is actually a very knowledgable man. He comes up to me and asks how do websites work. This happend because he read in the news that a big company's website went down for 6 hours. I explained to him the client/server model and he seemed get lost about every 5 minutes. So, I straight up wrote an article on the entire concept, making it painstakingly simple for anyone to understand. I don't know if he read it but I hope anyone who is curious about the same, can get a better clarity after reading my blog.", description: "A brief introduction to the client-server architecture (one of the most important topics in computer science)", technologies: "", link: "https://suhaasgummalam.medium.com/client-server-architecture-simply-explained-d69142a91726" },
    { name: "Crafting Engaging Quizzes with Open-Source LLMs and Langchain", storyTime: "The inspiration for this blog and the project is my mom, who is a seasoned teacher. She shared some concerns of a teacher and how they are loaded with work. She loves her job, no doubt, but I thought she could use some help of technology. In just a few weeks, I made an app to solve her issues. Mom happy, I am happy, life is great. I had to share the idea with the world, it might help someone else in the future.", description: "A technical writing on how to generate quizzes using the power of AI.", technologies: "", link: "https://suhaasgummalam.medium.com/crafting-engaging-quizzes-with-open-source-llms-and-langchain-14c8823fd490" },
  ];

  return <SectionTemplate title="The Blogger?" projects={projects} />;
};

export default Blogger;
