import { useEffect, useState } from "react";

import { FaCircleDot, FaRegCircleDot } from "react-icons/fa6";
import { SERVER_URL } from "../../../../etc/url";

import axios from "axios";
import LoadingModal from "../../../common/LoadingModal";
import { ModalBody } from "@chakra-ui/react";

export default function Quiz() {
  const [selected, setSelected] = useState(0);
  const [quizData, setQuizData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getQuiz = async () => {
        try {
          const result = await axios.get(SERVER_URL + "quiz.json");
          setQuizData(result.data.data[0]);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      getQuiz();
    }, 3000);
  }, []);

  const handleSubmit = () => {
    if (selected === quizData.answer) {
      alert("정답입니다!");
    } else {
      alert("틀렸습니다!");
    }
  };

  if (isLoading) return <LoadingModal />;
  return (
    <ModalBody>
      <div className="text-xl font-basic">
        <div className="font-bold flex">
          <div className="mr-2 text-emerald-600">Q. </div>
          <div className="leading-8">{quizData.question}</div>
        </div>
        <div className="my-8">
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 0 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(0)}
          >
            {selected === 0 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>① {quizData.options[0]}</p>
          </div>
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 1 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(1)}
          >
            {selected === 1 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>② {quizData.options[1]}</p>
          </div>
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 2 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(2)}
          >
            {selected === 2 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>③ {quizData.options[2]}</p>
          </div>
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 3 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(3)}
          >
            {selected === 3 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>④ {quizData.options[3]}</p>
          </div>
        </div>
      </div>
      <div
        className="mb-4 py-3 text-white text-xl text-center rounded-xl btn-hana-green cursor-pointer hover:opacity-85 transition-all duration-300"
        onClick={() => handleSubmit()}
      >
        제출하기
      </div>
    </ModalBody>
  );
}
