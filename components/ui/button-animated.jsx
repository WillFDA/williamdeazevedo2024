const ButtonAnimated = ({ children }) => {
  return (
    <button className="items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:scale-[1.02] hover:bg-primary/90 dark:shadow-foreground/5 h-10 px-8 relative z-50 flex -translate-y-4 gap-2 rounded-lg group ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 text-xl py-6">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
      {children}
    </button>
  );
};

export default ButtonAnimated;
