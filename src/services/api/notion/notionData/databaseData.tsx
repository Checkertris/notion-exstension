import { reduceObject } from "~/utils";
import { PropertyData } from "./propertyData";
import { workspaceSym } from "~/constants";
import { PropertySelector } from "./propertySelector";
import { NotionData, NotionDataExtractor } from "./notionData";

export interface DatabaseData extends NotionData {
  name: "Untitled";
  parent: typeof workspaceSym | string;
  properties: PropertyData[];
}

export class DatabaseData extends NotionDataExtractor<DatabaseData> {
  extract(data: any) {
    var name = data.title[0]?.plain_text;
    if (name) this.name = name;
    this.id = data.id;
    this.properties = Object.entries(data.properties).map(([key, value]) => new PropertySelector().extract(key, value) as any);
    return this;
  }
}


private formatParent(): object {
  if (typeof this.parent == typeof workspaceSym) return { type: "workspace", workspace: true };
  return { type: "database_id", database_id: parent };
}

formatProperties() {
  return reduceObject(this.properties, { key: (property) => property.id, value: (property) => property.format() });
}

format(): object {
  return {
    parent: this.formatParent(),
    title: [
      {
        type: "text",
        text: {
          content: this.name,
        },
      },
    ],
    properties: this.formatProperties(),
  };
}


// export class PageData extends NotionData {
//   name = "Untitled";
//   url: string;

//   extract(data: any) {
//     const name = data.properties.title.title[0].plain_text;
//     if (name) this.name = name;
//     this.id = data.id;
//     this.url = data.url;
//     return this
//   }
// }

// export class BlockData extends NotionData {
//   type: BlockType;

//   extract(data: any) {
//     this.id = data.id;
//     this.type = BlockData[data.type];
//     return this
//   }
// }
