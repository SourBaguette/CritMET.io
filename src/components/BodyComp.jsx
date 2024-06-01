import CardComp from "./CardComp";
import style from "./BodyComp.module.css";
import Button from "../util/Button";
import quARUm from "../images/quARUm.jpeg";
import projectNews from "../images/projectNews.jpeg";
import externalLink from "../images/icons/external-link.svg";

import { Link } from "react-router-dom";
import { db, storage } from "../config/firebase";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { getDocs, collection } from "firebase/firestore";

export default function BodyComp() {
  // reference to event list from firestore database
  const [eventList, setEventList] = useState([]);
  const eventCollectionRef = collection(
    db,
    "Events"
  );

  // reference to event image from firebase storage
  const [imageURL, setImageURL] = useState([]);
  const storageRef = ref(storage, "Event Images");

  useEffect(() => {
    const getEventDetails = async () => {
      // read the data from the database
      // set the publication list
      try {
        const data = await getDocs(eventCollectionRef);
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

    // reading event image from firebase storage
    // setting image to ImageUrl
    const getImage = async () => {
        try {
          const res = await listAll(storageRef);
          const imageURLs = [];

          for (let i=0; i<Math.min(3, res.items.length); i++){
            const imageRef = res.items[i];
            const url = await getDownloadURL(imageRef);
            imageURLs.push(url);
          }
          setImageURL(imageURLs);
        }
        catch(err){
          console.log("Error getting images: ", err);
        }
    };

    getImage();
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
          <Button name="View all" link="https://www.youtube.com/" />
        </div>
        <div className={style.cardContainer}>
          {eventList.map((event, index) => (
            <CardComp 
              key={event.id}
              image={imageURL[index]}
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

