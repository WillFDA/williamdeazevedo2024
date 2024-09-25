import Logo from "./logo";
import ToggleTheme from "./toggle-theme";
const Header = () => {
  return (
    <header
      style={{ backdropFilter: "blur(50px)" }}
      className="blurBackground sticky top-4 z-[100] mx-auto w-4/5 rounded-xl border-black/10 dark:border-white/10 max-md:top-0 max-md:w-full max-md:rounded-none max-md:border-b max-md:px-2 max-md:py-1 md:border"
    >
      <div className="container flex h-16 items-center justify-between space-x-4 px-4 sm:space-x-0">
        <Logo />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
