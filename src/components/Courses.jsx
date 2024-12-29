import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CoursesForm({ token }) {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
    instructor_name: "",
  });
  const navigateTo = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("Token missing!Please login first.");
      return;
    }
    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          title: course.title,
          description: course.description,
          badge_text: course.badge_text,
          badge_color: course.badge_color,
          instructor_name: course.instructor_name,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Course created:", response.data);
      toast.success("Course created successfully.");
      navigateTo("/list");
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error("Error creating course");
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] h-[500px] bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center items-center shadow-lg space-y-4"
      >
        <h1 className="text-black text-xl font-bold mb-8">Course</h1>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleInputChange}
          className="block w-full border rounded p-2"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleInputChange}
          className="block w-full border rounded p-2"
        />
        <input
          type="text"
          name="badge_text"
          placeholder="Badge Text"
          value={course.badge_text}
          onChange={handleInputChange}
          className="block w-full border rounded p-2"
        />
        <input
          type="text"
          name="badge_color"
          placeholder="Badge Color"
          value={course.badge_color}
          onChange={handleInputChange}
          className="block w-full border rounded p-2"
        />
        <input
          type="text"
          name="instructor_name"
          placeholder="Instructor Name"
          value={course.instructor_name}
          onChange={handleInputChange}
          className="block w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-red-400 text-white p-2 rounded hover:bg-red-600 transition-all"
        >
          Create course
        </button>
      </form>
    </div>
  );
}

export default CoursesForm;
