import React from "react";
import ReactDOM from "react-dom";
import { MoviesHardcoded } from "./movies-hardcoded";
import { shallow } from "enzyme";
import api from "../../services/api";

// this is important to be here, otherwise no mocking is done
jest.mock("../../services/api");

describe("Movies HOC", () => {
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
      ReactDOM.render(<MoviesHardcoded />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("has no movies initially", () => {
      const div = document.createElement("div");
      const component = ReactDOM.render(<MoviesHardcoded />, div);
      expect(component.state.movies).toEqual([]);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("resolves movies after mount", async () => {
      // now I care about resolving the promise
      api.getMovies.mockImplementation(() => Promise.resolve([{}, {}]));

      const div = document.createElement("div");
      const component = ReactDOM.render(<MoviesHardcoded />, div);
      await component.componentDidMount();

      expect(component.state.movies.length).toEqual(2);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe("with enzyme", () => {
    it("renders without crashing", () => {
      shallow(<MoviesHardcoded />);
    });

    it("has no movies initially", () => {
      const component = shallow(<MoviesHardcoded />);
      expect(component.contains(<p>Total movies: 0</p>)).toBeTruthy();
    });

    it("resolves movies after mount", async () => {
      // now I care about resolving the promise
      const promise = Promise.resolve([{}, {}]);
      api.getMovies.mockImplementation(() => promise);

      const component = shallow(<MoviesHardcoded />);

      return promise.then(async () => {
        expect(component.contains(<p>Total movies: 2</p>)).toBeTruthy();
      });
    });
  });
});
