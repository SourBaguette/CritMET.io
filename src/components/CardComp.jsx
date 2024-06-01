import style from "./CardComp.module.css";

export default function CardComp({
  image,
  title,
  publishedDate,
  link,
  eventDate,
  location,
  subtitle,
}) {
  return (
    <>
      {image ? (
        <div className={style.card}>
          <img className={style.cardImage} src={image} />
          <div className={style.cardContent}>
            {publishedDate ? (
              <a className={style.link} href={link}>
                <h3>{title}</h3>
                <p className={style.date}>{publishedDate}</p>
              </a>
            ) : null}

            {eventDate && location ? (
              <a className={style.link} href={link}>
                <h3>{title}</h3>
                <p className={style.date}>
                  <b>Event Date:</b> {eventDate}
                </p>
                <p className={style.location}>
                  <b>Location:</b> {location}
                </p>
              </a>
            ) : null}
          </div>
        </div>
      ) : 
      null }
      {!image && subtitle ? (
        <div className={style.card}>
          <a className={style.link} href={link}>
            <div className={style.cardContent}>
              <p className={style.noImageTitle}>{title}</p>
              <div className={style.subtitleContainer}>
                <p className={style.subtitle}>{subtitle}</p>
              </div>
            </div>
          </a>
        </div>
      ) : null}
    </>
  );
}
