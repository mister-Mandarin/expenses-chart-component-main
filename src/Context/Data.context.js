import React, {useContext, useEffect, useState} from 'react';
import dataAPI from './data.json';

const LayoutData = React.createContext({})

export const useLayoutData = () => {
    return useContext(LayoutData);
}

export const ContextDataProvider = ({children}) => {

    const [stateData, setStateData] = useState([])

    function addRatioToData(data) {
        // находим максимальное значение поля amount
        const maxAmount = Math.max(...data.map(item => item.amount));

        // console.log('я в провайдере, до добавления новых данных старные такие', data);

        // создаем новый массив объектов с добавлением поля ratio
        const newData = data.map(item => ({
            ...item,
            ratio: item.amount * 100 / maxAmount
        }));
// возвращается объект с массивом из объектов, переделываем в массив с объектами
        Object.keys(newData);

        return newData;
    }

    useEffect(() => {

        // используем хук useEffect для инициализации локального state,
        // который получает данные из файла data.json при монтировании компонента
        setStateData(addRatioToData(dataAPI));
    }, []);

    return (
        <LayoutData.Provider value={{stateData}}>
            {children}
        </LayoutData.Provider>
    );
};