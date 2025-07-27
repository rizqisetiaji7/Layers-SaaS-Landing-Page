import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import FeatureTag from "@/components/FeatureTag";
import features from "@/data/featuresData";

export default function Features() {
   return (
      <section className="py-24">
         <div className="container">
            <div className="flex justify-center">
               <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
               Where power meets{" "}
               <span className="text-lime-400">simplicity</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
               <FeatureCard
                  title="Real-Time Collaboration"
                  description="Work together seamlessly with conflict-free team editing"
                  className="md:col-span-2 lg:col-span-1 group"
               >
                  <div className="aspect-video flex items-center justify-center">
                     <Avatar className="z-40">
                        <Image
                           src={avatar1}
                           alt="avatar 1"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-indigo-500 z-30">
                        <Image
                           src={avatar2}
                           alt="avatar 2"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-amber-500 z-20">
                        <Image
                           src={avatar3}
                           alt="avatar 3"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                        <div className="relative size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                           <Image
                              src={avatar4}
                              alt="Avatar 4"
                              className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                           />
                           {Array.from({ length: 3 }).map((_, i) => (
                              <span
                                 key={i}
                                 className="bg-white size-1.5 rounded-full inline-flex"
                              />
                           ))}
                        </div>
                     </Avatar>
                  </div>
               </FeatureCard>
               <FeatureCard
                  title="Interactive Prototyping"
                  description="Engage your clients prototypes that react to user actions"
                  className="md:col-span-2 lg:col-span-1 group"
               >
                  <div className="aspect-video flex items-center justify-center">
                     <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                        We&apos;ve achieved{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                           <span>incredible</span>
                           <video
                              src="/assets/gif-incredible.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                           />
                        </span>{" "}
                        growth this year
                     </p>
                  </div>
               </FeatureCard>
               <FeatureCard
                  title="Keyboard Quick Actions"
                  description="Powerful commands to help you create designs more quickly"
                  className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
               >
                  <div className="aspect-video flex items-center justify-center gap-4">
                     <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">
                        shift
                     </Key>
                     <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 delay-150 group-hover:translate-y-1">
                        alt
                     </Key>
                     <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 delay-300 group-hover:translate-y-1">
                        C
                     </Key>
                  </div>
               </FeatureCard>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
               {features.map((feature, featureIndex) => (
                  <FeatureTag key={featureIndex} feature={feature.label} />
               ))}
            </div>
         </div>
      </section>
   );
}
