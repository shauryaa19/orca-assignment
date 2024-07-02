import LeftSidebar from "./components/LeftSidebar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 w-screen">
      <LeftSidebar />
      <Hero />
      <RightSidebar />
    </div>
  );
}
