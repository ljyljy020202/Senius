import React, { createContext, useState } from "react";

export const UserPurchaseContext = createContext();

export const UserPurchaseProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);

  return (
    <UserPurchaseContext.Provider value={{ purchases, setPurchases }}>
      {children}
    </UserPurchaseContext.Provider>
  );
};
