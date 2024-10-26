import React from 'react';
import Navbar from 'components/ui/Navbar';

interface TeamMember {
    name: string;
    role: string;
}

const teamMembers: TeamMember[] = [
    { name: 'John Doe', role: 'Developer' },
    { name: 'Jane Smith', role: 'Designer' },
    { name: 'Mike Johnson', role: 'Project Manager' },
];

const TeamPage: React.FC = () => {
    return (
        <div style={{color: 'black'}}>
            <Navbar />
            <h1>Our Team</h1>
            <ul>
                {teamMembers.map((member, index) => (
                    <li key={index}>
                        <strong>{member.name}</strong> - {member.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamPage;