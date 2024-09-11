import { Route, Routes, useParams } from "react-router-dom";
import Home from "../../pages/home/Home";
import Adoption from "../../pages/adoption/Adoption";
import WorkInProgress from "../../components/work-in-progress/WorkInProgress";
import News from "../../pages/news/News";
import ArticlePage from "../../pages/article-page/ArticlePage";


const Page = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adoption' element={<Adoption/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/news/:id' element={<ArticlePage/>}/>
            <Route path='/help' element={<WorkInProgress/>}/>
            <Route path='/about' element={<WorkInProgress/>}/>
            <Route path='/contact' element={<WorkInProgress/>}/>
            <Route path='*' element={<WorkInProgress/>}/>
        </Routes>
    );
};

export default Page;