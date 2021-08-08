export function saveData(key, value) {
  // localStorage.setItem(key, JSON.stringify(value));
  var users = JSON.parse(localStorage.getItem("books") || "[]");
  users.push(value);
  // Saving
  localStorage.setItem("books", JSON.stringify(users));
}

export function getData(key) {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch {
    return undefined;
  }
}

export const clearData = (key) => {
  // localStorage.removeItem(key);
  localStorage.clear();
};
