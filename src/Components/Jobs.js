import { connect } from "react-redux";
import React, { useEffect, useCallback } from "react";

import { getJobs, filterJobs } from "src/actions/jobs";

const Jobs = ({ error, list, filter, _getJobs, _filterJobs, location }) => {
  useEffect(() => {
    const { search } = location;
    _getJobs();
    _filterJobs({ search });
  }, [_getJobs, _filterJobs, location]);

  const handleSearch = useCallback(
    e => {
      const { value } = e.target;
      _filterJobs({ search: value });
    },
    [_filterJobs]
  );

  const { search } = filter;

  return (
    <div className="jobs">
      <h3>Jobs</h3>
      <input
        type="text"
        autoFocus
        value={search}
        onChange={handleSearch}
        placeholder="Front End, Full-time, Chennai"
      />
      <div className="job-listing">
        {error !== "" ? <h3>{error}</h3> : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ jobs }) => ({
  error: jobs.error,
  filter: jobs.filter,
  list: jobs.list
});

export default connect(
  mapStateToProps,
  {
    _getJobs: getJobs,
    _filterJobs: filterJobs
  }
)(Jobs);
