export default {  
    data() {  
        //  return {
        //     path: ""
        //  }
    },
    setup () {
	    // le code sera exécuté à la création de l'APP
        let path = window.location.pathname;
        console.log(path);

        return {
            path
        }
        // if (path === "/home/laurelineaga-bibrac/js-vue-interface-admin/index.html")
        // {
        //     let home = document.querySelector("#header nav");
        //     console.log(home);
        //     home.classList.add("active");
        // }
        // else if (path === "/home/laurelineaga-bibrac/js-vue-interface-admin/users.html")
        // {
        //     let users =  document.querySelector("#header navbar-nav a:nth-of-type(2)");
        //     users.classList.add("active");
        // }
        
    },  
    methods : {  
        // getCurrentPage()
        // {
        //     this.path = window.location.pathname;
        // }
    }  
}