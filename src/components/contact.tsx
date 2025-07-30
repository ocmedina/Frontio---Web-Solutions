import { Mail, Send, User } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Construimos el cuerpo para enviar por fetch
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/octamedina239@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        alert("¡Mensaje enviado! Te responderemos pronto.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error al enviar. Por favor, intentá nuevamente.");
      }
    } catch (error) {
      alert("Error de red. Por favor, revisá tu conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">¿Trabajamos juntos?</h2>
        <p className="text-lg text-gray-600 mb-10">
          Si tenés una idea en mente o necesitás una web profesional, escribinos.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Nombre
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg bg-white px-3">
              <User className="text-gray-400 mr-2" size={20} />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full py-3 bg-transparent focus:outline-none text-gray-800"
                disabled={loading}
              />
            </div>
          </div>

          {/* Correo */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Correo
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg bg-white px-3">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full py-3 bg-transparent focus:outline-none text-gray-800"
                disabled={loading}
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Contame sobre tu proyecto..."
              className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 p-3"
              disabled={loading}
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full flex items-center justify-center gap-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Send size={18} />
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
