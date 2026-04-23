import React, { use } from 'react';
import friends from '@/data/friends.json'
import FriendCard from '@/UI/FriendCard';



const FriendSection = () => {
    
    return (
        <div className='max-w-300 mx-auto px-3'>
            <h1 className='font-semibold text-[24px] '>Your Friends</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6  '>
                {
                    friends.map((friend)=>{
                        return (
                            <FriendCard key={friend.id} friend={friend}></FriendCard>
                        )
                    })

                }
            </div>
            
        </div>
    );
};

export default FriendSection;