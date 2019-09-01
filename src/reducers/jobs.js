import * as atypes from "src/constants/actionTypes";

const Jobs = (state = [], { type, payload }) => {
  switch (type) {
    case atypes.GET_JOBS_SUCCESS:
      return payload.jobs;
    default:
      return state;
  }
};

export default Jobs;
