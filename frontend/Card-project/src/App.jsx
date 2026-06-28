import "./App.css"
import Card from "./components/card.jsx"
import JobCard from "./components/jobCard.jsx";
import jobs from "./components/jobs.jsx";
function App() {
  return (
    <div className="job-container">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;