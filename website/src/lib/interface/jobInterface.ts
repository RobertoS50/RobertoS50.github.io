/*
  Used in JobList.tsx
  
  Date in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
  
  logos array contains 3 versions of the same image for different screen sizes
    - logos[0] = mobile
    - logos[1] = tablet and small desktop
    - logos[2] = 4K and above sizes
*/

export interface JobInterface {
  id: string;
  company: string;
  position: string;
  location: string;
  logos: string[];
  logoAlt: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  achievements: string[];
}
