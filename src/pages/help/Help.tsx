import Header from '../../components/header/Header';
import WorkInProgress from '../../components/work-in-progress/WorkInProgress';

import './Help.scss';

const Help = () => {
    return (
        <div className='help'>
            <Header>Nasze potrzeby, czyli jak pomóc</Header>
            <WorkInProgress/>
        </div>
    );
};

export default Help;