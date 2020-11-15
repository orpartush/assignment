import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { JobContextProvider } from './store/contexts/JobContext';

import ErrPage from './pages/ErrPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const JobDetails = lazy(() => import('./pages/JobDetails'));

function App() {
    return (
        <JobContextProvider>
            <main className="app flex flex-column">
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/job-details/:referencenumber" component={JobDetails} />
                            <Route component={ErrPage} />
                        </Switch>
                    </Suspense>
                </Router>
            </main>
        </JobContextProvider>
    );
}

export default App;
