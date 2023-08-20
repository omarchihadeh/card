import react from "react";

export default function Header(props) {
  return (
    <div className="header--container">
      <img src={props.img} alt="" />
    </div>
  );
}
