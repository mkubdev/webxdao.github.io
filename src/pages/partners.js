import Head from "next/head";
import { prefix } from "../constants";

export default function Partners({ partnerData }) {
  return (
    <>
      <Head>
        <title>Community Partners | WebXDAO</title>
      </Head>
      <section className="py-8">
        <div className="container max-w-5xl mx-auto">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-white">
            Community Partners
          </h1>
          <div className="w-full mt-6 text-lg md:text-xl font-light leading-tight text-center text-white">
            Our Valuable Community Partners
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        <div className="pt-12 pb-12 flex-1">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-6">
              <div className="text-black grid grid-col-1 p-3 gap-y-3 md:grid md:grid-cols-2 md:gap-6 md:p-3">
                {partnerData.map(({ name, title, imgUrl, text }, index) => (
                  <div
                    key={name + index}
                    className="cursor-pointer bg-white flex-1 shadow-2xl transform transition hover:shadow-lg hover:scale-105 hover:z-10 duration-300 ease-in-out p-4 bg-opacity-5 rounded-2xl justify-conten backdrop-filter backdrop-blur-md"
                  >
                    <div className="grid grid-cols-3 items-center justify-start overflow-hidden">
                      <div className="relative col-span-1">
                        <img
                          alt={name}
                          className="bg-gray-50 p-5 rounded-md"
                          src={prefix + imgUrl}
                        />
                      </div>
                      <div className="flex flex-col col-span-2 gap-y-3 pl-5">
                        <h4 className="text-xl text-gray-300 font-semibold">{title}</h4>
                        <p className="text-gray-500">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const data = [
    {
      name: "dev protocol",
      imgUrl: "/logo 3.4.png",
      title: "DEV PROTOCOL",
      text: "Dev Protocol was designed as a unique protocol to fairly evaluate OSS, which has been economically undervalued for decades. It is built on the Ethereum blockchain and brings economic value to all open source activities.",
    },
    {
      name: "logo1",
      imgUrl: "/logo 3 1.png",
      title: "Logo 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "logo2",
      imgUrl: "/logo 3 2.png",
      title: "Logo 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "logo3",
      imgUrl: "/logo 3 3.png",
      title: "Logo 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return {
    props: {
      partnerData: data,
    },
  };
}
