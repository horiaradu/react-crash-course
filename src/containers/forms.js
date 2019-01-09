import React from "react";
import { UncontrolledForm } from "../components/foms/uncontrolled-form";
import { ControlledForm } from "../components/foms/controlled-form";
import { ComplexForm } from "../components/foms/informed";

export const Forms = () => {
  return (
    <React.Fragment>
      {/* <UncontrolledForm />
        <ControlledForm /> */}
      <ComplexForm />
    </React.Fragment>
  );
};
