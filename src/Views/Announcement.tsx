import { Button, Card, Grid, TextField, Typography} from "@mui/material";
import {Box, spacing} from "@mui/system"
// import theme from "../Theme/Theme";
import {useState} from 'react'



const Annoucement = () => {

    const [header, setHeader] = useState('sdf');
    const [description, setDescription] = useState();
    // theme.spacing(2);
    return ( 
        <Box 
            sx={{m:5, p:5 }}
            component="form"
            noValidate
            autoComplete="off"
        >
            <Card sx={{boxShadow:'10px'}}>
                <Grid
                    // container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={10}
                >
                    <Typography variant="h5" sx={{p:2}}>Annoucement</Typography>
                    <Grid
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        item
                    >
                        <TextField 
                            id="header"
                            label="Header"
                            value={header}
                            sx={{m:5, width:'30%'}}
                            size="small"
                        />     
                    </Grid>   
                    
                    <Grid
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        item
                    >
                        <TextField 
                            id="description"
                            label="Description"
                            value={description} 
                            variant="outlined" 
                            multiline
                            rows={5}
                            sx={{m:5, width:'30%'}}
                        />     
                    </Grid>   
                    
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{p:5}}
                    >
                        <Button 
                            variant="contained"
                            color="error"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>    
            </Card>
        </Box>
     );
}

export default Annoucement;