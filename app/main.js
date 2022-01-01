import app from "./app.js";
import Home from "../controllers/Home.js";
import CalendarSalatOfMounth from "../controllers/CalendarSalatOfMounth.js";
import SalatOfTheDay from "../controllers/SalatOfTheDay.js";
import MosqueOfCity from "../controllers/MosqueOfCity.js";
// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {
  // Instanciation du Vanilla Router, en mode hash dans l'URL : /#/<route>
  app.mvc.router = new Router({
    mode: "hash",
    root: "/index.html",
  });

  app.mvc.router
    .add("/", () => app.mvc.dispatchRoute(new Home()))
    .add("/calandar", () => app.mvc.dispatchRoute(new CalendarSalatOfMounth()))
    .add("/day", () => app.mvc.dispatchRoute(new SalatOfTheDay()))
    .add("/mosque", () => app.mvc.dispatchRoute(new MosqueOfCity()));

  app.mvc.router.check().addUriListener();
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialisation du routeur.
  initializeRouter();
});
