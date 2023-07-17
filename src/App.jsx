import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import UserScreen from "./screens/UserScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import AddProductScreen from "./screens/AddProductScreen";
import EditProductScreen from "./screens/EditProductScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/addproduct"
          element={
            <PrivateRoute>
              <AddProductScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/product/:productId/edit"
          element={
            <PrivateRoute>
              <EditProductScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrderScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <PrivateRoute>
              <OrderDetailsScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserScreen />
            </PrivateRoute>
          }
        />
        <Route path="/sellers" element={<UserScreen />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
