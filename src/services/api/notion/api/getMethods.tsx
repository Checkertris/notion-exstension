import { notion } from "./client";
import { DatabaseData } from "../notionData/databaseData";

//GET
export const getAllDatabases = async (): Promise<DatabaseData[]> => {
  const query = await notion
    .search({
      filter: {
        value: "database",
        property: "object",
      },
      sort: {
        direction: "ascending",
        timestamp: "last_edited_time",
      },
    })
    .then((response) => response.results.map((database) => new DatabaseData().extract(database)));

  return query;
};

// export const getNonDatabasePages = async (): Promise<PageData[]> => {
//   const query = await notion.search({
//     filter: {
//       value: "page",
//       property: "object",
//     },
//     sort: {
//       direction: "ascending",
//       timestamp: "last_edited_time",
//     },
//   });
//   return query.results.filter((item) => item.parent.type != "database_id").map((item) => getPageData(item));
// };

export const getDatabase = async (id: string): Promise<DatabaseData> => {
  const database = await notion.databases.retrieve({ database_id: id });
  return new DatabaseData().extract(database);
};

// export const getPage = async (id: string): Promise<PageData> => {
//   const page = await notion.pages.retrieve({ page_id: id });
//   return getPageData(page);
// };

// export const getBlock = async (id: string): Promise<BlockData> => {
//   const block = await notion.blocks.retrieve({
//     block_id: id,
//   });
//   return getBlockData(block);
// };
