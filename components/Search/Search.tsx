'use client'
import React, {FC} from 'react';
import s from './Search.module.scss';
import {AutoComplete, Input} from "antd";
import Link from "next/link";
import {IconSearch} from "@/components/ui/IconSearch";

interface SearchProps {

}

export const Search: FC<SearchProps> = () => {
    const options = [
        {
            value: 'текст',
            label: (
                <Link className={s.text} href={`/${1}`}>
                    {'текст'}
                </Link>
            ),
        },
    ];

    return (
        <AutoComplete
            className={s.mySearch}
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            options={options}
            filterOption
            backfill

        >
            <Input.Search
                bordered={false}
                addonAfter={<IconSearch/>}
                className={s.input}
                size="large"
                placeholder="Искать товары"
                enterButton
            />
        </AutoComplete>
    );
};

