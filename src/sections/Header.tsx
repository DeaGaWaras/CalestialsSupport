export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#Home"
          className="nav-item hover:bg-white/70 hover:text-gray-900"
        >
          Home
        </a>
        <a href="#Price" className="nav-item hover:bg-white/70 hover:text-gray-900">
          Pricing
        </a>
        <a href="#Testi" className="nav-item hover:bg-white/70 hover:text-gray-900">
          Testimoni
        </a>
        <a href="#Feature" className="nav-item hover:bg-white/70 hover:text-gray-900">
          Feature
        </a>
      </nav>
    </div>
  );
};
