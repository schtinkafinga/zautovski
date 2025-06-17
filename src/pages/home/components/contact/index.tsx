import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SendHorizontal } from "lucide-react";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="contact-section flex flex-col items-center   w-[80%] h-[100vh] justify-evenly   sm:items-center relative pb-20 mt-30 ">
      <div className=" mb-20 sm:mb-0">
        <h1 className="section-title autoDisplay text-[40px]  ">
          Contact Me 🤙
        </h1>
      </div>

      <div className=" flex flex-col sm:flex-row w-full justify-around items-center">
        <div className="social-box autoBlur flex flex-col gap-[25px] ">
          <a
            href="#"
            className="text-gray-300 text-[20px] whitespace-nowrap flex items-center"
          >
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-[#7668ff] text-[30px] mr-[10px]"
            />
            +95 597 99 03 39
          </a>
          <a
            href="#"
            className="text-gray-300 text-[20px] whitespace-nowrap  flex items-center"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-[#7668ff] text-[30px] mr-[10px]"
            />
            giozautaa@gmail.com
          </a>
          <a
            href="#"
            className="text-gray-300 text-[20px] whitespace-nowrap flex items-center"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#7668ff] text-[30px] mr-[10px]"
            />
            giorgi-zautashvili-9779a7215
          </a>

          <div className="social-icons autoBlur flex gap-5 mt-[40px] ">
            <a href="#">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="text-white text-[30px]"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="text-white text-[30px]"
              />
            </a>
          </div>
        </div>

        <div className="contact-box autoBlur ">
          <p className="max-w-[400px] mt-[30px] mb-[5px]">
            If you're looking to build a new website, bring a unique project to
            life, or improve your existing platform — I'm here to help.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[400px]"
          >
            <p className="mt-[30px] mb-[5px]">Full Name</p>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Your Full Name"
                  className="py-[7.5px] px-[30px] text-black bg-gray-300 w-full h-[35px] border-none outline-none rounded-tr-[10px] rounded-br-[10px]"
                />
              )}
            />

            <p className="mt-[30px] mb-[5px]">Email Address</p>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Your Email"
                  className="py-[7.5px] px-[30px] text-black bg-gray-300 w-full h-[35px] border-none outline-none rounded-tr-[10px] rounded-br-[10px]"
                />
              )}
            />

            <p className="mt-[30px] mb-[5px]">Message</p>
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Share your thoughts"
                  className="py-[7.5px] px-[30px] text-black bg-gray-300 w-full h-[100px] border-none outline-none rounded-[10px] resize-none"
                />
              )}
            />

            <button
              type="submit"
              className="flex justify-center items-center gap-2 mt-[30px] text-white py-[10px] px-[15px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] shadow-[0_0_5px_#727fde86] transition duration-300 hover:shadow-[0_0_15px_#727fde86] hover:opacity-70"
            >
              <SendHorizontal className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
