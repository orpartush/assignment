export const JobReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_JOBS':
            return {
                ...state,
                jobs: action.jobs,
            };
        default:
            return state;
    }
};
