"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FloatButton, Button, message, Steps, Popover, theme } from "antd";
import "./globals.css";

export default function Home() {
  const [showNav, setShowNav] = React.useState(false);
  const menuItems = [
    { name: "Hackathon", id: "hackathon" },
    { name: "Schedule", id: "schedule" },
    { name: "Speakers", id: "speakers" },
    { name: "Tickets", id: "tickets" },
    { name: "Impact", id: "impact" },
    { name: "Contact Us", id: "contact" },
  ];

  const speakers = [
    {
      name: "Jimi Cohen",
      title: "Founder - Treegens DAO",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/jimicohen.jpeg",
    },
    {
      name: "Annaelechukwu",
      title: "Lead - Blockchain UNN",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/Annalechukwupic.jpg",
    },
    {
      name: "Luciano DeAngelo",
      title: "Founder - Fund PG",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/luciano.jpg",
    },
    {
      name: "Christwin",
      title: "Founder - SwitchElectric",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/christwinifeanyi.jpeg",
    },
    {
      name: "Amio Anthony",
      title: "Founder - Blockchain Club FCET UMUNZE",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/amio.jpeg",
    },
    {
      name: "Chidi Okeke",
      title: "Cofounder - HelperSocial",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/chidiokeke.jpeg",
    },
    {
      name: "Eric Anan",
      title: "Founder & CEO - Aya",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/ericanan.jpeg",
    },
    {
      name: "Izzy(decentralizedceo)",
      title: "GreenPill Nigeria Chapter Steward. Founder - TAS",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/izzy.jpeg",
    },
    {
      name: "Kester Ejikeme",
      title: "Founder - Bitcoin Pidgin",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "btcpidginfounder.jpeg",
    },
    {
      name: "Crossvic",
      title: "Co-founder - Pidgin Parlour",
      socials: [
        { platform: "twitter", url: "link" },
        { platform: "facebook", url: "link" },
      ],
      src: "/crossvic.jpeg",
    },
  ];

  const schedule = [
    {
      title: "Registration Open",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Registration Open</h1>
          <p>08:00 AM</p>
          <p>Registration process</p>
        </div>
      ),
      time: "08:00 AM",
    },
    {
      title: "Opening Statements",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Opening Statements</h1>
          <p>09:00 AM - 09:15 AM</p>
          <p>speakers</p>
        </div>
      ),
      time: "09:00 AM - 09:15 AM",
    },
    {
      title: "What are Public Goods and how does it help us?",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            What are Public Goods and how does it help us?
          </h1>
          <p>09:15 AM - 09:30 AM</p>
          <p>speakers</p>
        </div>
      ),
      time: "09:15 AM - 09:30 AM",
    },
    {
      title: "Using your niche as a public good",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Using your niche as a public good
          </h1>
          <p>9:30 AM - 10:00 AM</p>
          <p>speakers</p>
        </div>
      ),
      time: "9:30 AM - 10:00 AM",
    },
    {
      title: "Morning Break",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Morning Break</h1>
          <p>10:00 AM - 10:15 AM</p>
          <p>free time</p>
        </div>
      ),
      time: "10:00 AM - 10:15 AM",
    },
    {
      title: "Environmental Sustainability through Regenerative Finance",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Environmental Sustainability through Regenerative Finance
          </h1>
          <p>10:15 AM - 11:00 AM</p>
          <p>speakers</p>
        </div>
      ),
      time: "10:15 AM - 11:00 AM",
    },
    {
      title: "Impactful Initiatives and why they matter",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Impactful Initiatives and why they matter
          </h1>
          <p>11:00 AM - 11:30 AM</p>
          <p>speakers</p>
        </div>
      ),
      time: "11:00 AM - 11:30 AM",
    },
    {
      title: "What is Quadratic Funding and how does it help?",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            What is Quadratic Funding and how does it help?
          </h1>
          <p>11:30 AM - 12:00 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "11:30 AM - 12:00 PM",
    },
    {
      title: "Lunch Break",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Lunch Break</h1>
          <p>12:00 PM - 12:45 PM</p>
          <p>food time</p>
        </div>
      ),
      time: "12:00 PM - 12:45 PM",
    },
    {
      title: "Proof of impact. How is it measured? ",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Proof of impact. How is it measured?{" "}
          </h1>
          <p>1:00 PM - 1:30 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "1:00 PM - 1:30 PM",
    },
    {
      title: "Importance of Web3 education as a Public Good",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Importance of Web3 education as a Public Good
          </h1>
          <p>2:00 PM - 2:15 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "2:00 PM - 2:15 PM",
    },
    {
      title: "How to unlock unstoppable motivation & the Future of ReFi",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            How to unlock unstoppable motivation & the Future of ReFi
          </h1>
          <p>2:15 PM - 2:45 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "2:15 PM - 2:45 PM",
    },
    {
      title: "Afternoon break",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Afternoon break</h1>
          <p>3:00 PM - 3:15 PM</p>
          <p>food time</p>
        </div>
      ),
      time: "3:00 PM - 3:15 PM",
    },
    {
      title: "Network Goods from a Devs view",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Network Goods from a Dev&apos;s view
          </h1>
          <p>3:15 PM - 3:45 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "3:15 PM - 3:45 PM",
    },
    {
      title: "Hackathon showcase and results",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Hackathon showcase and results</h1>
          <p>4:00 PM - 4:15 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "4:00 PM - 4:15 PM",
    },
    {
      title:
        "Future of Public Goods with Quadratic Funding(The GitCoin Initiative)",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">
            Future of Public Goods with Quadratic Funding(The GitCoin
            Initiative)
          </h1>
          <p>4:15 PM - 4:45 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "4:15 PM - 4:45 PM",
    },
    {
      title: "Closing Remarks and Thank You",
      content: (
        <div className="flex flex-col h-[260px] w-full items-center justify-center">
          <h1 className="text-xl font-bold">Closing Remarks and Thank You</h1>
          <p>5:00 PM</p>
          <p>speakers</p>
        </div>
      ),
      time: "5:00 PM",
    },
  ];

  const participatingPartners = [
    {
      logo: "/tas.png",
      content: (
        <div>
          <p>Tech and Sun</p>
        </div>
      ),
      alt: "TAS",
    },
    {
      logo: "/bw.png",
      content: (
        <div>
          <p>Public Good Network</p>
        </div>
      ),
      alt: "Public Good",
    },
    {
      logo: "/greenpill.JPG",
      content: (
        <div>
          <p>GreenPill Nigeria</p>
        </div>
      ),
      alt: "GreenPill",
    },
    {
      logo: "/decentralized.png",
      content: (
        <div>
          <p>Decentralized Exchange</p>
        </div>
      ),
      alt: "Decentralized Exchange",
    },
    {
      logo: "/PGA Logo.png",
      content: (
        <div>
          <p>Public Good Africa</p>
        </div>
      ),
      alt: "Public Good Africa",
    },
    {
      logo: "/BCFCET.png",
      content: (
        <div>
          <p>Bitcoin Club FCET</p>
        </div>
      ),
      alt: "Bitcoin Club FCET",
    },
    {
      logo: "/switch.png",
      content: (
        <div>
          <p>Switch Electric</p>
        </div>
      ),
      alt: "Switch Electric",
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = React.useState(0);
  const [showImpact, setShowImpact] = React.useState(false);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // const items = schedule.map((item, index) => ({
  //   key: index,
  //   title: item.title,
  //   description: item.time,
  // }));

  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
    width: "100%",
  };

  function scrollToSection(e, id) {
    if (id === "impact") {
      e.preventDefault();
      setShowNav(false);
      setShowImpact(true);
    } else {
      setShowNav(false);
      setShowImpact(false);
      e.preventDefault();
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main>
      <div className="sm:mt-28 mt-14">
        <nav className="fixed hidden sm:flex flex-row items-center justify-between top-0 bg-white w-full drop-shadow-md">
          <div className="w-36 pl-14 md:pl-8">
            <Image
              src="/mainlogo.png"
              alt="impact summit logo."
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
          <ul
            className={` flex items-center justify-center h-28 md:h-16 lg:h-28 md:gap-2 lg:gap-5`}
          >
            {menuItems.map((item, index) => (
              <li
                className="text-base md:text-base lg:text-xl capitalize border-2 border-b-black border-white hover:border-black py-1 md:px-2 lg:px-4 hover:border-2 cursor-pointer"
                key={index}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <span></span>
        </nav>
        <nav className="fixed sm:hidden flex flex-row items-center top-0 bg-white w-full h-16 drop-shadow-md">
          <div className="w-1/4 pl-4">
            <Image
              src="/mainlogo.png"
              alt="impact summit logo."
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
          <h1
            onClick={() => setShowNav(!showNav)}
            className="absolute right-5 top-5 font-bold text-3xl px-2 scale-x-150"
          >
            ≡
          </h1>
          {showNav && (
            <ul className="p-8 absolute w-full top-16 bg-white flex flex-col items-start justify-start gap-5">
              {menuItems.map((item, index) => (
                <li
                  className="capitalize w-full border-b cursor-pointer"
                  key={index}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </nav>
        {showImpact === true ? (
          <div
            id="impact"
            className="flex min-h-screen flex-col items-center justify-start p-8 sm:p-20"
          >
            <div
              id="hackathon"
              className="w-full flex flex-col items-center justify-center gap-2"
            >
              <h1 className={` text-3xl sm:text-4xl font-bold text-center`}>
                Impact Africa
              </h1>

              <Image
                src="/impaf.png"
                alt="impactafrica"
                width={1000}
                height={1000}
                className="rounded-2xl bg-black w-full lg:w-1/2 aspect-video object-contain"
              />
              <p
                className={`w-full lg:w-2/3 text-left sm:text-center text-xl mt-5 sm:text-2xl`}
              >
                The following Protocols, DAOs, Projects and Organizations have
                been bringing value, showing impact and assisting the citizens
                in the African region. Through their Public Good hard work,
                mission and dedication, the continent has been onboarded to the
                global Web3 space. As a result, the continent continues to adopt
                Web3 for a better way of life.
              </p>
            </div>
            <br />
            <hr className="w-full" />
            <br />
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <h1 className={` text-xl sm:text-2xl font-bold`}>Protocols:</h1>
              <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                <li>Ethereum</li>
                <li>Public Good Network</li>
                <li>Optimism</li>
                <li>Allo</li>
                <li>Celo</li>
              </ul>
            </div>
            <br />
            <hr className="w-full" />
            <br />
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <h1 className={` text-xl sm:text-2xl font-bold`}>DAOs:</h1>
              <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                <li>GitCoin</li>
                <li>GreenPill</li>
                <li>SolarPunk DAO</li>
                <li>Public Good Africa</li>
              </ul>
            </div>
            <br />
            <hr className="w-full" />
            <br />
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <h1 className={` text-xl sm:text-2xl font-bold`}>
                Projects/Organizations:
              </h1>
              <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                <li>Glo Dollar</li>
                <li>Good Dollar</li>
                <li>Hypercerts</li>
                <li>Switch Electric</li>
                <li>TAS</li>
                <li>Decentralized Exchange LTD</li>
                <li>Kokonut Network</li>
                <li>M3tering Protocol</li>
                <li>BlockchainUNN</li>
                <li>Blockchain Club FCET</li>
                <li>{`B<>rder/ess2.0`}</li>
                <li>HelperSocial</li>
                <li>Aya</li>
              </ul>
            </div>
            <br />
            <hr className="w-full" />
            <br />
            <div>
              <div
                id="contact"
                className="w-full h-40 bg-black left-0 absolute"
              >
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
                    <Link
                      href={"https://twitter.com/Impactfulsummit"}
                      className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                      <Image
                        src="/twitter.png"
                        alt="twitter"
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
        ) : (
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
                  Highlighting impactful activities, projects and organizations
                  in the African region.
                </p>
                <div
                  id="tickets"
                  className="w-full flex flex-col sm:flex-row gap-3 sm:gap-10 sm:items-center sm:justify-center"
                >
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
                  alt="impact hackathon web3"
                  width={1000}
                  height={1000}
                  className="rounded-2xl"
                />
                <p
                  className={` text-left sm:text-center text-xl mt-5 sm:text-2xl`}
                >
                  Are you ready to make a lasting impact in your community
                  leveraging Web3? We invite you to join the{" "}
                  <b>Impact Hackathon</b>, the ultimate hackathon event that
                  will challenge your skills and creativity.
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
                  Impact Hackathon Focus
                </h1>
                <p className={` text-xl sm:text-2xl text-left`}>
                  The goal of this hackathon is to develop a frontend UI or PWA
                  for EIP-4337 on the PGN network that would allow users to make
                  payments with fiat and convert to a stable coin on PGN easily
                  and conveniently. Your main focus for this hackathon is the
                  frontend UI or PWA. The application should be user-friendly
                  and should not require users to have any knowledge of
                  blockchain technology. The backend of your project should be
                  able to interact with the given PGN contract address.
                  <br /> For more information on PGN please visit the{" "}
                  <span>
                    <Link
                      href={
                        "https://docs.publicgoods.network/building-with-pgn"
                      }
                      target={"_blank"}
                      className="underline text-amber-500 font-bold"
                    >
                      public goods documentation
                    </Link>
                    .
                  </span>
                </p>
                <FloatButton.BackTop />
              </div>
              <br />
              <hr />
              <br />
              <div className="w-full flex flex-col gap-2">
                <h1 className={` text-xl sm:text-2xl font-bold`}>
                  Impact Hackathon Schedule
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
              <div className="w-full flex flex-col gap-2">
                <h1 className={` text-xl sm:text-2xl font-bold`}>
                  Impact Hackathon Requirements
                </h1>
                <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                  <li>
                    It must be able to connect to the PGN network and interact
                    with EIP-4337 payment facilitators(Paymaster).
                  </li>
                  <li>
                    It must allow users to make payments in fiat to other users
                    on the PGN network.
                  </li>
                  <li>It must not require users to manage a private key</li>
                  <li>It must be user-friendly and easy to use.</li>
                  <li>It may not require users to buy gas tokens. (Bonus)</li>
                </ul>
              </div>
              <br />
              <hr />
              <br />
              <div className="w-full flex flex-col gap-2">
                <h1 className={` text-xl sm:text-2xl font-bold`}>
                  Impact Hackathon Evaluation Criteria
                </h1>
                <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                  <li>
                    <b>Functionality:</b> Does the application meet all of the
                    requirements listed above?
                  </li>
                  <li>
                    <b>Usability:</b> Is the application user-friendly and easy
                    to use?
                  </li>
                  <li>
                    <b>Creativity:</b> Does the application offer any innovative
                    features or functionality?
                  </li>
                </ul>
              </div>
              <br />
              <hr />
              <br />
              <div className="w-full flex flex-col gap-2">
                <h1 className={` text-xl sm:text-2xl font-bold`}>
                  Impact Hackathon Prizes
                </h1>
                <ul className={` list-disc px-4 text-xl sm:text-2xl`}>
                  <li>
                    <b>1st place:</b> $250
                  </li>
                  <li>
                    <b>2nd place:</b> $150
                  </li>
                  <li>
                    <b>3rd place:</b> $100
                  </li>
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
                <div
                  className={`w-full h-[400px] overflow-y-auto text-xl sm:text-2xl flex items-center justify-center flex-row flex-wrap gap-4 sm:gap-8`}
                >
                  {speakers.map((speaker, index) => {
                    return (
                      <div
                        key={index}
                        className="flex h-32 mb-1 lg:mb-3 items-center justify-start gap-2 bg-[#f9f9f9] rounded-xl border w-full md:w-[47.5%] lg:w-[31%] p-4"
                      >
                        <div className="w-14 h-14 rounded-full bg-slate-200">
                          <Image
                            src={speaker.src}
                            alt={`${speaker.name}, speaker at impact summit 2023`}
                            width={1000}
                            height={1000}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                        <span className={`text-lg w-3/4`}>
                          {`${speaker.name} (${speaker.title})`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div id="schedule" className="w-full flex flex-col gap-2">
                <h1 className={` text-3xl sm:text-4xl font-bold text-center`}>
                  Impact Summit
                  <br />
                  schedule
                </h1>
                <div
                  className={`w-full text-xl sm:text-2xl flex items-center justify-center flex-col`}
                >
                  {/* <Steps current={current} items={items} /> */}
                  <div style={contentStyle}>{schedule[current].content}</div>
                  <div className="w-full flex items-center justify-center my-5 gap-5">
                    {current > 0 && (
                      <button
                        className="w-full sm:w-1/3 bg-black rounded-full sm:rounded-xl text-white h-12 font-bold text-xl text-center flex items-center justify-center"
                        onClick={() => prev()}
                      >
                        Previous
                      </button>
                    )}
                    {current < schedule.length - 1 && (
                      <button
                        className="w-full sm:w-1/3 bg-black rounded-full sm:rounded-xl text-white h-12 font-bold text-xl text-center flex items-center justify-center"
                        type="default"
                        onClick={() => next()}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="w-full flex flex-col gap-2">
                <h1 className={` text-3xl sm:text-4xl font-bold text-center`}>
                  Participating
                  <br />
                  Partners
                </h1>
                <div
                  className={`w-full text-xl sm:text-2xl flex items-center justify-center flex-col`}
                >
                  <div className="w-full overflow-auto flex items-center justify-start sm:justify-center gap-3 pb-4">
                    {participatingPartners.map((item, index) => {
                      return (
                        <Popover
                          key={index}
                          content={item.content}
                          title="Participating Partner"
                          className="w-10 h-10 sm:w-14 sm:h-14"
                        >
                          <Image
                            src={item.logo}
                            alt={`Impact summit 2023 participating partner: ${item.alt}`}
                            width={100}
                            height={100}
                            className="bg-slate-200 rounded-full w-full h-full object-contain cursor-pointer"
                          />
                        </Popover>
                      );
                    })}
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div
                id="contact"
                className="w-full h-40 bg-black left-0 absolute"
              >
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
                    <Link
                      href={"https://twitter.com/Impactfulsummit"}
                      className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                      <Image
                        src="/twitter.png"
                        alt="twitter"
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
        )}
      </div>
    </main>
  );
}
