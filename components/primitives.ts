import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-mono font-bold  ",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      teal: "from-white via-teal-400 to-teal-700",
      white:
        "dark:from-white via-slate-400 to-slate-800 from-sky-700 via-blue-400 to-cyan-400",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      greenPurple: "from-green-400 via-blue-500 to-purple-500",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-xl lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl lg:text-8xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "teal",
        "white",
        "green",
        "pink",
        "foreground",
        "greenPurple",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full font-mono",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
