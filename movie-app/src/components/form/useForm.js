import React, {useState} from "react";

const useForm = props => {
    const [values, setValues] = useState();
    
    const handleChange = title => event => {
        event.persist();
        setValues(prev => ({...prev, [title]: event.target.name.value}));
    };

    const handleSubmit = async e => {
        e.preventDeafult();
        await props.onSubmit(values);
    };

    return {
        values, handleChange, handleSubmit
    };
}

export default useForm;