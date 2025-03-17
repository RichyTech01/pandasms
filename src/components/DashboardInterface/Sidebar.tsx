import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar bg-[]">
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/verification">Verification</Link>
                </li>
                <li>
                    <Link href="/history">History</Link>
                </li>
                <li>
                    <Link href="/account">Account</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;