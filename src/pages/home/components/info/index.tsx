import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { cardInfo } from "./card-data";
import {
  cardDescriptionVariants,
  cardTitleVariants,
  cardVariants,
} from "./card-styles";

const Info: React.FC = () => {
  return (
    <div className="info-section flex flex-col items-center w-[80%] mt-[100px] ">
      <h1 className="section-title autoDisplay text-[40px] font-bold ">
        Hello, There 👋
      </h1>
      <div className="info-cards grid grid-cols-3  gap-[20px] w-full h-auto mt-[30px] ">
        {cardInfo?.map((card, index) => (
          <div
            className={cardVariants({
              isThirdCard: index === 2,
              isFourthCard: index === 3,
            })}
            key={index}
          >
            {card.image && (
              <img
                className=" w-[60%] h-[50%] object-cover "
                src={card.image}
                alt="card-image"
              />
            )}

            {card.video && (
              <video
                className="mt-[10%] w-[70%] h-[50%] object-fit mix-blend-lighten  "
                src={card.video}
                autoPlay
                loop
                muted
              />
            )}
            <h1
              className={cardTitleVariants({
                isThirdCard: index === 2,
                isFourthCard: index === 3,
                default: index === 0 || index === 1 || index === 4,
              })}
            >
              {card.title}
            </h1>
            <p
              className={cardDescriptionVariants({
                isThirdCard: index === 2,
                isFourthCard: index === 3,
              })}
            >
              {card.description}
            </p>
            {index === 2 && (
              <button className="text-white py-[5px] px-[15px] border rounded-[10px] border-[#727fdeb4] bg-[#2200493d]  shadow-[0_0_5px_#727fde86]  cursor-pointer transition duration-300   absolute bottom-[5%] left-[5%]  flex justify-center items-center gap-1     hover:shadow-[0_0_15px_#727fde86] hover:opacity-[0.7]">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="w-[12px] h-[12px]"
                />
                Contact Me
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
