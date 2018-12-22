import React from "react";
import logo from "../../logo.svg";

export class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={logo}
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          width: "50px",
          height: "50px"
        }}
      />
    );
  }
}

// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => <Component {...this.props} mouse={mouse} />} />
      );
    }
  };
}

const CatWithMouse = withMouse(Cat);

export class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <CatWithMouse />
      </div>
    );
  }
}
