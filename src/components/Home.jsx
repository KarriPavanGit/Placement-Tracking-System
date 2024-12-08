import React from 'react';
import Header from './Header';

function Home() {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: 'center',
            padding: '20px',
        },
        searchBar: {
            width: '60%',
            padding: '10px',
            marginTop: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
        },
        button: {
            padding: '10px 20px',
            margin: '10px',
            borderRadius: '8px',
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
        },
        featuredJobs: {
            marginTop: '30px',
        },
        jobCard: {
            padding: '20px',
            margin: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'left',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        footer: {
            marginTop: '40px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            color: '#6c757d',
        },
    };

    return (
        <div style={styles.container}>
            <Header />
            <div style={{ marginTop: '20px' }}>
                <input type="text" placeholder="Search for jobs, companies..." style={styles.searchBar} />
                <button style={styles.button}>Search</button>
            </div>
            <section style={styles.featuredJobs}>
                <h2>Featured Jobs</h2>
                <div style={styles.jobCard}>
                    <h3>Software Engineer</h3>
                    <p>Company: Tech Innovators</p>
                    <p>Location: New York, NY</p>
                </div>
                <div style={styles.jobCard}>
                    <h3>Data Scientist</h3>
                    <p>Company: Data Masters</p>
                    <p>Location: San Francisco, CA</p>
                </div>
                <div style={styles.jobCard}>
                    <h3>Product Manager</h3>
                    <p>Company: Visionary Products</p>
                    <p>Location: Remote</p>
                </div>
            </section>
            <footer style={styles.footer}>
                <p>&copy; 2024 HireHorizon. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
