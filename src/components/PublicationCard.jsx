import classes from "./PublicationCard.module.css";

export default function PublicationCard({
  title,
  author,
  date,
  abstract,
  link,
}) {
  // Convert eventDate to a timestamp and then to a JavaScript Date object
  const ts = (date.seconds + date.nanoseconds / 1000000000) * 1000;
  const newDate = new Date(ts);

  // Convert the JavaScript Date object to human-readable string
  const formattedDate = newDate.toLocaleDateString();

  return (
    <>
      <div className={classes.PublicationCardContainer}>
        <a href={link}>
          <h3>{title}</h3>
          <div className={classes.publicationInfo}>
            <p>By: {author}</p>
            <p>{formattedDate}</p>
          </div>
          <p className={classes.abstract}>{abstract}</p>
        </a>
      </div>
    </>
  );
}
