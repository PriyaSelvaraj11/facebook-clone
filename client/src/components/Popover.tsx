import React, {PropsWithChildren} from 'react';
import '../assets/css/Popover.scss';

interface IProps {
    text : String,
    title ?: String;
}

const CustomPopover: React.FC<PropsWithChildren<IProps>> = (props) => {
    return (
        <div className="dropdown dropdown-hover">
            <label className="btn">{props.text}</label>
            <section className="dropdown-content">
                {props.children}
            </section>
            </div>
    );
}

export default CustomPopover;