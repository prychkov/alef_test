window.addEventListener('DOMContentLoaded', function() {

    let pageUp = document.getElementsByClassName('pageup')[0];
    const anchors = document.querySelectorAll('a[href*="#"]');
    let form = document.getElementById('form');
    let email = document.querySelector('.subscribe__email');
    let messages = {
        fail: 'Не верно введен email.',
        right: 'Спасибо мы с вами свяжемся!'
    };
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    


    window.addEventListener('scroll', function () {
        if (this.pageYOffset > 1000) {
            pageUp.style.display = 'block';
        } else {
            pageUp.style.display = 'none';
        }
    });



    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.appendChild(statusMessage);
        let re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        let userEmail = email.value;
        let valid = re.test(userEmail);
        if (valid) {
            statusMessage.innerHTML = messages.right;
            email.value = '';
        } else {
            statusMessage.innerHTML = messages.fail;
        }
    });

    let parrentHeart = document.querySelector('.promo__wrapper');
    let heart = document.querySelectorAll('.promo-card__heart');
    let messageHeart = {
        add: 'Добавлено в избранное'
    };
    let showMessage = document.createElement('div');
    showMessage.classList.add('favorites');
    let wrapperHeart = document.querySelectorAll('.promo-card__wrapper');



    function heartActive(n) {
        heart[n].classList.add('heart-active');
        wrapperHeart[n].appendChild(showMessage);
        showMessage.innerHTML = messageHeart.add;
    }

    parrentHeart.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('promo-card__heart') || target.classList.contains('promo-card__wrapper')) {
            for (let i = 0; i < heart.length; i++) {
                if (target == heart[i]) {
                heartActive(i);
                }
            }
        }
    });

    let priceLink = document.querySelector('#sort-price');
    let oldLink= document.querySelector('#sort-old');


    priceLink.addEventListener('click', function() {
        mySort('data-price');
    });

    oldLink.addEventListener('click', function() {
        mySort('data-old');
    });
    
    function mySort (sortType) {
        for (let i = 0; i < parrentHeart.children.length; i++) {
            for (let j = i; j < parrentHeart.children.length; j++) {
                if (+parrentHeart.children[i].getAttribute(sortType) > +parrentHeart.children[j].getAttribute(sortType)) {
                    let replacedNode = parrentHeart.replaceChild(parrentHeart.children[j], parrentHeart.children[i]);
                    insertAfter(replacedNode, parrentHeart.children[i]);
                }
            }
        }
    }

    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
    
});