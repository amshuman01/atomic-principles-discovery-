import React from "react";
import Ad from "../../atoms/ad/Ad";
import Class from "./CarouselContainer.module.css";
import LeftArrow from "../../../images/left-arrow.png";
import RightArrow from "../../../images/right-arrow.png";
import LargeText from "../../atoms/textContent/LargeText";
import MediumText from "../../atoms/textContent/MediumText";
import Moon from "../../../images/moon.jpeg";
import Tags from "../../atoms/tags/Tags";
import CategoryList from "./CategoryList";

const CarouselContainer = () => {
  return (
    <div className={Class.container}>
      <Ad></Ad>
      <div className={Class.mainCarousel}>
        <img
          src={LeftArrow}
          alt="left-arrow"
          className={Class.smallImage}
        ></img>
        <div className={Class.textContainer}>
          <LargeText className={Class.large}>The Moon And Beyond</LargeText>
          <MediumText className={Class.medium}>
            The thrilling tale of two events -Neil Armstrong's first step &
            China's landing.
          </MediumText>
          <Tags>Space</Tags>
          <Tags>Science</Tags>
        </div>
        <img src={Moon} className={Class.moon}></img>
        <img
          src={RightArrow}
          alt="left-arrow"
          className={`${Class.smallImage} ${Class.marginNone}`}
        ></img>
      </div>
      <CategoryList></CategoryList>
    </div>
  );
};

export default CarouselContainer;
