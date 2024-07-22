export function addCommas(values: string[]) {
  var str = ``;
  for (let i = 0; i < values.length; i++) {
    str += values[i];
    if (i < values.length - 1) str += `,`;
  }
  return str;
}

export function functionWrapper(head: string, ...args: string[]) {
  var content = args.length > 1 ? addCommas(args) : args[0];
  return head + `(` + content + `)`;
}
