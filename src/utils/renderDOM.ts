import {Block} from "./block";

export function render(query: string, block: Block) {
    const root = document.querySelector(query);
    let element = block.getContent();
    if (root && element) {
        root.appendChild(element);
        block.render();
    }
    return root;
}
