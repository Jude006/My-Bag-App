import React from "react";

function AboutSection2() {
  return (
    <div className="font-mont my-10">
      <div className="text-center">
        <h3 className="font-bold">Our Service also includes:</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:px-10 lg:px-28 px-8  mt-14 gap-6">
        <div className=" py-6 px-2 flex flex-col">
          <div>
            <img src="/images/service1.png" alt="" />
          </div>
          <div>
            <p className="font-bold text-2xl text-start">Garden Care</p>
            <p className="text-start mt-1 text-[14px]">
              Elevate your gardening with expert tips for thriving plants.
              Nourish, nurture, and create your green haven.
            </p>
          </div>
        </div>
        <div className=" py-6 px-2">
          <div>
          <img src="/images/service2.png" alt="" />
          </div>
          <div>
            <p className="font-bold text-2xl text-start">Plant Renovation</p>
            <p className="text-start mt-1 text-[14px]">
            Transform your space with plant renovation. Revitalize your surroundings with a curated selection of botanical wonders.
            </p>
          </div>
        </div>
        <div className=" py-6 px-2">
          <div>
          <img src="/images/service3.png" alt="" />
          </div>
          <div>
            <p className="font-bold text-2xl text-start">Seed Supply</p>
            <p className="text-start mt-1 text-[14px]">
            Start your green journey from the very beginning. Explore our premium seed supply for cultivating nature's wonders at home.
            </p>
          </div>
        </div>
        <div className=" py-6 px-2">
          <div>
          <img src="/images/service4.png" alt="" />
          </div>
          <div>
            <p className="font-bold text-2xl text-start">Watering Garden</p>
            <p className="text-start mt-1 text-[14px]">
            Nurture your garden's vitality with proper watering techniques. Unlock the secret to lush, vibrant plants that thrive in any space.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection2;
