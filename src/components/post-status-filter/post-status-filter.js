import React from "react";

import { Button } from "reactstrap";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color='info'>Все</Button>
            <Button outline color='dark'>Понравилось</Button>
        </div>
    )
}

export default  PostStatusFilter;