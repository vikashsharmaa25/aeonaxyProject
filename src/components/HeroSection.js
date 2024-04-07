import React from "react";

function HeroSection() {
  return (
    <>
      <div className="py-2 px-5">
        <h1 className="sm:text-[72px] text-[40px]  mt-8 font-medium">
          Press Room
        </h1>
        <p className="ml-1 paragraph font-light">
          All the News You Need to Know about Wix
        </p>
        <div className="mt-12">
          <hr className="hr" />
          <div className="flex justify-start items-center gap-8 my-8 sm:text-[20px] text-[15px] font-light ">
            <span className="text-blue-600">Press Room</span>
            <span>|</span>
            <span>Press Release</span>
            <span>|</span>
            <span>In The News</span>
          </div>
          <hr className="hr" />
        </div>
        <div className="paragraph font-light my-12 w-[85%]">
          Wix is leading the way with a cloud-based development platform for
          users worldwide. Wix was founded on the belief that the Internet
          should be accessible to everyone to develop, create and contribute.
          Through free and premium subscriptions, Wix empowers millions of
          businesses, organizations, artists, and individuals to take their
          businesses, brands and workflow online.
        </div>
      </div>
    </>
  );
}

export default HeroSection;
