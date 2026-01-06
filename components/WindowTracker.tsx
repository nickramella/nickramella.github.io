"use client";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from '../hooks/useWindowSize';
import { setWindowSize } from '../lib/rootSlice';

export default function WindowTracker() {
  const width = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (width !== undefined) {
      dispatch(setWindowSize(width));
    }
  }, [width, dispatch]);

  return null; // This component does not render anything
}
