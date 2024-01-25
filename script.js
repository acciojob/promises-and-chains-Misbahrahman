let formEle = document.getElementById("form");
let btn = document.getElementById("btn");

btn.addEventListener("click", func);

function func() {
  let age = formEle.childNodes[3].value;
  let name = formEle.childNodes[7].value;
  console.log(formEle.childNodes);
  let promise = new Promise((resolve, reject) => {
    if (age > 18) return resolve(`Welcome, ${name}. You can vote.`);
    else return reject(`Oh sorry ${name}. You aren't old enough`);
  });

  promise
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });
}

