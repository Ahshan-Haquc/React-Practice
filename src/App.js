import Cart from "./components/contextAPI/Cart";
// Cart কম্পোনেন্ট ইম্পোর্ট করছি যেখানে context-এর ডেটা দেখাবো
import { ProviderContext } from "./components/contextAPI/CreateContext";
// ProviderContext ইম্পোর্ট করছি যাতে Cart এবং Home context পায়
import Home from "./components/contextAPI/Home";
// Home কম্পোনেন্ট ইম্পোর্ট করছি

function App() {
  return (
    <ProviderContext> 
      {/* ProviderContext দিয়ে Home ও Cart কে wrap করছি যাতে তারা context ডেটা পায় */}
      <Home />
      <Cart />
    </ProviderContext>
  );
}

export default App; 
// App component কে export করছি যাতে index.js বা অন্য জায়গায় ব্যবহার করা যায়
