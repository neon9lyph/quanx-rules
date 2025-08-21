let obj = JSON.parse($response.body);

obj = {
  ...obj,
  data: {},
};

$done({ body: JSON.stringify(obj) });
