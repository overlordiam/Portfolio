// src/components/WebDeveloper.js
import React from "react";
import SectionTemplate from "./SectionTemplate";

const AIEngineer = () => {

  const title = "The AI G.O.A.T (that's stretching it a little)"
  const subTitle = "I love Artificial Intelligence (not when they turn red and start flashing). The power it holds in making the world a better place is mind-boggling. I stepped foot into this field with a dream. Far fetched but my strong motivation, I want to eliminate disability with the power of AI. I am making my way up there slowly and steadily. Remember the name!!"
  
  const internships = [
    {company: " Voice Conversion using discrete audio features, Concordia University", role: "Research Assistant", duration: "Jun ’24 – Aug ‘24", technologies: " Speechbrain, PyTorch, Python, HuggingFace, Shell", 
    description: [
        "Training a voice conversion model using Speechbrain with discrete audio tokens for increased efficiency and reduced computation, employing codecs and discrete self-supervised models for audio discretization.",
        "Experimented with various encoder-decoder architectures and speaker embeddings to learn accurate voice mappings.",
        "The architecture reduces the train times by 22% and computation requirements by at least 30% compared to contemporary architectures. Currently undergoing optimizations."
      ],
    },
    {company: "Hermis, Inc", role: "Software Engineering (Intern)", duration: "Dec ’23 – Apr ’24 ", technologies: "Python, Numpy, Pandas, Langchain, PyTorch, LLM, FastAPI", 
    description: [
        "Performed data analytics on quiz responses to build employee demographics and dashboards.",
        "Spearheaded the development of a team-building quiz application using Small/Large Language Models (Mistral, Gemma, Phi, Gemini and OpenAI) and Retrieval-Augmented Generation.",
        "Attained 100% data privacy by localizing the language models while decreasing VRAM storage demands by at least 50% through parameter quantization.",
        "Implemented a robust RESTful API using FastAPI for remote access to the quiz application."
    ]},
    {company: "JuniorKids", role: "Software Engineering (Intern)", duration: "Jun ’23 – Sep ’23", technologies: "Python, LoopGPT, Screaming frog, OpenAI, Git", 
    description: [
        "Developed software solutions using LLMs (GPT-3.5, GPT-4) for knowledge extraction and question answering on web and internal knowledge bases, enhancing productivity of the finance and marketing teams by 60%.",
        "Implemented AI agents to streamline the analysis pipeline, enabling stakeholders to query company statistics in plain English and receive insightful data-driven responses.",
        "Established an automated workflow for accessing and processing real-time Google Analytics and Shopify data.",
        "Developed a website and performed Search Engine Optimization using Screaming Frog to increase website traffic by 5%."
    ]}
]
  
  const projects = [
    { name: "Revise Mate", description: "A system that generates a quick quiz with an interactive interface based on input text or document.", storyTime: "My mother is a veteran lecturer. One day, she told me how time-consuming it is for teachers to create new questions for every class, every year, for revision. Coincidentally, I was interested in Retrieval-Augmented Generation (RAG) at the time, so I told her to hold my glass of water—and boom! I created this project for her, and she actually uses it now. She thought I was a genius for this, bwahahaha. I have a long way to go =(", technologies: "Python, Langchain, FastAPI, Hugginface, Streamlit, ChromaDB", link: "https://github.com/overlordiam/ReviseMate" },
    { name: "SLM Comparitive Analysis", description: "A comparison of four different Small Language Models (Mistral-7B, Zephyr_7B, Orca-7B, and Phi-2) in a question-answering task.", storyTime: "This project serves as a precursor to the Revise Mate project. During one of my internships, I was tasked with analyzing existing SLMs (Small Language Models) to determine which model performed best overall. This analysis was one of the experiments I conducted. Based on the specific use-case, I could then recommend and implement the most suitable model for the task at hand.", technologies: "Python, PyTorch, Numpy, Plotly, Langchain, Hugginface Transformers, ChromaDB", link: "https://github.com/overlordiam/SLM_comparison" },
    { name: "Image Classification: A Concordia Competition", description: "A comprehensive codebook on hyperparameter tuning and model selection for a classification task.", storyTime: "It was a rollercoaster of emotions. Initially, my teammates and I were apathetic about the project. Then, our professor introduced a leaderboard, which didn't motivate us until we made a submission that unexpectedly catapulted us to 2nd place. Surprised by our success, the real competition began. We fluctuated between 2nd and 1st place, eventually holding the top spot until the last day when another team overtook us by less than a percent difference in accuracy. Despite this, it was an exhilarating time throughout.", technologies: "Python, PyTorch, Scikit-learn", link: "https://github.com/ajay-ramasubramanian/CIFAR-10-Challenge" },
    { name: "Transformer from scratch", description: "Built the transformer architecture as described in the paper 'Attention is All You Need'.", storyTime: "I was familiar with the groundbreaking paper 'Attention is All You Need' and understood its theoretical aspects. But did I know how it was coded? How the authors went about each module? These were some questions I asked myself. I attempted to code it myself and was stumped from the first step. Then I realized that theoretical knowledge doesn't always translate to practical implementation. With help from external resources and videos, I was finally able to code the entire architecture, bridging the gap between theory and practice.", technologies: "Python, PyTorch, Numpy, Hugginface", link: "https://github.com/overlordiam/Transformer_from_scratch" },
    { name: "Keyword Spotting", description: "This project presents a comparison between discrete and continuous audio tokens in the context of the Keyword spotting task.", storyTime: "This project was part of my course 'Natural Language Processing'. I chose this project based on my professor's current research. Discrete audio is a flashy domain but is paramount to vocal generative AI. I wanted to perform well and work under him. I did well in the course and got to work under him. That's how we do it.", technologies: "Python, Speechbrain, PyTorch", link: "https://github.com/overlordiam/Keyword_spotting" },

  ];

  return <SectionTemplate title={title} subtitle={subTitle} projects={projects} internships={internships} />;
};

export default AIEngineer;
