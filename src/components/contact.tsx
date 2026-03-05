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
      className="py-24 bg-slate-50 text-slate-800 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full bg-white border border-slate-200 px-4 py-1 text-sm font-semibold text-slate-600 mb-4">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Tenés una idea en mente? Contanos sobre tu proyecto y te
            responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Columna izquierda: Info de contacto */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Email</p>
                    <a
                      href="mailto:contacto@frontio.com.ar"
                      className="text-slate-500 text-sm hover:text-cyan-600 transition-colors"
                    >
                      frontio.web@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-cyan-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/2604407734"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 text-sm hover:text-cyan-600 transition-colors"
                    >
                      +54 260 440-7734
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-cyan-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Ubicación</p>
                    <p className="text-slate-500 text-sm">Mendoza, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-4">
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
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-slate-700"
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
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Correo */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-slate-700"
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
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>

              {/* Tipo de consulta */}
              <div>
                <label
                  htmlFor="inquiry"
                  className="block mb-2 text-sm font-semibold text-slate-700"
                >
                  ¿Qué necesitás? *
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all outline-none appearance-none bg-white text-sm"
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
                  className="block mb-2 text-sm font-semibold text-slate-700"
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
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all outline-none resize-none text-sm"
                  disabled={loading}
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-slate-950 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
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

              <p className="text-xs text-slate-400 text-center">
                Te responderemos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
