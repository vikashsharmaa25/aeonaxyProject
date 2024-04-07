import React from "react";
import PressReleasesData from "./PressReleasesData";

function PressReleases() {
  return (
    <>
      <h1 className="text-[40px] font-semibold my-24">Press Releases</h1>
      <div className="paragraph font-light">
        {PressReleasesData.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-start">
              <div className="ml-4">
                <h1 className="font-medium text-[16px]">{item.date}</h1>
                <p className="text-[15px] tracking-wide">{item.content}</p>
              </div>
              <div className="underline-offset-2 underline uppercase sm:text-[16px] text-sm mt-4">
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

export default PressReleases;
