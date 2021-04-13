const Preferences = ({changeShape, style}) => {
    return (
        <div className = 'preferences-page'>
           <h4>Customize Board</h4>

        <div className='radio-control'>
          Piece shape
            <div>
                <input onChange = {()=>changeShape(document.querySelector('input[name="shape"]:checked').value)} defaultChecked={style.shape === 'circle'} type='radio' value ='circle' name='shape' />
                <label htmlFor='circle'> &nbsp;Round</label>
            </div>
            <div>
                <input onChange = {()=>changeShape(document.querySelector('input[name="shape"]:checked').value)} defaultChecked={style.shape === 'square'} name='shape' value='square' type='radio'  />
                <label htmlFor='square'> &nbsp;Square</label>
            </div>
        </div>
    
        </div>
    )
}

export default Preferences
