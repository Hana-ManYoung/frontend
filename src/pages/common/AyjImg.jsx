export default function AyjImg() {
  let random = Math.floor(Math.random() * 2) + 1;
  return (
    <img
      src={process.env.PUBLIC_URL + `/images/ayj/${random}.png`}
      className="absolute right-0 bottom-0 w-0 md:w-48 lg:w-56"
      alt=""
    />
  );
}
