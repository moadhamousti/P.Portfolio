"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/pin";
import { oswald } from "@/data/constants/fonts";
import Link from "next/link";
import Image from "next/image";
import BG from "@/public/bg.png";

const Projects = () => {
  return (
    <section className="pb-32">
      <h1
        className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center`}
      >
        <span className="text-base text-cyan-600">Works</span>
        <span>
          <span>Here are</span>{" "}
          <span className="text-teal-500">My Latest Projects</span>
        </span>
        <span>with their presentations</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[20.5rem] h-[25rem] flex items-center justify-center w-full"
            key={item.id}
          >
            <PinContainer href={item.website} title={item.website}>
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src={BG} alt="bgimg" height={30} width={30}/>

                </div>
                <Image
                  src={item.img}
                  alt="project"
                  fill
                  className="z-10 absolute bottom-0"
                  height={30}
                  width={30}
                />
              </div>

              <h1 className="font-sans font-bold dark:text-zinc-100 mb-2 mt-2 line-clamp-1">
                {item.title}
              </h1>

              <p className="font-sans font-normal text-zinc-800 text-base dark:text-neutral-300 line-clamp-2 mb-2">
                {item.des.length > 120
                  ? `${item.des.slice(0, 90)}...`
                  : item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" height={30} width={30} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    href={item.website}
                    target="_blank"
                    className="flex items-center text-cyan-600 dark:text-teal-500 font-semibold"
                  >
                    <span className="text-sm text-white">Visit website</span>
                    <FaLocationArrow className="ms-3" />
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
