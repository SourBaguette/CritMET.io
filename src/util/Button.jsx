import style from './Button.module.css';

export default function Button({ name }){
    return (
        <p className={style.buttonWrap}>{name}</p>
    );
}