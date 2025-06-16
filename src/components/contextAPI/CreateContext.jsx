import { createContext, useState } from "react";
// React এর createContext ও useState হুক ইম্পোর্ট করছি যাতে আমরা একটি কনটেক্সট তৈরি ও স্টেট ম্যানেজ করতে পারি

export const ItemContext = createContext();
// একটি context তৈরি করছি যা দিয়ে আমরা ডেটা share করব component গুলোর মধ্যে

export const ProviderContext = ({ children }) => {
  // Provider কম্পোনেন্ট তৈরি করছি যা context-এর মান (value) সরবরাহ করবে
  const productName = "Android"; // একটি পণ্যের নাম স্থিরভাবে রাখা হয়েছে
  const price = 140000; // পণ্যের দাম স্থিরভাবে রাখা হয়েছে
  const [totalPrice, setTotalPrice] = useState(0);
  // ডায়নামিকভাবে মোট দাম ট্র্যাক করার জন্য useState হুক ব্যবহার করছি

  return (
    <ItemContext.Provider
      // আমরা ItemContext.Provider দিয়ে নিচের কম্পোনেন্টগুলোতে ডেটা প্রোভাইড করছি
      value={{ productName, price, totalPrice, setTotalPrice }}
      // context value-র মধ্যে প্রয়োজনীয় ডেটা ও ফাংশনগুলো পাঠাচ্ছি
    >
      {children}
      {/* যেসব component এই Provider এর ভিতরে থাকবে তারা context এর value access করতে পারবে */}
    </ItemContext.Provider>
  );
};
