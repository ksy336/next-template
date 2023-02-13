'use client'
import React from 'react';
import Icon from "@ant-design/icons";
import {CustomIconComponentProps} from "@ant-design/icons/lib/components/Icon";

export const IconSearch = (props: Partial<CustomIconComponentProps>) => {
    const icon = () => (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_689_3927" fill="white">
                <path
                    d="M19.2605 6.26091C22.9826 9.71847 23.1971 15.5388 19.7395 19.2609C16.282 22.983 10.4617 23.1975 6.73953 19.74C3.01739 16.2824 2.80291 10.4621 6.26047 6.73996C9.71804 3.01783 15.5383 2.80335 19.2605 6.26091ZM7.55385 18.8633C10.7918 21.8712 15.8551 21.6846 18.8629 18.4466C21.8707 15.2086 21.6841 10.1454 18.4462 7.13754C15.2082 4.12972 10.1449 4.3163 7.13711 7.55429C4.12928 10.7923 4.31586 15.8555 7.55385 18.8633Z"/>
            </mask>
            <path
                d="M19.2605 6.26091C22.9826 9.71847 23.1971 15.5388 19.7395 19.2609C16.282 22.983 10.4617 23.1975 6.73953 19.74C3.01739 16.2824 2.80291 10.4621 6.26047 6.73996C9.71804 3.01783 15.5383 2.80335 19.2605 6.26091ZM7.55385 18.8633C10.7918 21.8712 15.8551 21.6846 18.8629 18.4466C21.8707 15.2086 21.6841 10.1454 18.4462 7.13754C15.2082 4.12972 10.1449 4.3163 7.13711 7.55429C4.12928 10.7923 4.31586 15.8555 7.55385 18.8633Z"
                fill="#FC539A" stroke="#FC539A" stroke-width="2" mask="url(#path-1-inside-1_689_3927)"/>
            <rect x="19.4625" y="18.9428" width="0.654537" height="4.90176" transform="rotate(-47.1251 19.4625 18.9428)"
                  fill="#FC539A" stroke="#FC539A" stroke-width="0.654537"/>
        </svg>
    )
    return (
        <Icon component={icon} {...props} />
    );
};
