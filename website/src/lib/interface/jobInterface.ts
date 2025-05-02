// Date in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ

export interface JobInterface {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  achievements: string[];
}
