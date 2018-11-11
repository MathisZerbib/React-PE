import React from "react";
import Grid from "react-css-grid";



class GridLayout extends React.Component {
    render () {
        return (
            <Grid
                width={96}
                gap={16}>
                <h2>Hello</h2>
                <h2>Hi</h2>
            </Grid>
        )
    }
}
export default GridLayout;