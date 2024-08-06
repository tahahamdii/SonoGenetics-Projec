import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "./dbConfig/dbConnection.js";
import patientRoutes from "./routes/patientRoutes.js";
import medicalReportRoutes from "./routes/medicalReportRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import treatmentRoutes from "./routes/treatmentRoutes.js";
import detectionRoutes from "./routes/detectionRoutes.js";
import imageRoutes from "./routes/irmRoutes.js";
import uploadRoute from "./controllers/irmController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8800;
app.use(express.json());

// MongoDB Connection

dbConnection();

// Middleware

app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.urlencoded({extended: true}));


app.use(morgan("dev"));

app.use('/api/patients', patientRoutes);
app.use('/api/medical-reports', medicalReportRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/treatments', treatmentRoutes);
app.use('/api/detections', detectionRoutes);
app.use('/api/images', imageRoutes);

app.use("/api/images" , uploadRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});