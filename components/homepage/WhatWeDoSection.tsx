export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Financial and Business Services",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
    },
    {
      title: "Consumer",
      color:
        "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
    },
    {
      title: "Technology, Media and Telecom",
      color:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
    },
    {
      title: "Manufacturing",
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Text */}
        <div className="flex-1 min-w-[300px] md:pr-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6 uppercase tracking-wide">
            WHAT DO WE DO
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-light">
            Improving business performance through purposeful innovation is in
            our DNA. Ayspire strives to inspire clients to embrace positive
            change and to give them the tools they need to succeed throughout
            their connected planning journey. Our energetic and experienced
            professionals deliver consistent results through comprehensive,
            collaborative services. Put simply, Ayspire helps companies solve
            their problems and build strong and sustainable solutions. We do
            this through:
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-800 dark:text-gray-100 space-y-1">
            <li>Customer Engagement</li>
            <li>Technology Enablement</li>
            <li>Strategy &amp; Operations</li>
            <li>Connected Planning Experience</li>
          </ul>
        </div>
        {/* Right: Masonry Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            <div
              className={`rounded-2xl shadow-lg p-6 font-semibold text-lg ${cards[0].color}`}
            >
              {cards[0].title}
            </div>
            <div
              className={`rounded-2xl shadow-lg p-6 font-semibold text-lg ${cards[1].color}`}
            >
              {cards[1].title}
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-24">
            <div
              className={`rounded-2xl shadow-lg p-6 font-semibold text-lg ${cards[2].color}`}
            >
              {cards[2].title}
            </div>
            <div
              className={`rounded-2xl shadow-lg p-6 font-semibold text-lg ${cards[3].color}`}
            >
              {cards[3].title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
