import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JobContext } from '../store/contexts/JobContext';

function JobDetails() {
    const params = useParams();
    const { jobs } = useContext(JobContext);
    const [jobToDisplay, setJobToDisplay] = useState(null);

    useEffect(() => {
        const currJob = jobs.find(job => job.referencenumber === params.referencenumber);
        setJobToDisplay(currJob);
    }, [jobs, params.referencenumber]);
    return (
        <div className="job-details">
            <h2>Job Details</h2>
            <p>{jobToDisplay && jobToDisplay.body}</p>
        </div>
    );
}

export default JobDetails;
