import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./index.module.css";
import logo from "../../../assets/logo.png";


export default function Navbar() {
    return (
        <Box className={styles.navBox}>
            <AppBar
                sx={{
                    my: "2rem",
                    background: "transparent",
                    boxShadow: "none",
                    position: "absolute",
                    zIndex: "100",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
                    <img className={styles.logoImage} src={logo} alt="AgroBiz" />
                    <span>
                        <a className={styles.links} href={`/`}>Home</a>
                    </span>
                    <span>
                        <a className={styles.links} href={`/aboutus`}>About Us</a>
                    </span>
                    <span>
                        <a className={styles.links} href={`/`}>Market Place</a>
                    </span>
                    <span>
                        <a className={styles.links} href={`/sellingpage`}>Sell Now</a>
                    </span>
                    <span>
                        <a className={styles.links} href={`/contactus`}>Contact US</a>
                    </span>
                    
                    <Button sx={{ background: "rgb(0,178,7)", color: "white" }}>
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
