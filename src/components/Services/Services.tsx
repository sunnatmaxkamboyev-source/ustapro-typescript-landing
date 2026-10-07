import "./Services.css";

import {
  ArrowRight,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

import type { Service } from "../../types";

function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Elektrik",
      description:
        "Elektr tarmoqlari, rozetka, yoritish va boshqa elektr xizmatlari.",
      icon: "zap",
    },
    {
      id: 2,
      title: "Santexnik",
      description:
        "Suv quvurlari, kran, kanalizatsiya va santexnika xizmatlari.",
      icon: "wrench",
    },
    {
      id: 3,
      title: "Konditsioner",
      description:
        "Konditsioner o‘rnatish, ta’mirlash va texnik xizmat ko‘rsatish.",
      icon: "snowflake",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <span className="section-label">
            XIZMATLAR
          </span>

          <h2>
            Sizga kerak bo‘lgan
            <br />
            <span>barcha xizmatlar.</span>
          </h2>
        </div>

        <p>
          Ishonchli mutaxassislarni toping va
          kerakli xizmatni tezda buyurtma qiling.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">
              {service.icon === "zap" && (
                <Zap size={25} />
              )}

              {service.icon === "wrench" && (
                <Wrench size={25} />
              )}

              {service.icon === "snowflake" && (
                <Snowflake size={25} />
              )}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button className="service-button">
              Batafsil
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;