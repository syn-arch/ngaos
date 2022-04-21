import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Navbar from "../components/Navbar";
function Surah(props) {
  const [surah, setSurah] = useState([]);
  const { id } = useParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    axios
      .get(`https://equran.id/api/surat/${id}`)
      .then((res) => {
        setSurah(res.data);
      })
      .then(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="bg-white">
        <div className="bg-green-500 text-center text-white py-4 rounded-xl -mt-2 fixed w-full">
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
          <h1 className="font-semibold text-xl">Ngaos</h1>
        </div>

        {loading && (
          <div className="w-full flex justify-center items-center h-screen fixed">
            <svg
              role="status"
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500 -mt-40"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
        {!loading && (
          <>
            <div className="pt-16 mx-4">
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
              {surah.audio && <Navbar surah={surah} />}
            </div>
          </>
        )}
        <div className="h-24"></div>
      </div>
    </>
  );
}

export default Surah;
