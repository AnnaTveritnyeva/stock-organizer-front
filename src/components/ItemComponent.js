import React, { useState } from "react";
import './ItemComponent.modules.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Checkbox, Popper, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateItem } from "redux/ListsSlice";
import ItemInfoPopper from "./ItemInfoPopper";


function ItemComponent(props) {
    const dispatch = useDispatch()
    const [item, setItem] = useState(props.item)

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChangeMissing = () => {
        axios.put("http://localhost:8080/items/toggleMissing", item)
            .then(response => {
                dispatch(updateItem({ toUpdate: item, updated: response.data }))
                setItem(response.data)
            })
            .catch(err => console.log(err))
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    return (
        <div className={'item-container'} key={item.id}>
            <Checkbox
                checked={item.missing}
                sx={{
                    height: '100%', '&.Mui-checked': {
                        color: props.section.color
                    }
                }}
                onChange={handleChangeMissing}
                icon={<ShoppingBasketOutlinedIcon />}
                checkedIcon={<ShoppingBasketIcon />}

            />
            <div className="item" >
                <Typography sx={{ borderBottom: '1.5px solid black', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span >{item.name}</span>
                    <InfoOutlinedIcon sx={{ color: 'rgb(102,102,102)', fontSize: 'inherit' }} onClick={handleClick} />
                </Typography>
            </div>

            <Popper open={open} anchorEl={anchorEl} placement={'right'} >
                <ItemInfoPopper item={item} handleClose={handleClose} />
            </Popper>
        </div>
    )
}

export default ItemComponent;