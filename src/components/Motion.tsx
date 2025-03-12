
import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide-up' | 'slide-down' | 'none';
}

export const Motion: React.FC<MotionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.4,
  type = 'fade',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    
    if (type === 'slide-up') {
      el.style.transform = 'translateY(20px)';
    } else if (type === 'slide-down') {
      el.style.transform = 'translateY(-20px)';
    }

    const timeoutId = setTimeout(() => {
      el.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
      el.style.opacity = '1';
      
      if (type === 'slide-up' || type === 'slide-down') {
        el.style.transform = 'translateY(0)';
      }
      
      hasAnimated.current = true;
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [delay, duration, type]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <Motion key={location.pathname} type="fade" duration={0.2}>
      {children}
    </Motion>
  );
};

export const usePageTransition = () => {
  const navigate = useNavigate();
  
  const navigateWithTransition = (path: string) => {
    const main = document.querySelector('main');
    if (main) {
      main.classList.add('page-exit-active');
      setTimeout(() => {
        navigate(path);
      }, 300);
    } else {
      navigate(path);
    }
  };
  
  return navigateWithTransition;
};
