import React from 'react';
import CardPiece from "../CardPiece/CardPiece";

const CardBlockSW = ({items, id, toView}) => {
    return (
        <div id={id} className="gallery_card-block">
            {items.map((elem, i) => {
                    if (toView.includes(i)) {
                        return (
                            <CardPiece fromSW={true} id={i+1} key={i} title={elem.name} src={elem.gender}/>
                        )
                    }
                }
            )}
        </div>
    );
};

export default CardBlockSW;
