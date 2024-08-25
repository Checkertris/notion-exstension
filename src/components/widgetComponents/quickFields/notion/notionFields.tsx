import { quickOption, optionNew } from "../../../../../../shared-library/src/quickFields/quickFieldProps";
import { QuickCombobox } from "../quickCombobox/quickCombobox";
import { quickComboboxProps } from "../..";
import { House } from "lucide-react";
import { quickCommandGroupProps } from "../quickCombobox/quickCombobox";
import { NotionData, getAllDatabases } from "~/features/notion";


function formatQuery<T extends NotionData>(dataList: T[]): quickOption<T>[] {
  return dataList.map((data) => {
    return { label: data.name, value: data };
  });
}

const workspaceOption: quickOption<typeof workspaceSym> = {
  value: workspaceSym,
  label: "Workspace",
  Icon: House,
};

const databaseProps = (hasNew: boolean): quickComboboxProps<any> => {
  var group: quickCommandGroupProps<any>[] = [{ queryFunc: () => getAllDatabases().then(formatQuery) }];
  if (hasNew) group.push({ staticOptions: [optionNew("database")] });
  return {
    subject: "database",
    plural: "databases",
    loadOnEmpty: true,
    optionGroups: group,
  };
};

// const pageProps = (hasNew: boolean, workspace: boolean): quickComboboxProps<any> => {
//   var group: quickCommandGroupProps<any>[] = [];
//   if (workspace) group.push({ staticOptions: [workspaceOption] });
//   group.push({ queryFunc: () => getNonDatabasePages().then(formatQuery) });
//   if (hasNew) group.push({ staticOptions: [optionNew("page")] });
//   return {
//     subject: "page",
//     plural: "pages",
//     loadOnEmpty: true,
//     optionGroups: group,
//   };
// };

export const DatabaseCombobox = ({ hasNew, onChange }: { onChange: (value) => void; hasNew?: boolean }) => {
  return <QuickCombobox onChange={onChange} {...databaseProps(hasNew)} />;
};

// export const PageCombobox = ({ workspace, hasNew, onChange }: { onChange: (value) => void; hasNew?: boolean; workspace?: boolean }) => {
//   return <QuickCombobox onChange={onChange} {...pageProps(hasNew, workspace)} />;
// };
