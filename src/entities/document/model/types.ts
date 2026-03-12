import type {TypeOfDocument} from "entities/document";

export interface IDocument {
    id: string;
    petId: string;
    addedById: string;
    documentType: TypeOfDocument;
    fileUrl: string;
    title?: string;
    note?: string;
    createdAt: Date;
    editedAt?: Date;
    editedById?: string;

}