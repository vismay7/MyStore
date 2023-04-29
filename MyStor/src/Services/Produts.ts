import axios from "axios";

const options = {
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": import.meta.env.VITE_MYSTORE_TOKEN,
    "X-RapidAPI-Host": "my-store2.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const { data } = await axios.request({
      ...{ url: "https://my-store2.p.rapidapi.com/catalog/products", method: "GET" },
      ...options,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getProduct(id: string) {
  try {
    const { data } = await axios.request({
      ...{ url: `https://my-store2.p.rapidapi.com/catalog/product/${id}`, method: "GET" },
      ...options,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getCategories() {
  try {
    const { data } = await axios.request({
      ...{ url: `https://my-store2.p.rapidapi.com/catalog/categories`, method: "GET" },
      ...options,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getData, getProduct, getCategories };
