import Form from './form/Form';

import './ContactForm.scss';

const ContactForm = () => {

    return (
        <div className="contact-form">
            <h2 className="contact-form__header">Wyślij nam wiadomość!</h2>
            <Form/>                      
        </div>
    );
};

export default ContactForm;