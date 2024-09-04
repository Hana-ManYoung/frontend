import ChallengeCard from "../components/ChallengeCard";

export default function Section2({ challengeInfo, todayChallenge }) {
  const alreadyDone = (data) => {
    return todayChallenge.some((item) => data.code_id === item.code_id);
  };
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
          done={alreadyDone(challengeInfo[0])}
        />
        <ChallengeCard
          data={challengeInfo[1]}
          bg={"bg-red-50"}
          imgUrl={"/images/challenge/plan.png"}
          done={alreadyDone(challengeInfo[1])}
        />
      </div>
      <div className="mt-4 flex gap-5">
        <ChallengeCard
          data={challengeInfo[2]}
          bg={"bg-amber-50"}
          imgUrl={"/images/challenge/account.png"}
          done={alreadyDone(challengeInfo[2])}
        />
        <ChallengeCard
          data={challengeInfo[3]}
          bg={"bg-purple-50"}
          imgUrl={"/images/challenge/tarot.png"}
          done={alreadyDone(challengeInfo[3])}
        />
      </div>
      <div className="mt-4 flex gap-5">
        <ChallengeCard
          data={challengeInfo[4]}
          bg={"bg-stone-100"}
          imgUrl={"/images/challenge/parent.png"}
          done={alreadyDone(challengeInfo[4])}
        />
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
}
