import React, { useState } from "react";

function Filter({ filter, setFilter }) {
    return (
        <div>
            <p>Search</p>
            <input
                value={filter || ""}
                type="search"
                placeholder={"Search name"}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}
export default Filter;
