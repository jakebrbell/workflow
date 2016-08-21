import JobsJob from 'components/JobsJob';
import JobsSideBar from 'components/JobsSideBar';
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Jobs = React.createClass({
  render() {
    return <main>
      <Row>
        <JobsSideBar />
        <JobsJob />
      </Row>
    </main>
  }
});

export default Jobs;