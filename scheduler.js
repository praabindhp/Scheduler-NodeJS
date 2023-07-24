const schedule = require("node-schedule");

// Specified Date & Time
const date = new Date(2023, 6, 24, 12, 10, 15);

const job = schedule.scheduleJob(date, () => {
  console.log("🎩🎒🎓");
});

// Custom Rounds of Execution
let i = 0;
let n = 3;
const job2 = schedule.scheduleJob("*/3 * * * * *", () => {
  console.count("Victory To The Blood Of Jesus");
  i++;
  if (i === n) {
    console.log("🎩🎒🎓");
    job2.cancel();
  }
});
