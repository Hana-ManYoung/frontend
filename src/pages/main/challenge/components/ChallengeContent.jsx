import { ModalCloseButton, ModalHeader } from "@chakra-ui/react";
import Saving from "./Saving";
import PocketMoney from "./PocketMoney";
import Quiz from "./Quiz";

export default function ChallengeContent({ data }) {
  return [
    <>
      <ModalHeader>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + data.url}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <Quiz />
    </>,
    <></>,
    <>
      <ModalHeader>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + data.url}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <Saving />
    </>,
    <></>,
    <>
      <ModalHeader>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + data.url}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <PocketMoney />
    </>,
  ][data.id];
}
