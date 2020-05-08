import { shallow } from 'enzyme'
import React from 'react'
import {Planner} from "./index"

describe("Planner", () => {
    test("Checks getTask ", () => {

    const mockGetTasks = jest.fn()
      
    const renderedComponent = shallow(<Planner getTasks={mockGetTasks} />)
    renderedComponent.instance().componentDidMount()

    expect(mockGetTasks).toHaveBeenCalled()

    }) 
    
    test("Check handleInputTask", () => {
        const mockGetTasks = jest.fn()
        const event = {
            target: {value: "Wash the dishes"}
        }

        const renderedComponent = shallow(<Planner getTasks={mockGetTasks} />)

        renderedComponent.find("input").simulate("change", event)

        expect(renderedComponent.state().text).toBe("Wash the dishes")
    })

    test("Check handleSelectDay", () => {
        const mockGetTasks = jest.fn()
        const event = {
            target: {value: "monday"}
        }

        const renderedComponent = shallow(<Planner getTasks={mockGetTasks} />)

        renderedComponent.find("select").simulate("change", event)

        expect(renderedComponent.state().day).toBe("monday")

    })

    test("Check handleSendTask", () => {
        const mockGetTasks = jest.fn()
        const mockCreateTask = jest.fn()
    
        const event = {
            preventDefault(){}
        }

        const renderedComponent = shallow(<Planner getTasks={mockGetTasks}  createTask={mockCreateTask} />)

        renderedComponent.find("form").simulate("submit", event)
        expect(mockCreateTask).toHaveBeenCalled()
    })

    test ("Check Map State Tasks", () => {
        const mockGetTasks = jest.fn()

        const mockState = [{
            id: "jGH9xnVXQMeU3tZOQ2Gy",
            day: "Monday",
            text: "Wash the dishes"
        }]

        const renderedComponent = shallow(<Planner getTasks={mockGetTasks} tasks={mockState} />)

        expect(renderedComponent.find("li")).toHaveLength(1)
        expect(renderedComponent.find("li").contains(mockState[0].text)).toEqual(true)

    })
})