import React from "react";
import ProductItem from "./ProductItem";
import "../styles/ProductItem.css";
import Img1 from "../assets/황금손지압기.png";
import Img2 from "../assets/bbqchicken.png";
import Img3 from "../assets/uut.png";
import Img4 from "../assets/plant.png";
import Img5 from "../assets/hongsam.png";
import Img6 from "../assets/carrot.png";

export const products = [
  {
    id: 1,
    image: Img1,
    name: "황금 손지압기",
    description:
      "황금 손지압기는 동양의학의 수지침과 같은 원리로 손과 발을 자극해 질병예방과 뇌기능을 강화시켜줍니다.",
    points: 3000,
  },
  {
    id: 2,
    image: Img2,
    name: "BBQ 황금올리브치킨 + 콜라 1.25L",
    description:
      "BBQ의 시그니처 메뉴 후라이드의 대명사! 손자, 손녀에게 치킨 한마리 선물하세요",
    points: 24000,
  },
  {
    id: 3,
    image: Img3,
    name: "원목 지압봉 3P 세트",
    description:
      "각각 다른 모양으로 제작된 3종의 원목 지압봉으로 손과 발 및 신체 다양한 부위에 사용하여 문지르거나 지압할 수 있습니다.",
    points: 12000,
  },
  {
    id: 4,
    image: Img4,
    name: "콜크 미니다육화분 (3인용 세트)",
    description:
      "종이컵에 콜크클레이를 붙여서 예쁘게 화분을 만들고 다 만든 화분에 미니다육화분을 넣어서 키워보세요~ 세상에 단 하나뿐인 나만의 화분입니다.",
    points: 12000,
  },
  {
    id: 5,
    image: Img5,
    name: "[한국고려홍삼] 굿데이즈 홍삼스틱 12g 30포",
    description:
      "진하게 섭취하는 국산 6년근 홍삼 언제 어디서나 간편하게 하루 한포로 섭취가능합니다.",
    points: 21000,
  },
  {
    id: 6,
    image: Img6,
    name: "[아임제주] 제주 구좌 당근즙 120g",
    description:
      "신선한 제주산 당근을 제철에 수확하여 착즙 및 비가열 살균한 뒤 급속냉동하여 맛과 영양, 향이 살아있습니다.",
    points: 36000,
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
