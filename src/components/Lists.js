import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios";
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Container, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddCategoryForm from '../forms/AddCategoryForm';
import { Category } from '../model/Category.js';


function Lists() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const categories = new Set();

    //For adding category modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function getItems() {
        axios.get("http://localhost:8080/items/getAllItems")
            .then(response => {
                setItems(response.data)
                setLoading(false)
            })
            .catch(err => { console.log(err) });
    }

    function setCategories() {
        items.map(item =>
            categories.add(new Category(item.organizationHierarchy[0].name, item.organizationHierarchy[0].color))
        )
    }

    function getCategories() {
        const renderedCategories = [];

        categories.forEach((key, value) => {
            renderedCategories.push(
                <Typography key={key} color={value.color}>
                    {value.name}
                </Typography>
            )
        });

        return renderedCategories;
    }

    if (!loading) {
        return (
            <div className="Lists" >
                {setCategories()}
                <AddCircleOutlineIcon onClick={handleOpen} />

                <Modal
                    className={"modal"}
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={{ backgroundColor: 'white' }}>
                        <AddCategoryForm />
                    </Box>
                </Modal>

                <Typography variant='h4'>
                    {/* add user greeting */}
                    Hello, Anna Tveritnyeva
                </Typography>

                <Container>
                    {getCategories()}
                </Container>

            </div>
        );
    }
    else {
        return (
            //loading === true? call axios method. (will call axios method on every page reload)
            <div>
                <CircularProgress />
                {getItems()}
            </div>
        )
    }
}

export default Lists;