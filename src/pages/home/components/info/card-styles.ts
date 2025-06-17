import { cva } from "class-variance-authority";

// Card Container
export const cardVariants = cva(
  "card relative flex flex-col items-start pb-4 xl:pb-0 justify-start gap-4 w-auto h-[40vh] overflow-hidden border border-gray-700 bg-[#080020b7] rounded-[20px] transition duration-300 hover:shadow-[0_0_15px_rgba(211,211,211,0.5)]",
  {
    variants: {
      isThirdCard: {
        true: "row-span-2 col-span-2 sm:col-span-1 h-auto ",
      },
      isFourthCard: {
        true: "col-span-2 ",
      },
    },
  },
);

// Title Text (h1)
export const cardTitleVariants = cva(
  "  text-gray-200 text-[20px] break-words xl:text-[25px] z-1 w-full px-4 lg:px-5 ",
  {
    variants: {
      isThirdCard: {
        true: " ",
      },
      isFourthCard: {
        true: "",
      },
      default: {
        true: "",
      },
    },
  },
);

// Description Text (p)
export const cardDescriptionVariants = cva(
  " z-1 max-w-[400px] text-[10px] sm:text-[15px] px-4  text-gray-300 sm:leading-[20px] lg:px-5 break-words ",
  {
    variants: {
      isThirdCard: {
        true: " pt-5",
      },
      isFourthCard: {
        true: "max-w-[650px]",
      },
    },
  },
);
