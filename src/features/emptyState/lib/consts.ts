import type {EmptyVariant} from "features/emptyState/types/types.ts";

export const EMPTY_CONFIG: Record<EmptyVariant, {title: string, description?: string}> = {
    pets: {
        title: 'No pets yet',
        description: 'Add your pet!'
    },
    users: {
        title: 'No users found'
    },
    search: {
        title: 'Nothing found',
        description: 'Try different keywords',

    },

    notifications: {
        title: 'No notifications',
    },
}