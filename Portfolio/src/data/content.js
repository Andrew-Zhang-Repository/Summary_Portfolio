export const profile = {
  name: "Andrew Zhang",
  title: "Software Engineer",
};

export const overview = [
  {
    title: "Hobbyist & full-time software engineer",
    description:
      "I enjoy building practical software for myself and others, incorporating efficiency into daily tasks. I also value gaining professional experience in this field to keep myself open to future opportunities.",
    image: "/start%20section/Software%20Engineer.webp",
    alt: "Software engineer illustration",
  },
  {
    title: "Quality Assurance Testing",
    description:
      "I have a strong interest in this aspect of software engineering, as it serves as the final barrier between users and developers. It is also my main professional role at the moment.",
    image: "/start%20section/quality%20assurance.jpg",
    alt: "Quality assurance illustration",
  },
  {
    title: "Hardware + custom firmware / home server / customized IT",
    description:
      "I am currently working on custom projects using ordered hardware and my software skills, including building a custom home server to improve efficiency at home.",
    image: "/start%20section/Hardware.webp",
    alt: "Hardware and custom IT illustration",
  },
  {
    title: "AI",
    description:
      "I enjoy researching open-weight models and running inference locally on various pieces of hardware to extend my software and AI skills.",
    image: "/start%20section/ai.png",
    alt: "AI illustration",
  },
];



export const resumeIntro = {
  heading: "Resume",
  description:
    "A brief overview of my education, work experience, and certifications. Download my resume for full details.",
};

export const experience = [
  {
    company: "Air New Zealand",
    role: "Graduate Software Engineer",
    dates: "Present",
    bullets: ["Quality Assurance Testing", "Project Design"],
    image: "/work%20exp/air-new-zealand-1-logo-black-and-white.png",
    alt: "Air New Zealand logo",
  },
  {
    company: "PorterverseTech",
    role: "Mobile Developer",
    dates: "November 2025 - January 2026",
    bullets: [
      "Built cross-platform compatible apps for iOS and Android",
      "Implemented CI/CD pipeline tests",
      "Managed token storage and security for sensitive environment variables",
      "Designed scalable and modernised tech stacks",
    ],
    image: "/work%20exp/porterverse.png",
    alt: "PorterverseTech logo",
  },
  {
    company: "Dynamo Hub Consulting",
    role: "Software Engineer Intern",
    dates: "March 2026 - August 2026",
    bullets: [
      "Shadowed engineers and tech leads across multiple projects",
      "Planned, structured, and quality-tested multiple deployed websites",
    ],
    image: "/work%20exp/dynamohub.png",
    alt: "Dynamo Hub Consulting logo",
  },
];

export const education = [
  {
    name: "University of Melbourne",
    degree: "Bachelor of Science",
    major: "Computer Science",
    timeframe: "2022-2025",
    image: "/Education/unimelb.jpg",
  },
  {
    name: "University of Auckland",
    degree: "Post-Graduate Engineering Studies",
    major: "Software Engineering",
    timeframe: "Present",
    image: "/Education/auckland.jpg",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    description:
      "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
    image: "/Certs/Cloud%20architect.png",
  },
  {
    name: "AWS Educate Introduction to Generative AI",
    description:
      "Earners of this badge have completed the Introduction to Generative Artificial Intelligence training and achieved the required scores on the post-course assessment.",
    image: "/Certs/Aws%20ai.png",
  },
];

export const projects = [
  {
    name: "photo_lib",
    description:
      "Image storage using AWS services, including image analysis using Amazon Rekognition AI. It has an account, database, and bucket system for users.",
    techStack: ["React", "Python", "AWS", "FastAPI", "Docker", "CI/CD"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/photo_lib",
  },
  {
    name: "BitTorrent_Client",
    description:
      "A BitTorrent client that works with UDP and TCP, but has no compatibility with WSS. It requires correctly bencoded torrent files and non-deprecated peers in either UDP or TCP announce links. No torrenting libraries are used—only curl, crypto, and SSL for hashes, and pthreads for concurrent downloading from different peers.",
    techStack: ["C++", "C", "Bash", "Docker"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/BitTorrent_Client",
  },
  {
    name: "NoteTaker",
    description:
      "An app built with Python and Tkinter that provides an invisible note app, visible only on the client side by using the WDA_EXCLUDEFROMCAPTURE (0x00000011) flag from Windows documentation. It includes adjustable opacity, text colors, and optional AI integration with speaker-source recording and transcription capabilities. AI integration uses free Gemini API keys that can be entered in the config if the user chooses to use this feature; otherwise, the rest of the app can still be used.",
    techStack: ["Python", "Downloadable Application"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/Note_Taker",
  },
  {
    name: "PR_Review_Agent",
    description:
      "A local multi-agent code review tool that uses Ollama-hosted LLMs to analyze git diffs and produce structured PR reviews. It uses local Ollama models due to constraints of using cloud models on servers and model constraints in GitHub workflow VMs.",
    techStack: ["RAG", "Python", "Vectorized DBs", "PyPI"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/PR_Review_Agent",
  },
];

export const links = {
  github: "https://github.com/Andrew-Zhang-Repository",
  linkedin: "https://www.linkedin.com/in/andrew-zhang-544b16296/",
  resumeUrl: "/Resume.pdf",
  email: "andrewzhang0313@gmail.com",
  phone: "+64 21 081 50813",
};
