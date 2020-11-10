/* let a = [50, 4, 12, 1, 3, 7, 6];

    // сортировка пузырьком
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {  
           if (a[i] > a[j]) { // сортировка по возрастанию, если нужно сделать по убыванию меняем знак на <
               let temp = a[i];
               a[i] = a[j];
               a[j] = temp;
           }
           console.log(a);
        }
    } */
    
    /* // replacedNode = parentNode.replaceChild(newChild, oldChild); функция
    replacedNode = parrentHeart.replaceChild(parrentHeart.children[1], parrentHeart.children[0]);
    console.log(replacedNode);
    parrentHeart.appendChild(replacedNode); */

    let linkSortPrice = document.querySelector('#sort-price');

    
    function mySort() {
        let parrentHeart = document.querySelector('.promo__wrapper');
        for (let i = 0; i < parrentHeart.children.length; i++) {
            for (let j = i; j < parrentHeart.children.length; j++) {
                if (+parrentHeart.children[i].getAttribute('data-price') > +parrentHeart.children[j].getAttribute('data-price')) {
                    let replacedNode = parrentHeart.replaceChild(parrentHeart.children[j], parrentHeart.children[i]);
                    insertAfter(replacedNode, parrentHeart.children[i]);
                }
            }
        }
    }

    linkSortPrice.addEventListener('click', mySort);

    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.netxSibling);
    }