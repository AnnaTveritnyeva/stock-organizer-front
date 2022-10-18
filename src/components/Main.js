import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import Lists from './Lists';
import './Main.modules.css'
import Logo from '../assets/Logo.png'

function Main() {
    const [page, setPage] = useState("Categories")
    const pages = ["Categories", "To Buy", "Stores"]

    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    return (
        <Box className='Main' sx={{ width: '100%' }}>
            <div className='header'>
                <img src={Logo} height={'300px'} />
            </div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabContext value={page}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                            <Tab className={"tab"} label={pages[0]} value={pages[0]} />
                            <Tab className={"tab"} label={pages[1]} value={pages[1]} />
                            <Tab className={"tab"} label={pages[2]} value={pages[2]} />
                        </TabList>
                    </Box>
                    <TabPanel value={pages[0]}> <Lists />
                    </TabPanel>
                    <TabPanel value={pages[1]}>{pages[1]}</TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Main;