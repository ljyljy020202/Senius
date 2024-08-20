import React from "react";
import "./styles/App.css";
import { UserProvider } from "./UserContext";
import { PointsProvider } from "./PointsContext";
import { UserPurchaseProvider } from "./UserPurchaseContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./Shop";
import ShopBuy from "./ShopBuy";
import ShopReask from "./ShopReask";
import Barcode from "./Barcode";

import MyInfo from "./MyInfo";
import CheckBuy from "./CheckBuy";
import CheckPoint from "./CheckPoint";
import MyInfoExit from "./MyInfoExit";
import BottomBar from "./BottomBar";
import CheckBuyDetail from "./CheckBuyDetail";
import LoginSlider from "./LoginSlider";

import ProductDetail from "./Productdetail";

import HeaderGame from "./HeaderGame";
import Productdetail from "./Productdetail";
import CogImprove from "./CogImprove";
import CogImproveMain from "./CogImproveMain";
import WordGame from "./WordGame";
import ProductItem from "./component/ProductItem";
import { products } from "./component/ProductList";
import HeaderBasic from "./HeaderBasic";
import { GlobalStateProvider } from "./GlobalState";
import PictureFindGame from "./PictureFindGame";
import HeaderShop from "./HeaderShop";
import ShopBuyNot from "./ShopBuyNot";
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
