import { KeenContext } from "@/context/Context";
import { useContext } from "react";
import { FaPhoneAlt, FaRegCommentDots, FaTrash, FaVideo } from "react-icons/fa";

const TimeLineCard = () => {
  const { timeline, sortingType } = useContext(KeenContext);

  const filteredTimeLine = timeline.filter((item) => {
    if (!sortingType || sortingType === "all") return true;
    else return item.type=== sortingType;
  });

  console.log(filteredTimeLine, "Filtered Timeline");

  return (
    <div className="py-5 flex flex-col gap-5">
      {filteredTimeLine.length > 0 ? (
        filteredTimeLine.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-sm rounded-2xl p-4 md:p-6 border border-slate-100 w-full hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl shrink-0"
                  >
                    {item.type === "Video" ? (
                      <FaVideo className="text-[#244D3F]" />
                    ) : item.type === "Calls" ? (
                      <FaPhoneAlt className="text-[#244D3F]" />
                    ) : (
                      <FaRegCommentDots className="text-[#244D3F]" />
                    )}
                  </div>

                  <div>
                    <h6 className="font-bold text-[#244D3F] text-sm md:text-base">
                      {`${item.type} with ${item.name}`}
                    </h6>
                    <p className="text-xs md:text-sm text-slate-500">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-400 bg-white shadow-sm rounded-lg p-15 border
               border-gray-100 w-full ">No Data Found</p>
      )}
    </div>
  );
};

export default TimeLineCard;
