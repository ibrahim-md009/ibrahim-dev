import Whatsapp from "../assets/icons/Whatsapp";
import SectionTitle from "../components/SectionTitle";
import { Mail } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    title: "WhatsApp",
    value: "+20 155 239 2814",
    href: "https://wa.me/201552392814",
    icon: Whatsapp,
    external: true,
  },
  {
    id: 2,
    title: "Email",
    value: "ibrahim.shubair.dev@gmail.com",
    href: "mailto:ibrahim.shubair.dev@gmail.com",
    icon: Mail,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mx-auto my-24 max-w-6xl scroll-mt-20 px-4">
      <SectionTitle subtitle="Pick whichever way suits you best.">
        Contact
      </SectionTitle>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {socialLinks.map(({ id, title, value, href, icon: Icon, external }) => (
          <a
            key={id}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="group bg-card-bg/60 border-main-border hover:border-accent/60 hover:shadow-accent/10 flex items-center gap-4 rounded-2xl border p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex-col md:items-start md:gap-8 md:p-6"
          >
            <span className="bg-accent/10 text-accent group-hover:bg-accent group-hover:text-card-bg grid size-14 shrink-0 place-items-center rounded-2xl text-3xl transition-colors duration-300 md:size-16 md:text-4xl">
              <Icon className="size-7 md:size-9" />
            </span>
            <span className="min-w-0">
              <span className="text-main-text block text-xl font-semibold md:text-2xl">
                {title}
              </span>
              <span className="text-sub-text block text-sm break-all md:text-base">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
