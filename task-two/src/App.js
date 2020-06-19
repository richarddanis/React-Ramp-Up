import React from "react";
import AddNewMovie from "./moviepopulator/AddNewMovie";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export class App extends React.Component {
    render() {
        return (<>
            <Container fixed>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}>
                            <AddNewMovie/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Find your movie</p>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>)
    }
}

export default App;