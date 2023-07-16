import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state.auth);
  const authData = JSON.parse(localStorage.getItem("auth"));
  const userInfo = authData?.user;
  // console.log(auth, "hello");
  // console.log(userInfo, "aje baje");
  if (userInfo?.token && userInfo) {
    return userInfo?.isAdmin;
  } else if (auth?.token && auth) {
    return true;
  } else {
    return false;
  }
}
