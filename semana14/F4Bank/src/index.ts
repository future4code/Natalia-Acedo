import * as fs from 'fs'

const allAccounts: string = "allAccounts.json"

const userName: string = process.argv[2]
const userCpf: string = process.argv[3]
const userBirthday: string = process.argv[4]

type account = {
    name: string,
    cpf: string,
    birthday: string, 
    balance: number
}

type transaction = {
    name: string,
    cpf: string,
    receiverName: string,
    receiverCpf: string, 
    transactionValue: number
}



function createAccount (userName: string, userCpf: string, userBirthday: string, userBalance: number): any {
    const newAccount: account ={
        name: userName,
        cpf: userCpf,
        birthday: userBirthday,
        balance: userBalance
    }

    try {
        fs.appendFileSync(allAccounts, JSON.stringify(newAccount))    
    } catch (err) {
        console.error(err)
    }
}

createAccount(userName, userCpf, userBirthday)
 
function getAllAccounts (): any {
    try {
        const data: Buffer = fs.readFileSync(allAccounts);
        const treatedData: string = data.toString();
        console.log(treatedData)
    }catch (e) {
        console.log(e)
    }
}

getAllAccounts()

