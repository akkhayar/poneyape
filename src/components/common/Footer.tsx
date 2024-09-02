import { SocialIcon } from "@/icons/SocialIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-6 md:px-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              {/* <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="me-3 h-8"
                alt="FlowBite Logo"
                width={25}
                height={25}
              /> */}
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                PoneYape
              </span>
            </a>
            <div>
              <h2 className="text-sm font-semibold uppercase text-gray-900 dark:text-white font-poppins">
                Our Vision
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase text-gray-900 dark:text-white font-poppins">
                Contact
              </h2>
              <p>9590 123 4567</p>
              <p>info@poneyape.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white font-poppins">
                Company
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Volunteering
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Contests
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white font-poppins">
                Resources
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Learning
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Voting Rules
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tutorials
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    YouTube Playlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white font-poppins">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Akkhayar™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="facebook" className="h-4 w-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="discord" className="h-4 w-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="x" className="h-4 w-4" />

              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="github" className="h-4 w-4" />

              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {" "}
              <SocialIcon domain="dribbble" className="h-4 w-4" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
