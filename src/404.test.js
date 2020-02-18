import React from "react";
import renderer from "react-test-renderer";
import NotFound from "./404.js";

test("This render Not Found", () => {
  const header = renderer.create(<NotFound />).toJSON();
  expect(header).toMatchSnapshot();
});
