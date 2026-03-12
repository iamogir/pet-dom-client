import type {ReminderReason} from "entities/reminder";

export interface IReminder {
    id: string;
    petId: string;
    reminderReason: ReminderReason;
    manualReason?: string;
    createdById: string;
    createdAt: Date;
    editedAt?: Date;
    editedNyId?: string;
}