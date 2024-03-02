import styled from './navbar.module.css';

function Navbar(props) {
    // Props in React are inputs that you pass into components. The props enable the component to access customised data, values, and pieces of information that the inputs hold. The term 'props' is an abbreviation for 'properties' which refers to the properties of an object.
    let myLogo = props.name;

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