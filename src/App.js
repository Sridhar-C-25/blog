import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home";
import NewStory from "./pages/NewStory";
import UserBlog from "./pages/UserBlog";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:authorId" element={<UserBlog />} />
          <Route path="/new-story" element={<NewStory />} />
          <Route path="/blog/:blogId" element={<Blog />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
