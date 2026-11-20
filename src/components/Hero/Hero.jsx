// Hero section — sirf React + Tailwind (koi extra package nahi)
// Is file ko kisi bhi React + Tailwind project mein copy karke chala sakte hain.

const stats = [
  { icon: "👩‍🎓", number: "10K+", label: "Students" },
  { icon: "📚", number: "200+", label: "Courses" },
  { icon: "🎓", number: "50+", label: "Teachers" },
  { icon: "⭐", number: "4.9", label: "Rating" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center">
      {/* Animations ki CSS (yahin rakhi hai taake alag CSS file ki zaroorat na pade) */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(80px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-15px); }
        }
        @keyframes heroBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(40px, -30px) scale(1.15); }
        }
      `}</style>

      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-indigo-300 opacity-30 blur-3xl animate-[heroBlob_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-300 opacity-30 blur-3xl animate-[heroBlob_10s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-pink-200 opacity-30 blur-3xl animate-[heroBlob_12s_ease-in-out_infinite]"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-16 md:px-10 grid gap-12 lg:grid-cols-2 items-center">
        {/* ===== LEFT: Text ===== */}
        <div className="text-center lg:text-left">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 animate-[heroFadeUp_0.8s_ease-out_both]">
            🚀 New courses every week
          </span>

          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 animate-[heroFadeUp_0.8s_ease-out_0.2s_both]">
            Learn Skills That{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Build Your Future
            </span>
          </h1>

          <p className="mb-8 text-lg sm:text-xl text-gray-600 animate-[heroFadeUp_0.8s_ease-out_0.4s_both]">
            Web development, design aur programming seekhein experts se —
            apni speed par, kahin se bhi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[heroFadeUp_0.8s_ease-out_0.6s_both]">
            <a
              href="#courses"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-105 hover:shadow-xl"
            >
              Explore Courses
            </a>
            <a
              href="#"
              className="rounded-full border border-gray-200 bg-white px-8 py-3 text-lg font-semibold text-gray-800 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              ▶ Watch Demo
            </a>
          </div>
        </div>

        {/* ===== RIGHT: Image ===== */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-[heroFadeLeft_1s_ease-out_0.5s_both]">
          <div className="animate-[heroFloat_4s_ease-in-out_2s_infinite]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Students learning"
              className="relative w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* ===== CARDS ===== */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, index) => (
            <div
              key={item.label}
              style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-[heroFadeUp_0.6s_ease-out_both]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                {item.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{item.number}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
