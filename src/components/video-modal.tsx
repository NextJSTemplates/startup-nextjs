import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & ({
  channel: 'youtube';
  videoId: string;
}| {
  channel?: 'custom';
  src: string;
})

export  default  function VideoModal ({ isOpen, onClose,...props }: PropsType) {
  if (!isOpen) return null;

  let src = '';

  if(props.channel === 'youtube'){
    src = `https://www.youtube.com/embed/${props.videoId}`
  } else {
    src = props.src
  }

  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="relative max-w-4xl w-full bg-gray-900">
        <button
          onClick={onClose}
          className="absolute -right-4 translate-x-full -top-2 leading-none text-white text-7xl"
        >
          <span className='sr-only'>Close modal</span>
          &times;
        </button>
        <iframe
          width="100%"
          height="500"
          src={src}
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  );
};