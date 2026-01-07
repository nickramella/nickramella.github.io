"use client";
import React, { useEffect, useState } from 'react'
import SideNavItem from './SideNavItem'
import { useDispatch, useStore } from 'react-redux';
import { setWindowSize } from '@/lib/rootSlice';

const Navigation = () => {
    const store = useStore();
    const dispatch = useDispatch();
    function handleResize() {
        dispatch(setWindowSize(window.innerWidth));
    }

    useEffect(() => {
        dispatch(setWindowSize(window.innerWidth));
        window.addEventListener('resize', handleResize);
    }, []);

  return (
    <div className="w-[20vw] h-screen float-left border-blue-500 border-r-5 px-2 anim-fade fixed">
        <SideNavItem href="/" header={true} text="Nicholas Ramella"/>
        <div className="flex justify-start">
            <a href="https://www.linkedin.com/in/nicholas-ramella-8b605618a" target="_blank"><i className="fa fa-linkedin-square text-2xl hover:text-blue-500"></i></a>
            <a href="https://github.com/nickramella" target="_blank"><i className="fa fa-github w-8 text-2xl hover:text-blue-500"></i></a>
        </div>
        <SideNavItem href="/work" header={false} text="Experience"/>
        <SideNavItem href="/demo" header={false} text="Demos"/>
        <SideNavItem href="/analytics" header={false} text="Blog"/>
        <SideNavItem href="/personal" header={false} text="Personal"/>
    </div>
  )
}

export default Navigation