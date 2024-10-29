import { ImFacebook2 } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import LinkIcon from "../../components/link-icon/LinkIcon";

export const socialMediaData = [
    {
        link: 'https://www.facebook.com/',
        icon: <ImFacebook2 />

    },
    {
        link: 'http://www.twitter.com/',
        icon: <BsTwitter />
    },
    {
        link: 'https://www.instagram.com/',
        icon: <BsInstagram />
    }
];

const socialMedia = socialMediaData.map((item, id) => <LinkIcon key={id} link={item.link} icon={item.icon}/>);

const address = (
   <address className='footer-menu__address' aria-label='Adress of FifthPaw Animal Shelter'>
    FifthPaw 13<br/>
    12-345 React<br/>
    WWW3
   </address> 
);

interface SiteMapSubPage {
    id: number;
    name: string;
    text: string | JSX.Element | JSX.Element[];
    link?: string;
};

export interface SiteMapProps {
    id: number;
    name: string;
    text: string;
    link: string;
    subpages?: SiteMapSubPage[];
};

export const siteMap: SiteMapProps[] = [
    {
        id: 0,
        name: 'home',
        text: 'strona główna',
        link: '/',
    },
    {
        id: 1,
        name: 'adoption',
        text: 'adopcja',
        link: '/adoption',
    },
    {
        id: 2,
        name: 'news',
        text: 'ogłoszenia',
        link: '/news',
    },
    {
        id: 3,
        name: 'help',
        text: 'Jak pomóc?',
        link: '/help',
        subpages: [
            {
                id: 31,
                name: 'gifts',
                text: 'dary rzeczowe',
                link: '/help/gifts'
            },
            {
                id: 32,
                name: 'donate',
                text: 'pomoc finansowa',
                link: 'help/donate'
            },
            {
                id: 33,
                name: 'volunteer',
                text: 'wolontariat',
                link: '/help/volunteer'
            }
        ]
    },
    {
        id: 4,
        name: 'about us',
        text: 'o nas',
        link: '/about-us',
        subpages: [
            {
                id: 41,
                name: 'contact',
                text: 'kontakt',
                link: '/about-us/contact'
            },
            {
                id: 42,
                name: 'our-stories',
                text: 'nasze historie',
                link: '/about-us/our-stories',
            },
            {
                id: 43,
                name: 'form',
                text: 'formularz',
                link: '/about-us/form',
            },
            {
                id: 44,
                name: 'social-media',
                text: socialMedia,
            },
            {
                id: 45,
                name: 'address',
                text: address,
            }
        ]
    }
];