import JobList from "./components/jobList/jobList";
import TownMap from "./components/jobPage/worldMap";

export default function Home() {
  return (
    <div>
      <JobList />
      <TownMap />
    </div>
  );
}
