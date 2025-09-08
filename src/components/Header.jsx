import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-6 px-8 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MonLogo</h1>
        <Image
          src="/images/profile-pic-Fabien.png"
          alt="Photo de profil Fabien"
          width={50}
          height={50}
          className="rounded-full"
        />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                À propos
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-500">
                Témoignages
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
