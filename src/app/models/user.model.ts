export class User {
    public carsID: Array<number> = [];
    constructor (
        public login: string,
        public firstName: string,
        public lastName: string,
        public pass: string) { }
}