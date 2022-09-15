const blog = document.getElementById("buttonBlog");
blog.addEventListener("click", function () {
  if (startTime) return;
  countdownOverlay.style.display = "flex";
  countdownOverlay.style.flexDirection = "column";
  countdownOverlay.innerHTML = `
  <div id="cross"><i class="fa-solid fa-xmark" onclick='closeOverlay()'></i></div>
  <div class='allQues blog'>
    <div onclick='closeOpenAnswer(1)'>
        <span>Difference between Local storage and Session storage </span><i class="fa-solid fa-angle-down" ></i>
    </div>
    <div class="answers" id='answer1'>
    SessionStorage is similar to localStorage. The difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. 
    </div>
</div>
<div class='allQues blog' >
    <div onclick='closeOpenAnswer(2)'>
        <span>Difference between Local storage and Session storage </span><i class="fa-solid fa-angle-down" ></i>
    </div>
    <div class="answers" id='answer2'>
    The variables defined outside of any function or curly brackets are known as global variables and have global scope. Global scope means that the variables can be accessed from any part of that program, any function or conditional state can access that variable.
    The block scope can be defined as the scope of the variables inside the curly brackets {}. Now, these curly brackets can be of loops, or conditional statements, or something else. We are only allowed to refer to these variables from within the curly brackets {}.
    </div>
</div>
<div class='allQues blog'>
    <div onclick='closeOpenAnswer(3)'>
        <span>How Javascript event loop works? </span><i class="fa-solid fa-angle-down" ></i>
    </div>
    <div class="answers" id='answer3'>
    The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. 
    </div>
</div>
<div class='allQues blog'>
    <div onclick='closeOpenAnswer(4)'>
        <span>Few ways of getting undefined result in Javascript? </span><i class="fa-solid fa-angle-down" ></i>
    </div>
    <div class="answers" id='answer4'>
    <ul>
    <li>when a variable has not been assigned a value.</li>
    <li>When accessing a non-existing object property.</li>
    <li>The function parameters implicitly default to undefined.</li>
    <li>Implicitly, without return statement, a JavaScript function returns undefined.</li>
    </ul> 
    </div>
</div>
  
  
  
  
  
  `;
});
function closeOverlay() {
  countdownOverlay.style.display = "none";
  countdownOverlay.innerHTML = "";
}
function closeOpenAnswer(ans) {
  console.log("clicked");
  answer1 = document.getElementById("answer1");
  answer2 = document.getElementById("answer2");
  answer3 = document.getElementById("answer3");
  answer4 = document.getElementById("answer4");

  if (ans === 1) {
    if (answer1.style.display !== "none") {
      answer1.style.display = "none";
    } else {
      answer1.style.display = "block";
      answer2.style.display = "none";
      answer3.style.display = "none";
      answer4.style.display = "none";
    }
  }
  if (ans === 2) {
    if (answer2.style.display !== "none") {
      answer2.style.display = "none";
    } else {
      answer2.style.display = "block";
      answer3.style.display = "none";
      answer1.style.display = "none";
      answer4.style.display = "none";
    }
  }
  if (ans === 3) {
    if (answer3.style.display !== "none") {
      answer3.style.display = "none";
    } else {
      answer3.style.display = "block";
      answer1.style.display = "none";
      answer2.style.display = "none";
      answer4.style.display = "none";
    }
  }
  if (ans === 4) {
    if (answer4.style.display !== "none") {
      answer4.style.display = "none";
    } else {
      answer4.style.display = "block";
      answer1.style.display = "none";
      answer2.style.display = "none";
      answer3.style.display = "none";
    }
  }
}
