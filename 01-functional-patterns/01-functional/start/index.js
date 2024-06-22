const log = function log(msg) {
  console.log(msg);
};

console.log("in JS, fns are vars");
log("in JS, fns are vars");

const obj = {
  msg: "they can be added to objects",
  log(msg) {
    console.log(msg);
  },
};

obj.log(obj.msg);

const msgs = [
  "fns can be inserted into arrs",
  (msg) => console.log(msg),
  "like variables",
  (msg) => console.log(msg),
];

msgs[1](msgs[0]);
msgs[3](msgs[2]);

const insideFn = (logger) => {
  logger("they can be sent to other fns as args");
};

insideFn((msg) => console.log(msg));
