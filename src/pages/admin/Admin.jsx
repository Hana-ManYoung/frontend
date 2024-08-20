import BottomNav from "../common/BottomNav";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";

export default function Admin() {
  return (
    <>
      <SubHeader type="관리자용" color="text-rose-600" />
      <div className="relative h-full min-h-[calc(100vh-78px)] pt-[78px] bg-hana">
        <div className="w-full max-w-[1440px] min-h-[calc(100vh-78px)] mx-auto pt-6 pb-10 flex flex-col">
          <div className="text-2xl text-hana font-bold">관리자 페이지</div>
          <div className="mt-6 text-2xl">검색 메뉴</div>
          <div className="mt-4 flex">
            <div className="w-[20%]">Tab</div>
            <div className="w-[80%]">결과</div>
          </div>
        </div>
      </div>
      <div className="w-full border-t">
        <div className="max-w-[1440px] mx-auto mb-12">
          <BottomNav />
        </div>
      </div>
      <Footer color={"text-black"} bgColor={"bg-white"} />
    </>
  );
}
