/**
 * Title: Job Portal Assignment
 * Author: Md Rakib Mia
 */

/* external imports */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();



/* enable server */
app.listen(port, () => {
  console.log(
    colors.green.italic.bold(`Success: Job portal connected on port ${port}`)
  );
});
