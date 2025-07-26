import Image from "next/image";
import logos from "@/data/logoTickerData";

export default function LogoTicker() {
   return (
      <section className="py-24 overflow-x-clip">
         <div className="container">
            <h3 className="text-center text-white/50 text-xl">
               Already chosen by these market leaders
            </h3>

            <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
               <div className="flex gap-24 pr-24">
                  {logos.map((logo) => (
                     <Image key={logo.name} src={logo.image} alt={logo.name} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
