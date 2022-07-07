export const CACHE_PROVIDER = "CACHE_PROVIDER";
export const CACHE_LOAD_HOME = "CACHE_LOAD_HOME";
export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeItem = key => {
  localStorage.removeItem(key);
};

export const getItem = key => {
  return localStorage.getItem(key);
};
