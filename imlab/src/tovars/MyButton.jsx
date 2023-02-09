import React from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

function MyButton(props) {
    return (
    <Stack spacing={2} direction="row">
        <Button variant="contained" color="success">{props.name}</Button>
    </Stack>
    )
}

export default MyButton;