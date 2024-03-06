import { AppBar, Toolbar, Button, Box, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, } from "@mui/material";
import styles from './index.module.css'
import { useLocalStorage } from "usehooks-ts";

const SellerDashboard = () => {

  const [products, setProducts] = useLocalStorage('ADDPRODUCTS_KEY', []);
  console.log(products)

  function deleteItem(index) {
    // console.log(index)
    setProducts(products.filter((p, i) => i !== index));
  }



  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar sx={{ my: "1rem", backgroundColor: 'rgb(0,178,7)' }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <span className={styles.startSelling}>
            My Profile
          </span>
        </Toolbar>
      </AppBar>
      <Typography sx={{ mx: "1rem", color: 'black' }}> <h1><i>My store</i></h1> </Typography>

      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 345, my: "2rem", mx: "3rem", height: "100%" }}

            >
              <CardMedia component="img" alt="item" height="160" image="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  QTY: {product.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GHS {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <span> 

                    EDIT
                               
                </span>
                <Button onClick={() => deleteItem(index)} size="medium">DELETE</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Container sx={{ my: "10rem", ml: '0rem' }} maxWidth="sm">
        {/* <Button sx={{background: "rgb(0,178,7)", color: 'white'}} size="large" variant="outlined">
          Start selling
        </Button> */}
        <span className={styles.nextPage}>Start Selling
          
        </span>
      </Container>
    </Box>
  );
};

export default SellerDashboard;
