import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar title="props-panda" name="🐼" />
      <Navbar title="props-dog" name="🐶" />
      {/* Props in React are inputs that you pass into components. The props enable the component to access customised data, values, and pieces of information that the inputs hold. The term 'props' is an abbreviation for 'properties' which refers to the properties of an object. */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;