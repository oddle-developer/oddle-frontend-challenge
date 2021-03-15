import { user, followers, updateUser } from "./data";

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

const mockFollowersResponse = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ data: followers });
      }, 400);
    } catch (error) {
      console.log("tha error :", error);
      reject({ message: error.message });
    }
  });
};

const mockUpdateUserResponse = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ data: updateUser });
      }, 400);
    } catch (error) {
      console.log("tha error :", error);
      reject({ message: error.message });
    }
  });
};

export { mockUserResponse, mockFollowersResponse, mockUpdateUserResponse };
