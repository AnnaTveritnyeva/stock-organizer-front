import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddCategoryForm from '../forms/AddCategoryForm';
import _ from 'underscore';
import store from 'redux/store';
import './Lists.modules.css'
import CategoryComponent from './CategoryComponent';


function Lists() {
    // @ts-ignore
    const items = store.getState().lists.items;
    // @ts-ignore
    const categories = store.getState().lists.categories;


    //For adding category modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="List">
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

            <div className='categories-container' >
                {categories.map(category =>
                    <CategoryComponent key={category.id} category={category} />
                )}
            </div>
        </div>
    );
}

export default Lists;