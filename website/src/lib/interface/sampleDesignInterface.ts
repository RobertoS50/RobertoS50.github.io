/*
  Used in SampleList.tsx
  
  Date in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
  
  sample array contains 3 versions of the same image for different screen sizes
    - samples[0] = mobile and tablet
    - samples[1] = small desktop
    - samples[2] = 4K and above sizes
*/

export interface SampleDesignInterface {
  id: string;
  purpose: string;
  startDate: string;
  endDate: string;
  samples: string[];
  sampleAlt: string;
  description: string;
}
