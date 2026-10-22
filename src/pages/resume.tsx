import { useEffect } from "react";

import resumePdf from "../assets/AshleyLiResumePublic.pdf";

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};

// Mobile browsers render iframed PDFs as a static image that can't be zoomed or
// scrolled on its own, so hand touch devices the PDF and its native viewer.
// replace() keeps back from bouncing into this page again.
const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;

export default function Resume() {
  useEffect(() => {
    if (isTouchDevice()) window.location.replace(resumePdf);
  }, []);

  return (
    <div style={styles.container}>
      <iframe
        src={resumePdf}
        title="Ashley Li's Resume"
        style={styles.iframe}
      />
    </div>
  );
}
