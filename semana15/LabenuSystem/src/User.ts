import * as moment from "moment"

export interface User {
    id: number,
    name: string,
    email: string,
    birthday: moment.Moment
}
