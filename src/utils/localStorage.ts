export const getItemLocalStorage = (key: string): any => {
  return localStorage.getItem(key);
};

export const setItemLocalStorage = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
