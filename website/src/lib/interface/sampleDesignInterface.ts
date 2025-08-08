/*
  Used in SampleList.tsx
  
  Date in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
  
  sample array contains 3 versions of the same image for different screen sizes
    - samples[0] = mobile and tablet
    - samples[1] = small desktop
    - samples[2] = 4K and above sizes
    
  width and height are used to set the aspect ratio of the image
  - Measured in pixels, use the smallest dimensions for the entry
*/

export interface SampleDesignInterface {
  id: string;
  purpose: string;
  startDate: string;
  endDate: string;
  samples: string[];
  sampleWidth: number;
  sampleHeight: number;
  sampleAlt: string;
  description: string;
}
