import React, { useState } from "react";
import './ItemComponent.modules.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Checkbox, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateItem } from "redux/ListsSlice";


function ItemComponent(props) {
    const dispatch = useDispatch()
    const [item, setItem] = useState(props.item)

    const handleChangeMissing = () => {
        axios.put("http://localhost:8080/items/toggleMissing", item)
            .then(response => {
                dispatch(updateItem({ toUpdate: item, updated: response.data }))
                setItem(response.data)
            })
            .catch(err => console.log(err))
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
                    <InfoOutlinedIcon sx={{ color: 'rgb(102,102,102)', fontSize: 'inherit' }} />
                </Typography>
            </div>
        </div>
    )
}

export default ItemComponent;