import React, { useState } from 'react';
import { Box, Tab, Typography } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import Lists from './Lists';

function Main() {
    const [page, setPage] = useState("Lists")
    const pages = ["Lists", "To Buy"]


    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant='h2'>
                What To Buy?
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabContext value={page}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label={pages[0]} value={pages[0]} />
                            <Tab label={pages[1]} value={pages[1]} />
                        </TabList>
                    </Box>
                    <TabPanel value={pages[0]}>
                        <Lists
                        />
                    </TabPanel>
                    <TabPanel value={pages[1]}>{pages[1]}</TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Main;