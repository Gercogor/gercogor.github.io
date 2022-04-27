import React from 'react';
import CardPiece from "../Card/Card";

const CardBlock = ({photos, id, toView}) => {
    return (
        <div id={id} className="gallery_card-block">
            {photos.map((elem, i) => {
                    if (toView.includes(i)) {
                        return (
                            <CardPiece id={i+1} key={i} title={elem.name} src={elem.gender}/>
                        )
                    }
                }
            )}
        </div>
    );
};

export default CardBlock;
