import logoImage from "@/assets/images/logo.svg";
import { footerLinks } from "@/data/linksData";
import Image from "next/image";

export default function Footer() {
   return (
      <footer className="py-16">
         <div className="container">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
               <div>
                  <Image src={logoImage} alt="Layers logo" />
               </div>
               <div>
                  <nav className="flex gap-6">
                     {footerLinks.map((link, i) => (
                        <a
                           key={i}
                           href={link.href}
                           className="text-sm text-white/50"
                        >
                           {link.label}
                        </a>
                     ))}
                  </nav>
               </div>
            </div>
         </div>
      </footer>
   );
}
