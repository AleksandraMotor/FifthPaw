import { useEffect, useState } from 'react';
import { AdoptionData } from '../../pages/adoption/AdoptionData';
import AdoptionCard from '../templates/adoption-card/AdptionCard';
import dogs from '../../assets/images/dogs.jpg';
import cats from '../../assets/images/cats.jpg';
import classNames from 'classnames';

import './Filter.scss';

const Filter: React.FC = () => {

    const data = AdoptionData;
    const breeds = Array.from(
        new Set(data.map(item => item.breed))
    );
    const [filteredData, setFilteredData] = useState(data);
    const [selectedDogs, setSelectedDogs] = useState(true);
    const [selectedCats, setSelectedCats] = useState(true);
    const [selectedAge, setSelectedAge] = useState("all");
    const [selectedGender, setSelectedGender] = useState('all');  
    const [selectedBreed, setSelectedBreed] = useState('all');
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setFilteredData(
            data.filter(item => {
                return (
                    (selectedDogs && 'dog' === item.type || selectedCats && 'cat' == item.type) &&
                    (selectedAge === 'all' || selectedAge === item.age) &&
                    (selectedBreed === 'all' || selectedBreed === item.breed) &&
                    (selectedGender === 'all' || selectedGender === item.gender) &&
                    (item.name.toLowerCase().includes(searchValue.toLowerCase()))
                )
            })
        )
    }, [selectedAge, selectedBreed, selectedGender, searchValue, selectedDogs, selectedCats]);

    const clearAllFilters = () => {
        setSelectedAge('all');
        setSelectedGender('all');
        setSelectedBreed('all');
        setSearchValue("");
        setSelectedDogs(true);
        setSelectedCats(true);
    };

    return (
        <>
            <div className='filter'>
                <div className='filter__type'>
                    <div
                        className={classNames({
                            'filter__type__option': true,
                            'filter__type__option--dogs': true,
                            'filter__type__option--inactive': !selectedDogs
                        })}
                        onClick={() => setSelectedDogs(!selectedDogs)}    
                    >
                        <img src={dogs} alt="Search for dogs" />
                        <span className='filter__type__option__label'>Psy</span>
                    </div>
                    <div
                        className={classNames({
                            'filter__type__option': true,
                            'filter__type__option--cats': true,
                            'filter__type__option--inactive': !selectedCats
                        })}
                        onClick={() => setSelectedCats(!selectedCats)}
                    >
                        <img src={cats} alt="Search for cats" />
                        <span className='filter__type__option__label'>Koty</span>
                    </div>
                </div>
                <div className='filter__age'>
                    <label className='filter__age__label' htmlFor="age">wiek</label>
                    <select
                        className='filter__age__select'
                        name="age"
                        id="age"
                        onChange={(e) => setSelectedAge(e.target.value)}
                        value={selectedAge}
                    >
                        <option className='filter__age__select__option' value="all">wszystkie</option>
                        <option className='filter__age__select__option' value="young">młode</option>
                        <option className='filter__age__select__option' value="old">seniorzy</option>
                    </select>  
                </div>
                <div className='filter__gender'>
                <label className='filter__gender__label' htmlFor="gender">płeć</label>
                    <select
                        className='filter__gender__select'
                        name="gender"
                        id="gender"
                        onChange={(e) => setSelectedGender(e.target.value)}
                        value={selectedGender}
                    >
                        <option className='filter__gender__select__option' value="all">wszystkie</option>
                        <option className='filter__gender__select__option' value="female">samice</option>
                        <option className='filter__gender__select__option' value="male">samce</option>
                    </select>
                </div>
                <div className='filter__breed'>
                <label className='filter__breed__label' htmlFor="breed">rasa</label>
                    <select
                        className='filter__breed__select'
                        name="breed"
                        id="breed"
                        onChange={(e) => setSelectedBreed(e.target.value)}
                        value={selectedBreed}
                    >
                        <option className='filter__breed__select__option' value="all">wszystkie</option>
                        {breeds.map((breed, index) => {
                            return (
                                <option className='filter__breed__select__option' key={index} value={breed}>{breed}</option>
                            )
                        })}
                        
                    </select>
                </div>
                <div className='filter__other'>
                    <div className='filter__other__search'>
                        <label className='filter__other__search__label' htmlFor="search">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                        </label>
                        <input
                            className='filter__other__search__input'
                            type="text"
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder='wpisz imię'
                        />
                    </div>
                    <button
                        className='filter__other__clear'
                        onClick={() => {clearAllFilters()}}
                    >
                        <span className='filter__other__clear__text'>wyczyść filtry</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='filter-result'>
                {filteredData.map((item) => (
                    <AdoptionCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        gender={item.gender}
                        age={item.age}
                        desc1={item.desc1}
                        desc2={item.desc2}
                        url={item.url}
                        breed={item.breed}
                    />
                ))}
            </div>
        </>
    );
};

export default Filter;