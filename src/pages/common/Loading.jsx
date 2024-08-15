export default function Loading() {
  let random = Math.floor(Math.random() * 2) + 1;
  return (
    <div className="text-xl h-[calc(100vh-48px-78px)] mx-auto flex flex-col justify-center items-center animate__animated animate__pulse">
      <div>잠시만 기다려주세요</div>
      <img
        src={`/images/hana/loading${random}.gif`}
        className="my-4 w-64"
        alt=""
      />
      <div className="flex">
        <div>로딩중</div>
        <div className="animate-dots"></div>
      </div>
    </div>
  );
}
