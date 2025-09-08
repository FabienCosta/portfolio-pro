"use client";
import { useState } from "react";

export default function CTA({
  title = "Prêt à commencer ?",
  buttonText = "Envoyer",
  email = "contact@monprojet.com",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  inputBgColor = "bg-white",
  inputTextColor = "text-gray-800",
  inputPlaceholderColor = "placeholder-gray-400",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-blue-600",
  buttonHoverBgColor = "hover:bg-blue-200",
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Contact depuis le site&body=Nom: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className={`${bgColor} ${textColor} py-20 text-center px-6`}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className={`w-full p-3 rounded ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`}
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Votre email"
          className={`w-full p-3 rounded ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`}
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Votre message"
          className={`w-full p-3 rounded ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2`}
          required
        />
        <button
          type="submit"
          className={`
            px-6 py-3 
            ${buttonBgColor} 
            ${buttonTextColor} 
            font-bold 
            rounded-lg 
            shadow-md 
            ${buttonHoverBgColor} 
            hover:scale-105 
            transition transform
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
          `}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </form>

      <p className="mt-4 text-sm">
        Ou contactez-moi directement :{" "}
        <a href={`mailto:${email}`} className="underline hover:text-blue-200">
          {email}
        </a>
      </p>
    </section>
  );
}
