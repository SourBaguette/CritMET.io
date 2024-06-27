import CardComp from "./CardComp";
import style from "./BodyComp.module.css";
import Button from "../util/Button";
import quARUm from "../images/quARUm.jpeg";
import projectNews from "../images/projectNews.jpeg";
import externalLink from "../images/icons/external-link.svg";

import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

export default function BodyComp() {
  // reference to event list from firestore database
  const [eventList, setEventList] = useState([]);
  const eventCollectionRef = collection(
    db,
    "Events"
  );

  useEffect(() => {
    const getEventDetails = async () => {
      // read the data from the database
      // set the publication list
      try {
        const q = query(eventCollectionRef, orderBy('date', 'asc'));
        const data = await getDocs(q);
        // gets only the latest 3 events data
        const filteredData = data.docs.slice(0, 3).map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEventList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getEventDetails();
  }, []);

  return (
    <div className={style.researchWrapper}>
      <div className={style.quarumInfo}>
        <div className={style.quarumInfoImage}>
          <img src={quARUm} className={style.researchWrapperImage} />
        </div>
        <div className={style.quarumInfoBrief}>
          <p className={style.fontHeading}>
            <Link to="/WhatIsQuarum" className={style.link}>
              What is QuARUm{" "}
              <img src={externalLink} className={style.externalLink} />
            </Link>
          </p>
          <p className={style.fontContent}>
            QuARUm is the German acronym for “Quality Assessment of Analytical
            Data in Resource and Environmental Research” (Qualitätsbewertung von
            Analytikdaten in der Ressourcen- und Umweltforschung). QuARUm is a
            multidisciplinary research project in cooperation with the Software
            Engineering research group at TU Dortmund. It started in 2023.
          </p>
        </div>
      </div>
      <div className={style.projectInfo}>
        <div className={style.projectInfoBrief}>
          <p className={style.fontHeading}>
            <Link to="/ProjectNews" className={style.link}>
              Project News{" "}
              <img src={externalLink} className={style.externalLink} />
            </Link>
          </p>
          <p className={style.fontContent}>
            QuARUm has started, and we are working on the first prototypes.
            During the next years, we will develop and publish software tools
            that support researchers in evaluating their analytical data. In
            geoscientific case studies, we will demonstrate the function of our
            software.
          </p>
        </div>
        <div className={style.projectInfoImage}>
          <img src={projectNews} className={style.researchWrapperImage} />
        </div>
      </div>
      <hr className={style.divider} />
      <div className={style.eventCards}>
        <div className={style.title}>
          <h1>Upcoming Events</h1>
          <Link to="/Events">
            <Button name="View all" />
          </Link>
        </div>
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
    </div>
  );
}

