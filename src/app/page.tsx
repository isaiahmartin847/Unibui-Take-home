import FilterForm from "./components/filter/filterForm";
import JobList from "./components/jobList/jobList";
import NavBar from "./components/NavBar/NavBar";


export default function Home() {
  return (
    <div>
      <NavBar
        title="Jobs"
        linkName="Saved Jobs"
        url="/saved-jobs"
      />
      <FilterForm />
      <JobList />
    </div>
  );
}
