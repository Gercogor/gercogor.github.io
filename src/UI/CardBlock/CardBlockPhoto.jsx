import React from 'react';
import CardPiece from "../CardPiece/CardPiece";

const CardBlockPhoto = ({items, id, toView}) => {
    return (
        <div id={id} className="gallery_card-block">
            {items.map((elem, i) => {
                    if (toView.includes(i)) {
                        return (
                            <CardPiece
                                fromSW={false}
                                id={i + 1}
                                key={i}
                                title={elem.title}
                                src={elem.thumbnailUrl}
                            />
                        )
                    }
                }
            )}
        </div>
    );
};

export default CardBlockPhoto;
