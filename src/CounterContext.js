import { createContext, useState } from "react";

export let CounterContext = createContext(0);

export function CounterContextProvider(props){
    let [count, setCount] = useState(0)
    let [FavData, setFavData] = useState([])
    function disabled(indx , key) {
        let x = document.getElementById(`key${key}${indx}`)
        x.setAttribute('disabled' , true);
    }
    function increase(movie , indx , key) {
        setCount(count + 1);
        FavData.push(movie) 
        setFavData(FavData)
        disabled(indx , key);
    }
    function dicrease() {
        setCount(count - 1);
    }
    return <CounterContext.Provider value={{count , increase , FavData , dicrease}}>
    {props.children}
    </CounterContext.Provider>

}