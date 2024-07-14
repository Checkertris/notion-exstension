import { notion } from "./client";
import { DatabaseData } from "..";

//POST
export const createNewDatabase = async (database: DatabaseData) => {
  const newDatabase = await notion.databases.create(database.format());
  return new DatabaseData().extract(newDatabase);
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
  var properties = database.formatProperties();

  const options = {
    method: "PATCH",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
    },
    body: JSON.stringify({ properties }),
  };

  var newDatabase = fetch(`https://api.notion.com/v1/databases/${database.id}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return new DatabaseData().extract(newDatabase);
};
