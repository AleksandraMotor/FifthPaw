import { Route, Routes } from "react-router-dom"
import Mission from "../../components/mission/Mission";
import WorkInProgress from "../../components/work-in-progress/WorkInProgress";
import Contact from "../../components/contact/Contact";
import OurStories from "../../components/our-stories/OurStories";

const SubPage = () => {

    return (
        <Routes>
            <Route path="/*" element={<Mission/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/our-stories" element={<OurStories/>}/>
            <Route path="/form" element={<WorkInProgress/>}/>
        </Routes>
    );
};

export default SubPage;