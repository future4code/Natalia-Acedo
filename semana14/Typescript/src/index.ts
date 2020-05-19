//Exercício 1

function sum (numA: number, numB: number): number {
    return numA + numB
}

const resultSum: number = sum(2, 3)


function subtraction (numA: number, numB: number): number {
    return numA - numB
}

const resultSub: number = subtraction(2, 3)

function multiplication (numA: number, numB: number): number {
    return numA * numB
}

const resultMult: number = multiplication(2, 3)


function compareNumbers (numA: number, numB: number): number {
    if (numA > numB){
        return numA
    } else {
        return numB
    }
}

const resultCompare: number = compareNumbers(2, 3)

//Exercício 2

function arrayNumInfo (arrayNum: number[]): object {
    const arrayLength: number = arrayNum.length
    
    const odd: number[] = arrayNum.filter(num => {
        return num %2 !== 0
    })

    const oddQuantity: number = odd.length

    let total: number = 0

    for(let i of arrayNum) {
        total += i
    }



    return {arrayLength, oddQuantity, total }
}

const array: number[] = [1,2,3,4]


// Exercício 3

type post = {
    auth: string,
    text: string
} 

const postA: post = {
    auth: "Natália",
    text: "My first post"
}

const postB: post = {
    auth: "Hamilton",
    text: "Backend now"
}

const postC: post = {
    auth: "Maytê",
    text: "Say hi to Fenrir"
}

const postD: post = {
    auth: "Lucas",
    text: "Listen to Kanye West"
}

const postE: post = {
    auth: "Natália",
    text: "My second post"
}

const arrayPosts: post[] = [postA, postB, postC, postD, postE]

function findAuth(posts: post[], auth: string): post[] {
    return posts.filter(eachPost => {
        return eachPost.auth === auth
    })
}

console.log(findAuth(arrayPosts, "Natália"))

//Exercício 4

function findAge(year:number, era:string): string {

    switch (era){
        case "AC":
            if(year > 4000) {
                return "Pré-História"
            } else {
                return "Idade Antiga"
            }
        
        case "DC":
            if(year < 476) {
                return "Idade Antiga"
            } else if (year < 1453){
                return "Idade Média"
            } else if (year < 1789) {
                return "Idade Moderna"
            } else {
                return "Idade Contemporânea"
            }
        
        default:
            return "Type a valid year or era"
    }

    
}