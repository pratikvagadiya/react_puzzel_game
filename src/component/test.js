import React, { useEffect, useState } from 'react'

function Test() {
    const [positionUpdate, setPositionUpdate] = useState(false)
    const [number, setNumber] = useState('')
    const [image, setImage] = useState([

        {
            0: [{ img: require('../image/number1.jpg') },
            { img: require('../image/number2.jpg') },
            { img: require('../image/number3.jpg') }
            ]
        },
        {
            1: [{ img: require('../image/number4.jpg') },
            { img: require('../image/number5.jpg') },
            { img: require('../image/number6.jpg') }
            ]
        },
        {
            2: [{ img: require('../image/number7.jpg') },
            { img: require('../image/number8.jpg') },
            { img: require('../image/number9.jpg') }
            ]
        }

    ])

    const shakePuzzel = (btn) => {
        if (number) {
            let arr = number.split('_')
            let row = Number(arr[0]);
            let col = Number(arr[1]);
            let tmpimg = image;
            if (btn === 't') {
                let pos = row - 1;
                if (row != 0) {
                    let oldPos = tmpimg[pos][pos][col].img;
                    tmpimg[pos][pos][col].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                }
                setPositionUpdate(true)
            } else if (btn === 't_l') {
                let posRow = row - 1;
                let posCol = col - 1
                if (row != 0 && col != 0) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            } else if (btn === 't_r') {
                let posRow = row - 1;
                let posCol = col + 1
                if (row != 0 && col != 2) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            } else if (btn === 'b') {
                let posRow = row + 1;
                let posCol = col;
                if (row != 2) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            } else if (btn === 'b_l') {
                let posRow = row + 1;
                let posCol = col - 1;
                if (row != 2 && col != 0) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            } else if (btn === 'r') {
                let posRow = row;
                let posCol = col + 1;
                if (col != 2) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            } else if (btn === 'l') {
                let posRow = row;
                let posCol = col - 1;
                if (col != 0) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            } else if (btn === 'b_r') {
                let posRow = row + 1;
                let posCol = col + 1;
                if (row != 2 && col != 2) {
                    let oldPos = tmpimg[posRow][posRow][posCol].img;
                    tmpimg[posRow][posRow][posCol].img = image[row][row][col].img;
                    tmpimg[row][row][col].img = oldPos;
                    setPositionUpdate(true)
                }
            }
        } else {
            alert('Please Select Image!')
        }
    }
    useEffect(() => {
        setPositionUpdate(false)
    }, [positionUpdate])
    return (
        <div>
            {
                image.map((item, i) => {
                    return (<div key={'' + i} className='display_img'>
                        {
                            item[i].map((obj, index) => {

                                return (
                                    <img
                                        key={'' + index}
                                        className={number === i + '_' + index ? 'select_img' : ''}
                                        src={obj.img}
                                        onClick={(e) => setNumber(i + '_' + index)}
                                    />
                                )
                            })
                        }
                    </div>)
                })
            }

            <div className='btn_contant'>
                <div className='display_btn'>
                    <button onClick={(e) => { shakePuzzel('t_l') }} >Top_Left</button>
                    <button onClick={(e) => { shakePuzzel('t') }}>Top</button>
                    <button onClick={(e) => { shakePuzzel('t_r') }}>Top_Right</button>
                </div>
                <div className='display_btn left'>
                    <button onClick={(e) => { shakePuzzel('l') }} className='left' >Left</button>
                    <button onClick={(e) => { shakePuzzel('r') }}>Right</button>
                </div>
                <div className='display_btn'>
                    <button onClick={(e) => { shakePuzzel('b_l') }}>Bottom_left</button>
                    <button onClick={(e) => { shakePuzzel('b') }}>Bottom</button>
                    <button onClick={(e) => { shakePuzzel('b_r') }}>Bottom_Right</button>
                </div>
            </div>
        </div>
    )
}
export default Test;