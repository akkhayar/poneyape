"use client";
import { ReactLenis } from "lenis/react";

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
    return <ReactLenis root>{children}</ReactLenis>;
};
export default LenisWrapper;
