import React from 'react';
import TeamCard from './TeamCard';


const Teams = () => {
    const teamInfo = [
        {id:1, 
            img:"https://i.ibb.co/GpMp3S0/vecteezy-portrait-of-student-while-reading-book-in-school-library-11931868-988.jpg", 
            name:"Nare Jirair", 
            expertise:"Manager",
        },
        {id:2, 
            img:"https://i.ibb.co/c1mVrTD/vecteezy-portrait-of-happy-nerd-young-man-holding-books-in-his-hands-back-to-school-3492368.jpg", 
            name:"Talin Lucine", 
            expertise:"Book Keeper",
        },
        {id:3, 
            img:"https://i.ibb.co/gJDpSZ8/vecteezy-focused-serious-bearded-bald-male-holds-chin-reads-8166493-875.jpg", 
            name:"Kohar Bedros", 
            expertise:"Accountant"
        }
    ]
    return (
        <div className='text-center'>
            <p className='font-bold text-red-400'>TEAM</p>
            <h3 className='text-4xl font-bold mb-5'>Meet Our Team</h3>
            <p>Coming together is a beginning, <br /> staying together is progress, and working together is success.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 mt-10 mb-20'>
                {
                    teamInfo.map(team=><TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Teams;