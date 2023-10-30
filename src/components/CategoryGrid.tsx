import Link from "next/link";
import Image from "next/image";
import React from "react";

function CategoryGrid() {
  return (
    <div className="flex h-80 w-screen mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 max-md:mt-1 text-center w-full h-full">
        <div className="relative grid col-span-1">
          <Link href={`/category/${encodeURIComponent("Anime & Manga")}`}>
            <Image
              fill
              src="/images/anime_&_manga.png"
              className="object-cover border-1 hover:border-2 brightness-50 hover:saturate-200 shadow-inner hover:shadow-2xl rounded-2xl"
              alt=""
            />
            <span className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Anime & Manga
            </span>
          </Link>
        </div>

        <div className="relative">
          <Link
            href={`/category/${encodeURIComponent("Mascot")}`}
            className="grid col-span-1"
          >
            <Image
              fill
              src="/images/mascot.png"
              className="object-cover border-1 hover:border-2 brightness-50 hover:saturate-200 shadow-inner hover:shadow-2xl rounded-2xl"
              alt=""
            />
            <span className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Mascot
            </span>
          </Link>
        </div>

        <div className="relative">
          <Link
            href={`/category/${encodeURIComponent("Vocaloid")}`}
            className="grid col-span-1"
          >
            <Image
              fill
              src="/images/vocaloid.png"
              className="object-cover object-top border-1 hover:border-2 brightness-50 hover:saturate-200 shadow-inner hover:shadow-2xl rounded-2xl"
              alt=""
            />
            <span className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Vocaloid
            </span>
          </Link>
        </div>

        <div className="relative">
          <Link
            href={`/category/${encodeURIComponent("Disney")}`}
            className="grid col-span-1"
          >
            <Image
              fill
              src="/images/disney.png"
              className="object-cover border-1 hover:border-2 brightness-50 hover:saturate-200 shadow-inner hover:shadow-2xl rounded-2xl"
              alt=""
            />
            <span className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Disney
            </span>
          </Link>
        </div>

        <div className="relative">
          <Link
            href={`/category/${encodeURIComponent("Movies & TV")}`}
            className="grid col-span-1"
          >
            <Image
              fill
              src="/images/movies_&_TV.png"
              className="object-cover border-1 hover:border-2 brightness-50 hover:saturate-200 shadow-inner hover:shadow-2xl rounded-2xl"
              alt=""
            />
            <span className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Movies & TV
            </span>
          </Link>
        </div>

        <div className="relative">
          <Link
            href={`/category/${encodeURIComponent("Video Games")}`}
            className="grid col-span-1"
          >
            <Image
              fill
              src="/images/video_games.png"
              className="object-cover border-1 hover:border-2 brightness-50 hover:saturate-200 shadow-inner hover:shadow-2xl rounded-2xl"
              alt=""
            />
            <span className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Video games
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryGrid;
