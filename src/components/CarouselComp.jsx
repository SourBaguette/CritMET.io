import Carousel from "react-bootstrap/Carousel";
import "./CarouselComp.css";
import { storage } from "../config/firebase";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";

function CarouselComp() {

  // reference to image from firebase storage
  const [imageURLs, setImageURLs] = useState([]);
  const storageRef = ref(storage, "Carousel Images");

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await listAll(storageRef);
        const urlPromises = res.items.map((itemRef) => getDownloadURL(itemRef));
        const urls = await Promise.all(urlPromises);
        setImageURLs(urls);
      } catch (err) {
        console.log("Error getting images: ", err);
      }
    };

    getImages();
  }, []);

  return (
    <div className="carouselBlock">
      <Carousel data-bs-theme="dark">
        {imageURLs.map((url, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={url}
              alt={`Slide ${index + 1}`}
            />
            {index === 0 && (
              <Carousel.Caption>
                <h2>
                  Welcome to the QuARUm webpage! On this page you find general
                  information about QuARUm as well as our latest results and
                  upcoming events.
                </h2>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
