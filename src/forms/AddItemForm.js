import { Button, Checkbox, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

function AddItemForm(props) {
    const { register, setValue, handleSubmit } = useForm();
    const [missing, setMissing] = useState(false)

    const onSubmit = (data) => {
        props.onSubmitAddItem(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography> New Item: </Typography>

            <Typography> Name: </Typography>
            <TextField variant="outlined" {...register("name", { required: true })} required />
            <Typography> missing </Typography>
            <Checkbox onChange={() => setMissing(!missing)} />
            {setValue("missing", missing)}
            {setValue("organizationHierarchy", { categoryName: props.category.name, sectionName: props.section.name })}
            {setValue("purchaseHistory", [])}
            {/* onClick = should close. 
                todo: figure out a way to pass the data to the Modal component */}
            <Button > Cancel </Button>
            <Button type="submit"> Save </Button>
        </form>
    );
}

export default AddItemForm;