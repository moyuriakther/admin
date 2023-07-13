// import { useSelector } from "react-redux";

export default function useAuth() {
  // const auth = useSelector((state) => state.auth);
  const authData = JSON.parse(localStorage.getItem("auth"));
  // console.log(authData);
  if (authData?.accessToken && authData?.user) {
    return authData?.user.isAdmin;
  } else {
    return false;
  }
}
