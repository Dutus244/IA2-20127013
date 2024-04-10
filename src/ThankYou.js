import React from "react";
import "./ThankYou.css"; // Assuming you have a CSS file named ThankYou.css for styling
import audioFile from "./thang-dien-justatee-x-phuong-ly-official-mv.mp3"; // Import the audio file

function ThankYou() {
  return (
    <div className="ThankYou">
      <div style={{fontSize: '50px',}}><b>Thenn Kiuuu</b></div>

      <img id="rizz" src="https://media.tenor.com/W6R7KFBYwhMAAAAi/thank-you.gif" alt="rizzler god" className="responsive" style={{ width: '400px', maxWidth: '100%', height: 'auto' }} />
      <br />
      <audio controls autoPlay loop>
        <source src={audioFile} type="audio/mpeg" /> {/* Use the imported audio file */}
        Your browser does not support the audio element.
      </audio>
      <h1>Bất ngờ chưa cô giáo</h1>
      <button className="button" onClick={() => window.location.href = '/date'}>
        Ấn ở đây nè bà UWU
      </button>
    </div>
  );
}

export default ThankYou;
