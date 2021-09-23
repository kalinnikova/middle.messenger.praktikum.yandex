import {Block} from "../../utils/block";
import Handlebars from 'handlebars';

export interface ButtonProps {
    classImg?: string;
    inputs: Block[];
    link?: string;
    alert?: boolean;
    className: string;
    title: string;
    id: string;
    fn: () => void;
}

export class Button extends Block {

    constructor(props: ButtonProps) {
        super("div", props);
    }

    render() {
        let template = Handlebars.compile(`
            <button id={{id}} type="button" class={{className}} onClick={{fn}} link={{link}}>
                {{title}}
            </button>
        `);
        return template(this.props);
    }
}
