export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50"
    >
      <h1 className="text-5xl font-bold mb-6">Bienvenue sur ma Landing Page</h1>
      <p className="text-lg mb-6">
        Une landing page minimaliste et performante avec Next.js et TailwindCSS
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Commencer
      </button>
    </section>
  );
}
