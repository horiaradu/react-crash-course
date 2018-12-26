import React from "react";
import { Form, Text } from "informed";

export class ComplexForm extends React.Component {
  onSubmit = formState => console.log(formState);

  setFormApi = formApi => {
    this.formApi = formApi;
  };
  onSubmitFromOutside = () => this.onSubmit(this.formApi.getState());

  validateFirstName = value => {
    console.log(value.length);
    return value.length < 5 ? "field must have at least 5 chars" : null;
  };

  valudateLastName = (value, values) => {
    console.log(values);
    return value.length > values["first-name"].length
      ? "last name should be shorter than first name"
      : null;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Form getApi={this.setFormApi}>
            {({ formState }) => (
              <React.Fragment>
                <div>
                  <label htmlFor="first-name">First name:</label>
                  <Text
                    field="first-name"
                    id="first-name"
                    validate={this.validateFirstName}
                  />
                </div>
                <div>
                  <label htmlFor="last-name">Last name:</label>
                  <Text
                    field="last-name"
                    id="last-name"
                    validate={this.valudateLastName}
                  />
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
