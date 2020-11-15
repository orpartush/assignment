import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
    return (
        <Link className="job-card flex flex-column align-center justify-center" to={`/job-details/${job.referencenumber}`}>
            <header>
                <p className="title">{job.title}</p>
                <div className="subtitle flex justify-center wrap">
                    <p className="city">{job.city}</p>
                    <p className="company">{job.company}</p>
                    <p className="date">{job.date}</p>
                </div>
            </header>
            <p className="category">{job.category}</p>
        </Link>
    );
}

export default JobCard;
