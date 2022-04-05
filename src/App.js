import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Dashboard from "./component/Dashboard/Dashboard";
import DetailsReview from "./component/DetailsReview/DetailsReview";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Page404 from "./component/Page404/Pag404";
import Review from "./component/Review/Review";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/review/:id" element={<DetailsReview></DetailsReview>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
