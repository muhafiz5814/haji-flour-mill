import { Outlet, Link } from 'react-router-dom';

import Header from '../Header.js';
import Footer from '../Footer.js';

import EntrySection from '../admin/sections/EntrySection.js';
import UserSection from '../admin/sections/UserSection.js';
import ServiceSection from '../admin/sections/ServiceSection.js';
import ReviewSection from '../admin/sections/ReviewSection.js';

// Shows the AdminLayout in pages.
// Containes logout button in header.
const AdminLayout = () => {

  return (
    <div className="top-container admin-layout-container">
      <Header logoutButton/>
      <div className="main-div top-div admin-main">
        <aside className="sidebar">
          <div className="sidebar-buttons">
            <Link to="new-entry" className="btn">New Entry</Link>
            <Link to="new-user" className="btn">New User</Link>
          </div>
          <nav>
            <EntrySection />
            <UserSection />
            <ServiceSection />
            <ReviewSection />
          </nav>
        </aside>
        <main className="content admin-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
