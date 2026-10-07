import "./Footer.css";

import { ArrowUpRight } from "lucide-react";

type FooterLink = {
  id: number;
  title: string;
};

type FooterProps = {
  brandName: string;
  description: string;
};

function Footer({
  brandName,
  description,
}: FooterProps) {
  const links: FooterLink[] = [
    {
      id: 1,
      title: "Xizmatlar",
    },
    {
      id: 2,
      title: "Ustalar",
    },
    {
      id: 3,
      title: "Biz haqimizda",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            {brandName}
            <span>Pro</span>
          </a>

          <p>{description}</p>
        </div>

        <div className="footer-links">
          <h4>Tezkor havolalar</h4>

          {links.map((link) => (
            <a href="#" key={link.id}>
              {link.title}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>

        <div className="footer-social">
          <h4>Bizni kuzating</h4>

          <div className="social-buttons">
            <a href="#" aria-label="Telegram">
              TG
            </a>

            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="Web">
              WEB
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 {brandName}. Barcha huquqlar himoyalangan.
        </span>

        <span>
          Ishonchli xizmatlar platformasi
        </span>
      </div>
    </footer>
  );
}

export default Footer;