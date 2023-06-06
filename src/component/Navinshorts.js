import "./Navinshorts.css";
import Humbergerdrawer from "./Humbergerdrawer";
const Navinshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <Humbergerdrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="inshorts-logo"
        height="80%"
      />
    </div>
  );
};
export default Navinshorts;
