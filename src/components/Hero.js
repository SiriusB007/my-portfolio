import React from "react";

const Hero = () => {
  return (
    <section className="@container w-full flex justify-center">
      <div className="@[480px]:p-4 w-full flex justify-center">
        <div
          className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center text-center px-4 pb-10 @[480px]:px-10 min-h-[480px] w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), 
                              url("Images/Afroman1.jpg")`
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Hola, I'm the Digital Alchemist.
            </h1>
            <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
              Who Jah Jah bless, may no man curse ⚡️⚡️.             </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
