import Navbar from "../components/Navbar";
import CoursesForm from "../components/Courses";

function Home({ token }) {
  return (
    <div>
      <Navbar />
      <div className="m-4">
        <CoursesForm token={token} />
      </div>
    </div>
  );
}

export default Home;
