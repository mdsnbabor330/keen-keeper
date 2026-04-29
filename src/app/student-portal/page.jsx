'use client';
import React, { useState } from 'react';
import './portal.css';
import { 
  User, Search, Bell, LogOut, BookOpen, CreditCard, 
  ClipboardCheck, PlusCircle, MinusCircle, Calendar, 
  MessageSquare, History, FileText, BarChart3, Users, 
  MapPin, ShieldCheck, Key, Settings, HelpCircle,
  Menu, X, ChevronRight, Info, AlertTriangle, Bus
} from 'lucide-react';

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('Overview');

  const actionButtons = [
    { label: 'Pre-Registration', icon: BookOpen, color: '#3b82f6' },
    { label: 'Registration', icon: ClipboardCheck, color: '#10b981' },
    { label: 'Add/Drop', icon: PlusCircle, color: '#8b5cf6' },
    { label: 'Withdraw', icon: MinusCircle, color: '#ef4444' },
    { label: 'Class Routine', icon: Calendar, color: '#14b8a6' },
    { label: 'Complain', icon: MessageSquare, color: '#f97316' },
    { label: 'Payment History', icon: History, color: '#0ea5e9' },
    { label: 'Payment Slip', icon: FileText, color: '#f43f5e' },
    { label: 'Reg. Summary', icon: BarChart3, color: '#6366f1' },
    { label: 'Result View', icon: BarChart3, color: '#a855f7' },
    { label: 'Course Status', icon: ShieldCheck, color: '#22c55e' },
    { label: 'TER', icon: BookOpen, color: '#f59e0b' },
    { label: 'Siblings', icon: Users, color: '#06b6d4' },
    { label: 'Supervisor', icon: User, color: '#d946ef' },
    { label: 'Proposal', icon: FileText, color: '#10b981' },
    { label: 'Password', icon: Key, color: '#64748b' },
    { label: 'Profile', icon: User, color: '#334155' },
    { label: 'Logout', icon: LogOut, color: '#1e293b' },
  ];

  return (
    <div className="portal-container">
      {/* Header */}
      <header className="portal-header">
        <div className="top-bar">
          <div className="top-links">
            <span>Students • Others • TER • Application • IQAC</span>
          </div>
          <div className="user-top" style={{ display: 'flex', alignItems: 'center' }}>
            <User size={14} style={{ marginRight: '6px' }} />
            <span>Mohammad Nahid Uddin Babor</span>
          </div>
        </div>
        
        <div className="main-nav">
          <div className="brand">
            <div className="logo-placeholder" style={{ background: '#1a4d2e', color: 'white', borderRadius: '50%', fontWeight: '800', fontSize: '14px' }}>IIUC</div>
            <div className="brand-text">
              <h1>International Islamic University Chittagong</h1>
              <p>Academic & Student Affairs Division</p>
            </div>
          </div>
          <div className="nav-actions">
            <button className="search-btn">
              <Search size={16} />
              <span>Search & Find</span>
            </button>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={22} color="#64748b" />
              <span style={{ position: 'absolute', top: -2, right: -2, background: '#ef4444', width: 8, height: 8, borderRadius: '50%', border: '2px solid white' }}></span>
            </div>
          </div>
        </div>
      </header>

      <main className="portal-layout">
        {/* Quick Actions Grid */}
        <div className="quick-actions-grid">
          {actionButtons.map((btn, idx) => (
            <a key={idx} href="#" className="action-card" style={{ background: btn.color }}>
              <btn.icon size={24} strokeWidth={2.5} />
              <span>{btn.label}</span>
            </a>
          ))}
        </div>

        {/* Left Sidebar */}
        <aside className="sidebar-left">
          <div className="sidebar-card profile-card">
            <div className="profile-img-container">
              <div className="profile-inner">
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0', color: '#1e293b', fontSize: '2.5rem', fontWeight: '800' }}>NB</div>
              </div>
            </div>
            <div className="profile-info" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>Mohammad Nahid Babor</h3>
              <p style={{ color: '#3b82f6', fontWeight: '700', fontSize: '0.9rem' }}>Student ID: C243006</p>
            </div>
            <ul className="sidebar-menu" style={{ listStyle: 'none', padding: 0 }}>
              <li><MapPin size={16} color="#3b82f6" /> <span>Hathazari, Chattogram</span></li>
              <li><History size={16} color="#10b981" /> <span>Max Semesters: 12</span></li>
              <li><Bus size={16} color="#f59e0b" /> <span>Station: Boro Dighir Par</span></li>
            </ul>
            <div style={{ marginTop: '2rem', padding: '1rem', background: '#f1f5f9', borderRadius: '12px' }}>
              <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '800', color: '#64748b' }}>Area of Study</label>
              <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginTop: '4px', color: '#1e293b' }}>Computer Science and Engineering</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="content-main">
          <button className="tutorial-btn">
            <BookOpen size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Watch Registration Tutorial
          </button>

          <div className="widget-card">
            <div className="widget-header" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', padding: '1.25rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck size={20} />
                <span style={{ fontWeight: '800', fontSize: '1rem' }}>Active Registration Session: Spring 2026</span>
              </div>
            </div>
            <div className="widget-body" style={{ padding: '2rem' }}>
              <div className="info-grid">
                <div className="info-item">
                  <label>Current Status</label>
                  <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%' }}></div>
                    Registered
                  </span>
                </div>
                <div className="info-item" style={{ textAlign: 'right' }}>
                  <label>Registration No</label>
                  <span style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>0062420005101006</span>
                </div>
              </div>
            </div>
          </div>

          <div className="banner danger">
            <AlertTriangle size={20} />
            <span>Academic Alert: Maintain GPA above 2.00 to avoid readmission.</span>
          </div>

          <div className="widget-card">
            <div className="widget-header" style={{ padding: '1rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bus size={18} color="#3b82f6" />
                <span>Daily Transport Update</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Settings size={16} color="#94a3b8" cursor="pointer" />
                <X size={16} color="#94a3b8" cursor="pointer" />
              </div>
            </div>
            <div className="widget-body" style={{ padding: '1.5rem 2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input type="date" className="search-btn" style={{ flex: 1, minWidth: '150px' }} defaultValue="2026-04-25" />
                <select className="search-btn" style={{ flex: 1, minWidth: '150px' }}>
                  <option>Select Station</option>
                  <option selected>Boro Dighir Par</option>
                </select>
                <button className="tutorial-btn" style={{ margin: 0, padding: '0.6rem 2rem' }}>Check Schedule</button>
              </div>
            </div>
          </div>

          <div className="widget-card">
            <div className="tabs-container" style={{ padding: '1rem 2rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '1rem' }}>
              {['Overview', 'Contact', 'Academic', 'Advisor', 'Syllabus'].map(tab => (
                <div 
                  key={tab} 
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="widget-body" style={{ padding: '2rem' }}>
              {activeTab === 'Overview' && (
                <div className="info-grid" style={{ gap: '2rem' }}>
                  <div className="info-item">
                    <label>Full Name</label>
                    <span style={{ fontSize: '1.1rem' }}>Mohammad Nahid Uddin Babor</span>
                  </div>
                  <div className="info-item">
                    <label>Father's Name</label>
                    <span style={{ fontSize: '1.1rem' }}>Md Naser</span>
                  </div>
                  <div className="info-item">
                    <label>Date of Birth</label>
                    <span>March 21, 2005</span>
                  </div>
                  <div className="info-item">
                    <label>Blood Group</label>
                    <span style={{ color: '#ef4444' }}>O+</span>
                  </div>
                </div>
              )}
              {activeTab !== 'Overview' && (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                  <p>Content for {activeTab} will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="sidebar-right">
          <div className="widget-card" style={{ marginBottom: '2rem' }}>
            <div className="tabs-container" style={{ padding: '0.75rem', borderBottom: '1px solid #eee', background: '#f1f5f9' }}>
              <div className="tab active" style={{ fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>Notice Board</div>
            </div>
            <div className="widget-body" style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '1rem', borderLeft: '3px solid #3b82f6', paddingLeft: '1rem' }}>
                <p style={{ fontWeight: '800', margin: 0 }}>Registration Deadline</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Due by May 15, 2026</p>
              </div>
              <div style={{ marginBottom: '1rem', borderLeft: '3px solid #10b981', paddingLeft: '1rem' }}>
                <p style={{ fontWeight: '800', margin: 0 }}>Mid-Term Exams</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Starting June 10, 2026</p>
              </div>
              <button style={{ width: '100%', background: 'transparent', border: '1px solid #e2e8f0', padding: '0.5rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}>View All Notices</button>
            </div>
          </div>

          <div className="stats-card balance-card">
            <CreditCard size={40} style={{ position: 'absolute', right: -10, bottom: -10, opacity: 0.2 }} />
            <label style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.8 }}>Outstanding Balance</label>
            <div className="value">৳ 41,582.50</div>
            <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer' }}>Pay Now</button>
          </div>

          <div className="stats-card cgpa-card">
            <BarChart3 size={40} style={{ position: 'absolute', right: -10, bottom: -10, opacity: 0.2 }} />
            <label style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.8 }}>Academic CGPA</label>
            <div className="value">2.696</div>
            <div style={{ display: 'flex', gap: '8px', fontSize: '0.7rem', fontWeight: '700' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>GPU: 2%</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>CPU: 9%</span>
            </div>
          </div>
        </aside>
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem 2rem', borderTop: '1px solid #e2e8f0', marginTop: '2rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>© 2026 International Islamic University Chittagong</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', color: '#94a3b8' }}>
          <Settings size={18} cursor="pointer" />
          <HelpCircle size={18} cursor="pointer" />
          <ShieldCheck size={18} cursor="pointer" />
        </div>
      </footer>
    </div>
  );
}

}
