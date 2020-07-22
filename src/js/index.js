import './../sass/main.scss';





let questionLabel = () => {

// get a certen question
    document.querySelector('.questions__container').addEventListener('click', event => {
        let item = event.target.closest('.question');

        // -----------------------------------
        if (item) {
            if (item.matches('.question')) {
                if (item.lastElementChild.style.display === 'none') {
                    item.lastElementChild.style.display = 'block';
                    item.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';
                    setTimeout(()=> {
                        item.lastElementChild.classList.toggle('answer--active');
                    }, 1)
                    
                } 
                else if (item.lastElementChild.style.display === 'block') {
                    item.lastElementChild.style.display = 'none';
                    item.firstElementChild.lastElementChild.style.transform = 'rotate(0deg)';
                    setTimeout(()=> {
                        item.lastElementChild.classList.toggle('answer--active');
                    }, 1)
                } 
                else if (!item.lastElementChild.style.display) {
                    item.lastElementChild.style.display = 'block';
                    item.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';
                    setTimeout(()=> {
                        item.lastElementChild.classList.toggle('answer--active');
                    }, 1)
                }
            }
        } 
        // -----------------------------------




    });

   

    
// animate the answer of that question



}

questionLabel();

