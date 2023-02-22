import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import aerys from "../public/_MG_6363.jpg";
export default function Home() {
  return (
    <div>
      <Head>
        <title>aerys media</title>
        <meta
          name="description"
          content="Professional Photographer available for photoshoots and films."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" px-10">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 id="logo" className="text-xl">
              aerys media
            </h1>
            <ul className="flex items-center gap-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="portraits.html">Portraits</a>
              </li>
              <li>
                <a href="headshots.html">Headshots</a>
              </li>
              <li>
                <a href="realestate.html">Real Estate & Interior Design</a>
              </li>
              <li>
                <a href="weddings.html">Weddings</a>
              </li>
              <li>
                <a href="rates.html">Rates</a>
              </li>
              <li>
                <a
                  className=" bg-black text-white px-4 py-2 rounded-xl"
                  href="contact.html"
                >
                  Book Now
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
            </ul>
          </nav>
          <div className="flex">
            <div className="mx-auto flex-1 w-full">
              <Image src={aerys} />
            </div>
            <div className="text-center p-10 py-10 flex-1">
              <h2 className="text-5xl py-2 font-medium">About</h2>
              <p className="text-md py-5 leading-8 w-full">
                I am an Photographer, filmaker, YouTuber and entreprenuer based
                in Toronto, Canada.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex mt-10 mb-10">
            <div className="flex-1 flex-col content-between">
              <div className="W-full mb-20">
                <p>Have any questions or want to book a session?</p>
              </div>
              <div className="W-full mb-20">
                <h1 className="text-5xl py-2 font-medium">
                  I would love to help
                </h1>
              </div>
              <div className="W-full mb-20">
                <p>
                  Although I am based in Toronto, I travel all across Canada to
                  cities such as Montreal, Vancouver to shoot. If you would like
                  to book a session outside of Toronto, feel free to reserve a
                  session
                </p>
              </div>
            </div>
            <div className="flex-1">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit="submit"
                data-netlify-honeypot="bot-field"
                className="flex-col"
              >
                <input type="text" name="bot-field" className="hidden" />
                <input
                  className="block w-full"
                  id="name"
                  placeholder="Your name *"
                />
                <input
                  className="block w-full mt-6"
                  id="email"
                  placeholder="Your email *"
                />
                <input
                  className="block w-full mt-6"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
                <input
                  className="block w-full mt-6"
                  type="text"
                  id="package"
                  placeholder="What package are you interested in"
                />
                <input
                  className="block w-full mt-6"
                  type="text"
                  id="city"
                  placeholder="What city are you in?"
                />
                <textarea
                  className="block w-full mt-6"
                  type="text"
                  id="message"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-xl mt-6"
                >
                  Book now
                </button>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div>
            <ul className="flex justify-center gap-12">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portraits</a>
              </li>
              <li>
                <a href="#">Headshots</a>
              </li>
              <li>
                <a href="#">Real Estate & Interior Design</a>
              </li>
              <li>
                <a href="#">Weddings</a>
              </li>
              <li>
                <a href="#">Rates</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <p className="text-center m-6 text-xs">
            © Aerys Media LLC 2023 | All Rights Reserved
          </p>
        </section>
      </main>
    </div>
  );
}
