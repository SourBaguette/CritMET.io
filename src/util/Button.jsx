import style from './Button.module.css';

export default function Button({ name, link }){
    return (
        <a href={link} className={style.buttonWrap}>{name}</a>
    );
}