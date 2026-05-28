import style from './modal.module.css'

interface Props {
    children: React.ReactNode;
    onClose: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
    return (
        <div className={style.box} onClick={onClose}>
            <div className={style.boxSec} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};