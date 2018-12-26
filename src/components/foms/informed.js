import React from "react";
import { Form, Text } from "informed";

export class ComplexForm extends React.Component {
  onSubmit = formState => console.log(formState);

  setFormApi = formApi => {
    this.formApi = formApi;
  };
  onSubmitFromOutside = () => this.onSubmit(this.formApi.getState());

  render() {
    return (
      <React.Fragment>
        <div>
          <Form getApi={this.setFormApi}>
            {({ formState }) => (
              <React.Fragment>
                <div>
                  <label htmlFor="state-name">First name:</label>
                  <Text field="name" id="state-name" />
                </div>
                <button type="submit" onClick={() => this.onSubmit(formState)}>
                  Submit
                </button>
                <label>Values:</label>
                <div>
                  <code>{JSON.stringify(formState.values)}</code>
                </div>
              </React.Fragment>
            )}
          </Form>
        </div>
        <button onClick={this.onSubmitFromOutside}>Submit outside</button>
      </React.Fragment>
    );
  }
}