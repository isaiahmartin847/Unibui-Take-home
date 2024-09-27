import fs from 'fs';
import path from 'path';
import { Job } from "@/app/types"

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(currentField.trim());
      currentField = '';
    } else {
      currentField += char;
    }
  }
  result.push(currentField.trim());
  return result;
}

function extractJobListingsFromCSV(): Job[] {
  const filePath = path.join(process.cwd(), 'public', 'jobs.csv');
  const csvData = fs.readFileSync(filePath, 'utf8');

  const lines = csvData.trim().split('\n');
  const headers = parseCSVLine(lines[0]);

  const jobListings: Job[] = lines.slice(1).map((line, index) => {
    const values = parseCSVLine(line);
    const [city, state] = values[2].split(',').map(s => s.trim());
    return {
      id: index + 1,
      jobTitle: values[0],
      companyName: values[1],
      city,
      state,
      jobDescription: values[3],
      requirements: values[4],
    };
  });

  return jobListings;
}

function getOneJobById(id: number): Job[] {
  
  const jobs: Job[] = extractJobListingsFromCSV()
  

  const job: Job | null = jobs[id - 1]

  if(job) {
    return [ job ]
  }

  return []

  
}


export {
  extractJobListingsFromCSV,
  getOneJobById
};