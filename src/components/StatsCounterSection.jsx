// components/StatsCounterSection.jsx
import CountUp from "react-countup";

const StatsCounterSection = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Trusted by Our Users</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-4xl  font-extrabold text-blue-600">
            <CountUp end={500} duration={5} />+
          </h3>
          <p className="mt-2 text-lg font-medium">Tasks Posted</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-green-600">
            <CountUp end={200} duration={5} />+
          </h3>
          <p className="mt-2 text-lg font-medium">Freelancers</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-purple-600">
            <CountUp end={1200} duration={5} />+
          </h3>
          <p className="mt-2 text-lg font-medium">Bids Placed</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-red-600">
            <CountUp end={50} duration={5} />+
          </h3>
          <p className="mt-2 text-lg font-medium">Verified Employers</p>
        </div>
      </div>
      <hr className="text-2xl font-bold mt-10" />
    </section>
  );
};

export default StatsCounterSection;
