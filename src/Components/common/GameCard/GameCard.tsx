import React, {FC} from 'react';
import {Checkbox, Space} from "antd";
import './GameCard.css'
import {GameCardProps} from "@/Components/common/GameCard/GameCardProps";

const GameCard:FC<GameCardProps> = ({ title, disabled, correct, variants, value, onChange }) => (
    <div className="game__card">
        <h1 className="game__card_title">{title}</h1>
        <Space size={"large"} className="game__card_variants">
            <Checkbox.Group
                className="game__card_variant"
                options={variants}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {disabled && (
                <div>
                    Правильный ответ {variants[correct]}
                </div>
            )}
        </Space>
    </div>
);

export default GameCard;