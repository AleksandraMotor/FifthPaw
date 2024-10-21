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
                    Błąd walidacji formularza
                    <span>Sprawdź, czy w formularzu kontaktowym nie ma komunikatów o wymogach walidacji, takich jak „Podaj adres e-mail...” lub „Nazwa użytkownika jest za krótka/długa”</span>
                </div>                             
            }
            {sucess &&
                <div className="validation__send">
                    <IoIcons.IoMdPaperPlane />
                    <div>
                        Wiadomośc wysłana
                    </div>
                </div>  
            }
            {error &&
                <div className="validation__error">
                    <div className="validation__error__text">
                        <BiIcons.BiMessageSquareError/>
                        Błąd servera
                    </div>
                </div> 
            }  
        </div>         
    );
};

export default Validation;