import { useParams } from "react-router-dom";
import { HelpData, Section } from "../help/HelpData";
import Help from "../help/Help";
import OurNeeds from "../../components/our-needs/OurNeeds";
import Header from "../../components/header/Header";

import './HelpSection.scss';

const sections: Section[] = HelpData;

const HelpSection = () => {
    let { id } = useParams<{ id: string }>();
    const section = sections.find(section => section.title === id);

    if (!section) {
        return (
            <Help/>
        );
    };

    return (
        <section className="help-section">
            <OurNeeds/>
            <Header>{section.title}</Header>
            {section.children}
        </section>
    );
};

export default HelpSection;