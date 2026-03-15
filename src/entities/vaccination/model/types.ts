import type {NameVaccination} from "entities/vaccination/model/index.ts";

export interface IVaccination {
    id: string;
    petId: string;
    nameOfVaccination: NameVaccination;
    previousDate: Date;
    vaccinationDate: Date;
    nextDate: Date;
    manualNextDate?: Date;
    note?: string;

}