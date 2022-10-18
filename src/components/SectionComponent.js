import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddItemForm from "forms/AddItemForm";
import AddIcon from '@mui/icons-material/Add';
import "./SectionComponent.modules.css"
import ItemComponent from "./ItemComponent";

function SectionComponent(props) {
    const category = props.category
    const section = props.section
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    //For adding section modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        window.location.reload();
    };

    const styles = {
        circle: {
            backgroundColor: section.color,
        },
        holder: {
            backgroundColor: section.color,
        }
    }

    function getSectionItems() {
        axios.get('http://localhost:8080/items/getItemsBySection/{section}?section=' + section.name)
            .then(response => {
                setItems(response.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getSectionItems()
    }, [loading])


    return (
        <div className="section">
            <div className={'list-holder'} >
                <div>
                    <div className={"circle-div"}>
                        <div className="circle" style={styles.circle}></div>
                    </div>
                    <div className="holder" style={styles.holder}> </div>
                    <div className="holder holder-small" style={styles.holder}> </div>
                </div>
            </div>
            <div className={'list-frame'} >
                <div className={'list'} >
                    <div className={'list-content'}>
                        <div className="add-icon">
                            <AddIcon onClick={handleOpen} sx={{ fontSize: '20px' }} />
                        </div>
                        <Typography className={'section-title'} variant='h6' fontWeight="bold" >
                            {section.name.toUpperCase()}
                        </Typography>
                        {items.map(item =>
                            <ItemComponent item={item} section={section}/>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={{ backgroundColor: 'white' }}>
                    <AddItemForm category={category} section={section} />
                </Box>
            </Modal>
        </div>
    )
}
export default SectionComponent;