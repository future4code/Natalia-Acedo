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

const createNews = async(title: string, content: string, date: number): Promise <void> => {
    await axios.put(`${baseUrl}/news`, {
        title,
        content,
        date
      })

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
                message
            })
        )
    }
    await Promise.all(promiseArray);
}

//Exercício 7
// a.:

const createSubscriber = async (name: string, email: string): Promise <void> => {
    await axios.put(`${baseUrl}/subscribers`, {
        name,
        email
      })
}

// b.: 

const createSendNotifications = async () => {
    try {
        await createNews (
            "Elena Ferrante",
            "L'amica geniale",
            Date.now()
        )

        const users = await getSubscribersArrow()

        await sendNotificationsB(users, "Check the news!")
       
    } catch (err) {
        console.error(err)
    }
}


//c.:

const getAllNotifications = async () => {
    const users = await getSubscribersArrow()

    const notificationPromises = []

    for (const user of users) {
        notificationPromises.push(
          axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
        )
      }

    const result = await Promise.all(notificationPromises);

    const dataFromResult = result.map((res) => res.data);

    return console.log(dataFromResult)
    
}

getAllNotifications()





 const main = async (): Promise<any> => {
    try {
        getAllNotifications()
    } catch (err) {
        console.error(err)
    }
}

main() 