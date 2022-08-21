import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  const { isAuthenticated } = true;
  const { items } = 0;

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="flex flex-grow">
          Ecommerce Shop
        </Typography>
        <div>
          {!isAuthenticated && (
            <Button color="inherit" component={Link} to={`/login`}>
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Button color="inherit" component={Link} to={`/orders`}>
              My Orders
            </Button>
          )}
          <IconButton
            aria-label="access shopping cart"
            color="inherit"
            component={Link}
            to="/cart"
          >
            <Badge badgeContent={items?.length || 0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
