import hacker from "./images/hacker.jpg";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [data, setdata] = useState({
    name: name,
    email: email,
    phone: phone,
    interest: interest,
    occupation: occupation,
    company: company,
    nameError: nameError,
    emailError: emailError,
    phoneError: phoneError,
  });

  useEffect(() => {
    setdata({
      name: name,
      email: email,
      phone: phone,
      interest: interest,
      occupation: occupation,
      company: company,
      nameError: nameError,
      emailError: emailError,
      phoneError: phoneError,
    });
    
  },);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPhoneError("");

    let isValid = true;

    if (name.length < 3) {
      setNameError("Name should be at least 6 characters long");
      isValid = false;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Phone number should contain 10 digits only");
      isValid = false;
    }

    if (isValid) {
      toast("Form submitted !");

      console.log("Form submitted successfully");

      setdata({
        name: name,
        email: email,
        phone: phone,
        interest: interest,
        occupation: occupation,
        company: company,
        nameError: nameError,
        emailError: emailError,
        phoneError: phoneError,
      });

      fetch("https://hackersmeetup-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
      
      setCompany("");
      setEmail("");
      setEmailError("");
      setInterest("");
      setName("");
      setNameError("");
      setOccupation("");
      setPhone("");
      setPhoneError("");
      setdata("");
    
    }
  };

  return (
    <div>
        <ToastContainer  />

      <section
        className={`bg-cover bg-no-repeat h-full sm:h-full flex flex-col  items-center gap-8  `}
        style={{ backgroundImage: `url(${hacker})` }}
      >
        <div className="inline-block m-0 text-transparent bg-[url('https://s3-alpha-sig.figma.com/img/94e1/68cb/3a0c7f4b515c899c5550dc4331074056?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cGWCb4cdmGdNk5NfTsy~WmX7iTm-IhvP4PQeXzYOD5eXZiqAcx5Ub4ubIUbQDm2YhcD-rmZK-gLMv69TjhQoV~3bsHSFTGMPlWmnoXi4HAH5nU747R6mGI0~YultVPgiSfX1ag6~IE4hbMTq78V1OQwWIfBcd7K1HarZajFqPKICjti4KU4KQKQGHM34mntqqAc2fZy84-s8irlOZm3cwxHY4tR~ODFGYOSPwhAHfkQ5UVDOcFW6cOvIC8WnD2NrV09zm9cBSfk0lFLRtPIWm6e5uRiOpzXiNQenrgEeAGUFCXhWLJJcq9GaA~a9U3s3JntQ5nBYbtj~4pZNbtNAEA__')] bg-cover bg-no-repeat bg-center bg-clip-text">
          <h1
            className="text-center text-6xl sm:text-9xl font-['inter var'] "
            style={{ WebkitTextStroke: "1px white" }}
          >
            Registration Form
          </h1>
        </div>
      <div className=" w-full flex justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className=" w-full lg:w-2/3 bg-white p-4 rounded-lg"
        >
          <div className="font-semibold text-2xl">
            Book your slot for the upcoming event !!
            <div className="h-[.15rem] bg-red-500 w-24 my-1"></div>
          </div>
          <div className="w-full md:w-full mb-4 mt-8">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
          </div>
          <div className="w-full md:w-full  my-6">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your Email"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="w-full md:w-full  my-6">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              htmlFor="name"
            >
              Phone Number
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="tel"
              placeholder="Enter your Phone Number"
              id="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <p className="text-red-500">{phoneError}</p>}
          </div>
          <div className="w-full md:w-full  my-6">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="Occupation"
            >
              Occupation
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your Occupation"
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="w-full md:w-full  my-6">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="interest"
            >
              Area of interest in CyberSecurity
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          <div className="w-full md:w-full my-6">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="name"
            >
              College Name / Company Name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              id="c-name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="mt-12 mb-8 flex justify-center">
            <button
              type="submit"
              className="py-2 px-16 bg-red-500 rounded-lg text-white"
            >
              Register Now
            </button>
          </div>
          </form>
          
        </div>
      </section>
        
    </div>
  );
};

export default Registration;
