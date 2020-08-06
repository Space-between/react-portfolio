import React from "react";
import profile from "./styles/image/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faBlogger,
  faFacebook,
  faGooglePlus,
  faTwitter,
  faLine,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

function Profile() {
  return (
    <div className="mb-56">
      <img
        className="h-48 rounded-full m-auto mt-20 border border-gray-200 p-1 shadow-lg hover:border-teal-200 cursor-pointer"
        src={profile}
        alt="me"
      />
      <div className="mt-5 flex justify-center">
        <a
          href="https://github.com/Space-between"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          <div className="text-xs">Github</div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005453949729"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-8 flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
          <div className="text-xs">Facebook</div>
        </a>
        <a
          href="https://www.instagram.com/taeyong_0101/"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-5 flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
          <div className="text-xs">Instagram</div>
        </a>
        <a
          href="https://twitter.com/xodyd1756"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-4 flex flex-col items-center text-gray-800 cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
          <div className="text-xs">Twitter</div>
        </a>
      </div>
      <div className="flex flex-col items-center mt-5 text-gray-800">
        <div className="text-4xl font-extrabold">
         Wassup!, I'm <span className="text-teal-500">Taeyong Kim</span>
        </div>
        <div className="text-base font-bold mb-5">
          <span className="text-teal-500">개발자</span> Developer
        </div>
        <div className="text-xl profile-text">
          게임보다 개발을 더 좋아하는 프론트엔드 개발자입니다.
        </div>
        <div className="text-xl profile-text">
          웹 개발은 사랑입니다.
          <span role="img" aria-label="sheep">
            😻
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
