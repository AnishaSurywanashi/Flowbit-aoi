export default function Sidebar() {
  return (
    <aside
      data-testid="sidebar"
      className="w-[96px] bg-white border-r border-gray-200 h-full flex flex-col justify-between py-6"
    >
      {/* ===== TOP ICONS ===== */}
      <div className="flex flex-col items-center space-y-6">

        <SidebarItem icon="✈️" label="AOI Creation" bg="#efe4d2" />
        <SidebarItem icon="🏠" label="Dashboard" bg="#f4e9d6" />
        <SidebarItem icon="▦" label="Layers" bg="#efe4d2" />
      </div>

      {/* ===== BOTTOM ICONS ===== */}
      <div className="flex flex-col items-center space-y-6">
        <SidebarItem icon="👤" label="Profile" bg="#f4e9d6" />
        <SidebarItem icon="⚙️" label="Settings" bg="#efe4d2" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, bg }) {
  return (
    <div
      title={label}
      className="w-[56px] h-[56px] rounded-xl shadow flex items-center justify-center cursor-pointer transition-all"
      style={{ backgroundColor: bg }}
    >
      <span className="text-2xl">{icon}</span>
    </div>
  );
}
