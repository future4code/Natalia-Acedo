import {UserAccount} from "./userAccount"
import {Bank} from "./bank"
import * as fs from "fs"

export class FileManager {

    private fileName: string
    
    constructor(filename: string) {
        this.fileName = filename
    }

    public writeToJson(accounts: UserAccount[]): void {
        fs.writeFileSync(this.fileName, JSON.stringify(accounts, null, 2))
    }

}