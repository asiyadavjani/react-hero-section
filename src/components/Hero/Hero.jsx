import { Button } from "flowbite-react";
import { HiUsers, HiBookOpen, HiStar, HiAcademicCap } from "react-icons/hi";
import HeroCard from "./HeroCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const stats = [
  { icon: HiUsers, number: "10K+", label: "Students" },
  { icon: HiBookOpen, number: "200+", label: "Courses" },
  { icon: HiAcademicCap, number: "50+", label: "Teachers" },
  { icon: HiStar, number: "4.9", label: "Rating" },
];

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" },
      });

      tl.from(".hero-badge", { y: -30, opacity: 0 })
        .from(".hero-title", { y: 50, opacity: 0 }, "-=0.4")
        .from(".hero-text", { y: 30, opacity: 0 }, "-=0.5")
        .from(".hero-btns", { y: 30, opacity: 0 }, "-=0.5")
        .from(".hero-img", { x: 100, opacity: 0, scale: 0.9, duration: 1 }, "-=0.8")
        .from(".hero-card", { y: 50, opacity: 0, stagger: 0.15 }, "-=0.5");

      // Image upar neeche tairti rahe
      gsap.to(".hero-img", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      // Background shapes ghoomte rahein
      gsap.utils.toArray(".hero-blob").forEach((blob, i) => {
        gsap.to(blob, {
          x: "random(-80, 80)",
          y: "random(-60, 60)",
          scale: "random(0.8, 1.3)",
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center"
    >
      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="hero-blob absolute top-10 left-10 h-72 w-72 rounded-full bg-indigo-300 opacity-30 blur-3xl"></div>
      <div className="hero-blob absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-300 opacity-30 blur-3xl"></div>
      <div className="hero-blob absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-pink-200 opacity-30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 pt-16 pb-28 md:px-10 grid gap-12 lg:grid-cols-2 items-center">
        {/* ===== LEFT: Text ===== */}
        <div className="text-center lg:text-left">
          <span className="hero-badge inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            🚀 New courses every week
          </span>

          <h1 className="hero-title mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Learn Skills That{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Build Your Future
            </span>
          </h1>

          <p className="hero-text mb-8 text-lg sm:text-xl text-gray-600">
            Web development, design aur programming seekhein experts se —
            apni speed par, kahin se bhi.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button color="indigo" size="lg" pill>Explore Courses</Button>
            <Button color="light" size="lg" pill>Watch Demo</Button>
          </div>
        </div>

        {/* ===== RIGHT: Image ===== */}
        <div className="hero-img relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 blur-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Students learning"
            className="relative w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* ===== CARDS ===== */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <HeroCard
              key={item.label}
              icon={item.icon}
              number={item.number}
              label={item.label}
            />
          ))}
        </div>
      </div>

     

    </section>
  );
}