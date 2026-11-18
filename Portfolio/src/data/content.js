export const profile = {
  name: "Andrew Zhang",
  title: "Software Engineer",
};

export const experience = [
  {
    company: "Air New Zealand",
    role: "Graduate Software Engineer",
    dates: "Present",
    bullets: [
      "Quality Assurance Testing",
      "Project Design",
    ],
  },
  {
    company: "PorterverseTech",
    role: "Mobile Developer",
    dates: "November 2025 - January 2026",
    bullets: [
      "Built cross-platform compatible apps for iOS and Android",
      "Implemented pipelining tests for CI/CD",
      "Token storage, and security management for sensitive environment variables",
      "Designed scalable and modernised tech stacks"

    ],
  },
  {
    company: "Dynamo hub Consulting",
    role: "Software Engineer Intern",
    dates: "March 2026 - August 2026",
    bullets : [
      "Shadowed engineers and tech leads over multiple projects",
      "Planned and structured, quality tested multiple deployed websites"
    ]
  }
];


export const education = [
  {name: "University of Melbourne",
    Bachelor: "Bachelor of Science",
    Major: "Computer Science",
    timeframe: "2022-2025"
  },
  {name : "University of Auckland",
    Bachelor : "Post-Graduate Engineering Studies",
    Major : "Software Engineering",
    timeframe: "Present"
  }
]

export const projects = [
  {
    name: "photo_lib",
    description: `Image storage using AWS services, includes Image analysis using Rekognition AI
    has a account, database, and bucket system for users.`,
    techStack: ["React", "Python", "AWS", "FastAPI","Docker","CI/CD"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/photo_lib",
  },
  {
    name: "BitTorrent_Client",
    description: `Bitorrent Client that works for UDP, and TCP but NO compatibility with WSS make sure torrent files are correctly bencoded files, and have non deprecated peers in either UDP or TCP announce links. No torrenting libraries used just curl, crypto, and ssl for hashes and pthreads for concurrent downloading with different peers.`,
    techStack: ["C++","C", "Bash", "Docker"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/BitTorrent_Client",
  },
  {
    name: "NoteTaker",
    description: `An app built on python, tkinter to provide you with an invisible note app only visible client sided by using WDA_EXCLUDEFROMCAPTURE = 0x00000011 tag taken from Windows documentation. Has opacity adjustable settings, text colors, and AI integration with recording from speaker source to transcription capabilities. AI integration is using free Gemini API keys that can be inputted in the config user chooses to use this feature if not the rest of the app still can be used. `,
    techStack: ["Python", "Downloadable Application"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/Note_Taker",
  },
  {
    name: "PR_Review_Agent",
    description: "A local multi-agent code review tool that uses Ollama-hosted LLMs to analyze git diffs and produce structured PR reviews. Uses local ollama models due to constraints of using cloud models on servers and model constraints github workflows vm.",
    techStack: ["RAG", "Python", "Vectorized Dbs", "deployed on pip"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/PR_Review_Agent",
  },
];

export const certifications = [
  {name: "AWS Certified Solutions Architect - Associate",
    description : "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant."
  },
  {name:"AWS Educate Introduction to Generative AI",
    description : "Earners of this badge have completed the Introduction to Generative Artificial Intelligence training and achieved the required scores on the post-course assessment"
  }
]

export const personal = {
  heading: "Technicalitys aside",
  bio: "I enjoy lifting weights, cardio, TV, Games. Just hard tasks in general to sharpen my grit and discipline, and sophisticated media to challenge critical thinking and personal philosophies.",
  hobbies: [
    {
      name: "Weight Lifting",
      images: [
        { src: "/Images/gym.jpeg", alt: "Gym" },
      ],
    },
    {
      name: "Cardio(boxing)",
      images: [
        { src: "/Images/redline.png", alt: "Redline" },
      ],
    },
    {
      name: "My Top 5 Games",
      images: [
        { src: "/Images/num1game.webp", alt: "Cyberpunk 2077" },
        { src: "/Images/gamenum2.jpg", alt: "Sekiro" },
        { src: "/Images/gamenum3.jpg", alt: "Forza Horizon 1" },
        { src: "/Images/num4game.webp", alt: "Dark Souls II" },
        { src: "/Images/num5game.jpg", alt: "Undertale" },
      ],
      list: ["Cyberpunk 2077", "Sekiro", "Forza Horizon 1", "Dark Souls II", "Undertale"],
    },
    {
      name: "My Top 5 TV",
      images: [
        { src: "/Images/num1tv.jpg", alt: "Mr. Robot" },
        { src: "/Images/num2tv.jpg", alt: "Breaking Bad" },
        { src: "/Images/num3tv.jpg", alt: "Person of Interest" },
        { src: "/Images/num4tv.webp", alt: "Severance" },
        { src: "/Images/num5tv.jpg", alt: "Pantheon" },
      ],
      list: ["Mr. Robot", "Breaking Bad", "Person of Interest", "Severance", "Pantheon"],
    },
  ],
};

export const links = {
  github: "https://github.com/Andrew-Zhang-Repository",
  linkedin: "https://www.linkedin.com/in/andrew-zhang-544b16296/",
  resumeUrl: "/Resume.pdf",
  email: "andrewzhang0313@icloud.com",
  phone1: "(+61) 420 622 654", 
  phone2: "(+64) 21 081 50813"
};
