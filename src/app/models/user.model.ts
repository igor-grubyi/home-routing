export class User {
    public carsID: Array<number> = [];
    constructor (
        public id: number,
        public login: string,
        public firstName: string,
        public lastName: string,
        public pass: string) { }
}