


const main = ()=>
{

    let showHambugerMenu=false;

    const hambugerIcon = document.querySelector(".hambuger-menu");
    const menuLinks = document.querySelector("#main-menu-links")
    hambugerIcon.addEventListener("click",()=>{

        if(showHambugerMenu)
        {
            menuLinks.style.display="none";
            showHambugerMenu=false;
        }

        else
        {
            menuLinks.style.display="block";
            showHambugerMenu=true;


        }
       
    });


    const container = document.querySelector("#task-list-bottom-area");

    container.addEventListener("click",(e)=>{

        const element = e.target 

        if(element.tagName == "A" && element.innerHTML.includes("Remove"))
        {
            alert("CLICKED!");

            const answer = confirm("Are you sure you want to delete this task?")

            if(answer)
            {
                loca
            }
        }
        
        e.preventDefault();
    })
}

main();