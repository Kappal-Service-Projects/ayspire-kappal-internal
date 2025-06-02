import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-sans)"], // For headings - can be replaced with display font
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }], // 10px
        "xs": ["0.75rem", { lineHeight: "1rem" }], // 12px
        "sm": ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        "base": ["1rem", { lineHeight: "1.5rem" }], // 16px
        "lg": ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        "xl": ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "3.25rem" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "4rem" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "4.75rem" }], // 72px
        "8xl": ["6rem", { lineHeight: "6.25rem" }], // 96px
        "9xl": ["8rem", { lineHeight: "8.25rem" }], // 128px
      },
      letterSpacing: {
        "tighter": "-0.05em",
        "tight": "-0.025em", 
        "normal": "0em",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
        "float-gentle-delayed": "float-gentle 6s ease-in-out infinite 3s",
        "pulse-glow-hover": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        "xs": "2px",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "medium": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "large": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "glow": "0 0 20px rgba(6, 199, 199, 0.3)",
        "glow-lg": "0 0 40px rgba(6, 199, 199, 0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "kappal",
      layout: {
        dividerWeight: "1px",
        disabledOpacity: "0.3", // opacity-[0.3]
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
      themes: {
        dark: {
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            },
          },
          colors: {
            primary: {
              DEFAULT: "#06c7c7", // Standardized across themes
              foreground: "#ffffff",
              50: "#f0fdfd",
              100: "#ccfcfc",
              200: "#99f7f7",
              300: "#5debeb",
              400: "#26d6d6",
              500: "#06c7c7",
              600: "#059999",
              700: "#087a7a",
              800: "#0c6161",
              900: "#0f4f4f",
            },
            secondary: {
              DEFAULT: "#0066ee",
              foreground: "#ffffff",
            },
            accent: {
              DEFAULT: "#00e6ff",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#22c55e",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT: "#f59e0b",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#ef4444",
              foreground: "#ffffff",
            },
            focus: "#06c7c7",
          },
        },
        light: {
          layout: {
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            },
          },
          colors: {
            primary: {
              DEFAULT: "#06c7c7",
              foreground: "#ffffff",
              50: "#f0fdfd",
              100: "#ccfcfc",
              200: "#99f7f7",
              300: "#5debeb",
              400: "#26d6d6",
              500: "#06c7c7",
              600: "#059999",
              700: "#087a7a",
              800: "#0c6161",
              900: "#0f4f4f",
            },
            secondary: {
              DEFAULT: "#0066ee",
              foreground: "#ffffff",
            },
            accent: {
              DEFAULT: "#00e6ff",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#22c55e",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT: "#f59e0b",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#ef4444",
              foreground: "#ffffff",
            },
            focus: "#06c7c7",
          },
        },
      },
    }),
  ],
};
