"use client";
import Image from "next/image";

export default function Hero({
  name = "Fabien Costa",
  title = "Développeur frontend spécialisé en React.js et Next.js",
  buttonText = "Découvrir mon parcours",
  buttonTargetId = "about",
  imageSrc = "/images/profile-pic-Fabien.png",
  imageAlt = "Portrait de Fabien Costa",
  bgColor = "bg-gray-50",
  textColor = "text-gray-700",
  buttonColor = "bg-blue-600",
  buttonHoverColor = "hover:bg-blue-500",
}) {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-center text-center px-6 ${bgColor}`}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Salut, je suis ${name}`}</h1>
      <p className={`text-lg md:text-xl mb-6 max-w-2xl ${textColor}`}>
        {title}
      </p>

      <button
        onClick={() =>
          document
            .getElementById(buttonTargetId)
            .scrollIntoView({ behavior: "smooth" })
        }
        className={`
          px-6 py-3
          ${buttonColor}
          text-white
          font-bold
          rounded-lg
          shadow-md
          ${buttonHoverColor}
          hover:scale-105
          transition transform
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        `}
        aria-label={buttonText}
      >
        {buttonText}
      </button>

      {imageSrc && (
        <div className="mt-12">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={200}
            height={200}
            className="rounded-full shadow-lg mx-auto"
          />
        </div>
      )}
    </section>
  );
}
