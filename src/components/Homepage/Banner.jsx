import { Plus } from "lucide-react";
import friends from "@/data/friends.json";

const Banner = () => {
  const totalFriends = friends.length;
  const onTrackCount = friends.filter((f) => f.status === "On-Track").length;
  const needAttentionCount = friends.filter(
    (f) => f.status === "Almost Due" || f.status === "Overdue",
  ).length;

  const summaryData = [
    { id: 1, value: totalFriends, label: "Total Friends" },
    { id: 2, value: onTrackCount, label: "On Track" },
    { id: 3, value: needAttentionCount, label: "Need Attention" },
    { id: 4, value: "12", label: "Interactions This Month" },
  ];

  return (
    <section className="px-4 pt-32 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-[48px] font-extrabold leading-tight text-slate-800">
            Friends to keep close in your life
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-500 ">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="mt-8 btn btn-lg rounded-xl bg-[#1F5C4A] text-white shadow-lg border-none hover:bg-[#164235] px-8">
            <Plus size={24} />
            <span>Add a Friend</span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {summaryData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm "
            >
              <h3 className="text-3xl font-black text-[#1F5C4A] ">
                {item.value}
              </h3>
              <p className="mt-2 text-lg font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-b border-slate-200"></div>
      </div>
    </section>
  );
};

export default Banner;
