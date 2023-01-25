const TODO_URL = import.meta.env.VITE_API_URL;

// Fetch todos
export const getTodos = () => {
  return fetch(TODO_URL).then(res => res.json());
};

// Common function that performs `add`, `update` and `remove` operations.
export const processTodo = (type, todo) => {
  let inputType = type.toUpperCase();
  let method = "";
  let API_URL = "";
  let bodyRequired = true;

  if (inputType === "ADD") {
    method = "POST";
    API_URL = TODO_URL;
  } else if (inputType === "UPDATE") {
    method = "PUT";
    API_URL = `${TODO_URL}/${todo._id}`;
    delete todo._id;
  } else if (inputType === "REMOVE") {
    method = "DELETE";
    API_URL = `${TODO_URL}/${todo._id}`;
    bodyRequired = false;
  }

  let reqObj = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  if (bodyRequired) {
    reqObj = { ...reqObj, ...{ body: JSON.stringify(todo) } };
  }

  return fetch(API_URL, reqObj);
};
