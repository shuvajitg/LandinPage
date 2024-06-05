"use client";
import Link from "next/link";
import Data from "../data/data.json";
import Image from "next/image";
import ReviewCard from "./review/Card";
import Plans from "./Plans";
import Avatar from "@nextui-org/react";

export default function LandingPage() {
  return (
    <div className="bg-[#3aafa3] relative">
      <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-6xl xl:text-8xl text-center mt-2 text-slate-50 tracking-widest">
        {Data.map((item) => {
          return item.hero.headline;
        })}
      </h1>
      <h3 className="font-semibold text-xs sm:text-2xl lg:text-4xl tracking-wide text-center">
        {Data.map((item) => {
          return item.hero.subheadline;
        })}
      </h3>
      <div className="flex mt-4 mb-4">
        <Link
          className="flex flex-row mx-auto text-center "
          href={Data.map((item) => {
            return item.hero.ctaButtons.map((item) => {
              console.log(item.link);
              return (
                <>
                  <div className="">{item.link}</div>
                </>
              );
            });
          })}
        >
          {Data.map((item) => {
            return item.hero.ctaButtons.map((item) => {
              return (
                <>
                  <div className="m-2 ">
                    <button className="p-2  bg-white rounded">
                      {item.text}
                    </button>
                  </div>
                </>
              );
            });
          })}
        </Link>
      </div>
      <div className="flex flex-col ">
        <h1 className="mx-auto uppercase text-xl underline ">features</h1>
        <section className="grid grid-flow-row mt-4 sm:grid-flow-col gap-4">
          {Data.map((item) => {
            return item.features.map((item) => {
              return (
                <>
                  <div className="mx-auto text-center">
                    <div className=" text-xl text-slate-50 sm:text-4xl ">
                      {item.title}
                      <div className="bg-white items-center rounded-full h-10 w-10">
                        <Avatar
                          isBordered
                          radius="full"
                          size="md"
                          src={item.icon}
                        />
                      </div>
                    </div>
                    <div className="">{item.description}</div>
                  </div>
                </>
              );
            });
          })}
        </section>
      </div>
      <ReviewCard />
      <Plans />

      <br />
    </div>
  );
}
