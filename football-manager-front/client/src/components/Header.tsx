const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50">
      <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-60">
        JS Monorepo
      </span>
      <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">
          Github
        </span>
      </div>
    </header>
  );
};

export default Header;
