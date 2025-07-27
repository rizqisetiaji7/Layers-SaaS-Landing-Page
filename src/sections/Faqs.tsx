import Tag from "@/components/Tag";
import faqs from "@/data/faqsData";
import { twMerge } from "tailwind-merge";

export default function Faqs() {
   const selectedIndex = 0;

   return (
      <section className="py-24">
         <div className="container">
            <div className="flex justify-center">
               <Tag>Faqs</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
               Questions? We&apos;ve got{" "}
               <span className="text-lime-400">answers</span>
            </h2>
            <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
               {faqs.map((faq, i) => (
                  <div
                     key={i}
                     className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                  >
                     <div className="flex justify-between items-center">
                        <h3 className="font-medium">{faq.question}</h3>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className={twMerge(
                              "feather feather-plus text-lime-400 flex-shrink-0",
                              selectedIndex === i && "rotate-45"
                           )}
                        >
                           <line x1="12" y1="5" x2="12" y2="19"></line>
                           <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                     </div>
                     <div
                        className={twMerge(
                           "mt-6",
                           selectedIndex != i && "hidden"
                        )}
                     >
                        <p className="text-white/50">{faq.answer}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
