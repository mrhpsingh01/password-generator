import "./App.css";
import "./main.scss";

function App() {
  return (
    <div className="container">
      <div className="generator">
        <h2>Password Generator</h2>
        <div className="generator_password">
          <button>Clipboard</button>
        </div>
        <div className="form-group">
          <div className="password-length">
            <label htmlFor="password-length">Password Length</label>
            <input
              name="password-length"
              id="password-length"
              type="number"
              max="20"
              min="7"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="uppercase-letters">
            <label htmlFor="uppercase-letters">UpperCase Length</label>
            <input
              name="uppercase-letters"
              id="uppercase-letters"
              type="checkbox"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="lowercase-letters">
            <label htmlFor="lowercase-letters">Password Length</label>
            <input
              name="lowercase-letters"
              id="lowercase-letters"
              type="checkbox"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="include-numbers">
            <label htmlFor="include-numbers">Password Length</label>
            <input
              name="include-numbers"
              id="include-numbers"
              type="checkbox"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="include-symbols">
            <label htmlFor="include-symbols">Password Length</label>
            <input
              name="include-symbols"
              id="include-symbols"
              type="checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
