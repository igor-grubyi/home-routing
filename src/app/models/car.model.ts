export class Car {
    public img: string;
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public year: number,
        public color: number,
        public state: string,
    ) {
         this.img = `./../assets/img/${brand}/${model}.jpg`;
    }
}
