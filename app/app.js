let app = {

    mvc: {
        // Instance de la classe Router de la librairie vanilla-router.js
        router: null,

        dispatchRoute: function (controllerInstance) {
            // Vérifie que le contrôleur est un contrôleur valide
            if (!controllerInstance.hasOwnProperty('url') || !controllerInstance.executeHttpRequest) {
                return console.warn(`Le controller ${controllerInstance.constructor.name} est invalide.`);
            }

            // Exécute une requête HTTP GET pour récupérer la vue, et définir la chaîne de promesses pour traiter la réponse
            fetch(controllerInstance.url)
                .then(response => response.text()) // Renvoie d'une promesse avec le contenu de la réponse HTTP.
                .then(htmlContent => {
                    // La réponse HTTP contient le HTML de la vue à injecter.
                    document.querySelector('main').innerHTML = htmlContent;

                    // Exécution du gestionnaire de la vue.
                    controllerInstance.executeHttpRequest();
                });
        },

        redirectTo: function (url) {
            // Demande au routeur de charger une nouvelle route.
            app.mvc.router.navigateTo(url);
        }
    }
    
}

export default app;