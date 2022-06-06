export interface ICardProps {
    mainText: string,
    mainSubText: string
    underline: string,
    description: string
    cards: {
        heading: string,
        description: string,
        href: string
    }[]
}