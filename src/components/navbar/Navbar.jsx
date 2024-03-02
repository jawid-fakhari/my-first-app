import styled from './navbar.module.css';

function Navbar() {
  return (
    <div className={styled.header}>
      <h2 className={styled.navbar}>This is Navbar</h2>
    </div>
  );
}

export default Navbar;