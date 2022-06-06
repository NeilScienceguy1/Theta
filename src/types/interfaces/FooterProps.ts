export interface IFooterProps {
	brand: string;
	tagline: string;
	contentLinks: {
		text: string;
		href: string;
	}[];
	dashboardLinks: {
		text: string;
		href: string;
	}[];
    chessLinks: {
        text: string, 
        href: string
    }[],
    contact: {
        phone: string,
        email: string
    }
}