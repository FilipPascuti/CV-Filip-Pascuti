import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Pășcuți Filip",
  initials: "PF",
  location: "Oradea, Romania, EET",
  locationLink: "https://www.google.com/maps/place/Oradea",
  about:
    "Full Stack Engineer focused on building products with real impact on the community",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple tasks from 0 to 1 delivering all the promises in time. Currently, I work mostly with TypeScript, React, Node.js, Python and Django.",
  avatarUrl: "https://avatars.githubusercontent.com/u/41921946?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "fspascuti@gmail.com",
    tel: "+40771528649",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/FilipPascuti",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/filip-sergiu-pascuti/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Babeș-Bolyai University, Cluj-Napoca, Romania",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2022",
    },
    {
      school: "Babeș-Bolyai University, Cluj-Napoca, Romania",
      degree: "Master's Degree in Software Engineering",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "SectorLabs",
      link: "https://www.sectorlabs.ro/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "",
      start: "2022",
      end: "Present",
      description:
        "Had the opportunity to work on a wide variety of tasks from creating map based search pages to writing periodic tasks for syncing our database with an external source of truth. During this time I worked mainly with: React, Typescript, Redux, Django, Python",
    },
    {
      company: "SectorLabs",
      link: "https://www.sectorlabs.ro/",
      badges: ["Remote"],
      title: "Full Stack Developer Intern",
      logo: "",
      start: "2021",
      end: "2021",
      description:
        "Implemented a distributed python scraper for multiple e-commerce sites. Used Python and Redis Message Broker. Deployed the script to Heroku and stored the useful data on a Postgres instance in the cloud.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Redux",
    "Angular",
    "Node.js",
    "Python",
    "Django",
  ],
  projects: [
    {
      title: "MyMusicPal",
      techStack: ["React", "TypeScript", "FastAPI", "Python"],
      description:
        "A platform to make finding people to play music with easy by using Machine Learning to recommend people with similar interests",
    },
    {
      title: "ReviewMyTunes",
      techStack: ["Angular", "Java", "SpringBoot", "Ruby", "Docker"],
      description:
        "A platform for keeping track of your most and least liked songs.",
    },
    {
      title: "Conferencist",
      techStack: [
        "Angular",
        "RxJs",
        "SpringBoot",
        "Kotlin",
        "Swagger",
        "Docker",
      ],
      description:
        "A platform for planning and organizing academic conferences.",
    },
  ],
} as const;
