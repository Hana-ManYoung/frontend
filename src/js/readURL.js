import axios from "axios";
import { OCR_URL } from "../etc/url";

let base64String = "";

export const readURL = (input) => {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
};

export const readBase64 = (input, callback) => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const result = e.target.result;
      base64String = result.split(",")[1];
      handleSubmit(callback);
    };
    reader.onerror = function (error) {
      callback(null);
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    callback(null);
  }
};

const handleSubmit = async (callback) => {
  try {
    const response = await axios.post(
      OCR_URL,
      {
        version: "V2",
        requestId: "string",
        timestamp: Date.now(),
        lang: "ko",
        images: [
          {
            format: "png",
            data: base64String,
            name: "string",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-OCR-SECRET": "Z1hKdklITFNERWJCVFdBd3NaZUZiS3lWb2xOVXByTlU=",
        },
      }
    );
    callback(findSchoolName(response.data.images[0].fields));
  } catch (error) {
    console.log(error);
  }
};

const findSchoolName = (data) => {
  // 데이터를 순회하며 inferText 속성에서 "학교"로 끝나는 문자열을 찾음
  for (const item of data) {
    if (item.inferText.endsWith("학교")) {
      return item.inferText;
    }
  }
  return null; // "학교"로 끝나는 문자열이 없을 경우
};
