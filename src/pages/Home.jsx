import Navbar from "../components/Navbar";
import CoursesForm from "../components/Courses";

function Home({ token }) {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold justify-items-center">Courses</h1>

      <CoursesForm token={token} />
    </div>
  );
}

export default Home;
