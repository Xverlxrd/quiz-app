export interface GameCardProps {
    title: string;
    variants: string[];
    correct: number;
    value: string[] | undefined;
    onChange: (selectedOptions: string[]) => void;
    disabled: boolean
}