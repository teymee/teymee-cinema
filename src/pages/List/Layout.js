import { useLocation } from "react-router";
import "./List.css";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Pagination from "./Pagination/Pagination";
import Nav from "../../components/Nav/Nav";
import SkeletonBanner from "../UI/Skeleton/SkeletonBanner";


function Layout(props) {
  let bannerData = props.bannerData || {};
   const location = useLocation().pathname
   const searchPage = location.includes("search")

  return (
    <>
    <div className="overall">

      <div className="mobile">
        <Nav />
        </div>
        {props.isLoading && !searchPage && <SkeletonBanner/>}
        {!props.isLoading && !searchPage && <Banner bannerData={bannerData} />}
        <div className="body">
        {!searchPage && <Sidebar listId={props.listId} />}
          <div className="lists" id="#top">
            {props.children}
          </div>
          <Pagination pages={props.pages} />
        </div>
    </div>
     
    </>
  );
}

export default Layout;
