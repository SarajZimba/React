import React from 'react'

const Department = () => {

    let dept_item = [{
        image: '245lady.jpg',
        text: 'Image 1'
    },
    {
        image: '630lady.jpg',
        text: 'Image 1'
    },
    {
        image: '640lady.jpg',
        text: 'Image 1'
    }]

    return (

        <div className="card-group">
            {
                dept_item.map(item => {
                    return (
                        <div className="card" >
                            <img src={`./${item.image}`} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{`${item.text}`}</h5>

                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    )
                })

            }
        </div>

    )
}

export default Department