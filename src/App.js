import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";
import React from "react";
import Mockman from "mockman-js";
import ProductsPage from "./pages/products-page/ProductsPage";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import WishList from "./pages/wishlist-page/WishList";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
function App() {
  return (
    <div className="App">
      <HomePage />
      <ProductsPage />
      <CartPage />
      <WishList />
      <LoginPage />
      <SignupPage />
    </div>
  );
}

export default App;

// export default function App() {
//   let [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((response) => response.json())
//       .then((json) => {
//         setUsers(json.products);
//         console.log(json);
//       });
//   }, []);

//   return (
//     <ul>
//       dsjgggfdhosdsddgrrrdffdsddddddd ye to ho gya
//       {users &&
//         users.map((user) => (
//           <li key={user._id}>
//             <img src={user.image}></img>
//             {user.title}
//           </li>
//         ))}
//     </ul>
//   );
// }

// function MockAPI() {
//   return (
//     <div className="MockAPI">
//       <Mockman />
//     </div>
//   );
// }

// export default MockAPI;
