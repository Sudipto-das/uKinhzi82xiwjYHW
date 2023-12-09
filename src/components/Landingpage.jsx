import React from 'react';
import { useNavigate } from 'react-router-dom';
import resumePdf from '../assets/resume.pdf'
const CandidateDetails = () => {
    const firstName = 'Sudipto Das';
    const highestDegree = 'B.Tech';
    const passoutYear = 2022;
    const technologies = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Next.js', 'MongoDB', 'Node.js', 'Express.js'];
    const navigate = useNavigate()
    const downloadResume = () => {
        const cvFileName = 'resume.pdf';
        const cvFilePath = resumePdf;

        const link = document.createElement('a');
        link.href = cvFilePath;
        link.download = cvFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    return (
        <div style={{
            backgroundColor: '#f7f7f7',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
        }}>
            <h2 style={{ marginBottom: '15px', }}>Candidate Details</h2>

            <div className="detail-item" style={{ marginBottom: '15px', }}>
                <label style={{
                    fontWeight: 'bold',
                    marginRight: '8px',
                }}>First Name:</label>
                <span>{firstName}</span>
            </div>

            <div className="detail-item" style={{ marginBottom: '15px', }}>
                <label style={{
                    fontWeight: 'bold',
                    marginRight: '8px',
                }}>Highest Degree:</label>
                <span>{highestDegree}</span>
            </div>

            <div className="detail-item" style={{ marginBottom: '15px', }}>
                <label style={{
                    fontWeight: 'bold',
                    marginRight: '8px',
                }}>Passout Year:</label>
                <span>{passoutYear}</span>
            </div>

            <div className="detail-item" style={{ marginBottom: '15px', }}>
                <label style={{
                    fontWeight: 'bold',
                    marginRight: '8px',
                }}>Technologies/Languages:</label>
                <ul style={{ listStyleType: 'none', padding: 0, }}>
                    {technologies.map((tech, index) => (
                        <li key={index} style={{ marginBottom: '5px', }}>{tech}</li>
                    ))}
                </ul>
            </div>
            <div>
                
                <button onClick={downloadResume}>Download Resume</button>
            </div>
            <br />
            <div>
                <button onClick={()=>{navigate('/calculateBmi')}}>Calculate BMI</button>
            </div>
           
        </div>
    );
};

export default CandidateDetails;