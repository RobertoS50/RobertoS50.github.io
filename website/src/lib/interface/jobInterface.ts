// Date in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
// TODO 24/24: Shift size of images based on port size
// TODO 25/25: Look at turning description into a list
export interface JobInterface {
  id: string;
  company: string;
  position: string;
  location: string;
  logo: string;
  logoAlt: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  achievements: string[];
}
