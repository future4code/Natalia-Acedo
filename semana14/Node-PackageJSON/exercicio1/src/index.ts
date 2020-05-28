export {}

let operation: string = process.argv[2]
let numA: number = Number(process.argv[3])
let numB: number = Number(process.argv[4])

function operations (operation: string, numA: number, numB: number): any   {
    switch (operation){
        case "add":
            console.log(numA + numB) 
            break;

        case "sub":
            console.log(numA - numB) 
            break;
        
        case "mult":
            console.log(numA * numB)
            break;
        
        case "div":
            console.log(numA / numB)
            break;

        default:
            return "type valid number"
    }
}

operations(operation, numA, numB) 