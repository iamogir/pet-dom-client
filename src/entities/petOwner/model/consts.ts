export const ownerRole = [ 'owner', 'family member', 'vet', 'walker' ] as const;
export type OwnerRole = typeof ownerRole[number];