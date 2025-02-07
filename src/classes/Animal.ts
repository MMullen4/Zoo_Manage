class Animal {
    species: string;
    hungry: boolean;
    weight: number;
    amount: number;
    constructor(
        species: string,
        hungry: boolean,
        amount: number,
        weight: number
    ) {
        this.species = species;
        this.hungry = hungry;
        this.amount = amount;
        this.weight = weight;
    }

    makeRollCall(): void {
        console.log(
            `There are ${this.amount} ${this.species} in the zoo, and are ${this.hungry ? 'hungry' : 'full'}!`
        );
    }
}
export default Animal;
