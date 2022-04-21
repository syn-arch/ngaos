import React from "react";
import { Link } from "react-router-dom";
import Quran2 from "../img/quran2.png";

function Home(props) {
  return (
    <div className="h-screen bg-white pt-32">
      <img src={Quran2} alt="" className="w-48 mx-auto" />
      <div className="text-center mt-8">
        <h1 className="font-semibold text-2xl mb-2 text-gray-800">
          NGAOS QURAN
        </h1>
        <p className="w-2/3 mx-auto mb-20 text-gray-600">
          “Bacalah Al-Qur’an, karena sesungguhnya ia akan menjadi syafaat bagi
          para pembacanya di hari kiamat.” (HR. Muslim)
        </p>
        <Link
          to="/surah"
          className="bg-green-500 px-24 py-3 text-white mx-auto rounded-full"
        >
          Mulai
        </Link>
      </div>
    </div>
  );
}

export default Home;
