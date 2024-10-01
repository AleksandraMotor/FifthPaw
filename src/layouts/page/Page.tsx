import { Route, Routes, useLocation} from "react-router-dom";
import { useEffect } from "react";
import Home from "../../pages/home/Home";
import Adoption from "../../pages/adoption/Adoption";
import WorkInProgress from "../../components/work-in-progress/WorkInProgress";
import News from "../../pages/news/News";
import ArticlePage from "../../pages/article-page/ArticlePage";
import AboutUs from "../../pages/about-us/AboutUs";

const ScrollToTop = (props: { children: any; }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <>
            {props.children}
        </>
    )
}


const Page = () => {
    return (
        <ScrollToTop>
            <Routes>
               <Route path='/' element={<Home/>}/>
                <Route path='/adoption' element={<Adoption/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/news/:id' element={<ArticlePage/>}/>
                <Route path='/help' element={<WorkInProgress/>}/>
                <Route path='/about-us/*' element={<AboutUs/>}/>
                <Route path='*' element={<WorkInProgress/>}/> 
            </Routes>
        </ScrollToTop>
    );
};

export default Page;