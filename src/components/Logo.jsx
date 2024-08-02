import "../App.css";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="logo" className="w-14" />
      <div className="ml-1 text-hana font-bold flex">
        <p className="mr-3 text-3xl">하나에서 만나 Young</p>
        <p className="flex items-end text-base">하나만영</p>
      </div>
    </div>
  );
}
