import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => (
  <div style={styles}>
    <h2>Click a button below to test react-share@1.16.0 {"\u2728"}</h2>

    <SocialMediaButtons
      url="https://demo1-app-bucket.s3.ap-south-1.amazonaws.com/invoice.pdf"
      text="Check out this Report"
    />
  </div>
);

export default App;
