// напишите рекурсивную функцию FindElementWithClass, которая принимает элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве

var element = document.querySelector('.class6');

function findElementWithClass(sourceElement, className){
    var element = sourceElement; //selected DOM node

    while(element !== document.body){
        if(element.classList.contains(className)){
            break;
        }
        element = element.parentNode;
    }
    return element;
}

console.log(findElementWithClass(element, 'class3'));