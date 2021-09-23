import {Block} from "../../utils/block";
import Handlebars from 'handlebars';

export interface ButtonProps {
    classImg?: string;
    inputs: Block[];
    alert?: boolean;
    className: string;
    title: string;
    id: string;
    type: string;
}

export class Button extends Block {

    constructor(props: ButtonProps) {
        super("div", props);
    }

    render() {
        let template = Handlebars.compile(`
            <button id={{id}} type={{type}} class={{className}}>
                {{title}}
            </button>
        `);
        return template(this.props);
    }
}
