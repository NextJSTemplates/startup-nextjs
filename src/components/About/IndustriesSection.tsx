import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section className="pt-24">
      <div className="mb-12 w-[30%] rounded-se-[70px] bg-black py-6 text-white text-center shadow-md">
          <h2 className="text-2xl font-bold">Industries We Serve</h2>
      </div>

      <div className="container mx-auto">
        <div className="mt-6 flex flex-wrap gap-4 px-8">
          {[
            "E-Commerce",
            "Education",
            "Healthcare",
            "Real Estate",
            "NFT",
            "Travel",
            "Food",
            "Entertainment",
          ].map((item) => (
            <button
              key={item}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                item === "E-Commerce"
                  ? "bg-black text-white"
                  : "border-black text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* E-Commerce Content */}
        <div className="mt-10 grid grid-cols-1 items-center gap-6 px-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">E-Commerce</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              e-Commerce is one of the fastest growing business models as every
              retail business is reaching the digital landscape. Build a
              scalable and robust e-store with an experienced team. Grow with
              proper cart management, payment integration, social media
              integration, order management, tracking, and product management to
              reach greater heights with the Top website and app development
              company.
            </p>
            <button className="mt-6 rounded-full border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
              Get A Free Quote
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/developer-dark.jpg"
              alt="Developer coding"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-black to-white-900 px-8 py-12 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl leading-snug font-bold">
                More Than 5 Years
                <br /> In The Game And We're <br /> Just Getting Started.
              </h3>
              <p className="mt-4 max-w-md text-sm text-gray-300">
                We are on a mission to build a brand with the goal of providing
                quality IT development. Our team takes every project like it’s
                our first and works on it like specialists. With 5+ years of
                experience, we have served clients in every type of industry and
                have rich knowledge in the field.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {[
                ["5+", "Years of Experience"],
                ["50+", "Developers"],
                ["100+", "Happy Clients"],
                ["20+", "Countries"],
                ["40+", "Website Designed"],
                ["100+", "Apps Developed"],
                ["10+", "AI & IoT Solutions"],
                ["10+", "Blockchain"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg bg-white p-4 text-center text-black shadow transition hover:scale-105"
                >
                  <p className="text-xl font-bold">{value}</p>
                  <p className="mt-1 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
