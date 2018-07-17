export class Hero {
    private static ID_Count = 1;
    
    id: number;
    name: String;

    constructor(name?: string){
        this.id = Hero.ID_Count++;
        this.name = name;

    }
}
