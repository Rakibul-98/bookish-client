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
        <div className='grid sm:grid-cols-1 xl:grid-cols-3 gap-16 mb-20'>
            {
                teamInfo.map(team=><TeamCard key={team.id} team={team}></TeamCard>)
            }
        </div>
    );
};

export default Teams;