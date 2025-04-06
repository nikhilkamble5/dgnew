import React, { memo, useCallback, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import companyLogo from '../../assets/images/logo.png';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const MenuItem = memo(({ path, label, isLast, toggleMenu, isMenuOpen, hasDropdown, dropdownItems }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setDropdownOpen(prev => !prev);
    }
  };

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div className={styles.menuItemContainer} ref={dropdownRef}>
      {hasDropdown ? (
        <>
          <button
            className={styles.dropdownButton}
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
          >
            {label} <FaChevronDown className={styles.dropdownArrow} aria-hidden="true" />
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {dropdownItems?.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => {
                    closeDropdown();
                    if (isMenuOpen) toggleMenu();
                  }}
                  className={styles.dropdownItem}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </>
      ) : (
        <NavLink
          to={path}
          onClick={isMenuOpen ? toggleMenu : undefined}
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.link}` : styles.link
          }
        >
          {label}
        </NavLink>
      )}
    </div>
  );
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const servicesDropdownItems = React.useMemo(() => [
    { path: "/managed-services", label: "Managed Services" },
    { path: "/co-managed-it-services", label: "Co-Managed IT Services" },
    { path: "/serveradministration", label: "Server Administration" },
    { path: "/infrastructuremanagement", label: "Infrastructure Management" },
    { path: "/networkmonitoring", label: "Network Monitoring" },

    { path: "/vapt-assessment", label: "VAPT Assessment" },

    { path: "/application-development", label: "Application Development" },
  ], []);

  const successStoriesDropdownItems = React.useMemo(() => [
    { path: "/success-story-1", label: "Success Story 1" },
    { path: "/success-story-2", label: "Success Story 2" },
    { path: "/success-story-3", label: "Success Story 3" },
  ], []);

  const menuItems = React.useMemo(() => [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services', hasDropdown: true, dropdownItems: servicesDropdownItems },
    { path: '/success-stories', label: 'Success Stories', hasDropdown: true, dropdownItems: successStoriesDropdownItems },
    { path: '/Career', label: 'Career' },
    // { path: '/GetAQuote', label: 'Get A Quote' },
    { path: '/Contact', label: 'Contact' },
    { path: '/SecurityAssessment', label: 'Security Assessment' },
  ], [servicesDropdownItems, successStoriesDropdownItems]);

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <NavLink to="/">
            <img
              src={companyLogo}
              alt="Ntiva Logo"
              className={styles.logo}
              width="120"
              height="40"
              loading="eager"
              fetchPriority="high"
            />
          </NavLink>
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {!menuOpen ? <FaBars aria-hidden="true" /> : <FaTimes aria-hidden="true" />}
        </button>

        <div className={`${styles.navbarMenu} ${menuOpen ? styles.navbarMenuOpen : ''}`}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.path}
              {...item}
              isLast={index === menuItems.length - 1}
              toggleMenu={toggleMenu}
              isMenuOpen={menuOpen}
            />
          ))}
          <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" target="_blank" rel="noopener noreferrer" className={styles.consultationButton}>
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};
export default memo(Navbar);