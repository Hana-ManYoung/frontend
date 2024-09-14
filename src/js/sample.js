const transformData1 = (data) => {
  // 카테고리와 기본 값으로 초기화
  const transformed = {
    name: "내 소비 동향",
    "식비/간식": 0,
    "미용/패션": 0,
    교통비: 0,
    "문화/취미": 0,
    "교육/학습": 0,
    "디지털 콘텐츠/쇼핑": 0,
    "기타/예비/용돈": 0,
  };

  // 데이터 집계
  data.forEach((item) => {
    const categoryName = getCategoryKor(item.diary_item_category);
    if (categoryName) {
      // 금액이 0 이하일 경우 0으로 설정
      const amount = Math.max(0, -item.diary_item_amount);
      transformed[categoryName] += amount;
    }
  });

  return [transformed];
};

const transformData2 = (data) => {
  // 카테고리와 기본 값으로 초기화
  const transformed = {
    name: "내 소비 동향",
    "식비/간식": 0,
    "미용/패션": 0,
    교통비: 0,
    "문화/취미": 0,
    "교육/학습": 0,
    "디지털 콘텐츠/쇼핑": 0,
    "기타/예비/용돈": 0,
  };

  // 데이터 집계
  data.forEach((item) => {
    const categoryName = getCategoryKor(item.diary_item_category);
    if (categoryName) {
      // 금액이 0 이하일 경우 0으로 설정
      const amount = Math.max(0, -item.diary_item_amount);
      transformed[categoryName] += amount;
      console.log(amount);
    }
  });

  // 모든 카테고리 값의 총합을 계산
  const total = Object.values(transformed).reduce(
    (acc, value) => acc + (typeof value === "number" ? value : 0),
    0
  );

  // 백분율로 변환
  Object.keys(transformed).forEach((key) => {
    if (key !== "name") {
      transformed[key] = ((transformed[key] / total) * 100).toFixed(2); // 소수점 2자리까지 표시
    }
  });

  return [transformed];
};
