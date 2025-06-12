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
    <div className="contact-section w-[80%] h-[100vh] flex justify-center gap-[10%] items-center relative">
      <h1 className="section-title text-[40px] font-bold absolute top-[10%] left-[40%]">
        Contact Me 🤙
      </h1>
      <div className="social-box flex flex-col gap-[25px] ">
        <a
          href="#"
          className="text-gray-300 decoration-none text-[20px] whitespace-nowrap flex items-center"
        >
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="text-[#7668ff] text-[30px] mr-[10px]"
          />
          +95 597 99 03 39
        </a>
        <a
          href="#"
          className="text-gray-300 decoration-none text-[20px] whitespace-nowrap flex items-center"
        >
          <FontAwesomeIcon
            icon={faTelegram}
            className="text-[#7668ff] text-[30px] mr-[10px]"
          />
          giozautaa@gmail.com
        </a>
        <a
          href="#"
          className="text-gray-300 decoration-none text-[20px] whitespace-nowrap flex items-center"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#7668ff] text-[30px] mr-[10px]"
          />{" "}
          giorgi-zautashvili-9779a7215
        </a>

        <div className="social-icons flex gap-5">
          <a href="#">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-white mt-[40px] text-[30px]"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-white mt-[40px] text-[30px]"
            />
          </a>
        </div>
      </div>

      <div className="contact-box ">
        <p className="max-w-[400px] mt-[30px] mb-[5px] ">
          If you're looking to build a new website, bring a unique project to
          file or improve your existing platform. i'm here to help
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="max-w-[400px] mt-[30px] mb-[5px] ">
            Giorgi Zautashvili
          </p>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <input
                {...field}
                name="name"
                type="text"
                placeholder="Your Full Name"
                className="py-[7.5]  px-[30px] text-black bg-gray-300 w-[100%] h-[35px] border-none outline-none rounded-tr-[10px] rounded-br-[10px]"
              />
            )}
          />
          <p className="max-w-[400px] mt-[30px] mb-[5px] ">Email Address</p>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <input
                {...field}
                name="email"
                type="text"
                placeholder="Your Email"
                className="py-[7.5] px-[30px] text-black bg-gray-300 w-[100%]  h-[35px] border-none outline-none rounded-tr-[10px] rounded-br-[10px]"
              />
            )}
          />
          <p className="max-w-[400px] mt-[30px] mb-[5px] ">Message</p>
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <input
                {...field}
                name="message"
                type="text"
                placeholder="Shaire your thoughts"
                className="py-[7.5] px-[30px] text-black bg-gray-300 w-[100%]  h-[35px] border-none outline-none rounded-tr-[10px] rounded-br-[10px]"
              />
            )}
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-2 mt-[30px] text-white py-[10px] px-[15px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] shadow-[0_0_5px_#727fde86] cursor-pointer transition duration-300 hover:shadow-[0_0_15px_#727fde86]    "
          >
            {" "}
            <SendHorizontal className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
