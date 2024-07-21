import { notion } from "./client";
import { extractDatabase, DatabaseData, PageData, extractPage } from "../notionData";

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
    .then((response) => response.results.map((data) => extractDatabase(data)));

  return query;
};

export const getNonDatabasePages = async (): Promise<PageData[]> => {
  const query = await notion.search({
    filter: {
      value: "page",
      property: "object",
    },
    sort: {
      direction: "ascending",
      timestamp: "last_edited_time",
    },
  });
  return query.results.filter((item) => item.parent.type != "database_id").map((item) => extractPage(item));
};

export const getDatabase = async (id: string): Promise<DatabaseData> => {
  const data = await notion.databases.retrieve({ database_id: id });
  return extractDatabase(data)
};

export const getPage = async (id: string): Promise<PageData> => {
  const data = await notion.pages.retrieve({ page_id: id });
  return extractPage(data)
};

// export const getBlock = async (id: string): Promise<BlockData> => {
//   const block = await notion.blocks.retrieve({
//     block_id: id,
//   });
//   return getBlockData(block);
// };
