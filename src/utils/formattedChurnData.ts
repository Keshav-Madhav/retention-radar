import { promises as fs } from "fs";

async function parsedChurnData(): Promise<churnData> {
  const data = await fs.readFile("./src/utils/Churn.json", "utf-8");
  const parsedData: churnData = JSON.parse(data);

  return parsedData;
}

export async function formattedChurnData(): Promise<churnData> {
  const data = await parsedChurnData();

  return data;
}
