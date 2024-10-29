import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import Gifts from "../../components/gifts/Gifts";
import Volunteer from "../../components/volunteer/Volunteer";
import Donate from "../../components/donate/Donate";

export interface Section {
    id: string;
    title: string;
    icon: JSX.Element;
    children?: JSX.Element;
}

export const HelpData = [
    {
        id: 'gifts',
        title: 'Dary rzeczowe',
        icon: <FaHandsHoldingCircle />,
        children: <Gifts/>
    },
    {
        id: 'donate',
        title: 'Pomoc finansowa',
        icon: <FaHandHoldingUsd />,
        children: <Donate/>
    },
    {
        id: 'volunteer',
        title: 'Wolontariat',
        icon: <TbHeartHandshake />,
        children: <Volunteer/>
    }
];

export const foundations = [
    {
        name: 'Fundacja Przyjaciele Palucha',
        link: ''
    },
    {
        name: 'Grupa Mrau',
        link: ''
    },
    {
        name: 'Fundacja Futrzaki',
        link: ''
    },
    {
        name: 'Fundacja Azylu pod Psim Aniołem',
        link: ''
    },
    {
        name: 'Fundacja Ostatnia Przystań',
        link: ''
    },
    {
        name: 'Fundacja Mikropsy',
        link: ''
    },
    {
        name: 'Fundacja Adoptuj Uratuj Pokochaj',
        link: ''
    },
    {
        name: 'Fundacja Drugie Życie Bulla',
        link: ''
    },
    {
        name: 'Fundacja Duch Leona',
        link: ''
    },
    {
        name: 'Fundacja Azyl u Hani',
        link: ''
    },
    // {
    //     name: 'Stowarzyszenie Koty Prezesowej',
    //     link: ''
    // },
    // {
    //     name: 'Fundacja Azylu Koci Świat',
    //     link: ''
    // },
    // {
    //     name: 'Fundacja VIVA',
    //     link: ''
    // },
    // {
    //     name: 'Fundacja Ochrony Zwierząt El Gato',
    //     link: ''
    // },
];