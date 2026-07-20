import { useState, useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ProjectDetail from "./components/ProjectDetail";

function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <Hero />
      <Resume />
      <Works />
      <Journal />
      <Footer />
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
