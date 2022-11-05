// @ts-nocheck
import { Button, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import './UpdateItemForm.modules.css'
import DeleteIcon from '@mui/icons-material/Delete';

function UpdateItemForm(props) {
    const [item, setItem] = useState(props.item)
    const { register, setValue, handleSubmit, control } = useForm({
        defaultValues: item
    });

    const onSubmit = (data) => {
        props.onSubmitUpdateItem(data)
        props.handleClose()
    }

    const handleDeleteStore = (store) => {
        item.storeURLs.splice(item.storeURLs.indexOf(store), 1)
        setItem({ ...item })
        setValue("storeURLs", item.storeURLs)
    }

    const handleDeletePurchaseDate = (date) => {
        item.purchaseHistory.splice(item.purchaseHistory.indexOf(date), 1)
        setItem({ ...item })
        setValue("purchaseHistory", item.purchaseHistory)
    }

    return (
        <form className="item-info" onSubmit={handleSubmit(onSubmit)}>
            {console.log("rerender....")}
            <div className="item-name">
                <input placeholder={"Name"} defaultValue={item.name} {...register("name")} />
            </div>
            <div className="item-info-section-div">
                <div className="item-info-section-title">
                    <Typography>
                        Where To Find?
                    </Typography>
                </div>

                {item.storeURLs.length > 0 ? item.storeURLs.map((store) =>
                    <div key={item.id + item.storeURLs[item.storeURLs.indexOf(store)].url} className='store-info'>
                        <input placeholder={"Store Name"} defaultValue={store.name} {...register("storeURLs[" + item.storeURLs.indexOf(store) + '].name')} />
                        <input type={"url"} placeholder={"Store URL"} defaultValue={store.url} {...register("storeURLs[" + item.storeURLs.indexOf(store) + '].url')} />
                        <DeleteIcon onClick={() => handleDeleteStore(store)} />
                    </div>
                ) : <Typography>No stores added yet</Typography>}
            </div>
            <div className="item-info-section-div">
                <div className="item-info-section-title">
                    <Typography>
                        Purchase History
                    </Typography>
                </div>
                {item.purchaseHistory.length > 0 ? item.purchaseHistory.map((date) =>
                    <div key={item.id + date} className='purchase-history'>
                        <input type="date" defaultValue={date} {...register('purchaseHistory[' + item.purchaseHistory.indexOf(date) + ']')} />
                        <DeleteIcon onClick={() => handleDeletePurchaseDate(date)} />
                    </div>
                ) : <Typography>No purchase history </Typography>}
            </div>
            <div className='buttons'>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button type='submit'>Save</Button>
            </div>
        </form>
    );
}

export default UpdateItemForm;