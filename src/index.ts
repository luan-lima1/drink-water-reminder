import cron from "node-cron";
import { sendReminder } from "./modules/service/send-reminder";

cron.schedule("15/* * * *", async () => {
  await sendReminder;
});
