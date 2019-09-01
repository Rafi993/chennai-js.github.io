import * as atypes from "src/constants/actionTypes";

export const getJobs = () => ({
  type: atypes.GET_JOBS_REQUEST,
  payload: {}
});

export const filterJobs = query => ({
  type: atypes.FILTER_JOBS,
  payload: {
    query
  }
});
