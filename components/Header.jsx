import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";
import NavMobile from "./NavMobile";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="w-full bg-slate-800 sticky top-0 z-10 rounded-b-lg">

    <div className="container mx-auto px-10 mb-4">
      <div className=" w-full flex justify-between md:block py-4 md:pb-10">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-xl text-white">
              KSL&apos;s Blog
            </span>
          </Link>

          <a
            href="https://kyawswarlynn.vercel.app"
            className="md:float-right hidden md:block hover:underline underline-offset-2 align-middle text-white ml-4 font-semibold cursor-pointer"
          >
            Kyaw Swar Lynn
          </a>
        </div>

        <div className="hidden md:float-left md:contents">
          
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right hover:underline underline-offset-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        <NavMobile categories={categories} />

      </div>
    </div>
    </div>

  );
};

export default Header;
