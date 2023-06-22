export default {  
    data() {  
        
    },
    setup () {
	    // le code sera exécuté à la création de l'APP
        let path = window.location.pathname;
        console.log(path);

        return {
            path
        }
    },  
    methods : {  

    }  
}