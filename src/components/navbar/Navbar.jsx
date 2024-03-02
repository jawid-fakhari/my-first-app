import styled from './navbar.module.css';

function Navbar(props) {
  return (
    <div className={styled.navbar}>
        <div className={styled.logo}>{props.logoSrc}</div>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;