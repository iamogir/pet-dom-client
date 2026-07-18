interface Props {
    title?: string;
    message?: string;
}

export const ErrorState = ({ title = 'Something went wrong!', message = 'Try again :)' }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>

        </div>
    );
};