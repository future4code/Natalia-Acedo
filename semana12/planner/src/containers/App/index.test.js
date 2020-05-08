import App from "./"
import React from "react"
import { Provider } from "react-redux"
import { shallow } from "enzyme"

describe("Components", () => {
    test ("Check Provider", () => {
        const component = shallow(<App/>)
        expect(component.find(<Provider></Provider>)).toBeTruthy()
    })
})