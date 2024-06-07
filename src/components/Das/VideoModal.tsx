import { useState } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <button className="mb-4 text-right text-red-600" onClick={onClose}>
          Close
          <div className="relative pb-9/16 h-full overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c-fQ3OtGWho?si=K7p7J-EVsmCGexaw"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>
          </div>
        </button>
        <div className="relative pb-9/16 h-0 overflow-hidden">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c-fQ3OtGWho?si=K7p7J-EVsmCGexaw"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
