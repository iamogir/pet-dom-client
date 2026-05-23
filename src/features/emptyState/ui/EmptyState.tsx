import type {EmptyVariant} from "features/emptyState/types/types.ts";
import {EMPTY_CONFIG} from "features/emptyState/lib";

interface Props {
    variant: EmptyVariant
}

export const EmptyState = ({ variant }: Props) => {
    const config = EMPTY_CONFIG[variant];

    return (
        <div>
            <h1>{config.title}</h1>
            <p>{config?.description ?? ''}</p>
        </div>
    );
};