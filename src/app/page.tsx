import { Bell, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="mb-6 text-4xl font-bold leading-none tracking-tighter md:text-[7vw] lg:text-8xl">
          Bienvenue sur Bly School.
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-[2vw] lg:text-xl">
          Le système de gestion d'ecole par les djiboutiens, pour les
          djiboutiens
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
          <Button size={"lg"} className="w-full md:w-auto">
            Get a demo
          </Button>
          <Button size={"lg"} variant={"outline"} className="w-full md:w-auto">
            <PlayCircle className="mr-2 size-4" />
            Watch video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
