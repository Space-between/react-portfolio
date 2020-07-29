import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project2 from "./styles/image/project2.png";

export default function ProjectA() {
  return (
    <div className="flex justify-center mainsection mt-10">
      <div className="max-w-6xl rounded overflow-hidden shadow-lg">
        <div className="flex text-gray-800 project">
          <div className="w-1/3">
            <img className="rounded-lg my-5" src={project2} alt="login" />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
                T-flix
              </div>
              <p className="text-gray-700 text-lg mb-5">
                영화, TV프로그램을 수집하여 데이터베이스를 만드는 TMDB의 API를 이용하여 현재 상영 중인 영화, 인기 있는 TV프로그램들을 볼 수 있도록 해주는 웹 애플리케이션입니다. 
                <br />
                <br />
                <div className="font-bold text-gray-800">Feature</div>
                - API를 이용하여 데이터를 받기 때문에 항상 자동으로 영화, TV프로그램의 정보가 업데이트됩니다.
                <br />
                - Search 페이지에서 원하는 영화나 TV프로그램을 검색할 수 있도록 구현
              </p>
              <a
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 border-teal-500 hover:border-teal-400 text-sm border-4 text-white py-1 px-2 rounded"
                href="https://space-between.github.io/t-flix/"
                rel="noopener noreferrer"
                target="_blank"
              >
                T-flix 바로가기
              </a>
              <a
                href="https://github.com/Space-between/t-flix"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-3 text-teal-500 cursor-pointer hover:text-teal-400"
              >
                <FontAwesomeIcon
                  className="text-2xl align-middle"
                  icon={faGithub}
                />
              </a>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React-Router
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Axios
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TMDB API
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #T(Taeyong)-flix
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
