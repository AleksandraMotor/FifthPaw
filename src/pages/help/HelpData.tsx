import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";

export interface Section {
    title: string;
    icon: JSX.Element;
}

export const HelpData = [
    {
        title: 'Dary rzeczowe',
        icon: <FaHandsHoldingCircle />
    },
    {
        title: 'Pomoc finansowa',
        icon: <FaHandHoldingUsd />
    },
    {
        title: 'Wolontariat',
        icon: <TbHeartHandshake />
    }
]