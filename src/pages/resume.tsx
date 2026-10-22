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

export default function Resume() {
  return (
    <div style={styles.container}>
      <iframe
        src={resumePdf}
        title="asdf"
        style={styles.iframe}
      />
    </div>
  );
}
