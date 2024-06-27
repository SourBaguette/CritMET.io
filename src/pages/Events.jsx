import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import CardComp from "../components/CardComp";
import style from "./pagesCSS/Events.module.css";

export default function Events() {
  // reference to event list from firestore database
  const [eventList, setEventList] = useState([]);
  const eventCollectionRef = collection(db, "Events");

  useEffect(() => {
    const getEventDetails = async () => {
      // read the data from the database
      // set the publication list
      try {
        const q = query(eventCollectionRef, orderBy("date", "asc"));
        const querySnapshot = await getDocs(q);

        const events = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEventList(events);
      } catch (err) {
        console.log("Error fetching events:", err);
      }
    };

    getEventDetails();
  }, []);

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.cardContainer}>
          {eventList.map((event) => (
            <CardComp
              key={event.id}
              image={event.image}
              title={event.title}
              publishedDate=""
              link={event.link}
              eventDate={event.date}
              location={event.location}
            />
          ))}
        </div>
      </div>
    </>
  );
}
