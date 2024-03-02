import styled from './navbar.module.css';

function Navbar() {
    let myLogo = '🐼';

  return (
    <div className={styled.navbar}>
        <div className={styled.logo}>{myLogo}</div>
      <ul>
        <li>Portfolio</li>
        <li>New Project</li>
        <li>About Me</li>
      </ul>
    </div>
  );
}

export default Navbar;