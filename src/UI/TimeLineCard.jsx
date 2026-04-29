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
    <div className="py-10 flex flex-col gap-5">
      {filteredTimeLine.length > 0 ? (
        filteredTimeLine.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg px-5 py-5 border
               border-gray-100 w-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 bg-gray-50 rounded-2xl flex
                   items-center justify-center text-2xl"
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
                    <h6 className="font-bold text-[#244D3F]">
                      {`${item.type} with ${item.name}`}
                    </h6>
                    <p className="text-sm text-gray-500">{item.date}</p>
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
