export const petSex = [ 'male',  'female' ] as const;
export type PetSex = typeof petSex[number];

const dogBreed = [ 'corgi', 'beagle', 'spaniel', 'jack' ] as const;
export type DogBreed = typeof dogBreed[number];

const catBreed = [ 'cheerio', 'munchkin'] as const;
export type CatBreed = typeof catBreed[number];

const birdBreed = [ 'kanareyka', 'korella' ] as const;
export type BirdBreed = typeof birdBreed[number];

const hamsterBreed = [ 'somebody', 'smth'] as const;
export type HamsterBreed = typeof hamsterBreed[number];

const rabbitBreed = ['black', 'white'] as const;
export type RabbitBreed = typeof rabbitBreed[number];

const hareBreed = [ 'breed', 'hare breed'] as const;
export type HareBreed = typeof hareBreed[number];

export const petType = [
    {
        name: 'cat',
        breeds: catBreed
    },
    {
        name: 'dog',
        breeds: dogBreed
    },
    {
        name: 'hamster',
        breeds: hamsterBreed
    },
    {
        name: 'rabbit',
        breeds: rabbitBreed
    },
    {
        name: 'hare',
        breeds: hareBreed
    },
    {
        name: 'bird',
        breeds: birdBreed
    }
] as const;

// export const petSpecies = [ 'cat', 'dog', 'bird', 'rabbit' ] as const;
export const petSpecies = petType.map(el => el.name);
export type PetSpecies = typeof petSpecies[number];

export const imagePlaceholder = 'https://png.pngtree.com/png-clipart/20200401/original/pngtree-cat-one-line-drawing-vector-illustration-minimalism-style-png-image_5330621.jpg';