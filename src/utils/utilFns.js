import { user } from "./data";

const mockUserResponse = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ data: user });
      }, 400);
    } catch (error) {
      console.log("tha error :", error);
      reject({ message: error.message });
    }
  });
};

export { mockUserResponse };
