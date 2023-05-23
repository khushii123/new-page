console.log("Started");

const p = () => {
  return new Promise((reply, reject) => {
    reply("Done");
  });
};

p().then((data) => {
  console.log(data);
  nowYouCanRun();
});

function nowYouCanRun() {
  console.log("I'm ready since promise is done");
}

for (let i = 0; i < 5; i++) {
  console.log("i: ", i);
}

console.log("Code end");
