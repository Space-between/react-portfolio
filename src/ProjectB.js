import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from "./styles/image/project1.png";

export default function ProjectA() {
  return (
    <div className="flex justify-center mainsection mt-10">
      <div className="max-w-6xl rounded overflow-hidden shadow-lg">
        <div className="flex text-gray-800 project">
          <div className="w-1/3">
            <img className="rounded-lg my-5" src={project1} alt="project1" />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800">
               Web Game + Contact
              </div>
              <p className="text-gray-700 text-lg mb-5">
                React로 만든 웹 게임과 주소록입니다. 끝말잇기, 로또 생성기, 지뢰 찾기, 숫자야구게임 등 총 7가지의 게임과 전화번호를 추가, 수정 및 제거할 수 있는 기능을 갖고 있는 주소록을 React로 만들었습니다.
                <br />
                <br />
                <div className="font-bold text-gray-800">Feature</div>
                - React에서 class를 사용하지 않고 function을 사용해서 state가 변경되는 React-Hooks를 도입한 첫 번째 React 프로젝트입니다.
              </p>
              <a
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-400 border-teal-500 hover:border-teal-400 text-sm border-4 text-white py-1 px-2 rounded"
                href="https://space-between.github.io/webgame-contact/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Web Game + Contact 바로가기
              </a>
              <a
                href="https://github.com/Space-between/webgame-contact"
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
                #JavaScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React-Hooks
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React-Router
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Context API
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
