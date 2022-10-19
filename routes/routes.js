const express = require("express");
const formsRoutes = express.Router();

const { getForms, getPDF, createForms } = require("../controllers/forms");

formsRoutes.post("{idForm}/data/unread/exercice_entretien/100", createForms);
formsRoutes.get("{idForm}/markasreadbyaction/exercice_entretien", getForms);
formsRoutes.get("{idForm}/data/{dataId}/pdf", getPDF);

module.exports = { formsRoutes };
