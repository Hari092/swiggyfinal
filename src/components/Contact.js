import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="sm:mx-20">
      <h1 className="text-2xl text-orange-500 font-bold bg-gray-300 px-2 inline-block">
        Get in Touch!
      </h1>
      <p className="text-lg  font-medium text-neutral-500 py-1">
        Hey there! If you have any questions, suggestions, or just want to say
        hi, I'd love to hear from you! Here's how you can reach out:
      </p>
      <h2 className="font-medium text-lg text-neutral-500">
        Feel free to shoot me an email at{" "}
        <span className="text-2xl text-orange-500 font-bold bg-gray-300 px-2 inline-block">
          harishpoo25@gmail.com
        </span>
      </h2>
      <p className="text-lg  font-medium text-neutral-500 py-1">
        Got something on your mind? Drop me a message using the form below. I
        promise to get back to you as soon as I can!
      </p>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/hari.shades/">
          <IoLogoInstagram size={25} width={25} />
        </a>
        <a href="https://www.linkedin.com/in/hariharan-i-a229292ab/">
          <FaLinkedin size={25} width={25} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
