// src/components/WebDeveloper.js
import React from "react";
import SectionTemplate from "./SectionTemplate";

const AIEngineer = () => {
  const projects = [
    { name: "Revise Mate", description: "A system that generates a quick quiz with an interactive interface based on input text or document.", storyTime: "My mother is a veteran lecturer. One day, she told me how time-consuming it is for teachers to create new questions for every class, every year, for revision. Coincidentally, I was interested in Retrieval-Augmented Generation (RAG) at the time, so I told her to hold my glass of water—and boom! I created this project for her, and she actually uses it now. She thought I was a genius for this, bwahahaha. I have a long way to go =(", technologies: "Python, Langchain, FastAPI, Hugginface, Streamlit, ChromaDB", link: "https://github.com/overlordiam/ReviseMate" },
    { name: "SLM Comparitive Analysis", description: "A comparison of four different Small Language Models (Mistral-7B, Zephyr_7B, Orca-7B, and Phi-2) in a question-answering task.", storyTime: "This project serves as a precursor to the Revise Mate project. During one of my internships, I was tasked with analyzing existing SLMs (Small Language Models) to determine which model performed best overall. This analysis was one of the experiments I conducted. Based on the specific use-case, I could then recommend and implement the most suitable model for the task at hand.", technologies: "Python, PyTorch, Numpy, Plotly, Langchain, Hugginface Transformers, ChromaDB", link: "https://github.com/overlordiam/SLM_comparison" },
    { name: "Image Classification: A Concordia Competition", description: "A comprehensive codebook on hyperparameter tuning and model selection for a classification task.", storyTime: "It was a rollercoaster of emotions. Initially, my teammates and I were apathetic about the project. Then, our professor introduced a leaderboard, which didn't motivate us until we made a submission that unexpectedly catapulted us to 2nd place. Surprised by our success, the real competition began. We fluctuated between 2nd and 1st place, eventually holding the top spot until the last day when another team overtook us by less than a percent difference in accuracy. Despite this, it was an exhilarating time throughout.", technologies: "Python, PyTorch, Scikit-learn", link: "https://github.com/ajay-ramasubramanian/CIFAR-10-Challenge" },
    { name: "Transformer from scratch", description: "Built the transformer architecture as described in the paper 'Attention is All You Need'.", storyTime: "I was familiar with the groundbreaking paper 'Attention is All You Need' and understood its theoretical aspects. But did I know how it was coded? How the authors went about each module? These were some questions I asked myself. I attempted to code it myself and was stumped from the first step. Then I realized that theoretical knowledge doesn't always translate to practical implementation. With help from external resources and videos, I was finally able to code the entire architecture, bridging the gap between theory and practice.", technologies: "Python, PyTorch, Numpy, Hugginface", link: "https://github.com/overlordiam/Transformer_from_scratch" },
    { name: "Keyword Spotting", description: "An analysis on the ", storyTime: "", technologies: "Python, Speechbrain, PyTorch", link: "https://github.com/overlordiam/Keyword_spotting" },

  ];

  return <SectionTemplate title="The AI G.O.A.T (that's stretching it a little)" projects={projects} />;
};

export default AIEngineer;
