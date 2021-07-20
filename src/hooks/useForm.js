import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }
    const handleInputGroupChange = ({ target ,type}) => {
        const arr = values[type];
        
        let iObj =  target.target.name;        
        setValues({
            ...values,
          'members': arr.map((el,i)=>
            {if (i===Number(iObj)){                
                return target.target.value;
            }
            return el;
        }          
          )
        })
    }
    const handleRemoveArray = ({idx,type})=>{
       console.log(idx);
       const arr = values[type];
        setValues({
            ...values,
          'members': arr.filter((el,i)=>
            {if (i===Number(idx)){
                console.log('entro');
                return false;
            }
            return true;
        }          
          )
        })
    }
    const handleAddArray = ({inputs={},type})=>{                  
        const arr = values[type];
        setValues(
            {
                ...values,
            'members' : [...arr,inputs]////TODO: AVERIGUAR COMO PUEDO OBTENER DINAMIENCAMENTE ESETE MEMBERS
            }
        );
    }

    return [ values, handleInputChange, reset,handleAddArray,handleInputGroupChange,handleRemoveArray ];

}