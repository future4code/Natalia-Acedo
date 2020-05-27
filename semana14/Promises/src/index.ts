import axios from "axios"

//Exercício 1
// a.   /subscribers/all 
// b.   async function functionName(): Promise<any[]>
// c.:

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"


type User = {
    id: string,
    name: string,
    email: string
}


async function getSubscribers(): Promise <User[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}


//Exercício 2
// a. A diferença é que a arrow function é atribuída a uma variável, enquanto que a função nomeada não é.
// b.:

const getSubscribersArrow = async(): Promise <User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    console.log("Pegou usuários")
    return users.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

//Exercício 3
// a. Não, só terá erro de tipagem caso não exista o type User
// b. Fazemos isso porque é uma boa prática indicar o que aquela função retorna, mesmo não sendo necessário declarar. 
// c. Já tinha implementado

//Exercício 4
// a. Função void, pois ela não retorna nada.
// b.:

const createNews = async(): Promise <void> => {
    await axios.put(`${baseUrl}/news`, {
        title: "Olga Tokarczuk",
        content: "Sobre os ossos dos mortos",
        date: Date.now()
      })
      console.log("New post")
}

//Exercício 5
// a. Não é recomendável usar o forEach nesse caso, pois antes de terminar de enviar a notificação para o usuário, o código abaixo dele do forEach continuaria a ser lido. 
// b.: 

const sendNotifications = async (users: User[], message: string): Promise <void> => {
    for(const user of users) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message
        })
    }
}

//Exercício 6
// a. Ela envia todas as requisições ao mesmo tempo
// b. As notificações poderão ser enviadas paralelamente.
// c.:

const sendNotificationsB = async (users: User[], message: string): Promise <void> => {
    const promiseArray = []
    for(const user of users) {
        promiseArray.push(
            axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: "New!"
            })
        )
    }
    await Promise.all(promiseArray);
}

//Exercício 7
// 





// MAIN
const main = async (): Promise<any> => {
    try {
        console.log("Antes de chamar")

        const createNewsConst = await createNews()

    const subscribers = await axios.get(`${baseUrl}/subscribers/all`)
        
        for (const subscriber of subscribers.data) {
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "New!"
            })
        }  

        console.log("fim")

    } catch (err) {
        console.error(err)
    }
}

main()