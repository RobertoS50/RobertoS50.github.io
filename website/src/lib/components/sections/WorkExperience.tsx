"use client";
import { useState } from "react";
import styles from "@/scss/components/sections/workExperience.module.scss";

export default function WorkExperience() {
  const [salesActive, setSalesActive] = useState<boolean>(false);

  function handleSalesClick(): void {
    setSalesActive(!salesActive);
    console.log("Sales button clicked!");
  }

  return (
    <div className={styles.workExpSection}>
      <button className={styles.marketingButton}>
        Marketing<span>▶</span>
      </button>
      <button className={styles.salesButton} onClick={handleSalesClick}>
        Sales<span>{salesActive === true ? "▼" : "▶"}</span>
      </button>
      {salesActive === true && <span>hello</span>}
      <button className={styles.retailButton}>
        Retail<span>▶</span>
      </button>
    </div>
  );
}
/*
import { useState, useMemo } from 'react';
import styles from './WorkExperience.module.scss';

const WorkExperience = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<string>('all');

  // Sample data - in a real app you might fetch this
  const experienceData = {
    sales: {
      title: "Sales & Marketing",
      items: [
        {
          id: 'sales-1',
          title: "Digital Marketing Specialist",
          company: "XYZ Corp",
          startDate: "2020-06",
          endDate: "2023-12",
          responsibilities: ["Managed ad campaigns", "Increased web traffic"],
          skills: ["SEO", "Google Ads"],
          category: "marketing"
        }
      ]
    },
    retail: {
      title: "Retail Experience",
      items: [
        {
          id: 'retail-1',
          title: "Store Manager",
          company: "Retail Giant",
          startDate: "2015",
          endDate: "2018",
          responsibilities: ["Team management", "Inventory control"],
          category: "retail"
        }
      ]
    }
  };

  // Filter jobs by selected year
  const filteredData = useMemo(() => {
    if (yearFilter === 'all') return experienceData;
    
    return Object.entries(experienceData).reduce((acc, [category, data]) => {
      const filteredItems = data.items.filter(job => {
        const jobStartYear = job.startDate.split('-')[0];
        const jobEndYear = job.endDate === 'Present' ? 
          new Date().getFullYear().toString() : 
          job.endDate.split('-')[0];
        
        return jobStartYear <= yearFilter && jobEndYear >= yearFilter;
      });
      
      if (filteredItems.length > 0) {
        acc[category] = { ...data, items: filteredItems };
      }
      
      return acc;
    }, {} as typeof experienceData);
  }, [yearFilter]);

  // Extract all unique years from the data
  const allYears = useMemo(() => {
    const years = new Set<string>();
    Object.values(experienceData).forEach(category => {
      category.items.forEach(job => {
        const startYear = job.startDate.split('-')[0];
        const endYear = job.endDate === 'Present' ? 
          new Date().getFullYear().toString() : 
          job.endDate.split('-')[0];
        
        for (let year = Number(startYear); year <= Number(endYear); year++) {
          years.add(year.toString());
        }
      });
    });
    return ['all', ...Array.from(years).sort((a, b) => Number(b) - Number(a))];
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label htmlFor="year-filter">Filter by year:</label>
        <select
          id="year-filter"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className={styles.filterSelect}
        >
          {allYears.map(year => (
            <option key={year} value={year}>
              {year === 'all' ? 'All Years' : year}
            </option>
          ))}
        </select>
      </div>
      {Object.entries(filteredData).map(([key, category]) => (
        <section key={key} className={styles.section}>
          <button
            className={`${styles.button} ${activeCategory === key ? styles.active : ''}`}
            onClick={() => setActiveCategory(activeCategory === key ? null : key)}
          >
            {category.title}
            <span>{activeCategory === key ? '▼' : '▶'}</span>
          </button>

          {activeCategory === key && (
            <div className={styles.jobsContainer}>
              {category.items.map(job => (
                <div key={job.id} className={styles.jobCard}>
                  <h3>{job.title} at {job.company}</h3>
                  <p className={styles.duration}>
                    {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

// Helper function to format dates
function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';
  if (dateStr.includes('-')) {
    const [year, month] = dateStr.split('-');
    return new Date(`${year}-${month}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }
  return dateStr; // Just year
}

export default WorkExperience;
*/
