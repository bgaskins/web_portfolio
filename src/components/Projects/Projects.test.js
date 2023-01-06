import React from "react";
import { shallow } from "enzyme";
import Projects from "./Projects";

describe("Projects", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper).toMatchSnapshot();
  });
});
