import type {ChangeEvent} from "react";

interface Props {
    searchFn: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
}
export const PetSearch = ({ searchFn, value }: Props) => {
    return (
        <label htmlFor={'search'}>
            <input type={'text'} name={'search_name'} onChange={searchFn} value={value} placeholder={'search...'} />
        </label>
    );
};