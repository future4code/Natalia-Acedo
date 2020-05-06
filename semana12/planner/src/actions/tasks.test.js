import  { setTasks, getTasks, createTask } from "./tasks"
import axios from "axios"

describe ("Tasks Actions", () => {
    test ("Set Tasks", () => {
        const mockTask = [{
            id: "jGH9xnVXQMeU3tZOQ2Gy",
            day: "Monday",
            text: "Wash the dishes"
          }]

        const action = setTasks(mockTask)

        expect(action.type).toBe("SET_TASKS")    
        expect(action.payload.task).toBe(mockTask)
    })

    test ("Get Tasks", async () => {
        axios.get = jest.fn(async () => ({
            data: [{
                id: "jGH9xnVXQMeU3tZOQ2Gy",
                day: "Monday",
                text: "Wash the dishes"
            }]
        }))

        const dispatch = jest.fn()

        await getTasks()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_TASKS",
            payload: { task:[{
                id: "jGH9xnVXQMeU3tZOQ2Gy",
                day: "Monday",
                text: "Wash the dishes"
            }]}
        })
    })

    test ("Create Task", async () => {
        const mockText = "Wash the dishes"
        const mockDay = "Monday"

        axios.post = jest.fn(async() => {
            
        })
        
        await createTask(mockText,mockDay)()
    })
})

