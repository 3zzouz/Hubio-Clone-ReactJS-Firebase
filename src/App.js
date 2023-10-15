import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import React, { Suspense } from "react";
import "./index.css";
function App() {
  /*const [showLoading, setIsShowLoading] = useState(true);
  setTimeout(() => {
    setIsShowLoading(false);
  }, 900);*/
  const Login = React.lazy(() => import("./components/login"));
  const Join = React.lazy(() => import("./components/join"));
  const Space = React.lazy(() => import("./components/space"));
  const LandingPage = React.lazy(() => import("./components/landingPage"));
  const Forgetpassword = React.lazy(() =>
    import("./components/forgetpassword")
  );
  const User = React.lazy(() => import("./components/user"));
  const Study = React.lazy(() => import("./components/study"));
  /*let Component;
  switch (window.location.pathname) {
    case "/login":
      Component = Login;
      break;
    case "/join":
      Component = Join;
      break;
    case "/study":
      Component = study;
      break;
    case "/space":
      Component = Space;
      break;
    case "/ForgetPassword":
      Component = Forgetpassword;
      break;
    case "/MyCalendar":
      Component = MyCalendar;
      break;
    case "/User":
      Component = User;
      break;
    default:
      Component = LandingPage;
      break;
  }*/
  return (
    <>
      <Suspense
        fallback={
          <ClipLoader
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            color="#ff5f5f"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/study" element={<Study />} />
          <Route path="/space" element={<Space />} />
          <Route path="/ForgetPassword" element={<Forgetpassword />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
