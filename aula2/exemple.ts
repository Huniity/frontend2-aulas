////////////////////// CLASS & INHERITANCE ///////////////////////////

export interface Post {
    title: string;
    content: string;
    datePublished: number;
}

class PostContent {
    post: Post;

    constructor(post: Post) {
        this.post = post;
    }
}

const post = new PostContent({
    title: "Post1",
    content: "Description",
    datePublished: new Date().getFullYear(),
});

console.log(post);
console.log(post.post.title);
console.log(post.post.content);
console.log(post.post.datePublished);


class Animal{
    raca: string;
    caracteristica: string;
    
    constructor(raca: string, caracteristica: string){
        this.raca = raca;
        this.caracteristica = caracteristica;
    }

    fazerSom(): void {
        console.log("Som");
    }
}
const cao = new Animal("Malinois", "Protetor");
console.log(cao.raca);
console.log(cao.caracteristica);
cao.fazerSom();


class Gato extends Animal {
    fazerSom(): void {
        console.log("Miau");
    }
}

const gato = new Gato("Shorthair", "peludo");



////////////////////// CLASS & GENERICS ///////////////////////////

function random<T>(valor: T): T {
    return valor;
}

random<string>("Nome");
random<number>(1);

interface AnimalGeneric {
    name: string;
    age: number;
    color: string;
}

class Zoo<T> {
    animal: T;
    
    constructor(animal: T) {
        this.animal = animal;
    }
}

const zooAnimal = new Zoo<AnimalGeneric>({
    name: "Dog",
    age: 5,
    color: "Black",
});

console.log(zooAnimal.animal.name);
console.log(zooAnimal.animal.age);
console.log(zooAnimal.animal.color);


////////////////////// UTILITY TYPES ///////////////////////////

const animalPartial: Partial<AnimalGeneric> = {
    name: "Partial Cat",
};

const animalReadonly: Readonly<AnimalGeneric> = {
    name: "Readonly Cat",
    age: 4,
    color: "White",
};

type MiniAnimal = Pick<AnimalGeneric, "name" | "age">;
type MaxiAnimal = Omit<AnimalGeneric, "color">;

const miniAnimal: MiniAnimal = {
    name: "Mini Cat",
    age: 3,
};

const maxiAnimal: MaxiAnimal = {
    name: "Maxi Cat",
    age: 7,
};