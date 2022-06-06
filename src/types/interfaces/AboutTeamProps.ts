export interface IAboutTeamProps {
    heading: string,
    description: string,
    team: {
        image: string,
        name: string,
        position: string,
        posDesc:string,
        socials:string[]
    }[]
}