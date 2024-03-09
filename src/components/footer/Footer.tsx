
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footer__list'>
                <span className='footer__list__title'>adopcja</span>
            </div>
            <div className='footer__list'>
                <span className='footer__list__title'>ogłoszenia</span>
            </div>
            <div className='footer__list'>
                <span className='footer__list__title'>jak pomóc?</span>
            </div>
            <div className='footer__list'>
                <span className='footer__list__title'>kontakt</span>
                <div className='footer__list__item'>
                    <a className='footer__list__item__social-media' href='https://www.facebook.com/'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_19_72)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_19_72">
                            <rect width="24" height="24" fill="currentColor"/>
                            </clipPath>
                            </defs>
                        </svg>                    
                    </a>
                    <a className='footer__list__item__social-media' href='http://www.twitter.com/'>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_19_74)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 2.55705C23.1014 2.95532 22.1481 3.21656 21.172 3.33205C22.2006 2.71723 22.9702 1.74892 23.337 0.608051C22.3704 1.18164 21.3128 1.58579 20.21 1.80305C19.7494 1.31145 19.1928 0.919741 18.5745 0.652245C17.9563 0.384749 17.2896 0.247172 16.616 0.248051C13.437 0.248051 11.101 3.21405 11.819 6.29305C9.86138 6.19506 7.94625 5.68645 6.19796 4.80024C4.44967 3.91404 2.9073 2.67005 1.671 1.14905C1.04148 2.23309 0.848566 3.51623 1.13149 4.73746C1.41441 5.95868 2.15192 7.02627 3.194 7.72305C2.41251 7.69838 1.64826 7.48718 0.965 7.10705C0.911 9.38805 2.546 11.5221 4.914 11.9971C4.18873 12.194 3.42806 12.2228 2.69 12.0811C3.00451 13.0594 3.61703 13.915 4.44184 14.5281C5.26665 15.1411 6.26249 15.481 7.29 15.5001C5.2262 17.1189 2.6043 17.8526 0 17.5401C2.25151 18.9866 4.87183 19.7545 7.548 19.7521C16.69 19.7521 21.855 12.0311 21.543 5.10605C22.5067 4.40887 23.3387 3.54575 24 2.55705Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_19_74">
                            <rect width="24" height="20" fill="currentColor"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;