import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Validation from '../validation/Validation';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import * as HiIcons from 'react-icons/hi2';

import './Form.scss';

const Form = () => {

    const [showMessage, setshowMessage] = useState(false);
    const showInfo = () => setshowMessage(!showMessage);
    const [showSucess, setshowSucess] = useState(false);
    const showStatus = () => setshowSucess(!showSucess);
    const [showError, setshowError] = useState(false);
    const showErroStatus = () => setshowError(!showError);
    const form = useRef();

    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    const sendEmail = () => {        
        emailjs
        .sendForm(
            'service_a0hnxcn', 
            'template_czb8tjo', 
            form.current, 
            'uS_Xt1WLPdNMYH-IM')
        .then((result: { text: any; }) => {
            console.log("result.text", result.text);
            console.log("message send");
            return (showStatus())
                
        } , (error: { text: any; }) => {
            console.log("error.text", error.text);
            return (showErroStatus());
        });
    };

    return (
        <form 
            className="form"
            ref={form} 
            onSubmit={handleSubmit(sendEmail)}
        >
            <label>Imię</label>
            <input
                name="user_name"
                type="text"
                placeholder="Imię"
                className="form__input"
                {...register("user_name", {
                    required: "Imię jest wymagane.",
                    minLength: {
                        value: 3,
                        message: "Imię musi mieć conajmniej 3 znaki."
                    },
                    maxLength: {
                        value: 30,
                        message: "Imię nie może być dłuższe niż 30 znaków."
                    },
                })}
            />
            <div className="form__message">
                {errors.user_name?.message?.toString()}
            </div>
            <label>Email</label>
            <input
                name="user_email"
                type="email"
                placeholder="Email"
                className="form__input"
                {...register("user_email", {
                    required: "Email jest wymagany...",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Wymagany prawidłowy adres email.",
                    },
                })} 
            />
            <div className="form__message">
                {errors.user_email?.message?.toString()}
            </div>
            <label>Wiadomość</label>
            <textarea
                name="message"
                placeholder="Tutaj napisz treść swojej wiadomości."
                className="form__input"
            />
            <input 
                className="form__send-button" 
                type="submit" 
                value="Wyślij"
                onClick={showInfo}
            />
            {showMessage && 
                <div className='form-modal'>
                    <div
                        id='checking'
                        className="form-modal__checking"
                    >
                        Sprawdzanie formularza...
                        <HiIcons.HiOutlineArrowPath/>
                    </div>
                    <Validation sucess={showSucess} error={showError}/>
                    <button 
                        className="form__send-button"
                        onClick={showInfo}
                    >
                        Wróć do formularza kontaktowego<PiArrowUDownLeftBold />
                    </button>      
                </div> 
            }
        </form> 
    );
};

export default Form;