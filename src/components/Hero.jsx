// "use client";
// import Image from "next/image";

// export default function Hero({
//   name = "Fabien Costa",
//   title = "Développeur frontend spécialisé en React.js et Next.js",
//   buttonText = "Découvrir mon parcours",
//   buttonTargetId = "about",
//   imageSrc = "/images/profile-pic-Fabien.png",
//   imageAlt = "Portrait de Fabien Costa",
//   bgColor = "bg-gray-50",
//   textColor = "text-gray-700",
//   buttonColor = "bg-blue-600",
//   buttonHoverColor = "hover:bg-blue-500",
// }) {
//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex flex-col justify-center items-center text-center px-6 ${bgColor}`}
//     >
//       <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Salut, je suis ${name}`}</h1>
//       <p className={`text-lg md:text-xl mb-6 max-w-2xl ${textColor}`}>
//         {title}
//       </p>

//       <button
//         onClick={() =>
//           document
//             .getElementById(buttonTargetId)
//             .scrollIntoView({ behavior: "smooth" })
//         }
//         className={`
//           px-6 py-3
//           ${buttonColor}
//           text-white
//           font-bold
//           rounded-lg
//           shadow-md
//           ${buttonHoverColor}
//           hover:scale-105
//           transition transform
//           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
//         `}
//         aria-label={buttonText}
//       >
//         {buttonText}
//       </button>

//       {/* {imageSrc && (
//         <div className="mt-12">
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             width={200}
//             height={200}
//             className="rounded-full shadow-lg mx-auto"
//           />
//         </div>
//       )} */}
//     </section>
//   );
// }

"use client";

import { Particles } from "react-tsparticles";

export default function Hero({
  name = "Fabien Costa",
  title = "Développeur frontend spécialisé en React.js et Next.js",
  buttonText = "Découvrir mon parcours",
  buttonTargetId = "about",
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Fond gradient + particules */}
      <div className="absolute inset-0 z-0 animate-gradientBG bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-400">
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: {
                value: ["#3b82f6", "#6366f1", "#8b5cf6", "#f472b6", "#facc15"],
              },
              shape: {
                type: ["circle", "triangle", "square", "star", "polygon"],
                options: {
                  polygon: { sides: 5 }, // pour les pentagones
                },
              },
              opacity: { value: { min: 0.3, max: 0.7 } },
              size: { value: { min: 3, max: 6 } },
              move: { enable: true, speed: 2, outModes: "out" },
              links: {
                enable: true,
                distance: 120,
                color: "#3b82f6",
                opacity: 0.4,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 120, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Salut, je suis ${name}`}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-700">
          {title}
        </p>
        <button
          onClick={() =>
            document
              .getElementById(buttonTargetId)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-500 hover:scale-105 transition transform"
        >
          {buttonText}
        </button>
      </div>

      {/* Animation gradient CSS */}
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientBG {
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
