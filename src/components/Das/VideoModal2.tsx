
import Close from "../icon/Close";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const VideoModal2: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#003976] p-4 rounded-lg shadow-lg">
        <button className="mb-4 text-right text-red-600" onClick={onClose}>
          {/* Close */}
          <Close />
          <div className="relative pb-9/16 h-full overflow-hidden">
            <iframe
              className=" md:w-[700px] w-[350px] md:h-[315px] h-[400px]"
              // width="700"
              // height="315"
              src="https://www.youtube.com/embed/GxYfPLD1Eb4?si=zjl0AyRlWY0be8Eh&amp;controls=0"
              title="YouTube Player player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div>
            <p className="py-2 bg-white w-full rounded-xl mt-2 flex items-center justify-center text-yellow-300 font-bold text-2xl">
              Close
            </p>
          </div>
        </button>
        <div className="relative pb-9/16 h-0 overflow-hidden"></div>
      </div>
    </div>
  );
};

export default VideoModal2;
