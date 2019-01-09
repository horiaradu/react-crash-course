import React from "react";

import styles from "./another-dummy.module.scss";

import { Row, Col } from "reactstrap";

export const AnotherDummy = () => {
  return (
    <React.Fragment>
      <Col sm={6}>
        <p className={styles["fancy-primary"]}>another dummy</p>
        <p className={styles["fancy-secondary"]}>another dummy</p>
      </Col>
      <Col sm={6}>foobar</Col>
    </React.Fragment>
  );
};
