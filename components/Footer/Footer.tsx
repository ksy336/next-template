import React, {FC} from 'react';
import s from './Footer.module.scss';
import Link from 'next/link';
import {Logo} from '@/components/ui/Logo/Logo';
import {IconWildberries} from '@/components/ui/IconWildberries';
import {IconOzon} from '@/components/ui/IconOzon';
import {JoyTech} from '@/components/ui/JoyTech/JoyTech';

interface FooterProps {
}

export const Footer: FC<FooterProps> = (props) => {
    const links = [
        {
            href: '/',
            text: 'Фетиш и БДСМ',
        },
        {
            href: '/',
            text: 'Портупеи, чулки и боди',
        },
        {
            href: '/',
            text: 'Вагинальные шарики',
        },
        {
            href: '/',
            text: 'Лубриканты',
        },
        {
            href: '/',
            text: 'Вибропули',
        },
        {
            href: '/',
            text: 'Фаллоимитаторы',
        },
        {
            href: '/',
            text: 'Вибраторы',
        },
        {
            href: '/',
            text: 'Мастурбаторы',
        },
        {
            href: '/',
            text: 'Вакуумные помпы',
        },
        {
            href: '/',
            text: 'Страпоны',
        },
        {
            href: '/',
            text: 'Вакуумные стимуляторы',
        },
        {
            href: '/',
            text: 'Массжаные масла',
        },
    ];
    const menuLinks = [
        {
            href: '/',
            text: 'Главная',
        },
        {
            href: '/catalog',
            text: 'Каталог',
        },
        {
            href: '/advice',
            text: 'Советы и гайды',
        },
        {
            href: '/cooperation',
            text: 'Сотрудничество',
        },
    ]
    return (
        <footer className={s.footer}>
            <div className={'container'}>
                <div className={s.block}>
                    <div className={s.item}>
                        <div className={s.wrapper}>
                            <div className={s.subtitle}>Меню</div>
                            {
                                menuLinks.map(e => (
                                    <div key={e.text} className={s.menuWrapper}>
                                        <Link className={s.link} href={e.href}>{e.text}</Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={s.catalog}>
                            <div className={s.subtitle}>Каталог</div>
                            <div className={s.list}>
                                {links.map((e) => (
                                    <div key={e.text} className={s.listWrapper}>
                                        <Link className={s.link} key={e.text} href={e.href}>
                                            {e.text}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.subtitle}>Контактная информация</div>
                        <div className={s.menuList}>

                        </div>
                        <Link className={s.phone} href={'tel:8 (800) 777-77-55'}>
                            8 (800) 777-77-55
                        </Link>
                        <Link className={s.mail} href={'mailto:info@gamplove.ru'}>
                            info@gamplove.ru
                        </Link>
                        <div className={s.address}> г. Москва ул. Аустрина 165</div>
                        <div className={s.infoWrapper}>
                            <Link className={s.svg} target="_blank" href={'/'}>
                                <IconWildberries/>
                            </Link>
                            <Link className={s.svg} target="_blank" href={'/'}>
                                <IconOzon/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={s.bottom}>
                    <Logo src={'/logo-dark.svg'}/>
                    <div className={s.political}>
                        <Link className={s.link} href={'/'}>
                            Политика конфидециальности
                        </Link>
                        <Link className={s.link} href={'/'}>
                            Пользовательское соглашение
                        </Link>
                        <JoyTech/>
                    </div>
                </div>
            </div>
        </footer>
    );
};
