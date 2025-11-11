import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      icon: (
        <ComputerDesktopIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
      ),
      title: "Diseño Web",
      description: "Interfaces modernas, adaptables y enfocadas en el usuario.",
    },
    {
      icon: (
        <CodeBracketIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
      ),
      title: "Desarrollo",
      description:
        "Código limpio, optimizado y escalable con tecnologías modernas.",
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />,
      title: "Marketing Digital",
      description:
        "Estrategias para posicionarte mejor y generar más conversiones.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 max-w-6xl mx-auto text-center"
      aria-labelledby="services-title"
    >
      <h2 id="services-title" className="text-3xl font-bold mb-12">
        Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            {service.icon}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
