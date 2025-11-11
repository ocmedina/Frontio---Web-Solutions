import { Mail, Send, User } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("inquiry", formData.inquiry);
    data.append("message", formData.message);
    data.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/octamedina239@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      if (response.ok) {
        alert("¡Mensaje enviado! Te responderemos pronto.");
        setFormData({ name: "", email: "", inquiry: "", message: "" });
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
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 text-gray-800 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tenés una idea en mente? Contanos sobre tu proyecto y te
            responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Columna izquierda: Info de contacto */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:contacto@frontio.com.ar"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      frontio.web@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a
                      href="https://wa.me/2604407734"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +54 260 440-7734
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-purple-600 text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Seguinos en redes sociales
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/frontio.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Frontio"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <i className="ri-instagram-line text-lg"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/frontio-web-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Frontio"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <i className="ri-linkedin-line text-lg"></i>
                  </a>
                  <a
                    href="https://github.com/ocmedina"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Frontio"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <i className="ri-github-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-gray-800"
                  >
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-gray-400" size={20} />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Correo */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-800"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-400" size={20} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@email.com"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>

              {/* Tipo de consulta */}
              <div>
                <label
                  htmlFor="inquiry"
                  className="block mb-2 font-semibold text-gray-800"
                >
                  ¿Qué necesitás? *
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none appearance-none bg-white"
                  disabled={loading}
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="pagina-web">Página Web / Landing Page</option>
                  <option value="frontstock">
                    FrontStock - Sistema de Stock
                  </option>
                  <option value="chatbot">ChatBot Inteligente</option>
                  <option value="desarrollo">Desarrollo a Medida</option>
                  <option value="otro">Otro servicio</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-800"
                >
                  Contanos sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Describí tu idea, qué necesitás y cualquier detalle relevante..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  disabled={loading}
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Te responderemos en menos de 24 horas 🚀
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
