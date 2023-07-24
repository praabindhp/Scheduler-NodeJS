const schedule = require("node-schedule");

const date = new Date(2023, 6, 24, 12, 10, 15);

const job = schedule.scheduleJob(date, () => {
  console.log("🎩🎩🎩");
});

schedule.scheduleJob("*/3 * * * * *", () => {
  console.count("Victory To The Blood Of Jesus");
});
