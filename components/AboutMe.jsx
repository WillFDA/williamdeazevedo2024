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
              <div className="h-96 flex flex-col">
                <div className="h-16 flex items-end">
                  <span className="py-2 px-4 bg-darkgray-300 rounded-t-lg leading-none ml-5 mb-0">
                    index.html
                  </span>
                  <span className="py-2 px-4 rounded-t-lg leading-none ml-5 mb-0">
                    script.js
                  </span>
                  <span className="py-2 px-4 rounded-t-lg leading-none ml-5 mb-0">
                    package.json
                  </span>
                </div>
                <div className="flex-1 w-full flex bg-darkgray-300">
                  <div className=" w-9 h-full flex flex-col items-end text-gray-500">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 p-2 pl-6">
                <div className="flex gap-5 text-gray-600">
                  <span className="text-white">Terminal</span>
                  <span>Output</span>
                  <span>Debug Console</span>
                  <span>Problems</span>
                </div>
                <div className="flex flex-col">
                  <span>Compiled in 160ms  (1236 modules)</span>
                  <span>Compiled in 150ms  (1236 modules)</span>
                  <span>Compiled in 134ms  (1236 modules)</span>
                  <span>Compiled in 170ms  (1236 modules)</span>
                  <span>Compiled in 165ms  (1236 modules)</span>
                  <span>Compiled in 145ms  (1236 modules)</span>
                  <span>Compiled in 160ms  (1236 modules)</span>
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
