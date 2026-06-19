import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, TrendingUp, Briefcase, GraduationCap, Eye, Settings,
  Mic, Gamepad2, Users, Network, Globe, Rocket, CheckCircle,
  FileText, Code, Database, Server, AlertTriangle, Target,
  Cpu, Layers, HeartHandshake, Banknote, ShieldCheck, Activity,
  GitMerge, Compass, LineChart, Sparkles, BookOpen, 
  MonitorSmartphone, ServerCog, Bot, Puzzle, Calculator
} from "lucide-react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
  exit: { opacity: 0, x: -50 }
};

// Line drawing animation for the process flow
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }
};

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center font-sans overflow-hidden p-4">
      {/* Global Scrollbar Style */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: #E8671A; }
      `}</style>

      <div className="relative w-full max-w-[1400px] aspect-[16/9] bg-slate-50 shadow-2xl rounded-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
        
        {/* Main Content Area */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {currentSlide === 0 && <Slide1Title />}
              {currentSlide === 1 && <Slide2Problem />}
              {currentSlide === 2 && <Slide3Solution />}
              {currentSlide === 3 && <Slide4Novelty />}
              {currentSlide === 4 && <Slide5TechStack />}
              {currentSlide === 5 && <Slide6Applications />}
              {currentSlide === 6 && <Slide7Business />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Presentation Controls */}
        <div className="absolute bottom-6 right-8 flex items-center gap-4 z-50">
          <span className="text-base font-semibold px-4 py-1.5 bg-[#1B2A4A] text-white rounded-full shadow-md">
            Slide {currentSlide + 1} / {totalSlides}
          </span>
          <button onClick={prevSlide} className="p-3 bg-[#E8671A] hover:bg-orange-600 text-white rounded-full shadow-lg transition-transform hover:scale-105">
            <svg className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button onClick={nextSlide} className="p-3 bg-[#E8671A] hover:bg-orange-600 text-white rounded-full shadow-lg transition-transform hover:scale-105">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 1: TITLE ─────────────────────────────────────────────────────────
function Slide1Title() {
  return (
    <div className="w-full h-full bg-[#1B2A4A] flex">
      {/* Left Panel */}
      <motion.div variants={slideInRight} className="w-[60%] h-full bg-[#162340] p-16 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#E8671A]"></div>
        
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-[#E8671A] text-white px-5 py-2 rounded text-base font-bold tracking-wider">TEAM GROUP 33</span>
          <span className="border border-[#3A5080] text-[#A0BAE0] bg-[#243457] px-5 py-2 rounded text-base">Problem Statement: PS-EDU-07</span>
        </div>

        <motion.h1 variants={itemVariants} className="text-6xl font-serif font-bold text-white leading-tight mb-2">
          Personalized Career
        </motion.h1>
        <motion.h1 variants={itemVariants} className="text-6xl font-serif font-bold text-[#F5832A] leading-tight mb-2">
          Acceleration &
        </motion.h1>
        <motion.h1 variants={itemVariants} className="text-6xl font-serif font-bold text-white leading-tight mb-8">
          Learning Platform
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-[#A0BAE0] italic mb-10 border-b border-[#E8671A]/30 pb-10">
          Leveraging AI Technologies to Bridge the Skill-to-Career Gap
        </motion.p>

        <motion.div variants={itemVariants}>
          <h3 className="text-[#F5832A] font-bold mb-4 uppercase tracking-wider text-lg">Team Members</h3>
          <div className="grid grid-cols-2 gap-4 text-[#C8D8F0] text-lg">
            <ul className="space-y-2">
              <li>• Om Waman Panchal</li>
              <li>• Anushka Sunil Jadhav</li>
              <li>• Kiran Nandi</li>
            </ul>
            <ul className="space-y-2">
              <li>• Harshad Gore</li>
              <li>• Yash Chhatrapati Bisen</li>
              <li>• Pranav Bhagwan Paralkari</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Panel */}
      <motion.div variants={itemVariants} className="w-[40%] h-full relative overflow-hidden flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-[#243457] rounded-full -right-20 opacity-50 blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#E8671A] rounded-full -bottom-20 -right-20 opacity-20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl"><Brain size={64} className="text-[#F5832A]" /></div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl"><TrendingUp size={64} className="text-white" /></div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl"><GraduationCap size={64} className="text-white" /></div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl"><Briefcase size={64} className="text-[#F5832A]" /></div>
          </div>
          <h2 className="text-4xl font-serif font-bold text-center text-white leading-snug">
            AI-Powered<br/>Learning &<br/>Career Engine
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

// ─── SLIDE 2: PROBLEM STATEMENT ─────────────────────────────────────────────
function Slide2Problem() {
  const problems = [
    { icon: Compass, title: "1. No Personalized Career Path", body: "Every student has a different baseline & speed. Existing platforms (LMS, EdTech apps) deliver the same content linearly without understanding where the student currently stands." },
    { icon: BookOpen, title: "2. Static, One-Size-Fits-All Learning", body: "Current systems are digitized textbooks. If a student struggles with DSA but is strong in SQL, the system progresses linearly without real-time adjustments to signals." },
    { icon: Eye, title: "3. Low Engagement Monitoring Gap", body: "Educators have no reliable way to know if a student is genuinely engaged or just has a tab open. Interventions happen too late — post-failure." },
    { icon: AlertTriangle, title: "4. Widening Skill-to-Job Gap", body: "Classroom skills lag industry demands by 3–5 years. Students graduate blind to what specific skills they miss, hiring companies, and market benchmarks." },
  ];

  return <SlideLayout title="PROBLEM STATEMENT & MOTIVATION" num="01">
    <div className="flex gap-6 h-full">
      {/* Left Col: Stat & Motivation */}
      <motion.div variants={itemVariants} className="w-1/3 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
          <div className="text-[#E8671A] font-bold text-6xl mb-3">65%</div>
          <h3 className="text-[#1B2A4A] font-bold text-xl mb-3">Remain Unemployable (NASSCOM)</h3>
          <p className="text-slate-600 text-base leading-relaxed">
            India produces 1.5M+ engineers annually, yet systemic failures in the education ecosystem fail to connect learning to real-world outcomes. <b className="text-[#1B2A4A]">This systemic disconnect forces companies to spend months retraining fresh hires.</b>
          </p>
        </div>
        <div className="bg-[#1B2A4A] p-6 rounded-xl shadow-md flex-1 text-white flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-[#E8671A] w-6 h-6" />
            <h3 className="font-bold text-lg text-[#F5832A]">The Motivation</h3>
          </div>
          <p className="text-slate-300 text-[15px] leading-relaxed">
            This problem sits at the intersection of three national challenges: <b>education quality, youth unemployment, and digital access</b>. Most solutions address only one layer. None close the full loop from <i>diagnostic assessment → personalized learning → career readiness → placement support</i> using AI at every stage. <b className="text-[#E8671A]">By bridging this gap, we transform standard degrees into actual, highly capable careers.</b>
          </p>
        </div>
      </motion.div>

      {/* Right Col: 4 Critical Gaps */}
      <div className="w-2/3 grid grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <motion.div key={i} variants={itemVariants} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1B2A4A] p-3 rounded-full"><p.icon className="text-white w-5 h-5" /></div>
              <h3 className="text-[#1B2A4A] font-bold text-lg">{p.title}</h3>
            </div>
            <p className="text-slate-600 text-base leading-relaxed flex-1">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>;
}

// ─── SLIDE 3: SOLUTION ──────────────────────────────────────────────────────
function Slide3Solution() {
  const solutions = [
    { icon: Brain, col: "bg-blue-900", title: "1. Diagnostic Onboarding", prob: "Solves: No personalized starting point", body: "Day-one multimodal diagnostic (text, audio, video, interactive) maps deep, multidimensional baselines, identifying strong/weak areas to generate a precise skill profile." },
    { icon: Settings, col: "bg-green-800", title: "2. Adaptive Learning Engine", prob: "Solves: Static content delivery", body: "Continuously monitors quiz scores, accuracy, and time-on-task to adjust difficulty and content format (video vs text). Flags when students fall behind." },
    { icon: TrendingUp, col: "bg-orange-900", title: "3. Career Guidance Intelligence", prob: "Solves: Skill-to-job gap", body: "ML parses resumes, generates role recommendations, runs vector skill-gap analyses, fetches live Adzuna jobs, and provides LLM career coaching." },
    { icon: Mic, col: "bg-indigo-900", title: "4. AI Mock Interview System", prob: "Solves: Interview unpreparedness", body: "Integrated with Vapi Voice AI to conduct voice-based interviews. Real-time transcript capture generating structured feedback and actionable points." },
    { icon: Activity, col: "bg-purple-900", title: "5. Attention Analytics", prob: "Solves: No visibility into engagement", body: "Captures temporal attention snapshots during study. Aggregates into engagement curves and drop-off points for early teacher intervention." },
    { icon: Gamepad2, col: "bg-amber-800", title: "6. Gamified Rapid Battle", prob: "Solves: Low motivation", body: "Timed quiz battles, leaderboards, and attempt history make assessment feel like a game, significantly boosting voluntary practice rates." },
  ];

  return <SlideLayout title="SOLUTION & HOW IT ADDRESSES THE GAPS" num="02">
    <motion.div variants={itemVariants} className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
      <p className="text-slate-600 text-base italic">
        A Personalized System that uses AI at every touchpoint. It doesn't just deliver content; <b className="text-[#E8671A]">it listens, adapts, evaluates, and guides continuously.</b> <b className="text-[#1B2A4A]">This dynamic feedback loop transforms passive viewers into active, job-ready professionals.</b>
      </p>
    </motion.div>
    <div className="grid grid-cols-3 gap-6 h-full custom-scrollbar overflow-y-auto pr-3 pb-2">
      {solutions.map((s, i) => (
        <motion.div key={i} variants={itemVariants} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group">
          <div className="flex items-start gap-4 mb-3">
            <div className={`${s.col} p-3 rounded-lg mt-1`}><s.icon className="text-white w-6 h-6" /></div>
            <div>
              <h3 className="text-[#1B2A4A] font-bold text-base leading-tight">{s.title}</h3>
              <p className="text-[13px] text-[#E8671A] font-bold uppercase tracking-wider mt-1.5">{s.prob}</p>
            </div>
          </div>
          <p className="text-slate-600 text-base leading-relaxed mt-2">{s.body}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>;
}

// ─── SLIDE 4: NOVELTY ───────────────────────────────────────────────────────
function Slide4Novelty() {
  const steps = [
    { t: "1. Diagnostic", d: "Multimodal onboarding" },
    { t: "2. Skill Profile", d: "JSON baseline mapped" },
    { t: "3. Adaptive Content", d: "Format & pacing adjusted" },
    { t: "4. Evaluation", d: "Continuous logging" },
    { t: "5. Career Engine", d: "Market alignment" },
    { t: "6. Interview", d: "Vapi Voice session" }
  ];

  return <SlideLayout title="NOVELTY: FLOW, ALGORITHMS & EXECUTION" num="03">
    <motion.p variants={itemVariants} className="text-[15px] text-slate-600 mb-6">
      <b className="text-[#1B2A4A]">What makes this novel?</b> Most platforms teach OR assess OR guide. We do all three via a shared intelligence layer (Closed Loop).
    </motion.p>

    {/* Process Flow with animated drawing line and popping steps */}
    <motion.div variants={containerVariants} className="flex justify-between items-center mb-8 relative px-4">
      {/* Animated Line */}
      <motion.div 
        variants={lineVariants}
        style={{ transformOrigin: "left" }}
        className="absolute left-4 right-4 h-1 bg-slate-300 top-[35%] -z-10"
      />
      
      {/* Steps */}
      {steps.map((step, i) => (
        <motion.div variants={itemVariants} key={i} className="flex flex-col items-center gap-2 bg-slate-50 px-2 w-[16%]">
          <div className="w-8 h-8 rounded-full bg-[#1B2A4A] border-2 border-[#E8671A] flex items-center justify-center text-white text-sm font-bold shadow-lg transition-transform hover:scale-110">
            {i + 1}
          </div>
          <span className="text-[13px] font-bold text-[#1B2A4A] text-center">{step.t}</span>
          <span className="text-xs text-slate-500 text-center leading-tight">{step.d}</span>
        </motion.div>
      ))}
    </motion.div>

    <div className="grid grid-cols-3 gap-6 flex-1 min-h-[300px]">
      {/* Algorithms */}
      <motion.div variants={itemVariants} className="bg-white border border-slate-200 rounded-xl shadow-md flex flex-col">
        <div className="bg-[#1B2A4A] text-white py-2.5 px-4 font-bold text-[15px] flex items-center gap-2 rounded-t-xl"><Cpu className="w-5 h-5" /> KEY ALGORITHMS</div>
        <div className="p-5 space-y-5 custom-scrollbar overflow-y-auto flex-1">
          <div><b className="text-[#E8671A] text-[15px] block mb-1">Career Recommendation Engine:</b><p className="text-slate-600 text-[15px] leading-snug">Hybrid collaborative + content filtering. Cosine similarity between student/resume vectors and job role vectors.</p></div>
          <div><b className="text-[#E8671A] text-[15px] block mb-1">Skill Gap Vector Analysis:</b><p className="text-slate-600 text-[15px] leading-snug">Vector distance delta = prioritized missing skills with acquisition effort.</p></div>
          <div><b className="text-[#E8671A] text-[15px] block mb-1">Adaptive Learning:</b><p className="text-slate-600 text-[15px] leading-snug">Accuracy threshold rules (60% drops difficulty) + time-based pacing signals.</p></div>
          <div><b className="text-[#E8671A] text-[15px] block mb-1">Attention & Content Adapation:</b><p className="text-slate-600 text-[15px] leading-snug">Temporal snapshot aggregation; Tracks format (video/text) vs. accuracy to build pref models.</p></div>
        </div>
      </motion.div>

      {/* Execution */}
      <motion.div variants={itemVariants} className="bg-white border border-slate-200 rounded-xl shadow-md flex flex-col">
        <div className="bg-[#E8671A] text-white py-2.5 px-4 font-bold text-[15px] flex items-center gap-2 rounded-t-xl"><Settings className="w-5 h-5" /> PROCESS EXECUTION</div>
        <div className="p-5 text-[15px] text-slate-600 space-y-5 custom-scrollbar overflow-y-auto">
          <p><b>Backend:</b> Node.js + Express handles API routing, JWT auth, and RBAC separating Student/Teacher/Admin flows.</p>
          <p><b>ML Microservice:</b> Python FastAPI runs independently. Handles computationally heavy resume parsing, role recommendations, LLM chat, and market trends.</p>
          <p><b>Communication:</b> Internal HTTP calls via <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[#E8671A] font-mono text-sm">ML_SERVICE_URL</code>. Real-time features use Socket.IO. File handling via Multer.</p>
        </div>
      </motion.div>

      {/* I/O */}
      <motion.div variants={itemVariants} className="bg-white border border-slate-200 rounded-xl shadow-md flex flex-col">
        <div className="bg-emerald-700 text-white py-2.5 px-4 font-bold text-[15px] flex items-center gap-2 rounded-t-xl"><LineChart className="w-5 h-5" /> INPUTS & OUTPUTS</div>
        <div className="p-5 custom-scrollbar overflow-y-auto space-y-6">
          <div>
            <b className="text-[#1B2A4A] text-[15px] block border-b border-slate-200 mb-2 pb-1">Inputs</b>
            <ul className="list-disc pl-4 text-slate-600 text-[15px] space-y-2">
              <li>Reg. data & Resumes (PDF/DOCX)</li>
              <li>Diagnostic (Text/Audio/Video)</li>
              <li>Attention snapshots & Quiz marks</li>
              <li>Vapi real-time voice transcripts</li>
            </ul>
          </div>
          <div>
            <b className="text-[#1B2A4A] text-[15px] block border-b border-slate-200 mb-2 pb-1">Outputs</b>
            <ul className="list-disc pl-4 text-slate-600 text-[15px] space-y-2">
              <li>Structured Skill profile & Gap Map</li>
              <li>Ranked role recommendations</li>
              <li>Adaptive topic sequence format</li>
              <li>Interview transcripts & Dashboards</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </SlideLayout>;
}

// ─── SLIDE 5: TECH STACK ────────────────────────────────────────────────────
function Slide5TechStack() {
  const stacks = [
    { label: "Frontend", col: "bg-blue-900", d: "React 18, Vite, React Router, Socket.IO Client", icon: MonitorSmartphone },
    { label: "Backend", col: "bg-[#1B2A4A]", d: "Node.js, Express, JWT Auth, RBAC, Multer", icon: ServerCog },
    { label: "ML Microservice", col: "bg-[#E8671A]", d: "Python FastAPI (Independent service)", icon: Bot },
    { label: "Database", col: "bg-emerald-800", d: "MongoDB (Document-based NoSQL)", icon: Database },
  ];

  return <SlideLayout title="TECH STACK & ARCHITECTURE" num="04">
    <div className="flex gap-8 h-full items-start pb-4">
      
      {/* Left: Stack Details */}
      <motion.div variants={itemVariants} className="w-1/3 flex flex-col gap-4 custom-scrollbar overflow-y-auto h-full pr-3">
        {stacks.map((s, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className={`${s.col} text-white px-2.5 py-1 rounded text-xs font-bold uppercase inline-block`}>{s.label}</div>
              <s.icon className={`w-5 h-5 ${s.col.includes('E8671A') ? 'text-[#E8671A]' : 'text-slate-400'}`} />
            </div>
            <p className="text-[15px] text-slate-600 font-medium leading-tight">{s.d}</p>
          </div>
        ))}
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
           <div className="flex items-center justify-between mb-3">
             <div className="bg-purple-800 text-white px-2.5 py-1 rounded text-xs font-bold uppercase inline-block">External Integrations</div>
             <Puzzle className="w-5 h-5 text-purple-800" />
           </div>
           <ul className="text-[15px] text-slate-600 space-y-2 list-disc pl-4">
             <li><b>Ollama:</b> Local LLM for privacy & low cost</li>
             <li><b>Groq / Gemini:</b> Fast cloud LLM generation</li>
             <li><b>Vapi:</b> Voice AI mock interviews</li>
             <li><b>Adzuna:</b> Live job market listings</li>
             <li><b>Grok AI:</b> Content generation</li>
           </ul>
        </div>
      </motion.div>

      {/* Right: Architecture Diagram */}
      <motion.div variants={itemVariants} className="w-2/3 bg-white border border-slate-200 rounded-xl shadow-lg p-6 flex flex-col relative h-full">
        <h3 className="text-[#1B2A4A] font-bold text-base mb-6 uppercase tracking-widest border-b border-slate-200 pb-3 flex justify-between items-center">
          <span>Layer-by-Layer Architecture</span>
          <span className="text-xs text-slate-400 font-normal normal-case">CORS Configured via Env Vars</span>
        </h3>
        
        <div className="flex-1 flex flex-col justify-between relative px-10">
          <div className="absolute top-4 bottom-4 left-1/2 w-1 bg-slate-200 -z-10 -translate-x-1/2"></div>
          
          <ArchBox title="[User Browser / Mobile App]" sub="HTTPS" bg="bg-slate-100 text-slate-700 border-slate-300" />
          
          <div className="flex justify-center my-2"><Arrow /></div>
          <ArchBox title="[React + Vite Frontend]" sub="Socket.IO Real-time Channel" bg="bg-blue-50 text-blue-800 border-blue-200" />
          
          <div className="flex justify-center my-2"><Arrow label="REST API (VITE_API_URL)" /></div>
          <div className="flex justify-center gap-6">
            <ArchBox title="[Node.js + Express Backend]" bg="bg-[#1B2A4A] text-white border-[#1B2A4A]" w="w-3/5" />
            <ArchBox title="[MongoDB]" bg="bg-emerald-700 text-white border-emerald-700" w="w-2/5" />
          </div>
          
          <div className="flex justify-center my-2"><Arrow label="Internal HTTP (ML_SERVICE_URL)" /></div>
          <ArchBox title="[Python FastAPI ML Microservice]" bg="bg-[#E8671A] text-white border-[#E8671A]" />
          
          <div className="flex justify-center my-2"><Arrow /></div>
          <ArchBox title="[Ollama] + [Groq API] + [Gemini API] + [Vapi Voice] + [Adzuna]" bg="bg-purple-50 text-purple-800 border-purple-200" />
        </div>
      </motion.div>
    </div>
  </SlideLayout>;
}

const ArchBox = ({ title, sub, bg, w = "w-full" }) => (
  <div className={`${w} ${bg} border rounded-xl p-3 text-center shadow-sm relative z-10`}>
    <div className="text-[15px] font-bold">{title}</div>
    {sub && <div className="text-[13px] opacity-80 mt-1">{sub}</div>}
  </div>
);
const Arrow = ({label}) => (
  <div className="flex items-center flex-col relative h-full">
    {label && <span className="text-xs bg-white px-2 py-0.5 text-slate-500 rounded border border-slate-200 absolute -translate-y-3 z-20 whitespace-nowrap">{label}</span>}
    <div className="h-6 w-1 bg-slate-300"></div>
  </div>
);

// ─── SLIDE 6: APPLICATIONS ──────────────────────────────────────────────────
function Slide6Applications() {
  const apps = [
    { title: "Higher Education", body: "Campus-wide learning accelerator replacing generic placement tests." },
    { title: "Corporate L&D", body: "Skill-gap mapping & role simulation for strategic HR workforce planning." },
    { title: "EdTech API/SaaS", body: "Recommendation & skill-gap APIs licensed to 3rd party apps." },
    { title: "Govt Skill India", body: "Audio/video onboarding for low-literacy/rural PMKVY deployment." },
    { title: "Exam Prep (JEE/UPSC)", body: "Rapid battle gamification & analytics for high-stakes tests." },
    { title: "Recruitment Agencies", body: "Vapi AI interviews pre-screen candidates to match open roles." },
  ];

  return <SlideLayout title="APPLICATIONS, IMPACT & SKILLSET" num="05">
    <div className="flex gap-6 h-full pb-4">
      
      {/* Target Applications Grid */}
      <motion.div variants={itemVariants} className="w-[55%] flex flex-col">
        <h3 className="text-base font-bold text-[#1B2A4A] mb-4 uppercase tracking-wider flex items-center gap-2"><Globe className="w-5 h-5 text-[#E8671A]"/> Target Applications</h3>
        <div className="grid grid-cols-2 gap-4 custom-scrollbar overflow-y-auto pr-3 pb-2">
          {apps.map((a, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:border-[#E8671A] transition-colors">
              <h4 className="text-[15px] font-bold text-[#1B2A4A] mb-1.5">{i+1}. {a.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
        
        {/* Advanced Skills Used */}
        <div className="mt-6 bg-[#1B2A4A] p-5 rounded-xl shadow-md text-white">
          <h3 className="text-[15px] font-bold text-[#F5832A] mb-3 uppercase tracking-wider flex items-center gap-2"><Code className="w-5 h-5"/> Advanced Skillset Used</h3>
          <div className="flex flex-wrap gap-2">
            {["LLMs (Ollama/Groq/Gemini)", "RAG Pipelines", "Voice AI & NLP", "Recommender Systems", "Vector Embeddings", "Attention Modeling", "Multimodal Assessments", "Microservices", "Socket.IO", "RBAC + JWT"].map(skill => (
              <span key={skill} className="bg-[#243457] border border-[#3A5080] px-2.5 py-1 rounded text-[13px] font-medium text-[#A0BAE0]">{skill}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Societal Contribution */}
      <motion.div variants={itemVariants} className="w-[45%] bg-white border border-slate-200 rounded-xl shadow-md p-6 flex flex-col">
        <h3 className="text-base font-bold text-[#1B2A4A] mb-5 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-3"><HeartHandshake className="w-5 h-5 text-emerald-600"/> Societal Contribution</h3>
        <div className="space-y-6 custom-scrollbar overflow-y-auto pr-3 flex-1">
          {[
            { t: "Democratization of Coaching", d: "Makes elite AI-powered career intelligence accessible to any student with internet access." },
            { t: "Reducing Youth Unemployment", d: "Directly improves employability outcomes by closing the skill-to-job gap via targeted market alignment." },
            { t: "Bridging Urban-Rural Divide", d: "Multimodal (audio/video) lowers barriers for non-native English speakers or lower-resource backgrounds." },
            { t: "Empowering Teachers", d: "Attention analytics give teachers actionable intelligence for earlier, more effective interventions." },
            { t: "Mental Health", d: "Gamification & adaptive pacing contribute to lower academic anxiety and higher self-efficacy." }
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#E8671A] shrink-0 mt-0.5" />
              <div>
                <span className="text-[15px] font-bold text-[#1B2A4A] block mb-0.5">{c.t} </span>
                <span className="text-[15px] text-slate-600 leading-relaxed">{c.d}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </SlideLayout>;
}

// ─── SLIDE 7: BUSINESS & CONCLUSION ─────────────────────────────────────────
function Slide7Business() {
  return (
    <div className="w-full h-full bg-[#1B2A4A] flex relative overflow-hidden">
      {/* Top Header */}
      <div className="absolute top-8 left-12 right-12 flex justify-between z-10 border-b border-[#3A5080] pb-5">
        <h2 className="text-4xl font-serif font-bold text-white tracking-wide">BUSINESS MODEL <span className="text-[#F5832A]">& CONCLUSION</span></h2>
        <div className="bg-[#E8671A] text-white px-4 py-2 rounded text-sm font-bold h-fit shadow-lg">Slide 06</div>
      </div>

      <div className="flex w-full pt-32 px-12 gap-8 pb-8 h-full">
        {/* Left: Business Model & Costs */}
        <motion.div variants={slideInRight} className="w-1/2 flex flex-col h-full pr-4">
          <h3 className="text-[#F5832A] font-bold tracking-widest text-[15px] mb-4 flex items-center gap-2"><Banknote className="w-5 h-5"/> REVENUE STREAMS</h3>
          <div className="space-y-4 mb-4 flex-1">
            {[
              { t: "1. B2C Freemium", d: "Rs. 499–999/mo premium for full adaptive engine, coaching, and mock interviews." },
              { t: "2. B2B Institution", d: "Annual per-seat license. Includes teacher dashboards, CMS, and admin controls." },
              { t: "3. API / SaaS Licensing", d: "Highest-margin. Licenses core intelligence APIs to 3rd party EdTechs." },
              { t: "4. Placement Partners", d: "Referral/success fees from Adzuna/Naukri for hired students." },
              
            ].map((s, i) => (
              <div key={i} className="bg-[#243457] border border-[#3A5080] p-3 rounded-lg">
                <h4 className="text-white font-bold text-[14px] mb-1">{s.t}</h4>
                <p className="text-[#A0BAE0] text-[13px] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          {/* ---> NEW COMPACT VERTICAL COST ESTIMATION BLOCK <--- */}
          <h3 className="text-[#F5832A] font-bold tracking-widest text-[15px] mb-3 mt-4 flex items-center gap-2"><Calculator className="w-5 h-5"/> MONTHLY INFRASTRUCTURE COST</h3>
          <div className="bg-[#162340] border border-[#3A5080] p-4 rounded-lg shadow-inner flex flex-col">
              
              {/* Individual Line Items */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4 border-b border-[#3A5080] pb-4">
                  <div className="flex justify-between items-center">
                      <div><div className="text-[13px] font-bold text-white">Backend Server</div><div className="text-[11px] text-[#A0BAE0]">Render/AWS</div></div>
                      <div className="text-[13px] font-mono text-[#E8671A] font-bold">₹3k–8k</div>
                  </div>
                  <div className="flex justify-between items-center">
                      <div><div className="text-[13px] font-bold text-white">MongoDB Atlas</div><div className="text-[11px] text-[#A0BAE0]">Database</div></div>
                      <div className="text-[13px] font-mono text-[#E8671A] font-bold">₹2k–5k</div>
                  </div>
                  <div className="flex justify-between items-center">
                      <div><div className="text-[13px] font-bold text-white">LLM APIs</div><div className="text-[11px] text-[#A0BAE0]">Gemini + Groq</div></div>
                      <div className="text-[13px] font-mono text-[#E8671A] font-bold">₹5k–25k</div>
                  </div>
                  <div className="flex justify-between items-center">
                      <div><div className="text-[13px] font-bold text-white">Vapi AI Interviews</div><div className="text-[11px] text-[#A0BAE0]">₹2–5/min</div></div>
                      <div className="text-[13px] font-mono text-[#E8671A] font-bold">₹10k–30k</div>
                  </div>
                  {/* <div className="flex justify-between items-center col-span-2 mt-1">
                      <div><div className="text-[13px] font-bold text-white">Storage</div><div className="text-[11px] text-[#A0BAE0]">Files/Assets</div></div>
                      <div className="text-[13px] font-mono text-[#E8671A] font-bold">₹1k–3k</div>
                  </div> */}
              </div>

              {/* Totals Section */}
              <div className="flex justify-between items-center bg-[#E8671A]/10 p-3 rounded border border-[#E8671A]/30">
                  <div>
                      <div className="text-[11px] text-[#F5832A] font-bold uppercase tracking-wider mb-1">Pilot Stage (Total)</div>
                      <div className="text-[18px] font-bold text-white font-mono">₹20k–50k<span className="text-xs text-[#A0BAE0]">/mo</span></div>
                  </div>
                  <div className="text-right">
                      <div className="text-[11px] text-[#F5832A] font-bold uppercase tracking-wider mb-1">At Scale (50k users)</div>
                      <div className="text-[18px] font-bold text-white font-mono">₹2L–5L<span className="text-xs text-[#A0BAE0]">/mo</span></div>
                  </div>
              </div>

              <div className="text-[12px] text-[#A0BAE0] mt-3 text-center italic">
                  *Manageable at scale: <b>Ollama</b> handles local inference & <b>Microservices</b> scale independently.
              </div>
          </div>
        </motion.div>

        {/* Right: Comp Edge & Conclusion */}
        <motion.div variants={slideInRight} className="w-1/2 flex flex-col h-full">
          <div className="bg-[#162340] border-l-4 border-[#E8671A] p-6 rounded-r-lg mb-6 shadow-lg">
            <h3 className="text-[#F5832A] font-bold tracking-widest text-[15px] mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> COMPETITIVE ADVANTAGE</h3>
            <ul className="text-[15px] text-white space-y-3 list-disc pl-5">
              <li><b>The Only Platform</b> combining diagnostics, adaptive learning, career AI, voice interviews, and attention analytics in one system.</li>
              <li><b>Local LLM Inference</b> via Ollama reduces costs and enables offline/low-connectivity deployment.</li>
              <li><b>Multimodal Design</b> (text/audio/video/interactive) creates significantly richer profiles than single-modality competitors.</li>
              <li><b>End-to-End Data Ownership</b> creates a longitudinal dataset that continually improves AI accuracy.</li>
            </ul>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#E8671A]/20 to-transparent border border-[#E8671A]/30 p-6 rounded-xl flex flex-col justify-center">
            <h3 className="text-white font-bold tracking-widest text-base mb-3">CONCLUSION</h3>
            <p className="text-[15px] text-[#C8D8F0] leading-relaxed italic">
              "We address a critical, underserved need using a full-stack AI approach that no single solution covers comprehensively. The architecture is built for independent scale (decoupled ML, API-first design), and the business model is highly resilient.<br/><br/>Most importantly, it is mission-aligned: <b>every technical decision serves the goal of making high-quality, personalized career acceleration accessible to every student, regardless of background.</b>"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── SHARED LAYOUT WRAPPER ──────────────────────────────────────────────────
function SlideLayout({ title, num, children }) {
  return (
    <div className="w-full h-full bg-slate-50 flex flex-col relative">
      <div className="bg-[#1B2A4A] w-full pt-6 pb-5 px-12 relative shadow-md flex justify-between items-center z-10">
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#E8671A]"></div>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide">{title}</h2>
        <div className="bg-[#E8671A] text-white px-4 py-1.5 rounded text-[15px] font-bold">Slide {num}</div>
      </div>
      <div className="flex-1 p-10 flex flex-col overflow-hidden">{children}</div>
    </div>
  );
}