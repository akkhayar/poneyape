// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link';
// import { routes } from "@/constants";
// import { usePathname } from 'next/navigation';
// import getNavItemIcon from '@/components/common/Nav';

// const Nav = () => {
//   const pathname = usePathname().trim();
//   const [showMenuPage, setShowMenuPage] = useState<boolean>(true);

//   return (
//     <nav className="flex h-[72px] items-center justify-between gap-10 border-b border-solid border-b-bg1 bg-[#ffffff66] px-6 lg:justify-normal lg:px-16">
//         <div className="flex gap-2">
//           <button
//             type="button"
//             className="lg:hidden"
//             onClick={() => setShowMenuPage(true)}
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
//                 fill="#2D3648"
//               />
//               <path
//                 d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
//                 fill="#2D3648"
//               />
//               <path
//                 d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
//                 fill="#2D3648"
//               />
//             </svg>
//           </button>
//           <Link href="/" className="font-pyidaungsu text-[20px]">
//             ပုံရိပ်
//           </Link>
//         </div>
//         <div
//           className="absolute left-0 top-0 h-screen w-screen overflow-y-hidden bg-white px-5 py-10 lg:static lg:h-fit lg:w-fit lg:bg-transparent"
//           hidden={!showMenuPage}
//         >
//           <div
//             className="mb-8 border-b border-[#E5E5E0] pb-8 lg:hidden"
//             aria-label="Mobile Navigation Icon"
//           >
//             <a className="font-pyidaungsu text-[20px]">ပုံရိပ်</a>
//             <button
//               type="button"
//               className="ms-10"
//               onClick={() => setShowMenuPage(false)}
//             >
//               x
//             </button>
//           </div>
//           <ul
//             className="text-[#1B1B1B] lg:flex lg:gap-8"
//             aria-label="Navigation Items"
//           >
//             {(Object.keys(routes) as (keyof typeof routes)[]).map(
//               (routeKey) => (
//                 <li key={routeKey}>
//                   <Link
//                     className={`flex gap-4 ${pathname === routes[routeKey] && "pointer-events-none font-bold"} py-4`}
//                     href={routes[routeKey]}
//                   >
//                     {getNavItemIcon(routeKey)}
//                     <h5
//                       className={`regular transition-all duration-200 ${pathname === routes[routeKey] ? "font-bold text-black" : "text-darkGrey hover:text-black"}`}
//                     >
//                       {routeKey}
//                     </h5>
//                   </Link>
//                 </li>
//               ),
//             )}
//           </ul>
//           <button
//             className="primary mt-6 w-full lg:hidden"
//             onClick={() => setShowAuthModal(true)}
//           >
//             REGISTER
//           </button>
//           <div
//             className="mx-auto text-center lg:hidden"
//             aria-label="Mobile Navigation Copyright"
//           >
//             <Link href="" className="text-midGrey">
//               Copyright {new Date().getFullYear()} poneyape.com
//             </Link>
//           </div>
//         </div>
//         <button className="flex grow rounded-[30px] bg-[#eeeeee] px-4 py-2">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="me-[10px]"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8858 17.2543 14.5974 16.0417 15.8561C16.0073 15.8825 15.9743 15.9114 15.9428 15.9429C15.9113 15.9744 15.8824 16.0074 15.856 16.0418C14.5973 17.2543 12.8857 18 11 18C7.13401 18 4 14.866 4 11ZM16.6176 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.0781 18.0319 16.6177L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L16.6176 18.0319Z"
//               fill="#1B1B1B"
//             />
//           </svg>
//           Search
//         </button>
//         {/* i18nexus */}
//         <div className="flex gap-2 text-black">
//           <select
//             value={locale}
//             onChange={handleChange}
//             className="rounded-[5px] border border-midGrey bg-transparent px-4 py-[10px]"
//           >
//             <option className="hover:text-black" value={"en"}>
//               ENG
//             </option>
//             <option value={"my"}>MY</option>
//           </select>

//           {currentUser ? (
//             <>
//               <button
//                 className="c-outline hidden pb-6 lg:block"
//                 onClick={() => setShowAuthModal(true)}
//               >
//                 Submit Work
//               </button>
//               <Image
//                 className="rounded-full"
//                 src={currentUser?.photoURL || ""}
//                 alt="user-avatar"
//                 width={38}
//                 height={38}
//                 onClick={() => logout}
//               />
//             </>
//           ) : (
//             <button
//               className="c-primary hidden pb-6 lg:block"
//               onClick={() => setShowAuthModal(true)}
//             >
//               REGISTER
//             </button>
//           )}
//         </div>
//       </nav>
//   )
// }

// export default Nav
