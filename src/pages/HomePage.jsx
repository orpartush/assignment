import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../store/contexts/JobContext.jsx';
import JobList from '../cmps/JobList';

function HomePage() {
    const { loadJobs, jobs } = useContext(JobContext);
    const [shouldLoad, setShouldLoad] = useState(true);

    useEffect(() => {
        const getJobs = async () => {
            await loadJobs();
        };
        if (shouldLoad) {
            getJobs();
            setShouldLoad(false);
        }
    }, [jobs, loadJobs, shouldLoad]);

    return (
        <div className="home-page container">
            <h1>Our Jobs</h1>
            <JobList jobs={jobs} />
        </div>
    );
}

export default HomePage;
