import { Bookmark } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="parent">
      <div className="top">
        <img src={job.logo} alt={job.company} />

        <button>
          Save <Bookmark size={16} />
        </button>
      </div>

      <div className="mid">
        <h4>{job.company}</h4>
        <p>{job.posted}</p>

        <h3>{job.title}</h3>

        <button>{job.type}</button>
        <button>{job.level}</button>
      </div>

      <div className="bottom">
        <div>
          <h3>{job.salary}</h3>
          <p>{job.location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;