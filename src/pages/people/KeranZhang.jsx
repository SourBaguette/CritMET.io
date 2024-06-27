import { peoplePage } from "../../data/textContext";
import "../AboutMe.css";

import Button from "../../util/Button";
import { db, storage } from "../../config/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import PublicationCard from "../../components/PublicationCard";
import { Link } from "react-router-dom";

export default function KeranZhang() {
  // importing data for publications
  const [publicationList, setPublicationList] = useState([]);
  const publicationCollectionRef = collection(
    db,
    "Publications/Keran Zhang/Keran Zhang Publications"
  );

    // reference to image from firebase storage
    const [imageURL, setImageURL] = useState(null);
    const storageRef = ref(storage, "Profile Images/Keran Zhang");

    useEffect(() => {
      const getPublication = async () => {
        // read the data from the database
        // set the publication list
        try {
          const q = query(publicationCollectionRef, orderBy('date', 'asc'));
          const data = await getDocs(q);
          const filteredData = data.docs.slice(0, 3).map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setPublicationList(filteredData);
        } catch (err) {
          console.log(err);
        }
      };
    
        // reading profile image from firebase storage
        // setting image to ImageUrl
        const getImage = async () => {
          listAll(storageRef)
            .then((res) => {
              const imageRef = res.items[0];
              getDownloadURL(imageRef)
                .then((url) => {
                  setImageURL(url);
                })
                .catch((err) => {
                  console.log("Error getting download URL: ", err);
                });
            })
            .catch((err) => {
              console.log("Error listing iamges: ", err);
            });
        };
    
        getImage();
        getPublication();
      }, []);

  return (
    <>
      <div className="AboutMeContainer">
        <div className="PersonalImage">
          <img className="ResponsiveImage" src={imageURL}></img>
        </div>
        <div className="PersonalInfo">
          <h1>Keran Zhang</h1>
          <p>{peoplePage.keranZhang}</p>
        </div>
      </div>

      <div className="publicationContainer">
        <hr />
        <div className="title">
          <h1>Publications</h1>
          <Link to="/Publications">
            <Button name="View all" />
          </Link>
        </div>
        <div className="cardContainer">
          {publicationList.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              title={publication.title}
              author={publication.author}
              link={publication.link}
              abstract={publication.abstract}
              date={publication.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}
