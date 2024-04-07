import React from "react";
import CardData from "./CardData";

function Card() {
  return (
    <>
      <div className="paragraph font-light grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-56">
        {CardData.map((item) => (
          <div key={item.id} className="w-full">
            <div className="w-full">
              <img src={item.url} alt="" className="min-h-[300px] w-full" />
              <h1 className="font-medium mt-10 mb-2">{item.title}</h1>
              <p className="text-[15px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
