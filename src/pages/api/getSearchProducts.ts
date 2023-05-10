import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/types/productTypes";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { search } = req.query;
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "src", "json");
    //Read the json data file data.json
    const fileContents = await fs.readFile(
      jsonDirectory + "/products.json",
      "utf8"
    );
    // filter the data by search query

    //Return the data as json
    const data: {
      products: IProduct[];
    } = JSON.parse(fileContents);
    data.products = data.products.filter((product) =>
      product.name.toLowerCase().includes(search as string)
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default handler;
