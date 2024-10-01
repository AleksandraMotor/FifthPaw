import { Route, Routes } from "react-router-dom"
import Mission from "../../components/mission/Mission";
import Contact from "../../components/contact/Contact";
import OurStories from "../../components/our-stories/OurStories";
import ContactForm from "../../components/contact-form/ContactForm";

const SubPage = () => {

    return (
        <Routes>
            <Route path="/*" element={<Mission/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/our-stories" element={<OurStories/>}/>
            <Route path="/form" element={<ContactForm/>}/>
        </Routes>
    );
};

export default SubPage;