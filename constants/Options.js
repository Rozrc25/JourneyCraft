export const SelectTravelerList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveler exploring the world on their own terms.',
        icon: '🧍',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'A romantic journey for two, perfect for couples.',
        icon: '❤️',
        people: '2'
    },
    {
        id: 3,
        title: 'Family Fun',
        desc: 'A family adventure filled with fun and excitement for all ages.',
        icon: '👨‍👩‍👧‍👦',
        people: '4'
    },
    {
        id: 4,
        title: 'Group Getaway',
        desc: 'An exciting trip for a group of friends or colleagues.',
        icon: '👥',
        people: '5+'
    }
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: 'Cheap',
        desc: 'Budget-friendly options for the thrifty traveler.',
        icon: '💸',
    },
    {
        id: 2,
        title: 'Mid-Range',
        desc: 'A balance of quality and affordability for the savvy traveler.',
        icon: '🏨',
    },{
        id: 3,
        title: 'Luxury',
        desc: 'High-end options for the discerning traveler.',
        icon: '🤑',
    }
]


export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} days and {totalNight} night for {traveler} with a {budget} budget with a flight details, Flight Price with Booking URL, Hotel option list with Hotel Name,Hotel Address, Price,hotel real image url,real geo coordinates, rating,description, and places to visit near by with placeName, place details, place real image URl,real geo coordinates, ticket priceing, time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON Format.';