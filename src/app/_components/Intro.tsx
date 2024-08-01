import { INFO } from "@/app/_constants/info";
import { Button } from "flowbite-react";
import { Work_Sans } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <>
      <section className="text-center mt-3 px-2">
        <p className="font-semibold text-md  mb-3">{INFO.greeting}</p>
        <div className="mb-3">
          <h1 className={`${work_sans.className} font-extrabold text-5xl`}>
            Hi I'm
          </h1>
          <h1
            className={`${work_sans.className} font-extrabold text-5xl text-blue-600 mb-2`}
          >
            {INFO.name}
          </h1>
          <h1 className={`${work_sans.className} font-extrabold text-5xl`}>
            {INFO.role}
          </h1>
        </div>
        <p className={`${work_sans.className} mb-3`}>{INFO.bio}</p>
        <Button pill className="mx-auto w-[80%] sm:max-w-40 text-2xl mt-3">
          <span className="text-xl">Resume </span>
          <span className="ml-2">
            {" "}
            <FontAwesomeIcon
              icon={faFileDownload}
              className="fas fa-check align-middle mt-1"
              style={{ fontSize: 20 }}
            />
          </span>
        </Button>
      </section>
    </>
  );
}
