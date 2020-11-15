import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

function JobList({ jobs }) {
    const renderJobs = () => {
        return jobs.map((job, idx) => {
            return (
                <section className="card-container" key={job.idx}>
                    <JobCard job={job} />
                </section>
            );
        });
    };

    return <div className="job-list flex justify-center wrap">{jobs && renderJobs()}</div>;
}

export default JobList;
