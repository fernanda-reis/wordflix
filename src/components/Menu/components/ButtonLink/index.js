import React from 'react';

function ButtonLink(props) {
    //props => { className: "" , href: "", children: automaticamente o que estiver dentro da tag}
    console.log(props)
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;