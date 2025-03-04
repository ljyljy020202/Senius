import React from "react";
import "./styles/App.css";
import { UserProvider } from "./user/UserContext";
import { PointsProvider } from "./user/PointsContext";
import { UserPurchaseProvider } from "./user/UserPurchaseContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./shop/Shop";
import ShopBuy from "./shop/ShopBuy";
import ShopReask from "./shop/ShopReask";
import Barcode from "./user/Barcode";

import MyInfo from "./user/MyInfo";
import CheckBuy from "./user/CheckBuy";
import CheckPoint from "./user/CheckPoint";
import MyInfoExit from "./user/MyInfoExit";
import BottomBar from "./BottomBar";
import CheckBuyDetail from "./user/CheckBuyDetail";
import LoginSlider from "./LoginSlider";

import ProductDetail from "./shop/Productdetail";

import HeaderGame from "./HeaderGame";
import Productdetail from "./shop/Productdetail";
import CogImprove from "./game/CogImprove";
import CogImproveMain from "./game/CogImproveMain";
import WordGame from "./game/WordGame";
import ProductItem from "./component/ProductItem";
import { products } from "./component/ProductList";
import HeaderBasic from "./HeaderBasic";
import { GlobalStateProvider } from "./GlobalState";
import PictureFindGame from "./game/PictureFindGame";
import HeaderShop from "./HeaderShop";
import ShopBuyNot from "./shop/ShopBuyNot";
function App() {
  return (
      <GlobalStateProvider>
        <UserProvider>
          <PointsProvider>
            <UserPurchaseProvider>
              <Router>
                <div className="app">
                  <Routes>
                    <Route path="/" element={<LoginSlider />} />
                    <Route path="/game" element={<CogImproveMain />} />
                    <Route path="/shop" element={<Shop />} />
                    {products.map((product) => (
                        <Route
                            key={product.id}
                            path={`/product/${product.id}`}
                            element={<ProductItem product={product} />}
                        />
                    ))}
                    <Route path="/shopbuy" element={<ShopBuy />} />

                    <Route path="/myinfo" element={<MyInfo />} />

                    <Route path="/shopreask/:id" element={<ShopReask />} />
                    <Route path="/barcode/:id" element={<Barcode />} />
                    <Route path="/shopbuynot/:id" element={<ShopBuyNot />} />

                    <Route path="/myinfoexit" element={<MyInfoExit />} />
                    <Route path="/checkbuy" element={<CheckBuy />} />
                    <Route path="/checkbuy/detail" element={<CheckBuyDetail />} />
                    <Route path="/checkpoint" element={<CheckPoint />} />

                    <Route path="/headergame" element={<HeaderGame />} />
                    <Route path="/headerbasic" element={<HeaderBasic />} />
                    <Route path="/headershop" element={<HeaderShop />} />

                    <Route path="/cogimprove" element={<CogImprove />} />
                    <Route path="/cogimprovemain" element={<CogImproveMain />} />

                    <Route path="/wordgame" element={<WordGame />} />
                    <Route
                        path="/picturefindgame"
                        element={<PictureFindGame />}
                    />


                    <Route path="/bottombar" element={<BottomBar />} />
                  </Routes>
                </div>
              </Router>
            </UserPurchaseProvider>
          </PointsProvider>
        </UserProvider>
      </GlobalStateProvider>
  );
}

export default App;
