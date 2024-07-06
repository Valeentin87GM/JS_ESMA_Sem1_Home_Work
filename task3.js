// напишите рекурсивную функцию FindElementWithClass, которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве



function findElementWithClass(sourceElement, className) {
    const element = sourceElement;
    while(element !== document.body) {
        if (element.classList.contains(className)) {
            break;
        }
        element = element.parentNode;
    }
    return element;
}