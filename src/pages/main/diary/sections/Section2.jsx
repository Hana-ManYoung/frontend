import { IoMdSquare } from "react-icons/io";
import {
  getCategoryBgColor,
  getCategoryKor,
} from "../../../../js/getCategoryKor";

export default function Section2({ categorySums }) {
  return (
    <div className="flex">
      <div className="w-[50%]">{}</div>
      <div className="w-[50%]">
        {Object.keys(categorySums)
          .sort()
          .map(
            (key, index) =>
              categorySums[key] !== 0 && (
                <div
                  key={index}
                  className="w-[235px] flex items-center animate__animated animate__fadeInDown"
                >
                  <IoMdSquare
                    size="25"
                    color={getCategoryBgColor(key)}
                    className="mr-1 w-[10%]"
                  />
                  <p className="mr-2 w-[45%]">{getCategoryKor(key)}</p>
                  <p className="w-[45%] text-right">
                    {categorySums[key] > 0
                      ? "+ " + categorySums[key].toLocaleString("ko-KR")
                      : (-categorySums[key]).toLocaleString("ko-KR")}
                    원
                  </p>
                </div>
              )
          )}
      </div>
    </div>
  );
}
