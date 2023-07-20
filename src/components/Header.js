import Grid from "@mui/material/Grid";
import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Admin UI</h1>
      </Grid>
    </div>
  );
};

export default Header;
