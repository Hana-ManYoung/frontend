import ChallengeCard from "../components/ChallengeCard";

export default function Section2({ challengeInfo }) {
  return (
    <div className="mt-8 flex-1">
      <h1 className="text-2xl font-bold flex items-center">
        금주의 챌린지
        <img
          src={process.env.PUBLIC_URL + "/images/icons/flame.png"}
          width="35px"
          className="ml-1"
          alt=""
        />
      </h1>
      <div className="mt-4 flex gap-5">
        <ChallengeCard
          data={challengeInfo[0]}
          bg={"bg-blue-50"}
          imgUrl={"/images/challenge/quiz.png"}
        />
        <ChallengeCard
          data={challengeInfo[1]}
          bg={"bg-red-50"}
          imgUrl={"/images/challenge/plan.png"}
        />
      </div>
      <div className="mt-4 flex gap-5">
        <ChallengeCard
          data={challengeInfo[2]}
          bg={"bg-amber-50"}
          imgUrl={"/images/challenge/account.png"}
        />
        <ChallengeCard
          data={challengeInfo[3]}
          bg={"bg-purple-50"}
          imgUrl={"/images/challenge/tarot.png"}
        />
      </div>
      <div className="mt-4 flex gap-5">
        <ChallengeCard
          data={challengeInfo[4]}
          bg={"bg-stone-100"}
          imgUrl={"/images/challenge/parent.png"}
        />
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
}
