import React, { Component } from "react";
import { mydata } from "./Data";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const Table = ({ incoming }) => {
//   console.log(incoming);
//   return (
//     <>
//       <table class="table table-dark table-striped">
//   <thead>
//     <tr>
//       <th scope="col">User Id</th>
//       <th scope="col">ID</th>
//       <th scope="col">Title</th>
//       <th scope="col">Completed</th>
//     </tr>
//   </thead>
//   <tbody>
//       {incoming.map((element,i)=>(
//         <>
//           <tr>
//             <th scope="row">{element.userId}</th>
//             <td>{element.id}</td>
//             <td>{element.title}</td>
//             <td>{element.completed=== true ? "Completed" : "Not completed"}</td>
//           </tr>
//         </>
//       ))}

//   </tbody>

// </table>
//     </>
//   );
// };

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1],
    };
  }

  onAdd = () => {
    var temp = this.state.arr;
    temp.push(temp.length + 1);
    this.setState({ arr: temp });
  };

  onRemove = () => {
    var temp = this.state.arr;
    temp.pop();
    this.setState({ arr: temp });
  };
  render() {
    return (
      <>
        <h1>hi </h1>

        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
              {this.state.arr.map((data, i) => (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Item>
                      {" "}
                      <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        fullWidth
                      />
                    </Item>
                  </Grid>
                </Grid>
              ))}
              <Box sx={{ flexGrow: 1, marginTop: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Stack spacing={2} fullWidth direction="row" style={{justifyContent:"center"}}>
                      <Button variant="contained" onClick={this.onAdd}>
                        Add more
                      </Button>
                    </Stack>
                  </Grid>

                  <Grid item xs={6}>
                    <Stack spacing={2} fullWidth direction="row"style={{justifyContent:"center"}}>
                      <Button variant="contained" onClick={this.onRemove}>
                        Remove
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </React.Fragment>
      </>
    );
  }
}
export default Table;
