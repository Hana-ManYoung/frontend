import { useState } from "react";
import { readBase64, readURL } from "../../../../js/readURL";

export default function Section5({ school, setSchool }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleFileChange = (e) => {
    readURL(e.target);
    readBase64(e.target, setSchool);
  };

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className="w-full">
      <div className="min-h-32 text-sm flex flex-col items-center">
        <img id="preview" alt="" className="w-36" />
        <span className="text-lg mr-2">학생증 사진을 등록해보세요!</span>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="mt-8 ml-2">
        학교 이름
        <span className="text-xs ml-2 text-gray-500">
          (AI가 인식한 이름과 다르다면 직접 추가해주세요)
        </span>
      </div>
      <input
        type="text"
        className="w-full mt-2 pl-5 h-16 text-xl border-2 rounded-2xl border-gray-400"
        placeholder="학교 입력"
        onChange={(e) => setSchool(e.target.value)}
        value={school}
      />
    </div>
  );
}
