import { Card } from "flowbite-react";

export default function HeroCard({ icon: Icon, number, label }) {
  return (
    <Card className="hero-card transition-[translate,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{number}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </Card>
  );
}