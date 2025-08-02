import { SampleDesignInterface } from "@/interface/sampleDesignInterface";
import { CDN } from "@/util/globalConstants";

export const sampleDesigns: SampleDesignInterface[] = [
  {
    id: "sampleDesign-1",
    purpose: "Design for Coach™'s profile",
    startDate: "2025-02-01",
    endDate: "2025-03-01",
    samples: [
      CDN + "/sampleDesigns/allAboutMe-tablet-scaled.jpg",
      CDN + "/sampleDesigns/allAboutMe-small-scaled.jpg",
      CDN + "/sampleDesigns/allAboutMe-4K-scaled.jpg",
    ],
    sampleWidth: 475,
    sampleHeight: 633,
    sampleAlt: "Design made for Coach™ profile",
    description: [
      "Filled with pastel colors for a clear and inviting look.",
      "The idea behind this design is to create a visually interesting profile that also directs the viewer's eye to the highlighted information.",
    ].join(" "),
  },
];
