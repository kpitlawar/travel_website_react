import React, { useEffect } from "react";
import "./main.css";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: image1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX ",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
  },
  {
    id: 2,
    imgSrc: image2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX ",
    fees: "$600",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
  },
  {
    id: 3,
    imgSrc: image3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish®] and Ebeauty®. Always interesting to be in this place",
  },
  {
    id: 4,
    imgSrc: image4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL - RELAX",
    fees: "$800",
    description:
      "According to the World• Tourism Ranking, • 45• Million-people• visit Turkey each year, •and • from• that •about • 2•Million come to visit • Cappadocia. •This place is known• for•its• luxurious stays • and • adventurous • activities. ",
  },
  {
    id: 5,
    imgSrc: image5,
    destTitle: "Great Barrier Reef",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish®] and Ebeauty®. Always interesting to be in this place",
  },
  {
    id: 6,
    imgSrc: image6,
    destTitle: "Great Barrier Reef",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish®] and Ebeauty®. Always interesting to be in this place",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent  grid" data-aos="fade-up">
        {Data.map((item) => {
          return (
            <div key={item.id} className="singleDestination">
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>
                <span className="contient flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{item.description}</p>
                </div>
                <button className="btn flex">
                  DETAILS <LuClipboardCheck className="icon" />{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
