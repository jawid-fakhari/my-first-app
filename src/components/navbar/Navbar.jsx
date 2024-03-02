import styled from './navbar.module.css';

function Navbar() {
  return (
    <div className={styled.navbar}>
      <ul>
        <li>Portfolio</li>
        <li>New Project</li>
        <li>About Me</li>
      </ul>
    </div>
  );
}

export default Navbar;