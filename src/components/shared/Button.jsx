export default function Button({ handleClick, children }) {
  return (
    <button
      onClick={() => {
        if (typeof handleClick == "function") {
          handleClick();
        }
      }}
      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-indigo-500 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20 cursor-pointer"
    >
      <span className="text-lg tracking-wider uppercase">{children}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </button>
  );
}
