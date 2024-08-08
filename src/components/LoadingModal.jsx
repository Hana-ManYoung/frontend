export default function LoadingModal() {
  return (
    <div className="text-2xl h-[calc(100vh-48px-78px)] mx-auto flex flex-col justify-center items-center animate__animated animate__bounceIn">
      <div>잠시만 기다려주세요</div>
      <img src={"/images/hana/loading3.gif"} className="w-56" alt="" />
      <div className="flex">
        <div>불러오고 있어요</div>
        <div className="animate-dots"></div>
      </div>
    </div>
  );
}
