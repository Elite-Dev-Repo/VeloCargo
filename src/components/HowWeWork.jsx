import React from "react";

function HowWeWork() {
  const steps = [
    {
      title: "AI-Powered Tracking",
      description:
        "Our platform uses AI to provide real-time tracking and predictive analytics, ensuring you always know where your cargo is.",
    },
    {
      title: "Real-Time Visibility",
      description:
        "Gain complete visibility into your supply chain with our intuitive dashboard to monitor shipments and manage inventory.",
    },
    {
      title: "Seamless Coordination",
      description:
        "Our system facilitates seamless communication between shippers, carriers, and receivers for smooth operations.",
    },
    {
      title: "Global Network",
      description:
        "VeloCargo connects you to a vast network of carriers and logistics providers worldwide for efficient movement.",
    },
  ];

  // Map padding levels to specific Tailwind classes so the compiler sees them
  const paddingMap = {
    0: "pt-0",
    1: "pt-10",
    2: "pt-20",
    3: "pt-32",
  };

  return (
    <section className="min-h-screen w-full bg-primary py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center mb-16">
          <h2 className="text-4xl font-semibold text-background text-left">
            How We Work
          </h2>
          <p className="text-background/80 text-start max-w-2xl mt-4">
            VeloCargo streamlines logistics by leveraging AI-powered tracking
            and real-time visibility. Our platform ensures seamless coordination
            across global networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${paddingMap[index]} text-white w-60 flex flex-col items-start`}
            >
              <p className="text-5xl font-bold opacity-50 mb-4">0{index + 1}</p>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
