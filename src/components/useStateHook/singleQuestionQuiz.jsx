//Quiz app
//this is incomplete code
//this is a single question quiz app using useState hook
import { useState } from "react";

const SingleQuestionQuiz = () => {
  const [quizeOption, setQuizeOption] = useState([
    { id: 1, color: "black", text: "EEE" },
    { id: 2, color: "black", text: "BBA" },
    { id: 3, color: "black", text: "CSE" },
    { id: 4, color: "black", text: "LAW" },
  ]);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Which is the correct department name in engineering?</h2>
      <form action="" onSubmit={handleForm}>
        {quizeOption.map((option, index) => {
          return (
            <div style={{ color: option.color }}>
              <input type="radio" name="option" />
              {option.text}
            </div>
          );
        })}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleQuestionQuiz;
