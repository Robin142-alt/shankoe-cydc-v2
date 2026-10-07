import React, { useState, useRef, useEffect } from 'react';
import { Users, BookOpen, Utensils, Shield } from 'lucide-react';
import './ImpactCounterStrip.css';

const IMPACT_STATS = [
  {
    icon: <Users size={24} />,
    label: 'Children & Youth Supported',
    suffix: '+',
    value: 150,
    description: 'Across Narok County'
  },
  {
    icon: <BookOpen size={24} />,
    label: 'Education & Skills Sessions',
    suffix: '+',
    value: 500,
    description: 'Per programme cycle'
  },
  {
    icon: <Utensils size={24} />,
    label: 'Nutritious Meals Served',
    suffix: '+',
    value: 3000,
    description: 'Every centre year'
  },
  {
    icon: <Shield size={24} />,
    label: 'Years of Community Service',
    suffix: '',
    value: 10,
    description: 'Methodist partnership'
  }
];

function AnimatedNumber({ target, suffix, isVisible }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

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
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-counter-strip" ref={stripRef}>
      <div className="container">
        <div className="counter-grid">
          {IMPACT_STATS.map((stat, index) => (
            <div 
              key={index} 
              className={`counter-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="counter-icon-wrap">
                {stat.icon}
              </div>
              <AnimatedNumber 
                target={stat.value} 
                suffix={stat.suffix} 
                isVisible={isVisible} 
              />
              <span className="counter-label">{stat.label}</span>
              <span className="counter-desc">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
