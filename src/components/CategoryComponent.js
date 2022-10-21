import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SectionComponent from "./SectionComponent";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import AddSectionForm from "forms/AddSectionForm";
import './CategoryComponent.modules.css'
import axios from "axios";
import { updateCategory } from "redux/ListsSlice";
import { useDispatch } from "react-redux";


function CategoryComponent(props) {
    const dispatch = useDispatch()
    const [category, setCategory] = useState(props.category)

    //For adding section modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
    };

    const styles = {
        tape: {
            background: category.color,
        },
    }

    function onSubmitAddSection(data) {
        axios.post("http://localhost:8080/categories/addSection?categoryId=" + category.id, data)
            .then(response => {
                dispatch(updateCategory({ toUpdate: category, updated: response.data }))
                setCategory(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="category">
            <div className="tape" style={styles.tape}>

            </div>
            <div key={category.id} className={"category-title"} >
                <Typography variant="h3" color={category.color} fontWeight="bold">
                    {category.name}
                </Typography>
            </div>
            <div className="category-content" >
                <div className="add-icon" >
                    <AddCircleOutlineIcon onClick={handleOpen} fontSize="large" />
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    <Box sx={{ backgroundColor: 'white' }}>
                        <AddSectionForm category={category} onSubmitAddSection={onSubmitAddSection} />
                    </Box>
                </Modal>
                <div className={"sections-container"}>
                    {category.sections.map(section =>
                        <SectionComponent key={section.name} category={category} section={section} />
                    )}
                </div>
            </div>
        </div>
    )

}

export default CategoryComponent;