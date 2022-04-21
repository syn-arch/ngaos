import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListSurah(props) {
  const [listSurah, setListSurah] = useState([]);
  const [filteredData, setFilteredData] = useState(listSurah);
  useEffect(() => {
    axios.get("https://equran.id/api/surat").then((res) => {
      setListSurah(res.data);
      setFilteredData(res.data);
    });
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = listSurah.filter((surah) => {
      return surah.nama_latin.toLowerCase().includes(value);
    });
    setFilteredData(result);
  };

  return (
    <div className="bg-white">
      <div className="bg-green-500 text-center text-white py-4 rounded-xl -mt-2">
        <h1 className="font-semibold text-xl">Al Quran</h1>
      </div>
      <form className="mt-3 px-2" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleSearch}
          autoComplete="off"
          name="search"
          type="text"
          placeholder="Search"
          className="bg-gray-100 rounded-full py-2 px-4 w-full"
        />
      </form>
      {filteredData.map((surah, index) => {
        return (
          <Link to={`/surah/${surah.nomor}`} key={index}>
            <div className="flex justify-between mt-3 border-b-2 pb-2 mx-2">
              <div className="flex">
                <div className="bg-green-500 w-12 h-12 text-center flex items-center justify-center text-white font-semibold mr-2 rounded-full">
                  {surah.nomor}
                </div>
                <div className="flex flex-col">
                  <p className="text-green-500 font-semibold">
                    {surah.nama_latin}{" "}
                    <span className="font-normal text-gray-400 text-sm">
                      ({surah.jumlah_ayat})
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">{surah.arti}</p>
                </div>
              </div>
              <p>{surah.nama}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ListSurah;
