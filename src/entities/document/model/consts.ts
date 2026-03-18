export const typeOfDocument = [ 'passport', 'lab_result', 'travel_certificate', 'appointment' ] as const;
export type TypeOfDocument = typeof typeOfDocument[number];