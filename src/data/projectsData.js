import { GitHub } from "@mui/icons-material";

const projectsData = [
  {
    title: "Porfolio 2023",
    description:
      "This portfolio was built using Gatsby.js, a static site generator for React.js. The user interface was designed with MUI. The combination of Gatsby, React, and Material-UI allows for a fast, responsive, and visually pleasing experience for visitors.",
    tags: ["React.js", "MUI", "Gatsby.js"],
    links: [
      {
        icon: GitHub,
        href: "https://github.com/qawsedr87/ry-portfolio",
      }
    ],
  },
  {
    title: "Orders Apis with Kafka",
    description:
      "This repository is the simple Spring Boot project with Kafka message brocker and PostgreSQL. It sends and consumes messages to Kafka and store the data in PostgreSQL.",
    tags: ["Java", "Spring boot", "Kafka", "PostgreSQL"],
    links: [
      {
        icon: GitHub,
        href: "https://github.com/qawsedr87/OrdersViaKafka",
      }
    ],
  },
];

export default projectsData;
