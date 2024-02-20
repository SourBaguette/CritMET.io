import style from "./CardComp.module.css";

export default function CardComp({ image, title, publishedDate, link, eventDate, location }) {
  return (
    <>
      <div className={style.card}>
        <img className={style.cardImage} src={image} />
        <div className={style.cardContent}>
          {publishedDate ? (
            <a  className={style.link} href={link}>
            <h3>{title}</h3>
            <p className={style.date}>{publishedDate}</p>
          </a>): null }

          {(eventDate && location) ? (
            <a  className={style.link} href={link}>
            <h3>{title}</h3>
            <p className={style.date}><b>Event Date:</b> {eventDate}</p>
            <p className={style.location}><b>Location:</b> {location}</p>
            </a>): null}
        </div>
      </div>
    </>
  );
}
