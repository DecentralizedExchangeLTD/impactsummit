"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const [showNav, setShowNav] = React.useState();
  const menuItems = [
    { name: "Hackathon", id: "hackathon" },
    { name: "Schedule", id: "schedule" },
    { name: "Speakers", id: "speakers" },
    { name: "Tickets", id: "tickets" },
    { name: "Impact", id: "impact" },
    { name: "Contact Us", id: "contact" },
  ];

  function scrollToSection(e, id) {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <div className="sm:mt-28 mt-14">
        <nav className="fixed hidden sm:block top-0 bg-white w-full drop-shadow-md">
          <h1 className="absolute left-10 top-10 font-bold text-xl">
            Impact Summit
          </h1>
          <ul className={` flex items-center justify-center h-28 gap-5`}>
            {menuItems.map((item, index) => (
              <li
                className="text-xl capitalize border-2 border-b-black border-white hover:border-black py-1 px-4 hover:border-2 cursor-pointer"
                key={index}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="fixed sm:hidden block top-0 bg-white w-full h-16 drop-shadow-md">
          <h1 className="absolute left-10 top-5 font-bold text-xl">
            Impact Summit
          </h1>
          {/* <h1 className="absolute right-10 top-5">⁝</h1> */}
          {showNav && (
            <ul className="flex items-center justify-center gap-10">
              {menuItems.map((item, index) => (
                <li
                  className="text-xl capitalize border-2 border-b-black border-white hover:border-black py-1 px-4 hover:border-2 cursor-pointer"
                  key={index}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="flex min-h-screen flex-col items-center justify-start p-8 sm:p-20">
          <div className="max-w-7xl w-full items-center justify-center">
            <div className="w-full flex flex-col gap-2">
              <h1
                className={` text-3xl sm:text-6xl mb-5 font-bold text-center`}
              >
                <span>Impact Summit</span>
                <br />
                <span className="text-green-500">Nigeria</span> 2023.
              </h1>
              <div className="w-full aspect-video object-cover h-60 sm:h-[40rem]">
                <Image
                  src="/mountsummit.jpeg"
                  alt="impact summit 2023"
                  width={1000}
                  height={1000}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <p
                className={` text-left text-xl sm:text-2xl sm:mt-5 sm:text-center`}
              >
                Highlighting the impactful activities and organizations in the
                region
              </p>
              <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-10 sm:items-center sm:justify-center">
                <span
                  className={` text-left text-xl sm:text-2xl flex items-center`}
                >
                  <div className="border border-black rounded-md bg-slate-100 mr-2">
                    <Image
                      src="/locationicon.svg"
                      alt="impact summit 2023 venue is Sylvia Hotel, Enugu."
                      width={10}
                      height={10}
                      className="rounded-2xl object-cover w-8 h-8"
                    />
                  </div>{" "}
                  <p>Sylvia Hotel, Enugu.</p>
                </span>
                <span
                  className={` text-left text-xl sm:text-2xl flex items-center`}
                >
                  <div className="border border-black rounded-md bg-slate-100 mr-2">
                    <Image
                      src="/calendaricon.svg"
                      alt="impact summit 2023 calendar date is 9th Dec, 2023."
                      width={10}
                      height={10}
                      className="rounded-2xl object-cover w-8 h-8"
                    />
                  </div>{" "}
                  <p>9th Dec, 2023.</p>
                </span>
              </div>
              <div className="flex w-full items-center justify-center gap-2 mt-2">
                <Link
                  href={"https://app.1w3.io/Links/ISN2023"}
                  target={"_blank"}
                  className="w-full sm:w-1/3 bg-black rounded-full sm:rounded-xl text-white h-12 font-bold text-xl text-center flex items-center justify-center"
                >
                  Get tickets
                </Link>
                <Link
                  href={
                    "mailto:greenpillnigeria@gmail.com?subject=Impact%20Summit%20Question&body=Hello%20"
                  }
                  className="w-full sm:w-1/3 bg-black rounded-full sm:rounded-xl text-white h-12 font-bold text-xl text-center flex items-center justify-center"
                >
                  Email us
                </Link>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div
              id="hackathon"
              className="w-full flex flex-col items-center justify-center gap-2"
            >
              <h1 className={` text-3xl sm:text-4xl font-bold text-center`}>
                Impact Hack
              </h1>

              <Image
                src="/splash3.jpg"
                alt=""
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
              <p
                className={` text-left sm:text-center text-xl mt-5 sm:text-2xl`}
              >
                Are you ready to make a lasting impact in your community
                leveraging Web3? We invite you to join the <b>Impact Hack</b>{" "}
                hackathon, the ultimate hackathon event that will challenge your
                skills and creativity.
              </p>
              <h1 className={` font-bold text-left`}>
                1st Nov, 2023 - 1st Dec, 2023
              </h1>
            </div>
            <br />
            <hr />
            <br />
            <div className="w-full flex items-center justify-center">
              <Link
                href={"https://forms.gle/qiAAYRENsZ2Nibk8A"}
                target={"_blank"}
                className="w-full sm:w-1/3 bg-black rounded-full sm:rounded-xl text-white h-12 font-bold text-xl text-center flex items-center justify-center"
              >
                Register Now
              </Link>
            </div>
            <br />
            <hr />
            <br />
            <div className="w-full flex flex-col gap-2">
              <h1 className={` text-xl sm:text-2xl font-bold`}>
                Impact Hack Focus
              </h1>
              <p className={` text-xl sm:text-2xl text-left`}>
                Develop a cutting-edge crypto payment application on the Public
                Goods Network <b>(PGN)</b> that leverages the power of{" "}
                <b>EIP-4337</b> to offer users a seamless and intuitive
                experience for making USD payments on PGN.
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div className="w-full flex flex-col gap-2">
              <h1 className={` text-xl sm:text-2xl font-bold`}>
                Impact Hack Details
              </h1>
              <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                <li>Start Date: 1st November, 2023</li>
                <li>Duration: One Month</li>
                <li>Submission deadline: 1st December, 2023</li>
                <li>Judging and Results: 9th December, 2023</li>
              </ul>
            </div>
            <br />
            <hr />
            <br />
            <div id="speakers" className="w-full flex flex-col gap-2">
              <h1 className={` text-3xl sm:text-4xl font-bold text-center`}>
                Impact Summit
                <br />
                speakers
              </h1>
              <ul className={` list-disc text-xl sm:text-2xl`}>
                <li className="flex h-14 w-full mb-3 items-center justify-start gap-2">
                  <div className="w-1/5 sm:w-1/12 h-full">
                    <div className="w-14 h-14 rounded-full bg-slate-200">
                      <Image
                        src="/jimicohen.jpeg"
                        alt="Jimi Cohen, speaker at impact summit"
                        width={1000}
                        height={1000}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <span className="w-5/6 text-lg">
                    Jimi Cohen (Founder of Treegens DAO)
                  </span>
                </li>
                <li className="flex h-14 w-full mb-3 items-center justify-start gap-2">
                  <div className="w-1/5 sm:w-1/12 h-full">
                    <div className="w-14 h-14 rounded-full bg-slate-200">
                      <Image
                        src="/annaelechukwu.jpeg"
                        alt="Annaelechukwu, speaker at impact summit"
                        width={1000}
                        height={1000}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <span className="w-5/6 text-lg">
                    Annaelechukwu (Cofounder of Blockchain UNN)
                  </span>
                </li>
                <li className="flex h-14 w-full mb-3 items-center justify-start gap-2">
                  <div className="w-1/5 sm:w-1/12 h-full">
                    <div className="w-14 h-14 rounded-full bg-slate-200">
                      <Image
                        src="/unclesam.jpeg"
                        alt="Uncle Sam, speaker at impact summit"
                        width={1000}
                        height={1000}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <span className="w-5/6 text-lg">
                    Uncle Sam (Web3 influencer)
                  </span>
                </li>
                <li className="flex h-14 w-full mb-3 items-center justify-start gap-2">
                  <div className="w-1/5 sm:w-1/12 h-full">
                    <div className="w-14 h-14 rounded-full bg-slate-200">
                      <Image
                        src="/christwinifeanyi.jpeg"
                        alt="Christwin Christwin, speaker at impact summit"
                        width={1000}
                        height={1000}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <span className="w-5/6 text-lg">
                    Christwin Christwin (Founder of SwitchElectric)
                  </span>
                </li>
              </ul>
            </div>
            <br />
            <hr />
            <br />
            <div id="contact" className="w-full h-40 bg-black left-0 absolute">
              <div className="w-full h-full text-white flex flex-col items-center justify-center">
                <div className="flex gap-5 mb-4">
                  <Link
                    href={"https://t.me/+tzbcHRsTb802Yjc0"}
                    className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    <Image
                      src="/telegram.png"
                      alt="telegram"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link
                    href={"https://chat.whatsapp.com/Bz25P7lc7la1WVdzq090Tj"}
                    className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    <Image
                      src="/whatsapp.png"
                      alt="whatsapp"
                      width={25}
                      height={25}
                    />
                  </Link>
                </div>
                <h1>Impact Summit</h1>
                <h1>2023</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
