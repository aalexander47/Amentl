import {
  
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
 leftarrow,
 rightarrow,
  tailwind,
  nodejs,

  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Road Map",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Trustworthy",
    icon: web,
  },
  {
    title: "Reliable",
    icon: mobile,
  },
  {
    title: "Objectives",
    icon: backend,
  },
  {
    title: "Movable",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
 
 
 
];

const experiences = [
  {
    title: "Problem statement Defination overview",
    company_name: "Step 01",
    icon: rightarrow,
    iconBg: "#383E56",
    date: "Jan 09 2023 - Jan 25 2023",
    points: [
      "we plan to help elderly with the reminders , calls be it video or voice ,tutorials which can indrictly get related with mental health",
    ],
  },
  {
    title: "Collecting information regarding the Problem Statement",
    company_name: "Step 02",
    icon: leftarrow,
    iconBg: "#E6DEDD",
    date: "Feb 03 - Feb 16 2023",
    points: [
      "questioner,helplines,personal interaction,old age home",
    ],
  },
  {
    title: "Starting visiting old aage homes and surveys",
    company_name: "Step 03",
    icon: rightarrow,
    iconBg: "#383E56",
    date: "Feb 26- March 18 2023",
    points: [
      "the old age home did and did not have facilities like games(carrom,chess card) these games can keep them active and help them learn new things uplift their mood",
    ],
  },
  {
    title: "Binding the information gathered and coming to the conclusion",
    company_name: "Step 04",
    icon: leftarrow,
    iconBg: "#E6DEDD",
    date: "March 26 - Present",
    points: [
      "We can built a robot that would provide facilities like reminders,tuorials,calls the robot would interact via remote,voice, ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Most view of the doctors were conflicting they said that most of the elder people weren’t into physical activities and didn’t like to move and exercise also loved eating more of junk food ,Other doctors said that they were interested in knowing more new things and loved having a conversation with the loved ones and also they have similar views in terms of food as they enjoyed eating more of the junk",
    name: "Doctors",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Theses phone call weren t that engaging and most of the numbers didn’t exist and putting time limits on them made them worse  ",
    name: "helplines",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "They weren’t involved in any of games and they weren’t active and were dull whereas others who were involved in any of exercise or game were more jolly and active than the others",
    name: "oldage home",
    designation: "personal interaction",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Anynomous call",
    description:
      "Voice calls from Helpline services",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Doctor's Thoughts",
    description:
      " Information collected through  specialist ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aalexander47/questioner_pics",
  },
  {
    name: "Overall Conclusion",
    description:
      "Infomation or the data gathered pointing towards a specific goal/objective",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
