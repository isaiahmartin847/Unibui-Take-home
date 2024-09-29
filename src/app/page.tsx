import JobList from "./components/jobList/jobList";
import JobLocation from "./components/jobPage/jobLocation";

export default function Home() {
  return (
    <div>
      <JobList />
      <JobLocation />
    </div>
  );
}
