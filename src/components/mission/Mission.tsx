import mission from '../../assets/images/mission.jpg';
import Logo from '../logo/Logo';

import './Mission.scss';

const Mission = () => {
    return (
        <article className='mission'>
            <h2 className='mission__title'>nasza misja</h2>
            <img className='mission__image' src={mission} alt='our mission'/>
            <p className='mission__description'>
                Lorem ipsum...
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Logo/>
        </article>
    );
};

export default Mission;