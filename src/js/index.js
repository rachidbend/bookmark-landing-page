import './../sass/main.scss';




const questionLabel = () => {

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


}

const slides = () => {

    document.querySelector('.slides').addEventListener('click', event => {
        let ctrl = event.target.closest('.slide__ctrl');
        if (ctrl) {
            let id = parseInt(ctrl.id.split('-')[1]) ;
            let slides = document.querySelectorAll('.slide-item');
            let pos = id - 1;
   
            // get the slide with the same id Number
            if (id === 1) {
                document.querySelector('#slide-1').style.left = '0%';
                document.querySelector('#slide-2').style.left = '100%';
                document.querySelector('#slide-3').style.left = '200%';
                
                document.querySelector('#ctrl-1').classList.remove('active');
                document.querySelector('#ctrl-1').classList.add('active');
                document.querySelector('#ctrl-2').classList.remove('active');
                document.querySelector('#ctrl-3').classList.remove('active');
            }
            else if (id === 2) {
                document.querySelector('#slide-1').style.left = '-200%';
                document.querySelector('#slide-2').style.left = '0%';
                document.querySelector('#slide-3').style.left = '100%';
                
                document.querySelector('#ctrl-1').classList.remove('active');
                document.querySelector('#ctrl-1').classList.remove('active');
                document.querySelector('#ctrl-2').classList.add('active');
                document.querySelector('#ctrl-3').classList.remove('active');
            }
            else if (id === 3) {
                document.querySelector('#slide-1').style.left = '-200%';
                document.querySelector('#slide-2').style.left = '-100%';
                document.querySelector('#slide-3').style.left = '0%';
                
                document.querySelector('#ctrl-1').classList.remove('active');
                document.querySelector('#ctrl-1').classList.remove('active');
                document.querySelector('#ctrl-2').classList.remove('active');
                document.querySelector('#ctrl-3').classList.add('active');
            }
            else {
                console.log('there has been an error in the slides');
            }
        }        
    });
}

questionLabel();
slides();


function emailErrorAdd ()  {
    document.querySelector('.form__email').classList.add('email--error');
    document.querySelector('.email__label').classList.add('label--error');
    document.querySelector('.email__error').classList.add('error--error');
}

function emailErrorRemove ()  {
    document.querySelector('.form__email').classList.remove('email--error');
    document.querySelector('.email__label').classList.remove('label--error');
    document.querySelector('.email__error').classList.remove('error--error');
}


const form = document.querySelector('.contact__form');
const email = document.querySelector('.form__email');
const errorMessage = document.querySelector('.email__label');



form.addEventListener('submit', e => {
    let messages = [];
    emailErrorRemove();
    if (email.value === '' || email.value === null) {
        messages.push('Email is required');
    }
    if (!email.value.includes('@')) {
        messages.push('you have to include @');
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        messages.push('the email is formatted incorectly');
    }
    if (messages.length > 0) {
        emailErrorAdd();
        e.preventDefault();
        errorMessage.innerText = messages.join(', ');
    }
});





const mobile = () => {

    const mobileToggleAdd = () => {
        document.querySelector('.mobile').classList.add('mobile-active');
        document.querySelector('.mobile__add').parentNode.style.display = 'none';
    }

    const mobileToggleRemove = () => {
        document.querySelector('.mobile__add').parentNode.style.display = 'block';
        document.querySelector('.mobile').classList.remove('mobile-active');

    }



    // when Hamburger is clicked show the mobile menu
    document.querySelector('.mobile__add').addEventListener('click', event => {
        const mobileAdd = event.target.closest('.mobile__add');
        if (mobileAdd) {
            mobileToggleAdd();
        }  
    })

    // when the Close is clicked remove the nav toggle
    document.querySelector('.mobile__close').addEventListener('click', event => {
        const mobileClose = event.target.closest('.mobile__close');
        if (mobileClose) {
            mobileToggleRemove();
        }
    })


    // when one of the items is clicked (nav, social) remove the mobile nav

    document.querySelector('.mobile').addEventListener('click', event => {
        const mobileLink = event.target.closest('a');
        if (mobileLink) {
            mobileToggleRemove();
        }
    })


}

mobile();









