export interface GameCardProps {
    title: string;
    variants: string[];
    correct: string;
    value: string[] | undefined;
    onChange: (selectedOptions: string[]) => void;
    disabled: boolean
}