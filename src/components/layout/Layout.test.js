import React from "react"
import renderer from "react-test-renderer"
import { PureLayout } from "./Layout"
describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PureLayout
          data={{
            site: {
              siteMetadata: {
                title: "Basic Gatsby Site",
                author: "liamhawks",
              },
            },
          }}
        >
          <p>Content</p>
        </PureLayout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
