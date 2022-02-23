export const flattenObject = <T extends Object>(obj: T, prefix = "") => {
  return Object.keys(obj).reduce((acc: Record<string, any>, k) => {
    const pre = prefix.length ? prefix + "." : "";

    if (
      typeof obj[k as keyof T] === "object" &&
      obj !== null &&
      obj[k as keyof T] !== null
    ) {
      const value = flattenObject(obj[k as keyof T], pre + k);
      Object.assign(acc, value);
    } else {
      acc[pre + k] = obj[k as keyof T];
    }
    return acc;
  }, {});
};
