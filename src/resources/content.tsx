import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Darren",
  lastName: "Gideon",
  name: `Darren Gideon`,
  role: "Software Engineer",
  avatar: "/images/cupcakemancartoon.jpg",
  email: "darrengideons@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa", "中文"], // optional: Leave the array <em></em>pty if you don't want to display languages
};

// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: <>My weekly newsletter about creativity and engineering</>,
// };

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Cupcake-Legend",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/darrengideon/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Connecting ideas to code </>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Cupcake-Legend</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "work/implementation-of-blockchain-in-a-study-case-of-safe-deposit-boxes-for-land-certificates",
  },
  subline: (
    <>
      I'm Darren, a software engineer specializing in Full Stack Development,
      Cloud Engineering and Solutions Architecture.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A software engineer specializing in Full Stack Development, Cloud
        Engineering and Solutions Architecture.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Self-Employed",
        timeframe: "2025 - Present",
        role: "Solutions Architect & Developer",
        achievements: [
          <>
            Developed custom web applications for diverse business needs such as
            ERP & CRM implementations.
          </>,
          <>
            Interfaced with business owners to identify operational pain points
            and translated business objectives into technical project
            specifications.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/ERP CUPCAKE.png",
            alt: "Custom ERP Sales Interface",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ybaik.id",
        timeframe: "2025 - 2026",
        role: "Full Stack Developer Intern",
        achievements: [
          <>
            Developed a Laravel-based web application, managing both complex
            backend logic and precise UI adjustments to meet project
            specifications.
          </>,
          <>
            Designed and optimized relational database structures tailored to
            specific organizational requirements, ensuring data integrity and
            query efficiency.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/ybaik.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Outclass Indonesia",
        timeframe: "2025 - 2026",
        role: "AI Prompt Engineer Intern",
        achievements: [
          <>
            Conducted extensive research on generative AI tools to develop
            complex prompting strategies, ensuring high-fidelity output for both
            static assets and sequential video frames.
          </>,
          <>
            Leveraged AI models to produce marketing and educational video
            content, ensuring brand consistency and message clarity.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/scrooge1.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/scrooge2.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company:
          "Bangkit Academy led by Google, Tokopedia, Gojek and Traveloka",
        timeframe: "2024",
        role: "Cloud Computing Cohort",
        achievements: [
          <>
            FinSight is an all-in-one investment intelligence platform designed
            to bridge the gap between complex market data and actionable
            investor decisions. By combining machine learning with
            community-driven analytics, the platform empowers users to navigate
            the stock market with confidence.
          </>,
          <>
            Engineered a scalable, event-driven backend on Google Cloud Platform
            (GCP), orchestrating microservices via Cloud Run and Cloud Build.
            Integrated Firestore for real-time data persistence, Cloud Functions
            and Scheduler for automated web scraping workflows, and Pub/Sub for
            reliable push notification delivery to Android clients.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/finsight-01.png",
            alt: "Bangkit Capstone Project Title",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/finsight-02.png",
            alt: "Bangkit Capstone Product Description",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/finsight-03.png",
            alt: "Bangkit Capstone Project Cloud Architecture",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Surabaya",
        description: (
          <>
            Computer Science - Network & Cybersecurity. <br /> GPA: 3.92
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>
            Building full scale applications including but not limited to:
            end-to-end design, development and deployment
          </>
        ),
        tags: [
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "JQuery",
            icon: "jquery",
          },
          {
            name: "Express.js",
            icon: "express",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "cPanel",
            icon: "cpanel",
          },
          {
            name: "Ngrok",
            icon: "ngrok",
          },
          {
            name: "Hyperledger Fabric - Blockchain Technology",
            icon: "blockchain",
          },
        ],
      },
      {
        title: "Google Cloud",
        description: (
          <>
            Able to deploy, monitor, and maintain project infrastructure on
            Google Cloud, ensuring security and operational efficiency.
          </>
        ),
        tags: [
          {
            name: "Google Cloud",
            icon: "googlecloud",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/gcpcert.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "MikroTik",
        description: (
          <>
            Able to set up Internet connectivity, configure firewalls, manage
            DHCP/NAT, and deploy basic wireless/VPN services using MikroTik
            RouterOS.
          </>
        ),
        tags: [
          {
            name: "RouterOS",
            icon: "router",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/mtcna.png",
            alt: "Project image",
            width: 16,
            height: 22.624,
          },
        ],
      },
    ],
  },
};

// const blog: Blog = {
//   path: "/blog",
//   label: "Blog",
//   title: "Writing about design and tech...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – Cupcake-Legend`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery: Gallery = {
//   path: "/gallery",
//   label: "Gallery",
//   title: `Photo gallery – ${person.name}`,
//   description: `A photo collection by ${person.name}`,
//   // Images by https://lorant.one
//   // These are placeholder images, replace with your own
//   images: [
//     {
//       src: "/images/gallery/horizontal-1.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-4.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/horizontal-3.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-1.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/vertical-2.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/horizontal-2.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/horizontal-4.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-3.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//   ],
// };

export { person, social, home, about, work };
