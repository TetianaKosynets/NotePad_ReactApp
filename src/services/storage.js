export const keys = {
    note: ['note'],
    user_form: 'user_form',
    count: 'count'
}

export const getLocalItem = function (key) {
    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    return item;
}

export const setLocalItem = function (key, value) {
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
}