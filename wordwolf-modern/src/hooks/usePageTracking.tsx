import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as gtag from '../lib/gtag';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (gtag.GA_TRACKING_ID) {
      gtag.pageview(location.pathname);
    }
  }, [location.pathname]);
};