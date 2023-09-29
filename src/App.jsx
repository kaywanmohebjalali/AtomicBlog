
import AppBlog from "./components/AppBlog";
import { BlogProvider } from "./context/BlogProvider";

function App() {

  return (
      <BlogProvider>
        <AppBlog />
      </BlogProvider>
  

  
  );
}

export default App;
