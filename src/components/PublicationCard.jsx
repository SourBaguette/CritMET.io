import classes from "./PublicationCard.module.css";

export default function PublicationCard({
  title,
  author,
  date,
  abstract,
  link,
}) {
  return (
    <>
      <div className={classes.PublicationCardContainer}>
        <a href={link}>
          <h3>{title}</h3>
          <div className={classes.publicationInfo}>
            <p>By: {author}</p>
            <p>{date}</p>
          </div>
          <p className={classes.abstract}>{abstract}</p>
        </a>
      </div>
    </>
  );
}
