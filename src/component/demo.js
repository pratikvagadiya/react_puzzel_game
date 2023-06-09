import React, { useEffect, useState } from 'react'

function Demo() {
    const [Select, setSelect] = useState()
    const [value, setValue] = useState();
    const [image, setImage] = useState([
        { id: 1, img: require('../image/number1.jpg') },
        { id: 2, img: require('../image/number2.jpg') },
        { id: 3, img: require('../image/number3.jpg') },
        { id: 4, img: require('../image/number4.jpg') },
        { id: 5, img: require('../image/number5.jpg') },
        { id: 6, img: require('../image/number6.jpg') },
        { id: 7, img: require('../image/number7.jpg') },
        { id: 8, img: require('../image/number8.jpg') },
        { id: 9, img: require('../image/number9.jpg') }
    ])

    const handleSide = (btn) => {
        if (Select) {
            if (btn === 'top_left') {
                let t_row = Select - 4;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx - 4
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'top') {
                let t_row = Select - 3;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx - 3
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'top_right') {
                let t_row = Select - 2;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx - 2
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'left') {
                let t_row = Select - 1;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx - 1
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'right') {
                let t_row = Select + 1;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx + 1
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'bottom_left') {
                let t_row = Select + 2;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx + 2
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'bottom') {
                let t_row = Select + 3;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx + 3
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
            else if (btn === 'bottom_right') {
                let t_row = Select + 4;
                let sel_inx = image.filter((item, i) => i === t_row)
                let cng_inx = image.filter((item, i) => i === Select)
                const selImg_inx = image.findIndex((item, i) => i === Select)
                const exImg_inx = image.findIndex((item, i) => i === Select)
                const fbi = exImg_inx + 4
                image[selImg_inx] = sel_inx[0]
                image[fbi] = cng_inx[0]
                setImage(image)
                setValue(true)
            }
        }
        else {
            alert('Please Select Image!')
        }
    }

    useEffect(() => {
        setValue(false)
    }, [value])


    return (
        <div>
            <div className='display_img'>
                {
                    image.map((item, i) => {
                        return (
                            <img
                                key={i}
                                className={i === Select ? 'select_img' : ''}
                                src={item.img}
                                onClick={(e) => setSelect(i)}
                            />
                        )
                    })
                }
            </div>

            <div className='btn_contant'>
                <div className='display_btn'>
                    <button onClick={(e) => handleSide('top_left')} disabled={Select === 0 || Select === 1 || Select === 2 || Select === 3 || Select === 6}>Top_Left</button>
                    <button onClick={(e) => handleSide('top')} disabled={Select === 0 || Select === 1 || Select === 2}>Top</button>
                    <button onClick={(e) => handleSide('top_right')} disabled={Select === 0 || Select === 8 || Select === 1 || Select === 2 || Select === 5}>Top_Right</button>
                </div>
                <div className='display_btn left'>
                    <button onClick={(e) => handleSide('left')} className='left' disabled={Select === 0 || Select === 3 || Select === 6}>Left</button>
                    <button onClick={(e) => handleSide('right')} disabled={Select === 8 || Select === 5 || Select === 2}>Right</button>
                </div>
                <div className='display_btn'>
                    <button onClick={(e) => handleSide('bottom_left')} disabled={Select === 0 || Select === 7 || Select === 8 || Select === 3 || Select === 6}>Bottom_left</button>
                    <button onClick={(e) => handleSide('bottom')} disabled={Select === 7 || Select === 8 || Select === 6}>Bottom</button>
                    <button onClick={(e) => handleSide('bottom_right')} disabled={Select === 6 || Select === 7 || Select === 8 || Select === 5 || Select === 2}>Bottom_Right</button>
                </div>
            </div>
        </div>
    )
}
export default Demo;