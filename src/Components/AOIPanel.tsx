import { useApp } from "../context/AppContext";

export default function AOIPanel() {
  const { layerVisible, setLayerVisible } = useApp();

  return (
    <aside
      className="w-[360px] bg-white h-full border-r border-gray-200 flex flex-col"
      data-testid="aoi-panel"
    >
      {/* HEADER */}
      <header className="bg-[#efe4d2] h-[72px] px-4 flex items-center shadow-sm">
        <button className="text-xl">&lt;</button>
        <span className="ml-3 text-[#f38a26] text-[20px] font-medium">
          Define Area of Interest
        </span>
      </header>

      {/* CONTENT */}
      <div className="px-6 mt-6">
        
        <h2 className="text-[20px] font-semibold leading-6" data-testid="aoi-title">
          Define the <strong>area(s)</strong> where you will apply your object
          count & detection model
        </h2>

        <p className="mt-4 text-sm text-gray-700">Options:</p>

        {/* Search */}
        <div className="mt-3 space-y-4">
          <button className="w-full bg-[#f4e9d6] p-4 rounded-xl shadow text-left text-[#3b3b3b]">
            🔍 Search for a city, town… <br />
            <span className="text-gray-500 text-sm">or draw area on map</span>
          </button>

          {/* Upload */}
          <button className="w-full bg-[#efe4d2] p-4 rounded-xl shadow text-left text-[#3b3b3b]">
            📁 Uploading a shape file
          </button>
        </div>

        {/* Layer Toggle */}
        <label className="mt-6 flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={layerVisible}
            data-testid="layer-checkbox"
            onChange={(e) => setLayerVisible(e.target.checked)}
          />
          <span className="text-gray-700">WMS Layer Visible</span>
        </label>

      </div>
    </aside>
  );
}
