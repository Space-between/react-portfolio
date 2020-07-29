import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="mb-56">
      <div className="mt-10 text-4xl text-gray-800 font-bold ml-12">
        About me
      </div>
      <div className="mx-20 mt-10 text-gray-700 text-xl">
        <p>
          안녕하세요. 프론트엔드 개발자 김태용입니다.
          <br />
          웹 퍼블리셔를 시작으로 프론트엔드 개발자에 이르기까지 매우 많은 시간과 노력을 웹 개발에 기울였고 지금보다 더 향상된 실력의 개발자가 되기 위해서 끊임없이 발전하고 있습니다.
          <br />
          웹 퍼블리셔 출신 프론트엔드 개발자답게 PC 페이지부터 Mobile 페이지, 반응형 웹 페이지, 그리고 웹 애플리케이션, 게임과 같은 웹 서비스까지 다양한 기술들을 활용하여 개발한 경험이 있습니다.
          <br />
          <br />
          주로 활용하는 기술스택입니다.
        </p>
        <div className="flex stack mt-5">
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>JavaScript(ES6+)</span>
          </div>
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>TypeScript</span>
          </div>
        </div>
        <div className="flex stack">
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>React</span>
          </div>
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>Redux</span>
          </div>
        </div>
        <div className="flex stack">
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>HTML5</span>
          </div>
          <div className="w-1/4 cursor-default hover:text-teal-500">
            <FontAwesomeIcon
              className="text-base mr-2 text-teal-500"
              icon={faCaretRight}
            />
            <span>CSS3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
