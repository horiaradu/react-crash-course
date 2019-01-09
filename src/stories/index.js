import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import { Movies } from "../components/movies/movies";

import { specs, describe, it } from "storybook-addon-specifications";

import { mount } from "enzyme";
import expect from "expect";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Movies", module).add("with some movies", () => {
  const story = (
    <Movies
      movies={[
        {
          vote_count: 2070,
          id: 297802,
          video: false,
          vote_average: 6.9,
          title: "Aquaman",
          popularity: 499.057,
          poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
          original_language: "en",
          original_title: "Aquaman",
          genre_ids: [28, 14, 878, 12],
          backdrop_path: "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
          adult: false,
          overview:
            "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
          release_date: "2018-12-07"
        }
      ]}
    />
  );

  specs(() =>
    describe("Movies list", () => {
      it("increments the like count", () => {
        const output = mount(story);
        output.find("button").simulate("click");
        console.log(output.html());
        expect(output.contains(<p>Total likes: 1</p>)).toBeTruthy();
      });
    })
  );

  return story;
});
