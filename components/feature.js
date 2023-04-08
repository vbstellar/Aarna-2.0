import Image from "next/image";
import useIntersection from "@/hooks/useIntersection";
import { useRef } from "react";
import Link from "next/link";

export default function Feature({ setSidebar, ref3 }) {
  // const ref2 = useRef(null);

  // const isInViewport2 = useIntersection(ref2, "0px");
  // console.log("isInViewport2: ", isInViewport2);
  // setSidebar(!isInViewport2);

  return (
    <div
      ref={ref3}
      className="bg-tertiary text-white font-semibold text-md px-[18%] py-4 "
    >
      <div className=" grid grid-cols-4 mx-[10%]">
        <Link
          href="/book-a-test"
          className="grid justify-items-end pr-7 border-r-2 "
        >
          <Image
            src="/BOOK A TEST 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2 "
          />
          Book a Test
        </Link>
        <Link href="/" className="grid justify-items-center border-r-2 ">
          <Image
            src="/UPLOAD PRESCRIPTION 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Upload Description
        </Link>
        <Link href="/" className="grid justify-items-center border-r-2">
          <Image
            src="/DOWNLOAD REPORT 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Download Report
        </Link>
        <Link href="/nearest-centre" className="grid justify-items-start pl-7 ">
          <Image
            src="/NEAREST CENTRE 1.svg"
            alt=""
            width={100}
            height={100}
            className="p-2"
          />
          Nearest Centre
        </Link>
      </div>
    </div>
  );
}
