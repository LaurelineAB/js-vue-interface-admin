export default {
    data() {
        return {
            users :
            [
                {
                    id: "1",
                    firstName: "Jean",
                    lastName: "Neymar",
                    email: "jean.neymar@rlb.fr",
                    isActive: true
                },
                {
                    id: "2",
                    firstName: "Samuel",
                    lastName: "Ropierd",
                    email: "samro@hotmail.fr",
                    isActive: false
                },
                {
                    id: "3",
                    firstName: "Julie",
                    lastName: "Monnade",
                    email: "ju.limo@hotmail.fr",
                    isActive: false
                },
                {
                    id: "4",
                    firstName: "Céline",
                    lastName: "Didion",
                    email: "almost-diva@musical.io",
                    isActive: true
                },
                {
                    id: "5",
                    firstName: "Loic",
                    lastName: "Grenac'h",
                    email: "logr@proton.bzh",
                    isActive: true
                }
            ]
        }
    },
    methods: 
    {
        changeStatus(event)
        //Sinon, mettre "user" en paramètre, "user" étant déjà défini dans la boucle html
        {
            let buttons = document.querySelectorAll("tbody button");
            let btnArray = Array.from(buttons);
            let index = btnArray.indexOf(event.target);
            for (let i=0; i<buttons.length; i++)
            {

                if (event.target.classList.contains("btn-secondary"))
                {
                    this.users[index].isActive = false;
                }
                else 
                {
                    this.users[index].isActive = true;
                }
            }
        }
    }
}