import React from "react";
import ReactDOM from "react-dom";
import { filteredMovies } from "./movies-hoc";
import { Movies } from "./movies";
import { shallow } from "enzyme";
import api from "../../services/api";

// this is important to be here, otherwise no mocking is done
jest.mock("../../services/api");

describe("Movies HOC", () => {
  const Component = filteredMovies(Movies);

  beforeEach(() => {
    jest.resetAllMocks();
    // promise which never resolves, because I don't care and I don't want the setState on an unmounted component warning in the console
    api.getMovies.mockImplementation(() => {
      return new Promise(() => {});
    });
  });

  describe("with jest solo", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Component />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("has no movies initially", () => {
      const div = document.createElement("div");
      const component = ReactDOM.render(<Component />, div);
      expect(component.state.movies).toEqual([]);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("resolves movies after mount", async () => {
      const div = document.createElement("div");
      const component = ReactDOM.render(<Component />, div);

      // now I care about resolving the promise
      api.getMovies.mockImplementation(() => Promise.resolve([{}, {}]));

      await component.componentDidMount();

      /*
        seeing this error in the console, it's clear that jest (on it's own, renders deeply, not shallow)
        Warning: Each child in an array or iterator should have a unique "key" prop.

        Check the render method of `Movies`. See https://fb.me/react-warning-keys for more information.
            in Movie (at movies.js:16)
            in Movies (at movies-hoc.js:24)
            in Component (at movies-hoc.spec.js:34)
      */
      expect(component.state.movies.length).toEqual(2);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe("with enzyme", () => {
    it("renders without crashing", () => {
      shallow(<Component />);
    });

    it("has no movies initially", () => {
      const component = shallow(<Component />);

      // this is false because of shallow rendering
      expect(component.contains(<p>Total movies: 0</p>)).toBeFalsy();
    });

    it("resolves movies after mount", async () => {
      const component = shallow(<Component />);

      // now I care about resolving the promise
      const promise = Promise.resolve([{}, {}]);
      api.getMovies.mockImplementation(() => promise);

      return promise.then(async () => {
        // this is false because of shallow rendering
        expect(component.contains(<p>Total movies: 2</p>)).toBeFalsy();
      });
    });
  });
});
