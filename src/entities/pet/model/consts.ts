export const petSex = [ 'male',  'female' ] as const;
export type PetSex = typeof petSex[number];

export const petSpecies = [ 'cat', 'dog', 'bird', 'rabbit' ] as const;
export type PetSpecies = typeof petSpecies[number];

export const petBreed = [ 'beagle', 'corgi', 'jack', 'spaniel' , 'cheshir'] as const;
export type PetBreed = typeof petBreed[number];

export const imagePlaceholder = 'https://png.pngtree.com/png-clipart/20200401/original/pngtree-cat-one-line-drawing-vector-illustration-minimalism-style-png-image_5330621.jpg';