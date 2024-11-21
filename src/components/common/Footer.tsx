import Link from "next/link";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full text-black">
      <div className="w-full p-6 md:px-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                PoneYape
              </span>
            </Link>
            <div className="flex flex-col gap-2">
              <h2 className="font-poppins text-base font-semibold uppercase dark:text-white">
                Our Vision
              </h2>
              <p className="max-w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="mt-10 hidden gap-[100px] sm:flex">
            <ul className="flex flex-col gap-6 font-medium">
              <li>
                <Link href="https://akkhayar.com/" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-6 font-medium">
              <li>
                <Link href="#" className="hover:underline">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-9 h-[1px] bg-black sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="my-8 sm:flex sm:items-center sm:justify-between">
          <span className="text-base sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="https://akkhayar.com/" className="hover:underline">
              Akkhayar
            </Link>
            . All Rights Reserved.
          </span>
          <div className="hidden items-center gap-7 sm:flex">
            <a href="mailto: info@poneyape.com" target="_blank">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
