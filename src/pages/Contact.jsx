import Whatsapp from "../assets/icons/Whatsapp";
import { Phone, Mail } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    title: "Whatsapp",
    href: "https://wa.me/201552392814",
    icon: Whatsapp,
  },
  {
    id: 2,
    title: "Phone",
    href: "tel:01552392814",
    icon: Phone,
  },
  {
    id: 3,
    title: "Email",
    href: "mailto:ibrahimmdsh2009@gmail.com",
    icon: Mail,
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="my-20 flex scroll-mt-10 flex-col items-center px-5"
    >
      <h2 className="text-main-text mb-12 text-4xl font-bold md:mb-20 md:text-5xl">
        Contact
      </h2>

      <div className="bg-card-bg/60 border-main-border text-main-text grid w-full max-w-md grid-cols-1 gap-4 rounded-2xl border px-2 py-3 md:max-w-full md:grid-cols-3 md:py-5">
        {socialLinks.map(({ id, title, href, icon: Icon }) => {
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-main-text bg-accent/70 flex max-w-md flex-1 flex-wrap items-center gap-3 overflow-hidden rounded-2xl border border-transparent px-4 py-2 shadow-lg transition-all duration-300 md:flex-col md:justify-start md:gap-12 md:px-1 md:py-2 md:pb-10"
            >
              <Icon className="size-8 shrink-0 md:size-12" />
              <p className="text-xl font-semibold md:text-3xl">{title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
