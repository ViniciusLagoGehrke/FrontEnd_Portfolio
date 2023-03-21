import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/ViniciusLagoGehrke">
				Visit my GitHub
      </Link>{" "}
      {new Date().getFullYear()}
			.
    </Typography>
  );
}

export default Copyright;
