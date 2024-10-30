import express from "express";
import { logindatas } from "../Controllers/login.controllers";
const routers = express.Router();
routers.get('/log',logindatas);