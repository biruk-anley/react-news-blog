const Navbar = () => {
  const alerted = (n) => {
    alert(n); // this will handle event object alert
  };
  return (
    <nav className="navbar">
      <h1>The reacts blog Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <button
          onClick={() =>
            alerted("hello new branch")
          }
        >
          click Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
