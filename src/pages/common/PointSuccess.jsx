export default function PointSuccess({ onClose }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/point.gif"}
          alt=""
          className="w-[45%]"
        />
        <div className="my-2 text-lg font-bold">
          포인트 적립이 완료되었어요!
        </div>
      </div>
      <div
        className="text-center my-3 py-2 btn-hana-green text-white text-lg rounded-lg cursor-pointer hover:opacity-80 duration-300"
        onClick={() => {
          onClose();
          window.location.href = process.env.PUBLIC_URL + "/";
        }}
      >
        메인으로 돌아가기
      </div>
    </>
  );
}
