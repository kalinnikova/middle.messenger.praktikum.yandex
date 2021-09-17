import Block from "../../modules/block";
// Ваш реализованный шаблонизатор
import { compile } from "../../utils/templator";
import { template } from "./template";

export default class Button extends Block {
    constructor(props) {
        // Создаём враппер DOM-элемент button
        super("button", props);
    }

    render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
        return compile(template, this.props);
    }
}
