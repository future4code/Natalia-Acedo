import * as fs from 'fs'

const data: string = process.argv[2]
const fileName: string = "tasks.txt"

try {
    fs.appendFileSync(fileName, data)
    console.log("Created file")
} catch (err) {
    console.error(err)
}