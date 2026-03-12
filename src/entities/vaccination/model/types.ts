import type {NameVaccination} from "entities/vaccination";

export interface IVaccination {
    id: string;
    petId: string;
    nameOfVaccination: NameVaccination;
    nextDate: Date;
    manualNextDate?: Date;
    note?: string;

}