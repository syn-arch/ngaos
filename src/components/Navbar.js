import React from "react";
import { Link } from "react-router-dom";
import Player from "./Player";

function Navbar({ surah }) {
  return (
    <div className="bg-green-600 fixed bottom-2 right-1 left-1 p-4 flex justify-between rounded-full">
      {surah.surat_sebelumnya.nomor && (
        <Link to={`/surah/${surah.nama && surah.surat_sebelumnya.nomor}`}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            ></path>
          </svg>
        </Link>
      )}
      <Player url={surah.audio} />
      {surah.surat_selanjutnya.nomor && (
        <Link to={`/surah/${surah.nama && surah.surat_selanjutnya.nomor}`}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
