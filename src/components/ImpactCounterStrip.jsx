import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, TrendingUp, School } from 'lucide-react';
import './ImpactCounterStrip.css';

function AnimatedCounter({ target, suffix = '', isVisible, delay = 0 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrent(0);
      return;
    }

    let animationFrameId;
    let startTimestamp = null;
    const duration = 1800;

    // Smooth cubic easing for high-impact deceleration
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const timer = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const nextValue = Math.round(eased * target);

        setCurrent(nextValue);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCurrent(target);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, target, delay]);

  return (
    <span className="counter-number">
      {current.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactCounterStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const stripRef = useRef(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolled away so the count-up plays on scroll-in
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Top 4 authoritative figures from official document
  const stripFigures = [
    {
      icon: <GraduationCap size={24} />,
      value: 693,
      suffix: '',
      label: 'Scholars Supported',
      desc: 'Early childhood through university degrees'
    },
    {
      icon: <Briefcase size={24} />,
      value: 335,
      suffix: '',
      label: 'Graduates in Employment',
      desc: 'College & university alumni working'
    },
    {
      icon: <TrendingUp size={24} />,
      value: 358,
      suffix: '',
      label: 'Young Entrepreneurs',
      desc: 'Mentored & running active businesses'
    },
    {
      icon: <School size={24} />,
      value: 131,
      suffix: '',
      label: 'Schools Safeguarded',
      desc: 'Child protection advocacy reached'
    }
  ];

  return (
    <section className="impact-counter-strip" ref={stripRef}>
      <div className="container">
        <div className="counter-strip-header">
          <h3 className="counter-strip-title">
            Proven Results Across <span className="highlight-gold">Two Decades</span>
          </h3>
        </div>

        <div className="counter-grid">
          {stripFigures.map((stat, index) => (
            <div 
              key={index} 
              className={`counter-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="counter-icon-wrap">
                {stat.icon}
              </div>
              <div className="counter-val-row">
                <AnimatedCounter 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible}
                  delay={index * 120}
                />
              </div>
              <span className="counter-label">{stat.label}</span>
              <span className="counter-desc">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
