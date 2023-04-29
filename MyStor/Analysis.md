# MyStore Application Integrate with RapidApi

In this project, we will be creating a React frontend that will utilize the RapidAPI's API to fetch and display data on a web page. The API endpoint that we will be using is mystore.api.

## Project Requirements

Before we begin creating the React frontend, we need to make sure that we have the following requirements:

- Node.js installed on our system.
- A RapidAPI account with access to the `https://my-store2.p.rapidapi.com/catalog/products` endpoint.
- need token to access this Api from RapidApi. ex. `6bj23g234f3u5g23jheityuiv78gqrew`.

## Steps

1. Create a new React Project usign the `npm init vite` and choose react-app.

2. Install the required dependencies like `react-router-dom` and `axios` for making API calls and parsing JSON data.

3. TO Access Product data I need to Create some Services and use in App.

   ```js
   import axios from "axios";

   const API_URL = "https://my-store2.p.rapidapi.com/catalog/products";
   const API_KEY = "YOUR_API_KEY";

   export const getProducts = () => {
     return axios.get(`${API_URL}/products`, {
       headers: {
         "x-rapidapi-key": API_KEY,
         "x-rapidapi-host": "mystore.api",
       },
     });
   };
   ```

4. Now i Just need to call getProducts to get all data from api.
   ```js
   import { getProduct } from "./Service.js";
   let { data } = getProduct()
     .then((e) => console.log(e));
     .then((error) => console.log(error))
    console.log(data)
   ```

## Functionality

#### Login Page

- Users can enter their username and password on the login page.
- The frontend will store the token in the browser's localStorage and redirect the user to the user page.

#### User Page

- Users will be redirected to the user page upon successful login.
- The frontend will display the user's data on the page.

#### Home Page

- The home page will display a list of products retrieved from the RapidAPI's `https://my-store2.p.rapidapi.com/catalog/products` endpoint.
- The frontend will make a GET request to the endpoint and parse the response data to display the product information.
- Each product in the list will have a link to its detail page.

#### Product Detail Page

- The product detail page will display detailed information about a specific product.
- The frontend will make a GET request to the RapidAPI's `https://my-store2.p.rapidapi.com/catalog/product/:id` endpoint, where :id is the ID of the selected product.

#### Order Functionality

- ##### Create Order

  - The create order page will allow users to create a new order by selecting products and quantities from a list.
  - The frontend will make a POST request to the RapidAPI's `https://my-store2.p.rapidapi.com/order/new` endpoint with the order data in JSON format.

- ##### Add Order

  - The add order page will allow users to add products and quantities to an existing order.
  - The frontend will make a PATCH request to the RapidAPI's `https://my-store2.p.rapidapi.com/order/:id/product` endpoint, where :id is the ID of the selected order, with the updated order data in JSON format.

- ##### Delete Order

  - The delete order page will allow users to delete an existing order.
  - The frontend will make a DELETE request to the RapidAPI's `https://my-store2.p.rapidapi.com/order/:id/product/:Productid` endpoint, where :id is the ID of the order and :ProductId is the ID of the Product.

- ##### Get Order

  - The order detail page will display detailed information about a specific order.
  - The frontend will make a GET request to the RapidAPI's `'https://my-store2.p.rapidapi.com/order/:id`endpoint, where :id is the ID of the selected order.

## Conclusion

In this project, we learned how to create a React frontend that integrates with the RapidAPI's API to fetch and display data on a web page. We utilized the axios library to make API calls and the useState and useEffect hooks to manage state and perform side effects respectively.
