import { useMap } from "react-leaflet";

export default function ZoomControls() {
  const map = useMap();

  return (
    <div className="absolute right-6 bottom-32 z-[1000] flex flex-col gap-3">
      <button
        onClick={() => map.zoomIn()}
        className="bg-white h-10 w-10 rounded-lg shadow flex items-center justify-center text-xl"
      >
        +
      </button>

      <button
        onClick={() => map.zoomOut()}
        className="bg-white h-10 w-10 rounded-lg shadow flex items-center justify-center text-xl"
      >
        –
      </button>
    </div>
  );
}
