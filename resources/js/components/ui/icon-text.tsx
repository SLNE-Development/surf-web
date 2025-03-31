import {IconType} from "react-icons/lib";

export function IconText({icon: Icon, text, children}: {
    icon: IconType;
    text?: string;
    children?: any
}) {
    return <span className={"inline-flex items-center flex-row gap-1"}>
        {Icon && <Icon/>}
        {text && <span>{text}</span>}
        {children}
    </span>
}
