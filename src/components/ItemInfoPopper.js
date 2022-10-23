import { Link, Typography } from "@mui/material";
import React from "react";
import './ItemInfoPopper.modules.css'
import EditIcon from '@mui/icons-material/Edit';

function ItemInfoPopper(props) {
    const item = props.item;
    return (
        <div className="item-info-container">
            <div className="arrow-left">

            </div>
            <div className="item-info">
                <Typography variant="h5" fontWeight="bold">
                    {item.name}
                </Typography>
                <div className="item-location-container">
                    <div>
                        {item.organizationHierarchy.categoryName} > {item.organizationHierarchy.sectionName}
                    </div>
                    <EditIcon sx={{ fontSize: "16px" }} />
                </div>
                <Typography variant="h6">
                    Where To Find?
                </Typography>
                {item.storeURLs.length > 0 ? item.storeURLs.map(store =>
                    <Link key={item.id + store.url} href={store.url} target="_blank">{store.name}</Link>
                ) : <Typography>No stores added yet</Typography>}
                <Typography variant="h6">
                    Purchase History
                </Typography>
                {item.purchaseHistory.length > 0 ? item.purchaseHistory.map(date =>
                    <Typography>
                        {new Date(date).toLocaleDateString('en-GB')}
                    </Typography>
                ) : <Typography>No purchase history </Typography>}
            </div>
        </div>
    )
}

export default ItemInfoPopper;