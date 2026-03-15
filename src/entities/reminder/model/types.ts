import type {ReminderReason} from "entities/reminder/model/index.ts";

export interface IReminder {
    id: string;
    petId: string;
    reminderReason: ReminderReason;
    manualReason?: string;
    reminderDate: Date;
    note?: string;
    createdById: string;
    createdAt: Date;
    editedAt?: Date;
    editedNyId?: string;
}