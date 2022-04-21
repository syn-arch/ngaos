import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Navbar from "../components/Navbar";
function Surah(props) {
  const [surah, setSurah] = useState([]);
  const { id } = useParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    axios.get(`https://equran.id/api/surat/${id}`).then((res) => {
      setSurah(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="bg-white">
        <div className="bg-green-500 text-center text-white py-4 rounded-xl -mt-2 relative">
          <Link to="/surah">
            <svg
              className="w-7 h-7 float-left ml-4 absolute"
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
          <h1 className="font-semibold text-xl">Al Quran</h1>
        </div>
        <div className="mt-4 mx-4">
          <div className="float-left text-2xl">{surah.nomor}</div>
          <div className="float-right text-2xl">{surah.nama}</div>
          <div className="clear-both"></div>
          <h2 className="text-xl my-2">
            {surah.nama_latin} ({surah.arti}) - {surah.jumlah_ayat} Ayat
          </h2>
          <div className="clear-both"></div>
          <p className="my-1">
            {isReadMore
              ? surah.deskripsi && parse(surah.deskripsi.slice(0, 150))
              : parse(surah.deskripsi || "")}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? " ...selengkapnya" : " lebih sedikit"}
            </span>
          </p>
        </div>
        <div className="mt-4">
          {surah.ayat &&
            surah.ayat.map((ayat, index) => {
              return (
                <div
                  className={`border-b-2 py-4 px-4 ${
                    index % 2 !== 1 && "bg-gray-100"
                  }`}
                  key={index}
                >
                  <div className="flex justify-between">
                    <div className="mr-4">{ayat.nomor}</div>
                    <div className="text-2xl">{ayat.ar}</div>
                  </div>
                  <p className="mt-4">{parse(ayat.tr)}</p>
                  <p className="mt-4">{ayat.idn}</p>
                </div>
              );
            })}
        </div>
        <div className="h-24"></div>
      </div>
      {surah.audio && <Navbar surah={surah} />}
    </>
  );
}

export default Surah;
