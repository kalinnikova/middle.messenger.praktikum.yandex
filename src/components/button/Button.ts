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
        console.log(this.props)
    }

    componentDidRender() {
        console.log('rendered')
        this.props.fn();
    }

    render() {
        let template = Handlebars.compile(`
            <button id={{id}} type="button" class={{className}} onClick={{fn}}>
                {{title}}
            </button>
        `);
        var render = template(this.props);
        this.componentDidRender();
        return render;
    }
}
