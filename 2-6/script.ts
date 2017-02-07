
interface iListOfIIngredients{
    flour: string;
    milk: string;
    oil: string;
    salt: string;
    sugar: string;
    egg: string;
    tomatoes: string;
    pepper: string;
    yellowCheese: string;
    whiteCheese: string;
}

class ListOfIIngredients {
    public flour: string;
    public milk: string;
    public oil: string;
    public salt: string;
    public sugar: string;
    public egg: string;
    public tomatoes: string;
    public pepper: string;
    public yellowCheese: string;
    public whiteCheese: string;

    constructor(flour: string, milk: string, oil: string, salt: string, sugar: string, egg: string, tomatoes: string, pepper: string, yellowCheese: string, whiteCheese: string){
        this.flour = flour;
        this.milk = milk;
        this.oil = oil;
        this.salt = salt;
        this.sugar = sugar;
        this.egg = egg;
        this.tomatoes = tomatoes;
        this.pepper = pepper;
        
}
class Recept  {
    constructor(public name: string, public source: string, public ingredients: ListOfIIngredients ){

    }
}