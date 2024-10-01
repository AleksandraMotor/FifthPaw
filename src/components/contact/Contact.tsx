import LinkIcon from '../link-icon/LinkIcon';
import Logo from '../logo/Logo';
import { socialMediaData } from '../../layouts/footer/FooterData';
import LinkButton from '../link-button/LinkButton';
import { PiArrowUDownLeftBold } from 'react-icons/pi';

import './Contact.scss';

const Contact = ()=> {

    const socialMedia = socialMediaData.map((item, id) => <LinkIcon key={id} link={item.link} icon={item.icon}/>);

    return (
        <article className='contact'>
            <h2 className='contact__title'>kontakt</h2>
            <div className='contact__info'>
                <div className='contact__address'>
                    <span>
                        e-mail: fifthpaw@gmail.com <br/>
                        tel: +48 592 139 482 
                    </span>
                    <LinkButton link={'/about-us/form'} text={'Przejdź do formularza'} icon={<PiArrowUDownLeftBold />}/>
                    <address>
                        FifthPaw<br/>
                        Lorem ipsum 13 <br/>
                        12-345 React<br/>
                        WWW3            
                    </address>
                </div>
                <div className='contact__gmap'>
                    <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Rybna%203,%2030-254%20Krak%C3%B3w+(FifthPaw)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                </div>
            </div>
            <div className='contact__social-media' aria-label='Social Media Links'>
                {socialMedia}  
            </div>
            <Logo/>
        </article>
    );
}

export default Contact;