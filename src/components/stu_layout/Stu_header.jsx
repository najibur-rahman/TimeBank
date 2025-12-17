
function Stu_header() {
  return (
    <div className="w-full bg-white shadow-sm rounded-b-xl">
      <div className="flex items-center justify-between px-6 py-4">
        
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Welcome back, Najibur!
          </h1>
          </div>

        {/* Middle: Credits + Switch button */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center gap-2 rounded-full bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-pink-600 transition-colors">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-pink-400 text-[10px]">
              ⏺
            </span>
            <span>100 Credits</span>
          </button>

          <button className="rounded-full bg-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-purple-700 transition-colors">
            Switch to Mentor
          </button>

          {/* Right: Avatar */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
              N
            </div>
            <span className="mt-0.5 text-[9px] text-gray-400">
              ID: Najibur-135
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stu_header;
