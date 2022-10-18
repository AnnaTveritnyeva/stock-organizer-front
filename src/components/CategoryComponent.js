import { Box, Typography } from "@mui/material";
import React from "react";
import SectionComponent from "./SectionComponent";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import AddSectionForm from "forms/AddSectionForm";
import './CategoryComponent.modules.css'


function CategoryComponent(props) {
    const category = props.category

    //For adding section modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        window.location.reload();
    };

    const styles = {
        tape: {
            background: category.color,
        },
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
                        <AddSectionForm category={category} />
                    </Box>
                </Modal>
                <div className={"sections-container"}>
                    {category.sections.map(section =>
                        <SectionComponent category={category} section={section} />
                    )}
                </div>
            </div>
        </div>
    )

}

export default CategoryComponent;