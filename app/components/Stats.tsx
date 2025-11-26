'use client';

import { useState, useEffect, useRef } from 'react';

export function Stats() {
    const [views, setViews] = useState<number | null>(null);
    const [githubStars, setGithubStars] = useState<number | null>(null);
    const hasIncrementedRef = useRef(false);

    // Fetch and increment views
    useEffect(() => {
        const fetchViews = async () => {
            const res = await fetch('/api/stats');
            const data = await res.json();
            setViews(data.views);
        };

        const incrementViews = async () => {
            const sessionKey = 'portfolioVisitorCounted';
            const hasCounted = sessionStorage.getItem(sessionKey);

            if (!hasCounted && !hasIncrementedRef.current) {
                hasIncrementedRef.current = true;
                try {
                    const res = await fetch('/api/stats', { method: 'POST' });
                    const data = await res.json();
                    setViews(data.views);
                    sessionStorage.setItem(sessionKey, 'true');
                } catch (error) {
                    console.error('Error incrementing views:', error);
                }
            }
        };

        fetchViews();
        incrementViews();
    }, []);

    // Fetch GitHub stars
    useEffect(() => {
        const fetchGithubStars = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/Icnneto/portfolio');
                if (!response.ok) {
                    setGithubStars(0);
                    return;
                }
                const data = await response.json();
                setGithubStars(data.stargazers_count || 0);
            } catch (error) {
                console.error('Failed to fetch GitHub stars:', error);
                setGithubStars(0);
            }
        };

        fetchGithubStars();
    }, []);

    return (
        <div className="stats-container">
            <span className="stat-item">
                {views !== null ? views.toLocaleString() : '...'} views
            </span>
            <span className="stat-separator">·</span>
            <a
                href="https://github.com/Icnneto/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="stat-item stat-link"
            >
                {githubStars !== null ? githubStars : '...'} ★
            </a>
        </div>
    );
}