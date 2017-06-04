export class UserResponseModel{
    status: string;
    sessionId: string;
    username:string;

    constructor( response) {
        this.status = response.username;
        this.sessionId = response.sessionId;
        this.username = response.username;
    }
}