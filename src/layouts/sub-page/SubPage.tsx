import { Route, Routes } from "react-router-dom"
import { subPageData } from "./SubPageData";
import Contact from "../../pages/contact/Contact";
import Mission from "../../components/mission/Mission";
import WorkInProgress from "../../components/work-in-progress/WorkInProgress";
import OurStories from "../../components/our-stories/OurStories";

interface Option {
    name: string;
    path: string;
}

const options: Option[] = subPageData;

const SubPage = () => {

    return (
        <Routes>
            <Route path="*" element={<Mission/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="our stories" element={<OurStories/>}/>
            <Route path="form" element={<WorkInProgress/>}/>
        </Routes>
    );
};

export default SubPage;