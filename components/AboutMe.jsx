import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="max-container px-8">
      <h2 className="text-4xl font-bold mb-4">Mes compétences</h2>
      <p className="text-xl text-gray-400">
        Technologies et logiciels que j’ai pu utiliser lors de mes stages et
        étude
      </p>
      <div className="flex justify-center mt-20 mb-20">
        <div className="flex flex-col w-full bg-darkgray-200 border border-darkgray-100 rounded-2xl">
          <div className="h-16 flex justify-center items-center border-b border-darkgray-100">
            <div className="bg-darkgray-300 w-96 h-6 flex justify-center items-center rounded border border-darkgray-100 relative">
              <span className="text-xs">william-portfolio-picture.dev</span>
            </div>
          </div>
          <div className="h-[614px] flex">
            <div className="w-1/2 flex flex-col">
              <div className="h-96">
                <div className="h-16 pt-5">
                  <span className="py-1 px-4 bg-darkgray-300 rounded-t-lg leading-none">
                    index.html
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col border-l border-darkgray-100">
              <div className="h-16 border-b border-darkgray-100"></div>
              <div className="flex-1 bg-darkgray-300 flex justify-center items-center">
                <Image
                  src="/picture.png"
                  width={400}
                  height={400}
                  alt="Picture of myself"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
