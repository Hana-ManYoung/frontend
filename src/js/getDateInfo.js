let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

const koreanDays = ["일", "월", "화", "수", "목", "금", "토"];

let koreanDay = koreanDays[day];

export { year, month, date, koreanDay };
