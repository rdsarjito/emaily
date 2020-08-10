export const getLocalStorage = (param) => {
    const storage = localStorage.getItem(param);
    if (!storage) return {};
    return JSON.parse(storage);
}

export const saveToLocalStorage = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
}