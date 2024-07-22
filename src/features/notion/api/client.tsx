const { Client } = require("@notionhq/client");
const notionSecret = "secret_GFtQPG053hQjsoeoBp1qwGgMicau9Fa0e3IfdI8qOA2";
export const notion = new Client({ auth: notionSecret });
