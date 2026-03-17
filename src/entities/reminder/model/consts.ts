export const reminderReason = [ 'vaccination', 'appointment', 'injection',  'other' ] as const;
export type ReminderReason = typeof reminderReason[number];