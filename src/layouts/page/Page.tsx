import { Route, Routes, useLocation} from "react-router-dom";
import { useEffect } from "react";
import Home from "../../pages/home/Home";
import Adoption from "../../pages/adoption/Adoption";
import WorkInProgress from "../../components/work-in-progress/WorkInProgress";
import News from "../../pages/news/News";
import ArticlePage from "../../pages/article-page/ArticlePage";
import AboutUs from "../../pages/about-us/AboutUs";
import Help from "../../pages/help/Help";
import HelpSection from "../../pages/help-section/HelpSection";

const ScrollToTop = (props: { children: any; }) => {
    const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });  
        }
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
                <Route path='/help' element={<Help/>}/>
                <Route path='/help/:id' element={<HelpSection/>}/>
                <Route path='/about-us/*' element={<AboutUs/>}/>
                <Route path='*' element={<WorkInProgress/>}/> 
            </Routes>
        </ScrollToTop>
    );
};

export default Page;