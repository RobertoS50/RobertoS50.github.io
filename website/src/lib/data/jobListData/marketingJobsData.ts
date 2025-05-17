import { JobInterface } from "@/interface/jobInterface";

export const marketingJobs: JobInterface[] = [
  {
    id: "marketingJob-2",
    company: "Chicago Automobile Trade Association",
    position: "Internship",
    location: "Oakbrook Terrace, IL",
    logo: "/Logos/chicagoAutoTradeShowLogo.webp",
    logoAlt: "Chicago Automobile Trade Association logo",
    startDate: "2025-01-01",
    endDate: "2025-03-01",
    description: [
      "Analyzed Twitter numbers to fill in Excel sheets for reports later shown to stakeholders.",
      "\n- This data was useful to retain auto manufacturers/brands for future events.",
      "\n\nInterviewed people at the show.",
      "\n\nWorked on and created videos for the auto shows.",
    ].join(" "),
    skills: [
      "Product Knowledge",
      "Teamwork",
      "Communication",
      "Attention to Detail",
      "Worked in tight deadlines",
    ],
    achievements: [
      "Filled in 48,556 impressions (views) and 2,109 engagements (Likes, Retweets, Replies, Link Clicks, Profile Visits, Mentions) for the Excel sheets.",
    ],
  },

  {
    id: "marketingJob-1",
    company: "Shadez Auto Cosmetics",
    position: "Social Media Director",
    location: "Remote",
    logo: "/Logos/shadezCosmeticsLogo.webp",
    logoAlt: "Shadez Cosmetics logo",
    startDate: "2020-07-01",
    endDate: "2021-06-01",
    description: [
      "Booking appointments and quoting potential clients.",
      "\n\nUpdated social media platforms with engaging content to attract potential clients.",
    ].join(" "),
    skills: [
      "Customer Service",
      "Product Knowledge",
      "Social Media Management",
    ],
    achievements: ["Brought in customers from social media into the business."],
  },
];
