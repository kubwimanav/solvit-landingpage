import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiLinkedin, CiLocationOn, CiTwitter } from "react-icons/ci";
import bg from '../assets/Landing.jpg'
import forest from '../assets/forest.jpg';
import coffee from "../assets/coffee.jpg";
import table from "../assets/table.jpg";
import work from "../assets/work.jpg";
import Card from './Card';
import IconCard from './IconCard';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLayoutGrid } from "react-icons/lu";
import Input from './Input';
import IconText from './IconText';
import ContactForm from './ContactForm';
import NavModal from './NavModal';


function Landing() {

  const [modal,setModal]=useState(false)

  const cards = [
    {
      image: table,
      title: "Renting Office Space",
      description: "A private office for your business needs.",
    },
    {
      image: coffee,
      title: "Coffee Shop",
      description: "Share a workspace with like-minded professionals.",
    },
    {
      image: forest,
      title: "Private Event Space",
      description: "Get a professional business address and phone number.",
    },
  ];

  const iconCards = [
    {
      title: "Creative Space",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit ",
    },
    {
      title: "High Speed Wifi",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit ",
    },
    {
      title: "Parking Area",
      description: "Lorem ipsum dolor sit amet, cnconsectetur adipiscing elit",
    },
  ];

  const leftcard = [
    {
      title: "24/7 Access ",
      description: "Lorem ipsum dolor sit amet, cnconsectetur adipiscing elit",
    },
    {
      title: "Great Location",
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit ",
    },
    {
      title: "outdoor space ",
      description: "Lorem ipsum dolor sit amet, cnconsectetur adipiscing elit",
    },
  ];

  const icontext = [
    {
      icon: <CiLocationOn />,
      title: "Address",
      text: "Location KG 9 Ave, Kigali" ,
    },
    {
      icon: <MdEmail />,
      title: "Email",
      text: "Location KG 9 Ave, Kigali",
    },
    {
      icon: <FaPhoneVolume />,
      title: "Phone",
      text: "+250788183828",
    },
  ];

  return (
    <div>
      <nav className=" flex items-center justify-around bg-white shadow-2xl p-5">
        <div className="flex gap-2 items-center">
          <LuLayoutGrid className="h-6 w-6 text-teal-700 sm:h-8 sm:w-8 lg:h-8 lg:w-8" />
          <span className=" flex flex-row font-bold text-xl">
            Business <p className="text-teal-500">Cafe</p>
          </span>
        </div>
        <div>
          <GiHamburgerMenu className=" text-2xl md:hidden" onClick={NavModal} />
        </div>
        <ul className=" hidden  sm:hidden  md:flex font-bold justify-between items-center gap-20 text-black">
          <li>
            <a href="home" className=' hover:text-teal-600'>Home </a>
          </li>
          <li>
            <a href="" className=' hover:text-teal-600'>Space </a>
          </li>
          <li>
            <a href="" className=' hover:text-teal-600'>About </a>
          </li>
          <li>
            <a href="contact" className=' hover:text-teal-600'>Contact </a>
          </li>
        </ul>
      </nav>

      <main>
        <section
          id="home"
          className="flex flex-col gap-1 justify-center items-center py-25 sm:py-0 sm:h-screen  bg-cover bg-center text-white "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <p className=" font-medium text-2sm sm:text-2xl ">
            The Best Work Space in kigali
          </p>
          <span className=" flex flex-row text-xl sm:text-4xl font-bold">
            Professional<p className="text-teal-700">Creative</p>
          </span>
          <span className="flex flex-row font-bold text-xl sm:text-4xl">
            Flexible, Scalablity <p className="text-teal-700">Workspace</p>
          </span>
          <p className="sm:w-1/2 text-center">
            With our free online service, you can send local, national, and
            international text messages (SMS) without any cost. Communicate
            seamlessly with friends and family across the globe and enjoy
          </p>
          <button className="mt-8 p-1 px-7 bg-teal-700">Explore</button>
        </section>

        <section className="flex flex-col justify-center items-center gap-4 p-8">
          <h2 className="text-2xl font-bold">
            We Offer Creative Working environments
          </h2>
          <p className="md:w-1/2 text-center">
            We offer a range of services to meet your business needs, from
            flexible workspace solutions to professional networking
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-col md:flex-row gap-4">
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                className="flex justify-center items-center"
              ></Card>
            ))}
          </div>

          <section className=" flex flex-col gap-9 items-center justify-center">
            <div className=" flex  flex-row gap-2  pb-10">
              <div className=" p-[2px] rounded-full border-1 border-teal-700">
                <div className=" h-4 w-4 bg-teal-700 rounded-full"></div>
              </div>
              <div className=" h-5 w-5 border-1 border-teal-700 rounded-full"></div>
            </div>

            <div className=" flex flex-col sm:flex-col md:flex-row md:gap-2 gap-9 lg:gap-20">
              <div className=" sm:px-5 md:px-5 lg:px-20 ">
                <span className=" text-teal-500 font-bold">About Us</span>
                <h1 className=" font-bold text-xl  sm:text-2xl md:w-xs lg:text-2xl  sm:w-sm">
                  We offer creative working environments that suit your business
                </h1>
              </div>

              <div className=" flex flex-col gap-3 px-5 sm:px-5 md:px-5 lg:px-20 border-l-2 border-teal-500">
                <p className=" ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  torquent, conubia leo rutrum praesent dui turpis lobortis,
                  vulputate pellentesque tristique primis cum tincidunt placerat
                  maecenas, velit metus fermentum eget
                </p>
                <span className=" font-semibold text-teal-500">
                  More About Us{" "}
                </span>
              </div>
            </div>
            <p className=" text-teal-500 pt-10 ">Your Benefits</p>
          </section>

          <div className="flex items-center justify-center p-5">
            <div className=" sm:max-w-7xl w-full bg-white/95 backdrop-blur-lg rounded-3xl p-3 sm:p-6 md:p-16 ">
              <div className="text-center mb-16">
                <h5 className="text-xl sm:text-2xl md:text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Why Choose Us
                </h5>
                <p className="text-xs sm:text-sm text-black mx-auto ">
                  Unleash your productivity with our premium workspace
                  solutions. Elevate your work game and join the winning team
                  today.
                </p>
              </div>

              <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col gap-5  md:flex md:flex-row md:gap-4  lg:flex lg:flex-col lg:gap-5 ">
                  {iconCards.map((iconCard, index) => (
                    <IconCard
                      key={index}
                      title={iconCard.title}
                      description={iconCard.description}
                    />
                  ))}
                </div>

                <div>
                  <img
                    src={work}
                    alt=""
                    className=" w-4xl sm:h-[95vh] rounded-md shadow-lg"
                  />
                </div>

                <div className=" flex flex-col gap-5  md:flex md:flex-row md:gap-4  lg:flex lg:flex-col lg:gap-5 ">
                  {leftcard.map((iconCard, index) => (
                    <IconCard
                      key={index}
                      title={iconCard.title}
                      description={iconCard.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className=" flex flex-col gap-8 items-center justify-center text-white  py-9"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-2xl  font-bold text-center p-3 flex flex-row">
              <span className="text-teal-500">Our</span> Mission
            </h2>
            <p className=" md:3xl lg:w-4xl text-xs text-center font-bold">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis
              blandit odio felis aliquet montes turpis consequat, est sociosqu
              vitae id nec rutrum. Ornare dictumst et eget fames cursus vel
              penatibus quis posuere, ultrices fermentum libero pretium
              convallis pharetra
            </p>

            <div className="flex gap-4">
              <div className=" border-b-4  text-teal-500 w-15 rounded-2xl "></div>
              <div className=" border-b-4  text-white w-15 rounded-2xl "></div>
            </div>
          </div>
        </section>

        <section id='contact' className=" flex flex-col px-9  gap-3 sm:flex-col sm:px-9 md:flex-row md:px-9  justify-around py-20  ">
          <div className=" flex flex-col gap-6">
            <div className=" flex flex-col gap-3">
              <p className=" font-bold text-teal-500">Contact Us</p>
              <h3 className=" font-bold text-3xl text-black">Say Hello</h3>
            </div>
            <div className=" flex flex-col gap-12">
              {icontext.map((icon) => (
                <IconText
                  icon={icon.icon}
                  title={icon.title}
                  text={icon.text}
                />
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-8">
            <div className=" flex flex-col gap-2">
              <p className=" font-bold text-teal-500">Have Question ?</p>
              <h3 className=" font-bold text-3xl text-black">Send a Message</h3>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 items-center justify-center pb-14 pt-14">
        <div className=" flex  flex-col gap-9 sm:flex-col md:flex-row sm:gap-9 md:gap-20 lg:gap-50 bg-white p-6 border-b-[1.5px] border-t-[1.5px] border-teal-500 ">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <LuLayoutGrid className="h-8 w-8 text-teal-500" />
              <span className=" flex flex-row font-bold text-xl">
                Business <p className="text-teal-500">Cafe</p>
              </span>
            </div>
            <p className=" w-">
              Enjoy free text messaging and MMS <br />
              on your computer or smart phone.
              <br />
              Send and receive. Always stay in touch!
            </p>
            <div className=" flex flex-row gap-2">
              <CiFacebook className=" h-10 w-10 rounded-full border-2 border-teal-700 p-2" />
              <CiTwitter className=" h-10 w-10 rounded-full border-2 border-teal-700 p-2" />
              <CiLinkedin className=" h-10 w-10 rounded-full border-2 border-teal-700 p-2" />
              <CiInstagram className=" h-10 w-10 rounded-full border-2 border-teal-700 p-2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-xl font-bold border-b-2 text-black pr-9">
              Quick Links
            </p>
            <ul className="">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">Space</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-xl font-bold border-b-2 text-black pr-9">
              Contact Info
            </p>
            <div className=" flex flex-row">
              <p className="font-medium">Location:</p>
              <span className="flex flex-row">
                Kigali, <p>Rwanda</p>
              </span>
            </div>
            <div className="flex flex-row">
              <p className=" font-medium">Email: </p>{" "}
              <p>businesscafe@info.com</p>{" "}
            </div>
            <div className="flex flex-row">
              <p className=" font-medium">Phone: </p> <p>+250786666666</p>{" "}
            </div>
            <div>
              <a href="" className="text-teal-700 underline">
                View Location on Google Map
              </a>
            </div>
          </div>
        </div>
        <p className=" w-1/2 text-center text-xm">
          Copyright © 2023 Business Coffee All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Landing
