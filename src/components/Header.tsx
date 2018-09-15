import * as React from 'react';

export interface IHeaderProps{
    localImageSrc?: string;
    onLineImageSrc?: string;
}

const Header: React.SFC<IHeaderProps>= (props: IHeaderProps) => {
    const { localImageSrc, onLineImageSrc }=props;
    return (
        <div>
            <img src={localImageSrc}/>
            <img src={onLineImageSrc}/>
        </div>
    )
};

export default Header;