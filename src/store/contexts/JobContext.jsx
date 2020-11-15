import React, { createContext, useReducer } from 'react';
import { JobReducer } from '../reducers/JobReducer';
import { JobService } from '../../services/JobService';

const initialState = {
    jobs: [],
};

//Actions
const LOAD_JOBS = 'LOAD_JOBS';

export const JobContext = createContext(initialState);

export const JobContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(JobReducer, initialState);

    async function loadJobs() {
        try {
            const jobs = await JobService.query();
            dispatch({ type: LOAD_JOBS, jobs });
        } catch (err) {
            console.log('Error while loading jobs.', err);
        }
    }

    return (
        <JobContext.Provider
            value={{
                jobs: state.jobs,
                loadJobs,
            }}
        >
            {children}
        </JobContext.Provider>
    );
};
