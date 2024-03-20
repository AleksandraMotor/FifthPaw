import { useEffect, useState } from 'react';
import { AdoptionData } from '../../pages/adoption/AdoptionData';
import AdoptionCard from '../templates/adoption-card/AdptionCard';

import './Filter.scss';
const Filter: React.FC = () => {

    const data = AdoptionData;

    const [filteredPets, setFilteredPets] = useState(data);

    const breeds = Array.from(
        new Set(data.map(item => item.breed))
    );

    const [selectedAge, setSelectedAge] = useState("all");
    const [selectedGender, setSelectedGender] = useState('all');  
    const [selectedBreed, setSelectedBreed] = useState('all');
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setFilteredPets(
            data.filter(item => {
                return (
                    (selectedAge === 'all' || selectedAge === item.age) &&
                    (selectedBreed === 'all' || selectedBreed === item.breed) &&
                    (selectedGender === 'all' || selectedGender === item.gender) &&
                    (item.name.toLowerCase().includes(searchValue.toLowerCase()))
                )
            })
        )
    }, [selectedAge, selectedBreed, selectedGender, searchValue]);

    const clearAllFilters = () => {
        setSelectedAge('all');
        setSelectedGender('all');
        setSelectedBreed('all');
        setSearchValue("");
    };

    return (
        <div className='filter'>
            <div>
                <select
                    name="age"
                    id=""
                    onChange={(e) => setSelectedAge(e.target.value)}
                    value={selectedAge}
                >
                    <option value="all">wszystkie</option>
                    <option value="young">młode</option>
                    <option value="old">stare</option>
                </select>  
            </div>
            <div>
                <select
                    name="gender"
                    id=""
                    onChange={(e) => setSelectedGender(e.target.value)}
                    value={selectedGender}
                >
                    <option value="all">wszystkie</option>
                    <option value="female">samice</option>
                    <option value="male">samce</option>
                </select>
            </div>
            <div>
                <select
                    name="breed"
                    id=""
                    onChange={(e) => setSelectedBreed(e.target.value)}
                    value={selectedBreed}
                >
                    <option value="all">wszystkie</option>
                    {
                        breeds.map((breed, index) => {
                            return (
                                <option key={index} value={breed}>{breed}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <input type="text" onChange={e => setSearchValue(e.target.value)} value={searchValue} placeholder='wpisz imię lub id'/>
            </div>
            <button onClick={() => {clearAllFilters()}}>Clear All Filters</button>
            <div>
                {filteredPets.map((item, index) => (
                    <AdoptionCard key={index} id={item.id} name={item.name} img={item.img} gender={item.gender} age={item.age} desc1={item.desc1} desc2={item.desc2}/>
                ))}
            </div>
        </div>
    );
};

export default Filter;