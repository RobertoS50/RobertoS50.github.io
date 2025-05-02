import { JobInterface } from "@/interface/jobInterface";

export const salesJobs: JobInterface[] = [
  {
    id: "salesJob-3",
    company: "Coach",
    position: "Sales Associate",
    location: "Schaumburg, IL",
    startDate: "2024-01-01",
    endDate: "Present",
    description: [
      "Assisted customers with their purchases and provided exceptional customer service.",
      "front of house",
    ].join(" "),
    skills: [
      "Customer Service",
      "Sales",
      "Product Knowledge",
      "Teamwork",
      "Communication",
    ],
    achievements: [
      "100% customer satisfaction, all reviews left by customers have been very positive.",
    ],
  },

  {
    id: "salesJob-2",
    company: "Coach",
    position: "Sales Support Associate",
    location: "Schaumburg, IL",
    startDate: "2023-11-01",
    endDate: "2024-01-01",
    description: [
      "Ensured smooth operations and exceptional service delivery by managing the stockroom, fulfilling both OMS and online orders.",
    ].join(" "),
    skills: [
      "Customer Service",
      "OMS (Order Management System)",
      "Product Knowledge",
      "Teamwork",
      "Communication",
      "Attention to Detail",
      "Worked in tight deadlines",
    ],
    achievements: [
      "Got top UPT (Units Per Transaction) and ADT (Average Dollar per Transaction) on a consistent basis ",
    ],
  },

  {
    id: "salesJob-1",
    company: "EXPRESS",
    position: "Sales Associate",
    location: "Bloomingdale, IL",
    startDate: "2019-01-01",
    endDate: "2019-08-01",
    description: [
      "Assisted customers with their purchases and provided exceptional customer service.",
      "\n\nDedicated myself to personalized styling expertise and product knowledge to help customers find the perfect outfit, boost their confidence and zoom in on their individuality.",
    ].join(" "),
    skills: [
      "Customer Service",
      "Product Knowledge",
      "Teamwork",
      "Communication",
      "Quick Learner",
    ],
    achievements: [
      "Constantly exceeded sales targets, for example, selling 86k in 1 day.",
    ],
  },
];
