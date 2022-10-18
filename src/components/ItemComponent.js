import React from "react";
import './ItemComponent.modules.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Checkbox, Typography } from "@mui/material";


function ItemComponent(props) {

    return (
        <div className={'item-container'} key={props.item.id}>
            <Checkbox
                checked={props.item.missing}
                sx={{
                    height: '100%', '&.Mui-checked': {
                        color: props.section.color
                    }
                }}
                icon={<ShoppingBasketOutlinedIcon />}
                checkedIcon={<ShoppingBasketIcon />}

            />
            <div className="item" >
                <Typography sx={{ borderBottom: '1.5px solid black', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span >{props.item.name}</span>
                    <InfoOutlinedIcon sx={{ color: 'rgb(102,102,102)', fontSize: 'inherit' }} />
                </Typography>
            </div>
        </div>
    )
}

export default ItemComponent;