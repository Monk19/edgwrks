import React from "react";
import "./EdgeServices.modules.css";
import Group from "../Assets/Images/Group.png";
function Portfolio() {
  return (
    <div className="Services Carrer" style={{ height: "700px" }}>
      <div className="Serv-photo-div port Fortf">
        <img src={Group} alt="christina-port" />
      </div>
      <div className="servcice-mat ">
        <p className="abt-frst edge-head">Carrers</p>
        <h2>
          Become an Industry <span>Professional</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs. The passage is
          attributed to an unknown typesetter in the 15th century who is thought
          to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
          use in a type specimen book. It usually begins with:
          <br />
          <br /> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
          purpose of lorem ipsum is to create a natural looking block of text
          (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy. <br />
          <br />, laying out pages with meaningless filler text can be very
          useful when the focus is meant to be on design, not content.
        </p>
        <button className="bttns">Read more </button>
      </div>
    </div>
  );
}

export default Portfolio;
