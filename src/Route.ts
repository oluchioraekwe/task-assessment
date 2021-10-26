import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ItemInstance } from "./Model/Item";
import axios from "axios";

const router = Router();

router.get("/items", async (req: Request, res: Response) => {
  try {
    const record = await ItemInstance.findAll({ where: {} });
    return res.status(200).send(record);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/items/delete", async (req: Request, res: Response) => {
  let records = await ItemInstance.findAll({ where: {} });
  let deletedRecord;
  for (let record of records) {
    deletedRecord = await record.destroy();
  }

  axios
    .get("https://api.wazirx.com/api/v2/tickers")
    .then(async (data) => {
      let result = Object.keys(data.data);
      const items = result.slice(0, 10);
      for (const val of items) {
        const id = uuidv4();
        await ItemInstance.create({ ...data.data[val], id });
      }
    })
    .catch(() => console.log("cannot get data"));
  res.send(deletedRecord);
});

export default router;
