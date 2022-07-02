import React from 'react';
import { useParams } from "react-router";


const Params = (props) => {

    const { word, col, bgCol } = useParams();
    
        return (
            <div>
                {isNaN(word)? 
                    <h1 style={col?{color: col, backgroundColor: bgCol}:null}>
                    The word is: {word}</h1>
                    :
                    <h1> The number is: {word}</h1>
                }
            </div>
    );
}

export default Params;