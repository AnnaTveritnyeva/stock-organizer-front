import { ClickAwayListener, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import './ItemInfoPopper.modules.css'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import UpdateItemForm from "forms/UpdateItemForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateItem } from "redux/ListsSlice";

function ItemInfoPopper(props) {
    const item = props.item;
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    function onSubmitUpdateItem(data) {
        axios.post("http://localhost:8080/items/updateItem", data)
            .then(response => dispatch(updateItem({ toUpdate: item, updated: response.data })))
            .catch(err => console.log(err))
    }

    return (
        <ClickAwayListener onClickAway={props.handleClose}>
            <div className="item-info-container">
                <div className="arrow-left"> </div>
                {editMode ? <UpdateItemForm onSubmitUpdateItem={onSubmitUpdateItem} item={item} handleClose={props.handleClose} /> :
                    <div className="item-info">
                        <div className="item-info-title">
                            <Typography variant="h5" fontWeight="bold">
                                {item.name}
                            </Typography>
                            <EditIcon onClick={() => setEditMode(true)} />
                        </div>
                        <div className="item-info-section-div">
                            <div className="item-info-section-title">
                                <Typography>
                                    Where To Find?
                                </Typography>
                                <AddIcon sx={{ fontSize: '16px' }} />
                            </div>

                            {item.storeURLs.length > 0 ? item.storeURLs.map(store =>
                                <Link key={item.id + store.url} href={store.url} target="_blank">{store.name}</Link>
                            ) : <Typography>No stores added yet</Typography>}
                        </div>
                        <div className="item-info-section-div">
                            <div className="item-info-section-title">
                                <Typography>
                                    Purchase History
                                </Typography>
                                <AddIcon sx={{ fontSize: '16px' }} />
                            </div>
                            {item.purchaseHistory.length > 0 ? item.purchaseHistory.map(date =>
                                <Typography key={date}>
                                    {new Date(date).toLocaleDateString('en-GB')}
                                </Typography>
                            ) : <Typography>No purchase history </Typography>}
                        </div>
                    </div>}
            </div>
        </ClickAwayListener>
    )
}

export default ItemInfoPopper;