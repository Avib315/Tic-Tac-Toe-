import React, { createContext, useContext, useState } from "react";
const UserInfoContext = createContext();
export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  const updateUserInfo = (newUserInfo) => {

    setUserInfo(newUserInfo);
  };
console.log(userInfo);
  return { userInfo, updateUserInfo };
};
export default UserInfoContext;
