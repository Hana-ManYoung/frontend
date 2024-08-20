export default function Section1({ children, selected, setSelected }) {
  return (
    <>
      <div className="text-xl font-bold">정보</div>
      <div className="mt-2 flex gap-4">
        <div className="w-[50%] text-hana rounded-md">
          <div className="h-40 mx-auto px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-50">
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-end">
                <h1 className="text-2xl font-bold">
                  손웅정님{" "}
                  <span className="text-lg text-gray-600">환영합니다</span>
                </h1>
                <p className="text-black border-b border-black cursor-pointer">
                  관계 추가하기
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-600 font-basic font-bold">
                자녀 정보
              </div>
              {children.map((child, index) => (
                <ChildRow
                  key={index}
                  name={child.name}
                  account={child.account}
                  date={child.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="relative h-40 mx-auto px-6 py-4 text-white bg-gradient-to-l from-emerald-600 to-teal-700 overflow-hidden rounded-md">
            <img
              src={process.env.PUBLIC_URL + "/images/hana/logo.png"}
              alt=""
              className="absolute h-36 right-7 -bottom-8 opacity-50 filter-white"
            />
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-end">
                <div className="text-xl flex items-end">
                  <div>하나만영 등록 계좌</div>
                  <div className="ml-4 text-base font-basic">000-01-156748</div>
                </div>
                <div className="text-sm border-b border-white cursor-pointer">
                  이체 일자 변경
                </div>
              </div>
              <div>
                <div className="text-sm">자녀 용돈 이체일</div>
                <div className="font-basic">매월 1일 500000원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-xl font-bold">용돈 관리</div>
      <div className="mt-2 flex">
        <div className="flex gap-5">
          {children.map((child, index) => {
            return (
              <div
                className={`px-4 py-2 rounded-3xl text-xl shadow-md cursor-pointer transition-all duration-300 hover:opacity-85 ${
                  selected === index
                    ? "btn-hana-green text-white"
                    : "bg-gray-100 text-black"
                }`}
                onClick={() => setSelected(index)}
              >
                {child.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-72 mt-4 flex gap-x-4">
        <div className="w-[50%] px-4 py-5 border rounded-lg">
          <div className="text-2xl text-gray-600 font-bold">
            {children[selected].name}님
          </div>
          <div className="mt-4 text-xl flex">
            <div className="text-hana font-bold">용돈 조르기 요청 금액</div>
            <div className="ml-4 text-gray-600 font-basic">50,000원</div>
          </div>
          <div className="mt-2">
            <div className="text-xl text-hana font-bold">챌린지 부여</div>
            <input
              type="text"
              className="w-full h-14 mt-2 pl-5 text-lg border-2 rounded-2xl border-gray-400"
              placeholder="챌린지 입력"
            />
          </div>
          <div className="w-full flex gap-3">
            <div className="w-[50%] mx-auto my-3 px-2 py-3 text-xl text-center rounded-md btn-hana-blue text-white transform hover:opacity-85 duration-300 cursor-pointer">
              챌린지 부여하기
            </div>
            <div className="w-[50%] mx-auto my-3 px-2 py-3 text-xl text-center rounded-md btn-hana-green text-white transform hover:opacity-85 duration-300 cursor-pointer">
              용돈 보내기
            </div>
          </div>
        </div>
        <div className="w-[50%] px-4 py-5 border rounded-lg">
          <h2 className="text-xl text-gray-500 font-bold">용돈 조르기 기록</h2>
          <div className="mt-2 px-2 py-2 h-52 border rounded-lg bg-white overflow-auto scroll-auto">
            <div className="w-full pb-2 text-center font-bold text-hana border-b flex">
              <div className="w-[25%]">챌린지 시작</div>
              <div className="w-[25%]">챌린지 종료</div>
              <div className="w-[30%]">챌린지</div>
              <div className="w-[20%]">금액</div>
            </div>
            <div>
              {children[selected].pocketMoneyRecord.map((record, index) => (
                <div
                  className="w-full py-1 text-center border-b font-basic flex"
                  key={index}
                >
                  <div className="w-[25%]">{record.startDate}</div>
                  <div className="w-[25%]">{record.endDate}</div>
                  <div className="w-[30%]">{record.challenge}</div>
                  <div className="w-[20%]">{record.amount}원</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ChildRow({ name, account, date }) {
  return (
    <div className="w-full font-basic flex">
      <div className="w-[20%] font-bold">{name}님</div>
      <div className="w-[55%] flex">
        <p className="font-bold">계좌번호</p>
        <p className="ml-5 text-black">{account}</p>
      </div>
      <div className="w-[25%] flex justify-between">
        <p className="font-bold">등록일</p>
        <p className="text-black">{date ? date : "대기중"}</p>
      </div>
    </div>
  );
}
