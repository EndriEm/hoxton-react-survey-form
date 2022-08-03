import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);
  const [forms, setForms] = useState<Form[]>([]);

  const [bestFeatures, setBestFeatures] = useState<bestFeatures[]>([]);
  const [worstFeatures, setWorstFeatures] = useState<worstFeatures[]>([]);
  const [timeSpent, setTimeSpent] = useState<timeSpent[]>([]);
  const [consistency, setConsistency] = useState<consistency>();
  const [colour, setColour] = useState<colour>();
  const [logo, setLogo] = useState<logo>();
  const [username, setUsername] = useState<username>("");
  const [email, setEmail] = useState<email>("");
  const [review, setReview] = useState<review>("");

  const Form = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="main__form">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();

            const bestFeatures = [
              ...document.querySelectorAll(
                'input[name="bestFeatures"]:checked'
              ),
            ].map((input) => input.value);

            const worstFeatures = [
              ...document.querySelectorAll(
                'input[name="worstFeatures"]:checked'
              ),
            ].map((input) => input.value);

            const timeSpent = [
              ...document.querySelectorAll('input[name="timeSpent"]:checked'),
            ].map((input) => input.value);

            console.log(Number(event.target.consistency.value));

            console.log(Number(event.target.colour.value));

            console.log(Number(event.target.logo.value));

            let Form = {
              review: event.target.review.value,
              email: event.target.email.value,
              username: event.target.name.value,
              consistency: event.target.consistency.value,
              colour: event.target.colour.value,
              logo: event.target.logo.value,
              bestFeatures: bestFeatures,
              worstFeatures: worstFeatures,
              timeSpent: timeSpent,
            };
            setForms([...forms, Form]);
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>What would you say are the best features of your rubber duck?</h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="color" />
                <span>It's yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="sound" />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="logo" />
                <span>It has a logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="size" />
                <span>It's big!</span>
              </label>
            </li>
          </ul>

          <h3>
            What would you say are the worst features of your rubber duck?
          </h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="color2" />
                <span>It's yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="sound2" />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="logo2" />
                <span>It has a logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="size2" />
                <span>It's big!</span>
              </label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            <li>
              <input
                id="consistency-1"
                type="radio"
                name="consistency"
                value="1"
              />
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input
                id="consistency-2"
                type="radio"
                name="consistency"
                value="2"
              />
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input
                id="consistency-3"
                type="radio"
                name="consistency"
                value="3"
              />
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input
                id="consistency-4"
                type="radio"
                name="consistency"
                value="4"
              />
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input id="colour-1" type="radio" name="colour" value="1" />
              <label htmlFor="colour-1">1</label>
            </li>
            <li>
              <input id="colour-2" type="radio" name="colour" value="2" />
              <label htmlFor="colour-2">2</label>
            </li>
            <li>
              <input id="colour-3" type="radio" name="colour" value="3" />
              <label htmlFor="colour-3">3</label>
            </li>
            <li>
              <input id="colour-4" type="radio" name="colour" value="4" />
              <label htmlFor="colour-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            <li>
              <input id="logo-1" type="radio" name="logo" value="1" />
              <label htmlFor="logo-1">1</label>
            </li>
            <li>
              <input id="logo-2" type="radio" name="logo" value="2" />
              <label htmlFor="logo-2">2</label>
            </li>
            <li>
              <input id="logo-3" type="radio" name="logo" value="3" />
              <label htmlFor="logo-3">3</label>
            </li>
            <li>
              <input id="logo-4" type="radio" name="logo" value="4" />
              <label htmlFor="logo-4">4</label>
            </li>
          </ul>

          <h3>How do you like to spend time with your rubber duck?</h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" name="timeSpent" value="time1" />
                <span>Swimming</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="timeSpent" value="time2" />
                <span>Bathing</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="timeSpent" value="time3" />
                <span>Chatting</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="timeSpent" value="time4" />
                <span>I don't like to spend time with it</span>
              </label>
            </li>
          </ul>

          <h4>What else have you got to say about your rubber duck?</h4>
          <textarea name="review" id="message" cols="30" rows="10"></textarea>

          <h4>Put your name here (if you feel it):</h4>
          <input type="text" name="name" />

          <h4>Leave us your email pretty please?? </h4>
          <input type="email" name="email" />

          <button className="form__submit">Submit survey!</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
