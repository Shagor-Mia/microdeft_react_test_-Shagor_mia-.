import React from "react";
import CourseList from "../components/List";
import Navbar from "../components/Navbar";

function CourseListPage({ token }) {
  return (
    <div>
      <Navbar />
      <CourseList token={token} />
    </div>
  );
}

export default CourseListPage;
