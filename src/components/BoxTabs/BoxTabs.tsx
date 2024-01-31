import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, ThemeProvider, createTheme } from "@mui/material"
import { ReactNode, useState } from "react";

interface conteudoTabPanel {
    element: ReactNode,
    indexTab: string
}

interface Props {
    listaTab: string[],
    listaConteudoTabPanel: conteudoTabPanel[]
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff7a0e"
        },
        secondary: {
            main: "#eee"
        }
    }
})


export default function BoxTabs({ listaTab, listaConteudoTabPanel }: Props) {
    const [value, setValue] = useState('0');

    function handleChange(_event: React.SyntheticEvent, newValue: string) {
        setValue(newValue);
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: 696, typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            {listaTab.map((item, index) => <Tab sx={{ width: "50%", background: "#fff", fontWeight: 600, textTransform: "none" }} label={item} value={index.toString()} />)}
                        </TabList>
                    </Box>

                    {listaConteudoTabPanel.map(item => <TabPanel sx={{ padding: 0 }} value={item.indexTab}>{item.element}</TabPanel>)}
                </TabContext>
            </Box>
        </ThemeProvider>
    )
}