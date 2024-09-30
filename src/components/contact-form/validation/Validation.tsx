import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

import './Validation.scss';

export interface ValidationProps {
    sucess: boolean;
    error: boolean;
}

const Validation = ({ sucess, error }: ValidationProps) => {
    return (
        <div className="validation">
            {!sucess && !error &&
                <div className="validation__info">
                    Form Validation
                    <span>Check your contact form for validation requirement messages like "Email is required..." or " "Username is to short/long"</span>
                </div>                             
            }
            {sucess &&
                <div className="validation__send">
                    <IoIcons.IoMdPaperPlane />
                    <div>
                        Message Sent
                    </div>
                </div>  
            }
            {error &&
                <div className="validation__error">
                    <div className="validation__error__text">
                        <BiIcons.BiMessageSquareError/>
                        Server Error
                    </div>
                </div> 
            }  
        </div>         
    );
};

export default Validation;