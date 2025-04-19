import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

const data = [
    { value: 'Admin', label: 'Admin', },
    { value: 'Manager', label: 'Manager', },
    { value: 'User', label: 'User', },
];

const Form = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = () => {
        console.log("Send Data Successfully...!");
        handleClick();
    }
    return (
        <>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: "flex", flexDirection: "column", gap: 3
                }}
                noValidate
                autoComplete="off"
            >
                <Stack direction={"row"} sx={{ gap: 1 }}>
                    <TextField
                        error={Boolean(errors.firstName)}
                        helperText={
                            Boolean(errors.firstName) ? "This Field Is Required" : null
                        }
                        {...register("firstName", { required: true })}
                        sx={{ flex: 1 }} label="First Name" variant="filled" />
                    <TextField
                        error={Boolean(errors.lastname)}
                        helperText={
                            Boolean(errors.lastname) ? "This Field Is Required" : null
                        }
                        {...register("lastname", { required: true })}
                        sx={{ flex: 1 }} label="Last Name" variant="filled" />
                </Stack>

                <TextField label="Email" variant="filled" />
                <TextField label="Contact Number" variant="filled" />
                <TextField label="Address 1" variant="filled" />
                <TextField label="Address 2" variant="filled" />

                <TextField
                    variant="filled"
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="User"
                    helperText="Please select your currency"
                >
                    {data.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ textAlign: "right" }}>
                    <Button
                        type="submit" sx={{ textTransform: "capitalize" }} variant="contained">
                        Create New User
                    </Button>
                    <Snackbar
                        anchorOrigin={{ vertical:"top", horizontal:"right" }}
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                    >
                        <Alert severity="info" onClose={handleClose} sx={{width:"100%"}}>
                            Data Added Successfully
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </>
    )
}

export default Form;