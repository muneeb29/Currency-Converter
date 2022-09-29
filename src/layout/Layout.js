import Navbar from "./Navbar.js";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
