export abstract class NotionData {
  name: string;
  id: string;
  icon: any;

  abstract extract(data): this;
}

function notionDataExtractor<T extends NotionData>(type: new () => T, data) {
  var notion = new type();
  return notion.extract(data);
}

export abstract class NotionDataUpdater<T extends NotionData> {
  abstract format(data: T): object;
}
