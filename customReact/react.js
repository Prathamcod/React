function customRender(reactElement, container) {

    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href', reactElement.props.href);

    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);

    const domElment = document.createElement(reactElement.type);

    domElment.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        domElment.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElment);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    children: "Click me to visit google"

}

const newRoot = document.querySelector('#root');

customRender(reactElement, newRoot);