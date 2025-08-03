type IconProps = {
  className?: string;
};

const DemoIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
    <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
    <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
    <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const HeadsetIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3Z"></path>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3Z"></path>
  </svg>
);

function SideButtons() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-0 z-50 hidden md:block">
      <div className="relative">
        <div className="flex flex-col w-16 bg-[#5F6368]  opacity-30 rounded-r-2xl shadow-lg overflow-hidden ">
          
          <button className="flex flex-col items-center justify-center h-24 gap-2 hover:bg-gray-400/50 transition-colors duration-200 text-white">
            <DemoIcon className="w-8 h-8" />
            <span className="font-bold text-lg">Demo</span>
          </button>
          
          <hr className="border-white" />
          
          <button className="flex flex-col items-center justify-center h-24 gap-2 hover:bg-gray-400/50 transition-colors duration-200 text-white">
            <HeadsetIcon className="w-8 h-8" />
            <span className="font-bold text-lg">مشاوره</span>
          </button>

        </div>

        <div
  className="absolute top-1/2 -translate-y-1/2 left-full h-16 w-5 bg-[#5F6368] opacity-30 flex items-center justify-center shadow-lg"
  style={{ borderRadius: "0 16px 13px 0" }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
  </svg>
</div>

      </div>
    </div>
  );
}

export default SideButtons;