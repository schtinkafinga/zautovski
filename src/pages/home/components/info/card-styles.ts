import { cva } from "class-variance-authority";
//როდესაც მე-3 კარგის სტილის შეცვლა გვსურს
export const cardVariants = cva(
  "card  flex items-start justify-center relative w-auto h-[40vh] overflow-hidden border border-gray-700 bg-[#080020b7] rounded-[20px] transition duration-300 hover:shadow-[0_0_15px_rgba(211,211,211,0.5)] ",
  {
    variants: {
      isThirdCard: {
        true: "row-span-2 h-[83vh]",
      },
      isFourthCard: {
        true: "col-span-2 ",
      },
    },
  },
);
//p
export const cardDescriptionVariants = cva(
  " absolute bottom-[13%] left-[5%] z-1 max-w-[300px] text-gray-300 text-[13px]  leading-[20px]  ",
  {
    variants: {
      isThirdCard: {
        true: "bottom-[14%]",
      },
      isFourthCard: {
        true: "max-w-[650px] ",
      },
    },
  },
);
//h1
export const cardTitleVariants = cva(
  "absolute m-0   left-[5%] text-[25px] z-1 text-gray-200  ",
  {
    variants: {
      isThirdCard: {
        true: "bottom-[21%]",
      },
      isFourthCard: {
        true: "bottom-[35%]",
      },
      default: {
        true: "bottom-[40%]",
      },
    },
  },
);
