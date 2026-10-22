import csling from "../assets/badges/csling.gif";

const styles = `
  #csplusling-webring {
    --bg: #fffaf0;
    --text: #171717;
    --link: #171717;
    --accent: #171717;
    --focus: rgba(23, 23, 23, 0.35);

    background: var(--bg);
    color: var(--text);
    font-family: "JetBrains Mono", "Courier New", monospace;
    padding: 0.55rem 0.5rem 0.45rem;
    text-align: center;
    border: 1px solid var(--text);
    border-radius: 2px;
    box-shadow: 3px 3px 0 var(--text);
    box-sizing: border-box;
    line-height: 1.5;
    max-width: 220px;
    margin: 1rem auto;
  }

  .dark #csplusling-webring {
    --bg: #1e293b; /* slate-800, one step up from the page */
    --text: #f1f5f9;
    --link: #f1f5f9;
    --accent: #f1f5f9;
    --focus: rgba(241, 245, 249, 0.45);
  }

  #csplusling-webring .title {
    font-size: 1.15rem;
    letter-spacing: 0.25px;
    margin: 0 0 0.3rem;
    color: var(--text);
    font-weight: bold;
  }

  #csplusling-webring .index-link {
    display: inline-block;
    margin-bottom: 0.45rem;
    font-size: 0.85rem;
    text-decoration: none;
    color: var(--link);
    border-bottom: 1px solid currentColor;
  }

  #csplusling-webring .nav-row {
    display: flex;
    justify-content: center;
    gap: 0.1rem;
    flex-wrap: wrap;
  }

  #csplusling-webring a {
    color: var(--link);
    text-decoration: underline;
  }

  #csplusling-webring .nav-item {
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    border-radius: 2px;
    text-decoration: none;
    border-bottom: 1px solid currentColor;
  }

  #csplusling-webring .nav-item:hover,
  #csplusling-webring .index-link:hover {
    background: var(--text);
    color: var(--bg);
  }

  #csplusling-webring .prev::before { content: "← "; color: var(--text); }
  #csplusling-webring .next::after { content: " →"; color: var(--text); }

  #csplusling-webring a:focus {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
    border-radius: 3px;
  }

  #csplusling-webring a:focus:not(:focus-visible) {
    outline: none;
  }

  @media (max-width: 480px) {
    #csplusling-webring .nav-row {
      flex-direction: column;
      gap: 0.5rem;
    }
    #csplusling-webring .index-link { margin-bottom: 0.45rem; }
  }
`;

export default function WebRing() {
  return (
    <div id="webring" className="scroll-mt-6">
      <h1 className="text-3xl font-medium pb-6">
        Some of my cool and awesome friends
      </h1>

      <div className="flex max-w-full items-center justify-center">
        <img src={csling} alt="cs+ling webring badge" />
      </div>

      <div id="csplusling-webring">
        <style>{styles}</style>

        <div className="title">cs+ling webring</div>

        <div>
          <a
            className="index-link"
            href="https://csplusling.github.io/"
            id="webring-index"
          >
            index
          </a>
        </div>

        <nav className="nav-row" aria-label="webring links">
          <a
            className="nav-item prev"
            href="https://csplusling.github.io/?action=prev"
          >
            prev
          </a>
          <a
            className="nav-item random"
            href="https://csplusling.github.io/?random"
          >
            random
          </a>
          <a
            className="nav-item next"
            href="https://csplusling.github.io/?action=next"
          >
            next
          </a>
        </nav>
      </div>
    </div>
  );
}
