import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import React, { useEffect } from 'react'
import { useLocation, useNavigate, type NavigateFunction } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream resume" },
  ];
}

export default function Home() {
  const {  auth, fs } = usePuterStore();
    const navigate: NavigateFunction = useNavigate();
    

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

//2:17:00 start from here
    useEffect(() => {
        const loadResume = async() => {
            const blob = await fs.read(resume.imagePath);
            if(!blob) return;
            let url = URL.createObjectURL(blob);

        }
    }, []);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    

    {resumes.length > 0 && (
       <div className="resumes-section">
          {resumes.map( (resume) => (
      
        <ResumeCard key={resume.id} resume={resume} />
      
    ))}
    </div>
    )}
   
    </section>
  </main>;
}


// 34:47