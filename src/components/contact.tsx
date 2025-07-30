import { Mail, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">¿Trabajamos juntos?</h2>
        <p className="text-lg text-gray-600 mb-10">
          Si tenés una idea en mente o necesitás una web profesional, escribinos.
        </p>

        <form
          action="https://formsubmit.co/octamedina239@gmail.com"
          method="POST"
          className="max-w-xl mx-auto space-y-6 text-left"
        >
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
                required
                placeholder="Tu nombre"
                className="w-full py-3 bg-transparent focus:outline-none text-gray-800"
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
                required
                placeholder="tu@email.com"
                className="w-full py-3 bg-transparent focus:outline-none text-gray-800"
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
              rows={5}
              required
              placeholder="Contame sobre tu proyecto..."
              className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 p-3"
            ></textarea>
          </div>

          {/* Campos ocultos */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="octamedina239@gmail.com" />

          {/* Botón */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
