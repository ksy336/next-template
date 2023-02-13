import React, {FC} from 'react';
import s from './TemplateComponent.module.scss';
import {Template} from "@/modules/Template/types";
import {useTemplateStore} from "@/modules/Template/store";

interface TemplateComponentProps {
    number: number
}

export const TemplateComponent: FC<TemplateComponentProps> = (props) => {
    const {item} = useTemplateStore()
    return (
        <div className={s.templateComponent}>
            {item.title}
            {item.text}
            {`props number : ${props.number}`}
        </div>
    );
};
