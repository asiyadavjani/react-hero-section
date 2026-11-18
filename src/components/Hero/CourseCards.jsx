import { useState } from "react";

const courses = [
  { id: 1, title: "HTML & CSS Basics", teacher: "Ali Khan", lessons: 20, price: 0, emoji: "🌐", color: "bg-orange-100" },
  { id: 2, title: "JavaScript Mastery", teacher: "Sara Ahmed", lessons: 35, price: 2999, emoji: "⚡", color: "bg-yellow-100" },
  { id: 3, title: "React for Beginners", teacher: "Usman Ali", lessons: 28, price: 3999, emoji: "⚛️", color: "bg-sky-100" },
  { id: 4, title: "Python Basics", teacher: "Ayesha Noor", lessons: 18, price: 0, emoji: "🐍", color: "bg-green-100" },
  { id: 5, title: "UI/UX Design", teacher: "Hamza Raza", lessons: 24, price: 4999, emoji: "🎨", color: "bg-pink-100" },
  { id: 6, title: "Git & GitHub", teacher: "Fatima Zahra", lessons: 10, price: 0, emoji: "🐙", color: "bg-purple-100" },
];

export default function CourseCards() {
  const [filter, setFilter] = useState("all");

  const shownCourses = courses.filter((c) => {
    if (filter === "free") return c.price === 0;
    if (filter === "paid") return c.price > 0;
    return true;
  });

  return (
    <section className="bg-white px-4 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-2 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Popular <span className="text-indigo-600">Courses</span>
        </h2>
        <p className="mb-8 text-center text-gray-600">Free aur paid courses — apni pasand ka chunein</p>

        {/* Filter buttons */}
        <div className="mb-10 flex justify-center gap-3">
          {["all", "free", "paid"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                filter === f ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shownCourses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Top part */}
              <div className={`relative flex h-40 items-center justify-center text-6xl ${course.color}`}>
                {course.emoji}
                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white ${
                    course.price === 0 ? "bg-green-500" : "bg-indigo-600"
                  }`}
                >
                  {course.price === 0 ? "FREE" : "PAID"}
                </span>
              </div>

              {/* Bottom part */}
              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold text-gray-900">{course.title}</h3>
                <p className="mb-4 text-sm text-gray-500">
                  👨‍🏫 {course.teacher} · 📚 {course.lessons} lessons
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-extrabold text-gray-900">
                    {course.price === 0 ? "Free" : `Rs ${course.price}`}
                  </p>
                  <button
                    className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${
                      course.price === 0 ? "bg-green-500 hover:bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    {course.price === 0 ? "Enroll Free" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}