"use client"

import React, { useState, FormEvent } from 'react';
import "./feedback.css";

const Feedback: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>): boolean {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.submit();
    form.reset();
    return false;
  }

  function gfg(n: number): void {
    const stars = document.querySelectorAll<HTMLSpanElement>(".star");
    const output = document.getElementById("output") as HTMLSpanElement;

    removeStars(stars);

    let cls = "";
    if (n === 1) cls = "one";
    else if (n === 2) cls = "two";
    else if (n === 3) cls = "three";
    else if (n === 4) cls = "four";
    else if (n === 5) cls = "five";

    stars.forEach((star, index) => {
      if (index < n) {
        star.className = "star " + cls;
      }
    });

    output.innerText = `Rating is: ${n}/5`;
    const ratingInput = document.getElementById("rating") as HTMLInputElement;
    ratingInput.value = output.innerText;
    setRating(n);
  }

  function removeStars(stars: NodeListOf<HTMLSpanElement>): void {
    stars.forEach(star => {
      star.className = "star";
    });
  }

  return (
    <>
      <div className="center">
        <input type="checkbox" id="show" />
        <label htmlFor="show" className="button-24 cursor-pointer rounded-full flex items-center justify-center z-50">
          <img src="./img/edit2.svg" alt="edit" />
        </label>
        <div className="hide z-[1000]">Feedback</div>
        <div className="container">
          <label htmlFor="show" className="close-btn">
            <img src="./img/close.svg" alt="close" />
          </label>
          <div className="review-container">
            <div className="top">
              <header>Feedback</header>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="hidden"
                name="access_key"
                defaultValue="e5c36cdd-9541-4329-98a5-b6bde623fa39"
              />
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-field"
                  placeholder="Name"
                  required
                />
                <img src="./img/user.svg" alt="user" />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field"
                  placeholder="Email"
                  required
                />
                <img src="./img/mail.svg" alt="mail" />
              </div>
              <div className="card">
                <div>
                  <span onClick={() => gfg(1)} className="star hover1">
                    ★
                  </span>
                  <span onClick={() => gfg(2)} className="star hover2">
                    ★
                  </span>
                  <span onClick={() => gfg(3)} className="star hover3">
                    ★
                  </span>
                  <span onClick={() => gfg(4)} className="star hover4">
                    ★
                  </span>
                  <span onClick={() => gfg(5)} className="star hover5">
                    ★
                  </span>
                </div>
              </div>
              <div className="rating">
                <span id="output">Rating is: 0/5</span>
                <input type="text" name="rating" id="rating" hidden />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  id="review"
                  name="review"
                  className="input-field"
                  placeholder="Write a small review 🖊"
                />
                <img src="./img/edit.svg" alt="edit" />
              </div>
              <div className="input-box ver2">
                <button type="submit" className="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;


