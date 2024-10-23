import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import Gifts from "../../components/gifts/Gifts";

export interface Section {
    title: string;
    icon: JSX.Element;
    children?: JSX.Element;
}

export const HelpData = [
    {
        title: 'Dary rzeczowe',
        icon: <FaHandsHoldingCircle />,
        children: <Gifts/>
    },
    {
        title: 'Pomoc finansowa',
        icon: <FaHandHoldingUsd />,
        // children: <Donate/>
    },
    {
        title: 'Wolontariat',
        icon: <TbHeartHandshake />,
        // childen: <Volunteer/>
    }
]