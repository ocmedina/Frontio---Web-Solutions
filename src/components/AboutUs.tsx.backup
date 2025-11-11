import { motion } from "framer-motion";
import {
  Handshake,
  BadgeCheck,
  Laptop2,
  Users,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Quiénes somos?
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Somos un equipo enfocado en crear soluciones web atractivas, efectivas y funcionales. Acompañamos a nuestros clientes desde la idea inicial hasta la entrega final del producto.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            {
              icon: <Laptop2 className="text-primary w-8 h-8" />,
              title: "Soluciones Personalizadas",
              text: "Creamos sitios únicos según tus necesidades. No usamos plantillas genéricas, todo es pensado para vos.",
            },
            {
              icon: <Handshake className="text-primary w-8 h-8" />,
              title: "Compromiso Total",
              text: "Nos involucramos en cada proyecto como si fuera propio. Queremos que te sientas acompañado en todo el proceso.",
            },
            {
              icon: <BadgeCheck className="text-primary w-8 h-8" />,
              title: "Calidad Garantizada",
              text: "Cuidamos cada detalle: diseño, velocidad, accesibilidad, experiencia de usuario y SEO técnico.",
            },
            {
              icon: <Users className="text-primary w-8 h-8" />,
              title: "Trabajo Colaborativo",
              text: "Nos gusta trabajar codo a codo con vos. Escuchamos tus ideas, sugerimos mejoras y creamos juntos.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
