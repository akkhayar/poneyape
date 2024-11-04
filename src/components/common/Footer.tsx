import Link from "next/link";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#363636] text-[#EAEAEA]">
      <div className="w-full p-6 md:px-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
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
            <div className="flex flex-col gap-2">
              <h2 className="font-poppins text-base font-semibold uppercase dark:text-white">
                Contact
              </h2>
              <div className="underline underline-offset-2">
                <p>9590 123 4567</p>
                <p>info@poneyape.com</p>
              </div>
            </div>
          </div>
          <div className="hidden gap-[100px] sm:flex">
            <div>
              <h2 className="mb-6 font-poppins text-base font-semibold uppercase dark:text-white">
                Company
              </h2>
              <ul className="flex flex-col gap-6 font-medium">
                <li>
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Volunteering
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Contests
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-poppins text-base font-semibold uppercase dark:text-white">
                Resources
              </h2>
              <ul className="flex flex-col gap-6 font-medium">
                <li>
                  <Link href="#" className="hover:underline">
                    Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Voting Rules
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    YouTube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-9 h-[1px] bg-[#E4E4E726] sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              Akkhayar™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="hidden items-center gap-7 sm:flex">
            <a href="#" target="_blank">
              <Mail />
            </a>
            <a href="#" target="_blank">
              <svg
                className="size-[24px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
            <a href="#" target="_blank">
              <svg
                className="size-[24px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </a>

            <a href="#" target="_blank">
              <svg
                className="size-[24px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
