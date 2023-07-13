import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/home/Main";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};

export default HomeScreen;
