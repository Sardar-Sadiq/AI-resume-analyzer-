import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, type NavigateFunction } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream resume" },
  ];
}

export default function Home() {
  const {  auth, kv } = usePuterStore();
    const navigate: NavigateFunction = useNavigate();
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loadingResumes, setLoadingResumes] = useState(false);
    
 
    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

    useEff

//2:17:00 start from here another day for another commit ok one last time
    

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