import { notion } from "./client";
import { DatabaseData, formatProperties } from "../notionData";
import { formatDatabase, extractDatabase } from "../notionData";

//POST
export const createDatabase = async (database: DatabaseData) => {
  const newDatabase = await notion.databases.create(formatDatabase(database));
  return extractDatabase(newDatabase)
};

// export const createNewPage = async ({ properties, database_id }: NewPageProps) => {
//   var newProperties = formatPropertyData(properties);

//   const newPage = await notion.pages.create({
//     parent: {
//       type: "database_id",
//       database_id: database_id,
//     },
//     properties: newProperties,
//   });
//   return newPage;
// };

//PATCH
export const updateDatabase = async (database: DatabaseData) => {
  const options = {
    method: "PATCH",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
    },
    body: JSON.stringify({ properties: formatProperties(database.properties) }),
  };

  var newDatabase = fetch(`https://api.notion.com/v1/databases/${database.id}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return extractDatabase(newDatabase)
};
