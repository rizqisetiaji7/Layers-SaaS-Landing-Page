import { twMerge } from "tailwind-merge";

export default function FeatureTag({
   feature,
   className,
}: {
   feature: string;
   className?: string;
}) {
   return (
      <div
         className={twMerge(
            "bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group",
            className
         )}
      >
         <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
            &#10038;
         </span>
         <span className="font-medium md:text-lg">{feature}</span>
      </div>
   );
}
