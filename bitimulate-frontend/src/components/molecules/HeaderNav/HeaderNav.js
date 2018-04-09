import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = () => {
    return (
        <FlexBox row
            className={cx('header-nav')}>
            <NavItem>
                거래소
            </NavItem>
            <NavItem>
                Dashboard
            </NavItem>
            <NavItem>
                Community
            </NavItem>
            
        </FlexBox>
    );
};

export default HeaderNav;