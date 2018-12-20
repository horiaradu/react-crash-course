import React from "react";
import { MyContext } from "../../App";

export class ContextConsumer extends React.Component {
  render() {
    return <MyContext.Consumer>{value => <p>{value}</p>}</MyContext.Consumer>;
  }
}
