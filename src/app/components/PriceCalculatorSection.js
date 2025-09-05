import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Check, Calculator, Star, Clock, Shield, DollarSign, ChevronDown } from 'lucide-react';

export default function PriceCalculatorSection() {
    const [selectedService, setSelectedService] = useState('Essay Writing');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [subjectSearch, setSubjectSearch] = useState('');
    const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
    const [pages, setPages] = useState(1);
    const [urgency, setUrgency] = useState('7 Days');
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isUrgencyDropdownOpen, setIsUrgencyDropdownOpen] = useState(false);
    
    const services = [
        'Essay Writing',
        'Assignments & Reports',
        'Presentations & Posters',
        'Proofreading & Editing',
        'Thesis Support',
        'Dissertation Assistance'
    ];
    
    const subjects = [
        'English Literature', 'History', 'Psychology', 'Sociology', 'Philosophy', 'Political Science',
        'Economics', 'Business Studies', 'Marketing', 'Finance', 'Accounting', 'Management',
        'Computer Science', 'Information Technology', 'Software Engineering', 'Data Science',
        'Mathematics', 'Statistics', 'Physics', 'Chemistry', 'Biology', 'Medicine',
        'Nursing', 'Public Health', 'Environmental Science', 'Geography', 'Geology',
        'Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering',
        'Law', 'Criminal Justice', 'International Relations', 'Anthropology', 'Linguistics',
        'Education', 'Art History', 'Music', 'Theater', 'Film Studies', 'Communication',
        'Journalism', 'Media Studies', 'Architecture', 'Urban Planning', 'Social Work',
        'Religious Studies', 'Ethics', 'Logic', 'Cultural Studies', 'Gender Studies'
    ];
    
    const urgencyOptions = [
        '4 Hours', '8 Hours', '16 Hours',
        '1 Day', '2 Days', '3 Days', '5 Days', '7 Days', '10 Days', '14 Days', '21 Days', '30 Days'
    ];
    
    const filteredSubjects = subjects.filter(subject =>
        subject.toLowerCase().includes(subjectSearch.toLowerCase())
    );
    
    const calculatePrice = useMemo(() => {
        let basePrice = 15;
       
        const serviceMultipliers = {
            'Essay Writing': 1.0,
            'Assignments & Reports': 1.2,
            'Presentations & Posters': 1.1,
            'Proofreading & Editing': 0.6,
            'Thesis Support': 1.8,
            'Dissertation Assistance': 2.0
        };
        
        const urgencyMultipliers = {
            '4 Hours': 3.0,
            '8 Hours': 2.5,
            '16 Hours': 2.0,
            '1 Day': 1.8,
            '2 Days': 1.5,
            '3 Days': 1.3,
            '5 Days': 1.1,
            '7 Days': 1.0,
            '10 Days': 0.95,
            '14 Days': 0.9,
            '21 Days': 0.85,
            '30 Days': 0.8
        };
        
        const serviceMultiplier = serviceMultipliers[selectedService] || 1.0;
        const urgencyMultiplier = urgencyMultipliers[urgency] || 1.0;
       
        return (basePrice * pages * serviceMultiplier * urgencyMultiplier).toFixed(2);
    }, [selectedService, pages, urgency]);
    
    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
        setSubjectSearch('');
        setIsSubjectDropdownOpen(false);
    };
    
    const handleSubjectInputFocus = () => {
        setIsSubjectDropdownOpen(true);
        if (selectedSubject) {
            setSubjectSearch('');
        }
    };
    
    const handleSubjectInputChange = (e) => {
        setSubjectSearch(e.target.value);
        setSelectedSubject('');
        setIsSubjectDropdownOpen(true);
    };
    
    const whyChooseUsPoints = [
        { icon: Shield, title: "Reliable & confidential services" },
        { icon: Star, title: "High-quality academic standards" },
        { icon: Clock, title: "On-time delivery, every time" },
        { icon: DollarSign, title: "Affordable & student-friendly pricing" }
    ];

    // Close dropdowns when clicking outside
    const serviceRef = useRef(null);
    const urgencyRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (serviceRef.current && !serviceRef.current.contains(event.target)) {
                setIsServiceDropdownOpen(false);
            }
            if (urgencyRef.current && !urgencyRef.current.contains(event.target)) {
                setIsUrgencyDropdownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <div className="price-calculator-wrapper">
            <section className="section" id="calculator">
                <div className="container">
                    {/* Section Header */}
                    <div className="section-header">
                        <h3 className="main-title">
                            Get Your Quote Instantly
                        </h3>
                        <p className="subtitle">
                            Calculate the cost of your academic assignment with our transparent pricing calculator
                        </p>
                    </div>
                    <div className="grid-container">
                        {/* Price Calculator - Left Side */}
                        <div>
                            <div className="calculator-card">
                                <div className="form-container">
                                    {/* Service Selection - Custom Dropdown */}
                                    <div className="input-group">
                                        <label className="label">
                                            Select Service Type
                                        </label>
                                        <div className="custom-select-wrapper" ref={serviceRef}>
                                            <div 
                                                className="custom-select"
                                                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                                            >
                                                <span>{selectedService}</span>
                                                <ChevronDown size={20} className="chevron-icon" />
                                            </div>
                                            {isServiceDropdownOpen && (
                                                <div className="custom-dropdown">
                                                    {services.map((service) => (
                                                        <div
                                                            key={service}
                                                            onClick={() => {
                                                                setSelectedService(service);
                                                                setIsServiceDropdownOpen(false);
                                                            }}
                                                            className={`custom-dropdown-item ${service === selectedService ? 'selected' : ''}`}
                                                        >
                                                            {service}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Subject Selection */}
                                    <div className="dropdown-container">
                                        <div className="input-group">
                                            <label className="label">
                                                Academic Subject
                                            </label>
                                            <input
                                                type="text"
                                                value={selectedSubject || subjectSearch}
                                                onChange={handleSubjectInputChange}
                                                onFocus={handleSubjectInputFocus}
                                                placeholder="Search and select your subject..."
                                                className="input"
                                            />
                                            {isSubjectDropdownOpen && (subjectSearch || !selectedSubject) && (
                                                <div className="dropdown">
                                                    {filteredSubjects.length > 0 ? (
                                                        filteredSubjects.slice(0, 60).map((subject) => (
                                                            <div
                                                                key={subject}
                                                                onClick={() => handleSubjectSelect(subject)}
                                                                className="dropdown-item"
                                                            >
                                                                {subject}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="dropdown-item no-subjects">
                                                            No subjects found
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Pages and Urgency */}
                                    <div className="grid-two-columns">
                                        <div className="input-group">
                                            <label className="label">
                                                {selectedService === 'Presentations & Posters' ? 'Number of Slides' : 'Number of Pages'}
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="2000"
                                                value={pages}
                                                onChange={(e) => setPages(Math.max(1, Math.min(2000, parseInt(e.target.value) || 1)))}
                                                className="input"
                                            />
                                        </div>
                                        
                                        {/* Urgency Selection - Custom Dropdown */}
                                        <div className="input-group">
                                            <label className="label">
                                                Select Deadline
                                            </label>
                                            <div className="custom-select-wrapper" ref={urgencyRef}>
                                                <div 
                                                    className="custom-select"
                                                    onClick={() => setIsUrgencyDropdownOpen(!isUrgencyDropdownOpen)}
                                                >
                                                    <span>{urgency}</span>
                                                    <ChevronDown size={20} className="chevron-icon" />
                                                </div>
                                                {isUrgencyDropdownOpen && (
                                                    <div className="custom-dropdown">
                                                        {urgencyOptions.map((option) => (
                                                            <div
                                                                key={option}
                                                                onClick={() => {
                                                                    setUrgency(option);
                                                                    setIsUrgencyDropdownOpen(false);
                                                                }}
                                                                className={`custom-dropdown-item ${option === urgency ? 'selected' : ''}`}
                                                            >
                                                                {option}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Price Display */}
                                    <div className="price-display">
                                        <div className="price-label">
                                            Estimated Total Price
                                        </div>
                                        <div className="price-amount">
                                            ${calculatePrice}
                                        </div>
                                        <div className="price-description">
                                            Professional academic assistance at competitive rates
                                        </div>
                                        <button className="order-button">
                                            Place Your Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Why Choose Us & Student Reviews - Right Side */}
                        <div>
                            <div className="sidebar-container">
                                {/* Why Choose Us */}
                                <div className="side-card">
                                    <h3 className="side-card-title">
                                        Why Students Choose Us?
                                    </h3>
                                    <div className="features-list">
                                        {whyChooseUsPoints.map((point, index) => {
                                            const Icon = point.icon;
                                            return (
                                                <div key={index} className="feature-item">
                                                    <div className="feature-icon">
                                                        <div className="feature-icon-inner">
                                                            <Icon size={20} />
                                                        </div>
                                                    </div>
                                                    <div className="feature-text">
                                                        <h4 className="feature-title">
                                                            {point.title}
                                                        </h4>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                
                                <div className="side-card">
                                    <div className="stats-header">
                                        <div className="stats-icon-box">
                                            <Star size={20} />
                                        </div>
                                        <h4 className="stats-title">Student Reviews</h4>
                                    </div>
                                    <div className="stats-container">
                                        <div className="stat-item">
                                            <span className="stat-label">Quality Rating</span>
                                            <div className="rating-container">
                                                <div className="star-container">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={16} fill="currentColor" />
                                                    ))}
                                                </div>
                                                <span className="stat-value rating">4.8/5</span>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">On-time Delivery</span>
                                            <span className="stat-value delivery">98%</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">Happy Students</span>
                                            <span className="stat-value students">100+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {isSubjectDropdownOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsSubjectDropdownOpen(false)}
                ></div>
            )}
            
            <style jsx>{`
                .section {
                    position: relative;
                    padding: 96px 0 64px 0;
                    background-color: #ffffff;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 16px;
                }
                
                .section-header {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .main-title {
                    font-size: 32px;
                    line-height: 1.2;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 16px;
                }
                
                .subtitle {
                    font-size: 16px;
                    color: #94a3b8;
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                .grid-container {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 30px;
                }
                
                .calculator-card {
                    padding: 32px;
                    border-radius: 8px;
                    background-color: #ffffff;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    border: 1px solid #e5e7eb;
                }
                
                .form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                
                .input-group {
                    display: flex;
                    flex-direction: column;
                }
                
                .label {
                    font-size: 15px;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 8px;
                }
                
                /* Custom Select Styles */
                .custom-select-wrapper {
                    position: relative;
                    width: 100%;
                }
                
                .custom-select {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 16px;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    background-color: #ffffff;
                    font-size: 14px;
                    font-weight: 500;
                    color: #374151;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .custom-select:hover {
                    border-color: #f59e0b;
                }
                
                .custom-select:focus {
                    border-color: #f59e0b;
                    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
                    outline: none;
                }
                
                .chevron-icon {
                    color: #94a3b8;
                    pointer-events: none;
                }
                
                .custom-dropdown {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0;
                    right: 0;
                    z-index: 50;
                    background-color: #ffffff;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    max-height: 200px;
                    overflow-y: auto;
                }
                
                .custom-dropdown-item {
                    padding: 12px;
                    cursor: pointer;
                    border-bottom: 1px solid #e5e7eb;
                    color: #374151;
                    transition: background-color 0.2s ease;
                }
                
                .custom-dropdown-item:hover {
                    background-color: #fef3c7;
                }
                
                .custom-dropdown-item.selected {
                    background-color: #fef3c7;
                    font-weight: 600;
                }
                
                .custom-dropdown-item:last-child {
                    border-bottom: none;
                }
                
                .input {
                    width: 100%;
                    padding: 16px;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    background-color: #ffffff;
                    font-size: 14px;
                    color: #374151;
                    outline: none;
                    transition: all 0.2s ease;
                }
                
                .input:focus {
                    border-color: #f59e0b;
                    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
                }
                
                .dropdown-container {
                    position: relative;
                }
                
                .dropdown {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0;
                    right: 0;
                    z-index: 50;
                    background-color: #ffffff;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    max-height: 200px;
                    overflow-y: auto;
                }
                
                .dropdown-item {
                    padding: 12px;
                    cursor: pointer;
                    border-bottom: 1px solid #e5e7eb;
                    color: #374151;
                    transition: background-color 0.2s ease;
                }
                
                .dropdown-item:hover {
                    background-color: #fef3c7;
                }
                
                .dropdown-item:last-child {
                    border-bottom: none;
                }
                
                .no-subjects {
                    color: #94a3b8;
                    text-align: center;
                }
                
                .grid-two-columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                
                .price-display {
                    background-color: #fef3c7;
                    padding: 32px;
                    border-radius: 8px;
                    text-align: center;
                    border: 1px solid #fcd34d;
                }
                
                .price-label {
                    font-size: 12px;
                    color: #92400e;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 8px;
                }
                
                .price-amount {
                    font-size: 48px;
                    font-weight: 700;
                    color: #d97706;
                    margin-bottom: 12px;
                }
                
                .price-description {
                    font-size: 14px;
                    color: #6b7280;
                    margin-bottom: 24px;
                }
                
                .order-button {
                    width: 100%;
                    padding: 16px 32px;
                    background-color: #f59e0b;
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    transform: scale(1);
                }
                
                .order-button:hover {
                    background-color: #d97706;
                    transform: scale(1.05);
                }
                
                .sidebar-container {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                
                .side-card {
                    padding: 24px;
                    border-radius: 8px;
                    background-color: #ffffff;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    border: 1px solid #e5e7eb;
                }
                
                .side-card-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #1e293b;
                    text-align: center;
                    margin-bottom: 24px;
                }
                
                .features-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                
                .feature-item {
                    display: flex;
                    align-items: flex-start;
                }
                
                .feature-icon {
                    height: 45px;
                    min-width: 45px;
                    background-color: rgba(245, 158, 11, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 16px;
                    transform: rotate(-45deg);
                    transition: all 0.5s ease;
                }
                
                .feature-icon:hover {
                    background-color: #f59e0b;
                }
                
                .feature-icon-inner {
                    transform: rotate(45deg);
                    color: #f59e0b;
                }
                
                .feature-icon:hover .feature-icon-inner {
                    color: #ffffff;
                }
                
                .feature-text {
                    flex: 1;
                    padding-top: 6px;
                }
                
                .feature-title {
                    font-size: 17px;
                    font-weight: 500;
                    color: #1e293b;
                }
                
                .stats-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                }
                
                .stats-icon-box {
                    height: 40px;
                    width: 40px;
                    background-color: rgba(245, 158, 11, 0.1);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 12px;
                }
                
                .stats-icon-box svg {
                    color: #f59e0b;
                }
                
                .stats-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1e293b;
                }
                
                .stats-container {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .stat-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px;
                    background-color: #f9fafb;
                    border-radius: 8px;
                }
                
                .stat-label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #6b7280;
                }
                
                .stat-value {
                    font-weight: 600;
                }
                
                .rating {
                    color: #d97706;
                }
                
                .delivery {
                    color: #059669;
                }
                
                .students {
                    color: #2563eb;
                }
                
                .rating-container {
                    display: flex;
                    align-items: center;
                }
                
                .star-container {
                    display: flex;
                    color: #f59e0b;
                    margin-right: 8px;
                }
                
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 40;
                }
                
                /* Media Queries */
                @media (max-width: 768px) {
                    .section {
                        padding: 64px 0;
                    }
                    
                    .main-title {
                        font-size: 24px;
                    }
                    
                    .grid-container {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                    
                    .grid-two-columns {
                        grid-template-columns: 1fr;
                    }
                    
                    .side-card-title {
                        font-size: 18px;
                    }
                }
                
                @media (max-width: 1024px) {
                    .grid-container {
                        grid-template-columns: 1fr 1fr;
                    }
                    
                    .sidebar-container {
                        margin-left: 0;
                    }
                }
                
                @media (min-width: 1024px) {
                    .sidebar-container {
                        margin-left: 20px;
                    }
                }
            `}</style>
        </div>
    );
}