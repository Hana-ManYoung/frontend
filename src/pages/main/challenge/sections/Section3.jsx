import Calendar from "../components/Calendar";

export default function Section3({ calendarData }) {
  return (
    <div className="mt-8 w-full flex">
      <div className="relative w-full">
        <h2 className="text-2xl font-bold">챌린지 참여 현황</h2>
        <img
          src={process.env.PUBLIC_URL + "/images/challenge/star_soon1.png"}
          className="absolute w-32 z-10 -top-[4.5rem] right-8"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/challenge/star_soon2.png"}
          className="absolute w-24 z-10 -top-[4.25rem] right-40"
          alt=""
        />
        <Calendar events={calendarData} />
      </div>
    </div>
  );
}
