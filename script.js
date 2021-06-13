

const nestedStringSearch = function (data, searchTerm) {
  const res = [];
  const search = function (data) {
    if (typeof data !== "object") {
      if (String(data).includes(searchTerm)) res.push(data);
      return;
    }
    for (let prop in data) {
      if (typeof data[prop] !== "object") {
        if (String(data[prop]).includes(searchTerm)) res.push(data[prop]);
      }
      if (Array.isArray(data[prop])) {
        data[prop].forEach((el) => {
          if (typeof el !== "object") {
            if (String(el).includes(searchTerm)) res.push(el);
          } else {
            search(el);
          }
        });
      }
      if (typeof data[prop] === "object") {
        search(data[prop]);
      }
    }
  };

  search(data);
  const set = new Set(res);
  return [...set];
};




const nestedSearch = function (data, callbackfn) {
  if (typeof callbackfn !== "function")
    throw "callback peramrter must be a function";
  const res = [];
  const search = function (data) {
    if (typeof data !== "object") {
      if (callbackfn(data)) res.push(data);
      return;
    }
    for (let prop in data) {
      if (typeof data[prop] !== "object") {
        if (callbackfn(data[prop])) res.push(data[prop]);
      }
      if (Array.isArray(data[prop])) {
        data[prop].forEach((el) => {
          if (typeof el !== "object") {
            if (callbackfn(el)) res.push(el);
          } else {
            search(el);
          }
        });
      }
      if (typeof data[prop] === "object") {
        search(data[prop]);
      }
    }
  };

  search(data);
  const set = new Set(res);
  return [...set];
};
