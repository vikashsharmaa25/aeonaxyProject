import React from "react";
import NewsData from "./NewsData";

function News() {
  return (
    <>
      <h1 className="text-[40px] font-semibold my-24">In The News</h1>
      <div className="paragraph font-light">
        {NewsData.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-start w-full">
              <div className="w-full">
                <h1 className="font-medium text-[16px]">{item.date}</h1>
                <h1 className="font-medium text-[16px]">{item.title}</h1>
                <p className="text-[15px] tracking-wide">{item.content}</p>
              </div>
              <div className="underline-offset-2 underline uppercase sm:text-[16px] text-sm mt-5">
                Read more
              </div>
            </div>
            <hr className="mt-12 mb-11 hr" />
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
