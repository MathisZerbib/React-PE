import React from "react";
import Grid from "react-css-grid";
import Video from "../components/Video"
const Blog = () => {
    return(

        <Grid
            width={96}
            gap={16}>
            <h2><Video/></h2>
            <h2><Video/></h2>
            <h2><Video/></h2>
            <h2><Video/></h2>
        </Grid>


    );

};

export default Blog;