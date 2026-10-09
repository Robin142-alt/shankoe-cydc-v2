import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, TrendingUp, Sprout, Users, School, ArrowRight } from 'lucide-react';
import { IMPACT_STATS } from '../data/content';
import './ImpactCounterStrip.css';

function AnimatedCounter({ target, suffix = '', isVisible }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 1800;
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

export default function ImpactCounterStrip({ onNavigate }) {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Display top 4 authoritative figures in the prominent counter strip
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
          <div>
            <h3 className="counter-strip-title">
              Proven Results Across <span className="highlight-gold">Two Decades</span>
            </h3>
          </div>
          {onNavigate && (
            <button 
              type="button" 
              className="btn btn-outline-white btn-sm view-impact-btn"
              onClick={() => onNavigate('impact')}
            >
              <span>View All Impact Statistics</span>
              <ArrowRight size={15} />
            </button>
          )}
        </div>

        <div className="counter-grid">
          {stripFigures.map((stat, index) => (
            <div 
              key={index} 
              className={`counter-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="counter-icon-wrap">
                {stat.icon}
              </div>
              <div className="counter-val-row">
                <AnimatedCounter 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
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
