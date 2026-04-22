export const petSex = [ 'male',  'female' ] as const;
export type PetSex = typeof petSex[number];

const dogBreed = [ 'corgi', 'beagle', 'spaniel', 'jack' ] as const;
export type DogBreed = typeof dogBreed[number];

const catBreed = [ 'cheerio', 'munchkin'] as const;
export type CatBreed = typeof catBreed[number];

const birdBreed = [ 'kanareyka', 'korella' ] as const;
export type BirdBreed = typeof birdBreed[number];

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
        breeds: [ 'somebody', 'smth']
    },
    {
        name: 'rabbit',
        breeds: ['black', 'white']
    },
    {
        name: 'hare',
        breeds: [ 'breed', 'hare breed']
    },
    {
        name: 'bird',
        breeds: birdBreed
    }
];

// export const petSpecies = [ 'cat', 'dog', 'bird', 'rabbit' ] as const;
export const petSpecies = petType.map(el => el.name) as const;
export type PetSpecies = typeof petSpecies[number];

export const imagePlaceholder = 'https://png.pngtree.com/png-clipart/20200401/original/pngtree-cat-one-line-drawing-vector-illustration-minimalism-style-png-image_5330621.jpg';