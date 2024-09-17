import LinkIcon from '../../components/link-icon/LinkIcon';
import Logo from '../../components/logo/Logo';
import { socialMediaData } from '../../layouts/footer/FooterData';

import './Contact.scss';

const Contact = ()=> {

    const socialMedia = socialMediaData.map((item, id) => <LinkIcon key={id} link={item.link} icon={item.icon}/>);

    return (
        <article className='contact'>
            <h2 className='contact__title'>kontakt</h2>
            <address className='contact__description'>
                Lorem ipsum...<br/>
                FifthPaw 13 <br/>
                12-345 React<br/>
                WWW3            
            </address>
            <div className='contact__social-media' aria-label='Social Media Links'>
                {socialMedia}  
            </div>
            <Logo/>
        </article>
    );
}

export default Contact;