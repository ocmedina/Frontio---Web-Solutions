import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5492611234567"; // Reemplazá con tu número con código de país
  const message = "Hola, quiero más info sobre sus servicios."; 
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
