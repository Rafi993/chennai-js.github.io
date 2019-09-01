import * as atypes from "src/constants/actionTypes";
import { combineReducers } from "redux";

const list = (state = [], { type, payload }) => {
  switch (type) {
    case atypes.GET_JOBS_SUCCESS:
      return payload.jobs.feed.entry.map(job => ({
        id: job.id.$t,
        title: job.gsx$jobtitle.$t,
        company: job.gsx$companyname.$t,
        experience: job.gsx$experienceneeded.$t,
        location: job.gsx$location.$t,
        contact: job.gsx$contactemail.$t,
        link: job.gsx$joblink.$t,
        detail: job.gsx$moredetails.$t,
        date: job.gsx$dateofposting.$t,
        description: job.content.text
      }));
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case atypes.GET_JOBS_FAILURE:
      return "Error Fetching jobs";
    case atypes.GET_JOBS_REQUEST:
      return null;
    default:
      return state;
  }
};

const filter = (state = { search: "" }, { type, payload }) => {
  switch (type) {
    case atypes.FILTER_JOBS:
      return payload.query;
    default:
      return state;
  }
};

export default combineReducers({
  list,
  error,
  filter
});
