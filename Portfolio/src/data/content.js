export const profile = {
  name: "Andrew Zhang",
  title: "Software Engineer || Software Developer",
  summary:
    `Coding never fasciniated me that much in the traditional sense. 
    But in terms of building I've always loved designing and building things from the ground up. 
    Which I now reflect in my software developer goals.`,
};

export const experience = [
  {
    company: "Telus Digital",
    role: "Data Analyst",
    dates: "September 2025 - January 2026",
    bullets: [
      "Optimised queries with Indexing",
      "Managed server sided databases along with cloud storage servics",
      "Tableau and Power BI",
      "Pandas and FFmpeg"
    ],
  },
  {
    company: "PorterverseTech",
    role: "Mobile Developer",
    dates: "November 2025 - January 2026",
    bullets: [
      "Built cross-platform compatible apps for iOS and Android",
      "Architected pipelining tests for CI/CD",
      "Token storage, and security management for sensitive environment variables"
    ],
  },
];

export const projects = [
  {
    name: "photo_lib",
    description: `Image storage using AWS services, includes Image analysis using Rekognition AI
    has a account, database, and bucket system for users.`,
    techStack: ["React", "Python", "AWS", "FastAPI","Docker","CI/CD"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/photo_lib",
  },
  {
    name: "Github-Insights",
    description: `Insert a github link, fetches all of the users stats for a given year.
    This project is still deployed on Render check it out on my git.`,
    techStack: ["React","Python", "FastAPI", "Docker","CI/CD"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/Github-insights",
  },
  {
    name: "CLEAN_CSV",
    description: `Web app that has a login and account system, where users a can submit a CSV file.
    It uses a LangChain CSV agent Isolated using Docker to see issues in the file. Then fix and clean functions
    are called to clean the CSV along with agent help.`,
    techStack: ["Streamlit", "Google AUTH", "Python", "LangChain", "Docker","CI/CD"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/CLEAN_CSV",
  },
  {
    name: "Image Upscaler",
    description: "Insert image, AI models in Real-ESRGAN will upscale the facial image resolution using artifical pixels.",
    techStack: ["React", "Python", "Real-ESRGAN"],
    repoUrl: "https://github.com/Andrew-Zhang-Repository/Image-upscaler",
  },
];

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
