import React, { useState } from "react";

const Contactright = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // Send Button

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required");
    } else if (email === "") {
      setErrMsg("Email is required");
    } else if (!emailValidation(email)) {
      setErrMsg("Enter a valid email");
    } else if (subject === "") {
      setErrMsg("Subject is required");
    } else if (message === "") {
      setErrMsg("Message is required");
    } else {
      setSuccessMsg(`${username} your message has been sent!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col justify-center gap-8 p-8 rounded-lg shadow-shadowOne">
      <form className="w-full flex flex-col gap-6 py- 5">
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray400 uppercase tracking-wide">
              Your name
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className={`${
                errMsg === "Username is required" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray400 uppercase tracking-wide">
              Phone number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`${
                errMsg === "Phone number is required" && "outline-designColor"
              } contactInput`}
              type="number"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errMsg === "Email is required" && "outline-designColor"
            } ${
              errMsg === "Enter a valid email" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`${
              errMsg === "Subject is required" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray400 uppercase tracking-wide">
            Your Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === "Message is required" && "outline-designColor"
            } contactTextArea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray400 trscking-wider uppercase hover:text-lightColor duration-300 hover:border-[1px] hover:border-designColor border-trans"
          >
            Send message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}

        {successMsg && (
          <p className="py-3 bg-gradient-to-r from[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contactright;
