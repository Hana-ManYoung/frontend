export const getCategoryKor = (category) => {
  if (category === "sho") return "쇼핑/뷰티";
  else if (category === "tra") return "여행/숙박";
  else if (category === "foo") return "식비";
  else if (category === "hom") return "주거/통신";
  else if (category === "mar") return "편의점/마트";
  else if (category === "car") return "교통/자동차";
  else if (category === "caf") return "카페/디저트";
  else if (category === "ent") return "문화/여가";
  else if (category === "etc") return "기타";
  else return "카테고리";
};

export const getCategoryBgColor = (category) => {
  if (category === "sho") return "#FF5894";
  else if (category === "tra") return "#FF2525";
  else if (category === "foo") return "#F57F29";
  else if (category === "hom") return "#BE308E";
  else if (category === "mar") return "#63ECFF";
  else if (category === "car") return "#17B945";
  else if (category === "caf") return "#93501F";
  else if (category === "ent") return "#3E5BC1";
  else if (category === "etc") return "#AAAAAA";
  else return "bg-gray-500";
};
