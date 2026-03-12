export interface IWeightHistory {
    id: string;
    petId: string;
    addedById: string;
    weight: number;
    dateRecorded: Date;
    note?: string;
}