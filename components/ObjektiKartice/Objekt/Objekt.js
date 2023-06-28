import React from 'react';

import {useState, useEffect, useRef} from "react";
import {
  WrapObjekt,
  Title,
  Text,
  WrapImage,
  Line,
  WrapButton,
  WrapLeftRight,
  WrapGalleryLink,
  HeroWrap2,
  WrapPhoto,
  CenteredText
} from "./style.js";

// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import Button from "../../Button/index.js";
import useWindowSize from "../../useWindowSize.js";

import Popup from "../Objekt/Popup.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="wrapLoaderNext">
      <div className="arrow">
        <AiOutlineArrowRight size={25} />
      </div>
      <div className="loaderPrev" onClick={onClick}></div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="wrapLoaderPrev">
      <div className="arrow">
        <AiOutlineArrowLeft size={25} />
      </div>
      <div className="loaderNext" onClick={onClick}></div>
    </div>
  );
}
const settings = {
  className: "photoSlider",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  lazyLoad: true,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2200,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
       dots:false,
      }
    },
  ]
};


const Objekt = ({
  photo,
  title,
  text,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  id,
  handleClick,
  gallery,
}) => {

  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [popupRef]);
  
const handleClicked = (id) => {
    handleClick(id);
    setShowPopup(!showPopup);
  };
const handleClosePopup =()=>{
  setShowPopup(false);
}

 const [showPopup, setShowPopup] = useState(false);

 const size=useWindowSize();

 

  return (
    <WrapObjekt>
       {/*    {/* <button onClick={handleClick}>Show Popup</button> */}
       <Popup show={showPopup}>
            <HeroWrap2 id="images"  ref={popupRef}>
              <Slider {...settings}  >
                {gallery.map((img, index) => (
                  <WrapPhoto key={index} >
                    <Image
                      src={img.photo}
                      alt="slider image"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </WrapPhoto>
                ))}
              </Slider>
            </HeroWrap2>
          </Popup> 
      <WrapImage>
        {" "}
        <Image
          src={photo}
          alt="house"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
        <WrapGalleryLink onClick={() => handleClicked(id)}>
          <span>{title} PHOTO GALLERY</span>
        </WrapGalleryLink>
      </WrapImage>
      {size.width<=700?(
      <WrapLeftRight>
       
        <Title>{title}</Title>
        <Text>{text}</Text>
  
        <WrapButton>
          <a href="https://dvorpitve.book.rentl.io" target="_blank">
            <Button text="BOOK NOW" version="dark" />
          </a> 
        </WrapButton>
      
      
        <Line />
        <ul>
          {data1 && <li>{data1}</li>}
          {data2 && <li>{data2}</li>}
          {data3 && <li>{data3}</li>}
          {data4 && <li>{data4}</li>}
          {data5 && <li>{data5}</li>}
          {data6 && <li>{data6}</li>}
          {data7 && <li>{data7}</li>}
          {data8 && <li>{data8}</li>}
        </ul>
  
      </WrapLeftRight>
      ):(
      <React.Fragment>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <WrapButton>
          <a href="https://dvorpitve.book.rentl.io" target="_blank">
            <Button text="BOOK NOW" version="dark" />
          </a> 
        </WrapButton>
        <Line />
        <ul>
          {data1 && <li>{data1}</li>}
          {data2 && <li>{data2}</li>}
          {data3 && <li>{data3}</li>}
          {data4 && <li>{data4}</li>}
          {data5 && <li>{data5}</li>}
          {data6 && <li>{data6}</li>}
          {data7 && <li>{data7}</li>}
          {data8 && <li>{data8}</li>}
        </ul>
      </React.Fragment>
      )}
     
    
    </WrapObjekt>
  );
};

export default Objekt;
