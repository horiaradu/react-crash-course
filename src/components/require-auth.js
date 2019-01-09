import React from "react";
import history from "../history";

export class RequireAuth extends React.PureComponent {
  isLoggedIn() {
    return false;
  }

  componentDidMount() {
    if (!this.isLoggedIn()) {
      this.navigateToLogIn();
    }
  }

  navigateToLogIn() {
    history.push("/login");
  }

  render() {
    if (this.isLoggedIn()) {
      return this.props.children;
    }
    return null;
  }
}
