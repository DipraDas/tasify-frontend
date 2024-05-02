"use client";
import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

const Contents = ({ children }) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default Contents;