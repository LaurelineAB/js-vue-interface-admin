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
            let buttons = document.querySelectorAll("tbody tr button:first-of-type");
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
        },

        addUser (event) 
        {
            let newId = this.users.length +1;
            let newFirstName = event.target.elements.first.value;
            let newLastName = event.target.elements.last.value;
            let newEmail = event.target.elements.email.value;
            let newUser =
            {
                id: newId,
                firstName: newFirstName,
                lastName: newLastName,
                email: newEmail,
                isActive: true
            };
            this.users.push(newUser);
        },

        modifyUser(user)
        {
            let tbody = document.querySelector("tbody");
            let row = document.createElement("tr");
            let index = parseInt(user.id);
            let nextRow = document.querySelector(`tbody tr:nth-of-type(${index+1})`);
            console.log(index);
            tbody.insertBefore(row,nextRow);

            // let form = document.createElement("form");
            let empty = document.createElement("td");

            let tdFirstName = document.createElement("td");
            let inputFirst = document.createElement("input");
            inputFirst.setAttribute("type","text");
            inputFirst.value = user.firstName;
            tdFirstName.appendChild(inputFirst);

            let tdLastName = document.createElement("td");
            let inputLast = document.createElement("input");
            inputLast.setAttribute("type","text");
            inputLast.value = user.lastName;
            tdLastName.appendChild(inputLast);

            let tdEmail = document.createElement("td");
            let inputEmail = document.createElement("input");
            inputEmail.setAttribute("type","text");
            inputEmail.value = user.email;
            tdEmail.appendChild(inputEmail);

            let tdBtn = document.createElement("td");
            let validateBtn = document.createElement("button");
            validateBtn.textContent = "Valider";
            validateBtn.classList.add("btn");
            validateBtn.classList.add("btn-success");
            tdBtn.appendChild(validateBtn);

            // form.appendChild(tdFirstName);
            row.appendChild(empty);
            row.appendChild(tdFirstName);
            row.appendChild(tdLastName);
            row.appendChild(tdEmail);
            row.appendChild(tdBtn);
            
        }
    }
}