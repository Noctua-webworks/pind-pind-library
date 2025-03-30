// "use client"

// import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Banner() {
  return (
    //     <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
    //       <div
    //         className={cn(
    //           "absolute inset-0",
    //           "[background-size:40px_40px]",
    //           "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
    //           "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
    //         )}
    //       />
    //       {/* Radial gradient for the container to give a faded look */}
    //       <div className="relative z-20 text-center px-6">
    //         <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-7xl">
    //           Bringing Knowledge Closer: <br /> Libraries in Every Village!
    //         </h1>
    //         <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
    //           Join us in creating libraries in religious places, making books
    //           accessible to everyone.
    //         </p>
    //         <div className="mt-6 flex justify-center space-x-4">
    //           <Link
    //             href="#start-library"
    //             className="px-6 py-3 text-lg font-semibold text-white bg-[#58130a] rounded-lg hover:bg-blue-700 transition"
    //           >
    //             Start a Library
    //           </Link>

    //         </div>
    //       </div>
    //     </div>
    //   );
    // }

    <div className="bg-slate-50 grainy-light min-h-screen mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <section>
        <div className="pb-12 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-42">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/images/book2.png" alt="Book" className="w-full" />
              </div>
              <h1 className="relative mt-12 w-fit tracking-tight text-balance font-bold !leading-tight text-gray-900 text-3xl md:mt-0 md:text-5xl lg:text-6xl">
                Bringing Knowledge Closer:
                <span className="bg-[#58130a] px-2 text-white">Libraries</span>
                in Every Village!
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                {/* Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case. */}
                Join us in creating libraries in religious places, making books
                accessible to everyone.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <Link
                  href="#start-library"
                  className="px-6 py-3 text-lg font-semibold text-white bg-[#58130a] rounded-lg hover:bg-[#cf7b70] transition"
                >
                  Start a Library
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-10 md:mt-32  lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/images/lib.png" alt="Library Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
