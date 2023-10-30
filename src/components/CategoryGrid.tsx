import Link from "next/link";
import React from "react";

function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-screen mx-auto p-6 max-md:mt-16 text-center h-80 -indent-8">
      <Link
        href={"/category/Anime"}
        className="grid col-span-1 border-2 bg-cover bg-center bg-[url(/images/anime_&_manga.png)]"
      >
        <span className="grid text-lg font-bold backdrop-brightness-50 h-full w-full text-white">
          <div className="place-self-center">Anime & Manga</div>
        </span>
      </Link>

      <Link
        href={"/category/Mascot"}
        className="grid col-span-1 border-2 bg-cover bg-center bg-no-repeat bg-[url(/images/mascot.png)]"
      >
        <div className="grid text-lg font-bold backdrop-brightness-50 h-full w-full text-white">
          <div className="place-self-center">Mascot</div>
        </div>
      </Link>

      <Link
        href={"/category/Vocaloid"}
        className="grid col-span-1 border-2 bg-cover bg-top bg-no-repeat bg-[url(/images/vocaloid.png)]"
      >
        <span className="grid text-lg font-bold backdrop-brightness-50 h-full w-full text-white">
          <div className="place-self-center">Vocaloid</div>
        </span>
      </Link>

      <Link
        href={"/category/Disney"}
        className="grid col-span-1 border-2 bg-cover bg-no-repeat bg-center bg-[url(/images/disney.png)]"
      >
        <span className="grid text-lg font-bold backdrop-brightness-50 h-full w-full text-white">
          <div className="place-self-center">Disney</div>
        </span>
      </Link>

      <Link
        href={"/category/Movies&TV"}
        className="col-span-1 border-2 bg-cover bg-no-repeat bg-top bg-[url(/images/movies_&_TV.png)]"
      >
        <span className="grid text-lg font-bold backdrop-brightness-50 h-full w-full text-white">
          <div className="place-self-center">Movies & TV</div>
        </span>
      </Link>

      <Link
        href={"/category/VideoGames"}
        className="col-span-1 border-2 bg-cover bg-no-repeat bg-center bg-[url(/images/video_games.png)]"
      >
        <span className="grid text-lg font-bold backdrop-brightness-50 h-full w-full text-white">
          <div className="place-self-center">Video Games</div>
        </span>
      </Link>
    </div>
  );
}

export default CategoryGrid;
