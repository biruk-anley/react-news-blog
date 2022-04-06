const Navbar = () => {
  const alerted = (text, events) => {
    alert(text +  "  " + events.bubbles); // this will handle event object alert.txt will print out text which is passed as an argument
  };
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <button
          onClick={(events) =>
            alerted("this is an argumentative event", events)
          }
        >
          click Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
