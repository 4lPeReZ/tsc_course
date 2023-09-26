
export interface Power {
    id: number;
    name: string;
    description: string;
}

const powers: Power[] = [
    {   
        id: 1,
        name: 'flying',
        description: 'can fly'
    },
    {
        id: 2,
        name: 'teleporting',
        description: 'can teleport'
    },
    {
        id: 3,
        name: 'super strength',
        description: 'has super strength'
    },
    {
        id: 4,
        name: 'clairvoyance',
        description: 'can see the future'
    },
    {
        id: 5,
        name: 'mind reading',
        description: 'can read minds'
    }
];

export default powers;