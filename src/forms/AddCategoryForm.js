import { Button, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from 'redux/ListsSlice';
import axios from 'axios';

function AddCategoryForm() {
    const { register, setValue, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const colors = [
        "rgb(235, 78, 62)",
        "rgb(241,154,56)",
        "rgb(248,206,70)",
        "rgb(94,196,102)",
        "rgb(105,168,236)",
        "rgb(53,120,247)",
        "rgb(88,86,207)",
        "rgb(217,80,108)",
        "rgb(182,122,214)",
        "rgb(154,133,104)",
        "rgb(94,102,111)",
        "rgb(210,168,161)",
    ]

    const onSubmit = (data) => {
        data.sections = []
        axios.post("http://localhost:8080/categories/addCategory", data)
            .then(response => dispatch(addCategory(response.data)))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography>
                New List:
            </Typography>
            <Typography>
                Name:
            </Typography>
            <TextField variant="outlined" {...register("name", { required: true })} required />
            <Typography>
                Color:
            </Typography>
            {colors.map(color =>
                <CircleIcon key={color} sx={{ color: color }} onClick={() => setValue("color", color)} />
            )}
            {/* onClick = should close. 
                todo: figure out a way to pass the data to the Modal component */}
            <Button > Cancel </Button>
            <Button type="submit"> Save </Button>
        </form>
    );
}

export default AddCategoryForm;