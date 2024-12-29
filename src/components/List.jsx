import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function CourseList() {
  const [course, SetCourse] = useState([]);
  const token = localStorage.getItem("token");

  const handleList = async () => {
    if (!token) {
      toast.error("Token missing!Please login first.");
      return;
    }
    try {
      const response = await axios.get(
        "https://react-interview.crd4lc.easypanel.host/api/course",

        { headers: { Authorization: `Bearer ${token}` } }
      );
      SetCourse(response.data.data.data);
      console.log(course);
    } catch (error) {
      console.error("Error getting course:", error);
      toast.error("Error getting courses");
    }
  };
  useEffect(() => {
    handleList();
  }, []);
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="grid grid-cols-4 gap-4">
        {course.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <p>{item.instructor_name}</p>
              <p>{item.badge_text}</p>

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view All
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
