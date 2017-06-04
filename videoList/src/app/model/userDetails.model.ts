import { Md5 } from 'ts-md5/dist/md5';
export class UserModel {
    username: string;
    password: string|Int32Array;

    constructor(username: string, password: string) {
        let encrypPassword = Md5.hashStr(password);
        this.username = username;
        this.password = encrypPassword;
        
    }
}