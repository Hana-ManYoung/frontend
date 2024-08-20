import { useState } from "react";
import BottomNav from "../common/BottomNav";
import Footer from "../common/Footer";
import SubHeader from "../common/SubHeader";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import { childrenSample } from "../../data/childrenSample";

export default function Parent() {
  const [selected, setSelected] = useState(0);
  const children = childrenSample;
  return (
    <div className="animate__animated animate__fadeIn">
      <SubHeader type="부모님용" color="text-black" />
      <div className="relative h-full min-h-[calc(100vh-78px)] pt-[78px] bg-hana">
        <div className="w-full max-w-[1440px] min-h-[calc(100vh-78px)] mx-auto pt-6 pb-10 flex flex-col">
          <Section1
            children={children}
            selected={selected}
            setSelected={setSelected}
          />
          <Section2 />
        </div>
      </div>
      <div className="w-full border-t">
        <div className="max-w-[1440px] mx-auto mb-12">
          <BottomNav />
        </div>
      </div>
      <Footer color={"text-black"} bgColor={"bg-white"} />
    </div>
  );
}
