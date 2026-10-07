import "./Hero.css";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero-content">
      <div className="hero-text">
        <div className="badge">
          <CheckCircle2 size={14} />
          ISHONCHLI USTALAR PLATFORMASI
        </div>

        <h1 className="hero-title">
          Uyingiz uchun
          <br />
          <span>ishonchli usta.</span>
        </h1>

        <p className="hero-description">
          Elektrik, santexnik, konditsioner va boshqa
          xizmatlar bo‘yicha tajribali ustalarni bir
          joydan toping.
        </p>

        <div className="hero-actions">
          <button className="hero-button">
            Usta topish
            <ArrowRight size={18} />
          </button>

          <button className="secondary-button">
            Usta bo‘lish
          </button>
        </div>

        <div className="trust">
          <div className="trust-item">
            <ShieldCheck size={18} />
            <span>Tekshirilgan ustalar</span>
          </div>

          <div className="trust-item">
            <Star size={18} />
            <span>Yuqori reyting</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>

        <div className="main-card">
          <div className="main-card-top">
            <div className="big-icon">
              <Wrench size={30} />
            </div>

            <div className="online">
              <span></span>
              Online
            </div>
          </div>

          <p className="small-label">
            BUGUNGI USTA
          </p>

          <h3>
            Professional
            <br />
            xizmatlar
          </h3>

          <p className="card-description">
            Tajribali mutaxassislar sizga kerakli
            xizmatni tez va sifatli bajaradi.
          </p>

          <div className="rating">
            <Star size={16} fill="currentColor" />
            <strong>4.9</strong>
            <span>250+ baho</span>
          </div>
        </div>

        <div className="floating-card users-card">
          <Users size={20} />

          <div>
            <strong>1,200+</strong>
            <span>Faol usta</span>
          </div>
        </div>

        <div className="floating-card verified-card">
          <CheckCircle2 size={20} />

          <div>
            <strong>98%</strong>
            <span>Mamnun mijozlar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;