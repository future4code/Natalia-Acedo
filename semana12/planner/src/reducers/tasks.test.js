import tasks from "./tasks"
import { setTasks } from "../actions/tasks"

describe ("Tasks Reducer", () => {
    test("SET_TASKS", () => {
        const mockTask = [{
            id: "jGH9xnVXQMeU3tZOQ2Gy",
            day: "Monday",
            text: "Wash the dishes"
          }]

        const mockStateTask = { allTasks: [] }

        const mockAction = setTasks(mockTask)

        const newState = tasks(mockStateTask, mockAction)

        expect(newState.allTasks).toHaveLength(1)
        expect(newState.allTasks).toBe(mockTask)
    })

    test("Invalid Action Type", () => {
        const mockState = { allTasks: [{
            id: "jGH9xnVXQMeU3tZOQ2Gy",
            day: "Monday",
            text: "Wash the dishes"
          }]}

        const mockInvalidAction = { type: "TEST_INVALID_ACTION_TYPE" }

        const newState = tasks(mockState, mockInvalidAction)

        expect(newState).toEqual(mockState)
    })
})