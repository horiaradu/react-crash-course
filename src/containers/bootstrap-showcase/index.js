import React from "react";

import { Col, Row, Button } from "reactstrap";

export const BootstrapShowcase = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={10}>bla bla bla</Col>
        <Col sm={2}>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
        </Col>
      </Row>
    </div>
  );
};
