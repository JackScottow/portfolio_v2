import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const success = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="m-auto text-center">
        <p className="py-5 text-4xl text-gray-300">
          Thanks for your message!
          <FontAwesomeIcon icon={faFaceSmile} className="pl-2 text-teal-300" />
        </p>

        <Link href="/#contact" className="text-gray-300 hover:text-current">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          <p className="text-xl">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default success;
